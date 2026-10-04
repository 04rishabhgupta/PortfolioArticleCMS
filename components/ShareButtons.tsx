'use client'

import { useState } from 'react'
import { Check, LinkIcon } from './Icons'

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  return (
    <div className="share" aria-label="Share this article">
      <a className="share__btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="share__btn" href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noreferrer">X</a>
      <a className="share__btn" href={`https://wa.me/?text=${enc(`${title} ${url}`)}`} target="_blank" rel="noreferrer">WhatsApp</a>
      <button type="button" className="share__btn" onClick={copy} aria-live="polite">
        {copied ? <><Check size={14} /> Copied</> : <><LinkIcon size={14} /> Copy link</>}
      </button>
    </div>
  )
}
