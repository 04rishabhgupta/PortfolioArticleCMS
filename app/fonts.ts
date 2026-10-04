import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'

/** Newsreader (SIL Open Font License), self-hosted so no request goes to Google. */
export const newsreader = localFont({
  src: [
    { path: './fonts/Newsreader.woff2', style: 'normal', weight: '200 800' },
    { path: './fonts/Newsreader-Italic.woff2', style: 'italic', weight: '200 800' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Iowan Old Style', 'Georgia', 'serif'],
})

export const geist = GeistSans
