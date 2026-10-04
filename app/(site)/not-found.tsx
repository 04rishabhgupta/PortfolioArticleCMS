import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap page-head not-found">
      <h1 className="page-title">This page isn’t here.</h1>
      <p className="page-intro">It may have moved, or the link may have a typo.</p>
      <p className="not-found__links">
        <Link href="/" className="btn btn--primary">Go to the homepage</Link>
        <Link href="/writing" className="btn btn--outline">Writing</Link>
        <Link href="/press" className="btn btn--outline">In the Press</Link>
      </p>
    </div>
  )
}
