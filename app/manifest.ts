import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dr. Nikhil Agarwal',
    short_name: 'N. Agarwal',
    start_url: '/',
    display: 'browser',
    background_color: '#F7F5F0',
    theme_color: '#1E3A5F',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
