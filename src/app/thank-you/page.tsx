import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { getCalendlyUrl } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

type Props = {
  searchParams: Promise<{ name?: string; source?: string; utm_source?: string }>;
};

export default async function ThankYouPage({ searchParams }: Props) {
  const sp = await searchParams;
  const first = sp.name ?? "friend";

  return (
    <div className="bg-brand-cream py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <CheckCircle2
          className="mx-auto size-14 text-brand-sage"
          aria-hidden
        />
        <h1 className="font-heading mt-6 text-3xl font-semibold text-brand-navy sm:text-4xl">
          Thank you, {first}.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Your request is with {COMPANY.owner} and our estimating team. We
          typically respond same business day for projects across Port Credit,
          Mississauga, Oakville, and the GTA.
        </p>
        <ol className="mt-8 space-y-3 text-left text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-brand-navy">1.</span>
            Watch for an email or call confirming scope and scheduling.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-brand-navy">2.</span>
            Prefer to lock a time now? Use our scheduling link below.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-brand-navy">3.</span>
            Need immediate help? Call{" "}
            <a
              href={`tel:${COMPANY.phoneE164}`}
              className="font-medium text-brand-navy underline-offset-4 hover:underline"
            >
              {COMPANY.phoneDisplay}
            </a>
            .
          </li>
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={getCalendlyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
            )}
          >
            Book on Calendly
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Back to home
          </Link>
        </div>
        {sp.utm_source ? (
          <p className="mt-8 text-xs text-muted-foreground">
            UTM captured: <code className="rounded bg-muted px-1">{sp.utm_source}</code>
          </p>
        ) : null}
      </div>
    </div>
  );
}
