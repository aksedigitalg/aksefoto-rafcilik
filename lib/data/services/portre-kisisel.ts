import type { Service } from "@/lib/types";

export const portreKisiselServices: Service[] = [
  {
    slug: "portre-cekimi",
    name: "Portre Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "portre çekimi",
    secondaryKeywords: ["Gebze portre çekimi", "profesyonel portre", "portre fotoğrafçısı", "stüdyo portre"],
    shortDescription: "Kişisel veya profesyonel kullanım için zarif, ışıklı ve karakterinizi yansıtan portre çekimi.",
    longDescription: `Portre çekimi, bir insanın yüzünden çok karakterini ve duruşunu yansıtan sanat formudur. Akse Fotoğrafçılık olarak portre çekimini stüdyoda kontrollü ışıkla veya doğal mekanlarda altın saat ışığında yapıyoruz. Klasik portre, edebi (kitap kapağı tarzı), kurumsal (LinkedIn, web sitesi) ve sanatsal (low key, dramatic) farklı stillerimiz var.

Çekim öncesi kişiyle 15 dakikalık bir sohbet yapıyoruz; karakterini anlayıp ona göre yönlendirme yapıyoruz. Sade beyaz/gri/siyah arka planlar profesyonel kullanım için, doğal mekanlar (Bayramoğlu sahili, kentsel cadde) sosyal medya/kişisel kullanım için tercih edilir.

Edit aşamasında ten tonu, gözlerin parlaklığı ve kontrast düzenlenir; aşırı retouch yapılmaz, kişinin doğal yüz hatları korunur. Edit teslim süremiz 7-10 gündür.`,
    features: [
      "Stüdyo + dış çekim opsiyonu",
      "Klasik, kurumsal, sanatsal stil",
      "Kişiselleştirilmiş yönlendirme",
      "Doğal retouch (aşırı değil)",
      "1 saat kapsam standart",
      "7-10 günde edit teslim",
    ],
    packages: [
      {
        name: "Mini",
        priceRange: "₺1.500 - ₺2.500",
        description: "30 dk stüdyo, sade",
        includes: ["30 dk seans", "20+ edit fotoğraf", "Tek arka plan", "Dijital teslim"],
      },
      {
        name: "Klasik",
        priceRange: "₺2.500 - ₺4.000",
        description: "1 saat, çoklu arka plan",
        includes: ["1 saat seans", "40+ edit fotoğraf", "3 farklı arka plan", "USB + dijital teslim"],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺5.000 - ₺7.500",
        description: "Stüdyo + dış çekim",
        includes: ["2 saat kapsam (stüdyo + dış)", "70+ edit fotoğraf", "Saç-makyaj koordinasyonu", "USB + dijital teslim"],
      },
    ],
    faqs: [
      { question: "Portre çekimine hangi kıyafetlerle gelmeliyim?", answer: "Sade ve nötr renkli kıyafetler portre çekiminde en iyi sonucu verir. Çok desenli/parlak kıyafetlerden kaçının. Birkaç farklı kıyafet getirebilir, çekim sırasında değiştirebilirsiniz." },
      { question: "Saç ve makyaj dahil mi?", answer: "Mini ve Klasik paketlerde dahil değil. Premium pakette saç-makyaj koordinasyonu var; size yakın bir profesyonel ile çalışıyoruz, ücreti pakete dahildir." },
      { question: "LinkedIn için kullanılabilir mi?", answer: "Tabi — kurumsal portre stilinde sade arka plan + iyi ışıklı yüz çekimleri LinkedIn ve diğer profesyonel platformlar için ideal. Kare kırpım dahil teslim ediyoruz." },
      { question: "Kaç kare teslim ediliyor?", answer: "Pakete göre 20-70 edit kare. Online galeri üzerinden seçim yapabilir, ek edit istediğiniz kareleri belirtebilirsiniz." },
      { question: "Stüdyo mu dış çekim mi?", answer: "Stüdyo: kontrollü, hızlı, profesyonel. Dış çekim: doğal, atmosferik, geniş atmosfer. Premium paket ikisini birleştirir; en çok değer veren seçenek." },
      { question: "Edit aşamasında nereler düzenleniyor?", answer: "Ten tonu, göz parlaklığı, kontrast, ışık eşitliği. Doğal yüz hatları korunur — aşırı retouch yapılmaz." },
    ],
    relatedServices: ["kisisel-fotograf-cekimi", "studyo-fotograf-cekimi", "kurumsal-fotograf-cekimi", "moda-fotografcisi"],
    galleryCategory: "portre",
    metaTitle: "Gebze Portre Çekimi | Profesyonel Portre Fotoğrafçısı",
    metaDescription: "Gebze portre çekimi. Stüdyo + dış çekim, klasik/kurumsal/sanatsal stil. Kişiselleştirilmiş yönlendirme, hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "kisisel-fotograf-cekimi",
    name: "Kişisel Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "kişisel fotoğraf çekimi",
    secondaryKeywords: ["Gebze kişisel çekim", "kişisel marka çekimi", "yıldönümü çekimi", "self portrait"],
    shortDescription: "Sosyal medya, kişisel marka ya da bir hediye için size özel, doğal ve sanatsal portre seansı.",
    longDescription: `Kişisel fotoğraf çekimi, kendinizi farklı bir gözle görmenin ve bir dönemi belgelemenin en güzel yollarından biridir. Akse Fotoğrafçılık olarak kişisel çekimleri 'sıradan portre değil, hikaye anlatan kareler' olarak yorumluyoruz. Doğum günü, terfi, mezuniyet, evlilik yıldönümü gibi özel günlerde alınan kişisel çekim, hayatınızın o dönemini ölümsüzleştirir.

Çekim için stüdyo veya dış mekan seçenekleri var. Konsept (sportif, romantik, profesyonel, sanatsal) tercihinizi ön görüşmede konuşuyoruz. Saç-makyaj koordinasyonu Premium pakette dahil; hazırlık aşaması da çekimin parçası olur.

Edit teslim süremiz 7-10 gündür. Sosyal medya için 5 kareyi 3 gün içinde iletiyoruz, böylece çekim sonrası hemen paylaşıma hazır olursunuz.`,
    features: ["Kişisel konsept tercihi", "Stüdyo + dış çekim", "Saç-makyaj koordinasyonu (paket)", "1.5-2 saat kapsam", "Sosyal medya için optimize", "7-10 günde edit"],
    packages: [
      { name: "Sade", priceRange: "₺2.000 - ₺3.000", description: "Stüdyo, 1 saat", includes: ["1 saat seans", "30+ edit fotoğraf", "2 kıyafet", "Dijital teslim"] },
      { name: "Konsept", priceRange: "₺3.500 - ₺5.500", description: "Konseptli stüdyo veya dış çekim", includes: ["1.5 saat seans", "50+ edit fotoğraf", "Konsept dekor + 3 kıyafet", "USB + dijital"], popular: true },
      { name: "Premium", priceRange: "₺6.000 - ₺9.000", description: "Saç-makyaj + stüdyo + dış", includes: ["3 saat kapsam", "70+ edit fotoğraf", "Saç-makyaj dahil", "Stüdyo + dış mekan", "USB + dijital"] },
    ],
    faqs: [
      { question: "Hangi günler için kişisel çekim alabilirim?", answer: "Doğum günü, terfi, evlilik yıldönümü, mezuniyet, yeni bir başlangıç (iş, şehir, ilişki). Aslında her gün kişisel çekim alabilirsiniz — kendinizi belgelemek için özel bir günde olmanıza gerek yok." },
      { question: "Konsept örnekleri verir misiniz?", answer: "Romantik (çiçekler, pastel ton), sportif (egzersiz, açık hava), profesyonel (ofis, takım), sanatsal (low key, dramatic ışık), boho (doğa, free spirit). Sizin tercihinize göre uyarlıyoruz." },
      { question: "Saç-makyaj koordinasyonu nedir?", answer: "Çekim öncesi profesyonel saç-makyaj uzmanıyla 1-1.5 saatlik hazırlık. Stüdyomuza yakın anlaşmalı uzmanlarımızla çalışıyoruz; çekim için optimum görünüm hazırlanır." },
      { question: "Sosyal medya için ek format teslim ediliyor mu?", answer: "Evet — Instagram kare (1:1), reels dikey (9:16), Facebook yatay (16:9) formatlarda hazır kareler veriyoruz. Sosyal medya kullanımı için optimize." },
      { question: "Kaç kıyafet değişikliği yapabilirim?", answer: "Sade: 2, Konsept: 3, Premium: sınırsız (süre içinde). Kıyafetlerinizi önceden belirleyip aksesuarlarla zenginleştirmenizi öneriyoruz." },
      { question: "Hediye olarak alınabilir mi?", answer: "Tabi — hediye sertifikası hazırlıyoruz. Çift veya yakın arkadaş için harika bir hediyedir; alıcı çekim tarihini kendisi seçer." },
    ],
    relatedServices: ["portre-cekimi", "konsept-fotograf-cekimi", "moda-fotografcisi", "studyo-fotograf-cekimi"],
    galleryCategory: "portre",
    metaTitle: "Gebze Kişisel Fotoğraf Çekimi | Konseptli Kişisel Portre",
    metaDescription: "Gebze kişisel fotoğraf çekimi. Konseptli portre, stüdyo + dış çekim, saç-makyaj koordinasyonu. Sosyal medya için optimize. 0539 633 03 58",
  },

  {
    slug: "studyo-fotograf-cekimi",
    name: "Stüdyo Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "stüdyo fotoğraf çekimi",
    secondaryKeywords: ["Gebze stüdyo çekimi", "stüdyo portre", "fotoğraf stüdyosu Gebze", "kontrollü ışık çekimi"],
    shortDescription: "Tam donanımlı stüdyomuzda kontrollü ışıkla portre, ürün, bebek, aile çekimleri.",
    longDescription: `Stüdyo çekimi, ışığın, arka planın ve atmosferin tamamen kontrol altında olduğu profesyonel çekim ortamıdır. Akse Fotoğrafçılık stüdyosu Gebze Güzeller'de yer alıyor; 30 m² geniş alan, profesyonel ışık ekipmanı, 7 farklı arka plan rengi (beyaz, gri, siyah, krem, bordo, lacivert, yeşil) ve özel aksesuarlarla donatılmıştır.

Stüdyomuz portre, aile, bebek, çocuk, ürün, takı, biyometrik gibi farklı çekim türlerine uygundur. Softbox, octobox, beauty dish, ring light gibi farklı ışık modifikatörleri kullanarak her tür için optimum aydınlatmayı kuruyoruz.

Stüdyo çekimi dış çekime göre daha hızlı ve verimlidir; hava durumu, ulaşım, kalabalık gibi etkenler yoktur. Ortalama 1 saatte 50-80 başarılı kare üretebiliyoruz. Bebek, küçük çocuk ve yaşlılar için stüdyo özellikle konforludur.`,
    features: ["30 m² profesyonel stüdyo", "7 farklı arka plan rengi", "Softbox + octobox + beauty dish", "Tüm çekim türlerine uygun", "Klima + bebek konfor alanı", "Aksesuar koleksiyonu"],
    packages: [
      { name: "Saatlik", priceRange: "₺1.500 - ₺2.500", description: "1 saat stüdyo + temel ışık", includes: ["1 saat stüdyo kullanımı", "20+ edit fotoğraf", "1 arka plan", "Dijital teslim"] },
      { name: "Standart", priceRange: "₺2.500 - ₺4.000", description: "1.5 saat + çoklu set", includes: ["1.5 saat seans", "40+ edit fotoğraf", "3 farklı arka plan/set", "USB + dijital"], popular: true },
      { name: "Yarım Gün", priceRange: "₺5.000 - ₺7.500", description: "4 saat geniş kapsam", includes: ["4 saat stüdyo", "100+ edit fotoğraf", "Sınırsız set/arka plan", "Premium edit"] },
    ],
    faqs: [
      { question: "Stüdyoya ulaşım kolay mı?", answer: "Stüdyomuz Gebze Güzeller Mahallesi 927. Sk.'da, GOSB ve şehir merkezine 5-10 dakika mesafede. Park imkanımız var; toplu taşıma ile de ulaşılabilir." },
      { question: "Kendi ekipmanımı/aksesuarımı getirebilir miyim?", answer: "Tabi — kendi kıyafet, makyaj kiti, çekim için kullanmak istediğiniz aksesuarlarınızı getirebilirsiniz. Stüdyomuzda da koleksiyon mevcut." },
      { question: "Stüdyoyu kiralayabilir miyim?", answer: "Evet — 'Yarım Gün' veya tam gün stüdyo kiralama mümkündür. Profesyonel fotoğrafçılar için sade kiralama (ışık ekipmanı dahil) seçeneği de var." },
      { question: "Hangi çekim türleri için uygun?", answer: "Portre, aile, bebek, çocuk, ürün, takı, yemek, biyometrik. Geniş alan ürün çekimleri için uygundur; otomobil gibi büyük objeler için dış mekan tercih edilir." },
      { question: "Bebek için klima ayarlanabiliyor mu?", answer: "Evet — bebek/yenidoğan çekimi için stüdyo sıcaklığı 26-28°C'ye çıkarılabilir. Klima sessiz çalışır; bebeğin uykusunu bozmaz." },
      { question: "Saatlik kiralamada fotoğrafçı dahil mi?", answer: "Saatlik pakette fotoğrafçı + temel ışık dahildir. Sade stüdyo kiralama (sadece mekan + ekipman, fotoğrafçı yok) için ayrı fiyatlandırma mevcut." },
    ],
    relatedServices: ["portre-cekimi", "kisisel-fotograf-cekimi", "konsept-fotograf-cekimi", "moda-fotografcisi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Stüdyo Fotoğraf Çekimi | Profesyonel Fotoğraf Stüdyosu",
    metaDescription: "Gebze Güzeller fotoğraf stüdyosu. 30 m² alan, 7 arka plan, profesyonel ışık. Portre, aile, bebek, ürün, biyometrik. 0539 633 03 58",
  },

  {
    slug: "konsept-fotograf-cekimi",
    name: "Konsept Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "konsept fotoğraf çekimi",
    secondaryKeywords: ["Gebze konsept çekim", "tema fotoğraf", "konseptli portre", "konsept stüdyo"],
    shortDescription: "Belirli bir tema veya hikaye etrafında planlanmış, sanatsal ve dramatic konsept çekimleri.",
    longDescription: `Konsept çekim, sıradan bir portre çekiminin ötesine geçen, belirli bir tema, hikaye veya görsel kimlik etrafında planlanmış sanatsal çekim türüdür. Akse Fotoğrafçılık olarak konsept çekimi 'mood board → kostüm → mekan → ışık' planlamasıyla titizlikle hazırlıyoruz.

Popüler konseptler: vintage 60'lar, 80'ler retro, peri masalı, gothic, boho, sportif/active, profesyonel/CEO, hayat-stili, redaksiyonel/moda. Sizin verdiğiniz görsel referanslarla mood board oluşturup ona göre kıyafet, makyaj, mekan ve ışık planı çıkarıyoruz.

Konsept çekim hazırlığı 1-2 hafta sürer; kostüm, dekor temini ve makyaj koordinasyonu için zaman gerekir. Çekim 2-4 saatlik kapsamla gerçekleşir. Edit aşamasında konsepte uygun renk koreksiyonu (örn: vintage için film tonu, gothic için low key) uygulanır. Edit teslim süresi 14 gündür.`,
    features: ["Mood board planlaması", "Tema kostüm + dekor", "Saç-makyaj koordinasyonu", "Renk koreksiyonu (sanatsal)", "Stüdyo + dış mekan", "14 günde edit teslim"],
    packages: [
      { name: "Mini Konsept", priceRange: "₺3.500 - ₺5.500", description: "Sade tema, stüdyo", includes: ["1.5 saat seans", "30+ edit fotoğraf", "1 konsept tema", "USB + dijital"] },
      { name: "Klasik", priceRange: "₺6.000 - ₺9.000", description: "Detaylı konsept + makyaj", includes: ["3 saat seans", "60+ edit fotoğraf", "Tema kostüm + saç-makyaj", "Sanatsal renk grading"], popular: true },
      { name: "Premium", priceRange: "₺10.000 - ₺15.000", description: "Çoklu konsept + dış çekim", includes: ["Tam yarım gün (4-5 saat)", "100+ edit fotoğraf", "2-3 farklı konsept", "Stüdyo + dış mekan", "20x30 cm sanat baskı"] },
    ],
    faqs: [
      { question: "Konsept fikri yoksa siz öneri verir misiniz?", answer: "Tabi — kişiliğinize, ilgi alanlarınıza, gönderdiğiniz Instagram referanslarına bakarak 3-5 konsept öneriyoruz. Birlikte mood board oluşturup karar veriyoruz." },
      { question: "Kostüm temini sizde mi bizde mi?", answer: "Stüdyomuzda temel tema kostümleri var. Özel kostümler için yerel tema kıyafet kiralamacılarıyla anlaşmamız var; ek ücretle pakete eklenebilir." },
      { question: "Hangi konsept en popüler?", answer: "Vintage/retro, boho ve peri masalı en çok talep edilen konseptler. Erkekler için profesyonel/CEO ve sportif konsept tercih ediliyor." },
      { question: "Çekim öncesi ne kadar hazırlık süresi gerekiyor?", answer: "Mood board + kostüm + makyaj planı için 1-2 hafta. Konsept ne kadar detaylıysa süreç o kadar uzun olur. Acele talepler için 'Mini Konsept' paketi 5 gün hazırlık ile mümkün." },
      { question: "Erkek konsepti olur mu?", answer: "Tabi — vintage gentleman, sportif, CEO/professional, james bond tarzı, modern grunge gibi erkek konseptlerimiz popüler." },
      { question: "Edit aşamasında ne yapılır?", answer: "Konsepte uygun renk koreksiyonu (vintage film tonu, gothic low key, boho sıcak ton vs). Sıradan portre editinden farklı; sanat eserine yakınlaştıran detaylı çalışma." },
    ],
    relatedServices: ["portre-cekimi", "moda-fotografcisi", "kisisel-fotograf-cekimi", "studyo-fotograf-cekimi"],
    galleryCategory: "konsept",
    metaTitle: "Gebze Konsept Fotoğraf Çekimi | Tema ve Sanatsal Çekim",
    metaDescription: "Gebze konsept çekim. Mood board, tema kostüm, sanatsal renk grading. Vintage, gothic, boho, profesyonel konseptler. 0539 633 03 58",
  },

  {
    slug: "moda-fotografcisi",
    name: "Moda Fotoğrafçısı",
    category: "portre-kisisel",
    primaryKeyword: "moda fotoğrafçısı",
    secondaryKeywords: ["Gebze moda çekimi", "fashion photography", "lookbook çekimi", "model portfolyo"],
    shortDescription: "Marka koleksiyonu, e-ticaret lookbook'u veya model portfolyosu için redaksiyonel moda çekimi.",
    longDescription: `Moda fotoğrafçılığı, kıyafetin değil, kıyafetin yarattığı havanın çekildiği özel bir alandır. Akse Fotoğrafçılık olarak yerel butikler, yeni başlayan moda markaları, e-ticaret satıcıları ve yükselen modeller için fashion çekim hizmeti sunuyoruz.

Lookbook çekimi: bir koleksiyonun tüm parçalarını tutarlı bir görsel kimlikle stüdyoda veya dış mekanda çekiyoruz. Editorial çekim: bir tema/hikaye etrafında dramatic kompozisyonlar. E-ticaret çekim: temiz arka plan, ürün odaklı, ölçü-renk varyasyonu.

Stüdyomuzda 7 arka plan rengi, full-length aynalar, profesyonel ütülenmiş kıyafet asacağı bulunmaktadır. Saç-makyaj koordinasyonu opsiyoneldir; yerel anlaşmalı uzmanlarımız var. Çekim genelde 4-6 saatlik kapsam ister; bir koleksiyonun 20-30 parçası bu sürede çekilir.

Edit aşamasında ten tonu, kumaş kıvrımı, renk doygunluğu ve atmosfer ışığı detaylı işlenir. Edit teslim süremiz 14 gündür.`,
    features: ["Lookbook + editorial + e-ticaret", "7 arka plan + full-length ayna", "Saç-makyaj koordinasyonu", "Ütülenmiş hazırlık alanı", "20-30 parça/seans kapasite", "Marka renk paleti uyumu"],
    packages: [
      { name: "Mini Lookbook", priceRange: "₺5.000 - ₺8.000", description: "10 parça, sade arka plan", includes: ["3 saat seans", "10 parça (her biri 3-4 kare)", "30+ edit fotoğraf", "Web için optimize"] },
      { name: "Klasik Lookbook", priceRange: "₺10.000 - ₺15.000", description: "20-25 parça + makyaj", includes: ["5 saat kapsam", "20-25 parça", "Saç-makyaj dahil", "70+ edit fotoğraf", "USB + dijital"], popular: true },
      { name: "Editorial", priceRange: "₺16.000 - ₺25.000", description: "Konsept + tema editorial", includes: ["Tam gün çekim", "Konsept planlama", "Saç-makyaj + stylist", "100+ edit kare", "Sanatsal grading"] },
    ],
    faqs: [
      { question: "Modeli siz mi temin ediyorsunuz?", answer: "Marka kendisi modeli getirir veya yerel modelleme ajanslarıyla anlaşmamız var; uygun modeli birlikte buluruz. Model ücreti pakete dahil değildir." },
      { question: "E-ticaret için temiz beyaz arka plan yapıyor musunuz?", answer: "Tabi — Trendyol, Hepsiburada, n11 gibi platformların standartlarına uygun beyaz arka plan + sade ürün çekimi yapıyoruz. Ayrıca 'Ürün Fotoğrafçısı' hizmetimiz daha detaylı." },
      { question: "Saç-makyaj koordinasyonu nasıl yapılıyor?", answer: "Yerel anlaşmalı saç-makyaj uzmanlarımızla çalışıyoruz; çekim günü stüdyoya geliyorlar. Klasik ve Editorial paketlerinde dahildir." },
      { question: "Bir koleksiyonun 30 parçasını kaç günde teslim edersiniz?", answer: "Çekim 1 günde tamamlanır; edit 10-14 gündür. Acil ihtiyacınız varsa 5-7 günde 'priority' edit hizmetimiz mevcut (ek ücret)." },
      { question: "Marka renk paleti çekime nasıl yansır?", answer: "Çekim öncesi marka kit'inizden renk paleti, font, görsel kimliği inceliyoruz. Arka plan, ışık, renk grading marka kimliğiyle uyumlu hale getirilir." },
      { question: "Editorial çekim ne demek?", answer: "Bir tema/hikaye etrafında çekilen, dergi tarzı sanatsal kareler. Lookbook ürün odaklı, editorial atmosfer odaklı. Markanın 'high fashion' algısını oluşturmak için ideal." },
    ],
    relatedServices: ["konsept-fotograf-cekimi", "kisisel-fotograf-cekimi", "urun-fotograf-cekimi", "katalog-cekimi"],
    galleryCategory: "moda",
    metaTitle: "Gebze Moda Fotoğrafçısı | Lookbook ve Editorial Çekim",
    metaDescription: "Gebze moda fotoğrafçısı. Lookbook, e-ticaret, editorial çekim. Saç-makyaj koordinasyonu, marka renk uyumu. 0539 633 03 58",
  },

  {
    slug: "mezuniyet-fotograf-cekimi",
    name: "Mezuniyet Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "mezuniyet fotoğraf çekimi",
    secondaryKeywords: ["Gebze mezuniyet çekimi", "üniversite mezuniyet fotoğraf", "lise mezuniyet", "mezuniyet cübbesi çekimi", "ortaokul mezuniyet"],
    shortDescription: "Lise, üniversite veya yüksek lisans mezuniyetiniz için cübbe ve diploma ile profesyonel hatıra çekimleri.",
    longDescription: `Mezuniyet, eğitim hayatınızın en gururlu anlarından biri ve aile için unutulmaz bir başarı kutlaması. Akse Fotoğrafçılık olarak mezuniyet çekimini bireysel, çift ya da arkadaş grubu olarak yapıyoruz. Üniversite kampüsü, lise, ortaokul veya stüdyoda — istediğiniz mekan.

Cübbe ve kep çoğu üniversitede törenden hemen sonra iade edilir; bu yüzden mezuniyet çekimini ya tören günü kısa süreli ya da kiralık cübbe/kep ile sonradan yapmayı planlıyoruz. Stüdyomuzda farklı renklerde örnek cübbe ve kep mevcut; özel rengin sizin okulunuz için önemli olduğu bir durumda sizinkini getiriyorsunuz.

Çekim için diploma + diploma tüpü, mezuniyet kepi havaya atma, arkadaşlarla grup poz, aile pozu standart kareler. Mezuniyet partisi/yemeği çekimi de ek hizmet olarak sunuluyor. Edit teslim süremiz 7 gündür.`,
    features: ["Bireysel + çift + grup çekim", "Cübbe + kep + diploma", "Üniversite kampüsü dış çekim", "Stüdyo opsiyonu", "Aile + arkadaş kareleri", "7 günde edit teslim"],
    packages: [
      { name: "Mini", priceRange: "₺2.000 - ₺3.000", description: "Stüdyo, 30 dk", includes: ["30 dk seans", "20+ edit fotoğraf", "Diploma+kep çekimi", "Dijital teslim"] },
      { name: "Klasik", priceRange: "₺3.500 - ₺5.500", description: "Stüdyo + kampüs dış çekim", includes: ["1.5 saat seans", "50+ edit fotoğraf", "Aile kareleri", "USB + dijital"], popular: true },
      { name: "Hikaye", priceRange: "₺7.000 - ₺10.000", description: "Tam kapsam + 1 dk klip", includes: ["3 saat kapsam", "100+ edit fotoğraf", "Tören + arkadaş + aile", "1 dk mezuniyet klibi", "20x20 mini albüm"] },
    ],
    faqs: [
      { question: "Cübbe ve kep sizde var mı?", answer: "Stüdyomuzda 3 farklı renkte (siyah, lacivert, bordo) örnek cübbe ve kep var. Sizin okulunuzun spesifik rengine ihtiyacınız varsa kendi cübbenizle gelmeniz tavsiye edilir." },
      { question: "Üniversite kampüsünde çekim olur mu?", answer: "Tabi — Sabancı, Boğaziçi, Yıldız Teknik, Marmara, Kocaeli üniversiteleri kampüslerinde çekim deneyimimiz var. Üniversite genel kuralları gözetilerek hareket ediyoruz." },
      { question: "Tören günü çekim mümkün mü?", answer: "Mümkün ama zaman kısıtlı. Öncesinde tören akışını planlayıp sadece tören sonrası 30-45 dakikalık bir seans yapıyoruz. Daha kapsamlı çekim için törenden farklı bir gün öneriyoruz." },
      { question: "Aile pozları dahil mi?", answer: "Klasik ve Hikaye paketlerinde dahil. Mezuniyet sadece bireyin değil, ailenin de gurur anı. Aile bireyleriyle ortak kareler önemli." },
      { question: "Arkadaş grup çekimi olur mu?", answer: "Tabi — sınıf arkadaşlarıyla grup çekimi popüler. 4-6 kişilik gruplar için ek ücret yok; daha kalabalık gruplar için ek planlama." },
      { question: "Hangi konsepti öneriyorsunuz?", answer: "Klasik akademik (kampüs binası önünde, kütüphane), eğlenceli (kep havaya atma, arkadaş zıplama), ailevi (anne-baba ile diploma teslim töreni) en popüler temalar." },
    ],
    relatedServices: ["portre-cekimi", "kisisel-fotograf-cekimi", "aile-fotografcisi", "etkinlik-fotografcisi"],
    galleryCategory: "mezuniyet",
    metaTitle: "Gebze Mezuniyet Fotoğraf Çekimi | Üniversite Lise Çekimi",
    metaDescription: "Gebze mezuniyet fotoğrafçısı. Cübbe + kep + diploma, kampüs dış çekim, aile + arkadaş kareleri. 7 günde teslim. 0539 633 03 58",
  },

  {
    slug: "sosyal-medya-icin-fotograf-cekimi",
    name: "Sosyal Medya İçin Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "sosyal medya için fotoğraf çekimi",
    secondaryKeywords: ["içerik üretici çekim", "influencer çekimi", "sosyal medya içerik paketi", "reels uyumlu çekim"],
    shortDescription: "İçerik üreticileri, influencer'lar ve markalar için Instagram, TikTok ve LinkedIn formatlarına özel çekim.",
    longDescription: `Sosyal medya çekimi, klasik portre çekiminden farklı yaklaşım ister. Akse Fotoğrafçılık olarak influencer'lar, içerik üreticileri ve kişisel markası olan profesyoneller için sosyal medya formatlarına optimize edilmiş çekimler yapıyoruz.

Çekim sonunda Instagram (1:1 kare + 4:5 dikey), Reels/TikTok (9:16 dikey), LinkedIn (1:1 + 1.91:1 yatay), Pinterest (2:3 dikey) formatlarına hazır kareler teslim ediyoruz. Tek bir çekim seansından farklı platformlara uygun 50-100 kare çıkıyor.

Çekim sırasında 5-10 saniyelik 'behind the scenes' video kayıtları da alıyoruz; bunlar Reels/TikTok için zenginleştirici içeriklerdir. Konsept önerileri: ofis profesyonel (LinkedIn için), açık alan lifestyle (Instagram için), hareketli aksiyon (Reels için), oturma/lounge (Pinterest için).

Aylık içerik paketi alan içerik üreticilerine 1 ay boyunca yetecek 100-150 kare + 10-15 video klip üretiyoruz; tek seansda farklı kıyafetler ve mekanlarla 1 aylık içerik üretmek hem zaman hem para tasarrufu sağlar.`,
    features: ["Çoklu format (1:1, 4:5, 9:16, 1.91:1)", "Behind the scenes video", "Influencer + içerik üretici özel", "Aylık içerik paketi", "5-10 farklı kompozisyon", "Hızlı teslim (5 gün)"],
    packages: [
      { name: "Tek Seans", priceRange: "₺3.000 - ₺5.000", description: "1.5 saat, 30 kare", includes: ["1.5 saat seans", "30+ kare (çoklu format)", "5 dk BTS video", "5 günde teslim"] },
      { name: "Aylık İçerik", priceRange: "₺7.000 - ₺12.000", description: "1 aylık içerik üretim", includes: ["3 saat seans (4 kıyafet)", "100+ kare (her platform)", "10-15 BTS video klip", "Çekim takvimi planlama"], popular: true },
      { name: "Influencer Premium", priceRange: "₺15.000 - ₺22.000", description: "Aylık + saç-makyaj + stylist", includes: ["Tam yarım gün", "150+ kare", "Saç-makyaj + stylist dahil", "20+ video klip", "Marka collab desteği"] },
    ],
    faqs: [
      { question: "Hangi formatlar için kare alıyorsunuz?", answer: "Instagram feed (1:1, 4:5), Reels/Stories (9:16 dikey), LinkedIn (1:1, 1.91:1 yatay), Pinterest (2:3 dikey), Facebook (16:9). Tek çekimden tüm formatlar için optimum kareler çıkar." },
      { question: "Behind the scenes video nedir?", answer: "Çekim sırasında 5-10 saniyelik kısa videolar. Reels/TikTok'ta 'getting ready' veya 'photoshoot moments' olarak paylaşılan içeriklerdir; takipçi etkileşimini artırır." },
      { question: "Aylık içerik paketi nasıl çalışır?", answer: "1 günde 4 farklı kıyafet/konsept çekimi yapıp 1 ay boyunca yetecek 100-150 kare üretiyoruz. Sosyal medya takvim planlamanızda yardımcı oluyor; günlük post için ayrı çekime gerek kalmıyor." },
      { question: "Stylist ve makyaj dahil mi?", answer: "Influencer Premium pakette dahil. Diğer paketlerde ek ücretle eklenebilir; yerel anlaşmalı uzmanlarımız var." },
      { question: "Reels için video çekiyor musunuz?", answer: "Tabi — kısa video klipler (5-15 sn) BTS olarak alınıyor. Daha uzun reels için ayrı 'Sosyal Medya Video' hizmetimiz var." },
      { question: "Marka iş birlikleri (collab) için kullanılabilir mi?", answer: "Tabi — Influencer Premium pakette marka collab desteği var; kareleri marka brief'ine göre uyarlıyoruz." },
    ],
    relatedServices: ["instagram-icin-fotograf-cekimi", "kisisel-fotograf-cekimi", "moda-fotografcisi", "sosyal-medya-video-cekimi"],
    galleryCategory: "portre",
    metaTitle: "Gebze Sosyal Medya İçin Fotoğraf Çekimi | İnfluencer Çekim",
    metaDescription: "Gebze sosyal medya çekimi. Instagram, TikTok, LinkedIn formatları, BTS video, aylık içerik paketi. İçerik üretici uyumlu. 0539 633 03 58",
  },

  {
    slug: "instagram-icin-fotograf-cekimi",
    name: "Instagram İçin Fotoğraf Çekimi",
    category: "portre-kisisel",
    primaryKeyword: "instagram için fotoğraf çekimi",
    secondaryKeywords: ["instagram feed çekimi", "instagram reels çekimi", "Gebze instagram çekim", "feed planlama"],
    shortDescription: "Instagram feed estetik bütünlüğü, reels formatına uygun video ve story karelerine optimize edilmiş çekim.",
    longDescription: `Instagram çekimi, sadece güzel kareler değil; profilinizin görsel kimliği ve feed'inizin estetik bütünlüğü için stratejik bir hizmettir. Akse Fotoğrafçılık olarak Instagram odaklı çekimi şu üç format için ayrı ayrı planlıyoruz: feed (1:1 kare ve 4:5 dikey), Reels (9:16 dikey video), Stories (9:16 dikey kare ve video).

Feed planlama hizmetimiz: profilinizin renk paletini, ton/atmosferini ve görsel temasını analiz edip ona uygun çekimler yapıyoruz. 9-12 karelik bir 'feed grid' önerisi hazırlıyoruz; karelerin yan yana gelince oluşturduğu görsel uyum tasarlanıyor.

Reels için 5-15 saniyelik kısa video klipler çekiyoruz; trend olan müzik/efektlere uyumlu, 'hook' ile başlayan kompozisyonlar. Stories için günlük paylaşım için kullanabileceğiniz 'lifestyle' kareler.

Instagram odaklı çekim profesyonel bir görsel kimlik isteyen tüm hesaplar için uygun: kişisel marka, küçük işletme, butik, kafe, restoran, kreatif girişimci. Aylık paketle 1 ay boyunca yetecek içerik üretmek mümkün.`,
    features: ["Feed grid planlama", "Renk paleti uyumu", "Reels (9:16) video çekim", "Stories formatı", "Tema/atmosfer tasarımı", "Aylık içerik üretimi"],
    packages: [
      { name: "Tek Seans", priceRange: "₺2.500 - ₺4.000", description: "1 saat, 25 kare", includes: ["1 saat seans", "25+ feed kare", "5 reels klip", "5 günde teslim"] },
      { name: "Feed Planlama", priceRange: "₺5.000 - ₺8.000", description: "9-12 kare grid + reels", includes: ["2 saat seans", "12 kare grid", "10 reels klip", "Görsel kimlik öneri", "USB + dijital"], popular: true },
      { name: "Aylık İçerik", priceRange: "₺10.000 - ₺15.000", description: "1 aylık tüm formatlar", includes: ["4 saat kapsam", "100+ kare", "20+ reels", "Stories grafikleri", "Aylık post takvimi"] },
    ],
    faqs: [
      { question: "Feed grid planlama nedir?", answer: "Instagram profilinizin 9-12 karesinin yan yana geldiğinde oluşturduğu görsel uyum. Renk, ton, atmosfer açısından uyumlu kareler birlikte planlıyoruz." },
      { question: "Hangi tür hesaplar için uygun?", answer: "Kişisel marka, küçük işletme, butik, kafe, restoran, kreatif girişimci, blogger, içerik üretici. Profesyonel görünüm isteyen herkes için." },
      { question: "Reels için video da çekiyor musunuz?", answer: "Tabi — Feed Planlama ve Aylık İçerik paketlerinde reels videoları standart. Trend olan ses/efektlere uyumlu, 5-15 saniyelik klipler." },
      { question: "Görsel kimlik önerisi ne demek?", answer: "Renk paleti, font önerisi, hashtag stratejisi, post saatleri, hashtag araştırması — Instagram'da fark yaratacak detaylar. Aylık İçerik paketinde dahil." },
      { question: "Sosyal medya çekimiyle farkı nedir?", answer: "Sosyal Medya çekimi tüm platformlar için optimize. Instagram özel paketi sadece Instagram odaklıdır; feed grid, reels ve stories için detaylı planlama içerir." },
      { question: "Aylık post takvimi nedir?", answer: "Çekim sonrası karelerinizi 30 günlük takvime yerleştiriyoruz; hangi kare hangi gün, ne caption ile paylaşılacak — hazır plan teslim ediyoruz." },
    ],
    relatedServices: ["sosyal-medya-icin-fotograf-cekimi", "kisisel-fotograf-cekimi", "sosyal-medya-yonetimi-ve-danismanligi", "sosyal-medya-video-cekimi"],
    galleryCategory: "portre",
    metaTitle: "Gebze Instagram İçin Fotoğraf Çekimi | Feed ve Reels Çekim",
    metaDescription: "Gebze instagram çekimi. Feed grid planlama, reels video, stories formatı, aylık içerik takvimi. Görsel kimlik önerisi. 0539 633 03 58",
  },
];
