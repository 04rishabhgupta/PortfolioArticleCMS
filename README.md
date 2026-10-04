# Dr. Nikhil Agarwal — website and Studio

Next.js site with an embedded Sanity Studio at `/studio`.

## Run it locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio

## One-time Sanity setup (sanity.io/manage → project 8v8936ib)

1. **Datasets:** make sure a dataset called `production` exists (public).
2. **API → CORS origins:** add each address the Studio runs on, with **Allow credentials** ticked:
   - `http://localhost:3000`
   - your Vercel address, e.g. `https://portfolio-article-cms.vercel.app`
   - the real domain once connected
3. **Members:** invite Dr. Agarwal's Google email as **Administrator**.

## Deploy (Vercel)

1. Import the GitHub repo at vercel.com/new.
2. Add environment variables (from `.env.example`):
   `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL` (the live address).
3. Deploy, then add the Vercel address to Sanity's CORS origins (step 2 above).

## What's where

| Path | What it does |
|---|---|
| `sanity.config.ts` | Studio setup: Home dashboard, sidebar, publish rules |
| `sanity/schemas/` | Content types: Press coverage, Article, Profile, Publication, Site settings |
| `sanity/components/LinkUnfurlInput.tsx` | Paste a link → details fill in automatically |
| `sanity/components/Dashboard.tsx` | The Studio home screen |
| `sanity/components/PressPreview.tsx` | "Preview" tab on press entries |
| `app/api/unfurl` | Reads headline, publication, date, excerpt and picture from a news link |
| `app/api/unfurl/image` | Downloads the article picture so it can be stored in Sanity |
| `app/api/archive` | Saves a backup copy on the Internet Archive |
| `lib/publications.ts` | Known Indian publications by domain — add more any time |

## Previewing the design without content

Set `MOCK_CONTENT=1` in `.env.local` and run `npm run dev`. Every page fills with bracketed sample content. Remove it once real content is in the Studio.

## Contact form

Create a free Resend account, then set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (in `.env.local` and in Vercel). Until you verify a domain in Resend, mail can only go to the address you signed up with.

## Tests

`npm test` runs offline checks of the link-reading logic.
