import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "@/lib/data/blog-posts";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { getBlogCoverImage } from "@/lib/data/unsplash-images";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({ kategori: cat.toLocaleLowerCase("tr-TR") }));
}

export async function generateMetadata({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const decoded = decodeURIComponent(kategori);
  const cat = BLOG_CATEGORIES.find((c) => c.toLocaleLowerCase("tr-TR") === decoded);
  if (!cat) return { title: "Kategori Bulunamadı" };
  return buildMetadata({
    title: `${cat} | Blog`,
    description: `${cat} kategorisindeki tüm fotoğrafçılık rehberleri ve ipuçları.`,
    path: `/blog/kategori/${kategori}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const decoded = decodeURIComponent(kategori);
  const cat = BLOG_CATEGORIES.find((c) => c.toLocaleLowerCase("tr-TR") === decoded);
  if (!cat) notFound();

  const posts = blogPosts.filter((p) => p.category === cat);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav
        items={[
          { name: "Blog", href: "/blog" },
          { name: cat, href: `/blog/kategori/${kategori}` },
        ]}
      />

      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">Blog Kategorisi</p>
        <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">{cat}</h1>
        <p className="mt-4 text-muted-foreground">
          Bu kategoride {posts.length} yazı var. Yazılar düzenli olarak güncellenir; kapsamlı
          rehberler için bültene kaydolun.
        </p>
      </div>

      {/* Diğer kategoriler */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium hover:border-primary/40 hover:text-primary"
          >
            Tüm Yazılar
          </Link>
          {BLOG_CATEGORIES.map((c) => {
            const isCurrent = c === cat;
            return (
              <Link
                key={c}
                href={`/blog/kategori/${encodeURIComponent(c.toLocaleLowerCase("tr-TR"))}`}
                className={
                  isCurrent
                    ? "rounded-full border border-border bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
                    : "rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium hover:border-primary/40 hover:text-primary"
                }
              >
                {c}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Posts */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getBlogCoverImage(post.category, 800)}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-display text-lg font-semibold leading-tight group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <time>{formatDate(post.publishedAt)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {post.readingTime} dk
                </span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Yazıyı oku <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <div className="mt-16">
        <CTABanner />
      </div>
    </div>
  );
}
