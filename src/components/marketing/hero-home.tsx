"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { HERO_IMAGE } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroHome() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-brand-navy">
      <Image
        src={HERO_IMAGE}
        alt="Luxury home exterior with fresh professional paintwork in Port Credit style setting"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover brightness-[0.55]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-32 pt-28 sm:px-6 sm:pb-36 lg:pb-28">
        {!reduce ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 max-w-xl text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold"
          >
            Port Credit · Mississauga · Oakville · GTA
          </motion.p>
        ) : (
          <p className="mb-3 max-w-xl text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Port Credit · Mississauga · Oakville · GTA
          </p>
        )}
        {!reduce ? (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Professional Painting That Covers More Than Walls –{" "}
            {COMPANY.shortName}
          </motion.h1>
        ) : (
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Painting That Covers More Than Walls –{" "}
            {COMPANY.shortName}
          </h1>
        )}
        {!reduce ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-2xl text-pretty text-lg text-white/85 sm:text-xl"
          >
            Expert painters serving Port Credit, Mississauga &amp; GTA. Every
            job funds ministry work for the marginalized.
          </motion.p>
        ) : (
          <p className="mt-5 max-w-2xl text-pretty text-lg text-white/85 sm:text-xl">
            Expert painters serving Port Credit, Mississauga &amp; GTA. Every
            job funds ministry work for the marginalized.
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact#quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 justify-center rounded-xl bg-brand-gold px-8 text-base font-semibold text-brand-navy shadow-lg hover:bg-brand-gold/90 sm:h-11",
            )}
          >
            Get your free quote in 60 seconds
            <ChevronRightIcon className="size-5" aria-hidden />
          </Link>
          <Link
            href="/our-impact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 justify-center rounded-xl border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 sm:h-11",
            )}
          >
            See our impact
          </Link>
        </div>
      </div>
    </section>
  );
}
