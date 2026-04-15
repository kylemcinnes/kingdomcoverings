"use server";

import { Resend } from "resend";
import { z } from "zod";
import { COMPANY } from "@/lib/constants";
import {
  exitLeadSchema,
  newsletterSchema,
  quoteSchema,
} from "@/lib/schemas";
import { getSiteUrl } from "@/lib/site";

export type ActionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function toFieldErrors(error: z.ZodError): Record<string, string[]> {
  return error.flatten().fieldErrors as Record<string, string[]>;
}

export async function submitQuote(
  input: unknown,
): Promise<ActionResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }
  const data = parsed.data;
  const resend = getResend();
  const to = process.env.CONTACT_INBOX_EMAIL ?? COMPANY.email;
  const subject = `New quote request — ${data.name}`;
  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Project: ${data.projectType}`,
    `Timeline: ${data.timeline}`,
    `Budget: ${data.budget}`,
    `Promo interest: ${data.wantsPromo ? "Yes (exit offer)" : "No"}`,
    "",
    "Message:",
    data.message,
    "",
    "UTM:",
    `source=${data.utmSource ?? ""} medium=${data.utmMedium ?? ""} campaign=${data.utmCampaign ?? ""}`,
    `content=${data.utmContent ?? ""} term=${data.utmTerm ?? ""}`,
    "",
    `Submitted from: ${getSiteUrl()}/contact`,
  ].join("\n");

  if (!resend) {
    console.warn("[leads] RESEND_API_KEY missing — quote logged only.");
    console.info(lines);
    return {
      ok: true,
      message:
        "Thanks — your request was received. Our team will follow up shortly.",
    };
  }

  const { error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ??
      "Kingdom Coverings <onboarding@resend.dev>",
    to: [to],
    replyTo: data.email,
    subject,
    text: lines,
  });

  if (error) {
    console.error(error);
    return {
      ok: false,
      message: "We could not send your message right now. Please call us.",
    };
  }

  return {
    ok: true,
    message: "Thanks — your request was received. We'll be in touch shortly.",
  };
}

export async function submitNewsletter(
  input: unknown,
): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please enter a valid email.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }
  const resend = getResend();
  const to = process.env.CONTACT_INBOX_EMAIL ?? COMPANY.email;
  const body = `Newsletter signup: ${parsed.data.email}\nFrom: ${getSiteUrl()}`;
  if (!resend) {
    console.info(body);
    return { ok: true, message: "You're on the list!" };
  }
  const { error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ??
      "Kingdom Coverings <onboarding@resend.dev>",
    to: [to],
    subject: "Newsletter signup",
    text: body,
  });
  if (error) {
    console.error(error);
    return { ok: false, message: "Signup failed. Please try again later." };
  }
  return { ok: true, message: "You're on the list!" };
}

export async function submitExitLead(
  input: unknown,
): Promise<ActionResult> {
  const parsed = exitLeadSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check your details.",
      fieldErrors: toFieldErrors(parsed.error),
    };
  }
  const resend = getResend();
  const to = process.env.CONTACT_INBOX_EMAIL ?? COMPANY.email;
  const lines = [
    "Exit-intent / promo lead",
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Phone: ${parsed.data.phone}`,
    "",
    `Source: ${getSiteUrl()}`,
  ].join("\n");
  if (!resend) {
    console.info(lines);
    return { ok: true, message: "Offer sent to your inbox (check spam)." };
  }
  const { error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ??
      "Kingdom Coverings <onboarding@resend.dev>",
    to: [to],
    replyTo: parsed.data.email,
    subject: "Promo lead — Instant Quote + 10% first project",
    text: lines,
  });
  if (error) {
    console.error(error);
    return { ok: false, message: "Something went wrong. Please call us." };
  }
  return { ok: true, message: "You're in — we'll send your quote shortly." };
}
