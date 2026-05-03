import { Award, Camera, Clock, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function TrustBadges() {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="rounded-xl border border-border bg-card p-5 text-center">
        <Star className="mx-auto h-7 w-7 text-primary" aria-hidden />
        <p className="mt-2 font-display text-2xl font-semibold">
          {BUSINESS.stats.googleRating}/5
        </p>
        <p className="text-xs text-muted-foreground">Google Puanı</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center">
        <Camera className="mx-auto h-7 w-7 text-primary" aria-hidden />
        <p className="mt-2 font-display text-2xl font-semibold">
          {BUSINESS.stats.photoshoots}+
        </p>
        <p className="text-xs text-muted-foreground">Tamamlanan Çekim</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center">
        <Clock className="mx-auto h-7 w-7 text-primary" aria-hidden />
        <p className="mt-2 font-display text-2xl font-semibold">
          {BUSINESS.stats.deliveryDays} Gün
        </p>
        <p className="text-xs text-muted-foreground">Edit Teslim</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5 text-center">
        <Award className="mx-auto h-7 w-7 text-primary" aria-hidden />
        <p className="mt-2 font-display text-2xl font-semibold">4 İlçe</p>
        <p className="text-xs text-muted-foreground">Hizmet Bölgesi</p>
      </div>
    </section>
  );
}
