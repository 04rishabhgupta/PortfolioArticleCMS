import { CATEGORY_LABEL, formatDate } from '@/lib/format'
import type { PressItem } from '@/lib/sanity/queries'
import { ArrowUpRight } from './Icons'
import { SanityImg } from './SanityImg'

function Meta({ item, compact }: { item: PressItem; compact?: boolean }) {
  return (
    <p className="press-meta">
      <span className="pub">{item.publication?.name ?? 'Publication'}</span>
      {item.publishedAt && <time dateTime={item.publishedAt}>{formatDate(item.publishedAt, compact ? 'short' : 'long')}</time>}
    </p>
  )
}

function Category({ value }: { value?: string }) {
  return value ? <span className="chip">{CATEGORY_LABEL[value] ?? value}</span> : null
}

function OutLinks({ item }: { item: PressItem }) {
  return (
    <p className="press-links">
      <a href={item.url} target="_blank" rel="noreferrer" className="link-strong">
        Read on {item.publication?.name ?? 'the original site'}
        <ArrowUpRight size={14} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      {item.archiveUrl && (
        <a href={item.archiveUrl} target="_blank" rel="noreferrer" className="link-quiet">
          Archived copy<span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </p>
  )
}

/** The big pinned story on the homepage and at the top of In the Press. */
export function PressFeature({ item, priority }: { item: PressItem; priority?: boolean }) {
  return (
    <article className="press-feature">
      <SanityImg image={item.image} ratio={16 / 10} sizes="(min-width: 960px) 600px, 100vw" priority={priority} alt={item.image?.alt || ''} />
      <div className="press-feature__text">
        <div className="press-feature__meta">
          <Meta item={item} />
          <Category value={item.category} />
        </div>
        <h3 className="press-feature__title">
          <a href={item.url} target="_blank" rel="noreferrer">{item.headline}</a>
        </h3>
        {item.excerpt && <p className="press-feature__excerpt">{item.excerpt}</p>}
        <OutLinks item={item} />
      </div>
    </article>
  )
}

export function PressCard({ item }: { item: PressItem }) {
  return (
    <article className="press-card">
      <SanityImg image={item.image} ratio={16 / 9} sizes="(min-width: 960px) 360px, (min-width: 600px) 50vw, 100vw" alt="" />
      <Meta item={item} compact />
      <h3 className="press-card__title">
        <a href={item.url} target="_blank" rel="noreferrer" className="stretched">
          {item.headline}
          <span className="sr-only"> (opens on {item.publication?.name ?? 'the original site'})</span>
        </a>
      </h3>
      <div className="press-card__foot">
        <Category value={item.category} />
        <ArrowUpRight size={18} />
      </div>
    </article>
  )
}

export function PressRow({ item }: { item: PressItem }) {
  return (
    <li className="press-row">
      <time className="press-row__date" dateTime={item.publishedAt}>{formatDate(item.publishedAt, 'short')}</time>
      <span className="press-row__pub">{item.publication?.name}</span>
      <a href={item.url} target="_blank" rel="noreferrer" className="press-row__title stretched">
        {item.headline}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <Category value={item.category} />
      <ArrowUpRight size={18} className="press-row__icon" />
    </li>
  )
}
