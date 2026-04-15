"use client";

import Link from "next/link";
import { PaintbrushIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyQuoteBar() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-navy/10 bg-[color:oklch(0.99_0.01_95_/_0.96)] p-3 backdrop-blur-md supports-backdrop-filter:bg-background/90 lg:hidden"
        role="region"
        aria-label="Quick quote"
      >
        <Link
          href="/contact#quote"
          className={cn(
            buttonVariants({ size: "lg" }),
            "flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold text-base font-semibold text-brand-navy shadow-sm hover:bg-brand-gold/90",
          )}
        >
          <PaintbrushIcon className="size-5" aria-hidden />
          Get your free quote
        </Link>
      </div>
      <div className="pointer-events-none fixed bottom-8 right-6 z-40 hidden lg:block">
        <Link
          href="/contact#quote"
          className={cn(
            buttonVariants({ size: "icon" }),
            "pointer-events-auto size-14 rounded-full bg-brand-gold text-brand-navy shadow-lg hover:bg-brand-gold/90",
          )}
          aria-label="Get your free quote"
        >
          <PaintbrushIcon className="size-6" />
        </Link>
      </div>
    </>
  );
}
