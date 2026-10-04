import Link from 'next/link'
import type { Profile } from '@/lib/sanity/queries'

export function SiteFooter({ profile, name }: { profile: Profile | null; name: string }) {
  const email = profile?.contactEmail
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <Link href="/" className="wordmark">{name.replace(/^Dr\.?\s+/i, '')}</Link>
        <ul className="site-footer__links">
          {profile?.socials?.linkedin && <li><a href={profile.socials.linkedin} rel="me noreferrer" target="_blank">LinkedIn</a></li>}
          {profile?.socials?.x && <li><a href={profile.socials.x} rel="me noreferrer" target="_blank">X</a></li>}
          {email && <li><a href={`mailto:${email}`}>Email</a></li>}
          <li><Link href="/speaking">Media kit</Link></li>
        </ul>
        <p className="site-footer__small">© {year} {name}</p>
      </div>
    </footer>
  )
}
