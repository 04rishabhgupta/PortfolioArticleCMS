# Project brief for Claude Code

Personal website for **Dr. Nikhil Agarwal** (Independent Director, Hindustan Aeronautics Limited) with a self-managed CMS. He is non-technical: he must be able to publish without contacting a developer.

## What the site does
- Shows **his own articles** (written in the CMS, or linked op-eds published elsewhere).
- Shows **press coverage about him**: he pastes a news link, the CMS auto-fills headline, publication, date, excerpt and picture.
- Pages: Home, In the Press, Writing (list + article), About (bio + career timeline), Speaking / Media kit, Contact.

## Hard constraints
- **Zero running cost.** Free tiers only: Vercel Hobby, Sanity Free, Resend free, Cloudflare Web Analytics.
- **3-day build.** Day 1 (Studio) is done. Day 2 = public site. Day 3 = publish pipeline, SEO, phone sharing, QA, launch.
- Studio UX must be plain-language for a non-technical user. No jargon in labels or errors.

## Stack (already installed)
- Next.js 16 (App Router, TypeScript), React 19
- Sanity v6, Studio embedded at `/studio` (`sanity.config.ts`, project `8v8936ib`, dataset `production`)
- next-sanity 13, @sanity/ui 4, @sanity/icons 5, open-graph-scraper

### Gotchas in these versions
- `@sanity/icons` v5: import each icon from its subpath, e.g. `import { LinkIcon } from '@sanity/icons/Link'`. Root imports are typed `never`.
- `@sanity/ui` v4: `Stack` uses `gap`, not `space`. `Grid` has no `columns` prop; use `Flex wrap`.
- `@sanity/image-url` v2: `import { createImageUrlBuilder } from '@sanity/image-url'`.
- `sanity.config.ts` starts with `'use client'`.

## Defaults (confirm with the user if unsure)
- Hosting: Vercel. Publisher: only Dr. Agarwal. Dark mode: yes. Accent: navy `#1E3A5F`. Phone sharing: Android share target + iOS Shortcut.

## Design direction (from approved wireframes)
- Editorial and restrained. Newsreader (serif, headlines and article body) + Geist (UI). Self-host with `next/font`.
- Palette: paper `#F7F5F0`, ink `#15171C`, muted text `#575C66`, rules `#DCD7CC`, accent navy `#1E3A5F`, band `#EFECE5`.
- Avoid generic AI-design tells: no ALL-CAPS eyebrow labels everywhere, no "→" on every link, no scattered fade-in-on-scroll. One orchestrated motion moment at most; respect `prefers-reduced-motion`.
- Article body: ~66 characters per line, 21px, line-height 1.65.
- Accessibility: WCAG 2.1 AA, visible focus, 44px touch targets. Lighthouse 95+ on mobile.

## Content rules
- Press items show only headline, short excerpt, thumbnail and a link to the original (plus the archived copy). Never republish full article text.
- Never invent facts about Dr. Agarwal. Use placeholders like `[Role]` where content is missing.

## What exists (Day 1)
- `sanity/schemas/`: pressMention, article, profile (singleton id `profile`), publication, siteSettings (singleton id `siteSettings`)
- `sanity/components/LinkUnfurlInput.tsx`: paste link → auto-fill, picture saved to Sanity, Wayback archive, duplicate check
- `sanity/components/Dashboard.tsx`: Studio home; `PressPreview.tsx`: preview tab
- `sanity/actions.ts`: auto-slug on publish for articles
- `app/api/unfurl`, `app/api/unfurl/image`, `app/api/archive`: SSRF-safe fetching (`lib/safe-fetch.ts`)
- `lib/publications.ts`: known Indian outlets by domain
- Template `pressMention-from-link` (param `url`) reserved for Day 3 phone sharing
- `npm test` runs offline unfurl tests

## What exists (Day 2)
- `app/(site)/`: home, press, writing, writing/[slug], about, speaking, contact, not-found; `site.css` holds all styles and tokens
- `lib/sanity/client.ts`: `sanityFetch(query, params, tags, fallback)` never throws; 1h revalidate + cache tags (`profile`, `siteSettings`, `pressMention`, `publication`, `article`)
- `lib/sanity/queries.ts`: all GROQ + types. Articles with future `publishedAt` stay hidden.
- `lib/sanity/mock.ts`: sample content when `MOCK_CONTENT=1` (dev) for design work without real data
- Fonts: Newsreader self-hosted in `app/fonts/`, Geist via the `geist` package
- Dark mode: `data-theme` on `<html>`, toggle stored in localStorage, no-flash script in root layout
- Contact: `components/ContactForm.tsx` → `app/api/contact` (Resend REST, honeypot, same-origin check). Needs `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
- CSS resets use `:where(.site)` so component classes always win; font stacks live on `.site`, not `:root`

## What exists (Day 3)
- `app/api/revalidate`: signed Sanity webhook → `revalidateTag(type, { expire: 0 })`. Needs `SANITY_REVALIDATE_SECRET`. Sanity client uses `useCdn: false` so refreshed pages never get stale CDN data.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.tsx` + `app/apple-icon.tsx` (NA monogram, `lib/monogram.tsx`)
- Share images: `app/(site)/opengraph-image.tsx` (uses Site settings share picture if set) and `writing/[slug]/opengraph-image.tsx`, drawn by `lib/og.tsx` with TTF fonts in `app/fonts/og/` (satori can't read woff2)
- JSON-LD: `components/JsonLd.tsx` (Person on home/about, Article on article pages); only Profile facts, nothing invented
- iPhone sharing: `app/share` turns `?url=` or `?text=` into a Studio intent URL for template `pressMention-from-link` (payload = base64url JSON). `lib/links.ts` strips tracking params. iOS Shortcut steps in README. No Android share target (he uses an iPhone).
- Contact form is hidden until `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set; the page shows his email instead.

## Day 3 to-do
- Live preview of unpublished articles (needs a Sanity viewer token)
- QA on real content, Lighthouse, handover guide for Dr. Agarwal

## Working style
- Run `npm run build` and `npx tsc --noEmit` before saying something is done.
- Keep changes small and explain them briefly in plain language.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
