import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: `${BUSINESS.name} gizlilik politikası — kişisel verileriniz nasıl toplanır, işlenir ve korunur.`,
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Gizlilik Politikası", href: "/gizlilik-politikasi" }]} />

      <h1 className="font-display text-4xl font-semibold md:text-5xl">Gizlilik Politikası</h1>
      <p className="mt-4 text-muted-foreground">
        {BUSINESS.name} olarak ziyaretçilerimizin ve müşterilerimizin gizliliğine önem veriyoruz.
      </p>

      <div className="prose prose-stone mt-10 max-w-none space-y-6">
        <section>
          <h2 className="font-display text-2xl font-semibold">1. Topladığımız Bilgiler</h2>
          <p className="mt-3">İki tür bilgi topluyoruz:</p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>
              <strong>Bizzat sağladığınız bilgiler:</strong> İletişim formundan ad, soyad, telefon,
              e-posta, hizmet türü ve mesajınız.
            </li>
            <li>
              <strong>Otomatik toplanan bilgiler:</strong> IP adresi, tarayıcı türü, sayfa görüntüleme
              sayıları (Google Analytics, Microsoft Clarity).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">2. Bilgi Kullanımı</h2>
          <p className="mt-3">Topladığımız bilgileri şu amaçlarla kullanıyoruz:</p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Hizmet talebinizin değerlendirilmesi</li>
            <li>Müşteri iletişimi ve hizmet koordinasyonu</li>
            <li>Web sitesi performansı ve kullanıcı deneyimi iyileştirmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">3. Bilgi Paylaşımı</h2>
          <p className="mt-3">
            Kişisel bilgileriniz pazarlama amaçlı üçüncü taraflarla paylaşılmaz. Sadece şu
            durumlarda paylaşım yapılabilir:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Hizmet sağlayıcılarımız (e-posta, hosting, analitik)</li>
            <li>Yasal zorunluluklar (mahkeme, yetkili merci kararı)</li>
            <li>Sözleşme yükümlülüklerinin yerine getirilmesi</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">4. Çerezler</h2>
          <p className="mt-3">
            Web sitemiz performans iyileştirmesi için çerez kullanır. Detaylı bilgi için{" "}
            <a href="/cerez-politikasi" className="text-primary hover:underline">
              Çerez Politikası
            </a>{" "}
            sayfamızı inceleyebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">5. Veri Güvenliği</h2>
          <p className="mt-3">
            Tüm bilgileriniz şifreli (HTTPS/SSL) iletim ile korunur. Sunucu altyapımız ISO 27001
            uyumlu ve düzenli yedeklenir. Erişim yetkilendirmesi minimum personelle sınırlandırılmıştır.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">6. Haklarınız</h2>
          <p className="mt-3">
            KVKK kapsamındaki tüm haklarınızın detayı için{" "}
            <a href="/kvkk-aydinlatma-metni" className="text-primary hover:underline">
              KVKK Aydınlatma Metni
            </a>{" "}
            sayfamızı inceleyin.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">7. İletişim</h2>
          <p className="mt-3">
            Gizlilik politikası hakkında sorularınız için: <br />
            E-posta: <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a>
            <br />
            Telefon: {BUSINESS.phoneDisplay}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Son güncelleme: 2026-05-03</p>
        </section>
      </div>
    </article>
  );
}
