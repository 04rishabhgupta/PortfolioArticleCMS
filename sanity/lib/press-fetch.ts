import type { SanityClient } from 'sanity'

export type UnfurlResponse = {
  url: string
  domain: string
  headline?: string
  publicationName?: string
  publishedAt?: string
  excerpt?: string
  imageUrl?: string
  missing: string[]
}

export async function fetchArticleDetails(link: string): Promise<UnfurlResponse> {
  const res = await fetch(`/api/unfurl?url=${encodeURIComponent(link)}`)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'The details couldn’t be fetched. You can fill them in by hand.')
  return data as UnfurlResponse
}

/** Finds the matching Publication, creating it the first time a new outlet appears. */
export async function findOrCreatePublication(
  client: SanityClient,
  name: string | undefined,
  domain: string,
): Promise<string | undefined> {
  const existing = await client.fetch<string | null>(
    `*[_type == "publication" && !(_id in path("drafts.**")) && ($domain in domains || lower(name) == lower($name))][0]._id`,
    { domain, name: name || '' },
  )
  if (existing) return existing
  if (!name) return undefined
  const created = await client.create({
    _type: 'publication',
    name,
    domains: [domain],
    showInFeaturedStrip: false,
  })
  return created._id
}

/** Downloads the article's picture (via our server) and stores it in Sanity. */
export async function savePicture(client: SanityClient, imageUrl: string, domain: string): Promise<string | undefined> {
  const res = await fetch(`/api/unfurl/image?url=${encodeURIComponent(imageUrl)}`)
  if (!res.ok) return undefined
  const blob = await res.blob()
  const ext = (blob.type.split('/')[1] || 'jpg').replace('jpeg', 'jpg')
  const asset = await client.assets.upload('image', blob, {
    filename: `press-${domain.replace(/\./g, '-')}.${ext}`,
  })
  return asset._id
}

export async function requestArchive(link: string): Promise<string | undefined> {
  try {
    const res = await fetch('/api/archive', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: link }),
    })
    if (!res.ok) return undefined
    return (await res.json()).archiveUrl as string
  } catch {
    return undefined
  }
}

export function guessCategory(headline = ''): string | undefined {
  const h = headline.toLowerCase()
  if (/\b(appoint|appointed|appointment|named|nominated|elevated|takes charge|assumes charge|inducted)\b/.test(h)) return 'appointment'
  if (/\b(interview|in conversation|speaks to|q&a|talks to|says)\b/.test(h)) return 'interview'
  return undefined
}

export function isProbablyUrl(value: string | undefined): value is string {
  if (!value) return false
  try {
    const u = new URL(value)
    return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname.includes('.')
  } catch {
    return false
  }
}
