'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from './Icons'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined
    setTheme(current ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

/** Runs before the page paints, so there's no flash of the wrong theme. */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}})()`
