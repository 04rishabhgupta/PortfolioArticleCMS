import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Share pictures and icons read these font files at runtime; make sure Vercel ships them.
  outputFileTracingIncludes: { '/**': ['./app/fonts/og/**'] },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
}

export default nextConfig
