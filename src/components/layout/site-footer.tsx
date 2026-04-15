import Link from "next/link";
import { Share2, Mail, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS, PRIMARY_KEYWORDS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "@/components/marketing/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-[color:oklch(0.96_0.01_95)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-heading text-xl font-semibold tracking-tight text-white">
              {COMPANY.shortName}
            </p>
            <p className="text-sm leading-relaxed text-white/75">
              {COMPANY.differentiator}
            </p>
            <div className="flex flex-wrap gap-2 text-[0.65rem] font-medium uppercase tracking-wider text-brand-gold/90">
              {PRIMARY_KEYWORDS.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneE164}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-brand-gold" aria-hidden />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 break-all text-white/85 hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-brand-gold" aria-hidden />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Share2 className="size-4 shrink-0 text-brand-gold" aria-hidden />
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/55">
              Serving {COMPANY.areas.join(" · ")}.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Painting tips & offers
            </p>
            <p className="mt-3 text-sm text-white/70">
              Short reads on prep, colour, and seasonal maintenance—plus
              subscriber-only promotions.
            </p>
            <NewsletterForm className="mt-4" />
          </div>
        </div>
        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p className="max-w-prose sm:text-right">
            {COMPANY.shortName} is a for-profit painting company; ministry
            support is funded from company profits as stewarded by{" "}
            {COMPANY.owner}.
          </p>
        </div>
      </div>
    </footer>
  );
}
