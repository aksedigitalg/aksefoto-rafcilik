import { Award, Camera, Clock, ShieldCheck, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * Trust badges.
 *
 * STRATEJI: Stüdyo 2025'te kuruldu, GBP onayi henuz yok. Sahte sayi/puan
 * KOYMUYORUZ (Google Rich Results politikasi + EEAT). Bunun yerine:
 *  - googleReviewCount > 0 oldugunda gercek Google puanini gosteren badge
 *  - photoshoots > 0 oldugunda gercek cekim sayisini gosteren badge
 *  - Bunlar 0 iken yerine sabit + dogrulanabilir guven sinyalleri:
 *      * Yazili sozlesme + KVKK uyumu
 *      * 14 gun edit teslim taahhudu
 *      * 4 ilce hizmet bolgesi
 *      * Profesyonel yedekli ekipman
 */
export function TrustBadges() {
  const showGoogleRating =
    BUSINESS.stats.googleReviewCount > 0 && BUSINESS.stats.googleRating > 0;
  const showPhotoshootCount = BUSINESS.stats.photoshoots > 0;

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {showGoogleRating ? (
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Star className="mx-auto h-7 w-7 text-primary" aria-hidden />
          <p className="mt-2 font-display text-2xl font-semibold">
            {BUSINESS.stats.googleRating}/5
          </p>
          <p className="text-xs text-muted-foreground">
            Google Puanı ({BUSINESS.stats.googleReviewCount} yorum)
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <ShieldCheck className="mx-auto h-7 w-7 text-primary" aria-hidden />
          <p className="mt-2 font-display text-2xl font-semibold">Yazılı</p>
          <p className="text-xs text-muted-foreground">Sözleşme & KVKK</p>
        </div>
      )}

      {showPhotoshootCount ? (
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Camera className="mx-auto h-7 w-7 text-primary" aria-hidden />
          <p className="mt-2 font-display text-2xl font-semibold">
            {BUSINESS.stats.photoshoots}+
          </p>
          <p className="text-xs text-muted-foreground">Tamamlanan Çekim</p>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-5 text-center">
          <Camera className="mx-auto h-7 w-7 text-primary" aria-hidden />
          <p className="mt-2 font-display text-2xl font-semibold">Profesyonel</p>
          <p className="text-xs text-muted-foreground">Yedekli Ekipman</p>
        </div>
      )}

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
