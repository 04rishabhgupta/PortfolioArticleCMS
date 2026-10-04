import Link from 'next/link'

// Temporary page. The real homepage is built on Day 2.
export default function Home() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', padding: '15vh 8vw', background: '#F7F5F0', minHeight: '100vh', color: '#15171C' }}>
      <h1 style={{ fontWeight: 400, fontSize: 'clamp(40px, 7vw, 88px)', margin: 0, lineHeight: 1 }}>Dr. Nikhil Agarwal</h1>
      <p style={{ fontSize: 20, color: '#3A3F48' }}>The website is being built. Content can already be added in the Studio.</p>
      <Link href="/studio" style={{ color: '#1E3A5F', fontFamily: 'system-ui, sans-serif' }}>Open the Studio</Link>
    </main>
  )
}
