import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: `${BUSINESS.name} KVKK kapsamında kişisel verilerin işlenmesi aydınlatma metni.`,
  path: "/kvkk-aydinlatma-metni",
  noindex: false,
});

export default function KVKKPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 lg:px-8">
      <BreadcrumbNav items={[{ name: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" }]} />

      <h1 className="font-display text-4xl font-semibold md:text-5xl">KVKK Aydınlatma Metni</h1>
      <p className="mt-4 text-muted-foreground">
        6698 Sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu
        sıfatıyla işlenen kişisel verileriniz hakkında aydınlatma metnimiz.
      </p>

      <div className="prose prose-stone mt-10 max-w-none space-y-6">
        <section>
          <h2 className="font-display text-2xl font-semibold">1. Veri Sorumlusu</h2>
          <p className="mt-3">
            <strong>Veri Sorumlusu:</strong> {BUSINESS.legalName} ({BUSINESS.name})
            <br />
            <strong>Adres:</strong> {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.district}/
            {BUSINESS.city}
            <br />
            <strong>Telefon:</strong> {BUSINESS.phoneDisplay}
            <br />
            <strong>E-posta:</strong> {BUSINESS.email}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">2. İşlenen Kişisel Veriler</h2>
          <p className="mt-3">
            Sizden aldığımız hizmet talebi sürecinde aşağıdaki kişisel verileri işliyoruz:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Kimlik bilgileri (ad, soyad)</li>
            <li>İletişim bilgileri (telefon, e-posta)</li>
            <li>Çekim için sağladığınız bilgiler (etkinlik tarihi, mekan, hizmet türü)</li>
            <li>Web sitesi kullanım verileri (IP, tarayıcı, ziyaret saatleri)</li>
            <li>Çekim sonucu üretilen görseller (siz onayladığınız sürece pazarlamada kullanılır)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">3. Kişisel Verilerin İşleme Amaçları</h2>
          <p className="mt-3">Kişisel verileriniz aşağıdaki amaçlarla işlenir:</p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Hizmet talebinizin değerlendirilmesi ve karşılanması</li>
            <li>Sözleşme hazırlığı ve faturalandırma</li>
            <li>Çekim koordinasyonu ve müşteri iletişimi</li>
            <li>Teslim edilen görsellerin paylaşılması (online galeri, USB)</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Web sitesi performansının ölçülmesi (Google Analytics, Microsoft Clarity)</li>
            <li>İzin verdiğiniz takdirde pazarlama faaliyetleri (sosyal medya paylaşımı vs.)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">4. Kişisel Verilerin Aktarımı</h2>
          <p className="mt-3">
            Kişisel verileriniz, aşağıdaki amaçlarla ve yasal yükümlülükler çerçevesinde
            paylaşılabilir:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>
              <strong>Hizmet sağlayıcılar:</strong> Resend (e-posta), Vercel (hosting), Google
              Analytics
            </li>
            <li>
              <strong>Yasal merciler:</strong> Resmi taleplerde KVKK çerçevesinde
            </li>
            <li>
              <strong>Çekim ekipmanı (matbaa, albüm üreticisi):</strong> Sadece izniniz dahilinde,
              minimum gereken bilgi
            </li>
          </ul>
          <p className="mt-3">
            Verileriniz üçüncü taraflarla pazarlama amacıyla paylaşılmaz. Yurt dışına aktarım
            yapılan platformlar (Vercel, Google) yeterli korumaya sahiptir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">5. Çekim Görselleri ve Mahremiyet</h2>
          <p className="mt-3">
            Çekim sonucu üretilen görseller (fotoğraflar, videolar) telif hakkı bizim, kullanım
            hakkı sözleşmede tanımlandığı şekilde sizindir. İzniniz olmadan görselleriniz pazarlama
            amaçlı kullanılmaz. Sizden onay alındığı takdirde:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Web sitemizde portfolyo bölümünde</li>
            <li>Sosyal medya hesaplarımızda (Instagram, Facebook)</li>
            <li>Reklam materyallerinde</li>
          </ul>
          <p className="mt-3">
            Çocukların görselleri özel önceliklidir; ayrı bir onay metni imzalanır. Yenidoğan ve
            çocuk çekimlerinde paylaşım kararı tamamen ailenin tercihindedir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">6. KVKK Kapsamındaki Haklarınız</h2>
          <p className="mt-3">KVKK 11. madde kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse hangi amaçla kullanıldığını talep etme</li>
            <li>Yurt içi/dışı aktarımları öğrenme</li>
            <li>Eksik/yanlış işlenen verilerin düzeltilmesini talep etme</li>
            <li>KVKK 7. madde kapsamında silinmesini veya yok edilmesini isteme</li>
            <li>Aktarılan üçüncü taraflara yapılan değişikliklerin bildirilmesini isteme</li>
            <li>İşlenen verilerin otomatik sistemler tarafından analizine itiraz etme</li>
            <li>KVKK'ya aykırı işlenmesi nedeniyle zarar uğradıysanız tazminat talep etme</li>
          </ul>
          <p className="mt-3">
            Haklarınızı kullanmak için <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:underline">{BUSINESS.email}</a> adresine yazılı başvuru
            yapabilirsiniz. Başvuruya en geç 30 gün içinde cevap veriyoruz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">7. Veri Saklama Süreleri</h2>
          <p className="mt-3">
            Kişisel verileriniz işleme amaçları ortadan kalkana kadar saklanır:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>İletişim bilgileri: Hizmet sözleşmesi süresi + 2 yıl</li>
            <li>Faturalama bilgileri: Vergi yönetmeliği gereği 10 yıl</li>
            <li>Çekim ham (RAW) dosyaları: 1 yıl yedek</li>
            <li>Edit edilmiş görseller: 5 yıl arşiv</li>
            <li>Web sitesi kullanım verileri: 6 ay</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">8. Güvenlik Önlemleri</h2>
          <p className="mt-3">
            Kişisel verilerinizin güvenliği için aşağıdaki tedbirleri alıyoruz:
          </p>
          <ul className="ml-6 mt-3 list-disc space-y-1">
            <li>Şifreli iletişim (HTTPS/SSL) — tüm site genelinde aktif</li>
            <li>Güvenli sunucu altyapısı (Vercel, ISO 27001 uyumlu)</li>
            <li>Yetkili erişim (sadece gerekli personel)</li>
            <li>Düzenli yedekleme ve felaket kurtarma planı</li>
            <li>Üçüncü taraf hizmet sağlayıcıların KVKK uyum kontrolü</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">9. Güncellemeler</h2>
          <p className="mt-3">
            Bu aydınlatma metni gerektiğinde güncellenebilir. Güncel versiyon her zaman bu sayfada
            yer alır. Önemli değişiklikler için web sitesi ana sayfasında duyuru yapılır.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Son güncelleme: 2026-05-03</p>
        </section>
      </div>
    </article>
  );
}
