import { after, NextResponse } from 'next/server'
import { isSameOrigin, parsePublicUrl } from '@/lib/safe-fetch'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

/**
 * POST /api/archive {url}
 * Asks the Internet Archive to save a copy of the article, so it survives if
 * the news site ever deletes or moves it. Returns straight away with the
 * address of the archived copy; the actual saving happens in the background.
 */
export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: 'Not allowed.' }, { status: 403 })
  let url: URL
  try {
    const body = (await req.json()) as { url?: string }
    url = parsePublicUrl(body.url || '')
  } catch {
    return NextResponse.json({ error: 'Invalid link.' }, { status: 400 })
  }

  after(async () => {
    try {
      await fetch(`https://web.archive.org/save/${url.toString()}`, {
        method: 'GET',
        headers: { 'User-Agent': 'NikhilAgarwalSite/1.0 (archiving press coverage)' },
        signal: AbortSignal.timeout(55_000),
      })
    } catch {
      // The archive is best-effort; the original link still works.
    }
  })

  // "/web/2/" always redirects to the most recent saved copy.
  return NextResponse.json({ archiveUrl: `https://web.archive.org/web/2/${url.toString()}` })
}
