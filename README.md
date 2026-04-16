# Kingdom Coverings Painting Inc. — Website

Production-ready marketing site for **Kingdom Coverings Painting Inc.**, built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**, **React Hook Form + Zod**, and **Server Actions** with **Resend** (HTTP API, Edge-friendly on Cloudflare Pages).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run ESLint: `npx eslint .`

### Production parity (Cloudflare Pages)

```bash
npm run pages:build
```

**Important:** `npm run build` must stay as **`next build` only**. The `@cloudflare/next-on-pages` CLI runs `vercel build` internally, which invokes `npm run build` again—if `build` chained `next-on-pages`, you get a **recursive build error**. Use **`npm run pages:build`** (or `npx @cloudflare/next-on-pages`) for the adapter step that writes `.vercel/output/static`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in values.

- `RESEND_API_KEY` — from [Resend](https://resend.com). On **Cloudflare Pages**, add under **Settings → Environment variables** for **Production** (and Preview if needed). Mark as **encrypted** where offered.
- `RESEND_FROM_EMAIL` — verified sender in Resend.
- `CONTACT_INBOX_EMAIL` — optional; defaults to `kingdomcoveringspainting@gmail.com`.
- `NEXT_PUBLIC_SITE_URL` — canonical `https://…` origin for Open Graph, `sitemap.xml`, and JSON-LD. On Pages, also set **`CF_PAGES`** / preview URLs are handled automatically via `CF_PAGES_URL` when present.

Without `RESEND_API_KEY`, lead handlers log payloads and still return success (useful for demos).

## Cloudflare Pages deployment

This project uses [`@cloudflare/next-on-pages`](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/) so you get the familiar **GitHub → Cloudflare Pages** automatic builds. Root `wrangler.toml` sets **`nodejs_compat`** for Pages Functions (helps with Node APIs used by parts of the Next.js runtime).

> **Note:** npm shows `@cloudflare/next-on-pages` as deprecated in favour of the **OpenNext** Cloudflare adapter. This repo follows the **Pages + next-on-pages** workflow you asked for; you can migrate later if you move to Workers-only OpenNext.

### Step-by-step (dashboard)

1. **Connect GitHub** in Cloudflare **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the **kingdomcoverings** repo and the **`main`** branch.
3. **Environment variables** (Pages → **Settings → Environment variables**):
   - `NEXT_PUBLIC_SITE_URL` = your live site URL (e.g. `https://www.kingdomcoverings.ca`).
   - `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_INBOX_EMAIL`, and optional `NEXT_PUBLIC_*` keys from `.env.example`.
4. **Compatibility:** ensure **`nodejs_compat`** is enabled for the project. The committed `wrangler.toml` includes `compatibility_flags = ["nodejs_compat"]`; Pages picks this up when using Wrangler integration. If the UI offers a **Compatibility flags** field, add `nodejs_compat` there too.
5. **Build configuration**
   - **Build command:** `npm run pages:build`  
     (Runs `@cloudflare/next-on-pages`, which internally runs `vercel build` → `npm run build` → `next build`, then emits the Pages bundle. **Do not** chain `next-on-pages` into the `build` script or builds recurse and fail.)
   - **Build output directory:** `.vercel/output/static`  
     (Set in the Pages UI **and** in `wrangler.toml` as `pages_build_output_dir` so Wrangler validation passes.)
6. **Save and deploy.** Every push to `main` triggers a new build and deploy.

**`npm install` on Cloudflare:** the repo includes [`.npmrc`](.npmrc) with `legacy-peer-deps=true` because `@cloudflare/next-on-pages@1.13.x` declares a **narrow peer range** on `next` while this app tracks the latest **15.5.x** security patches. The adapter still completes the build successfully (validated locally).

### Server Actions, Edge, and Resend

- `src/app/layout.tsx` sets `export const runtime = "edge"` so Server Actions and RSC run on **Edge** Pages Functions where appropriate.
- Email uses **`fetch` to Resend’s REST API** (`src/lib/resend-send.ts`), not the Node-oriented `resend` npm client—so delivery works in the **Edge** runtime with **`nodejs_compat`** as a safety net for other Next internals.
- **Limitation:** `@cloudflare/next-on-pages` lags official Next peer versions; watch for Cloudflare/OpenNext migration guides if you need bleeding-edge Next features.

## Deploy to Vercel (optional)

1. Import the repo in [Vercel](https://vercel.com).
2. Set the same environment variables as above.
3. Build command: `npm run build` (no `next-on-pages` step required on Vercel).

### Custom domain

Point DNS at Cloudflare (or Vercel) and keep `NEXT_PUBLIC_SITE_URL` aligned with the HTTPS URL you serve.

## Swapping in real photos and reviews

- **Hero & portfolio:** Replace Unsplash URLs in `src/lib/content.ts` with assets under `public/` and reference them as `/…` paths in `next/image` where possible.
- **Owner photo:** `src/app/about/page.tsx` (`ownerPhoto`).
- **Houzz / HomeStars / Google:** `src/components/reviews/review-embeds.tsx` and env URLs in `.env.example`.
- **Testimonials & schema:** `src/lib/content.ts` + `src/components/seo/local-business-jsonld.tsx`.

## SEO notes

- **Metadata API** (`export const metadata`) for titles, Open Graph, etc.
- **next-seo** for JSON-LD (`LocalBusinessJsonLd`, `JsonLdScript`).
- `src/app/sitemap.ts` and `src/app/robots.ts` (`/thank-you` not indexed).

## Performance & hero “video”

The hero uses a single optimized **full-viewport** `next/image` for predictable Lighthouse scores. Optional background video: short muted MP4, `poster` image, respect `prefers-reduced-motion`.

## Licence

© Kingdom Coverings Painting Inc. All rights reserved.
