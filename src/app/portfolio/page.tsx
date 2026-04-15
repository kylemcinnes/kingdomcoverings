import type { Metadata } from "next";
import { PortfolioGrid } from "./portfolio-grid";
import { FadeInUp } from "@/components/marketing/motion";

export const metadata: Metadata = {
  title: "Portfolio — before & after painting",
  description:
    "Masonry gallery of residential, commercial, and wood finishing projects across Port Credit, Mississauga, Oakville & GTA.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="bg-brand-cream">
      <section className="border-b border-brand-navy/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Portfolio
            </p>
            <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Before / after gallery
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Placeholder photography for launch—swap in your own project photos
              in <code className="rounded bg-muted px-1 text-xs">README</code>{" "}
              to keep trust sky-high.
            </p>
          </FadeInUp>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <PortfolioGrid />
      </div>
    </div>
  );
}
