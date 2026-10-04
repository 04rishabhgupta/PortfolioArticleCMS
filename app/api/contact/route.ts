import { NextResponse } from 'next/server'
import { isSameOrigin } from '@/lib/safe-fetch'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/**
 * POST /api/contact → emails the message to Dr. Agarwal via Resend (free tier).
 * Needs RESEND_API_KEY and CONTACT_TO_EMAIL in the environment.
 */
export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: 'Not allowed.' }, { status: 403 })

  const body = (await req.json().catch(() => null)) as Record<string, string> | null
  if (!body) return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 400 })

  // Honeypot: pretend success so bots learn nothing.
  if (body.website) return NextResponse.json({ ok: true })

  const name = (body.name ?? '').trim().slice(0, 120)
  const email = (body.email ?? '').trim().slice(0, 200)
  const organisation = (body.organisation ?? '').trim().slice(0, 160)
  const topic = (body.topic ?? '').trim().slice(0, 80)
  const message = (body.message ?? '').trim().slice(0, 5000)

  if (!name || !message || message.length < 10) {
    return NextResponse.json({ error: 'Please add your name and a short message.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please check your email address. It looks incomplete.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.warn('[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set; message not sent.')
    return NextResponse.json(
      { error: 'The contact form isn’t switched on yet. Please use the email address on this page.' },
      { status: 503 },
    )
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'Website <onboarding@resend.dev>'
  const html = `
    <p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;${organisation ? `, ${escape(organisation)}` : ''}</p>
    <p><strong>About:</strong> ${escape(topic)}</p>
    <p style="white-space:pre-wrap">${escape(message)}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `${topic || 'Message'} from ${name}`,
      html,
      text: `${name} <${email}>${organisation ? `, ${organisation}` : ''}\nAbout: ${topic}\n\n${message}`,
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null)

  if (!res?.ok) {
    console.error('[contact] Resend failed', res?.status, await res?.text().catch(() => ''))
    return NextResponse.json({ error: 'Your message couldn’t be sent. Please try again, or use the email address instead.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
