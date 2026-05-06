import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { BlogForm } from "../../BlogForm";
import type { BlogPostPayload } from "../../actions";
import type { BlogPostRow, BlogPostFaqRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { supabase } = await requireAdmin();

  const pRes = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  if (!pRes.data) notFound();
  const post = pRes.data as BlogPostRow;

  const faqRes = await supabase
    .from("blog_post_faqs")
    .select("*")
    .eq("post_slug", slug)
    .order("sort_order");

  const faqs = ((faqRes.data ?? []) as BlogPostFaqRow[]).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const initial: BlogPostPayload = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    tags: post.tags,
    author: post.author,
    published_at: post.published_at,
    cover_image: post.cover_image,
    reading_time: post.reading_time,
    related_services: post.related_services,
    related_districts: post.related_districts,
    is_published: post.is_published,
    faqs,
  };

  const sRes = await supabase.from("services").select("slug, name").order("sort_order");
  const services = (sRes.data ?? []) as Array<{ slug: string; name: string }>;
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

  const cRes = await supabase.from("blog_posts").select("category");
  const cats = Array.from(
    new Set(((cRes.data ?? []) as Array<{ category: string }>).map((r) => r.category)),
  ).sort();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">{post.title}</h1>
          <p className="text-sm text-muted-foreground">/{post.slug}</p>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Sitede Aç
        </Link>
      </div>
      <BlogForm
        initial={initial}
        originalSlug={post.slug}
        serviceOptions={serviceOptions}
        categories={cats}
      />
    </div>
  );
}
