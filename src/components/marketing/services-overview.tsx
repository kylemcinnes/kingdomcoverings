import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInUp } from "@/components/marketing/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Services
          </p>
          <h2 className="font-heading mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Precision painting for homes, businesses, and fine woodwork.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From heritage trim to industrial coatings, we bring disciplined
            prep, premium materials, and quiet professionalism to every site.
          </p>
        </FadeInUp>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY.serviceCategories.map((s, i) => (
            <FadeInUp key={s.id} delay={i * 0.05}>
              <Card className="h-full border-brand-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-lg text-brand-navy">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>{s.summary}</p>
                  <Link
                    href={`/services#${s.id}`}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "group -ml-2 gap-1 px-2 text-brand-navy hover:bg-brand-navy/5",
                    )}
                  >
                    Details
                    <ArrowUpRightIcon
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
