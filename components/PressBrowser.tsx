'use client'

import { useMemo, useState } from 'react'
import { PRESS_FILTERS, yearOf } from '@/lib/format'
import type { PressItem } from '@/lib/sanity/queries'
import { PressCard } from './Press'

/** Filter by type, year and words, all in the browser so it feels instant. */
export function PressBrowser({ items }: { items: PressItem[] }) {
  const [category, setCategory] = useState<string>('all')
  const [year, setYear] = useState('all')
  const [query, setQuery] = useState('')

  const years = useMemo(
    () => [...new Set(items.map((i) => yearOf(i.publishedAt)).filter(Boolean))].sort().reverse(),
    [items],
  )
  const available = useMemo(() => new Set(items.map((i) => i.category)), [items])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items
      .filter((i) => category === 'all' || i.category === category)
      .filter((i) => year === 'all' || yearOf(i.publishedAt) === year)
      .filter((i) => !q || `${i.headline} ${i.publication?.name ?? ''} ${i.excerpt ?? ''}`.toLowerCase().includes(q))
      .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
  }, [items, category, year, query])

  const groups = useMemo(() => {
    const map = new Map<string, PressItem[]>()
    for (const item of filtered) {
      const y = yearOf(item.publishedAt) || 'Undated'
      map.set(y, [...(map.get(y) ?? []), item])
    }
    return [...map.entries()]
  }, [filtered])

  return (
    <>
      <div className="filter-bar">
        <div className="wrap filter-bar__inner">
          <div className="pills" role="group" aria-label="Type of coverage">
            {PRESS_FILTERS.filter((f) => f.value === 'all' || available.has(f.value)).map((f) => (
              <button key={f.value} type="button" className="pill" aria-pressed={category === f.value} onClick={() => setCategory(f.value)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="filter-bar__fields">
            {years.length > 1 && (
              <label className="field-inline">
                <span>Year</span>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="all">All years</option>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </label>
            )}
            <label className="field-inline">
              <span className="sr-only">Search coverage</span>
              <input type="search" placeholder="Search coverage" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
          </div>
        </div>
      </div>

      <div className="wrap press-groups" aria-live="polite">
        {groups.length === 0 && (
          <p className="empty">
            {items.length === 0 ? 'Coverage will appear here as it’s added.' : 'Nothing matches those filters. Try “All”, or clear the search.'}
          </p>
        )}
        {groups.map(([groupYear, list]) => (
          <section key={groupYear} className="press-group" aria-labelledby={`y-${groupYear}`}>
            <h2 id={`y-${groupYear}`} className="press-group__year">
              {groupYear} <span>{list.length} {list.length === 1 ? 'piece' : 'pieces'}</span>
            </h2>
            <div className="card-grid">
              {list.map((item) => <PressCard key={item._id} item={item} />)}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
