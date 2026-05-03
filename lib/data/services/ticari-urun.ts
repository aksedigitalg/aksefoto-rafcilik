import type { Service } from "@/lib/types";

export const ticariUrunServices: Service[] = [
  {
    slug: "urun-fotograf-cekimi",
    name: "Ürün Fotoğraf Çekimi",
    category: "ticari-urun",
    primaryKeyword: "ürün fotoğraf çekimi",
    secondaryKeywords: ["Gebze ürün fotoğrafçısı", "e-ticaret ürün çekimi", "beyaz fon ürün", "katalog ürün fotoğrafı", "amazon ürün çekimi"],
    shortDescription: "E-ticaret, katalog ve sosyal medya için profesyonel beyaz fon ve konseptli ürün fotoğraf çekimi.",
    longDescription: `Ürün fotoğrafı, satışınızı doğrudan etkileyen en güçlü pazarlama aracıdır. Akse Fotoğrafçılık olarak Gebze ve çevre OSB'lerdeki üretici, e-ticaret satıcısı ve butik markalar için profesyonel ürün çekimi hizmeti sunuyoruz.

Üç ana çekim stilimiz var: 1) Beyaz fon (Trendyol, Hepsiburada, n11, Amazon standardı) — temiz, ölçü/renk varyasyonu için ideal. 2) Konseptli (lifestyle/dekorlu) — sosyal medya ve marka kataloğu için duygu uyandıran kareler. 3) Detay/makro — takı, küçük objeler için yakın çekim.

Stüdyomuzda 4 farklı set var: 60 cm light box (küçük objeler), 1.5 m beyaz cyclorama (orta-büyük objeler), konsept dekor seti, makro ışık masası. Aynı ürünün farklı açılarını (önden, yandan, üstten, detay) tek seansta çekiyoruz; e-ticaret platformları genelde 5-7 farklı kareyi şart koşar.

Edit aşamasında arka plan tam beyaz çekiliyor (RGB 255), ürünün rengi gerçeğe en yakın haliyle korunuyor; küçük tozları ve parmak izlerini temizliyoruz. Edit teslim süremiz 7-10 gündür; çoklu ürün için 14 güne uzayabilir.`,
    features: ["Beyaz fon + lifestyle + makro", "Çoklu açı (5-7 kare/ürün)", "Trendyol/Hepsiburada/Amazon uyumlu", "Renk doğruluğu (color-managed)", "Toz/leke temizliği", "7-14 günde edit"],
    packages: [
      { name: "Mini", priceRange: "₺2.500 - ₺4.000", description: "10 ürün, beyaz fon", includes: ["10 ürün × 5 açı", "50+ edit fotoğraf", "Beyaz fon", "Web optimize"] },
      { name: "Klasik", priceRange: "₺5.000 - ₺8.000", description: "25 ürün, çoklu açı", includes: ["25 ürün × 5-7 açı", "150+ edit fotoğraf", "Beyaz fon + lifestyle", "Tüm e-ticaret formatları"], popular: true },
      { name: "Premium", priceRange: "₺10.000 - ₺16.000", description: "50+ ürün + konsept", includes: ["50+ ürün", "300+ edit kare", "Beyaz fon + konseptli", "Renk koreksiyonu", "Marka brief uyumu"] },
    ],
    faqs: [
      { question: "Trendyol/Hepsiburada standartına uygun çekim yapıyor musunuz?", answer: "Tabi — beyaz fon (RGB 255), ürün ortalanmış, %80 alan kapsamı, çoklu açı standartlarına uygun çekim yapıyoruz. Platformların reddetmediği formatlar." },
      { question: "Ürünleri stüdyoya getirmem mi gerekiyor?", answer: "Evet — ürünleri stüdyomuza teslim edersiniz veya kargoyla gönderebilirsiniz. Çekim sonrası iade ediyoruz. Büyük objeler için (mobilya gibi) yerinizde çekim de yapıyoruz." },
      { question: "Aynı ürünün kaç açıdan çekiliyor?", answer: "Standart 5 açı: önden, sol, sağ, üstten, detay. Daha kompleks ürünler için 7-10 açı çekiyoruz. Çoklu varyasyon (renk/ölçü) için her biri ayrı çekim." },
      { question: "Lifestyle çekim nedir?", answer: "Ürünün gerçek hayatta kullanım sahnesini canlandıran kareler. Örneğin bir kupa için kahve dolu masa üstü, bir kıyafet için mağaza içi mankenli kare. Sosyal medya için ideal." },
      { question: "Renk doğruluğu nasıl sağlıyorsunuz?", answer: "Color checker kullanarak çekim, kalibreli monitör ile edit yapıyoruz. Renk doğruluğu kritik olan ürünler (giysi, mobilya, takı) için extra titiz çalışıyoruz." },
      { question: "Toplu çekim için indirim var mı?", answer: "Evet — 25+ ürün için %10, 50+ ürün için %15-20 indirim uygulanır. Aylık paket alanlara ek avantajlar sunuyoruz." },
    ],
    relatedServices: ["e-ticaret-fotograf-cekimi", "katalog-cekimi", "taki-fotograf-cekimi", "yemek-fotografcisi"],
    galleryCategory: "urun",
    metaTitle: "Gebze Ürün Fotoğraf Çekimi | E-Ticaret Beyaz Fon Çekimi",
    metaDescription: "Gebze ürün fotoğrafçısı. Trendyol/Hepsiburada/Amazon standartı beyaz fon, lifestyle, makro. Çoklu açı, renk doğruluğu. 0533 241 75 22",
  },

  {
    slug: "urun-video-cekimi",
    name: "Ürün Video Çekimi",
    category: "ticari-urun",
    primaryKeyword: "ürün video çekimi",
    secondaryKeywords: ["Gebze ürün video", "e-ticaret video", "tanıtım videosu", "reels ürün videosu", "ürün tanıtım klibi"],
    shortDescription: "E-ticaret, sosyal medya ve reklam için 360° dönüşlü, kullanım sahneli kısa ürün videoları.",
    longDescription: `Ürün videosu, fotoğrafın yapamadığını yapar: ürünü hareket halinde, kullanılırken, tüm açılarıyla göstererek müşterinin satın alma kararını etkiler. Akse Fotoğrafçılık olarak ürün videolarını üç formatta üretiyoruz: 1) 360° dönüş videosu, 2) Kullanım/lifestyle videosu, 3) Sosyal medya kısa klipleri (Reels/TikTok için 15-30 sn).

Stüdyomuzda motorize 360° dönüş tablası, sürekli LED ışık ve gimbal stabilizatör mevcut. 360° videolar e-ticaret site galerilerine eklendiğinde dönüşüm oranını %20-40 artırdığını gösteren çalışmalar var.

Reels/TikTok için 15-30 saniyelik trend uyumlu klipler hazırlıyoruz; ürünün 'wow' anını ilk 3 saniyede yakalayan, transition efektli, müzikle senkronize klipler. Müzik seçimi telifsiz platformlardan yapılır.

Edit aşamasında renk koreksiyonu, ürün vurgusu, marka logosu ekleme, alt yazı (otomatik İngilizce çeviri opsiyonu) yapıyoruz. Format teslim: MP4 (web için) + dikey 9:16 (Reels/Stories) + kare 1:1 (Instagram feed). Edit süresi 7-10 gün.`,
    features: ["360° dönüş videosu", "Lifestyle kullanım klibi", "Reels/TikTok trend uyumlu", "Motorize döner tabla + LED + gimbal", "Çoklu format (16:9, 9:16, 1:1)", "Telifsiz müzik + alt yazı"],
    packages: [
      { name: "Mini", priceRange: "₺3.500 - ₺5.500", description: "5 ürün, 15 sn klip", includes: ["5 ürün × 15 sn", "1 format (web veya Reels)", "Renk koreksiyonu", "MP4 teslim"] },
      { name: "Klasik", priceRange: "₺7.000 - ₺11.000", description: "15 ürün, çoklu format", includes: ["15 ürün × 15-30 sn", "3 format (web + Reels + IG kare)", "360° dönüş + lifestyle", "Alt yazı"], popular: true },
      { name: "Premium", priceRange: "₺13.000 - ₺22.000", description: "30+ ürün, sinema kalite", includes: ["30+ ürün", "Sinema kalite kayıt", "Tüm formatlar + kısa reklam klibi", "Marka logo + alt yazı", "Müzik koordinasyonu"] },
    ],
    faqs: [
      { question: "360° dönüş videosu nasıl yapılıyor?", answer: "Motorize döner tablanın üzerine ürün yerleştirilir, sabit kameradan tablanın 360° dönüşü kayıt edilir. E-ticaret galerilerinde scroll-to-rotate olarak da kullanılabilir." },
      { question: "Reels için trend uyumlu klip nedir?", answer: "Sosyal medyada güncel olan müzikler, transition efektleri ve hook tarzlarına uygun klipler. 'İlk 3 saniyede dikkat çek' kuralı uygulanır." },
      { question: "Hangi format en çok dönüşüm sağlar?", answer: "E-ticaret için 360° dönüş + lifestyle ikilisi en etkili. Sosyal medya için 9:16 dikey reels en yüksek izlenme. Genelde paket olarak 3 format birden tercih edilir." },
      { question: "Ürün ne kadar sürede çekiliyor?", answer: "Ortalama 1 üründe 30-60 dakika çekim + 1-2 saat edit. 15 ürünlük paket 1 günde çekilir, 7-10 günde edit edilir." },
      { question: "Müzik telif sorunu olur mu?", answer: "Telifsiz stok platformlarından (Musicbed, Artlist) müzik kullanıyoruz; YouTube/Instagram'da Content ID engeli yaşanmaz." },
      { question: "Alt yazı eklemesi otomatik mi?", answer: "Türkçe alt yazıyı manual ekliyoruz; otomatik İngilizce çeviri ek hizmet olarak mevcut. Ürün açıklaması veya satış slogan'ı alt yazıya entegre edilebilir." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "e-ticaret-fotograf-cekimi", "sosyal-medya-video-cekimi", "reklam-fotografciligi"],
    galleryCategory: "video",
    metaTitle: "Gebze Ürün Video Çekimi | 360° Dönüş ve Reels Videosu",
    metaDescription: "Gebze ürün video çekimi. 360° dönüş, Reels, e-ticaret videosu. Motorize döner tabla, gimbal, telifsiz müzik. 0533 241 75 22",
  },

  {
    slug: "e-ticaret-fotograf-cekimi",
    name: "E-Ticaret Fotoğraf Çekimi",
    category: "ticari-urun",
    primaryKeyword: "e-ticaret fotoğraf çekimi",
    secondaryKeywords: ["Trendyol fotoğraf çekimi", "Hepsiburada ürün fotoğraf", "n11 ürün çekim", "Amazon ürün fotoğraf", "marketplace fotoğraf"],
    shortDescription: "Trendyol, Hepsiburada, n11, Amazon ve diğer marketplace platformlarının standartlarına uygun e-ticaret çekimi.",
    longDescription: `E-ticaret fotoğrafı, ürün satışının ön cephesidir; iyi çekilmiş bir fotoğraf 'tıklama' oranınızı %30-50 artırabilir. Akse Fotoğrafçılık olarak Türkiye'nin önde gelen e-ticaret platformlarının standartlarına uygun çekim yapıyoruz.

Trendyol: kare beyaz fon (RGB 255), ürün ortada, çevreye %20 boşluk. Hepsiburada: 1500x1500 px minimum, 5+ farklı açı. n11: beyaz fon, 1000x1000 px. Amazon: %85 alan kapsamı, beyaz arka plan, üst görüntü standartı. Trendyol GO için ek lifestyle kareler.

Çoklu varyasyon (renk, ölçü) çekimi için her bir varyasyonu ayrı çekiyoruz; özellikle giyim ürünlerinde aynı kıyafetin XS-XXL arası farklı bedenleri farklı modellerle çekilir veya tek model üzerinde tek beden + dijital ölçü grafiği eklenir.

Aylık paket isteyen e-ticaret satıcıları için her ay yeni gelen ürünleri çekme ve aynı stüdyo standardında devam etme avantajı sunuyoruz. Edit aşamasında her görsel platformun gereksinimine göre ayrı format ve boyutta hazırlanır.`,
    features: ["Tüm Türkiye marketplace standartları", "Çoklu varyasyon çekimi", "Manken/cansız + boy aynası uyumu", "Aylık abonelik paketi", "Platforma özel boyut", "Hızlı toplu teslim"],
    packages: [
      { name: "Tek Sefer", priceRange: "₺3.500 - ₺6.000", description: "20 ürün, tek platform", includes: ["20 ürün × 5 açı", "100+ edit fotoğraf", "Tek platform format", "10 günde teslim"] },
      { name: "Çoklu Platform", priceRange: "₺7.000 - ₺12.000", description: "20 ürün, tüm platform formatları", includes: ["20 ürün", "150+ edit fotoğraf", "Trendyol + Hepsiburada + n11 + Amazon format", "Lifestyle kareler"], popular: true },
      { name: "Aylık Abonelik", priceRange: "₺12.000 - ₺22.000 / ay", description: "Aylık 30-50 ürün", includes: ["Aylık 30-50 ürün", "Tüm formatlar", "Aynı stüdyo tutarlılığı", "Hızlı kargo döngüsü"] },
    ],
    faqs: [
      { question: "Trendyol için özel formatınız var mı?", answer: "Tabi — Trendyol kare beyaz fon, ana görsel + 4 detay açı. Trendyol GO için lifestyle ek kareler. Manken poz çekimleri için yerel modellerle çalışıyoruz." },
      { question: "Manken çekimi yapıyor musunuz?", answer: "Evet — yerel manken ve cansız manken (boy aynası) seçeneklerimiz var. Giyim için manken çekim genelde dönüşüm oranını artırır." },
      { question: "Amazon FBA için uygun mu?", answer: "Evet — Amazon'un %85 alan kapsamı + beyaz arka plan + üst görüntü standartlarına uygun çekim yapıyoruz. Hatta uluslararası FBA satıcılarımız da var." },
      { question: "Çoklu renk varyasyonu için ne yapıyorsunuz?", answer: "Her renk varyasyonunu ayrı çekiyoruz; aynı ürünün 5 farklı renkte olması = 5 ayrı çekim. Toplu paketlerde indirim mevcut." },
      { question: "Aylık abonelik nasıl çalışıyor?", answer: "Her ay belirli sayıda yeni ürün çekimi + edit + teslim. Sürekli stok yenileyen markalar için tutarlılık ve hız avantajı sağlar." },
      { question: "Ürünleri kargoyla gönderebilir miyim?", answer: "Evet — Türkiye genelinden kargo ile gönderebilirsiniz. Çekim sonrası ürünleri size geri kargolarız. Kargo ücreti ek olarak hesaplanır." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "katalog-cekimi", "urun-video-cekimi", "moda-fotografcisi"],
    galleryCategory: "urun",
    metaTitle: "Gebze E-Ticaret Fotoğraf Çekimi | Trendyol Hepsiburada Çekim",
    metaDescription: "Gebze e-ticaret ürün fotoğrafçısı. Trendyol, Hepsiburada, n11, Amazon standartları. Manken çekim, aylık abonelik. 0533 241 75 22",
  },

  {
    slug: "katalog-cekimi",
    name: "Katalog Çekimi",
    category: "ticari-urun",
    primaryKeyword: "katalog çekimi",
    secondaryKeywords: ["Gebze katalog fotoğrafçısı", "ürün katalog çekimi", "marka katalog fotoğraf", "moda kataloğu", "tekstil katalog"],
    shortDescription: "Marka kataloğunuz için tutarlı görsel kimlikle planlanmış kapsamlı ürün ve tanıtım çekimi.",
    longDescription: `Katalog çekimi, bir markanın tüm ürün gamını tutarlı bir görsel kimlikle belgelemek için yapılan kapsamlı çekim hizmetidir. E-ticaret çekiminden farkı: katalog çekimi marka kimliği odaklı, sanatsal ve duygu uyandıran kareler içerir. Akse Fotoğrafçılık olarak yerel butikler, tekstil markaları, mobilya üreticileri ve B2B distribütörler için katalog çekimi yapıyoruz.

Çekim öncesi marka brief'i alıyoruz: hedef kitle, marka renk paleti, görsel kimlik, mood. Buna göre stüdyo seti, dış mekan veya gerçek satış ortamı (mağaza, showroom) seçimi yapılır. Katalog çekimi 1-3 günlük bir süreçtir; 50-150 ürün veya görsel üretilir.

Katalog tasarımı için aynı serinin parçaları olan ürünleri benzer ışık ve kompozisyonla çekiyoruz. Marka logosu için detay yer bırakılır; basılı katalog (PDF) veya dijital katalog için ayrı format teslim edilir.

Edit aşamasında renk paleti tutarlı tutuluyor; bir markanın tüm ürünleri aynı havada görünüyor. Edit teslim 14-21 gündür. Yıllık katalog için 2 mevsimsel çekim (yaz/kış koleksiyonu) abonelik paketimiz var.`,
    features: ["Marka brief odaklı planlama", "1-3 günlük tam kapsamlı çekim", "Stüdyo + dış mekan + showroom", "Tutarlı renk paleti", "Basılı + dijital katalog format", "Yıllık mevsimsel paket"],
    packages: [
      { name: "Mini Katalog", priceRange: "₺8.000 - ₺14.000", description: "30 ürün, 1 gün", includes: ["1 günlük çekim", "30 ürün × 3-5 açı", "150+ edit fotoğraf", "Marka uyumlu grading"] },
      { name: "Klasik", priceRange: "₺16.000 - ₺26.000", description: "75 ürün, 2 gün, manken", includes: ["2 günlük çekim", "75 ürün", "Manken/model çekim", "300+ edit", "Web + basılı format"], popular: true },
      { name: "Premium", priceRange: "₺30.000 - ₺50.000", description: "150+ ürün, 3 gün, makyaj-stylist", includes: ["3 günlük çekim", "150+ ürün", "Saç-makyaj + stylist", "500+ edit", "Sanat yönetmeni + grading"] },
    ],
    faqs: [
      { question: "Katalog çekimi e-ticaretten nasıl farklı?", answer: "E-ticaret tek ürün odaklı, marketplace standartı; katalog ise marka kimliği odaklı, atmosferik, hikaye anlatan. Ürünler 'galeri' havasında değil, 'satış sonrası deneyim' gibi sunulur." },
      { question: "Modeli/manken sizinle mi yoksa bizim mi?", answer: "İkisi de mümkün. Yerel modelleme ajanslarıyla anlaşmamız var; uygun model bulmak için size yardımcı oluyoruz. Kendi modelinizi getirmek de mümkün." },
      { question: "Stylist ne yapıyor?", answer: "Stylist, ürünlerin model üzerinde nasıl giyileceğini, aksesuar uyumunu ve set dekorasyonunu yönlendirir. Premium pakette dahil; profesyonel görsel kimlik için kritik." },
      { question: "Basılı katalog için ek format gerekiyor mu?", answer: "Evet — basılı katalog için CMYK profilli ve yüksek DPI'lı (300+) görsel teslim ediyoruz. Klasik ve Premium paketlerde dahil." },
      { question: "Yıllık katalog paketi nedir?", answer: "Yaz koleksiyonu (mart-nisan çekim) ve kış koleksiyonu (eylül-ekim çekim) ile yıl içinde 2 büyük çekim. Aboneliklerde fiyat avantajı ve takvim güvencesi." },
      { question: "Sanat yönetmeni ne demek?", answer: "Premium pakette deneyimli bir sanat yönetmeni çekim setini yönetir; her karenin marka kimliğine uygun olması için her detayı kontrol eder. Yüksek bütçeli markaların standardıdır." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "moda-fotografcisi", "e-ticaret-fotograf-cekimi", "reklam-fotografciligi"],
    galleryCategory: "urun",
    metaTitle: "Gebze Katalog Çekimi | Marka Katalog Fotoğraf Çekimi",
    metaDescription: "Gebze katalog çekimi. Marka brief odaklı, 1-3 günlük kapsam, manken + stylist. Yıllık mevsimsel paket. 0533 241 75 22",
  },

  {
    slug: "reklam-fotografciligi",
    name: "Reklam Fotoğrafçılığı",
    category: "ticari-urun",
    primaryKeyword: "reklam fotoğrafçılığı",
    secondaryKeywords: ["reklam çekimi", "Gebze reklam fotoğraf", "billboard fotoğraf", "kampanya çekimi", "marka reklam çekimi"],
    shortDescription: "Marka kampanyaları, billboard, dergi reklamları ve sosyal medya kampanyaları için kreatif reklam çekimi.",
    longDescription: `Reklam fotoğrafçılığı, bir marka kampanyasının görsel temelini oluşturan en üst seviye fotoğraf hizmetidir. Akse Fotoğrafçılık olarak yerel ve ulusal markalar için reklam çekimleri yapıyoruz. Bu çekimler katalog/e-ticaret çekiminden tamamen farklıdır: konsept yaratımı, model castingi, sanat yönetmeni, stylist, profesyonel saç-makyaj — full prodüksiyon ekibi gerektirir.

Çalışma süreci: marka brief'i → kreatif konsept önerisi → mood board → casting → set tasarımı → çekim günü → edit → final teslim. Toplam süreç 2-4 hafta.

Kampanya formatları: billboard (dış cephe), dergi (basılı), sosyal medya (digital banner + reels), TV (still kareler için). Her format için teknik gereksinim farklıdır; yüksek DPI + CMYK + büyük boyut billboard için, dijital banner için RGB + web format.

Yerel butikler ve KOBİ markaları için 'Mini Kampanya' paketimiz var; düşük bütçeyle profesyonel reklam görseli üretmek mümkün. Ulusal markalar için 'Premium Kampanya' paketinde tam prodüksiyon ekibi sunuyoruz.`,
    features: ["Konsept + mood board kreatif", "Casting + sanat yönetmeni", "Saç-makyaj + stylist", "Billboard + dergi + dijital format", "Tam prodüksiyon ekibi", "Marka kimliği uyumu"],
    packages: [
      { name: "Mini Kampanya", priceRange: "₺12.000 - ₺22.000", description: "Yerel butik kampanyası", includes: ["1 günlük çekim", "Konsept önerisi", "20+ kampanya kare", "Saç-makyaj koordinasyonu"] },
      { name: "Klasik Kampanya", priceRange: "₺25.000 - ₺45.000", description: "Bölgesel marka kampanyası", includes: ["2 günlük çekim", "Casting + stylist + makyaj", "50+ kare", "Tüm format teslim", "Sanat yönetmeni"], popular: true },
      { name: "Premium Kampanya", priceRange: "₺50.000 - ₺120.000", description: "Ulusal marka, full prodüksiyon", includes: ["3-5 günlük çekim", "Tam prodüksiyon ekibi", "100+ profesyonel kare", "Billboard + dergi + dijital", "Sınırsız revizyon"] },
    ],
    faqs: [
      { question: "Reklam çekimi katalogtan nasıl farklı?", answer: "Reklam çekimi 'duygu uyandırma' odaklıdır; tek bir görsel kampanyanın hikayesini anlatır. Katalog ise 'tüm ürünleri sergileme' odaklı, çoklu görsel içerir." },
      { question: "Casting nasıl yapılıyor?", answer: "Brief'inize göre uygun yüz/yaş/etnik özelliklerde 5-10 model adayı sunuyoruz; içlerinden seçim yapıyorsunuz. Yerel + İstanbul bazlı modelleme ajanslarıyla anlaşmamız var." },
      { question: "Billboard için ekstra şey gerekiyor mu?", answer: "Yüksek DPI (300+), CMYK renk profili, büyük boyut (genelde 6x4 m oranı). Premium pakette billboard formatı standart dahildir." },
      { question: "Sanat yönetmeni ne yapıyor?", answer: "Konsept-mood-set-stil tutarlılığını sağlar. Her karenin marka kimliğine uygun olması için her detayı kontrol eder. Klasik ve Premium pakette dahil." },
      { question: "Yerel KOBİ için bütçe çok yüksek değil mi?", answer: "Mini Kampanya paketi tam olarak yerel KOBİ ve butikler için tasarlandı. Tek günde profesyonel kampanya görselleri üretmek mümkün." },
      { question: "Kampanya stratejisi öneriyor musunuz?", answer: "Sosyal medya yönetimi hizmetimizle birleştirildiğinde tam strateji + görsel paket sunuyoruz. Sadece çekim için 'kreatif konsept' önerisi pakette dahil." },
    ],
    relatedServices: ["katalog-cekimi", "urun-fotograf-cekimi", "moda-fotografcisi", "kurumsal-fotograf-cekimi"],
    galleryCategory: "urun",
    metaTitle: "Gebze Reklam Fotoğrafçılığı | Marka Kampanya Çekimi",
    metaDescription: "Gebze reklam fotoğrafçısı. Marka kampanyası, billboard, dergi, dijital. Tam prodüksiyon ekibi, sanat yönetmeni. 0533 241 75 22",
  },

  {
    slug: "taki-fotograf-cekimi",
    name: "Takı Fotoğraf Çekimi",
    category: "ticari-urun",
    primaryKeyword: "takı fotoğraf çekimi",
    secondaryKeywords: ["Gebze takı fotoğrafı", "mücevher çekimi", "yüzük fotoğraf", "kuyumcu fotoğraf", "altın takı çekimi"],
    shortDescription: "Yüzük, kolye, küpe, bilezik gibi mücevherler için makro detay ve parıltıyı yakalayan profesyonel takı çekimi.",
    longDescription: `Takı fotoğrafçılığı, makro lens, hassas ışık ve titiz post-prodüksiyon gerektiren özel bir uzmanlık alanıdır. Akse Fotoğrafçılık olarak Gebze ve çevre kuyumcular, mücevher tasarımcıları ve takı e-ticaret satıcıları için profesyonel takı çekimi yapıyoruz.

Stüdyomuzda takı için özel ışık masası mevcuttur: çoklu LED panel + reflektör + diffüzör ile mücevherin yansıma noktalarını kontrol ediyoruz. Pırlanta için 'fire' (ışık parçalanması) doğru açıdan yakalanmalı; yüzeyin parıltısı korunurken arka plandaki ışık dağıtılmalı.

Edit aşamasında her takı kare kare retouch ediliyor: küçük tozlar, parmak izleri, focus yumuşaklığı temizleniyor; metalin pırıltısı abartılmadan vurgulanıyor; dijital olarak takı kayboluyormuş hissi ('floating' efekti) verilebilir.

E-ticaret için açı standartları: önden, yandan, eldeki/üstündeki sahneli, makro detay. Tek takı için 5-7 kare standardı. Aylık 30-50 takı çekim alan butiklere abonelik avantajı sunuyoruz.`,
    features: ["Makro lens + ışık masası", "Pırlanta 'fire' yakalama", "Detaylı retouch (toz/parmak izi)", "Floating efekt seçeneği", "5-7 kare/takı standart", "Aylık abonelik"],
    packages: [
      { name: "Sade", priceRange: "₺2.500 - ₺4.000", description: "10 takı, beyaz fon", includes: ["10 takı × 5 kare", "50+ edit fotoğraf", "Web optimize"] },
      { name: "Klasik", priceRange: "₺5.000 - ₺8.000", description: "25 takı, çoklu sahne", includes: ["25 takı × 5-7 kare", "150+ edit", "Beyaz fon + sahne (eldeki kıyafet)", "Detaylı retouch"], popular: true },
      { name: "Premium", priceRange: "₺10.000 - ₺16.000", description: "50+ takı, lifestyle dahil", includes: ["50+ takı", "300+ edit kare", "Beyaz fon + lifestyle + makro", "Floating efekt", "Aylık abonelik opsiyonu"] },
    ],
    faqs: [
      { question: "Takı çekimi için özel ekipman gerekiyor mu?", answer: "Evet — makro lens (1:1 oran), özel ışık masası, çoklu LED panel. Bu ekipmanlar standart ürün çekimi setlerinde olmaz; takıya özel kurulum gerekir." },
      { question: "Pırlanta nasıl çekiliyor?", answer: "Pırlantanın 'fire'ı (ışık parçalanma efekti) belirli bir açıdan görülür. Çoklu LED ışık + hassas açı ayarı ile yakalanır. Stüdyomuzda pırlanta için kalibreli kurulum mevcut." },
      { question: "Eldeki/sahneli çekim de yapılıyor mu?", answer: "Evet — yüzükler için modelin eli üzerinde, kolyeler için göğüste, küpeler için kulak yakınında 'sahneli' kareler. Hem ürünü hem kullanım deneyimini gösterir." },
      { question: "Floating efekti nedir?", answer: "Takı sanki havada uçuyormuş gibi göründüğü efekt. Görsel açıdan çok etkili; e-ticaret sitelerinde dikkat çeker. Premium pakette dahil." },
      { question: "Toplu çekim için indirim var mı?", answer: "Evet — 25+ takı için %10, 50+ takı için %15-20 indirim. Aylık abonelik isteyenlere ek avantaj." },
      { question: "Edit teslim süresi ne kadar?", answer: "10-14 gün. Detaylı retouch nedeniyle standart ürün çekiminden uzun sürer." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "katalog-cekimi", "e-ticaret-fotograf-cekimi", "reklam-fotografciligi"],
    galleryCategory: "taki",
    metaTitle: "Gebze Takı Fotoğraf Çekimi | Mücevher Makro Çekimi",
    metaDescription: "Gebze takı fotoğrafçısı. Pırlanta, yüzük, kolye için makro çekim. Detaylı retouch, floating efekt, aylık abonelik. 0533 241 75 22",
  },

  {
    slug: "araba-fotograf-cekimi",
    name: "Araba Fotoğraf Çekimi",
    category: "ticari-urun",
    primaryKeyword: "araba fotoğraf çekimi",
    secondaryKeywords: ["Gebze araba fotoğrafı", "galeri araç çekimi", "sahibinden araç fotoğraf", "araç tanıtım çekimi", "lüks araba çekimi"],
    shortDescription: "Galeri, sahibinden veya tanıtım için profesyonel iç-dış araç fotoğrafı ve drone hava çekimi.",
    longDescription: `Araba fotoğrafı, satış değerinizi ve aracın algısını doğrudan etkiler; profesyonel çekim sahibinden/galeri ilanlarınızda öne çıkmanızı sağlar. Akse Fotoğrafçılık olarak özel araç sahipleri, ikinci el galeriler, lüks oto satıcıları ve oto kiralama firmaları için araç çekimi yapıyoruz.

Çekim için altın saat (gün doğumu/batımı) ışığı kullanıyoruz; aracın boyasındaki yansımaları doğal yumuşaklıkta yakalıyor, çevre yansımalarını dramatic kompozisyonlarla kullanıyoruz. Bayramoğlu sahil yolu, Eskihisar yolu, Hereke kıvrımları araba çekimi için harika lokasyonlar.

İç çekimde geniş açı lens + hassas ışık ile koltuk, gösterge paneli, multimedya, ayak alanı detay kareleri alıyoruz. Drone ile aracın hava genel görüntüsü dramatic bir efekt katar — özellikle dağ yolu, sahil yolu çekimleri.

Edit aşamasında boyada parlama + reklam tabelası gibi rahatsız edici öğeler temizlenir; aracın 'fabrika çıkışı' temizliği vurgulanır. Sahibinden ilanı için fotoğraflar ek format (1280x960, max 200KB) standardına uyarlı teslim edilir.`,
    features: ["Altın saat dış çekim", "İç detay (gösterge, koltuk, multimedya)", "Drone hava çekimi", "Sahibinden/galeri format uyumu", "Rahatsız edici öğe temizliği", "Lüks ve klasik araç deneyimi"],
    packages: [
      { name: "Sahibinden", priceRange: "₺1.500 - ₺2.500", description: "Tek araç, dış + iç", includes: ["1 saat çekim", "30+ edit kare", "Sahibinden format", "Dijital teslim"] },
      { name: "Galeri", priceRange: "₺3.000 - ₺5.000", description: "Galeri stoku, çoklu araç", includes: ["3-5 araç", "100+ edit kare", "Konsept lokasyon", "Galeri format"], popular: true },
      { name: "Premium", priceRange: "₺6.000 - ₺10.000", description: "Lüks araç + drone + video", includes: ["Tek araç tam kapsam", "150+ edit kare", "Drone hava çekimi", "30 sn klip", "Dramatic grading"] },
    ],
    faqs: [
      { question: "Sahibinden için kaç fotoğraf yeterli?", answer: "Sahibinden minimum 5, ideal 10-15 kare ister. Standart paketimiz 30+ kare üretir; arasından en iyi 10-15'ini ilan için seçersiniz." },
      { question: "Lokasyonu siz mi seçiyorsunuz?", answer: "Birlikte planlıyoruz. Bayramoğlu sahil, Eskihisar yolu, Hereke kıvrımları araba için harika. Şehir merkezi caddesi de uygun." },
      { question: "Drone çekimi her arabada gerekli mi?", answer: "Hayır — sahibinden ilanı için gereksiz. Lüks araç tanıtımı, oto galeri reklam kampanyası için drone büyük fark yaratır." },
      { question: "Boya parlamasını nasıl çözüyorsunuz?", answer: "Polarize filtre ve doğru ışık açısı ile parlamayı azaltıyoruz; edit aşamasında kalan parlamalar dijital olarak temizlenir." },
      { question: "İç çekimde kıştan daha iyi yaz mı?", answer: "Yaz daha çok ışık avantajı verir. Ancak iç çekim için cam yansımaları kontrol edilebildiği için her mevsim çalışılabilir." },
      { question: "Ne kadar zamanda teslim?", answer: "Sahibinden paketi 3 gün, Galeri paketi 7 gün, Premium paketi 10 gün edit teslim." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "drone-fotograf-ve-video", "tanitim-filmi-cekimi", "reklam-fotografciligi"],
    galleryCategory: "araba",
    metaTitle: "Gebze Araba Fotoğraf Çekimi | Galeri Sahibinden Çekim",
    metaDescription: "Gebze araba fotoğrafçısı. Sahibinden + galeri + lüks araç çekimi, drone hava, iç-dış detay. Bayramoğlu/Hereke lokasyon. 0533 241 75 22",
  },

  {
    slug: "yemek-fotografcisi",
    name: "Yemek Fotoğrafçısı",
    category: "ticari-urun",
    primaryKeyword: "yemek fotoğrafçısı",
    secondaryKeywords: ["Gebze yemek fotoğrafçı", "restoran yemek çekimi", "menü fotoğraf", "food photography", "kafe yemek çekimi"],
    shortDescription: "Restoran menüsü, sosyal medya ve yemek bloğu için iştah açan, hikaye anlatan profesyonel yemek çekimi.",
    longDescription: `Yemek fotoğrafçılığı, görseliyle iştah açma sanatıdır. Akse Fotoğrafçılık olarak Gebze, Darıca ve Çayırova bölgesindeki restoranlar, kafeler, pasta-tatlı satıcıları, catering firmaları ve yemek bloggerleri için profesyonel yemek çekimi sunuyoruz.

İki ana çekim stilimiz var: 1) Stüdyo kontrollü ışık (menü kartları, e-ticaret) — sade beyaz/koyu ahşap arka plan, üstten flat lay veya 45° açı. 2) Yerinde restoran ışığı (sosyal medya, ambient kareler) — restoranın gerçek atmosferinde, doğal aydınlık ile.

Yemek styling önemlidir; bir aşçı/şef yemek hazırlama sürecinde tabağı 'çekim için' yeniden düzenleriz: garnitür ekleme, sos detayı, buhar etkisi (sıcak yemekler için). Yemek yazılımı + sosyal medya post fotoğrafları farklı stilde çekilir.

Restoran menü çekimi için aylık 5-10 yeni yemek standartı. Sosyal medya için ise haftalık 3-5 paylaşımlık görsel paketi. Edit aşamasında doygun renkler, yumuşak ışık, iştah açan ton ayarı yapıyoruz.`,
    features: ["Stüdyo + restoran içi çekim", "Flat lay + 45° açı", "Yemek styling", "Buhar/sos efekti", "Aylık menü paketi", "Sosyal medya formatları"],
    packages: [
      { name: "Menü", priceRange: "₺3.000 - ₺5.000", description: "10 yemek, sade", includes: ["10 yemek × 3 açı", "30+ edit kare", "Menü kartı format", "Web optimize"] },
      { name: "Klasik Restoran", priceRange: "₺6.000 - ₺10.000", description: "20 yemek + ambient + içecek", includes: ["20 yemek + 5 içecek", "Restoran ambient kareleri", "100+ edit kare", "Tüm formatlar"], popular: true },
      { name: "Aylık Sosyal Medya", priceRange: "₺8.000 - ₺14.000 / ay", description: "Aylık 30 görsel, haftalık çekim", includes: ["Aylık 30 yemek görseli", "Haftalık çekim", "Reels + flat lay", "Sosyal medya planlama"] },
    ],
    faqs: [
      { question: "Restoranımıza gelir misiniz yoksa stüdyoya mı?", answer: "İkisi de mümkün. Restoran içinde çekim ambient atmosfer için iyi; stüdyo çekimi menü kartları için daha temiz. Çoğu restoran ikisini birleştirir." },
      { question: "Yemek styling ne demek?", answer: "Tabağın çekim için yeniden düzenlenmesi: garnitür ekleme, sos sürme, buhar yaratma, yumuşak ışık ayarlama. Aşçınız hazırlar, biz çekim için son rötuşu yaparız." },
      { question: "Buhar efekti yapay mı?", answer: "Sıcak yemekler için doğal buhar genelde yeterli. Soğuyan yemeklerde elektrikli buhar makinesi kullanıyoruz; doğal görünüm verir." },
      { question: "Aylık paket nasıl çalışıyor?", answer: "Her hafta 1-2 saatlik bir çekim ziyareti; 7-8 yeni yemek görseli üretimi. Sosyal medya planlamasıyla birleşince haftalık paylaşım takvimi oluşur." },
      { question: "Restoranlarımız 3 farklı şubede, hepsini çekiyor musunuz?", answer: "Tabi — şubeler arasında ulaşım dahildir (Gebze, Darıca, Çayırova, Dilovası). İstanbul Tuzla/Pendik için ek ulaşım ücreti." },
      { question: "Sosyal medya planlama ne içeriyor?", answer: "Caption önerileri, post saatleri, hashtag stratejisi, takvim planlama. Sosyal medya yönetimi hizmetimizle birleştirilebilir." },
    ],
    relatedServices: ["urun-fotograf-cekimi", "mekan-fotografcisi", "restoran-cekimi", "sosyal-medya-icin-fotograf-cekimi"],
    galleryCategory: "yemek",
    metaTitle: "Gebze Yemek Fotoğrafçısı | Restoran Menü Çekimi",
    metaDescription: "Gebze yemek fotoğrafçısı. Restoran menü, sosyal medya, kafe-pasta çekimi. Yemek styling, buhar efekti, aylık paket. 0533 241 75 22",
  },
];
