import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { sanityFetch } from '@/lib/sanity/client'
import { type Profile, profileQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Contact' }

// The form needs Resend to send email. Until it's set up, only the email address is shown.
const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL)

export default async function ContactPage() {
  const profile = await sanityFetch<Profile | null>(profileQuery, {}, ['profile'], null)
  return (
    <div className="wrap contact-page">
      <header className="contact-page__intro">
        <h1 className="page-title">Get in touch</h1>
        <p className="page-intro">For speaking invitations, interviews and correspondence.</p>
        {profile?.contactEmail && (
          <p className="contact-page__email">
            {formEnabled ? 'Or email ' : 'Email '}<a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
          </p>
        )}
        {profile?.socials?.linkedin && (
          <p><a href={profile.socials.linkedin} target="_blank" rel="me noreferrer" className="link-strong">LinkedIn</a></p>
        )}
      </header>
      {formEnabled ? (
        <ContactForm />
      ) : (
        !profile?.contactEmail && <p className="empty">Contact details will appear here soon.</p>
      )}
    </div>
  )
}
