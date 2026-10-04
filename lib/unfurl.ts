import ogs from 'open-graph-scraper'
import { lookupPublication, normaliseDomain } from './publications'
import { FetchProblem, readLimited, safeFetch } from './safe-fetch'

export type UnfurlResult = {
  url: string
  domain: string
  headline?: string
  publicationName?: string
  publishedAt?: string // YYYY-MM-DD
  excerpt?: string
  imageUrl?: string
  /** Fields we couldn't find, so the Studio can point them out. */
  missing: string[]
}

type JsonLdNode = Record<string, unknown>

const ARTICLE_TYPES = /article|newsarticle|reportage|blogposting|webpage/i

function flattenJsonLd(nodes: unknown[]): JsonLdNode[] {
  const out: JsonLdNode[] = []
  const walk = (n: unknown) => {
    if (!n || typeof n !== 'object') return
    if (Array.isArray(n)) return n.forEach(walk)
    const node = n as JsonLdNode
    out.push(node)
    if (Array.isArray(node['@graph'])) (node['@graph'] as unknown[]).forEach(walk)
  }
  nodes.forEach(walk)
  return out
}

function str(v: unknown): string | undefined {
  if (typeof v === 'string' && v.trim()) return v.trim()
  if (Array.isArray(v)) return str(v[0])
  if (v && typeof v === 'object' && 'url' in v) return str((v as { url: unknown }).url)
  return undefined
}

function toIsoDate(v?: string): string | undefined {
  if (!v) return undefined
  const d = new Date(v)
  if (Number.isNaN(d.getTime())) return undefined
  if (d.getTime() > Date.now() + 86_400_000) return undefined // reject future dates
  // Use Indian time so an article published at 1am IST gets the right day.
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(d)
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
}

/** "Headline | The Economic Times" → "Headline" */
function cleanHeadline(title: string, publication?: string): string {
  let t = decodeEntities(title).replace(/\s+/g, ' ').trim()
  const parts = t.split(/\s+[|\-–—:]\s+/)
  if (parts.length > 1) {
    const last = parts[parts.length - 1].toLowerCase()
    const pub = (publication || '').toLowerCase()
    const looksLikeSiteName =
      (pub && (last.includes(pub) || pub.includes(last))) ||
      /news|times|express|today|standard|mint|hindu|india|\.com|\.in/.test(last)
    if (looksLikeSiteName && parts.slice(0, -1).join(' ').length > 15) {
      t = t.slice(0, t.lastIndexOf(parts[parts.length - 1])).replace(/\s+[|\-–—:]\s*$/, '').trim()
    }
  }
  return t
}

function cleanExcerpt(text?: string): string | undefined {
  if (!text) return undefined
  const t = decodeEntities(text).replace(/\s+/g, ' ').trim()
  if (t.length <= 280) return t
  const cut = t.slice(0, 280)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

export async function unfurl(rawUrl: string): Promise<UnfurlResult> {
  const { res, finalUrl } = await safeFetch(rawUrl)
  if (!res.ok) {
    if (res.status === 403 || res.status === 401) {
      throw new FetchProblem(
        'This news site blocked the automatic fetch. You can still add it — just fill in the details by hand.',
        422,
      )
    }
    throw new FetchProblem(`The news site responded with an error (${res.status}). Check the link opens in your browser.`, 422)
  }
  const type = res.headers.get('content-type') || ''
  if (!type.includes('html')) {
    throw new FetchProblem('That link isn’t a web page (it might be a PDF or image). Fill in the details by hand.', 422)
  }

  const html = new TextDecoder().decode(await readLimited(res, 4_000_000))
  return extractDetails(html, finalUrl)
}

/** Pulls article details out of a page's HTML. Separate so it can be tested offline. */
export async function extractDetails(html: string, finalUrl: URL): Promise<UnfurlResult> {
  const { result: og } = await ogs({ html })

  const domain = normaliseDomain(finalUrl.hostname)
  const ld = flattenJsonLd((og.jsonLD as unknown[]) || [])
  const article = ld.find((n) => ARTICLE_TYPES.test(String(n['@type'] ?? ''))) || {}
  const publisher = (article.publisher as JsonLdNode | undefined) || ld.find((n) => /organization/i.test(String(n['@type'] ?? '')))

  const publicationName =
    lookupPublication(finalUrl.hostname) || og.ogSiteName || str(publisher?.name) || undefined

  const rawTitle = str(article.headline) || og.ogTitle || og.twitterTitle || og.dcTitle
  const headline = rawTitle ? cleanHeadline(rawTitle, publicationName) : undefined

  const publishedAt = toIsoDate(
    str(article.datePublished) ||
      og.articlePublishedTime ||
      og.ogDate ||
      og.dcDate ||
      str(article.dateCreated),
  )

  const excerpt = cleanExcerpt(og.ogDescription || og.twitterDescription || str(article.description) || og.dcDescription)

  let imageUrl = og.ogImage?.[0]?.url || og.twitterImage?.[0]?.url || str(article.image)
  if (imageUrl) {
    try {
      imageUrl = new URL(imageUrl, finalUrl).toString()
    } catch {
      imageUrl = undefined
    }
  }

  const result: UnfurlResult = {
    url: finalUrl.toString(),
    domain,
    headline,
    publicationName,
    publishedAt,
    excerpt,
    imageUrl,
    missing: [],
  }
  for (const [key, label] of [
    ['headline', 'headline'],
    ['publicationName', 'publication'],
    ['publishedAt', 'date'],
    ['excerpt', 'excerpt'],
    ['imageUrl', 'picture'],
  ] as const) {
    if (!result[key]) result.missing.push(label)
  }
  return result
}
