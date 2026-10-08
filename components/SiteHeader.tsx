'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Close, Menu } from './Icons'
import { ThemeToggle } from './ThemeToggle'

const NAV = [
  { href: '/writing', label: 'Writing' },
  { href: '/press', label: 'In the Press' },
  { href: '/about', label: 'About' },
  { href: '/speaking', label: 'Speaking' },
]

export function SiteHeader({ name }: { name: string }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="signature-link" aria-label={`${name}, home`}>
  <span className="site-header__name">Dr. Nikhil Agarwal</span>
</Link>
        <nav aria-label="Main" className="nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="nav__link" aria-current={isActive(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn--outline btn--sm" aria-current={isActive('/contact') ? 'page' : undefined}>
            Get in touch
          </Link>
          <ThemeToggle />
        </nav>
        <div className="nav-mobile-actions">
          <ThemeToggle />
          <button type="button" className="icon-btn" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" data-open={open} hidden={!open}>
        <nav aria-label="Main" className="wrap mobile-menu__nav">
          {[...NAV, { href: '/contact', label: 'Get in touch' }].map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
