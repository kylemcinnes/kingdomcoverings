"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[color:oklch(0.99_0.01_95_/_0.92)] backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-lg font-semibold tracking-tight text-brand-navy transition-colors group-hover:text-brand-navy/90">
            {COMPANY.shortName}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand-gold">
            Painting Inc.
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy",
                pathname === link.href && "bg-brand-navy/8 text-brand-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${COMPANY.phoneE164.replace(/\s/g, "")}`}
            className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy"
          >
            {COMPANY.phoneDisplay}
          </a>
          <Link
            href="/contact#quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
            )}
          >
            Free quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-brand-navy/15"
                  aria-label="Open menu"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-lg px-3 py-3 text-base font-medium text-brand-navy",
                          pathname === link.href && "bg-brand-navy/8",
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <Link
                      href="/contact#quote"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-4 bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
                      )}
                    />
                  }
                >
                  Get free quote
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
