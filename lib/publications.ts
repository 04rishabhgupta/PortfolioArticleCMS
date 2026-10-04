/**
 * Known publications, keyed by domain. When a pasted link matches one of
 * these, the publication name is filled in correctly even if the site's own
 * metadata is missing or messy. Add to this list freely.
 */
export const KNOWN_PUBLICATIONS: Record<string, string> = {
  'economictimes.indiatimes.com': 'The Economic Times',
  'timesofindia.indiatimes.com': 'The Times of India',
  'hindustantimes.com': 'Hindustan Times',
  'livemint.com': 'Mint',
  'business-standard.com': 'Business Standard',
  'thehindu.com': 'The Hindu',
  'thehindubusinessline.com': 'BusinessLine',
  'financialexpress.com': 'Financial Express',
  'indianexpress.com': 'The Indian Express',
  'ndtv.com': 'NDTV',
  'ndtvprofit.com': 'NDTV Profit',
  'moneycontrol.com': 'Moneycontrol',
  'cnbctv18.com': 'CNBC-TV18',
  'businesstoday.in': 'Business Today',
  'fortuneindia.com': 'Fortune India',
  'indiatoday.in': 'India Today',
  'news18.com': 'News18',
  'theprint.in': 'ThePrint',
  'deccanherald.com': 'Deccan Herald',
  'zeebiz.com': 'Zee Business',
  'aninews.in': 'ANI',
  'ptinews.com': 'PTI',
  'ddnews.gov.in': 'DD News',
  'pib.gov.in': 'Press Information Bureau',
  'hal-india.co.in': 'Hindustan Aeronautics Limited',
  'bseindia.com': 'BSE',
  'nseindia.com': 'NSE',
  'linkedin.com': 'LinkedIn',
}

export function normaliseDomain(hostname: string): string {
  return hostname.toLowerCase().replace(/^(www|m|amp)\./, '')
}

/** Finds a known publication for a hostname, also matching subdomains. */
export function lookupPublication(hostname: string): string | undefined {
  const host = normaliseDomain(hostname)
  if (KNOWN_PUBLICATIONS[host]) return KNOWN_PUBLICATIONS[host]
  const match = Object.keys(KNOWN_PUBLICATIONS).find((d) => host.endsWith('.' + d))
  return match ? KNOWN_PUBLICATIONS[match] : undefined
}
