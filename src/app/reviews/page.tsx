import type { Metadata } from "next";
import { StarIcon } from "lucide-react";
import { ReviewEmbeds } from "@/components/reviews/review-embeds";
import { TESTIMONIALS } from "@/lib/content";
import { FadeInUp } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "Reviews & verified profiles",
  description:
    "Houzz, HomeStars, Google, Facebook, and Jiffy profiles with live review embed placeholders ready for your credentials.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <div className="bg-brand-cream">
      <section className="border-b border-brand-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Social proof
            </p>
            <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Reviews &amp; profiles
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Embed your live widgets below. Structured data mirrors the
              testimonials shown on the homepage for consistent rich results—
              update copy and ratings whenever your public profiles change.
            </p>
          </FadeInUp>
          <div className="mt-10 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-brand-cream px-4 py-2 text-sm font-semibold text-brand-navy">
              <span className="flex text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-current" />
                ))}
              </span>
              4.9 average (140+ reviews)
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <FadeInUp key={t.id} delay={0.04 * i}>
              <blockquote className="h-full rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-brand-navy">
                  “{t.quote}”
                </p>
                <footer className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-brand-navy">{t.name}</span>{" "}
                  · {t.location} · {t.source}
                </footer>
              </blockquote>
            </FadeInUp>
          ))}
        </div>
        <ReviewEmbeds />
      </section>
    </div>
  );
}
