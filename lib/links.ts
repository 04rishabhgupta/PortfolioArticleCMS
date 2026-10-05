/** Tracking tags that apps add to shared links. Removing them keeps one article = one link. */
const TRACKING = /^(utm_\w+|fbclid|gclid|igshid|mc_cid|mc_eid|ref_src)$/i

/** Finds the first web link in shared text, e.g. "Great piece! https://… via @ETNOWlive". */
export function firstLink(text: string): string | undefined {
  return text.match(/https?:\/\/[^\s<>"']+/i)?.[0]?.replace(/[).,;!?]+$/, '')
}

/** Removes tracking tags and the #fragment, so the same article shared twice is spotted as a duplicate. */
export function cleanLink(raw: string): string {
  try {
    const url = new URL(raw.trim())
    for (const key of [...url.searchParams.keys()]) {
      if (TRACKING.test(key)) url.searchParams.delete(key)
    }
    url.hash = ''
    return url.toString()
  } catch {
    return raw.trim()
  }
}
