import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

/**
 * Share pictures (the preview shown on WhatsApp, LinkedIn, X) drawn from text,
 * in the site's own fonts and colours. Static TTF copies of the fonts live in
 * app/fonts/og because the image renderer can't read woff2.
 */

export const OG_SIZE = { width: 1200, height: 630 }

const fontsDir = join(process.cwd(), 'app/fonts/og')

async function fonts() {
  const [serif, sans] = await Promise.all([
    readFile(join(fontsDir, 'Newsreader-Medium.ttf')),
    readFile(join(fontsDir, 'Geist-Regular.ttf')),
  ])
  return [
    { name: 'Newsreader', data: serif, weight: 500 as const, style: 'normal' as const },
    { name: 'Geist', data: sans, weight: 400 as const, style: 'normal' as const },
  ]
}

type Card = {
  /** The big line: a headline, or his name. */
  title: string
  /** Small line above the title, e.g. "Essay, Aerospace". */
  kicker?: string
  /** Small line at the bottom left, usually his name. */
  footer: string
  /** Bottom right, usually the site address. */
  site: string
}

export async function shareCard({ title, kicker, footer, site }: Card) {
  const titleSize = title.length > 90 ? 56 : title.length > 55 ? 66 : 80
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#F7F5F0',
          color: '#15171C',
          borderTop: '14px solid #1E3A5F',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {kicker && <div style={{ fontSize: 28, color: '#1E3A5F' }}>{kicker}</div>}
          <div style={{ fontFamily: 'Newsreader', fontSize: titleSize, lineHeight: 1.12, letterSpacing: -1, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #DCD7CC',
            paddingTop: 28,
            fontSize: 26,
            color: '#575C66',
          }}
        >
          <span style={{ color: '#15171C' }}>{footer}</span>
          <span>{site}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  )
}

/** "dr-nikhil-agarwal.vercel.app" from the full site address. */
export function siteHost(siteUrl: string) {
  try {
    return new URL(siteUrl).host
  } catch {
    return siteUrl
  }
}
