"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { Field, TextInput, TextArea } from "@/components/c1907d/FormField";
import { TagInput } from "@/components/c1907d/TagInput";
import { MultiSelect } from "@/components/c1907d/MultiSelect";
import { ImageUpload } from "@/components/c1907d/ImageUpload";
import { MarkdownEditor } from "@/components/c1907d/MarkdownEditor";
import { Button } from "@/components/ui/button";
import { upsertBlogPost, type BlogPostPayload } from "./actions";

interface Option {
  value: string;
  label: string;
}

interface BlogFormProps {
  initial?: BlogPostPayload;
  originalSlug: string | null;
  serviceOptions: Option[];
  categories: string[];
}

const empty: BlogPostPayload = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "",
  tags: [],
  author: "Akse Fotoğrafçılık",
  published_at: new Date().toISOString().slice(0, 10),
  cover_image: "",
  reading_time: 5,
  related_services: [],
  related_districts: [],
  is_published: true,
  faqs: [],
};

const DISTRICT_OPTS = [
  { value: "gebze", label: "Gebze" },
  { value: "darica", label: "Darıca" },
  { value: "cayirova", label: "Çayırova" },
  { value: "dilovasi", label: "Dilovası" },
];

export function BlogForm({ initial, originalSlug, serviceOptions, categories }: BlogFormProps) {
  const router = useRouter();
  const [data, setData] = useState<BlogPostPayload>(initial ?? empty);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof BlogPostPayload>(key: K, value: BlogPostPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    // Reading time hesabını otomatik güncelle
    const wordCount = data.content.trim().split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.round(wordCount / 200));
    const payload = { ...data, reading_time: readingTime };

    startTransition(async () => {
      const result = await upsertBlogPost(originalSlug, payload);
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/c1907d/blog");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="space-y-5 rounded-xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Temel Bilgi</h2>
        <Field label="Başlık" required>
          <TextInput
            value={data.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="Gebze Düğün Fotoğraf Mekanları 2026"
            required
          />
        </Field>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="URL Slug" required>
            <TextInput
              value={data.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="gebze-dugun-fotograf-mekanlari-2026"
              required
            />
          </Field>
          <Field label="Kategori" required>
            <input
              list="blog-categories"
              value={data.category}
              onChange={(e) => set("category", e.target.value)}
              required
              placeholder="Düğün Rehberi"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <datalist id="blog-categories">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </Field>
          <Field label="Yayın Tarihi" required>
            <TextInput
              type="date"
              value={data.published_at.slice(0, 10)}
              onChange={(e) => set("published_at", e.target.value)}
              required
            />
          </Field>
          <Field label="Yazar">
            <TextInput
              value={data.author}
              onChange={(e) => set("author", e.target.value)}
            />
          </Field>
        </div>
        <Field label="Özet" required hint="Listede görünür, 150-160 karakter ideal">
          <TextArea
            value={data.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            rows={2}
            required
          />
        </Field>
        <TagInput
          label="Etiketler"
          value={data.tags}
          onChange={(v) => set("tags", v)}
          placeholder="düğün, gebze, sahil çekimi…"
        />
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
        <ImageUpload
          label="Kapak Görseli"
          bucket="blog"
          value={data.cover_image || null}
          onChange={(url) => set("cover_image", url ?? "")}
          aspectRatio="video"
          pathPrefix={data.slug || "drafts"}
          hint="1200×630 önerilir, sosyal medya OG görselin için de kullanılır"
        />
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <MarkdownEditor
          label="İçerik (Markdown)"
          value={data.content}
          onChange={(v) => set("content", v)}
          rows={24}
          placeholder="Yazının ana içeriği..."
          hint="## H2, ### H3, **kalın**, _italik_, [link](url), - liste"
        />
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <MultiSelect
          label="İlgili Hizmetler"
          options={serviceOptions}
          value={data.related_services}
          onChange={(v) => set("related_services", v)}
        />
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <MultiSelect
          label="İlgili İlçeler"
          options={DISTRICT_OPTS}
          value={data.related_districts}
          onChange={(v) => set("related_districts", v)}
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
              placeholder="Soru…"
            />
            <TextArea
              value={faq.answer}
              onChange={(e) => {
                const next = [...data.faqs];
                next[i] = { ...next[i]!, answer: e.target.value };
                set("faqs", next);
              }}
              rows={3}
              placeholder="Cevap…"
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
          {isPending ? "Kaydediliyor…" : originalSlug ? "Kaydet" : "Yazıyı Oluştur"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => router.push("/c1907d/blog")}
        >
          İptal
        </Button>
      </div>
    </form>
  );
}
