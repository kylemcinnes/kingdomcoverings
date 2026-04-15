import { z } from "zod";

export const budgetRanges = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Prefer to discuss",
] as const;

export const projectTypes = [
  "Interior residential",
  "Exterior residential",
  "Commercial / industrial",
  "Wood staining / restoration",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP",
  "Within 2–4 weeks",
  "1–2 months",
  "3+ months / planning",
] as const;

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(10, "Enter a valid phone number."),
  email: z.string().email("Enter a valid email."),
  projectType: z.enum(projectTypes),
  timeline: z.enum(timelineOptions),
  message: z.string().min(10, "Tell us a bit about your project (10+ characters)."),
  budget: z.enum(budgetRanges),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  wantsPromo: z.boolean().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const exitLeadSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(10, "Enter a valid phone number."),
});

export type ExitLeadInput = z.infer<typeof exitLeadSchema>;
