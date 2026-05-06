"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Field, TextInput, TextArea } from "@/components/admin/FormField";
import { ArrayInput } from "@/components/admin/ArrayInput";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Button } from "@/components/ui/button";
import { updateSiteSettings, type SiteSettingsPayload } from "./actions";

const DAYS = [
  { key: "monday", label: "Pazartesi" },
  { key: "tuesday", label: "Salı" },
  { key: "wednesday", label: "Çarşamba" },
  { key: "thursday", label: "Perşembe" },
  { key: "friday", label: "Cuma" },
  { key: "saturday", label: "Cumartesi" },
  { key: "sunday", label: "Pazar" },
];

const SOCIAL_FIELDS = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "youtube", label: "YouTube" },
  { key: "tiktok", label: "TikTok" },
  { key: "twitter", label: "X (Twitter)" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "pinterest", label: "Pinterest" },
  { key: "googleBusiness", label: "Google Business" },
];

export function SettingsForm({ initial }: { initial: SiteSettingsPayload }) {
  const router = useRouter();
  const [data, setData] = useState<SiteSettingsPayload>(initial);
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  function set<K extends keyof SiteSettingsPayload>(key: K, value: SiteSettingsPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function setHours(day: string, val: string) {
    set("hours", { ...data.hours, [day]: val });
  }
  function setSocial(key: string, val: string) {
    set("social", { ...data.social, [key]: val });
  }
  function setStat(key: string, val: number) {
    set("stats", { ...data.stats, [key]: val });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    startTransition(async () => {
      const r = await updateSiteSettings(data);
      if (r.error) setMsg({ type: "err", text: r.error });
      else {
        setMsg({ type: "ok", text: "Site ayarları kaydedildi." });
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Marka */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Marka</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Marka Adı" required>
            <TextInput
              value={data.brand_name}
              onChange={(e) => set("brand_name", e.target.value)}
              required
            />
          </Field>
          <Field label="Yasal Ad">
            <TextInput
              value={data.legal_name ?? ""}
              onChange={(e) => set("legal_name", e.target.value || null)}
            />
          </Field>
          <Field label="Kısa Ad">
            <TextInput
              value={data.short_name ?? ""}
              onChange={(e) => set("short_name", e.target.value || null)}
            />
          </Field>
          <Field label="Sahip / Owner">
            <TextInput
              value={data.owner ?? ""}
              onChange={(e) => set("owner", e.target.value || null)}
            />
          </Field>
          <Field label="Kuruluş Yılı">
            <TextInput
              value={data.founded ?? ""}
              onChange={(e) => set("founded", e.target.value || null)}
              placeholder="2025"
            />
          </Field>
        </div>
        <Field label="Tagline" hint="Hero altında veya marka sloganında görünür">
          <TextInput
            value={data.tagline ?? ""}
            onChange={(e) => set("tagline", e.target.value || null)}
          />
        </Field>
        <Field label="Kısa Tanım" hint="Footer + meta description fallback">
          <TextArea
            value={data.short_description ?? ""}
            onChange={(e) => set("short_description", e.target.value || null)}
            rows={3}
          />
        </Field>
      </section>

      {/* Branding */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Logo & Marka Görselleri</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <ImageUpload
            label="Logo"
            bucket="branding"
            value={data.logo_url}
            onChange={(url) => set("logo_url", url)}
            aspectRatio="square"
            pathPrefix="logo"
            hint="Header ve schema için. Tercihen şeffaf PNG."
          />
          <ImageUpload
            label="Favicon"
            bucket="branding"
            value={data.favicon_url}
            onChange={(url) => set("favicon_url", url)}
            aspectRatio="square"
            pathPrefix="favicon"
            hint="Tarayıcı sekme ikonu, 512×512 PNG önerilir"
          />
        </div>
        <ImageUpload
          label="Varsayılan OG Image"
          bucket="branding"
          value={data.default_og_image}
          onChange={(url) => set("default_og_image", url)}
          aspectRatio="video"
          pathPrefix="og"
          hint="Sosyal medyada paylaşıldığında görünür, 1200×630"
        />
      </section>

      {/* İletişim */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">İletişim</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Telefon (E.164)" required hint="+905396330358">
            <TextInput
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
              required
            />
          </Field>
          <Field label="Telefon Görünümü" required>
            <TextInput
              value={data.phone_display}
              onChange={(e) => set("phone_display", e.target.value)}
              placeholder="0539 633 03 58"
              required
            />
          </Field>
          <Field label="WhatsApp (E.164)" required>
            <TextInput
              value={data.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              required
            />
          </Field>
          <Field label="WhatsApp Görünümü" required>
            <TextInput
              value={data.whatsapp_display}
              onChange={(e) => set("whatsapp_display", e.target.value)}
              required
            />
          </Field>
          <Field label="E-posta" required>
            <TextInput
              type="email"
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
              required
            />
          </Field>
        </div>
      </section>

      {/* Adres */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Adres & Konum</h2>
        <Field label="Sokak / Cadde">
          <TextInput
            value={data.street ?? ""}
            onChange={(e) => set("street", e.target.value || null)}
          />
        </Field>
        <div className="grid gap-5 md:grid-cols-3">
          <Field label="Mahalle">
            <TextInput
              value={data.neighborhood ?? ""}
              onChange={(e) => set("neighborhood", e.target.value || null)}
            />
          </Field>
          <Field label="İlçe">
            <TextInput
              value={data.district ?? ""}
              onChange={(e) => set("district", e.target.value || null)}
            />
          </Field>
          <Field label="Şehir">
            <TextInput
              value={data.city ?? ""}
              onChange={(e) => set("city", e.target.value || null)}
            />
          </Field>
          <Field label="Posta Kodu">
            <TextInput
              value={data.postal_code ?? ""}
              onChange={(e) => set("postal_code", e.target.value || null)}
            />
          </Field>
          <Field label="Ülke (ISO)">
            <TextInput
              value={data.country ?? ""}
              onChange={(e) => set("country", e.target.value || null)}
              placeholder="TR"
            />
          </Field>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Enlem (latitude)">
            <TextInput
              type="number"
              step="any"
              value={data.latitude ?? ""}
              onChange={(e) =>
                set("latitude", e.target.value ? Number(e.target.value) : null)
              }
              placeholder="40.8079"
            />
          </Field>
          <Field label="Boylam (longitude)">
            <TextInput
              type="number"
              step="any"
              value={data.longitude ?? ""}
              onChange={(e) =>
                set("longitude", e.target.value ? Number(e.target.value) : null)
              }
              placeholder="29.4209"
            />
          </Field>
        </div>
        <Field label="Maps Arama Sorgusu">
          <TextInput
            value={data.maps_place_query ?? ""}
            onChange={(e) => set("maps_place_query", e.target.value || null)}
          />
        </Field>
      </section>

      {/* Çalışma Saatleri */}
      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Çalışma Saatleri</h2>
        <div className="grid gap-2 md:grid-cols-2">
          {DAYS.map(({ key, label }) => (
            <Field key={key} label={label}>
              <TextInput
                value={data.hours?.[key] ?? ""}
                onChange={(e) => setHours(key, e.target.value)}
                placeholder="09:00-20:00"
              />
            </Field>
          ))}
        </div>
      </section>

      {/* Sosyal Medya */}
      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Sosyal Medya</h2>
        <p className="text-xs text-muted-foreground">
          Boş bırakılan alanlar Footer'da ve schema sameAs'te görünmez.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {SOCIAL_FIELDS.map(({ key, label }) => (
            <Field key={key} label={label}>
              <TextInput
                value={data.social?.[key] ?? ""}
                onChange={(e) => setSocial(key, e.target.value)}
                placeholder="https://..."
              />
            </Field>
          ))}
        </div>
      </section>

      {/* Hizmet Bölgesi */}
      <section className="rounded-xl border border-border bg-card p-6">
        <ArrayInput
          label="Hizmet Bölgesi (şehir/ilçe)"
          value={data.service_area}
          onChange={(v) => set("service_area", v)}
          placeholder="Gebze"
          hint="Schema markup'ta areaServed olarak gönderilir"
        />
      </section>

      {/* İstatistikler */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">İstatistikler</h2>
        <p className="text-xs text-muted-foreground">
          ⚠️ Sahte sayı koymayın. Google Rich Results politikası ihlal cezası riski.
          0 olan değerler sitede görünmez (yerine "Yazılı Sözleşme" gibi taahhüt rozetleri çıkar).
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Yıllık Deneyim">
            <TextInput
              type="number"
              value={data.stats?.yearsOfExperience ?? 0}
              onChange={(e) =>
                setStat("yearsOfExperience", parseInt(e.target.value, 10) || 0)
              }
            />
          </Field>
          <Field label="Mutlu Çift">
            <TextInput
              type="number"
              value={data.stats?.happyCouples ?? 0}
              onChange={(e) => setStat("happyCouples", parseInt(e.target.value, 10) || 0)}
            />
          </Field>
          <Field label="Tamamlanan Çekim">
            <TextInput
              type="number"
              value={data.stats?.photoshoots ?? 0}
              onChange={(e) => setStat("photoshoots", parseInt(e.target.value, 10) || 0)}
            />
          </Field>
          <Field label="Google Puan (1-5)">
            <TextInput
              type="number"
              step="0.1"
              value={data.stats?.googleRating ?? 0}
              onChange={(e) => setStat("googleRating", parseFloat(e.target.value) || 0)}
            />
          </Field>
          <Field label="Google Yorum Sayısı">
            <TextInput
              type="number"
              value={data.stats?.googleReviewCount ?? 0}
              onChange={(e) =>
                setStat("googleReviewCount", parseInt(e.target.value, 10) || 0)
              }
            />
          </Field>
          <Field label="Edit Teslim (gün)">
            <TextInput
              type="number"
              value={data.stats?.deliveryDays ?? 14}
              onChange={(e) => setStat("deliveryDays", parseInt(e.target.value, 10) || 14)}
            />
          </Field>
        </div>
      </section>

      {/* Analytics */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Analytics</h2>
        <Field label="Google Analytics Measurement ID">
          <TextInput
            value={data.ga_id ?? ""}
            onChange={(e) => set("ga_id", e.target.value || null)}
            placeholder="G-XXXXXXXXXX"
          />
        </Field>
        <Field label="Microsoft Clarity Project ID (opsiyonel)">
          <TextInput
            value={data.clarity_id ?? ""}
            onChange={(e) => set("clarity_id", e.target.value || null)}
          />
        </Field>
      </section>

      {msg ? (
        <div
          className={`rounded-md border px-3 py-2 text-sm ${
            msg.type === "ok"
              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border-destructive/50 bg-destructive/10 text-destructive"
          }`}
        >
          {msg.text}
        </div>
      ) : null}

      <div className="sticky bottom-0 -mx-4 flex items-center gap-3 border-t border-border bg-background px-4 py-4 lg:-mx-8 lg:px-8">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Kaydediliyor…" : "Tüm Ayarları Kaydet"}
        </Button>
      </div>
    </form>
  );
}
