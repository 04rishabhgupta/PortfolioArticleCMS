import type { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity/client'
import { siteUrl } from '@/sanity/env'

type Entry = { slug: string; _updatedAt: string }

const sitemapQuery = `*[_type == "article" && defined(slug.current) && publishedAt <= now()]{ "slug": slug.current, _updatedAt }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await sanityFetch<Entry[]>(sitemapQuery, {}, ['article'], [])
  const pages = ['', '/press', '/writing', '/about', '/speaking', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: (path === '' || path === '/press' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
  return [
    ...pages,
    ...articles.map((a) => ({ url: `${siteUrl}/writing/${a.slug}`, lastModified: a._updatedAt, priority: 0.6 })),
  ]
}
