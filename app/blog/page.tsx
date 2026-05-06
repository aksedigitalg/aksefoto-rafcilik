import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { getAllBlogPosts, getBlogCategories } from "@/lib/db/blog";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { getBlogCoverImage } from "@/lib/data/unsplash-images";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Blog ve Rehberler",
  description: `${BUSINESS.name} fotoğrafçılık rehberleri, düğün ipuçları, ürün çekimi, drone, B2B kurumsal pazarlama yazıları.`,
  path: "/blog",
});

export default async function BlogIndexPage() {
  const [blogPosts, BLOG_CATEGORIES] = await Promise.all([
    getAllBlogPosts(),
    getBlogCategories(),
  ]);
  // getAllBlogPosts zaten published_at desc dondurur
  const sorted = blogPosts;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Blog", href: "/blog" }]} />

      <div className="mb-10 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Blog ve Rehberler</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Düğün hazırlığından ürün çekimine, drone uçuşundan B2B kurumsal pazarlamaya — fotoğrafçılık
          dünyasından kapsamlı rehberler. Akse Fotoğrafçılık ekibinin yıllık deneyimi yazılarda.
        </p>
      </div>

      {/* Kategoriler */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="rounded-full border border-border bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
          >
            Tüm Yazılar ({blogPosts.length})
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog/kategori/${encodeURIComponent(cat.toLocaleLowerCase("tr-TR"))}`}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium hover:border-primary/40 hover:text-primary"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
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
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                {post.category}
              </p>
              <h2 className="font-display text-lg font-semibold leading-tight group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {post.readingTime} dk
                </span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Yazıyı oku
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <div className="mt-16">
        <CTABanner
          title="Spesifik Bir Konuda Yardım İster misiniz?"
          subtitle="Blog yazılarında bulamadığınız sorularınız için WhatsApp'tan yazın; size özel cevap verelim."
        />
      </div>
    </div>
  );
}
