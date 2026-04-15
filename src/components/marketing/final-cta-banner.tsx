import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaBanner() {
  return (
    <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-[#06182a] py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="font-heading max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready for a quote that respects your home, timeline, and budget?
          </h2>
          <p className="mt-3 max-w-xl text-white/75">
            Call {COMPANY.phoneDisplay} or send details online—we typically
            respond same business day across Port Credit, Mississauga, Oakville,
            and the GTA.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:items-end">
          <Link
            href="/contact#quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full justify-center bg-brand-gold text-brand-navy hover:bg-brand-gold/90 sm:w-auto sm:px-10",
            )}
          >
            Start my free quote
          </Link>
          <a
            href={`tel:${COMPANY.phoneE164}`}
            className="text-center text-sm font-medium text-brand-gold underline-offset-4 hover:underline sm:text-right"
          >
            Prefer the phone? Tap to call now
          </a>
        </div>
      </div>
    </section>
  );
}
