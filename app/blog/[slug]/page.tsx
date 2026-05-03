import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRecentBlogPosts } from "@/lib/data/blog-posts";
import { getServiceBySlug } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { blogPostSchema, faqSchema } from "@/lib/schema";
import { getBlogCoverImage } from "@/lib/data/unsplash-images";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABanner } from "@/components/sections/CTABanner";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    keywords: post.tags,
  });
}

/**
 * Markdown benzeri icerigi sade HTML'e cevirir.
 * H2/H3 basliklari, paragraflar, bold, list items destekler.
 * Tam Markdown parser yerine sade icerik formatlama icin yeterli.
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] | null = null;

  const flushList = () => {
    if (currentList) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 ml-6 list-disc space-y-2">
          {currentList.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>,
      );
      currentList = null;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`} className="mb-4 mt-10 font-display text-2xl font-semibold md:text-3xl">
          {trimmed.slice(3)}
        </h2>,
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`} className="mb-3 mt-6 font-display text-xl font-semibold">
          {trimmed.slice(4)}
        </h3>,
      );
    } else if (trimmed.startsWith("- ")) {
      if (!currentList) currentList = [];
      currentList.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p key={`p-${elements.length}`} className="mb-4 leading-relaxed text-foreground/90">
          {renderInline(trimmed)}
        </p>,
      );
    }
  }
  flushList();

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // **bold** desteği
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const relatedServices =
    post.relatedServices
      ?.map((s) => getServiceBySlug(s))
      .filter((s): s is NonNullable<typeof s> => Boolean(s)) ?? [];
  const recent = getRecentBlogPosts(3).filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd
        data={[blogPostSchema(post, path), ...(post.faqs ? [faqSchema(post.faqs)] : [])]}
      />

      <article className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <BreadcrumbNav
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: path },
          ]}
        />

        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {post.category}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readingTime} dakika okuma
            </span>
          </div>
        </header>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
          <Image
            src={getBlogCoverImage(post.category, 1600)}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </div>

        {/* İçerik */}
        <div className="prose prose-stone mx-auto max-w-3xl">{renderContent(post.content)}</div>

        {/* Etiketler */}
        {post.tags.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}

        {/* SSS */}
        {post.faqs && post.faqs.length > 0 ? (
          <section className="mt-16">
            <FAQAccordion faqs={post.faqs} />
          </section>
        ) : null}

        {/* İlgili hizmetler */}
        {relatedServices.length > 0 ? (
          <section className="mt-16">
            <RelatedServices services={relatedServices} />
          </section>
        ) : null}

        {/* Son blog yazıları */}
        {recent.length > 0 ? (
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-semibold">Diğer Yazılar</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {recent.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Geri dön */}
        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Tüm Blog Yazıları
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <CTABanner />
        </div>
      </article>
    </>
  );
}
