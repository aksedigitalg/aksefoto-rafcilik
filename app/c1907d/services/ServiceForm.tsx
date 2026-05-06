"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Star } from "lucide-react";
import { Field, TextInput, TextArea } from "@/components/c1907d/FormField";
import { ArrayInput } from "@/components/c1907d/ArrayInput";
import { TagInput } from "@/components/c1907d/TagInput";
import { MultiSelect } from "@/components/c1907d/MultiSelect";
import { MarkdownEditor } from "@/components/c1907d/MarkdownEditor";
import { Button } from "@/components/ui/button";
import { upsertService, type ServicePayload } from "./actions";

interface Option {
  value: string;
  label: string;
}

interface ServiceFormProps {
  initial?: ServicePayload;
  originalSlug: string | null;
  serviceOptions: Option[];
  categoryOptions: Option[];
  galleryOptions: Option[];
}

const empty: ServicePayload = {
  slug: "",
  name: "",
  category: "dugun-toren",
  primary_keyword: "",
  secondary_keywords: [],
  short_description: "",
  long_description: "",
  features: [],
  related_services: [],
  gallery_category: "studyo",
  icon: null,
  meta_title: null,
  meta_description: null,
  is_published: true,
  packages: [],
  faqs: [],
};

export function ServiceForm({
  initial,
  originalSlug,
  serviceOptions,
  categoryOptions,
  galleryOptions,
}: ServiceFormProps) {
  const router = useRouter();
  const [data, setData] = useState<ServicePayload>(initial ?? empty);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof ServicePayload>(key: K, value: ServicePayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await upsertService(originalSlug, data);
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/c1907d/services");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Temel bilgi */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Temel Bilgi</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Hizmet Adı" required>
            <TextInput
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Düğün Fotoğrafçısı"
              required
            />
          </Field>
          <Field label="URL Slug" required hint="Türkçe karakter yok, küçük harf, tire ile">
            <TextInput
              value={data.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="dugun-fotografcisi"
              required
            />
          </Field>
          <Field label="Kategori" required>
            <select
              value={data.category}
              onChange={(e) => set("category", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            >
              {categoryOptions.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Galeri Kategorisi">
            <select
              value={data.gallery_category}
              onChange={(e) => set("gallery_category", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {galleryOptions.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Birincil Anahtar Kelime" required>
          <TextInput
            value={data.primary_keyword}
            onChange={(e) => set("primary_keyword", e.target.value)}
            placeholder="Gebze düğün fotoğrafçısı"
            required
          />
        </Field>

        <TagInput
          label="İkincil Anahtar Kelimeler"
          value={data.secondary_keywords}
          onChange={(v) => set("secondary_keywords", v)}
          placeholder="Yeni kelime ekle…"
          hint="Enter veya virgül ile ekle. SEO için 5-8 anahtar kelime önerilir."
        />

        <Field label="Kısa Açıklama" required hint="1-2 cümle, kart görünümünde gösterilir">
          <TextArea
            value={data.short_description}
            onChange={(e) => set("short_description", e.target.value)}
            placeholder="Hayatınızın en özel günleri için..."
            rows={3}
            required
          />
        </Field>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={data.is_published}
            onChange={(e) => set("is_published", e.target.checked)}
            className="h-4 w-4"
          />
          Yayında (kullanıcılar görür)
        </label>
      </section>

      {/* Uzun açıklama */}
      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <MarkdownEditor
          label="Detaylı Açıklama (Markdown)"
          value={data.long_description}
          onChange={(v) => set("long_description", v)}
          rows={20}
          placeholder="## Yaklaşım&#10;&#10;Hizmetin detaylı anlatımı...&#10;&#10;## Süreç&#10;&#10;### Çekim öncesi&#10;..."
          hint="## ile H2, ### ile H3, **kalın**, _italik_, [link](url), - liste"
        />
      </section>

      {/* Özellikler */}
      <section className="rounded-xl border border-border bg-card p-6">
        <ArrayInput
          label="Özellikler / Hizmet Kapsamı"
          value={data.features}
          onChange={(v) => set("features", v)}
          placeholder="Drone hava çekimi"
          addLabel="Özellik Ekle"
          hint="4-8 özellik kart görünümünde gösterilir"
        />
      </section>

      {/* Paketler */}
      <section className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Paketler ({data.packages.length})</h2>
          <button
            type="button"
            onClick={() =>
              set("packages", [
                ...data.packages,
                {
                  name: "",
                  price_range: "",
                  description: null,
                  includes: [],
                  popular: false,
                },
              ])
            }
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
          >
            <Plus className="h-3 w-3" /> Paket Ekle
          </button>
        </div>

        {data.packages.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Henüz paket yok. Genelde 3 paket önerilir (Klasik / Hikaye / Premium).
          </p>
        ) : null}

        {data.packages.map((pkg, i) => (
          <div key={i} className="space-y-3 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Paket #{i + 1}</span>
              <button
                type="button"
                onClick={() => set("packages", data.packages.filter((_, idx) => idx !== i))}
                className="rounded p-1 text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Paket Adı">
                <TextInput
                  value={pkg.name}
                  onChange={(e) => {
                    const next = [...data.packages];
                    next[i] = { ...next[i]!, name: e.target.value };
                    set("packages", next);
                  }}
                  placeholder="Klasik / Hikaye / Premium"
                />
              </Field>
              <Field label="Fiyat Aralığı">
                <TextInput
                  value={pkg.price_range}
                  onChange={(e) => {
                    const next = [...data.packages];
                    next[i] = { ...next[i]!, price_range: e.target.value };
                    set("packages", next);
                  }}
                  placeholder="₺18.000-25.000"
                />
              </Field>
            </div>
            <Field label="Kısa Tanım (opsiyonel)">
              <TextArea
                value={pkg.description ?? ""}
                onChange={(e) => {
                  const next = [...data.packages];
                  next[i] = { ...next[i]!, description: e.target.value || null };
                  set("packages", next);
                }}
                rows={2}
              />
            </Field>
            <ArrayInput
              label="Paket İçeriği"
              value={pkg.includes}
              onChange={(v) => {
                const next = [...data.packages];
                next[i] = { ...next[i]!, includes: v };
                set("packages", next);
              }}
              placeholder="8 saat çekim"
              addLabel="Madde Ekle"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={pkg.popular}
                onChange={(e) => {
                  const next = [...data.packages];
                  next[i] = { ...next[i]!, popular: e.target.checked };
                  set("packages", next);
                }}
                className="h-4 w-4"
              />
              <Star className="h-3.5 w-3.5 text-amber-500" />
              "Popüler" rozeti göster
            </label>
          </div>
        ))}
      </section>

      {/* SSS */}
      <section className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">SSS ({data.faqs.length})</h2>
          <button
            type="button"
            onClick={() => set("faqs", [...data.faqs, { question: "", answer: "" }])}
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
          >
            <Plus className="h-3 w-3" /> SSS Ekle
          </button>
        </div>

        {data.faqs.map((faq, i) => (
          <div key={i} className="space-y-2 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-xs text-muted-foreground">Soru #{i + 1}</span>
              <button
                type="button"
                onClick={() => set("faqs", data.faqs.filter((_, idx) => idx !== i))}
                className="rounded p-1 text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <TextInput
              value={faq.question}
              onChange={(e) => {
                const next = [...data.faqs];
                next[i] = { ...next[i]!, question: e.target.value };
                set("faqs", next);
              }}
              placeholder="Çekim ne kadar sürer?"
            />
            <TextArea
              value={faq.answer}
              onChange={(e) => {
                const next = [...data.faqs];
                next[i] = { ...next[i]!, answer: e.target.value };
                set("faqs", next);
              }}
              placeholder="Düğün çekimleri ortalama 8-10 saat..."
              rows={3}
            />
          </div>
        ))}
      </section>

      {/* İlgili hizmetler */}
      <section className="rounded-xl border border-border bg-card p-6">
        <MultiSelect
          label="İlgili Hizmetler"
          options={serviceOptions.filter((s) => s.value !== data.slug)}
          value={data.related_services}
          onChange={(v) => set("related_services", v)}
          hint="3-5 ilgili hizmet seç. Ziyaretçi alttaki kartlardan diğerlerine geçer."
        />
      </section>

      {/* SEO */}
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">SEO Meta</h2>
        <Field label="Meta Title" hint="60-70 karakter, anahtar kelime baş tarafta">
          <TextInput
            value={data.meta_title ?? ""}
            onChange={(e) => set("meta_title", e.target.value || null)}
            placeholder="Boş bırakılırsa hizmet adı kullanılır"
          />
        </Field>
        <Field label="Meta Description" hint="150-160 karakter">
          <TextArea
            value={data.meta_description ?? ""}
            onChange={(e) => set("meta_description", e.target.value || null)}
            rows={2}
            placeholder="Boş bırakılırsa kısa açıklama kullanılır"
          />
        </Field>
      </section>

      {/* Submit */}
      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <div className="sticky bottom-0 -mx-4 flex items-center gap-3 border-t border-border bg-background px-4 py-4 lg:-mx-8 lg:px-8">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Kaydediliyor…" : originalSlug ? "Değişiklikleri Kaydet" : "Hizmeti Oluştur"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => router.push("/c1907d/services")}
        >
          İptal
        </Button>
      </div>
    </form>
  );
}
