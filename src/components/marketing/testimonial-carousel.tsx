"use client";

import Link from "next/link";
import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialCarousel() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Client voices
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
          >
            Loved on Houzz, HomeStars, Google &amp; more
          </h2>
          <p className="mt-3 text-muted-foreground">
            Representative feedback from homeowners and business leaders across
            the western GTA. Replace with your live review embeds on the{" "}
            <Link
              href="/reviews"
              className="font-medium text-brand-navy underline-offset-4 hover:underline"
            >
              Reviews &amp; Profiles
            </Link>{" "}
            page.
          </p>
        </div>
        <div className="relative mt-10 px-2 sm:px-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.id} className="md:basis-1/2">
                  <figure className="flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-brand-cream/60 p-6 shadow-sm">
                    <div className="flex gap-0.5 text-brand-gold" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <StarIcon key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-navy">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-brand-navy">
                        {t.name}
                      </span>{" "}
                      · {t.location} ·{" "}
                      <cite className="not-italic">{t.source}</cite>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-2" />
            <CarouselNext className="right-0 sm:-right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
