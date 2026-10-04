/**
 * Offline checks for the link-reading logic, using page snippets shaped like
 * real Indian news sites. Run with: npx tsx scripts/test-unfurl.mts
 */
import { extractDetails } from '../lib/unfurl.ts'

const cases: { name: string; url: string; html: string; expect: Record<string, string | undefined> }[] = [
  {
    name: 'Open Graph + article:published_time, site suffix in title',
    url: 'https://economictimes.indiatimes.com/news/company/hal-board/articleshow/1.cms',
    html: `<html><head>
      <meta property="og:title" content="Nikhil Agarwal appointed Additional Director at HAL - The Economic Times">
      <meta property="og:site_name" content="The Economic Times">
      <meta property="og:description" content="The Ministry of Defence has appointed Dr Nikhil Agarwal as an Additional Director on the board of Hindustan Aeronautics Limited.">
      <meta property="og:image" content="/photo/1.jpg">
      <meta property="article:published_time" content="2026-03-14T23:30:00+05:30">
    </head><body></body></html>`,
    expect: {
      headline: 'Nikhil Agarwal appointed Additional Director at HAL',
      publicationName: 'The Economic Times',
      publishedAt: '2026-03-14',
      imageUrl: 'https://economictimes.indiatimes.com/photo/1.jpg',
    },
  },
  {
    name: 'JSON-LD only (no OG date), @graph, pipe suffix',
    url: 'https://www.business-standard.com/companies/news/x-1.html',
    html: `<html><head>
      <title>HAL board gets new director | Business Standard</title>
      <script type="application/ld+json">{"@context":"https://schema.org","@graph":[
        {"@type":"NewsArticle","headline":"HAL board gets new director","datePublished":"2026-03-15T08:10:00Z",
         "image":{"@type":"ImageObject","url":"https://bsmedia.business-standard.com/a.jpg"},
         "publisher":{"@type":"Organization","name":"Business Standard"}}]}</script>
    </head><body></body></html>`,
    expect: {
      headline: 'HAL board gets new director',
      publicationName: 'Business Standard',
      publishedAt: '2026-03-15',
      imageUrl: 'https://bsmedia.business-standard.com/a.jpg',
    },
  },
  {
    name: 'Unknown site, entities, no date',
    url: 'https://www.example-defence-news.in/story/42',
    html: `<html><head>
      <meta property="og:title" content="Dr. Agarwal on India&#39;s aerospace future &amp; self-reliance">
      <meta property="og:site_name" content="Defence News Daily">
    </head></html>`,
    expect: {
      headline: "Dr. Agarwal on India's aerospace future & self-reliance",
      publicationName: 'Defence News Daily',
      publishedAt: undefined,
    },
  },
  {
    name: 'Headline with a genuine dash is not cut',
    url: 'https://www.livemint.com/x',
    html: `<html><head><meta property="og:title" content="Make in India — the next decade of defence manufacturing"></head></html>`,
    expect: { headline: 'Make in India — the next decade of defence manufacturing', publicationName: 'Mint' },
  },
]

let failed = 0
for (const c of cases) {
  const r = await extractDetails(c.html, new URL(c.url))
  const problems = Object.entries(c.expect).filter(([k, v]) => (r as Record<string, unknown>)[k] !== v)
  if (problems.length) {
    failed++
    console.log(`✗ ${c.name}`)
    for (const [k, v] of problems) console.log(`    ${k}: expected ${JSON.stringify(v)}, got ${JSON.stringify((r as Record<string, unknown>)[k])}`)
  } else console.log(`✓ ${c.name}`)
}
process.exit(failed ? 1 : 0)
