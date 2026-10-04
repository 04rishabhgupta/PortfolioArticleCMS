import { FetchProblem, isSameOrigin, readLimited, safeFetch } from '@/lib/safe-fetch'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_IMAGE_BYTES = 10_000_000

/**
 * GET /api/unfurl/image?url=… → the image bytes.
 * Browsers can't download most news-site images directly (cross-origin
 * rules), so the Studio fetches them through here and saves them to Sanity.
 */
export async function GET(req: Request) {
  if (!isSameOrigin(req)) return new Response('Not allowed.', { status: 403 })
  const url = new URL(req.url).searchParams.get('url')
  if (!url) return new Response('Missing url.', { status: 400 })
  try {
    const { res } = await safeFetch(url, { accept: 'image/avif,image/webp,image/*;q=0.8', timeoutMs: 15_000 })
    const type = res.headers.get('content-type') || ''
    if (!res.ok || !type.startsWith('image/') || type.includes('svg')) {
      return new Response('That picture couldn’t be downloaded.', { status: 422 })
    }
    const bytes = await readLimited(res, MAX_IMAGE_BYTES)
    return new Response(new Blob([bytes as BlobPart], { type }), { headers: { 'Content-Type': type, 'Cache-Control': 'no-store' } })
  } catch (err) {
    const status = err instanceof FetchProblem ? err.status : 500
    return new Response('That picture couldn’t be downloaded.', { status })
  }
}
