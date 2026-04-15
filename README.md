# Kingdom Coverings Painting Inc. — Website

Production-ready marketing site for **Kingdom Coverings Painting Inc.**, built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**, **React Hook Form + Zod**, and **Server Actions** (email via **Resend**).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run ESLint: `npx eslint .` (no `npm run lint` script; Cloudflare-focused scripts own the `package.json` scripts block).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values. At minimum, for email in production:

- `RESEND_API_KEY` — API key from [Resend](https://resend.com).
- `RESEND_FROM_EMAIL` — A verified sender domain in Resend (required outside the Resend sandbox).
- `CONTACT_INBOX_EMAIL` — Optional override; defaults to `kingdomcoveringspainting@gmail.com`.

Without `RESEND_API_KEY`, quote and newsletter submissions are logged on the server and still return success (useful for demos).

Set `NEXT_PUBLIC_SITE_URL` to your canonical HTTPS origin so Open Graph, `sitemap.xml`, and JSON-LD resolve correctly (used by both Vercel and Cloudflare).

## Cloudflare Workers deployment

This app targets **Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) so **Server Actions**, **Route Handlers**, and **Resend** behave like a standard Node-style Next deployment, with `nodejs_compat` enabled in Wrangler.

1. **Install dependencies:** `npm install`
2. **Secrets and vars in Cloudflare:** In **Workers & Pages → your project → Settings → Variables**, add:
   - `RESEND_API_KEY` — as an **encrypted Secret** (not plain text).
   - `RESEND_FROM_EMAIL`, `CONTACT_INBOX_EMAIL`, `NEXT_PUBLIC_SITE_URL`, and any `NEXT_PUBLIC_*` values from `.env.example` as appropriate (public vars can be plain text).
3. **Git-connected build (recommended):** Connect this GitHub repo in Cloudflare and configure:
   - **Build command:** `npm run build`
   - **Deploy command:** `npm run deploy`  
     (Replaces the default `npx wrangler deploy` so the OpenNext bundle in `.open-next/` is produced first.)
   - For **non-production** branches / preview pipelines, use **Deploy command:** `npm run upload` if you prefer upload-only flows.
4. **Push `main`:** Each push runs the configured build, then `npm run deploy`, which runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.

**Local parity**

- `npm run build` — standard Next.js production build.
- `npm run preview` — OpenNext adapter build + Wrangler preview (production-like).
- `npm run cf-typegen` — regenerates `cloudflare-env.d.ts` after you add Wrangler bindings.

**Config files:** `wrangler.jsonc` (worker entry `.open-next/worker.js`, `nodejs_compat`), `open-next.config.ts` (uses `defineCloudflareConfig()` — the shape OpenNext validates for Cloudflare). `next.config.ts` sets `output: "standalone"` for tracing compatibility.

## Deploy to Vercel

1. Push this repository to GitHub and import the project in [Vercel](https://vercel.com).
2. In **Project → Settings → Environment Variables**, add the variables from `.env.example` (at least `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`).
3. Deploy. Vercel auto-detects Next.js; builds use `npm run build`.

### Custom domain

Add your domain under **Settings → Domains**, then update `NEXT_PUBLIC_SITE_URL` to match the HTTPS URL.

## Swapping in real photos and reviews

- **Hero & portfolio:** Replace Unsplash URLs in `src/lib/content.ts` with your own assets under `public/` (e.g. `public/portfolio/kitchen-after.jpg`) and reference them with `src="/portfolio/..."` in `Image` components for best caching and control.
- **Owner photo:** On the About page, change the `ownerPhoto` constant in `src/app/about/page.tsx` or move it into `content.ts`.
- **Houzz / HomeStars / Google:** On the Reviews page, follow the inline comments in `src/components/reviews/review-embeds.tsx`. Paste Houzz’s official badge snippet from your Houzz Pro dashboard; replace map embed `src` on Contact with your Google Business **Place** embed; add `NEXT_PUBLIC_*` URLs as needed.
- **Testimonials & schema:** Update `TESTIMONIALS` in `src/lib/content.ts` to match real, verifiable quotes. Then align `aggregateRating` / review counts in `src/components/seo/local-business-jsonld.tsx` with your live Google or Houzz aggregates so structured data matches what users see.

## SEO notes

- Page-level metadata uses the Next.js **Metadata API** (`export const metadata`).
- **next-seo** is used for **JSON-LD** (`LocalBusinessJsonLd`, `JsonLdScript`) in `src/components/seo/local-business-jsonld.tsx` and `src/components/reviews/review-embeds.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` handle sitemap and robots rules (`/thank-you` is disallowed for indexing).

## Performance & hero “video”

The hero uses a **single optimized full-viewport image** (with `priority` and responsive `sizes`) for predictable **Lighthouse** performance. If you add a background video later, host a short, compressed **muted** MP4, set `playsInline`, provide the same image as `poster`, and respect `prefers-reduced-motion` by hiding autoplay video for those users.

## Licence

© Kingdom Coverings Painting Inc. All rights reserved. Code is provided for the business’s use; adjust licence as needed for your organisation.
