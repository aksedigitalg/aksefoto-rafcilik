import { requireAdmin } from "@/lib/c1907d/auth";
import { BlogForm } from "../BlogForm";

export const dynamic = "force-dynamic";

export default async function NewBlogPostPage() {
  const { supabase } = await requireAdmin();

  const sRes = await supabase.from("services").select("slug, name").order("sort_order");
  const services = (sRes.data ?? []) as Array<{ slug: string; name: string }>;
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

  const cRes = await supabase.from("blog_posts").select("category");
  const cats = Array.from(
    new Set(((cRes.data ?? []) as Array<{ category: string }>).map((r) => r.category)),
  ).sort();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Yeni Blog Yazısı</h1>
      </div>
      <BlogForm originalSlug={null} serviceOptions={serviceOptions} categories={cats} />
    </div>
  );
}
