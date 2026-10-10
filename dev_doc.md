# Developer guide: Dr. Nikhil Agarwal website + CMS

This is the complete reference for this codebase. Read it top to bottom once to rebuild the picture; after that, jump to the section you need. It describes the code as of commit `e816b13e` (October 2026).

---

## Contents

1. [What this project is](#1-what-this-project-is)
2. [Stack and versions](#2-stack-and-versions)
3. [Running it locally](#3-running-it-locally)
4. [Environment variables](#4-environment-variables)
5. [Folder map](#5-folder-map)
6. [How it fits together](#6-how-it-fits-together)
7. [Content model (Sanity schemas)](#7-content-model-sanity-schemas)
8. [The Studio (`/studio`)](#8-the-studio-studio)
9. [The press "paste a link" pipeline](#9-the-press-paste-a-link-pipeline)
10. [The public site](#10-the-public-site)
11. [Data fetching, caching and the publish webhook](#11-data-fetching-caching-and-the-publish-webhook)
12. [API routes](#12-api-routes)
13. [iPhone sharing (`/share` + iOS Shortcut)](#13-iphone-sharing-share--ios-shortcut)
14. [SEO, share images, icons](#14-seo-share-images-icons)
15. [Styling and design system](#15-styling-and-design-system)
16. [Accessibility rules](#16-accessibility-rules)
17. [Testing and checks](#17-testing-and-checks)
18. [Deployment and external services](#18-deployment-and-external-services)
19. [How to make common changes](#19-how-to-make-common-changes)
20. [Gotchas](#20-gotchas)
21. [Troubleshooting](#21-troubleshooting)
22. [Known issues and backlog](#22-known-issues-and-backlog)

---

## 1. What this project is

A personal website for **Dr. Nikhil Agarwal** (Independent Director, Hindustan Aeronautics Limited), with a built-in CMS he runs himself. He isn't technical, so everything he touches has to work without a developer.

The site shows:

- **His own writing**: articles written in the CMS, or op-eds published elsewhere that the site links to.
- **Press coverage about him**: he pastes a news link and the CMS fills in the headline, publication, date, excerpt and picture.
- **Pages**: Home, In the Press, Writing (list + article page), About, Speaking / media kit, Contact.

**Hard constraints** (they shaped the decisions below):

- **Zero running cost.** Only free tiers: Vercel Hobby, Sanity Free, Resend free (not yet enabled), Cloudflare Web Analytics (not yet added).
- **Plain language** in everything he sees: Studio labels, descriptions and error messages. No jargon.
- **Content rules**: press items show only the headline, a short excerpt, a thumbnail and links to the original and the archived copy. Never republish full article text. Never invent facts about him; use placeholders like `[Role]`.

**Live site:** https://dr-nikhil-agarwal.vercel.app · **Studio:** https://dr-nikhil-agarwal.vercel.app/studio
**Repo:** https://github.com/04rishabhgupta/PortfolioArticleCMS (branch `main`; Akshat works on `akshat` and merges via PRs)

---

## 2. Stack and versions

| Piece | Version | Notes |
|---|---|---|
| Next.js | 16.3 (App Router, Turbopack) | TypeScript, React 19 |
| Sanity | v6 (`sanity` 6.17) | Studio is embedded in the Next app at `/studio` |
| next-sanity | 13.3 | client, Studio wrapper, `parseBody` for webhooks |
| @sanity/ui | 4 | Studio custom components |
| @sanity/icons | 5 | **import from subpaths** (see Gotchas) |
| @sanity/image-url | 2 | `createImageUrlBuilder` |
| open-graph-scraper | 6 | reads metadata from news pages |
| geist | 1.7 | Geist Sans font |
| tsx | dev only | runs the offline tests |

Sanity project: **`8v8936ib`**, dataset **`production`** (public read). Node 20+ works; the last checks ran on Node 26.

---

## 3. Running it locally

```bash
npm install
cp .env.example .env.local     # then fill in values (see section 4)
npm run dev                    # http://localhost:3000 and http://localhost:3000/studio
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack). Output goes to `.next/dev`. |
| `npm run build` | Production build. **Run it before calling anything done.** |
| `npm start` | Serves the production build. |
| `npm run lint` | Type check only (`tsc --noEmit`); there is no ESLint. |
| `npm test` | Offline tests for the link-reading logic (`scripts/test-unfurl.mts`). |

**Designing without real content:** set `MOCK_CONTENT=1` in `.env.local`. Every page fills with bracketed sample content from `lib/sanity/mock.ts`. It only works in development (`MOCK_CONTENT=force` would also work in production; don't use that).

To sign in to the local Studio, `http://localhost:3000` must be in Sanity's CORS origins (section 18).

Only one `next dev` can run per project folder. A second one prints "existing server at …" and exits.

---

## 4. Environment variables

The template is `.env.example`. Locally they go in `.env.local`, which git ignores. On Vercel they go under Project → Settings → Environment Variables. **Redeploy after changing any of them.**

| Variable | Needed for | Secret? | Value / notes |
|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | everything | no | `8v8936ib` (also the fallback in `sanity/env.ts`) |
| `NEXT_PUBLIC_SANITY_DATASET` | everything | no | `production` (fallback too) |
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, sitemap, share links, share images, Studio "View live site" | no | `https://dr-nikhil-agarwal.vercel.app` (no trailing slash). Change it when a custom domain is added. Fallback: `http://localhost:3000`. |
| `SANITY_REVALIDATE_SECRET` | `/api/revalidate` | **yes** (mark Sensitive) | Long random string (`openssl rand -hex 32`). Must match the Secret in the Sanity webhook. Missing → the route returns `{"error":"Not configured"}`. |
| `RESEND_API_KEY` | contact form | **yes** | Not set yet. While it or `CONTACT_TO_EMAIL` is missing, the form is hidden and the contact page shows his email instead. |
| `CONTACT_TO_EMAIL` | contact form | no | Where messages go. Before a domain is verified in Resend, this can only be the Resend account's own email. |
| `CONTACT_FROM_EMAIL` | contact form (optional) | no | Defaults to `Website <onboarding@resend.dev>`. Needs a domain verified in Resend. |
| `MOCK_CONTENT` | dev only | no | `1` = sample content (section 3). |

`NEXT_PUBLIC_*` values are built into the pages and are visible to browsers. Never put a secret in one.

---

## 5. Folder map

```
app/
  layout.tsx                 Root <html>: lang en-IN, no-flash theme script
  icon.tsx, apple-icon.tsx   "NA" monogram favicon / iPhone icon (generated PNG)
  manifest.ts                Web app manifest
  robots.ts, sitemap.ts      SEO files
  fonts.ts                   Newsreader (local woff2) + Geist
  fonts/                     Newsreader woff2; fonts/og/*.ttf for share images
  share/route.ts             iPhone Shortcut entry point → Studio
  studio/[[...tool]]/page.tsx  Embedded Sanity Studio
  api/
    unfurl/route.ts          Read details from a news link
    unfurl/image/route.ts    Download a news picture (for saving to Sanity)
    archive/route.ts         Ask the Wayback Machine to save a copy
    contact/route.ts         Contact form → Resend
    revalidate/route.ts      Sanity webhook → refresh cached pages
  (site)/                    Public site (route group; doesn't affect URLs)
    layout.tsx               Header, footer, fonts, site metadata
    site.css                 ALL public-site styles and design tokens
    page.tsx                 Home
    press/page.tsx           In the Press
    writing/page.tsx         Writing list
    writing/[slug]/page.tsx  Article page
    writing/[slug]/opengraph-image.tsx  Share picture per article
    opengraph-image.tsx      Default share picture
    about/, speaking/, contact/, not-found.tsx

components/                  Public-site React components (see section 10)
lib/
  sanity/client.ts           Sanity client, image URL builder, sanityFetch()
  sanity/queries.ts          ALL GROQ queries + TypeScript types
  sanity/mock.ts             Sample content for MOCK_CONTENT
  safe-fetch.ts              SSRF-safe fetch, size-limited reads, same-origin check
  unfurl.ts                  Extract headline/date/etc. from news HTML
  publications.ts            Known Indian outlets by domain
  links.ts                   Find a link in shared text, strip tracking tags
  format.ts                  Dates (IST), labels, reading time, fallback name
  og.tsx                     Share-image card renderer
  monogram.tsx               "NA" icon renderer

sanity/
  env.ts                     projectId, dataset, apiVersion, siteUrl
  schemas/                   Content types (section 7)
  structure.ts               Studio sidebar + Preview tab
  actions.ts                 Auto web address (slug) on publish
  components/
    Dashboard.tsx            Studio home screen
    LinkUnfurlInput.tsx      "Paste a link" field for press coverage
    PressPreview.tsx         Preview tab for press entries
    Signature.tsx            (unused; see Known issues)
  lib/press-fetch.ts         Studio-side helpers that call the API routes

sanity.config.ts             Studio configuration ('use client')
next.config.ts               Image domains, font file tracing
scripts/test-unfurl.mts      Offline tests
docs/preview/*.png           Day 2 design screenshots
CLAUDE.md                    Brief for AI assistants (constraints, gotchas)
README.md                    Short setup guide
```

---

## 6. How it fits together

```
 Dr. Agarwal (laptop or iPhone)
        │
        ▼
  /studio  (Sanity Studio, runs in the browser, inside this Next app)
        │  pastes link ──► /api/unfurl, /api/unfurl/image, /api/archive  (server, SSRF-safe)
        │  publishes ───► Sanity Content Lake (project 8v8936ib / production)
        │                         │
        │                         │ webhook on create/update/delete
        │                         ▼
        │                 /api/revalidate ──► revalidateTag(type)
        ▼
  Public pages (server components) ── sanityFetch(query, tags) ──► Sanity API
        cached by Next.js for 1 hour, refreshed early by the webhook
```

- **One deployment** serves the public site, the Studio and the API routes.
- **Public pages** are server-rendered and cached (ISR). Each Sanity fetch carries cache tags named after the content type. When the webhook fires for a type, every page that used that type refetches on its next request. Without the webhook, pages still refresh every hour.
- **The Studio** talks to Sanity directly from the browser with his login. It calls our own API routes only for things a browser can't do (fetching other websites).

---

## 7. Content model (Sanity schemas)

All in `sanity/schemas/`. `index.ts` exports `schemaTypes` and `SINGLETONS = ['profile', 'siteSettings']`.

### `pressMention`: "Press coverage"
| Field | Type | Notes |
|---|---|---|
| `url` | url, required | Custom input `LinkUnfurlInput`. Async validation blocks duplicates (same `url` in another document). |
| `headline` | string, required | |
| `publication` | reference → publication, required | Auto-matched or auto-created from the link. |
| `publishedAt` | date, required | Can't be in the future. |
| `category` | string, required | `appointment` / `interview` / `feature` / `mention` (radio). Auto-guessed from the headline. |
| `excerpt` | text | Warning above 320 characters. |
| `image` | image (hotspot) + `alt` | Downloaded and stored in Sanity so it survives link rot. |
| `featured` | boolean | "Show on homepage": pinned first on Home and on In the Press. |
| `archiveUrl` | url, read-only | Wayback Machine copy. |

### `article`: "Article"
Groups: **Writing** (default) and **Details**.
| Field | Type | Notes |
|---|---|---|
| `title` | string, required, ≤140 | |
| `standfirst` | text, required, ≤280 | Shown as "Summary". |
| `coverImage` | image + `alt`, `caption` | |
| `body` | Portable Text | Styles: normal, h2, h3, blockquote; bullet/number lists; bold, italic, link; plus `pullQuote` objects and inline images (`alt`, `caption`). Leave empty for link-only op-eds. |
| `kind` | string | Essay, Opinion, Op-ed, Speech, Interview |
| `topic` | string | One or two words. |
| `publishedAt` | datetime, required | **A future date schedules it** (hidden until then). |
| `originallyPublished` | object `{ publication → ref, url }` | For pieces that ran elsewhere. If `body` is empty, list items link straight to this URL. |
| `featured` | boolean | "Show first on homepage". |
| `slug` | slug (source: title, ≤80) | Filled in automatically on Publish (`sanity/actions.ts`). |

### `profile` (singleton, `_id: "profile"`): "My profile"
`name`, `positioning` (one-line intro, ≤180), `portrait` (+ `credit`), `shortBio`, `fullBio` (Portable Text, paragraphs only), `currentRoles[]` (`label`, `title`, `organisation`; max 4, first one is the "lead role"), `timeline[]` (`year`, `title`, `organisation`, `highlight`), `contactEmail`, `socials { linkedin, x }`.

### `publication`: "Publication"
`name` (required), `domains[]` (tags; used to match pasted links), `logo` (not rendered anywhere yet), `showInFeaturedStrip` ("Always show in 'As featured in'").

### `siteSettings` (singleton, `_id: "siteSettings"`): "Site settings"
`title` (browser tab / Google), `description` (≤170, warning), `shareImage` (default share picture, 1200×630; overrides the generated card), `mediaKit` (file; download button on Speaking).

**Singletons** can only be published, discarded or restored; they can't be created or deleted. They're also hidden from the global "Create" menu.

---

## 8. The Studio (`/studio`)

- **Route:** `app/studio/[[...tool]]/page.tsx` renders `<NextStudio config={config} />` and is static.
- **Config:** `sanity.config.ts` (must start with `'use client'`):
  - a **Home** tool (`sanity/components/Dashboard.tsx`) placed first;
  - `structureTool` with the custom sidebar from `sanity/structure.ts`: Press coverage, My articles, (divider), My profile, Publications, Site settings;
  - `visionTool` (GROQ playground) **only in development**;
  - template **`pressMention-from-link`** (param `url`) used by iPhone sharing; hidden from the global Create menu;
  - document actions: singletons limited to publish/discard/restore; articles get `withAutoSlug` wrapped around Publish.
- **Dashboard** (`Dashboard.tsx`):
  - greeting in IST and a "View live site" button;
  - **Add press coverage**: paste a link → strips tracking tags → if the URL already exists, opens that entry; otherwise creates a draft `pressMention` and opens it (the field then auto-fetches);
  - **Write an article** button;
  - **Recent**: the last 8 press items and articles with a status badge (Published / Draft / Unpublished changes / Scheduled), updated live through `client.listen`.
- **Press entry Preview tab** (`PressPreview.tsx`): shows the entry roughly as visitors will see it.

---

## 9. The press "paste a link" pipeline

The field component is `sanity/components/LinkUnfurlInput.tsx`, with helpers in `sanity/lib/press-fetch.ts`.

**Trigger:** 500 ms after a valid URL is in an entry that has no headline yet. It also runs from the **Fetch details** button; once a fetch has run, the button reads "Fetch again" and replaces existing values.

**Steps:**
1. **Duplicate check** with a GROQ count on `url`. If found, it shows "already on your site" and stops.
2. **`GET /api/unfurl?url=`** (server):
   - `safeFetch` checks every redirect hop and allows only public IPs (blocks localhost, private ranges, `.local`/`.internal`), with a 10 s timeout. `readLimited` caps the page at 4 MB.
   - 401/403 from the site → friendly "this site blocked the automatic fetch" message; non-HTML → "fill in by hand".
   - `extractDetails(html, url)` in `lib/unfurl.ts` uses open-graph-scraper plus JSON-LD (`@graph` flattened):
     - **publication**: `lib/publications.ts` domain map first, then `og:site_name`, then the JSON-LD publisher;
     - **headline**: JSON-LD headline, then `og:title`, Twitter, DC; trailing " | Site Name" or " - Times…" suffixes are removed when they look like a site name;
     - **date**: converted to a `YYYY-MM-DD` date in IST; dates more than a day in the future are rejected;
     - **excerpt**: entities decoded and cut to 280 characters at a word boundary;
     - **image**: made into an absolute URL;
     - `missing[]` lists what couldn't be found.
3. In parallel:
   - **publication**: `findOrCreatePublication` matches on `domains` or the name (case-insensitive) and creates a new publication if needed;
   - **picture**: `GET /api/unfurl/image` proxies the image (images only, no SVG, ≤10 MB), then `client.assets.upload` stores it in Sanity. Its `alt` defaults to the headline;
   - **archive**: `POST /api/archive` returns `https://web.archive.org/web/2/<url>` straight away and asks the Wayback Machine to save the page in the background (`after()`).
4. Fills only **empty** fields, unless "Fetch again" was used. `guessCategory()` sets Appointment or Interview from headline keywords.
5. Shows "Details found" or lists the fields it couldn't find.

**To improve publication matching**, add domains to `KNOWN_PUBLICATIONS` in `lib/publications.ts`, or add them in the Studio under Publications → Website addresses.

---

## 10. The public site

Every page is a server component in `app/(site)/` that calls `sanityFetch` and renders with the components in `components/`.

| URL | File | Data | Notes |
|---|---|---|---|
| `/` | `page.tsx` | profile, press, articles, featured publications | See the Home sections below. |
| `/press` | `press/page.tsx` | press | Pinned (`featured`) story, then `PressBrowser`: client-side filters by type, year and search; groups by year. Media-kit call to action at the bottom. |
| `/writing` | `writing/page.tsx` | articles | Lead article, then the rest grouped by year. |
| `/writing/[slug]` | `writing/[slug]/page.tsx` | article, 2 related, profile | Static params for every live slug, plus `dynamicParams` for new ones. Reading progress bar, share buttons, cover, body, "Originally published in" link, author box, JSON-LD Article. |
| `/about` | `about/page.tsx` | profile | Full bio (falls back to the short bio), current roles, timeline, JSON-LD Person. |
| `/speaking` | `speaking/page.tsx` | profile, settings | Approved bio with a "Copy biography" button, portrait with a high-res download, media kit download. |
| `/contact` | `contact/page.tsx` | profile | The form appears only if the Resend env vars are set; otherwise the email and LinkedIn are shown. |
| 404 | `not-found.tsx` | none | |

**Home sections, in order:**
1. **Hero**: lead role (first `currentRoles`, falling back to "Independent Director, Hindustan Aeronautics Limited (HAL)", typed in `page.tsx` and `opengraph-image.tsx`), name split over two lines, `positioning`, buttons and portrait. This is the site's single entrance animation (`.reveal` + `--d` delays).
2. **Roles strip**: all current roles.
3. **As featured in**:
   - **What it lists:** every publication referenced by a published press item or a live article, plus any with `showInFeaturedStrip`. Publications that appear most often come first (`featuredPublicationsQuery`).
   - **How it's shown:** an infinite scrolling marquee. The list is duplicated and the track animates `translateX(-50%)` over 32 s (24 s on phones). It pauses on hover and stops when the visitor has asked their device for reduced motion.
4. **Featured coverage**: `press[0]`. The press query orders `featured` items first, then newest.
5. **Writing**: the lead article is the `featured` one, else the newest; up to 3 others are listed.
6. **In the Press**: the 4 most recent items other than the featured one.
7. **About**: short bio plus the first 5 timeline entries.
8. **Contact band**: email, "Write to him", "Media kit".

**Components** (`components/`):
- **Layout:**
  - `SiteHeader` (client): desktop nav, phone menu, theme toggle. The home link is currently the plain text "Dr. Nikhil Agarwal".
  - `SiteFooter`: name, LinkedIn, X, email and media kit links, ©.
  - `ThemeToggle`: plus `themeScript`, the no-flash snippet.
- **Content:**
  - `Press.tsx`: `PressFeature`, `PressCard`, `PressRow`.
  - `Articles.tsx`: `ArticleLead`, `ArticleItem`. A link-only op-ed links straight out.
  - `ArticleBody`: Portable Text renderer for headings, links, pull quotes and images.
  - `SanityImg` (client): fixed-ratio crop through the Sanity CDN, with a blur preview from `lqip` and a placeholder block when there's no image.
- **Interactive:**
  - `PressBrowser` (client): the filters on In the Press.
  - `ContactForm` (client): includes a hidden field that catches spam bots.
  - `ShareButtons` (client): on phones (≤600 px, when `navigator.share` exists) it shows **Share**, which opens the native share sheet, plus **Copy link**. Elsewhere it shows LinkedIn, X, WhatsApp and Copy link.
  - `CopyText`: copy-to-clipboard button.
- **Small pieces:**
  - `ReadingProgress`: the bar on article pages.
  - `Icons`: inline SVG icons.
  - `JsonLd`: `personData()` and `articleData()`, built only from Profile fields.

**Dark mode:** the `data-theme` attribute on `<html>` (`light` / `dark`) is set by the toggle and remembered in `localStorage`. With no choice saved, it follows the system setting through `@media (prefers-color-scheme)`. The script in `app/layout.tsx` applies the saved choice before the page paints.

---

## 11. Data fetching, caching and the publish webhook

**`sanityFetch(query, params, tags, fallback)`** in `lib/sanity/client.ts`:
- **Never throws.** On any error it logs and returns `fallback`, so a Sanity outage shows empty states, not crashes.
- `next: { revalidate: 3600, tags }`: cached for 1 hour, and can be refreshed early by tag.
- Returns mock data when `MOCK_CONTENT=1` (dev).
- The client uses `useCdn: false`, `perspective: 'published'`. Pages are cached by Next, so Sanity is hit rarely; skipping Sanity's CDN means a webhook-triggered refresh never gets stale data.

**Cache tags in use:** `profile`, `siteSettings`, `pressMention`, `publication`, `article`. When you add a query, tag it with every content type it reads (including references).

**Queries** (all in `lib/sanity/queries.ts`, with their TypeScript types):
- `liveArticle` = `_type == "article" && defined(slug.current) && publishedAt <= now()`. This is what makes scheduled articles stay hidden.
- `profileQuery`, `settingsQuery`, `pressQuery`, `featuredPublicationsQuery`, `articlesQuery`, `articleQuery($slug)`, `articleSlugsQuery`, `relatedArticlesQuery($slug)`.
- Reading time = `length(pt::text(body)) / 5 / 220` words per minute.
- `app/sitemap.ts` has its own small query.

**Scheduled articles** appear within an hour of their `publishedAt`, at the next hourly refresh. The webhook doesn't fire at that moment, because nothing changes in Sanity then.

**Publish webhook:** `POST /api/revalidate`
- `parseBody(req, SANITY_REVALIDATE_SECRET, true)` checks the HMAC signature and waits until the change is readable from Sanity.
- Invalid signature → 401. Missing secret → 500 "Not configured". A type it doesn't know → 200 `revalidated: false`.
- Calls `revalidateTag(type, { expire: 0 })`, which expires immediately. A change to `publication` also refreshes `article`.
- **Sanity side** (sanity.io/manage → project → API → Webhooks), name "Refresh website on publish":
  - URL: `https://dr-nikhil-agarwal.vercel.app/api/revalidate`
  - Dataset: `production`
  - Trigger on: Create, Update, Delete
  - Filter: `_type in ["article", "pressMention", "profile", "publication", "siteSettings"]`
  - Projection: `{_type}`
  - Drafts: off · Method: POST · Secret: same as `SANITY_REVALIDATE_SECRET`
- **To test:**
  ```bash
  curl -X POST https://<site>/api/revalidate
  ```
  Without a signature this should return `Invalid signature`. `Not configured` means the env var isn't set on that deployment. A real publish should show **200** in the webhook's "attempts log" in Sanity.

---

## 12. API routes

All run on the Node runtime and are dynamic.

| Route | Method | Guard | Purpose |
|---|---|---|---|
| `/api/unfurl?url=` | GET | same-origin | Returns `UnfurlResult` JSON (`url, domain, headline, publicationName, publishedAt, excerpt, imageUrl, missing[]`), or `{ error }` with a friendly message. |
| `/api/unfurl/image?url=` | GET | same-origin | Image bytes (no SVG, ≤10 MB). |
| `/api/archive` | POST `{url}` | same-origin | `{ archiveUrl }`; the save happens in the background. |
| `/api/contact` | POST JSON | same-origin + honeypot | Validates, then sends through Resend REST. 503 if not configured. |
| `/api/revalidate` | POST | HMAC signature | See section 11. |
| `/share?url=` / `?text=` | GET | none (redirect only) | See section 13. |

"Same-origin" (`isSameOrigin` in `lib/safe-fetch.ts`) compares the `Origin`/`Referer` host with the request host. It stops other websites from using these routes, but a script can fake the headers. Combined with the SSRF guard, that's acceptable for this site.

---

## 13. iPhone sharing (`/share` + iOS Shortcut)

He uses an iPhone, so there is no Android share target.

**`GET /share`** (`app/share/route.ts`):
1. Takes `?url=` or `?text=` and finds the first `http(s)` link (`firstLink` in `lib/links.ts`).
2. Removes tracking parameters (`utm_*`, `fbclid`, `gclid`, `igshid`, `mc_cid`, `mc_eid`, `ref_src`) and the `#fragment` (`cleanLink`).
3. Redirects (303) to the Studio intent:
   `/studio/intent/create/template=pressMention-from-link;type=pressMention/<base64url(JSON {url})>`
   The last path segment is how Sanity's router passes template parameters (`encodeJsonParams`). The Studio opens a new press entry with `url` filled in, and `LinkUnfurlInput` auto-fetches.
4. With no link found, it redirects to `/studio`.

**iOS Shortcut** (set up once on his phone):
1. Shortcuts app → **+** → name it **Add to my website**.
2. **ⓘ** → turn on **Show in Share Sheet**; under Receives, keep URLs, Safari web pages and Text.
3. Add the action **URL Encode** (input: Shortcut Input).
4. Add the action **Open URLs**: `https://dr-nikhil-agarwal.vercel.app/share?url=` followed by the *URL Encoded Text* variable.
5. He must be signed in to the Studio in Safari once.

**Usage:** in Safari or a news app, Share → **Add to my website**.

---

## 14. SEO, share images, icons

- **Metadata:**
  - `app/(site)/layout.tsx` sets `metadataBase` (`NEXT_PUBLIC_SITE_URL`), a title template (`%s | <site title>`), the description, Open Graph (`en_IN`, website) and a large Twitter card.
  - Each page sets its own title and description; article pages also set a canonical URL and Open Graph `article` with `publishedTime`.
- **Share images** (`next/og`, rendered by `lib/og.tsx`):
  - `app/(site)/opengraph-image.tsx` is the default for every page. It uses Site settings → *Default share picture* if one is uploaded; otherwise it draws a card with his name, lead role and positioning.
  - `writing/[slug]/opengraph-image.tsx` draws a card with the article title and kind/topic.
  - The renderer (satori) **can't read woff2**, so static TTFs live in `app/fonts/og/` (`Newsreader-Medium.ttf` from Google Fonts, `Geist-Regular.ttf` copied from the `geist` package). `next.config.ts` → `outputFileTracingIncludes` makes Vercel ship them.
- **JSON-LD:**
  - Person on Home and About. Its `@id` is `<site>/#person`; it includes `jobTitle` and `worksFor` from the first current role, the portrait, and `sameAs` from his social links.
  - Article (or `OpinionNewsArticle` for Op-ed/Opinion) on article pages, with `isBasedOn` set to the original URL.
- **`/robots.txt`**: allows everything except `/studio`, `/api/` and `/share`; points to the sitemap.
- **`/sitemap.xml`**: the static pages plus every live article, with its `_updatedAt` as `lastModified`.
- **Icons:** `app/icon.tsx` (64 px) and `app/apple-icon.tsx` (180 px) render an "NA" monogram in Newsreader, cream on navy (`lib/monogram.tsx`). `app/manifest.ts` is a minimal web app manifest.

---

## 15. Styling and design system

**All public-site CSS is in `app/(site)/site.css`.** There are no CSS modules and no Tailwind. The Studio uses @sanity/ui.

**Direction:** editorial and restrained. Newsreader (serif) for headlines and reading, Geist for interface text. Ink on paper with one navy accent.

**Tokens** (on `:root`, with dark values under `prefers-color-scheme` and `[data-theme='dark']`):

| Token | Light | Dark |
|---|---|---|
| `--paper` | `#f7f5f0` | `#111317` |
| `--ink` | `#15171c` | `#ece8df` |
| `--muted` | `#575c66` | `#9ea3ac` |
| `--rule` | `#dcd7cc` | `#2c3038` |
| `--accent` | `#1e3a5f` (navy) | `#a9c1e2` |
| `--band` | `#efece5` | `#181b20` |

Also `--ink-2`, `--surface`, `--placeholder`, `--accent-ink`, `--accent-soft`, `--dark*`, `--focus`; layout `--wrap: 1200px`, `--gutter`, `--section`, `--radius`, `--ease`.

**Conventions:**
- Resets are wrapped in `:where(.site)` (zero specificity), so component classes always win.
- Font stacks (`--serif`, `--sans`) are defined on `.site`, not `:root`, because `next/font` puts its variables on that element.
- Class names follow BEM: `block__element--modifier`.
- Layout helpers: `.wrap` (page width + gutters), `.measure` (article text column, ~680 px), `.measure-wide`.
- Article body: 21 px, line-height 1.65, about 66 characters per line (`.prose`).
- **Breakpoints:** 860 px (desktop nav ↔ menu button; most two-column → one-column), 760 px (hero and press feature stack), **600 px (phone-only refinements block near the end of the file)**, 700 px (marquee). When asked to change phones only, put rules inside the `@media (max-width: 600px)` block so desktop stays identical.
- **Motion:** the hero `.reveal` sequence is the intended single animated moment. Respect `prefers-reduced-motion` in anything new.
- **Brief rules** (from the approved wireframes): no ALL-CAPS eyebrow labels everywhere, no "→" on every link, no fade-in-on-scroll.

**Fonts:** `app/fonts.ts`. Newsreader is a variable font (weights 200–800, plus italic), self-hosted in `app/fonts/` and exposed as `--font-serif`. Geist comes from the `geist` package and is exposed as `--font-geist-sans`.

---

## 16. Accessibility rules

Target WCAG 2.1 AA and Lighthouse 95+ on mobile.

- Visible focus: `.site :focus-visible` draws a 2 px outline.
- Touch targets ≥ 44 px (buttons, nav links, pills, share buttons). A card title link uses `.stretched`, which makes the whole card clickable, so the title itself can be smaller.
- There's a skip link ("Skip to content" → `#main`).
- Form fields are ≥ 16 px on phones; anything smaller makes iOS zoom in.
- Links that open in a new tab carry an `sr-only` "(opens in a new tab)".
- Decorative images use `alt=""`. Press pictures default to the headline as alt text.

---

## 17. Testing and checks

Before calling a change done:

```bash
npx tsc --noEmit      # or npm run lint
npm run build
npm test              # if you touched lib/unfurl.ts or lib/publications.ts
```

- `scripts/test-unfurl.mts` runs `extractDetails` on four offline HTML snippets: OG + date, JSON-LD only, an unknown site with entities, and a headline with a genuine dash. **Add a case whenever you fix a parsing bug.**
- There are no browser or end-to-end tests. For visual checks, run `MOCK_CONTENT=1 npm run dev` and look at 390 px (phone) and 1280 px (desktop) in both themes.
- To check the webhook signature locally, use `encodeSignatureHeader` from `@sanity/webhook` against `next start` with a test secret.

---

## 18. Deployment and external services

**Vercel (Hobby):**
- The project is imported from the GitHub repo, and **every push to `main` deploys to production**. Other branches get preview URLs.
- Env vars: see section 4. Redeploy after changing them.
- Domain: `dr-nikhil-agarwal.vercel.app`. **If you add a custom domain:**
  - update `NEXT_PUBLIC_SITE_URL`;
  - add the domain to Sanity CORS;
  - update the webhook URL;
  - update his iOS Shortcut URL.

**Sanity (sanity.io/manage → project `8v8936ib`):**
- **Dataset** `production`, public read.
- **API → CORS origins** (with *Allow credentials*): `http://localhost:3000`, `https://dr-nikhil-agarwal.vercel.app`, plus any future domain. Without these, the Studio can't load or sign in from that address.
- **API → Webhooks**: "Refresh website on publish" (section 11).
- **Members**: Dr. Agarwal as Administrator.

**Resend:** not enabled yet. To turn on the contact form:
1. Create a Resend account.
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, then redeploy. The form appears automatically.
3. To send from his own domain, verify it in Resend and set `CONTACT_FROM_EMAIL`.

**Internet Archive:** no account needed. Archiving is best-effort.

**Git:**
- `.gitignore` excludes `node_modules/`, `.next/`, `next-env.d.ts` and `.env*` (except `.env.example`).
- Early commits accidentally included `node_modules`, so the repo history is about 700 MB. That's harmless, but cloning is slow. A history rewrite plus a force-push would fix it; a backup bundle was saved as `~/Desktop/PortfolioArticleCMS-history-backup.bundle`.

---

## 19. How to make common changes

**Add a field to a content type**
1. Add a `defineField` in `sanity/schemas/<type>.ts` with a plain-language `title` and `description`.
2. Add it to the type and the GROQ projection in `lib/sanity/queries.ts`.
3. Render it in the page or component.
4. If the field is used for dev design work, add a value in `lib/sanity/mock.ts`.
5. Deploy. Schema changes go live with the Studio; no separate Sanity deploy is needed.

**Add a new content type**
1. Create the schema.
2. Register it in `sanity/schemas/index.ts`.
3. Add a sidebar entry in `sanity/structure.ts`.
4. Add the queries.
5. Use a **new cache tag** equal to the type name, add the type to `KNOWN_TYPES` in `app/api/revalidate/route.ts`, and add it to the **webhook filter** in Sanity.

**Add a page**
1. Create `app/(site)/<name>/page.tsx` (a server component) and export `metadata`.
2. Fetch with `sanityFetch(..., tags, fallback)`.
3. Add the link to `NAV` in `components/SiteHeader.tsx` (it appears on desktop and in the phone menu).
4. Add the path to `app/sitemap.ts`.
5. Add styles to `site.css`.

**Add or rename a nav link**
Edit `NAV` in `components/SiteHeader.tsx`. "Get in touch" is appended separately.

**Teach the CMS a new news site**
Add `'domain.com': 'Proper Name'` to `KNOWN_PUBLICATIONS` in `lib/publications.ts`. Subdomains match automatically.

**Change colours or fonts**
- Colours: edit the tokens at the top of `site.css`, in all three places (light, `prefers-color-scheme: dark`, `[data-theme='dark']`).
- Share images and icons have colours hard-coded in `lib/og.tsx` and `lib/monogram.tsx`.
- Fonts: `app/fonts.ts`, plus the TTFs in `app/fonts/og/` for share images.

**Change what "As featured in" shows**
`featuredPublicationsQuery` in `lib/sanity/queries.ts`. The markup and marquee are in `app/(site)/page.tsx` and at the end of `site.css`.

**Change the press link reader**
`lib/unfurl.ts` (extraction), `sanity/components/LinkUnfurlInput.tsx` (what gets filled in), `sanity/lib/press-fetch.ts` (publication matching, category guess). Run `npm test`.

**Change Studio wording**
Field `title`/`description` live in the schemas; dashboard text is in `Dashboard.tsx`; the sidebar is in `structure.ts`. Keep it jargon-free.

**Turn on the contact form**
Set the Resend env vars (section 18).

**Turn on live preview of drafts** (not built)
1. Create a Viewer token in Sanity and add it as `SANITY_API_READ_TOKEN` (secret).
2. Use `defineLive` from `next-sanity/live` plus Draft Mode, and add the Presentation tool to the Studio.

---

## 20. Gotchas

**Library versions**
- **@sanity/icons v5**: `import { LinkIcon } from '@sanity/icons/Link'`. Importing from the package root types icons as `never`.
- **@sanity/ui v4**: `Stack` uses `gap`, not `space`. `Grid` has no `columns` prop; use `Flex wrap`.
- **@sanity/image-url v2**: `import { createImageUrlBuilder } from '@sanity/image-url'`.
- **`sanity.config.ts` must start with `'use client'`.**
- **Next 16 `revalidateTag`** needs two arguments. From a route handler, use `revalidateTag(tag, { expire: 0 })`; `updateTag` only works in Server Actions.
- **Next 16 `params`** in pages and `opengraph-image` files is a Promise: `const { slug } = await params`.
- **The share-image renderer (satori) can't read woff2.** Use TTF/OTF, and keep `outputFileTracingIncludes`.

**Content and caching**
- **Child `openGraph` replaces the parent's** in Next metadata; it doesn't merge. Pages that set their own `openGraph` must set everything they need.
- **Press `publishedAt` is a date** (no time). **Article `publishedAt` is a datetime.** `formatDate` reads plain dates at noon IST so they never shift a day.
- **Hourly refresh:** without the webhook, edits take up to an hour to show, and scheduled articles appear within an hour of their time.
- **Only one `next dev` per folder.**
- **Generated files churn:** `next-env.d.ts` switches between `.next/dev/types` and `.next/types` after dev and build runs. It's git-ignored for that reason.

---

## 21. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| The Studio is blank or shows a CORS error | Add the current origin to Sanity CORS origins with credentials. |
| A published change isn't on the live site | Webhook not firing or misconfigured. Check the attempts log in Sanity; `curl -X POST <site>/api/revalidate` should say `Invalid signature`. `Not configured` means the env var is missing → set it and redeploy. |
| The webhook log shows 401 | The Secret in Sanity doesn't match `SANITY_REVALIDATE_SECRET`. |
| A pasted link fills nothing | The site blocks bots (401/403), isn't HTML, or timed out; the Studio says which. Fill in by hand. For a repeat offender, add its domain to `lib/publications.ts`. |
| The wrong publication name | Add the domain to `KNOWN_PUBLICATIONS`, or fix the Publication's *Website addresses* in the Studio. |
| A picture doesn't save | The image is >10 MB, SVG, or blocked by the site. Upload it by hand. |
| An article isn't showing | Its `publishedAt` is in the future (scheduled), it has no slug (publish again), or it's still a draft. |
| The share preview shows `localhost` | `NEXT_PUBLIC_SITE_URL` isn't set on Vercel, or it was set without a redeploy. |
| The contact page shows only an email | Expected until the Resend env vars are set. |
| The build fails on fonts in an OG route | A TTF is missing from `app/fonts/og/`, or the tracing include was removed. |
| WhatsApp or LinkedIn shows an old preview | They cache previews. Use LinkedIn Post Inspector to refresh; for WhatsApp, add `?v=2` to the URL. |

---

## 22. Known issues and backlog

**Open issues** in the current code (after Akshat's merges, 7–8 Oct 2026):
1. **A stray file was committed:** `h origin akshat` is the `less` pager's help text from a mistyped command. Delete it.
2. **The header name has no styling.** `SiteHeader` renders `<span class="site-header__name">Dr. Nikhil Agarwal</span>` inside `.signature-link`. The name is typed into the code instead of read from the Profile, and `.site-header__name` has no CSS.
3. **Unused signature code:** `components/Signature.tsx` and the `.signature` CSS (desktop rule plus a phone rule) are no longer used.
4. **Screen readers get no publication names in "As featured in":** the marquee is entirely `aria-hidden`. Add an `sr-only` list of the names.
5. **The design brief is bent in two places:** the "As featured in" label is uppercase and tracked, and the marquee is a second continuous animation. Either accept this or restyle it.
6. **Desktop-only polish (left alone on purpose):**
   - On the About page, the intro sits with no gap under the title.
   - Article thumbnails can stretch next to long summaries.
   Both are already fixed in the ≤600 px block.
7. **LinkedIn** is stored as the publication "Linkedin" (lowercase i) and appears in "As featured in" because three articles reference it.

**Backlog / not built yet:**
- Live preview of draft articles (needs a read token; see section 19).
- Contact form email (Resend).
- Cloudflare Web Analytics (free; add its script tag in `app/layout.tsx`).
- Lighthouse audit on real content.
- A plain-language user guide for Dr. Agarwal.
- `publication.logo` is stored but never displayed.
- Optional: shrink the repo history (see section 18).
