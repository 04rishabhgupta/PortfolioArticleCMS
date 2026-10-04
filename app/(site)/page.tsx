import Link from 'next/link'
import { ArticleItem, ArticleLead } from '@/components/Articles'
import { ArrowRight } from '@/components/Icons'
import { PressFeature, PressRow } from '@/components/Press'
import { SanityImg } from '@/components/SanityImg'
import { FALLBACK_NAME } from '@/lib/format'
import { sanityFetch } from '@/lib/sanity/client'
import {
  type ArticleSummary,
  articlesQuery,
  featuredPublicationsQuery,
  type PressItem,
  pressQuery,
  type Profile,
  profileQuery,
  type Publication,
} from '@/lib/sanity/queries'

export default async function HomePage() {
  const [profile, press, articles, featuredPubs] = await Promise.all([
    sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null),
    sanityFetch<PressItem[]>(pressQuery, {}, ['pressMention', 'publication'], []),
    sanityFetch<ArticleSummary[]>(articlesQuery, {}, ['article'], []),
    sanityFetch<Publication[]>(featuredPublicationsQuery, {}, ['publication'], []),
  ])

  const name = profile?.name || FALLBACK_NAME
  const [first, ...rest] = name.replace(/^Dr\.?\s+/i, '').split(' ')
  const honorific = /^Dr\.?\s/i.test(name) ? 'Dr. ' : ''
  const roles = profile?.currentRoles ?? []
  const leadRole = roles[0]
    ? [roles[0].title, roles[0].organisation].filter(Boolean).join(', ')
    : 'Additional Director, Hindustan Aeronautics Limited'

  const featuredPress = press[0]
  const recentPress = [...press].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')).filter((p) => p !== featuredPress).slice(0, 4)

  // "As featured in": publications he has chosen, else the ones that have covered him.
  const stripNames = featuredPubs.length
    ? featuredPubs.map((p) => p.name)
    : [...new Set(press.map((p) => p.publication?.name).filter(Boolean) as string[])].slice(0, 6)

  const leadArticle = articles.find((a) => a.featured) ?? articles[0]
  const otherArticles = articles.filter((a) => a !== leadArticle).slice(0, 3)

  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-name">
        <div className="hero__text">
          <p className="hero__role reveal" style={{ ['--d' as string]: '0ms' }}>
            <span className="hero__rule" aria-hidden="true" />
            {leadRole}
          </p>
          <h1 id="hero-name" className="hero__name">
            <span className="reveal" style={{ ['--d' as string]: '80ms' }}>{honorific}{first}</span>
            <span className="reveal" style={{ ['--d' as string]: '160ms' }}>{rest.join(' ')}</span>
          </h1>
          {profile?.positioning && (
            <p className="hero__positioning reveal" style={{ ['--d' as string]: '260ms' }}>{profile.positioning}</p>
          )}
          <div className="hero__actions reveal" style={{ ['--d' as string]: '340ms' }}>
            {articles.length > 0 && <Link href="/writing" className="btn btn--primary">Read his writing</Link>}
            <Link href="/press" className="btn btn--outline">In the Press</Link>
          </div>
        </div>
        <figure className="hero__portrait reveal" style={{ ['--d' as string]: '120ms' }}>
          <SanityImg image={profile?.portrait} ratio={4 / 5} sizes="(min-width: 960px) 400px, 90vw" priority alt={`Portrait of ${name}`} label="Portrait" />
          {profile?.portrait?.credit && <figcaption>Photograph: {profile.portrait.credit}</figcaption>}
        </figure>
      </section>

      {roles.length > 0 && (
        <section className="wrap roles" aria-label="Current roles">
          <dl className="roles__list">
            {roles.map((r) => (
              <div key={r._key} className="roles__item">
                <dt>{r.label || 'Role'}</dt>
                <dd>{[r.title, r.organisation].filter(Boolean).join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {stripNames.length > 0 && (
        <section className="featured-in" aria-label="As featured in">
          <div className="wrap featured-in__inner">
            <p className="featured-in__label">As featured in</p>
            <ul>{stripNames.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>
        </section>
      )}

      {featuredPress && (
        <section className="wrap section" aria-labelledby="featured-h">
          <div className="section-head">
            <h2 id="featured-h" className="section-head__small">Featured coverage</h2>
            <Link href="/press" className="link-quiet">All press coverage</Link>
          </div>
          <PressFeature item={featuredPress} />
        </section>
      )}

      {leadArticle && (
        <section className="wrap section" aria-labelledby="writing-h">
          <div className="section-head section-head--ruled">
            <h2 id="writing-h" className="section-title">Writing</h2>
            <Link href="/writing" className="link-quiet">All writing</Link>
          </div>
          <div className="writing-split">
            <ArticleLead a={leadArticle} />
            {otherArticles.length > 0 && (
              <div className="article-list">
                {otherArticles.map((a) => <ArticleItem key={a._id} a={a} />)}
              </div>
            )}
          </div>
        </section>
      )}

      {recentPress.length > 0 && (
        <section className="band" aria-labelledby="press-h">
          <div className="wrap section">
            <div className="section-head">
              <h2 id="press-h" className="section-title">In the Press</h2>
            </div>
            <ul className="press-rows">{recentPress.map((p) => <PressRow key={p._id} item={p} />)}</ul>
            <p>
              <Link href="/press" className="btn btn--outline">
                View all coverage <ArrowRight size={16} />
              </Link>
            </p>
          </div>
        </section>
      )}

      {(profile?.shortBio || (profile?.timeline?.length ?? 0) > 0) && (
        <section className="wrap section about-split" aria-labelledby="about-h">
          <div className="about-split__text">
            <h2 id="about-h" className="section-head__small">About</h2>
            {profile?.shortBio && <p className="about-split__bio">{profile.shortBio}</p>}
            <Link href="/about" className="link-strong">Full biography</Link>
          </div>
          {profile?.timeline && profile.timeline.length > 0 && (
            <ol className="timeline" aria-label="Career timeline">
              {profile.timeline.slice(0, 5).map((t) => (
                <li key={t._key} className={t.highlight ? 'is-highlight' : undefined}>
                  <span className="timeline__year">{t.year}</span>
                  <span className="timeline__role">
                    <strong>{t.title}</strong>
                    {t.organisation && <span>{t.organisation}</span>}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>
      )}

      <section className="contact-band" aria-labelledby="contact-h">
        <div className="wrap contact-band__inner">
          <h2 id="contact-h">For speaking, media and correspondence.</h2>
          {profile?.contactEmail && (
            <p><a href={`mailto:${profile.contactEmail}`} className="contact-band__email">{profile.contactEmail}</a></p>
          )}
          <div className="contact-band__actions">
            <Link href="/contact" className="btn btn--light">Write to him</Link>
            <Link href="/speaking" className="btn btn--outline-light">Media kit</Link>
          </div>
        </div>
      </section>
    </>
  )
}
