import type { Metadata } from 'next'
import Link from 'next/link'
import { PressBrowser } from '@/components/PressBrowser'
import { PressFeature } from '@/components/Press'
import { sanityFetch } from '@/lib/sanity/client'
import { type PressItem, pressQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'In the Press',
  description: 'Appointments, interviews and coverage, newest first.',
}

export default async function PressPage() {
  const press = await sanityFetch<PressItem[]>(pressQuery, {}, ['pressMention', 'publication'], [])
  const pinned = press.find((p) => p.featured)

  return (
    <>
      <header className="wrap page-head">
        <h1 className="page-title">In the Press</h1>
        <p className="page-intro">
          Appointments, interviews and coverage, newest first. Every link opens the original article, and a backup copy is kept in case it ever moves.
        </p>
      </header>

      {pinned && (
        <div className="wrap press-pinned">
          <PressFeature item={pinned} priority />
        </div>
      )}

      <PressBrowser items={press} />

      <section className="band">
        <div className="wrap media-cta">
          <div>
            <h2>Writing about Dr. Agarwal?</h2>
            <p>The media kit has an approved biography, portraits and contact details.</p>
          </div>
          <Link href="/speaking" className="btn btn--primary">Get the media kit</Link>
        </div>
      </section>
    </>
  )
}
