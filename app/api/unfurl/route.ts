import { NextResponse } from 'next/server'
import { FetchProblem, isSameOrigin } from '@/lib/safe-fetch'
import { unfurl } from '@/lib/unfurl'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** GET /api/unfurl?url=… → headline, publication, date, excerpt and picture for a news link. */
export async function GET(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: 'Not allowed.' }, { status: 403 })
  const url = new URL(req.url).searchParams.get('url')
  if (!url) return NextResponse.json({ error: 'Paste a link first.' }, { status: 400 })
  try {
    return NextResponse.json(await unfurl(url))
  } catch (err) {
    if (err instanceof FetchProblem) return NextResponse.json({ error: err.message }, { status: err.status })
    if (err instanceof Error && err.name === 'TimeoutError') {
      return NextResponse.json(
        { error: 'The news site took too long to respond. Try again, or fill in the details by hand.' },
        { status: 504 },
      )
    }
    console.error('unfurl failed', err)
    return NextResponse.json(
      { error: 'The details couldn’t be fetched. You can fill them in by hand.' },
      { status: 500 },
    )
  }
}
