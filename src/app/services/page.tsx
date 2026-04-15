import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { FadeInUp } from "@/components/marketing/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior, exterior, commercial & wood finishing",
  description:
    "Detailed painting services for Port Credit, Mississauga, Oakville & GTA—prep-first process, premium coatings, and respectful crews.",
  alternates: { canonical: "/services" },
};

const blocks = [
  {
    id: "interior",
    title: "Interior painting",
    blurb:
      "Living rooms, bedrooms, staircases, trim, ceilings, and detailed brushwork for discerning homeowners.",
    benefits: [
      "Furniture protection & sequential room sealing",
      "Low-VOC options for family-sensitive spaces",
      "Colour placement consults on request",
    ],
    steps: [
      "Walkthrough + surface audit",
      "Prep, repair, prime where needed",
      "Finish coats + meticulous touch-ups",
    ],
  },
  {
    id: "exterior",
    title: "Exterior painting",
    blurb:
      "Canadian weather demands more than a roller and hope—we engineer systems for adhesion and longevity.",
    benefits: [
      "Pressure wash / hand wash protocols",
      "Caulk, flashings, and carpentry triage",
      "Premium exterior lines with documented film build",
    ],
    steps: [
      "Moisture & substrate assessment",
      "Prep + prime system tailored to siding",
      "Topcoats + hardware reset + walkthrough",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & industrial",
    blurb:
      "Retail, office, hospitality, and light industrial—quiet crews, night shifts, and phased areas to keep you open.",
    benefits: [
      "After-hours & weekend scheduling",
      "High-durability coatings for traffic zones",
      "Site documentation for property managers",
    ],
    steps: [
      "Risk review + access plan",
      "Surface prep + coatings spec sign-off",
      "QA lighting walkthrough + punch list closure",
    ],
  },
  {
    id: "wood",
    title: "Wood staining & restoration",
    blurb:
      "Decks, doors, beams, and heritage millwork brought back with patient sanding sequences and compatible finishes.",
    benefits: [
      "Strip / brighten / neutralize as required",
      "Film-forming vs penetrating stain guidance",
      "Maintenance schedules so wood stays honest",
    ],
    steps: [
      "Species + exposure mapping",
      "Mechanical & chemical prep where safe",
      "Stain build + topcoat + care kit handoff",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-brand-cream">
      <section className="border-b border-brand-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Services
            </p>
            <h1 className="font-heading mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
              Architect-grade finishes for every surface we touch.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Serving {COMPANY.areas.join(", ")}, {COMPANY.shortName} pairs
              disciplined prep with premium materials—whether we are refreshing a
              Port Credit Victorian or coating an industrial floor plate.
            </p>
          </FadeInUp>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
        {blocks.map((b, i) => (
          <FadeInUp key={b.id} delay={i * 0.04}>
            <article
              id={b.id}
              className="scroll-mt-28 rounded-2xl border border-brand-navy/10 bg-white p-8 shadow-sm sm:p-10"
            >
              <h2 className="font-heading text-3xl font-semibold text-brand-navy">
                {b.title}
              </h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">{b.blurb}</p>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                    Benefits
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {b.benefits.map((x) => (
                      <li key={x} className="flex gap-2">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-brand-sage"
                          aria-hidden
                        />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                    Process
                  </h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                    {b.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <Link
                href="/contact#quote"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 inline-flex bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
                )}
              >
                Request quote — {b.title}
              </Link>
            </article>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}
