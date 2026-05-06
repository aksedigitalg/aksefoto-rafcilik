import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { ZoneForm } from "../../ZoneForm";
import type { ZonePayload } from "../../actions";
import type { IndustrialZoneRow, IndustrialZoneFaqRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditZonePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { supabase } = await requireAdmin();

  const zRes = await supabase
    .from("industrial_zones")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (!zRes.data) notFound();
  const z = zRes.data as IndustrialZoneRow;

  const faqRes = await supabase
    .from("industrial_zone_faqs")
    .select("*")
    .eq("zone_slug", slug)
    .order("sort_order");

  const faqs = ((faqRes.data ?? []) as IndustrialZoneFaqRow[]).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const initial: ZonePayload = {
    slug: z.slug,
    name: z.name,
    full_name: z.full_name,
    district: z.district,
    description: z.description,
    services_offered: z.services_offered,
    notable_tenants_hint: z.notable_tenants_hint,
    is_published: z.is_published,
    faqs,
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">{z.name}</h1>
          <p className="text-sm text-muted-foreground">{z.full_name}</p>
        </div>
        <Link
          href={`/sanayi-bolgeleri/${z.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Sitede Aç
        </Link>
      </div>
      <ZoneForm initial={initial} originalSlug={z.slug} />
    </div>
  );
}
