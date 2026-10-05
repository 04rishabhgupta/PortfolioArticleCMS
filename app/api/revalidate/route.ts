import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Content types whose pages this site caches. Each one is also a cache tag (see sanityFetch). */
const KNOWN_TYPES = new Set(['profile', 'siteSettings', 'pressMention', 'publication', 'article'])

/**
 * POST /api/revalidate
 * Called by a Sanity webhook whenever something is published, changed or deleted,
 * so the live site shows it within seconds instead of on the next hourly refresh.
 * Signed with SANITY_REVALIDATE_SECRET, so only Sanity can trigger it.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    console.error('[revalidate] SANITY_REVALIDATE_SECRET is not set')
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  try {
    // `true` waits until the change is readable from Sanity before we refresh.
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true)
    if (!isValidSignature) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })

    const type = body?._type
    if (!type || !KNOWN_TYPES.has(type)) return NextResponse.json({ revalidated: false, reason: 'Unknown type' })

    // Article pages show the publication name of op-eds, so a renamed publication refreshes them too.
    const tags = type === 'publication' ? ['publication', 'article'] : [type]
    for (const tag of tags) revalidateTag(tag, { expire: 0 })

    return NextResponse.json({ revalidated: true, tags })
  } catch (err) {
    console.error('[revalidate] failed', err)
    return NextResponse.json({ error: 'Could not refresh' }, { status: 500 })
  }
}
