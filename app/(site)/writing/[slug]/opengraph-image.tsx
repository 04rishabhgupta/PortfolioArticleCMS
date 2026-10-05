import { FALLBACK_NAME } from '@/lib/format'
import { OG_SIZE, shareCard, siteHost } from '@/lib/og'
import { sanityFetch } from '@/lib/sanity/client'
import { type Article, articleQuery, type Profile, profileQuery } from '@/lib/sanity/queries'
import { siteUrl } from '@/sanity/env'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Article by Dr. Nikhil Agarwal'

/** The picture shown when someone shares one of his articles. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [article, profile] = await Promise.all([
    sanityFetch<Article | null>(articleQuery, { slug }, ['article'], null),
    sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null),
  ])
  return shareCard({
    title: article?.title || 'Writing',
    kicker: [article?.kind, article?.topic].filter(Boolean).join(', ') || undefined,
    footer: profile?.name || FALLBACK_NAME,
    site: siteHost(siteUrl),
  })
}
