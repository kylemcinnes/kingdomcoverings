import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { FadeInUp } from "@/components/marketing/motion";
import { QuoteForm } from "@/components/forms/quote-form";
import { QuoteFormFallback } from "@/components/forms/quote-form-fallback";
import { getCalendlyUrl, getWhatsAppUrl } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircleIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & free quote",
  description: `Request a painting quote from ${COMPANY.shortName}. Call ${COMPANY.phoneDisplay} or message ${COMPANY.email}. Serving Port Credit, Mississauga, Oakville & GTA.`,
  alternates: { canonical: "/contact" },
};

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-79.586234!3d43.553112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMzJzExLjIiTiA3OcKwMzUnMTAuNCJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca";

export default function ContactPage() {
  const wa = getWhatsAppUrl();
  return (
    <div className="bg-brand-cream">
      <section className="border-b border-brand-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Contact
            </p>
            <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Tell us about your project—we reply fast.
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Share a few details for a tailored quote. Prefer voice? Call{" "}
              <a
                className="font-semibold text-brand-navy underline-offset-4 hover:underline"
                href={`tel:${COMPANY.phoneE164}`}
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                className="font-semibold text-brand-navy underline-offset-4 hover:underline"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.phoneE164}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-brand-navy/20",
                )}
              >
                Tap to call
              </a>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-brand-navy/20",
                  )}
                >
                  <MessageCircleIcon className="size-4" aria-hidden />
                  WhatsApp
                </a>
              ) : null}
            </div>
          </FadeInUp>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <h2 id="quote" className="font-heading text-2xl text-brand-navy">
            Multi-step quote
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            UTM parameters from ads are captured automatically when present
            (<code className="rounded bg-muted px-1">utm_source</code>, etc.).
          </p>
          <div className="mt-6">
            <Suspense fallback={<QuoteFormFallback />}>
              <QuoteForm id="quote" />
            </Suspense>
          </div>
        </div>
        <div className="space-y-8">
          <section className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-sm">
            <h2 className="border-b border-brand-navy/10 px-5 py-4 font-heading text-lg text-brand-navy">
              Service area map
            </h2>
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Map of Port Credit and Mississauga service area"
                src={mapEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="px-5 py-3 text-xs text-muted-foreground">
              Replace the embed <code className="rounded bg-muted px-1">src</code>{" "}
              with your verified Google Business Profile Place ID embed for
              exact pin placement.
            </p>
          </section>
          <section className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg text-brand-navy">
              Book a consultation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Calendly (or another scheduler) keeps phone tag to a minimum. Drop
              your live embed URL into{" "}
              <code className="rounded bg-muted px-1">
                NEXT_PUBLIC_CALENDLY_URL
              </code>
              .
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-brand-navy/20 bg-brand-cream/60 p-6 text-center text-sm text-muted-foreground">
              <p>Scheduler placeholder</p>
              <Link
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
              >
                Open scheduling link
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
