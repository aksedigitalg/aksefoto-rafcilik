import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/admin/auth";
import { ServiceForm } from "../../ServiceForm";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { GALLERY_CATEGORIES } from "@/lib/data/gallery-categories";
import type { ServicePayload } from "../../actions";
import type {
  ServiceRow,
  ServicePackageRow,
  ServiceFaqRow,
} from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { supabase } = await requireAdmin();

  const sRes = await supabase.from("services").select("*").eq("slug", slug).maybeSingle();
  if (!sRes.data) notFound();
  const service = sRes.data as ServiceRow;

  const pkgRes = await supabase
    .from("service_packages")
    .select("*")
    .eq("service_slug", slug)
    .order("sort_order");
  const faqRes = await supabase
    .from("service_faqs")
    .select("*")
    .eq("service_slug", slug)
    .order("sort_order");

  const packages = ((pkgRes.data ?? []) as ServicePackageRow[]).map((p) => ({
    name: p.name,
    price_range: p.price_range,
    description: p.description,
    includes: p.includes,
    popular: p.popular,
  }));
  const faqs = ((faqRes.data ?? []) as ServiceFaqRow[]).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const initial: ServicePayload = {
    slug: service.slug,
    name: service.name,
    category: service.category,
    primary_keyword: service.primary_keyword,
    secondary_keywords: service.secondary_keywords,
    short_description: service.short_description,
    long_description: service.long_description,
    features: service.features,
    related_services: service.related_services,
    gallery_category: service.gallery_category,
    icon: service.icon,
    meta_title: service.meta_title,
    meta_description: service.meta_description,
    is_published: service.is_published,
    packages,
    faqs,
  };

  const allRes = await supabase.from("services").select("slug, name").order("sort_order");
  const allServices = (allRes.data ?? []) as Array<{ slug: string; name: string }>;

  const serviceOptions = allServices.map((s) => ({ value: s.slug, label: s.name }));
  const categoryOptions = SERVICE_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }));
  const galleryOptions = GALLERY_CATEGORIES.map((g) => ({ value: g.slug, label: g.name }));

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">{service.name}</h1>
          <p className="text-sm text-muted-foreground">/{service.slug}</p>
        </div>
        <Link
          href={`/hizmetler/${service.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Sitede Aç
        </Link>
      </div>
      <ServiceForm
        initial={initial}
        originalSlug={service.slug}
        serviceOptions={serviceOptions}
        categoryOptions={categoryOptions}
        galleryOptions={galleryOptions}
      />
    </div>
  );
}
