import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'

/**
 * Fetching arbitrary URLs from a server is risky: someone could point it at
 * internal addresses. Every hop (including redirects) is checked so that
 * only public internet addresses are ever requested.
 */

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-IN,en;q=0.9',
}

function isPrivateAddress(ip: string): boolean {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split('.').map(Number)
    return (
      a === 0 || a === 10 || a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 198 && (b === 18 || b === 19)) ||
      a >= 224
    )
  }
  const v6 = ip.toLowerCase()
  if (v6.startsWith('::ffff:')) return isPrivateAddress(v6.slice(7))
  return v6 === '::' || v6 === '::1' || v6.startsWith('fc') || v6.startsWith('fd') || v6.startsWith('fe80')
}

export class FetchProblem extends Error {
  constructor(message: string, public status = 400) {
    super(message)
  }
}

export function parsePublicUrl(raw: string): URL {
  let url: URL
  try {
    url = new URL(raw.trim())
  } catch {
    throw new FetchProblem('That doesn’t look like a web link. Copy it from the browser’s address bar and try again.')
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new FetchProblem('Only web links starting with http:// or https:// can be added.')
  }
  if (url.username || url.password) throw new FetchProblem('Links containing passwords can’t be fetched.')
  return url
}

async function assertPublicHost(url: URL) {
  const host = url.hostname.replace(/^\[|\]$/g, '')
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal')) {
    throw new FetchProblem('That address isn’t on the public internet.')
  }
  const addresses = isIP(host) ? [{ address: host }] : await lookup(host, { all: true }).catch(() => [])
  if (addresses.length === 0) throw new FetchProblem('That website couldn’t be found. Check the link and try again.')
  if (addresses.some((a) => isPrivateAddress(a.address))) {
    throw new FetchProblem('That address isn’t on the public internet.')
  }
}

/** Fetch a public URL, following up to 5 redirects, each one re-checked. */
export async function safeFetch(rawUrl: string, init: { accept?: string; timeoutMs?: number } = {}) {
  let url = parsePublicUrl(rawUrl)
  for (let hop = 0; hop < 6; hop++) {
    await assertPublicHost(url)
    const res = await fetch(url, {
      redirect: 'manual',
      headers: { ...BROWSER_HEADERS, ...(init.accept ? { Accept: init.accept } : {}) },
      signal: AbortSignal.timeout(init.timeoutMs ?? 10_000),
    })
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      url = parsePublicUrl(new URL(res.headers.get('location')!, url).toString())
      continue
    }
    return { res, finalUrl: url }
  }
  throw new FetchProblem('That link redirects too many times.')
}

/** Read a response body with a size cap, so huge files can’t exhaust memory. */
export async function readLimited(res: Response, maxBytes: number): Promise<Uint8Array> {
  const reader = res.body?.getReader()
  if (!reader) return new Uint8Array()
  const chunks: Uint8Array[] = []
  let total = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    total += value.byteLength
    if (total > maxBytes) {
      await reader.cancel()
      throw new FetchProblem('That file is too large.', 413)
    }
    chunks.push(value)
  }
  const out = new Uint8Array(total)
  let offset = 0
  for (const c of chunks) {
    out.set(c, offset)
    offset += c.byteLength
  }
  return out
}

/** Only allow these endpoints to be called from the site itself (the Studio). */
export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin') || req.headers.get('referer')
  if (!origin) return false
  try {
    const from = new URL(origin).host
    const hosts = [new URL(req.url).host, req.headers.get('x-forwarded-host'), req.headers.get('host')]
    return hosts.some((h) => h && h === from)
  } catch {
    return false
  }
}
