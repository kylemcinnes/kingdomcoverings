/**
 * Edge-safe Resend delivery using the REST API (no Node-only SDK).
 * Used by Server Actions on Cloudflare Pages (workerd + nodejs_compat).
 */

type SendResult = { ok: true } | { ok: false; status: number; body: string };

export async function sendResendEmail(params: {
  from: string;
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return { ok: false, status: 500, body: "RESEND_API_KEY missing" };
  }

  const payload: Record<string, unknown> = {
    from: params.from,
    to: params.to,
    subject: params.subject,
    text: params.text,
  };
  if (params.replyTo) {
    payload.reply_to = params.replyTo;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok) {
    return { ok: false, status: res.status, body: text };
  }
  return { ok: true };
}
