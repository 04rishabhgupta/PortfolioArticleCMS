'use client'

import { type FormEvent, useState } from 'react'
import { Check } from './Icons'

type State = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string }

const TOPICS = ['Speaking invitation', 'Media or interview request', 'Board or professional enquiry', 'Something else']

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: 'idle' })

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setState({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Your message couldn’t be sent. Please try again, or use the email address instead.')
      form.reset()
      setState({ kind: 'sent' })
    } catch (err) {
      setState({ kind: 'error', message: err instanceof Error ? err.message : 'Your message couldn’t be sent.' })
    }
  }

  if (state.kind === 'sent') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon"><Check size={22} /></span>
        <div>
          <p className="form-success__title">Message sent.</p>
          <p>Thank you for writing. You’ll receive a reply by email.</p>
          <button type="button" className="link-strong as-button" onClick={() => setState({ kind: 'idle' })}>Send another message</button>
        </div>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <div className="field-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" maxLength={200} />
        </label>
      </div>
      <label className="field">
        <span>Organisation <em>(optional)</em></span>
        <input name="organisation" autoComplete="organization" maxLength={160} />
      </label>
      <label className="field">
        <span>What is this about?</span>
        <select name="topic" defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" required rows={6} minLength={10} maxLength={5000} />
      </label>
      {/* Hidden from people; bots tend to fill it in, which lets us ignore them. */}
      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state.kind === 'error' && <p className="form-error" role="alert">{state.message}</p>}
      <button type="submit" className="btn btn--primary" disabled={state.kind === 'sending'}>
        {state.kind === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
