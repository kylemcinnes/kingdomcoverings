import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { FadeInUp } from "@/components/marketing/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Justin Roberts & our mission",
  description: `Meet ${COMPANY.owner} and learn how ${COMPANY.shortName} pairs craft excellence with ${COMPANY.ministry} outreach across the GTA.`,
  alternates: { canonical: "/about" },
};

const ownerPhoto =
  "https://images.unsplash.com/photo-1560250097-190b2da83838?auto=format&fit=crop&w=900&q=80";

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      <section className="border-b border-brand-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              About us
            </p>
            <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Built on craft, carried by conviction.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {COMPANY.legalName} is led by {COMPANY.owner}—a painter and pastor
              who believes walls should be flawless and neighbours should never
              feel forgotten. Every estimate, every brushstroke, and every
              walkthrough is an opportunity to serve with excellence.
            </p>
            <Link
              href="/contact#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 inline-flex bg-brand-navy text-white hover:bg-brand-navy/90",
              )}
            >
              Plan a project conversation
            </Link>
          </FadeInUp>
          <FadeInUp delay={0.06}>
            <figure className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-muted shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={ownerPhoto}
                  alt={`${COMPANY.owner}, owner of ${COMPANY.shortName} — placeholder portrait`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
              <figcaption className="border-t border-brand-navy/10 bg-white px-5 py-4 text-sm text-muted-foreground">
                <span className="font-semibold text-brand-navy">
                  {COMPANY.owner}
                </span>
                , {COMPANY.ownerTitle}. Replace this placeholder with an
                on-brand portrait in{" "}
                <code className="rounded bg-muted px-1 text-xs">README</code>.
              </figcaption>
            </figure>
          </FadeInUp>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeInUp>
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            Our mission
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We exist to deliver uncompromising residential, commercial, and wood
            finishing results—while stewarding profits toward{" "}
            {COMPANY.ministry}, a community for the marginalized in the GTA.
            Professional excellence and compassionate outreach are not competing
            priorities; they reinforce one another.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Truth in the tape lines",
              body: "Honest timelines, transparent pricing, and crews who respect your home like it is their own.",
            },
            {
              title: "Systems, not shortcuts",
              body: "Moisture checks, dust containment, premium primers, and manufacturer-correct recoat windows.",
            },
            {
              title: "Kingdom-minded stewardship",
              body: "Profits fund practical ministry—meals, mentorship, clothing, and dignity-filled community.",
            },
          ].map((v, i) => (
            <FadeInUp key={v.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl text-brand-navy">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>
    </div>
  );
}
