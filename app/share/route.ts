import { NextResponse } from 'next/server'
import { cleanLink, firstLink } from '@/lib/links'

export const dynamic = 'force-dynamic'

/**
 * GET /share?url=…  (or ?text=… with a link somewhere inside)
 * The address the iPhone Shortcut opens. It sends the shared news link straight
 * into a new "Press coverage" entry in the Studio, where the details fill in by
 * themselves. Without a link, it just opens the Studio home.
 */
export function GET(req: Request) {
  const params = new URL(req.url).searchParams
  const found = [params.get('url'), params.get('text')].map((v) => (v ? firstLink(v) : undefined)).find(Boolean)
  if (!found) return NextResponse.redirect(new URL('/studio', req.url), 303)

  // The Studio reads template values from a base64url-encoded JSON path segment.
  const payload = Buffer.from(JSON.stringify({ url: cleanLink(found) })).toString('base64url')
  const target = `/studio/intent/create/template=pressMention-from-link;type=pressMention/${payload}`
  return NextResponse.redirect(new URL(target, req.url), 303)
}
