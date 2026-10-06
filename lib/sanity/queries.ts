import { groq } from 'next-sanity'
import type { PortableTextBlock } from 'next-sanity'

export type SanityImage = {
  asset?: { _ref?: string; _id?: string; metadata?: { lqip?: string; dimensions?: { width: number; height: number } } }
  hotspot?: { x: number; y: number }
  crop?: unknown
  alt?: string
  caption?: string
  credit?: string
}

export type Publication = { _id: string; name: string; logo?: SanityImage }

export type PressItem = {
  _id: string
  url: string
  headline: string
  publishedAt?: string
  category?: 'appointment' | 'interview' | 'feature' | 'mention'
  excerpt?: string
  image?: SanityImage
  featured?: boolean
  archiveUrl?: string
  publication?: Publication
}

export type ArticleSummary = {
  _id: string
  title: string
  slug: string
  standfirst?: string
  kind?: string
  topic?: string
  publishedAt: string
  coverImage?: SanityImage
  featured?: boolean
  readingMinutes?: number
  hasBody?: boolean
  originallyPublished?: { url?: string; publication?: { name?: string } }
}

export type Article = ArticleSummary & { body?: PortableTextBlock[] }

export type Profile = {
  name?: string
  positioning?: string
  portrait?: SanityImage
  shortBio?: string
  fullBio?: PortableTextBlock[]
  currentRoles?: { _key: string; label?: string; title: string; organisation?: string }[]
  timeline?: { _key: string; year: string; title: string; organisation?: string; highlight?: boolean }[]
  contactEmail?: string
  socials?: { linkedin?: string; x?: string }
}

export type Settings = {
  title?: string
  description?: string
  shareImage?: SanityImage
  mediaKitUrl?: string
}

const image = groq`{ ..., asset->{ _id, metadata { lqip, dimensions } } }`

const pressFields = groq`
  _id, url, headline, publishedAt, category, excerpt, featured, archiveUrl,
  image ${image},
  publication->{ _id, name, logo }
`

// Articles with a future publish date stay hidden until that date.
const liveArticle = groq`_type == "article" && defined(slug.current) && publishedAt <= now()`

const articleSummaryFields = groq`
  _id, title, "slug": slug.current, standfirst, kind, topic, publishedAt, featured,
  coverImage ${image},
  originallyPublished { url, publication->{ name } },
  "hasBody": count(body) > 0,
  "readingMinutes": round(length(pt::text(body)) / 5 / 220)
`

export const profileQuery = groq`*[_id == "profile"][0]{ ..., portrait ${image} }`

export const settingsQuery = groq`*[_id == "siteSettings"][0]{ title, description, shareImage, "mediaKitUrl": mediaKit.asset->url }`

export const pressQuery = groq`*[_type == "pressMention" && defined(headline) && defined(url)]
  | order(featured desc, publishedAt desc) { ${pressFields} }`

// "As featured in": every publication that has covered him or run one of his pieces, plus any he
// switched on by hand. Those that appear most often come first.
export const featuredPublicationsQuery = groq`*[_type == "publication"]{
  _id, name, logo, showInFeaturedStrip,
  "uses": count(*[((_type == "pressMention" && defined(headline) && defined(url)) || (${liveArticle})) && references(^._id)])
}[uses > 0 || showInFeaturedStrip == true] | order(uses desc, name asc) { _id, name, logo }`

export const articlesQuery = groq`*[${liveArticle}] | order(publishedAt desc) { ${articleSummaryFields} }`

export const articleQuery = groq`*[${liveArticle} && slug.current == $slug][0]{
  ${articleSummaryFields},
  body[]{ ..., _type == "image" => ${image} }
}`

export const articleSlugsQuery = groq`*[${liveArticle}].slug.current`

export const relatedArticlesQuery = groq`*[${liveArticle} && slug.current != $slug] | order(publishedAt desc)[0...2] { ${articleSummaryFields} }`
