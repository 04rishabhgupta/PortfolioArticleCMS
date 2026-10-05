import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

/** "NA" in Newsreader on navy: the browser tab icon and the iPhone home-screen icon. */
export async function monogram(px: number) {
  const serif = await readFile(join(process.cwd(), 'app/fonts/og/Newsreader-Medium.ttf'))
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1E3A5F',
          color: '#F7F5F0',
          fontFamily: 'Newsreader',
          fontSize: px * 0.5,
          letterSpacing: px * -0.01,
          paddingBottom: px * 0.04,
        }}
      >
        NA
      </div>
    ),
    { width: px, height: px, fonts: [{ name: 'Newsreader', data: serif, weight: 500, style: 'normal' }] },
  )
}
