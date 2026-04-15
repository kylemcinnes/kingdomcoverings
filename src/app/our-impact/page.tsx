import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { FadeInUp } from "@/components/marketing/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HandCoins, Home, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our impact — ministry funded by painting",
  description: `Learn how ${COMPANY.shortName} directs profits to ${COMPANY.ministry} to serve marginalized neighbours across the GTA.`,
  alternates: { canonical: "/our-impact" },
};

export default function OurImpactPage() {
  return (
    <div className="bg-brand-cream">
      <section className="relative overflow-hidden border-b border-brand-navy/10 bg-brand-navy py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #d4af7744, transparent 45%), radial-gradient(circle at 80% 0%, #8aa89a55, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Our impact
            </p>
            <h1 className="font-heading mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Every beautifully painted room sends ripples of practical hope.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {COMPANY.legalName} is a professional painting company first—because
              excellence honours both clients and community. A meaningful share of
              profits is intentionally directed to {COMPANY.ministry}, led by{" "}
              {COMPANY.owner}, to walk alongside people facing homelessness,
              addiction, and social isolation.
            </p>
            <Link
              href="/contact#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-10 inline-flex bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
              )}
            >
              Hire us &amp; fuel the mission
            </Link>
          </FadeInUp>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Presence over performance",
              body: "COSC is not a photo-op—it is long-table community: meals, mentorship, prayer, and advocacy for people the city often rushes past.",
            },
            {
              icon: HandCoins,
              title: "Stewardship you can trace",
              body: "Commercial and residential projects fund supplies, transportation, and outreach initiatives with the same rigour we bring to job costing.",
            },
            {
              icon: Home,
              title: "Homes that feel like refuge",
              body: "When your repaint is executed with care, you are also helping create safe, dignified environments for neighbours re-establishing stability.",
            },
          ].map((c, i) => (
            <FadeInUp key={c.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-brand-navy/10 bg-white p-8 shadow-sm">
                <c.icon className="size-9 text-brand-sage" aria-hidden />
                <h2 className="font-heading mt-5 text-xl text-brand-navy">
                  {c.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeInUp>
            <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
              Thank you for choosing painters who paint with purpose.
            </h2>
            <p className="mt-4 text-muted-foreground">
              {COMPANY.ministryTagline}
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
