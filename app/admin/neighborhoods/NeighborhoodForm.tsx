"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { Field, TextInput, TextArea } from "@/components/admin/FormField";
import { ArrayInput } from "@/components/admin/ArrayInput";
import { MultiSelect } from "@/components/admin/MultiSelect";
import { Button } from "@/components/ui/button";
import { upsertNeighborhood, type NeighborhoodPayload } from "./actions";

interface Option { value: string; label: string }

interface Props {
  initial?: NeighborhoodPayload;
  originalSlug: string | null;
  serviceOptions: Option[];
  neighborhoodOptions: Option[];
}

const empty: NeighborhoodPayload = {
  slug: "",
  name: "",
  district: "gebze",
  postal_code: null,
  population: null,
  description: "",
  landmarks: [],
  nearby_neighborhoods: [],
  popular_services: [],
  meta_title: null,
  meta_description: null,
  is_published: true,
  photoshoot_locations: [],
};

const DISTRICT_OPTS = [
  { value: "gebze", label: "Gebze" },
  { value: "darica", label: "Darıca" },
  { value: "cayirova", label: "Çayırova" },
  { value: "dilovasi", label: "Dilovası" },
];

export function NeighborhoodForm({
  initial,
  originalSlug,
  serviceOptions,
  neighborhoodOptions,
}: Props) {
  const router = useRouter();
  const [data, setData] = useState<NeighborhoodPayload>(initial ?? empty);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof NeighborhoodPayload>(key: K, value: NeighborhoodPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await upsertNeighborhood(originalSlug, data);
      if (result.error) setError(result.error);
      else {
        router.push("/admin/neighborhoods");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Temel Bilgi</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Mahalle Adı" required>
            <TextInput
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              required
            />
          </Field>
          <Field label="Slug" required hint="Türkçe karakter yok">
            <TextInput
              value={data.slug}
              onChange={(e) => set("slug", e.target.value)}
              required
            />
          </Field>
          <Field label="İlçe" required>
            <select
              value={data.district}
              onChange={(e) => set("district", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {DISTRICT_OPTS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Posta Kodu">
            <TextInput
              value={data.postal_code ?? ""}
              onChange={(e) => set("postal_code", e.target.value || null)}
              placeholder="41400"
            />
          </Field>
          <Field label="Nüfus (yaklaşık)">
            <TextInput
              type="number"
              value={data.population ?? ""}
              onChange={(e) =>
                set("population", e.target.value ? parseInt(e.target.value, 10) : null)
              }
            />
          </Field>
        </div>
        <Field label="Açıklama" required hint="Mahalleyi tanıtan 400+ kelimelik metin">
          <TextArea
            value={data.description}
            onChange={(e) => set("description", e.target.value)}
            rows={10}
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
          Yayında
        </label>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <ArrayInput
          label="Önemli Noktalar / Landmark'lar"
          value={data.landmarks}
          onChange={(v) => set("landmarks", v)}
          placeholder="Bayramoğlu sahili, Eskihisar kalesi…"
        />
      </section>

      <section className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">
            Çekim Mekanları ({data.photoshoot_locations.length})
          </h2>
          <button
            type="button"
            onClick={() =>
              set("photoshoot_locations", [
                ...data.photoshoot_locations,
                {
                  name: "",
                  description: "",
                  best_time_of_day: null,
                  latitude: null,
                  longitude: null,
                },
              ])
            }
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
          >
            <Plus className="h-3 w-3" /> Mekan Ekle
          </button>
        </div>

        {data.photoshoot_locations.map((loc, i) => (
          <div key={i} className="space-y-2 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Mekan #{i + 1}</span>
              <button
                type="button"
                onClick={() =>
                  set(
                    "photoshoot_locations",
                    data.photoshoot_locations.filter((_, idx) => idx !== i),
                  )
                }
                className="rounded p-1 text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <TextInput
              value={loc.name}
              onChange={(e) => {
                const next = [...data.photoshoot_locations];
                next[i] = { ...next[i]!, name: e.target.value };
                set("photoshoot_locations", next);
              }}
              placeholder="Mekan adı"
            />
            <TextArea
              value={loc.description}
              onChange={(e) => {
                const next = [...data.photoshoot_locations];
                next[i] = { ...next[i]!, description: e.target.value };
                set("photoshoot_locations", next);
              }}
              rows={2}
              placeholder="Kısa açıklama (kostüm, mevsim, ipucu...)"
            />
            <div className="grid gap-2 md:grid-cols-3">
              <TextInput
                value={loc.best_time_of_day ?? ""}
                onChange={(e) => {
                  const next = [...data.photoshoot_locations];
                  next[i] = { ...next[i]!, best_time_of_day: e.target.value || null };
                  set("photoshoot_locations", next);
                }}
                placeholder="Altın saat / sabah / öğleden sonra"
              />
              <TextInput
                type="number"
                step="any"
                value={loc.latitude ?? ""}
                onChange={(e) => {
                  const next = [...data.photoshoot_locations];
                  next[i] = {
                    ...next[i]!,
                    latitude: e.target.value ? Number(e.target.value) : null,
                  };
                  set("photoshoot_locations", next);
                }}
                placeholder="Enlem (lat)"
              />
              <TextInput
                type="number"
                step="any"
                value={loc.longitude ?? ""}
                onChange={(e) => {
                  const next = [...data.photoshoot_locations];
                  next[i] = {
                    ...next[i]!,
                    longitude: e.target.value ? Number(e.target.value) : null,
                  };
                  set("photoshoot_locations", next);
                }}
                placeholder="Boylam (lng)"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <MultiSelect
          label="Yakın Mahalleler"
          options={neighborhoodOptions.filter((n) => n.value !== data.slug)}
          value={data.nearby_neighborhoods}
          onChange={(v) => set("nearby_neighborhoods", v)}
        />
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <MultiSelect
          label="Popüler Hizmetler (slug)"
          options={serviceOptions}
          value={data.popular_services}
          onChange={(v) => set("popular_services", v)}
        />
      </section>

      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">SEO Meta</h2>
        <Field label="Meta Title">
          <TextInput
            value={data.meta_title ?? ""}
            onChange={(e) => set("meta_title", e.target.value || null)}
          />
        </Field>
        <Field label="Meta Description">
          <TextArea
            value={data.meta_description ?? ""}
            onChange={(e) => set("meta_description", e.target.value || null)}
            rows={2}
          />
        </Field>
      </section>

      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <div className="sticky bottom-0 -mx-4 flex items-center gap-3 border-t border-border bg-background px-4 py-4 lg:-mx-8 lg:px-8">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? "Kaydediliyor…" : originalSlug ? "Kaydet" : "Mahalleyi Oluştur"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => router.push("/admin/neighborhoods")}
        >
          İptal
        </Button>
      </div>
    </form>
  );
}
