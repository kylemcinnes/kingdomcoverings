export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function getCalendlyUrl() {
  return process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/";
}

export function getWhatsAppUrl() {
  const n = process.env.NEXT_PUBLIC_WHATSAPP_E164;
  if (!n) return null;
  const digits = n.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}
