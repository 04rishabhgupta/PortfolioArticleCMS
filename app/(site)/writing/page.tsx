import type { Metadata } from 'next'
import { ArticleItem, ArticleLead } from '@/components/Articles'
import { yearOf } from '@/lib/format'
import { sanityFetch } from '@/lib/sanity/client'
import { type ArticleSummary, articlesQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Essays, opinion pieces and speeches.',
}

export default async function WritingPage() {
  const articles = await sanityFetch<ArticleSummary[]>(articlesQuery, {}, ['article'], [])
  const [lead, ...rest] = articles

  const byYear = new Map<string, ArticleSummary[]>()
  for (const a of rest) byYear.set(yearOf(a.publishedAt), [...(byYear.get(yearOf(a.publishedAt)) ?? []), a])

  return (
    <>
      <header className="wrap page-head">
        <h1 className="page-title">Writing</h1>
        <p className="page-intro">Essays, opinion pieces and speeches. Pieces first published elsewhere link to the original.</p>
      </header>

      <div className="wrap writing-page">
        {!lead && <p className="empty">Articles will appear here once they’re published.</p>}
        {lead && <ArticleLead a={lead} />}
        {[...byYear.entries()].map(([year, list]) => (
          <section key={year} className="writing-year" aria-labelledby={`w-${year}`}>
            <h2 id={`w-${year}`} className="writing-year__label">{year}</h2>
            <div className="article-list">
              {list.map((a) => <ArticleItem key={a._id} a={a} withImage />)}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
