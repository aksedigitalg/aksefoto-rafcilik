import type { Service } from "@/lib/types";

export const egitimEkServices: Service[] = [
  {
    slug: "fotografcilik-dersi",
    name: "Fotoğrafçılık Dersi",
    category: "egitim-ek",
    primaryKeyword: "fotoğrafçılık dersi",
    secondaryKeywords: ["Gebze fotoğrafçılık kursu", "özel fotoğraf dersi", "fotoğrafçılık eğitimi", "DSLR ders", "amatör fotoğrafçılık"],
    shortDescription: "Sıfırdan başlayanlar veya seviyesini yükseltmek isteyenler için bireysel ve küçük grup fotoğrafçılık dersleri.",
    longDescription: `Fotoğrafçılık dersi, fotoğraf çekmeyi öğrenmek isteyen amatörler ve seviyesini yükseltmek isteyen orta seviye kullanıcılar için özel ders hizmetimizdir. Akse Fotoğrafçılık olarak Gebze stüdyomuzda + dış mekanda + online format dahil 4 farklı şekilde ders veriyoruz.

Müfredatımız: 1) Temel kamera kullanımı (modlar, ISO, açıklık, shutter), 2) Kompozisyon kuralları (üçler kuralı, leading lines, framing), 3) Işık okuma (doğal ışık, altın saat, mavi saat), 4) Portre teknikleri, 5) Manzara/şehir fotoğrafçılığı, 6) Düşük ışık + uzun pozlama, 7) Lightroom/Photoshop edit temelleri, 8) Sosyal medya için kompozisyon.

Bireysel ders her seviyeye özel müfredat sağlar; küçük grup dersleri 4 kişiye kadar (ekonomik). Online ders Zoom üzerinden video paylaşımıyla. Çocuklar (10+ yaş) için 'Genç Fotoğrafçı' programı: oyun temelli öğrenme yaklaşımıyla.

Ders sonrası bir 'mezuniyet' projesi: öğrencinin kendi seçtiği konuda 10 fotoğraflık portfolyo hazırlaması ve değerlendirilmesi. Ders kayıtları (online dersler) öğrenciye paylaşılır.`,
    features: ["Bireysel + küçük grup + online", "Sıfırdan ileri seviyeye 8 modül", "Stüdyo + dış mekan pratiği", "Lightroom/Photoshop temel", "'Genç Fotoğrafçı' çocuk programı", "Mezuniyet projesi"],
    packages: [
      { name: "Tek Ders", priceRange: "₺800 - ₺1.500", description: "2 saatlik tek ders", includes: ["2 saat bireysel ders", "Stüdyo veya dış mekan", "1 modül kapsam"] },
      { name: "8 Hafta Temel", priceRange: "₺6.000 - ₺10.000", description: "Tüm temel müfredat", includes: ["8 hafta × 2 saat", "Tüm temel modüller", "Lightroom temel", "Mezuniyet projesi"], popular: true },
      { name: "Mentorluk Yıllık", priceRange: "₺18.000 - ₺28.000", description: "1 yıl bireysel mentorluk", includes: ["Yıllık 24 ders", "İleri seviye konular", "Portfolyo geliştirme", "Profesyonel kariyer destek"] },
    ],
    faqs: [
      { question: "Hiç fotoğraf çekme deneyimim yok, ders alabilir miyim?", answer: "Tabi — '8 Hafta Temel' programımız tam olarak sıfırdan başlayanlar için tasarlandı. Kendi kameranızı veya telefonunuzu getirin; kameranıza ihtiyacınız varsa stüdyodan kiralayabilirsiniz." },
      { question: "Hangi kamera markası önerisiniz?", answer: "Sony, Canon, Nikon hepsi başlangıç için iyi. Bütçenize göre 'üreticiyi seçtikten sonra modele karar veriyoruz' yaklaşımı. Telefon ile başlayıp ileri seviyede DSLR'a geçebilirsiniz." },
      { question: "Online ders nasıl yürüyor?", answer: "Zoom üzerinden ekran paylaşımı ile teorik ders, ardından pratik ödevler ve geri bildirim. Kayıt yapılır, öğrenciye paylaşılır." },
      { question: "Çocuk için ders var mı?", answer: "10-15 yaş arası 'Genç Fotoğrafçı' programı — oyun temelli yaklaşım, doğa keşfi, basit edit. 8 hafta süreli." },
      { question: "Ders sonrası ne kazanırım?", answer: "Temel kamera kullanımı, kompozisyon, ışık okuma, basit edit. Hobi seviyesinde aile/arkadaş çekimi yapabilir, sosyal medya için kaliteli içerik üretebilirsiniz." },
      { question: "Profesyonel olmak için yeterli mi?", answer: "Profesyonel olmak için 'Mentorluk Yıllık' programı tasarlandı. 1 yıllık 24 ders + portfolyo + iş bağlantıları. Hızlı yol değil, sağlam yol." },
    ],
    relatedServices: ["sosyal-medya-yonetimi-ve-danismanligi", "video-editoru", "albüm-yapimi", "kisisel-fotograf-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Fotoğrafçılık Dersi | Bireysel ve Grup Eğitim",
    metaDescription: "Gebze fotoğrafçılık dersi. Sıfırdan ileri seviye, bireysel + grup + online. Çocuk 'Genç Fotoğrafçı' programı. 0533 241 75 22",
  },

  {
    slug: "sosyal-medya-yonetimi-ve-danismanligi",
    name: "Sosyal Medya Yönetimi ve Danışmanlığı",
    category: "egitim-ek",
    primaryKeyword: "sosyal medya yönetimi ve danışmanlığı",
    secondaryKeywords: ["Gebze sosyal medya ajansı", "Instagram yönetimi", "marka sosyal medya", "sosyal medya stratejisi", "içerik üretimi"],
    shortDescription: "İşletmenizin Instagram, Facebook ve TikTok hesapları için içerik üretim + planlama + analiz hizmeti.",
    longDescription: `Sosyal medya yönetimi, sadece post atmak değildir; strateji + içerik + analiz + topluluk yönetiminin bütünüdür. Akse Fotoğrafçılık olarak yerel işletmeler ve KOBİ'ler için sosyal medya yönetimi ve danışmanlık hizmeti sunuyoruz.

Hizmetlerimiz: 1) İçerik üretimi (fotoğraf + video + grafik + caption), 2) İçerik takvimi planlama (haftalık/aylık), 3) Hashtag araştırması ve uygulaması, 4) Topluluk yönetimi (DM ve yorum yanıtlama), 5) Hesap analitik raporu (aylık), 6) Reklam kampanya yönetimi (Meta Ads + TikTok Ads), 7) Influencer collab koordinasyonu.

Yaklaşımımız: işletmenizin tonu + hedef kitlesine göre içerik stratejisi. 'Genel post' değil, marka kimliğinize özel post. Her platform için farklı strateji — Instagram görsel ağırlıklı, TikTok eğlence + bilgi, Facebook topluluk + reklam.

Aylık paket farklı seviyelerde: 8 post/ay (mini), 16 post/ay (klasik), 30+ post + reels (premium). Reklam bütçesi pakete dahil değildir; ayrı yönetilir. Kampanya bazlı (örn: lansman, sezon) ek danışmanlık.`,
    features: ["İçerik üretimi (foto + video + grafik)", "Aylık takvim + hashtag araştırması", "Topluluk yönetimi (DM + yorum)", "Aylık analitik rapor", "Meta + TikTok Ads yönetimi", "Influencer collab"],
    packages: [
      { name: "Mini", priceRange: "₺6.000 - ₺10.000 / ay", description: "8 post/ay", includes: ["Aylık 8 post", "Hashtag + caption", "Aylık rapor", "1 platform"] },
      { name: "Klasik", priceRange: "₺12.000 - ₺18.000 / ay", description: "16 post + 4 reels", includes: ["Aylık 16 post + 4 reels", "Topluluk yönetimi", "2 platform", "Aylık strateji"], popular: true },
      { name: "Premium", priceRange: "₺22.000 - ₺38.000 / ay", description: "Tam içerik + reklam yönetimi", includes: ["Aylık 30+ post + 8 reels", "3+ platform", "Meta + TikTok Ads yönetim", "Influencer collab", "Detaylı raporlama"] },
    ],
    faqs: [
      { question: "Sadece içerik üretimi yapabilir miyim?", answer: "Tabi — 'Mini' paketi sadece içerik. Topluluk yönetimi ve reklam yönetimi opsiyonel. İhtiyacınıza göre özelleştirilir." },
      { question: "Reklam bütçesi pakete dahil mi?", answer: "Hayır — reklam bütçesi (Meta'ya ödenen) ayrıdır. Yönetim ücreti pakete dahil; reklam harcamasını siz ödüyorsunuz. Aylık 1.000-10.000 TL arası bütçe önerilir." },
      { question: "Influencer collab nasıl çalışıyor?", answer: "Hedef kitlenize uyan yerel/orta seviye influencer'larla anlaşma — ürün hediye + post + story karşılığı. Premium pakette yönetimi dahil." },
      { question: "Aylık analitik raporu nedir?", answer: "Takipçi büyüme, etkileşim oranı, en başarılı postlar, hedef kitle davranışı, rekabet analizi. PDF formatında her ay paylaşılıyor." },
      { question: "İçerik üretirken benimle koordineli mi?", answer: "Evet — aylık başında içerik takvimi onayınıza sunuluyor. Onaydan sonra üretim başlıyor; brief tartışılıyor." },
      { question: "Sözleşme süresi var mı?", answer: "Minimum 3 ay öneriyoruz; sosyal medya stratejisinin sonuçları 2-3 ayda görünür. Aylık paket yenileme; istediğiniz zaman bitirebilirsiniz." },
    ],
    relatedServices: ["sosyal-medya-icin-fotograf-cekimi", "instagram-icin-fotograf-cekimi", "sosyal-medya-video-cekimi", "fotografcilik-dersi"],
    galleryCategory: "video",
    metaTitle: "Gebze Sosyal Medya Yönetimi ve Danışmanlığı",
    metaDescription: "Gebze sosyal medya ajansı. Instagram + TikTok yönetim, içerik üretim, hashtag, reklam yönetim, influencer collab. 0533 241 75 22",
  },

  {
    slug: "albüm-yapimi",
    name: "Albüm Yapımı",
    category: "egitim-ek",
    primaryKeyword: "albüm yapımı",
    secondaryKeywords: ["düğün albümü", "fotoğraf albümü", "Gebze albüm", "kristal kapak albüm", "italyan kumaş albüm"],
    shortDescription: "Düğün, aile, yıllık koleksiyon için kristal kapak, italyan kumaş, klasik deri albüm tasarım ve baskı.",
    longDescription: `Albüm yapımı, dijital fotoğrafların sayfalarda hayat bulduğu ve kuşaklar boyu saklanan fiziksel hatıralara dönüştüğü hizmettir. Akse Fotoğrafçılık olarak düğün, aile, yıllık koleksiyon, kişisel proje, kurumsal yıl sonu albümleri tasarlıyor ve basıyoruz.

Albüm türleri: 1) Kristal kapak (modern, parlak akrilik kapak), 2) İtalyan kumaş (yumuşak dokulu lüks kumaş), 3) Klasik deri (zarif klasik), 4) Hardcover fotokitap (uygun fiyatlı modern), 5) Mini albüm (anne-baba için 20x20 cm). Her birinin sayfa kalitesi farklı — Premium kart 350g/m², Klasik 200g/m².

Tasarım süreci: 1) Albüm boyutu + sayfa sayısı + kapak seçimi, 2) Fotoğrafların kategorize edilmesi, 3) Tasarım taslağı (15-30 sayfa), 4) Müşteri onayı + revizyon, 5) Matbaa baskısı, 6) Teslim. Toplam süreç 4-6 hafta.

Mini albüm en popüler hediye — anne-baba ve büyükanne-büyükbaba için ayrıca düğün/aile fotoğrafları içerir. Yıllık aile albümü her yıl artan koleksiyon olur. Hatıra/anı kitabı (1 yıl içinde özetlenmiş) kişisel hediye için ideal.`,
    features: ["Kristal/italyan/deri/fotokitap", "20x20 cm - 40x30 cm boyutlar", "350g/m² Premium kart", "Müşteri tasarım onayı", "Matbaa kalite kontrol", "Mini albüm hediye seçeneği"],
    packages: [
      { name: "Mini", priceRange: "₺2.500 - ₺4.000", description: "20x20 cm 16 sayfa", includes: ["Fotokitap kapak", "16 sayfa", "Standart kağıt", "Tasarım dahil"] },
      { name: "Klasik", priceRange: "₺5.000 - ₺8.500", description: "30x30 cm 20 sayfa kristal", includes: ["Kristal kapak", "20 sayfa", "Premium kağıt", "Tasarım + revizyon", "Mini albüm hediye"], popular: true },
      { name: "Premium", priceRange: "₺10.000 - ₺18.000", description: "40x30 cm 40 sayfa lüks", includes: ["İtalyan kumaş kapak", "40 sayfa", "350g/m² premium kart", "Kişisel tasarım", "20x20 cm 2 mini albüm hediye", "Lüks kutu"] },
    ],
    faqs: [
      { question: "Hangi kapak tipini seçmeliyim?", answer: "Kristal: modern + parlak (gençler tercihi). İtalyan kumaş: lüks + dokunsal. Deri: klasik + zarif. Fotokitap: ekonomik + temiz. Görsel örnekler stüdyoda incelenebilir." },
      { question: "Kaç sayfa yeterli?", answer: "Düğün için 20-30 sayfa standart, 40 sayfa lüks. Aile yıllık için 16-20 sayfa. Her sayfada 2-4 fotoğraf — toplam 80-120 fotoğraf bir albümde anlamlı sıralanır." },
      { question: "Tasarımı kim yapıyor?", answer: "Bizim tasarım ekibi yapıyor; size taslak sunuyor, onayınızla matbaaya gönderiyoruz. Major revizyon hakkı: Klasik 1, Premium 3." },
      { question: "Matbaa kalitesi nasıl?", answer: "Türkiye'nin en iyi 3 dijital baskı matbaasıyla anlaşmamız var. 350g/m² premium kart Premium pakette standart; Klasik pakette 200g/m². Renk uyumu için baskı öncesi proof görüyoruz." },
      { question: "Kaç günde teslim?", answer: "Tasarım 2 hafta, matbaa 2-3 hafta, kargo 3-5 gün. Toplam 4-6 hafta. Yoğun sezonda (haziran-eylül) süre 6-8 haftaya çıkabilir." },
      { question: "Mini albüm hediye nedir?", answer: "Klasik ve Premium pakette dahil — 20x20 cm 16 sayfa anne-baba veya büyükanne için. Aynı düğün albümünden seçilmiş kareler." },
    ],
    relatedServices: ["dugun-fotografcisi", "fotograf-baski-hizmeti", "aile-fotografcisi", "yenidogan-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Albüm Yapımı | Kristal İtalyan Kumaş Düğün Albümü",
    metaDescription: "Gebze albüm yapımı. Kristal, italyan kumaş, deri, fotokitap. Düğün, aile, yıllık. Tasarım + premium baskı. 0533 241 75 22",
  },

  {
    slug: "fotograf-baski-hizmeti",
    name: "Fotoğraf Baskı Hizmeti",
    category: "egitim-ek",
    primaryKeyword: "fotoğraf baskı hizmeti",
    secondaryKeywords: ["Gebze fotoğraf baskı", "tual baskı", "büyük fotoğraf baskı", "alüminyum baskı", "akrilik baskı"],
    shortDescription: "Tual, alüminyum, akrilik, fine art kağıt — duvar dekorasyonu için profesyonel fotoğraf baskı hizmeti.",
    longDescription: `Fotoğraf baskı, dijital görüntüyü fiziksel sanat eserine dönüştüren hizmettir. Akse Fotoğrafçılık olarak duvar dekorasyonu, hediye, kurumsal sergi için profesyonel baskı sunuyoruz. Bizim çekimimiz olmasa bile dışarıdan dijital fotoğrafları getirip basabilirsiniz (telif/kullanım hakkı sizde olmak şartıyla).

Baskı türleri: 1) Tuval (canvas) — sanat eseri hissi, çerçevesiz duvar dekoru, 2) Alüminyum (aluminium dibond) — modern, parlak, dış mekana uygun, 3) Akrilik (acrylic glass) — premium parlak, derinlik hissi, 4) Fine Art kağıt (Hahnemühle, Canson) — sergi/yarışma kalitesi, müze arşiv, 5) Klasik fotoğraf kağıdı (matte/glossy) — geleneksel.

Boyutlar: 20x30 cm (standart hediye), 50x70 cm (orta duvar), 70x100 cm (büyük dekor), 100x150 cm (statement piece), özel boyut. Mat veya parlak yüzey seçimi.

Süreç: Renk doğruluğu için kalibre proof baskı ön onayı — büyük baskıdan önce küçük örnek baskı gönderiyoruz, onaydan sonra final üretim. Ev/işyeri teslimi Gebze + Darıca + Çayırova için ücretsiz.`,
    features: ["Tual + alüminyum + akrilik + fine art", "20x30'dan 100x150 cm'ye boyut", "Mat + parlak yüzey", "Renk proof baskı ön onayı", "Hahnemühle + Canson sergi kalitesi", "Yerel teslim ücretsiz"],
    packages: [
      { name: "Standart", priceRange: "₺500 - ₺1.500", description: "30x40 cm tuval/kağıt", includes: ["30x40 cm baskı", "Tuval veya kağıt seçim", "Renk koreksiyonu", "Yerel teslim"] },
      { name: "Premium Duvar", priceRange: "₺2.500 - ₺6.000", description: "70x100 cm tuval/akrilik", includes: ["70x100 cm baskı", "Tuval/akrilik/alüminyum seçim", "Proof onay", "Asma kit dahil", "Yerel teslim"], popular: true },
      { name: "Statement", priceRange: "₺7.500 - ₺18.000", description: "100x150 cm + sergi kalitesi", includes: ["100x150 cm baskı", "Fine art kağıt + akrilik", "Hahnemühle/Canson sergi kalitesi", "Profesyonel asma + sigorta"] },
    ],
    faqs: [
      { question: "Tuval mi alüminyum mu daha iyi?", answer: "Tuval: sanat eseri hissi, çerçevesiz, klasik. Alüminyum: modern + parlak, dış mekana uygun. Akrilik: derinlik hissi + premium görünüm. Tercih kullanım yerinize göre." },
      { question: "Renk doğruluğu nasıl sağlanıyor?", answer: "Kalibre monitör + ICC profile + proof baskı ön onay. Büyük baskıdan önce küçük örnek gönderiyoruz; onayınızdan sonra final üretim. Renk farkı %5 altında." },
      { question: "Dış mekanda kullanılabilir mi?", answer: "Alüminyum dibond ve UV korumalı baskı dış mekana uygun. Tuval ve kağıt iç mekan için. Restoran/kafe terası için alüminyum öneriyoruz." },
      { question: "Kendi fotoğraflarımı basabilir misiniz?", answer: "Tabi — telif/kullanım hakkı sizde olduğu sürece. Telefonla çekilmiş dahi (yüksek çözünürlüklü) basılabilir. Düşük çözünürlük büyük baskı için yetersiz olur; ön kontrol yapıyoruz." },
      { question: "Fine art kağıt nedir?", answer: "Hahnemühle, Canson gibi premium markaların pamuk veya alfa selüloz kağıtları. Müze arşiv kalitesi (100+ yıl bozulmaz). Yarışma/sergi başvuruları için." },
      { question: "Asma kit dahil mi?", answer: "Klasik ve Premium pakette dahil. Statement pakette profesyonel asma servisi de dahil — ev/işyerine gelip duvara doğru biçimde asıyoruz." },
    ],
    relatedServices: ["albüm-yapimi", "dugun-fotografcisi", "aile-fotografcisi", "havadan-fotograf"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Fotoğraf Baskı | Tuval Akrilik Alüminyum Baskı",
    metaDescription: "Gebze fotoğraf baskı. Tuval, alüminyum, akrilik, fine art. 20x30 - 100x150 cm. Renk proof onayı. 0533 241 75 22",
  },

  {
    slug: "fotograf-cekimi",
    name: "Fotoğraf Çekimi",
    category: "egitim-ek",
    primaryKeyword: "fotoğraf çekimi",
    secondaryKeywords: ["Gebze fotoğraf çekimi", "profesyonel fotoğraf çekimi", "fotoğraf stüdyosu Gebze", "her tür çekim"],
    shortDescription: "Genel 'fotoğraf çekimi' aramaları için tüm hizmetlerimizin özeti — düğünden ürüne, bebeğe, vesikalığa.",
    longDescription: `Fotoğraf çekimi, akse Fotoğrafçılık'ın merkezi etkinliği. Gebze Güzeller'deki stüdyomuzdan Kocaeli geneli ve İstanbul Anadolu yakasına 70+ farklı kategoride profesyonel çekim hizmeti veriyoruz.

Hizmet kategorilerimiz: 1) Düğün, nişan, kına, sünnet (tüm tören çekimleri), 2) Bebek, hamile, aile, doğum (yaşam döngüsü), 3) Portre, kişisel, konsept, moda (kişisel marka), 4) Vesikalık, biyometrik, pasaport (belge), 5) Ürün, e-ticaret, takı, yemek (ticari), 6) Mekan, otel, fabrika, kurumsal (B2B), 7) Etkinlik, konser, spor (profesyonel), 8) Drone, video, 360°/sanal tur (yeni medya), 9) Eğitim, sosyal medya yönetimi, albüm, baskı (ek hizmetler).

Hizmet alanı: Gebze, Darıca, Çayırova, Dilovası ana hedef bölgemiz; ayrıca Tuzla, Pendik (İstanbul Anadolu) ve Kocaeli geneli. Sanayi bölgeleri (GOSB, TOSB, Bilişim Vadisi, Dilovası OSB) için B2B özel ekibimiz.

Aradığınız spesifik hizmet için yukarıdaki kategorilerden seçim yapabilir veya WhatsApp/telefon ile özel paket isteyebilirsiniz. Ön görüşme ücretsiz; gelin sohbet edelim, ihtiyacınıza özel paket oluşturalım.`,
    features: ["70+ farklı çekim kategorisi", "Stüdyo + dış mekan + müşteri yerinde", "Düğünden ürüne tam yelpaze", "Gebze + Kocaeli + İstanbul Anadolu", "Sanayi bölgeleri (B2B) deneyimli", "Ücretsiz ön görüşme"],
    packages: [
      { name: "Belge/Vesikalık", priceRange: "₺150 - ₺400", description: "Vesikalık, biyometrik, pasaport", includes: ["Anında çekim + baskı", "Tüm uluslararası standartlar"] },
      { name: "Stüdyo Seans", priceRange: "₺2.500 - ₺6.000", description: "Portre, bebek, aile, ürün", includes: ["1-2 saat stüdyo", "30-60 edit kare", "Online galeri"], popular: true },
      { name: "Etkinlik/Düğün", priceRange: "₺6.000 - ₺50.000+", description: "Düğün, etkinlik, kurumsal", includes: ["1-2 fotoğrafçı", "Tam gün kapsam", "Tüm format teslim", "Hızlı paylaşım"] },
    ],
    faqs: [
      { question: "Hangi tür fotoğraf çekimini yapıyorsunuz?", answer: "70+ farklı kategoride: düğün, nişan, kına, sünnet, bebek, hamile, aile, çocuk, portre, vesikalık, biyometrik, ürün, takı, yemek, ürün video, tanıtım filmi, drone, sanal tur ve daha fazlası. Her birine özel sayfamız mevcuttur." },
      { question: "Stüdyonuz nerede?", answer: "Akse Fotoğrafçılık stüdyosu: Güzeller Mahallesi, 927. Sokak No: 6-B, 41400 Gebze/Kocaeli. GOSB ve şehir merkezine 5-10 dakika; park imkanımız var." },
      { question: "Hangi bölgelere hizmet veriyorsunuz?", answer: "Ana hedef: Gebze, Darıca, Çayırova, Dilovası. Ayrıca Tuzla, Pendik (İstanbul Anadolu) ve Kocaeli geneli. Sanayi bölgelerinde (GOSB, TOSB, Bilişim Vadisi, Dilovası OSB) B2B çekim deneyimimiz var." },
      { question: "Hangi günler çalışıyorsunuz?", answer: "Pazartesi-Cumartesi 09:00-20:00, Pazar 10:00-18:00. Düğün/etkinlik gibi büyük çekimler için tüm günler müsaitlik kontrolü ile rezervasyon alıyoruz." },
      { question: "Ön görüşme ücretli mi?", answer: "Hayır — ücretsiz. Stüdyoya gelerek veya telefonla görüşerek ihtiyacınıza özel paket oluşturuyoruz. WhatsApp ile de hızlı iletişim mümkün." },
      { question: "En çok hangi hizmeti satıyorsunuz?", answer: "Düğün, bebek/yenidoğan ve biyometrik çekim üç ana yoğunluk alanımız. Bunlara ek olarak son zamanlarda kurumsal/sanayi (GOSB-TOSB) ve sosyal medya yönetimi sıkça talep ediliyor." },
    ],
    relatedServices: ["dugun-fotografcisi", "bebek-fotografcisi", "biyometrik-fotograf-cekimi", "kurumsal-fotograf-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Fotoğraf Çekimi | Tüm Hizmetler Tek Stüdyodan",
    metaDescription: "Gebze fotoğraf çekimi. Düğün, bebek, vesikalık, ürün, kurumsal, drone, video — 70+ kategori. Akse Fotoğrafçılık. 0533 241 75 22",
  },
];
