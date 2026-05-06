import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { NeighborhoodForm } from "../../NeighborhoodForm";
import type { NeighborhoodPayload } from "../../actions";
import type { NeighborhoodRow, PhotoshootLocationRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditNeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { supabase } = await requireAdmin();

  const nRes = await supabase.from("neighborhoods").select("*").eq("slug", slug).maybeSingle();
  if (!nRes.data) notFound();
  const n = nRes.data as NeighborhoodRow;

  const locRes = await supabase
    .from("photoshoot_locations")
    .select("*")
    .eq("neighborhood_slug", slug)
    .order("sort_order");

  const locs = ((locRes.data ?? []) as PhotoshootLocationRow[]).map((l) => ({
    name: l.name,
    description: l.description,
    best_time_of_day: l.best_time_of_day,
    latitude: l.latitude !== null ? Number(l.latitude) : null,
    longitude: l.longitude !== null ? Number(l.longitude) : null,
  }));

  const initial: NeighborhoodPayload = {
    slug: n.slug,
    name: n.name,
    district: n.district,
    postal_code: n.postal_code,
    population: n.population,
    description: n.description,
    landmarks: n.landmarks,
    nearby_neighborhoods: n.nearby_neighborhoods,
    popular_services: n.popular_services,
    meta_title: n.meta_title,
    meta_description: n.meta_description,
    is_published: n.is_published,
    photoshoot_locations: locs,
  };

  const sRes = await supabase.from("services").select("slug, name").order("sort_order");
  const services = (sRes.data ?? []) as Array<{ slug: string; name: string }>;
  const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }));

  const allRes = await supabase.from("neighborhoods").select("slug, name").order("name");
  const allN = (allRes.data ?? []) as Array<{ slug: string; name: string }>;
  const neighborhoodOptions = allN.map((x) => ({ value: x.slug, label: x.name }));

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">{n.name}</h1>
          <p className="text-sm text-muted-foreground">
            {n.district} / {n.slug}
          </p>
        </div>
        <Link
          href={`/bolgeler/${n.district}/${n.slug}`}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Sitede Aç
        </Link>
      </div>
      <NeighborhoodForm
        initial={initial}
        originalSlug={n.slug}
        serviceOptions={serviceOptions}
        neighborhoodOptions={neighborhoodOptions}
      />
    </div>
  );
}
