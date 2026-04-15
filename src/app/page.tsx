import type { Metadata } from "next";
import { HeroHome } from "@/components/marketing/hero-home";
import { TrustBar } from "@/components/marketing/trust-bar";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { BeforeAfterCarousel } from "@/components/marketing/before-after-carousel";
import { MinistryTeaser } from "@/components/marketing/ministry-teaser";
import { TestimonialCarousel } from "@/components/marketing/testimonial-carousel";
import { FinalCtaBanner } from "@/components/marketing/final-cta-banner";

export const metadata: Metadata = {
  title: "Port Credit & Mississauga painters | Kingdom Coverings",
  description:
    "Professional interior & exterior painting across Port Credit, Mississauga, Oakville & GTA. Profits support Church of Second Chances ministry.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TrustBar />
      <ServicesOverview />
      <BeforeAfterCarousel />
      <MinistryTeaser />
      <TestimonialCarousel />
      <FinalCtaBanner />
    </>
  );
}
