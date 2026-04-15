"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "@/lib/content";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = [
  { id: "all", label: "All" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "commercial", label: "Commercial" },
  { id: "wood", label: "Wood" },
] as const;

export function PortfolioGrid() {
  const [tab, setTab] = useState<(typeof filters)[number]["id"]>("all");
  const items = useMemo(() => {
    if (tab === "all") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((p) => p.category === tab);
  }, [tab]);

  return (
    <div>
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as (typeof filters)[number]["id"])}
        className="mb-10"
      >
        <TabsList className="flex h-auto flex-wrap justify-start gap-1 bg-brand-navy/5 p-1">
          {filters.map((f) => (
            <TabsTrigger
              key={f.id}
              value={f.id}
              className="rounded-lg px-4 py-2 text-sm data-active:bg-brand-navy data-active:text-white"
            >
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((p) => (
          <PortfolioCard key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-brand-navy/10 bg-white shadow-sm">
      <div className="grid grid-cols-2 gap-0.5">
        <div className="relative aspect-square">
          <span className="absolute left-2 top-2 z-10 rounded bg-black/65 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-white">
            Before
          </span>
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative aspect-square">
          <span className="absolute left-2 top-2 z-10 rounded bg-brand-gold px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand-navy">
            After
          </span>
          <Image
            src={item.afterSrc}
            alt={item.afterAlt}
            fill
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <figcaption className="space-y-1 px-4 py-3">
        <p className="font-heading text-base font-semibold text-brand-navy">
          {item.title}
        </p>
        <p className="text-xs uppercase tracking-wide text-brand-gold">
          {item.category}
        </p>
        <p className="text-sm text-muted-foreground">{item.caption}</p>
      </figcaption>
    </figure>
  );
}
