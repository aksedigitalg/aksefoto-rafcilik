"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/c1907d/auth";

const TAG = "blog";

export interface BlogPostPayload {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  published_at: string;
  cover_image: string;
  reading_time: number;
  related_services: string[];
  related_districts: string[];
  is_published: boolean;
  faqs: Array<{ question: string; answer: string }>;
}

export async function upsertBlogPost(
  originalSlug: string | null,
  payload: BlogPostPayload,
): Promise<{ error?: string; slug?: string }> {
  const { supabase } = await requireAdmin();

  if (!payload.slug || !payload.title || !payload.category) {
    return { error: "Slug, başlık ve kategori zorunlu." };
  }

  const isNew = originalSlug === null;
  const slugChanged = !isNew && originalSlug !== payload.slug;

  if (isNew || slugChanged) {
    const exists = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("slug", payload.slug)
      .maybeSingle();
    if (exists.data) return { error: "Bu slug zaten kullanımda." };
  }

  const row = {
    slug: payload.slug,
    title: payload.title,
    excerpt: payload.excerpt,
    content: payload.content,
    category: payload.category,
    tags: payload.tags,
    author: payload.author,
    published_at: payload.published_at,
    cover_image: payload.cover_image,
    reading_time: payload.reading_time,
    related_services: payload.related_services,
    related_districts: payload.related_districts,
    is_published: payload.is_published,
  };

  if (isNew) {
    const { error } = await supabase.from("blog_posts").insert(row as never);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from("blog_posts")
      .update(row as never)
      .eq("slug", originalSlug);
    if (error) return { error: error.message };
  }

  if (slugChanged) {
    await supabase
      .from("blog_post_faqs")
      .update({ post_slug: payload.slug } as never)
      .eq("post_slug", originalSlug);
  }

  await supabase.from("blog_post_faqs").delete().eq("post_slug", payload.slug);
  if (payload.faqs.length > 0) {
    const rows = payload.faqs.map((f, idx) => ({
      post_slug: payload.slug,
      question: f.question,
      answer: f.answer,
      sort_order: idx,
    }));
    const { error } = await supabase.from("blog_post_faqs").insert(rows as never);
    if (error) return { error: error.message };
  }

  revalidateTag(TAG);
  return { slug: payload.slug };
}

export async function deleteBlogPost(slug: string) {
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("blog_posts").delete().eq("slug", slug);
  if (error) return { error: error.message };
  revalidateTag(TAG);
  redirect("/c1907d/blog");
}
