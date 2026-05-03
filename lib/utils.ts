import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Turkce karakterleri SEO-uyumlu URL slug'ina cevirir.
 * Ornek: "Şekerpınar Mahallesi" → "sekerpinar-mahallesi"
 */
export function slugify(text: string): string {
  const turkishMap: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };
  return text
    .split("")
    .map((char) => turkishMap[char] ?? char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Turkce sayi formati: 1234.56 → "1.234,56"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("tr-TR").format(num);
}

/**
 * Turkce tarih formati
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Bir metnin kac dakikada okunabilecegini hesaplar (ortalama 200 kelime/dk)
 */
export function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Site URL'ine bir path ekler (canonical URL uretmek icin)
 */
export function absoluteUrl(path: string, siteUrl?: string): string {
  const base = (siteUrl || process.env.NEXT_PUBLIC_SITE_URL || "https://aksefotograf.com").replace(
    /\/$/,
    "",
  );
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Bir metindeki kelime sayisini sayar (icerik uzunluk dogrulamasi icin)
 */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
