'use client'

import { useEffect, useRef } from 'react'

/** A thin line under the header that fills as you read. */
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const progress = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
      frame = 0
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return (
    <div className="progress" aria-hidden="true">
      <div ref={bar} className="progress__bar" />
    </div>
  )
}
