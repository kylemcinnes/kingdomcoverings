import Script from "next/script";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { JsonLdScript } from "next-seo";
import { HERO_IMAGE, TESTIMONIALS } from "@/lib/content";
const houzzProfileUrl =
  process.env.NEXT_PUBLIC_HOUZZ_PROFILE_URL ??
  "https://www.houzz.com/pro/kingdomcoveringspaintinginc";

const homestarsProfileUrl =
  process.env.NEXT_PUBLIC_HOMESTARS_PROFILE_URL ??
  "https://www.homestars.com/profile/REPLACE_WITH_YOUR_PROFILE";

const googleMapsPlaceUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  "https://www.google.com/maps/search/?api=1&query=Kingdom+Coverings+Painting+Mississauga";

export function ReviewEmbeds() {
  const reviewEntities = TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "HousePainter",
      name: COMPANY.legalName,
      image: HERO_IMAGE,
    },
  }));

  return (
    <div className="space-y-10">
      <JsonLdScript
        id="kc-reviews-jsonld"
        scriptKey="kc-reviews-jsonld"
        data={{
          "@context": "https://schema.org",
          "@graph": reviewEntities,
        }}
      />

      <Card className="border-brand-navy/10">
        <CardHeader>
          <CardTitle className="font-heading text-brand-navy">
            Houzz profile &amp; reviews
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Paste your official Houzz Pro badge or review widget below. The
            script loads asynchronously so your Lighthouse score stays fast.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Script
            src="https://www.houzz.com/js/badge.js"
            strategy="lazyOnload"
          />
          <div
            className="houzz-widget-container flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-brand-navy/20 bg-brand-cream/40 p-6 text-center text-sm text-muted-foreground"
            data-houzz-badge
          >
            <div>
              <p className="font-medium text-brand-navy">
                Houzz badge placeholder
              </p>
              <p className="mt-2">
                In Houzz Pro → Website → Badges, copy your embed snippet and
                replace this block. Keep the badge.js script above.
              </p>
              <Link
                href={houzzProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-brand-gold underline-offset-4 hover:underline"
              >
                Open Houzz profile
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-brand-navy/10">
        <CardHeader>
          <CardTitle className="font-heading text-brand-navy">
            HomeStars
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            HomeStars often provides an iframe or partner widget from your
            contractor dashboard.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed border-brand-navy/20 bg-brand-cream/40 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              HomeStars widgets are profile-specific. Link to your public
              profile here, or paste the official iframe from HomeStars Pro.
            </p>
            <Link
              href={homestarsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
            >
              Open HomeStars profile template
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-brand-navy/10">
        <CardHeader>
          <CardTitle className="font-heading text-brand-navy">
            Google Business Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <a
            href={googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm hover:bg-brand-cream"
          >
            View on Google Maps &amp; read reviews
          </a>
          <Separator />
          <p className="text-sm text-muted-foreground">
            For the official Google Reviews badge, use the{" "}
            <a
              href="https://developers.google.com/my-business/content/basic-setup"
              className="font-medium text-brand-navy underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Business Profile marketing kit
            </a>{" "}
            and drop the provided HTML into this section.
          </p>
        </CardContent>
      </Card>

      <Card className="border-brand-navy/10">
        <CardHeader>
          <CardTitle className="font-heading text-brand-navy">
            Facebook recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Meta&apos;s Page Plugin can display recent Page story engagement.
            For performance, we recommend linking out to reviews and embedding
            only after you confirm your Page ID.
          </p>
          <Link
            href={COMPANY.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
          >
            Open {COMPANY.shortName} on Facebook
          </Link>
        </CardContent>
      </Card>

      <Card className="border-brand-navy/10">
        <CardHeader>
          <CardTitle className="font-heading text-brand-navy">Jiffy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you&apos;re active on Jiffy, add your public profile link or
            partner widget here for parity with other lead sources.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Set{" "}
            <code className="rounded bg-muted px-1">NEXT_PUBLIC_JIFFY_URL</code>{" "}
            in Vercel to surface your live profile button.
          </p>
          {process.env.NEXT_PUBLIC_JIFFY_URL ? (
            <Link
              href={process.env.NEXT_PUBLIC_JIFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
            >
              View Jiffy profile
            </Link>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
