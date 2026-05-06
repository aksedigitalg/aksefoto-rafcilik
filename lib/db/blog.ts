import { unstable_cache } from "next/cache";
import { createSupabaseAnonReadClient } from "@/lib/supabase/server";
import type { BlogPost, FAQ, DistrictSlug } from "@/lib/types";
import type { BlogPostRow, BlogPostFaqRow } from "@/lib/supabase/types";

const REVALIDATE_SECONDS = 60;
const CACHE_TAG = "blog";

function mapFaq(row: BlogPostFaqRow): FAQ {
  return { question: row.question, answer: row.answer };
}

function mapPost(row: BlogPostRow, faqs: FAQ[]): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    tags: row.tags,
    author: row.author,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    coverImage: row.cover_image,
    readingTime: row.reading_time,
    faqs: faqs.length > 0 ? faqs : undefined,
    relatedServices: row.related_services.length > 0 ? row.related_services : undefined,
    relatedDistricts:
      row.related_districts.length > 0
        ? (row.related_districts as DistrictSlug[])
        : undefined,
  };
}

export const getAllBlogPosts = unstable_cache(
  async (): Promise<BlogPost[]> => {
    const supabase = createSupabaseAnonReadClient();

    const result = await supabase
      .from("blog_posts")
      .select("*")
      .eq("is_published", true)
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });
    if (result.error) {
      console.error("[db.blog] getAllBlogPosts:", result.error);
      return [];
    }
    const rows = (result.data ?? []) as BlogPostRow[];

    const slugs = rows.map((p) => p.slug);
    if (slugs.length === 0) return [];

    const faqResult = await supabase
      .from("blog_post_faqs")
      .select("*")
      .in("post_slug", slugs)
      .order("sort_order");
    const faqRows = (faqResult.data ?? []) as BlogPostFaqRow[];

    const faqsBySlug = new Map<string, FAQ[]>();
    for (const row of faqRows) {
      const list = faqsBySlug.get(row.post_slug) ?? [];
      list.push(mapFaq(row));
      faqsBySlug.set(row.post_slug, list);
    }

    return rows.map((row) => mapPost(row, faqsBySlug.get(row.slug) ?? []));
  },
  ["blog-posts-all"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export const getBlogPostBySlug = unstable_cache(
  async (slug: string): Promise<BlogPost | null> => {
    const supabase = createSupabaseAnonReadClient();

    const result = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .lte("published_at", new Date().toISOString())
      .maybeSingle();
    if (result.error || !result.data) return null;
    const row = result.data as BlogPostRow;

    const faqResult = await supabase
      .from("blog_post_faqs")
      .select("*")
      .eq("post_slug", slug)
      .order("sort_order");
    const faqRows = (faqResult.data ?? []) as BlogPostFaqRow[];

    return mapPost(row, faqRows.map(mapFaq));
  },
  ["blog-post-by-slug"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const all = await getAllBlogPosts();
  const target = category.toLocaleLowerCase("tr-TR");
  return all.filter((p) => p.category.toLocaleLowerCase("tr-TR") === target);
}

export async function getRecentBlogPosts(limit = 3): Promise<BlogPost[]> {
  const all = await getAllBlogPosts();
  return all.slice(0, limit);
}

export async function getBlogCategories(): Promise<string[]> {
  const all = await getAllBlogPosts();
  return Array.from(new Set(all.map((p) => p.category))).sort();
}
