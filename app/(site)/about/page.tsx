import type { Metadata } from 'next'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { JsonLd, personData } from '@/components/JsonLd'
import { SanityImg } from '@/components/SanityImg'
import { FALLBACK_NAME } from '@/lib/format'
import { sanityFetch } from '@/lib/sanity/client'
import { type Profile, profileQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'About' }

export default async function AboutPage() {
  const profile = await sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null)
  const name = profile?.name || FALLBACK_NAME

  return (
    <>
      <JsonLd data={personData(profile)} />
      <header className="wrap page-head about-head">
        <div>
          <h1 className="page-title">About</h1>
          {profile?.positioning && <p className="page-intro">{profile.positioning}</p>}
        </div>
      </header>

      <div className="wrap about-page">
        <figure className="about-page__portrait">
          <SanityImg image={profile?.portrait} ratio={4 / 5} sizes="(min-width: 960px) 380px, 90vw" alt={`Portrait of ${name}`} label="Portrait" />
          {profile?.portrait?.credit && <figcaption>Photograph: {profile.portrait.credit}</figcaption>}
        </figure>

        <div className="about-page__text">
          <div className="prose">
            {profile?.fullBio?.length ? (
              <PortableText value={profile.fullBio} />
            ) : profile?.shortBio ? (
              <p>{profile.shortBio}</p>
            ) : (
              <p className="empty">The biography will appear here once it’s added in the Studio.</p>
            )}
          </div>

          {profile?.currentRoles && profile.currentRoles.length > 0 && (
            <section aria-labelledby="roles-h" className="about-block">
              <h2 id="roles-h" className="section-head__small">Current roles</h2>
              <ul className="plain-list">
                {profile.currentRoles.map((r) => (
                  <li key={r._key}><strong>{r.title}</strong>{r.organisation && <span>{r.organisation}</span>}</li>
                ))}
              </ul>
            </section>
          )}

          {profile?.timeline && profile.timeline.length > 0 && (
            <section aria-labelledby="career-h" className="about-block">
              <h2 id="career-h" className="section-head__small">Career</h2>
              <ol className="timeline">
                {profile.timeline.map((t) => (
                  <li key={t._key} className={t.highlight ? 'is-highlight' : undefined}>
                    <span className="timeline__year">{t.year}</span>
                    <span className="timeline__role">
                      <strong>{t.title}</strong>
                      {t.organisation && <span>{t.organisation}</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="about-page__links">
            <Link href="/press" className="link-strong">In the Press</Link>
            <Link href="/speaking" className="link-strong">Speaking and media kit</Link>
          </p>
        </div>
      </div>
    </>
  )
}
