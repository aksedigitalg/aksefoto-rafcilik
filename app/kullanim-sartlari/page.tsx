import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";

export const metadata = buildMetadata({
  title: "Kullanım Şartları",
  description: `${BUSINESS.name} web sitesi kullanım şartları ve hizmet koşulları.`,
  path: "/kullanim-sartlari",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "Kullanım Şartları", href: "/kullanim-sartlari" }]} />

      <h1 className="font-display text-4xl font-semibold md:text-5xl">Kullanım Şartları</h1>
      <p className="mt-4 text-muted-foreground">
        Bu web sitesini ({BUSINESS.siteUrl}) kullanmadan önce lütfen aşağıdaki şartları okuyun.
      </p>

      <div className="prose prose-stone mt-10 max-w-none space-y-6">
        <section>
          <h2 className="font-display text-2xl font-semibold">1. Genel Hükümler</h2>
          <p className="mt-3">
            Bu web sitesi {BUSINESS.legalName} bünyesinde {BUSINESS.name} markası altında
            işletilmektedir. Web sitesini kullanmanız bu şartları kabul ettiğiniz anlamına gelir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">2. İçerik Telif Hakkı</h2>
          <p className="mt-3">
            Sitedeki tüm metin, grafik, logo, görsel, kompozisyon, kod ve düzenleme {BUSINESS.legalName}'a
            aittir veya lisansla kullanılır. İzinsiz kopyalama, çoğaltma, ticari kullanım yasaktır.
          </p>
          <p className="mt-3">
            Galeri ve portfolyo bölümlerindeki çekim görselleri, ilgili müşterilerin onayıyla
            yayınlanmaktadır. Bu görsellerin başka platformlarda paylaşımı veya kullanımı yasaktır.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">3. Hizmet Sözleşmesi</h2>
          <p className="mt-3">
            Web sitesi üzerinden iletişim kurmanız, doğrudan hizmet sözleşmesi anlamına gelmez.
            Hizmet sözleşmesi, ön görüşme sonrası yazılı olarak imzalanır. Sözleşmede:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Çekim tarihi ve saatleri</li>
            <li>Paket içeriği ve fiyat</li>
            <li>Teslim süresi ve formatı</li>
            <li>İptal/erteleme şartları</li>
            <li>Telif ve kullanım hakları</li>
            <li>Karşılıklı yükümlülükler</li>
          </ul>
          <p className="mt-3">net şekilde yer alır.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">4. Fiyat Bilgisi</h2>
          <p className="mt-3">
            Web sitesinde belirtilen fiyat aralıkları yaklaşık değerlerdir; çekim koşulları
            (lokasyon, ek hizmet, mevsim, paket içeriği) gerçek fiyatı etkiler. Kesin fiyat ön
            görüşme sonrası ve sözleşmede yazılı olarak netleşir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">5. Bilgi Güncelliği</h2>
          <p className="mt-3">
            Web sitesindeki bilgiler güncellik için sürekli yenilenmekte; ancak teknik gecikmeler
            nedeniyle bazı bilgiler güncel olmayabilir. Kesin bilgi için bizimle iletişime geçmenizi
            öneriyoruz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">6. Üçüncü Taraf Linkler</h2>
          <p className="mt-3">
            Sitemizde üçüncü taraf platformlara linkler bulunabilir (Instagram, Facebook, Google
            Maps vs.). Bu linklerden ulaşılan sitelerin içeriğinden ve gizlilik politikalarından
            sorumlu değiliz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">7. Sorumluluk Sınırlandırması</h2>
          <p className="mt-3">
            Web sitesi içeriği bilgi amaçlıdır. Sitedeki bilgileri kullanmaktan dolayı doğrudan veya
            dolaylı zararlardan sorumlu değiliz. Web sitesinin teknik nedenle erişilememesi veya
            içerik gecikmelerinden de sorumluluk kabul edilmez.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">8. Yetkili Mahkeme</h2>
          <p className="mt-3">
            Bu kullanım şartlarından doğacak uyuşmazlıklarda Kocaeli Mahkemeleri ve İcra Müdürlükleri
            yetkilidir. Türkiye Cumhuriyeti yasaları geçerlidir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">9. Değişiklikler</h2>
          <p className="mt-3">
            Kullanım şartları gerektiğinde güncellenebilir. Güncel versiyon her zaman bu sayfada yer
            alır. Önemli değişiklikler için web sitesi ana sayfasında duyuru yapılır.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Son güncelleme: 2026-05-03</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">10. İletişim</h2>
          <p className="mt-3">
            Sorularınız için: <br />
            E-posta: <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a>
            <br />
            Telefon: {BUSINESS.phoneDisplay}
            <br />
            Adres: {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.district}/{BUSINESS.city}
          </p>
        </section>
      </div>
    </article>
  );
}
