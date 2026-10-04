import Link from 'next/link'
import { formatDate, readingTime } from '@/lib/format'
import type { ArticleSummary } from '@/lib/sanity/queries'
import { ArrowUpRight } from './Icons'
import { SanityImg } from './SanityImg'

/** Op-eds that only link out go straight to the publication; everything else opens here. */
function target(a: ArticleSummary) {
  const external = a.originallyPublished?.url && !a.hasBody
  return external ? { href: a.originallyPublished!.url!, external: true } : { href: `/writing/${a.slug}`, external: false }
}

function Kicker({ a }: { a: ArticleSummary }) {
  const bits = [a.kind, a.topic].filter(Boolean).join(', ')
  return bits ? <p className="kicker">{bits}</p> : null
}

function Byline({ a }: { a: ArticleSummary }) {
  const t = target(a)
  return (
    <p className="byline-small">
      <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
      {t.external ? (
        <span className="with-icon">in {a.originallyPublished?.publication?.name ?? 'another publication'} <ArrowUpRight size={12} /></span>
      ) : (
        <span>{readingTime(a.readingMinutes)}</span>
      )}
    </p>
  )
}

function TitleLink({ a, className }: { a: ArticleSummary; className: string }) {
  const t = target(a)
  return t.external ? (
    <a href={t.href} target="_blank" rel="noreferrer" className={`${className} stretched`}>{a.title}<span className="sr-only"> (opens in a new tab)</span></a>
  ) : (
    <Link href={t.href} className={`${className} stretched`}>{a.title}</Link>
  )
}

export function ArticleLead({ a }: { a: ArticleSummary }) {
  return (
    <article className="article-lead">
      <SanityImg image={a.coverImage} ratio={3 / 2} sizes="(min-width: 960px) 640px, 100vw" alt="" />
      <Kicker a={a} />
      <h3><TitleLink a={a} className="article-lead__title" /></h3>
      {a.standfirst && <p className="article-lead__standfirst">{a.standfirst}</p>}
      <Byline a={a} />
    </article>
  )
}

export function ArticleItem({ a, withImage }: { a: ArticleSummary; withImage?: boolean }) {
  return (
    <article className={`article-item${withImage ? ' article-item--image' : ''}`}>
      {withImage && <SanityImg image={a.coverImage} ratio={1} sizes="160px" alt="" />}
      <div className="article-item__text">
        <Kicker a={a} />
        <h3><TitleLink a={a} className="article-item__title" /></h3>
        {withImage && a.standfirst && <p className="article-item__standfirst">{a.standfirst}</p>}
        <Byline a={a} />
      </div>
    </article>
  )
}
