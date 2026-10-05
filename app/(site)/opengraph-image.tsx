import { ImageResponse } from 'next/og'
import { FALLBACK_NAME } from '@/lib/format'
import { OG_SIZE, shareCard, siteHost } from '@/lib/og'
import { sanityFetch, urlFor } from '@/lib/sanity/client'
import { type Profile, profileQuery, type Settings, settingsQuery } from '@/lib/sanity/queries'
import { siteUrl } from '@/sanity/env'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Dr. Nikhil Agarwal'

/** The default share picture for every page. Uses the one uploaded in Site settings, if any. */
export default async function Image() {
  const [settings, profile] = await Promise.all([
    sanityFetch<Settings | null>(settingsQuery, {}, ['siteSettings'], null),
    sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null),
  ])

  if (settings?.shareImage?.asset) {
    const src = urlFor(settings.shareImage).width(OG_SIZE.width).height(OG_SIZE.height).fit('crop').format('jpg').url()
    // eslint-disable-next-line @next/next/no-img-element
    return new ImageResponse(<img src={src} width={OG_SIZE.width} height={OG_SIZE.height} alt="" />, OG_SIZE)
  }

  const role = profile?.currentRoles?.[0]
  return shareCard({
    title: profile?.name || FALLBACK_NAME,
    kicker: role ? [role.title, role.organisation].filter(Boolean).join(', ') : 'Additional Director, Hindustan Aeronautics Limited',
    footer: profile?.positioning || 'Writing, press coverage and speaking',
    site: siteHost(siteUrl),
  })
}
