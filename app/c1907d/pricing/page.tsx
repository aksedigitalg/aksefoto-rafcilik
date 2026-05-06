import Link from "next/link";
import { Edit3 } from "lucide-react";
import { requireAdmin } from "@/lib/c1907d/auth";
import { PricingTable } from "./PricingTable";

export const dynamic = "force-dynamic";

interface ServiceRow {
  slug: string;
  name: string;
  category: string;
  is_published: boolean;
}

interface PackageRow {
  id: string;
  service_slug: string;
  name: string;
  price_range: string;
  popular: boolean;
  sort_order: number;
}

export default async function AdminPricingPage() {
  const { supabase } = await requireAdmin();

  const sRes = await supabase
    .from("services")
    .select("slug, name, category, is_published")
    .eq("is_published", true)
    .order("sort_order");
  const services = (sRes.data ?? []) as ServiceRow[];

  const pRes = await supabase
    .from("service_packages")
    .select("id, service_slug, name, price_range, popular, sort_order")
    .order("sort_order");
  const packages = (pRes.data ?? []) as PackageRow[];

  const grouped = services.reduce<Record<string, ServiceRow[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});
  const pkgsByService = packages.reduce<Record<string, PackageRow[]>>((acc, p) => {
    (acc[p.service_slug] ??= []).push(p);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">Fiyat Listesi</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Tüm hizmet paketlerinin fiyat aralıkları. Tek tek düzenleyip toplu kaydet.
          Detaylı paket düzenleme için ilgili hizmetin "Düzenle" sayfasını kullan.
        </p>
      </div>

      <PricingTable initialServices={services} initialPackages={packages} grouped={grouped} pkgsByService={pkgsByService} />
    </div>
  );
}
