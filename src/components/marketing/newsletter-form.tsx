"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas";
import { submitNewsletter } from "@/app/actions/leads";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<string | null>(null);
  const form = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = useCallback(
    async (data: NewsletterInput) => {
      setStatus(null);
      const res = await submitNewsletter(data);
      if (res.ok) {
        setStatus(res.message);
        form.reset();
      } else {
        setStatus(res.message);
      }
    },
    [form],
  );

  return (
    <form
      className={cn("grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]", className)}
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <div className="space-y-1.5">
        <Label htmlFor="newsletter-email" className="sr-only">
          Email
        </Label>
        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 border-white/20 bg-white/10 text-white placeholder:text-white/40"
          aria-invalid={!!form.formState.errors.email}
          {...form.register("email")}
        />
        {form.formState.errors.email?.message ? (
          <p className="text-xs text-amber-200" role="alert">
            {form.formState.errors.email.message}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="h-11 shrink-0 bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
      >
        {form.formState.isSubmitting ? "Joining…" : "Join"}
      </Button>
      {status ? (
        <p
          className="col-span-full text-xs text-brand-sage"
          aria-live="polite"
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
