import { createClient, type QueryParams } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Pages are cached by Next.js, so Sanity is asked rarely. Skipping Sanity's CDN means a
  // page refreshed by the publish webhook always gets the newest content, not a stale copy.
  useCdn: false,
  perspective: 'published',
})

const builder = createImageUrlBuilder({ projectId, dataset })
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source).auto('format')

/**
 * Fetches from Sanity with cache tags, so the Day 3 webhook can refresh
 * exactly the pages that changed. Pages also refresh hourly on their own,
 * which is what makes scheduled articles appear on time.
 * Never throws: if Sanity can't be reached, the page renders with fallbacks.
 */
export async function sanityFetch<T>(query: string, params: QueryParams = {}, tags: string[] = [], fallback: T): Promise<T> {
  if (process.env.MOCK_CONTENT === '1' && process.env.NODE_ENV !== 'production' || process.env.MOCK_CONTENT === 'force') {
    const { mockFor } = await import('./mock')
    return ((mockFor(query, params) as T) ?? fallback)
  }
  try {
    const result = await client.fetch<T>(query, params, { next: { revalidate: 3600, tags } })
    return result ?? fallback
  } catch (err) {
    console.error('[sanity] fetch failed:', err instanceof Error ? err.message : err)
    return fallback
  }
}
