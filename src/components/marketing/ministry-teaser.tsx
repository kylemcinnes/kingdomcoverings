import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { FadeInUp } from "@/components/marketing/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MinistryTeaser() {
  return (
    <section className="relative overflow-hidden bg-[color:oklch(0.97_0.02_145)] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-sage/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
        <FadeInUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
            <HeartHandshake className="size-4 text-brand-sage" aria-hidden />
            Ministry impact
          </div>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Your project fuels practical care for neighbours who need it most.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {COMPANY.legalName} exists to deliver uncompromising paint
            outcomes—while profits are stewarded to support{" "}
            {COMPANY.ministry}, led by {COMPANY.owner}. That means food,
            clothing, mentoring, and community for people society too often
            overlooks.
          </p>
          <Link
            href="/our-impact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 inline-flex bg-brand-navy text-white hover:bg-brand-navy/90",
            )}
          >
            Read our impact story
          </Link>
        </FadeInUp>
        <FadeInUp delay={0.08}>
          <div className="rounded-2xl border border-brand-navy/10 bg-white p-8 shadow-sm">
            <p className="font-heading text-xl text-brand-navy">
              “We paint with excellence because people are worth the extra
              mile.”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — {COMPANY.owner}, {COMPANY.ownerTitle}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {COMPANY.ministryTagline}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
