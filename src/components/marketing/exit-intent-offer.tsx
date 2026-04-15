"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { exitLeadSchema, type ExitLeadInput } from "@/lib/schemas";
import { submitExitLead } from "@/app/actions/leads";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SparklesIcon } from "lucide-react";

const STORAGE_KEY = "kc_exit_offer_seen";

export function ExitIntentOffer() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const form = useForm<ExitLeadInput>({
    resolver: zodResolver(exitLeadSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
      setOpen(true);
    };

    document.documentElement.addEventListener("mouseleave", onLeave);
    return () =>
      document.documentElement.removeEventListener("mouseleave", onLeave);
  }, []);

  const onOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next && typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  const onSubmit = useCallback(
    async (data: ExitLeadInput) => {
      const res = await submitExitLead(data);
      if (res.ok) {
        setDone(true);
        form.reset();
        window.sessionStorage.setItem(STORAGE_KEY, "1");
        setTimeout(() => setOpen(false), 2200);
      } else {
        form.setError("root", { message: res.message });
      }
    },
    [form],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-brand-navy/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-brand-navy">
            Before you go—unlock your instant quote
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            New clients: priority scheduling plus{" "}
            <span className="font-semibold text-brand-navy">
              10% off your first project
            </span>{" "}
            when you start with Kingdom Coverings this season.
          </DialogDescription>
        </DialogHeader>
        {done ? (
          <p className="rounded-lg bg-brand-sage/15 px-3 py-2 text-sm text-brand-navy">
            You&apos;re in. Check your email for next steps—we&apos;ll follow
            up personally.
          </p>
        ) : (
          <form
            className="grid gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid gap-1.5">
              <Label htmlFor="exit-name">Name</Label>
              <Input id="exit-name" {...form.register("name")} />
              {form.formState.errors.name?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {form.formState.errors.name.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="exit-email">Email</Label>
              <Input
                id="exit-email"
                type="email"
                autoComplete="email"
                {...form.register("email")}
              />
              {form.formState.errors.email?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="exit-phone">Phone</Label>
              <Input
                id="exit-phone"
                type="tel"
                autoComplete="tel"
                {...form.register("phone")}
              />
              {form.formState.errors.phone?.message ? (
                <p className="text-xs text-destructive" role="alert">
                  {form.formState.errors.phone.message}
                </p>
              ) : null}
            </div>
            {form.formState.errors.root?.message ? (
              <p className="text-sm text-destructive" role="alert">
                {form.formState.errors.root.message}
              </p>
            ) : null}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mt-1 bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
            >
              <SparklesIcon className="size-4" aria-hidden />
              {form.formState.isSubmitting ? "Sending…" : "Send my offer"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
