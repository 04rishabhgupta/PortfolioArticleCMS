'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, LinkIcon } from './Icons'

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  // On phones, one "Share" button opens the phone's own share sheet (WhatsApp, Messages, Mail…).
  const [native, setNative] = useState(false)
  useEffect(() => {
    setNative(typeof navigator.share === 'function' && matchMedia('(max-width: 600px)').matches)
  }, [])

  const enc = encodeURIComponent
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  const share = () => navigator.share({ title, url }).catch(() => {})

  const copyButton = (
    <button type="button" className="share__btn" onClick={copy} aria-live="polite">
      {copied ? <><Check size={14} /> Copied</> : <><LinkIcon size={14} /> Copy link</>}
    </button>
  )

  if (native) {
    return (
      <div className="share" aria-label="Share this article">
        <button type="button" className="share__btn" onClick={share}>
          <ArrowUpRight size={14} /> Share
        </button>
        {copyButton}
      </div>
    )
  }

  return (
    <div className="share" aria-label="Share this article">
      <a className="share__btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="share__btn" href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noreferrer">X</a>
      <a className="share__btn" href={`https://wa.me/?text=${enc(`${title} ${url}`)}`} target="_blank" rel="noreferrer">WhatsApp</a>
      {copyButton}
    </div>
  )
}
