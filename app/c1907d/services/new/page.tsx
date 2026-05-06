import { requireAdmin } from "@/lib/c1907d/auth";
import { ServiceForm } from "../ServiceForm";
import { SERVICE_CATEGORIES } from "@/lib/data/services";
import { GALLERY_CATEGORIES } from "@/lib/data/gallery-categories";

export const dynamic = "force-dynamic";

export default async function NewServicePage() {
  const { supabase } = await requireAdmin();

  const allRes = await supabase.from("services").select("slug, name").order("sort_order");
  const allServices = (allRes.data ?? []) as Array<{ slug: string; name: string }>;

  const serviceOptions = allServices.map((s) => ({ value: s.slug, label: s.name }));
  const categoryOptions = SERVICE_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }));
  const galleryOptions = GALLERY_CATEGORIES.map((g) => ({ value: g.slug, label: g.name }));

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Yeni Hizmet</h1>
        <p className="text-sm text-muted-foreground">
          Yeni bir hizmet sayfası oluştur. Slug, ad ve kategori zorunlu. Diğer alanlar
          sonradan düzenlenebilir.
        </p>
      </div>
      <ServiceForm
        originalSlug={null}
        serviceOptions={serviceOptions}
        categoryOptions={categoryOptions}
        galleryOptions={galleryOptions}
      />
    </div>
  );
}
