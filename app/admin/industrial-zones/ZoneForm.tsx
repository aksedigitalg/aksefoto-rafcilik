"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { Field, TextInput, TextArea } from "@/components/admin/FormField";
import { ArrayInput } from "@/components/admin/ArrayInput";
import { Button } from "@/components/ui/button";
import { upsertZone, type ZonePayload } from "./actions";

interface Props {
  initial?: ZonePayload;
  originalSlug: string | null;
}

const empty: ZonePayload = {
  slug: "",
  name: "",
  full_name: "",
  district: "gebze",
  description: "",
  services_offered: [],
  notable_tenants_hint: null,
  is_published: true,
  faqs: [],
};

const DISTRICTS = [
  { value: "gebze", label: "Gebze" },
  { value: "darica", label: "Darıca" },
  { value: "cayirova", label: "Çayırova" },
  { value: "dilovasi", label: "Dilovası" },
];

export function ZoneForm({ initial, originalSlug }: Props) {
  const router = useRouter();
  const [data, setData] = useState<ZonePayload>(initial ?? empty);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof ZonePayload>(key: K, value: ZonePayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await upsertZone(originalSlug, data);
      if (result.error) setError(result.error);
      else {
        router.push("/admin/industrial-zones");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Temel Bilgi</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Kısa Ad" required>
            <TextInput
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="GOSB"
              required
            />
          </Field>
          <Field label="Slug" required>
            <TextInput
              value={data.slug}
              onChange={(e) => set("slug", e.target.value)}
              required
            />
          </Field>
          <Field label="Tam Ad" required>
            <TextInput
              value={data.full_name}
              onChange={(e) => set("full_name", e.target.value)}
              placeholder="Gebze Organize Sanayi Bölgesi"
              required
            />
          </Field>
          <Field label="İlçe" required>
            <select
              value={data.district}
              onChange={(e) => set("district", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {DISTRICTS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Açıklama" required hint="800+ kelimelik B2B odaklı tanıtım">
          <TextArea
            value={data.description}
            onChange={(e) => set("description", e.target.value)}
            rows={12}
            required
          />
        </Field>

        <Field label="Önemli Kiracı / Marka İpucu (opsiyonel)">
          <TextArea
            value={data.notable_tenants_hint ?? ""}
            onChange={(e) => set("notable_tenants_hint", e.target.value || null)}
            rows={2}
            placeholder="Örn: Ford, Toyota gibi otomotiv markaları..."
          />
        </Field>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={data.is_published}
            onChange={(e) => set("is_published", e.target.checked)}
            className="h-4 w-4"
          />
          Yayında
        </label>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <ArrayInput
          label="Sunulan Hizmetler"
          value={data.services_offered}
          onChange={(v) => set("services_offered", v)}
          placeholder="Fabrika tanıtım çekimi"
        />
      </section>

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
        {data.faqs.map((f, i) => (
          <div key={i} className="space-y-2 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Soru #{i + 1}</span>
              <button
                type="button"
                onClick={() => set("faqs", data.faqs.filter((_, idx) => idx !== i))}
                className="rounded p-1 text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <TextInput
              value={f.question}
              onChange={(e) => {
                const next = [...data.faqs];
                next[i] = { ...next[i]!, question: e.target.value };
                set("faqs", next);
              }}
              placeholder="Soru"
            />
            <TextArea
              value={f.answer}
              onChange={(e) => {
                const next = [...data.faqs];
                next[i] = { ...next[i]!, answer: e.target.value };
                set("faqs", next);
              }}
              rows={3}
              placeholder="Cevap"
            />
          </div>
        ))}
      </section>

      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <div className="sticky bottom-0 -mx-4 flex items-center gap-3 border-t border-border bg-background px-4 py-4 lg:-mx-8 lg:px-8">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Kaydediliyor…" : originalSlug ? "Kaydet" : "Sanayi Bölgesi Ekle"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => router.push("/admin/industrial-zones")}
        >
          İptal
        </Button>
      </div>
    </form>
  );
}
