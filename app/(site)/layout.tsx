import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { FALLBACK_NAME } from '@/lib/format'
import { sanityFetch } from '@/lib/sanity/client'
import { type Profile, profileQuery, type Settings, settingsQuery } from '@/lib/sanity/queries'
import { siteUrl } from '@/sanity/env'
import { geist, newsreader } from '../fonts'
import './site.css'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<Settings | null>(settingsQuery, {}, ['siteSettings'], null)
  const title = settings?.title || FALLBACK_NAME
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${title}` },
    description: settings?.description || undefined,
    openGraph: { type: 'website', siteName: title, locale: 'en_IN', title, description: settings?.description || undefined },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const profile = await sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null)
  const name = profile?.name || FALLBACK_NAME
  return (
    <div className={`site ${newsreader.variable} ${geist.variable}`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader name={name} />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter profile={profile} name={name} />
    </div>
  )
}
