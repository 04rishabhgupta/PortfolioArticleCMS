import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArticleBody } from '@/components/ArticleBody'
import { ArticleItem } from '@/components/Articles'
import { ArrowUpRight } from '@/components/Icons'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SanityImg } from '@/components/SanityImg'
import { ShareButtons } from '@/components/ShareButtons'
import { FALLBACK_NAME, formatDate, readingTime } from '@/lib/format'
import { sanityFetch } from '@/lib/sanity/client'
import {
  type Article,
  type ArticleSummary,
  articleQuery,
  articleSlugsQuery,
  type Profile,
  profileQuery,
  relatedArticlesQuery,
} from '@/lib/sanity/queries'
import { siteUrl } from '@/sanity/env'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(articleSlugsQuery, {}, ["article"], [])
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const a = await sanityFetch<Article | null>(articleQuery, { slug }, ['article'], null)
  if (!a) return {}
  return { title: a.title, description: a.standfirst, alternates: { canonical: `/writing/${slug}` } }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  const [article, related, profile] = await Promise.all([
    sanityFetch<Article | null>(articleQuery, { slug }, ['article'], null),
    sanityFetch<ArticleSummary[]>(relatedArticlesQuery, { slug }, ['article'], []),
    sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null),
  ])
  if (!article) notFound()

  const name = profile?.name || FALLBACK_NAME
  const kicker = [article.kind, article.topic].filter(Boolean).join(', ')
  const original = article.originallyPublished

  return (
    <>
      <ReadingProgress />
      <article className="article">
        <header className="article__head measure-wide">
          {kicker && <p className="kicker">{kicker}</p>}
          <h1 className="article__title">{article.title}</h1>
          {article.standfirst && <p className="article__standfirst">{article.standfirst}</p>}
          <div className="article__byline">
            <div className="byline">
              <SanityImg image={profile?.portrait} ratio={1} sizes="48px" className="byline__avatar" alt="" />
              <div>
                <p className="byline__name">{name}</p>
                <p className="byline-small">
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  {article.hasBody && <span>{readingTime(article.readingMinutes)}</span>}
                </p>
              </div>
            </div>
            <ShareButtons url={`${siteUrl}/writing/${slug}`} title={article.title} />
          </div>
        </header>

        {article.coverImage?.asset && (
          <figure className="article__cover wrap">
            <SanityImg image={article.coverImage} ratio={2} sizes="(min-width: 1200px) 1100px, 100vw" priority alt={article.coverImage.alt ?? ''} />
            {(article.coverImage.caption) && <figcaption>{article.coverImage.caption}</figcaption>}
          </figure>
        )}

        <div className="measure">
          {article.body?.length ? (
            <ArticleBody value={article.body} />
          ) : original?.url ? (
            <p className="prose-lead">This piece was published in {original.publication?.name ?? 'another publication'}.</p>
          ) : null}

          {original?.url && (
            <a href={original.url} target="_blank" rel="noreferrer" className="original-link">
              <span>
                Originally published in {original.publication?.name ?? 'another publication'}
                {' '}on {formatDate(article.publishedAt)}
              </span>
              <ArrowUpRight size={16} />
            </a>
          )}

          <aside className="author-box" aria-label="About the author">
            <SanityImg image={profile?.portrait} ratio={1} sizes="72px" className="author-box__avatar" alt="" />
            <div>
              <p className="author-box__name">{name}</p>
              {profile?.shortBio && <p className="author-box__bio">{profile.shortBio}</p>}
              <Link href="/about" className="link-strong">More about him</Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="wrap section" aria-labelledby="more-h">
          <div className="section-head section-head--ruled">
            <h2 id="more-h" className="section-title section-title--sm">More writing</h2>
            <Link href="/writing" className="link-quiet">All writing</Link>
          </div>
          <div className="related-grid">
            {related.map((a) => <ArticleItem key={a._id} a={a} withImage />)}
          </div>
        </section>
      )}
    </>
  )
}
