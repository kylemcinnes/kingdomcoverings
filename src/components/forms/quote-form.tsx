"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  budgetRanges,
  projectTypes,
  quoteSchema,
  timelineOptions,
  type QuoteInput,
} from "@/lib/schemas";
import { submitQuote } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const selectClass =
  "h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function QuoteForm({ id = "quote" }: { id?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const form = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "Interior residential",
      timeline: "Within 2–4 weeks",
      message: "",
      budget: "Prefer to discuss",
      wantsPromo: false,
    },
  });

  useEffect(() => {
    const utm = {
      utmSource: searchParams.get("utm_source") ?? "",
      utmMedium: searchParams.get("utm_medium") ?? "",
      utmCampaign: searchParams.get("utm_campaign") ?? "",
      utmContent: searchParams.get("utm_content") ?? "",
      utmTerm: searchParams.get("utm_term") ?? "",
    };
    form.setValue("utmSource", utm.utmSource || undefined);
    form.setValue("utmMedium", utm.utmMedium || undefined);
    form.setValue("utmCampaign", utm.utmCampaign || undefined);
    form.setValue("utmContent", utm.utmContent || undefined);
    form.setValue("utmTerm", utm.utmTerm || undefined);
  }, [searchParams, form]);

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);

  const next = useCallback(async () => {
    if (step === 0) {
      const ok = await form.trigger(["name", "phone", "email"]);
      if (ok) setStep(1);
    } else if (step === 1) {
      const ok = await form.trigger(["projectType", "timeline"]);
      if (ok) setStep(2);
    }
  }, [form, step]);

  const onSubmit = useCallback(
    async (data: QuoteInput) => {
      const res = await submitQuote(data);
      if (res.ok) {
        const q = new URLSearchParams({
          source: "quote",
          name: data.name.split(" ")[0] ?? "there",
        });
        if (data.utmSource) q.set("utm_source", data.utmSource);
        router.push(`/thank-you?${q.toString()}`);
      } else {
        form.setError("root", { message: res.message });
      }
    },
    [form, router],
  );

  return (
    <form
      id={id}
      className="grid gap-6 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-brand-navy">
            Step {step + 1} of 3
          </p>
          <span className="text-xs text-muted-foreground">
            Free quote · typical reply same day
          </span>
        </div>
        <Progress value={progress} className="h-1.5 bg-brand-navy/10" />
      </div>

      {step === 0 ? (
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="qf-name">Full name</Label>
            <Input id="qf-name" className="h-11" {...form.register("name")} />
            {form.formState.errors.name?.message ? (
              <p className="text-xs text-destructive" role="alert">
                {form.formState.errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="qf-phone">Phone</Label>
              <Input
                id="qf-phone"
                type="tel"
                className="h-11"
                autoComplete="tel"
                {...form.register("phone")}
              />
              {form.formState.errors.phone?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {form.formState.errors.phone.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="qf-email">Email</Label>
              <Input
                id="qf-email"
                type="email"
                className="h-11"
                autoComplete="email"
                {...form.register("email")}
              />
              {form.formState.errors.email?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="qf-type">Project type</Label>
            <select id="qf-type" className={selectClass} {...form.register("projectType")}>
              {projectTypes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {form.formState.errors.projectType?.message ? (
              <p className="text-xs text-destructive" role="alert">
                {form.formState.errors.projectType.message}
              </p>
            ) : null}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="qf-timeline">Timeline</Label>
            <select id="qf-timeline" className={selectClass} {...form.register("timeline")}>
              {timelineOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {form.formState.errors.timeline?.message ? (
              <p className="text-xs text-destructive" role="alert">
                {form.formState.errors.timeline.message}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="qf-msg">Project details</Label>
            <Textarea
              id="qf-msg"
              rows={5}
              className="min-h-32 resize-y"
              placeholder="Rooms, square footage, colours in mind, access notes…"
              {...form.register("message")}
            />
            {form.formState.errors.message?.message ? (
              <p className="text-xs text-destructive" role="alert">
                {form.formState.errors.message.message}
              </p>
            ) : null}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="qf-budget">Budget range</Label>
            <select id="qf-budget" className={selectClass} {...form.register("budget")}>
              {budgetRanges.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-brand-navy/10 bg-brand-cream/50 p-3">
            <input
              id="qf-promo"
              type="checkbox"
              className="mt-1 size-4 rounded border border-input text-brand-navy focus-visible:ring-2 focus-visible:ring-ring"
              {...form.register("wantsPromo")}
            />
            <Label htmlFor="qf-promo" className="text-sm leading-snug font-normal text-muted-foreground">
              I&apos;m interested in the new-client offer (10% off first project
              when booked this season, where applicable).
            </Label>
          </div>
        </div>
      ) : null}

      {form.formState.errors.root?.message ? (
        <p className="text-sm text-destructive" role="alert">
          {form.formState.errors.root.message}
        </p>
      ) : null}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <Button
            type="button"
            variant="outline"
            className="sm:w-40"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <Button
            type="button"
            className={cn("bg-brand-navy text-white hover:bg-brand-navy/90 sm:ml-auto sm:w-48")}
            onClick={() => void next()}
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 sm:ml-auto sm:w-52"
          >
            {form.formState.isSubmitting ? "Sending…" : "Submit request"}
          </Button>
        )}
      </div>
    </form>
  );
}
