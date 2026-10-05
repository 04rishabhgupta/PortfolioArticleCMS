import { FALLBACK_NAME } from '@/lib/format'
import { urlFor } from '@/lib/sanity/client'
import type { Article, Profile } from '@/lib/sanity/queries'
import { siteUrl } from '@/sanity/env'

/** Structured data that helps Google show his name, photo and articles properly. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escaping "<" stops any text from closing the script tag early.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

const clean = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && !v.length)))

/** Only facts from his Profile; nothing is filled in when a field is empty. */
export function personData(profile: Profile | null) {
  const role = profile?.currentRoles?.[0]
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: profile?.name || FALLBACK_NAME,
    url: siteUrl,
    description: profile?.shortBio,
    jobTitle: role?.title,
    worksFor: role?.organisation ? { '@type': 'Organization', name: role.organisation } : undefined,
    image: profile?.portrait?.asset ? urlFor(profile.portrait).width(800).url() : undefined,
    sameAs: [profile?.socials?.linkedin, profile?.socials?.x].filter(Boolean),
  })
}

export function articleData(article: Article, profile: Profile | null, slug: string) {
  const url = `${siteUrl}/writing/${slug}`
  return clean({
    '@context': 'https://schema.org',
    '@type': article.kind === 'Op-ed' || article.kind === 'Opinion' ? 'OpinionNewsArticle' : 'Article',
    headline: article.title,
    description: article.standfirst,
    datePublished: article.publishedAt,
    url,
    mainEntityOfPage: url,
    image: article.coverImage?.asset ? urlFor(article.coverImage).width(1200).url() : `${url}/opengraph-image`,
    author: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: profile?.name || FALLBACK_NAME, url: siteUrl },
    isBasedOn: article.originallyPublished?.url,
  })
}
