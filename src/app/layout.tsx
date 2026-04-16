import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";

/** Cloudflare Pages Functions + Server Actions (edge workerd with nodejs_compat). */
export const runtime = "edge";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { LocalBusinessJsonLdBlock } from "@/components/seo/local-business-jsonld";
import { COMPANY, PRIMARY_KEYWORDS } from "@/lib/constants";
import { HERO_IMAGE } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.shortName} | Port Credit & Mississauga Painters`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: `${COMPANY.differentiator} Interior & exterior painting for Port Credit, Mississauga, Oakville & GTA. Call ${COMPANY.phoneDisplay}.`,
  keywords: [...PRIMARY_KEYWORDS, ...COMPANY.services],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: COMPANY.legalName,
    title: `${COMPANY.shortName} — GTA professional painters`,
    description: COMPANY.differentiator,
    images: [
      {
        url: HERO_IMAGE,
        width: 2400,
        height: 1600,
        alt: "Professionally painted luxury home exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.shortName} — Professional painting`,
    description: COMPANY.differentiator,
    images: [HERO_IMAGE],
  },
  robots: { index: true, follow: true },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${dmSans.variable} ${cormorant.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <LocalBusinessJsonLdBlock />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
