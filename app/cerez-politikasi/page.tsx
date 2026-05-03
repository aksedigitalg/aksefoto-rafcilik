import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";

export const metadata = buildMetadata({
  title: "Çerez Politikası",
  description: `${BUSINESS.name} çerez politikası — sitemizde kullanılan çerez türleri ve amaçları.`,
  path: "/cerez-politikasi",
});

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Çerez Politikası", href: "/cerez-politikasi" }]} />

      <h1 className="font-display text-4xl font-semibold md:text-5xl">Çerez Politikası</h1>
      <p className="mt-4 text-muted-foreground">
        Web sitemiz, kullanıcı deneyimini geliştirmek ve performans ölçmek için çerez kullanır.
      </p>

      <div className="prose prose-stone mt-10 max-w-none space-y-6">
        <section>
          <h2 className="font-display text-2xl font-semibold">1. Çerez Nedir?</h2>
          <p className="mt-3">
            Çerez (cookie), web sitesi ziyaretiniz sırasında tarayıcınıza kaydedilen küçük metin
            dosyalarıdır. Çerezler kişisel olarak sizi tanımayan ama tarayıcınızı tanıyan bilgilerdir;
            siteyi tekrar ziyaret ettiğinizde deneyiminizi iyileştirir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">2. Kullandığımız Çerez Türleri</h2>

          <h3 className="mt-6 font-display text-lg font-semibold">a) Zorunlu Çerezler</h3>
          <p className="mt-2">
            Sitenin temel işlevleri için gereklidir; devre dışı bırakılamaz. Örnek: form doldurma
            sırasında girilen verileri korumak.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">b) Analitik Çerezler</h3>
          <p className="mt-2">
            Google Analytics 4 ve Microsoft Clarity tarafından kullanılan, ziyaretçi davranışını
            analiz eden çerezler. Hangi sayfaların popüler olduğunu, kullanıcıların nereden geldiğini
            anlamak için kullanılır.
          </p>

          <h3 className="mt-6 font-display text-lg font-semibold">c) İşlevsel Çerezler</h3>
          <p className="mt-2">
            Tercihlerinizi (dil, görünüm) hatırlamak için kullanılır.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">3. Üçüncü Taraf Çerezler</h2>
          <p className="mt-3">Sitemiz aşağıdaki üçüncü taraf hizmetleri kullanmaktadır:</p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>
              <strong>Google Analytics 4:</strong> Sayfa görüntüleme, ziyaretçi sayısı, kullanıcı
              davranışı analizi
            </li>
            <li>
              <strong>Microsoft Clarity:</strong> Kullanıcı oturum kayıtları, ısı haritası
            </li>
            <li>
              <strong>Google Maps Embed:</strong> Konum gösterimi
            </li>
            <li>
              <strong>Google Fonts (CDN):</strong> Yazı tipi yükleme
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">4. Çerezleri Yönetme</h2>
          <p className="mt-3">
            Tarayıcınızın ayarlarından çerezleri devre dışı bırakabilir veya silebilirsiniz:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
            <li>Safari: Tercihler → Gizlilik → Çerezleri yönet</li>
            <li>Firefox: Tercihler → Gizlilik & Güvenlik → Çerezler</li>
            <li>Edge: Ayarlar → Çerezler ve site verileri</li>
          </ul>
          <p className="mt-3">
            Çerezler tamamen devre dışı bırakıldığında sitemizin bazı işlevleri (form gönderimi,
            sayfa hatırlama) etkilenebilir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">5. Saklama Süreleri</h2>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Oturum çerezleri: Tarayıcıyı kapadığınızda silinir</li>
            <li>Analitik çerezler: 24 ay</li>
            <li>İşlevsel çerezler: 12 ay</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">6. İletişim</h2>
          <p className="mt-3">
            Çerez politikası hakkında sorularınız için:{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">
              {BUSINESS.email}
            </a>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Son güncelleme: 2026-05-03</p>
        </section>
      </div>
    </article>
  );
}
