import type { Metadata } from 'next'
import Link from 'next/link'
import { CopyText } from '@/components/CopyText'
import { Download } from '@/components/Icons'
import { SanityImg } from '@/components/SanityImg'
import { FALLBACK_NAME } from '@/lib/format'
import { sanityFetch, urlFor } from '@/lib/sanity/client'
import { type Profile, profileQuery, type Settings, settingsQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Speaking and media',
  description: 'Invitations to speak, interview requests, an approved biography and portraits.',
}

export default async function SpeakingPage() {
  const [profile, settings] = await Promise.all([
    sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null),
    sanityFetch<Settings | null>(settingsQuery, {}, ['siteSettings'], null),
  ])
  const name = profile?.name || FALLBACK_NAME
  const portraitUrl = profile?.portrait?.asset ? urlFor(profile.portrait).width(2400).url() + '&dl=' : undefined

  return (
    <>
      <header className="wrap page-head">
        <h1 className="page-title">Speaking and media</h1>
        <p className="page-intro">
          For invitations to speak, interview requests and press enquiries. Everything a journalist or event organiser needs is below.
        </p>
      </header>

      <div className="wrap media-kit">
        <section className="media-kit__block" aria-labelledby="bio-h">
          <div className="media-kit__head">
            <h2 id="bio-h">Approved biography</h2>
            {profile?.shortBio && <CopyText text={`${name}\n\n${profile.shortBio}`} label="Copy biography" />}
          </div>
          <p className="media-kit__bio">{profile?.shortBio || 'The approved biography will appear here once it’s added in the Studio.'}</p>
        </section>

        <section className="media-kit__block" aria-labelledby="photo-h">
          <div className="media-kit__head">
            <h2 id="photo-h">Portrait</h2>
            {portraitUrl && (
              <a className="btn btn--outline btn--sm" href={portraitUrl} download>
                <Download size={16} /> Download high resolution
              </a>
            )}
          </div>
          <SanityImg image={profile?.portrait} ratio={4 / 5} sizes="(min-width: 960px) 320px, 70vw" alt={`Portrait of ${name}`} label="Portrait" className="media-kit__portrait" />
          {profile?.portrait?.credit && <p className="byline-small">Credit: {profile.portrait.credit}</p>}
        </section>

        <section className="media-kit__block" aria-labelledby="kit-h">
          <div className="media-kit__head">
            <h2 id="kit-h">Full media kit</h2>
          </div>
          {settings?.mediaKitUrl ? (
            <a className="btn btn--primary" href={`${settings.mediaKitUrl}?dl=`} download>
              <Download size={16} /> Download media kit
            </a>
          ) : (
            <p className="byline-small">A downloadable kit with fact sheet and additional photographs is coming soon.</p>
          )}
        </section>
      </div>

      <section className="contact-band">
        <div className="wrap contact-band__inner">
          <h2>Invite Dr. Agarwal to speak, or request an interview.</h2>
          <div className="contact-band__actions">
            <Link href="/contact" className="btn btn--light">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
