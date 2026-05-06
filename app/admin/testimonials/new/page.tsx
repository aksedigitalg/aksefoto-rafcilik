import { requireAdmin } from "@/lib/admin/auth";
import { TestimonialForm } from "../TestimonialForm";
import { createTestimonial } from "../actions";

export const dynamic = "force-dynamic";

export default async function NewTestimonialPage() {
  await requireAdmin();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold">Yeni Yorum</h1>
        <p className="text-sm text-muted-foreground">
          Sadece gerçek müşteri yorumlarını kaydedin. Asla sahte/uydurma yorum eklemeyin.
        </p>
      </div>
      <TestimonialForm action={createTestimonial} submitLabel="Yorumu Oluştur" />
    </div>
  );
}
