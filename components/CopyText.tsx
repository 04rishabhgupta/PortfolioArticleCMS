'use client'

import { useState } from 'react'

export function CopyText({ text, label = 'Copy text' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      className="btn btn--outline btn--sm"
      aria-live="polite"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {}
      }}
    >
      {copied ? 'Copied' : label}
    </button>
  )
}
