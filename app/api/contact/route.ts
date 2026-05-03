import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/constants";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  preferredDate: z.string().optional(),
  message: z.string().min(10).max(2000),
  kvkkConsent: z.literal(true),
  website: z.string().max(0), // Honeypot
});

// Basit rate limiting (IP basli, in-memory)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 dakika
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderdiniz. Lütfen 1 dakika sonra tekrar deneyin." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL_TO || BUSINESS.email;
    const emailFrom = process.env.CONTACT_EMAIL_FROM || `Site <onboarding@resend.dev>`;

    // Resend yapılandırılmamışsa formu loglayıp basarisiz olmadan donduruyoruz
    // (geliştirme/yerel kullanım icin)
    if (!apiKey) {
      console.log("[contact form] Resend API anahtari yok. Form icerigi:", data);
      return NextResponse.json({
        success: true,
        warning: "E-posta gönderimi şu an aktif değil; mesajınız sistem yöneticisine bildirildi.",
      });
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>Yeni İletişim Mesajı — ${BUSINESS.name}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Ad Soyad</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefon</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td></tr>
        ${data.email ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>E-posta</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>` : ""}
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Hizmet</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.service)}</td></tr>
        ${data.preferredDate ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Tarih</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.preferredDate)}</td></tr>` : ""}
        <tr><td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Mesaj</strong></td><td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(data.message)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>IP</strong></td><td style="padding: 8px; border: 1px solid #ddd; color: #666;">${escapeHtml(ip)}</td></tr>
      </table>
    `;

    const result = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: data.email || undefined,
      subject: `[Site] ${data.name} - ${data.service}`,
      html,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Geçersiz form verisi", details: error.errors },
        { status: 400 },
      );
    }
    console.error("[contact form] error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen WhatsApp ile iletişime geçin." },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
