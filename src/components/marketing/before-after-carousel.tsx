"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PORTFOLIO_ITEMS } from "@/lib/content";

export function BeforeAfterCarousel() {
  const items = PORTFOLIO_ITEMS.slice(0, 4);
  return (
    <section
      className="border-y border-brand-navy/10 bg-brand-navy py-16 text-white sm:py-20"
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Portfolio preview
            </p>
            <h2
              id="portfolio-preview-heading"
              className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Before / after transformations
            </h2>
          </div>
          <a
            href="/portfolio"
            className="text-sm font-medium text-brand-gold underline-offset-4 hover:underline"
          >
            View full gallery
          </a>
        </div>
        <div className="relative mt-10 px-2 sm:px-10">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {items.map((p) => (
                <CarouselItem key={p.id}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide">
                        Before
                      </span>
                      <Image
                        src={p.beforeSrc}
                        alt={p.beforeAlt}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-gold/90 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-navy">
                        After
                      </span>
                      <Image
                        src={p.afterSrc}
                        alt={p.afterAlt}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/75">
                    <span className="font-semibold text-white">{p.title}</span>{" "}
                    — {p.caption}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-white/20 bg-brand-navy text-white hover:bg-brand-navy/80 sm:-left-2" />
            <CarouselNext className="right-0 border-white/20 bg-brand-navy text-white hover:bg-brand-navy/80 sm:-right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
