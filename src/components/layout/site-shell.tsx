import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyQuoteBar } from "@/components/layout/sticky-quote-bar";
import { ExitIntentOffer } from "@/components/marketing/exit-intent-offer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 z-[100] -translate-y-16 rounded-md bg-brand-navy px-3 py-2 text-sm font-medium text-white shadow transition-transform focus:translate-y-4 focus:outline-none"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1 pb-28 lg:pb-10">
        {children}
      </main>
      <SiteFooter />
      <StickyQuoteBar />
      <ExitIntentOffer />
    </>
  );
}
