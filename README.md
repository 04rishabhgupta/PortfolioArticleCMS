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

## Publish webhook (changes appear within seconds)

1. Make a long random password, e.g. run `openssl rand -hex 32`.
2. Vercel → Settings → Environment Variables: add `SANITY_REVALIDATE_SECRET` with that password, then redeploy.
3. sanity.io/manage → project → **API → Webhooks → Create webhook**:
   - URL: `https://<your site>/api/revalidate`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["article", "pressMention", "profile", "publication", "siteSettings"]`
   - Projection: `{_type}`
   - Drafts: off · HTTP method: POST · Secret: the same password
4. Publish anything in the Studio; the site updates in a few seconds.

Without the webhook, pages still refresh by themselves every hour.

## Adding press coverage from an iPhone

`/share?url=<link>` opens a new Press coverage entry in the Studio with that link filled in.
An iOS Shortcut sends links there from the Share button:

1. Shortcuts app → **+** → name it **Add to my website**.
2. Tap the **ⓘ** (or the name at the top) → turn on **Show in Share Sheet**.
   Under *Receives*, keep **URLs**, **Safari web pages** and **Text**.
3. Add the action **URL Encode** (input: *Shortcut Input*).
4. Add the action **Open URLs** and type
   `https://<your site>/share?url=` followed by the *URL Encoded Text* variable.
5. Done. In Safari or a news app: Share → **Add to my website**.

He must be signed in to the Studio in Safari on the phone once.

## Previewing the design without content

Set `MOCK_CONTENT=1` in `.env.local` and run `npm run dev`. Every page fills with bracketed sample content. Remove it once real content is in the Studio.

## Contact form

Create a free Resend account, then set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (in `.env.local` and in Vercel). Until you verify a domain in Resend, mail can only go to the address you signed up with.

## Tests

`npm test` runs offline checks of the link-reading logic.
