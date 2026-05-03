import type { Service } from "@/lib/types";

export const videoDroneServices: Service[] = [
  {
    slug: "video-cekimi",
    name: "Video Çekimi",
    category: "video-drone",
    primaryKeyword: "video çekimi",
    secondaryKeywords: ["Gebze video çekimi", "tanıtım video", "kurumsal video", "etkinlik video", "sosyal medya video"],
    shortDescription: "Tanıtım, etkinlik, ürün, kurumsal her türlü amaç için 4K profesyonel video çekimi.",
    longDescription: `Video çekimi, akse Fotoğrafçılık'ın en kapsamlı hizmet kategorilerinden biridir. Kurumsal tanıtım, ürün tanıtımı, etkinlik kayıt, sosyal medya, müzik klibi, eğitim videoları gibi farklı amaçlar için 4K sinema kalitesinde çekim yapıyoruz.

Ekipmanımız: Sony FX/A7 sinema kameraları, gimbal stabilizatör, slider, 4K monitör, profesyonel LED panel ışık, kablosuz mikrofon, drone (uygun durumda). Birden fazla kamera açısı (multi-cam) gereken kayıtlar için 2-3 kamera eş zamanlı kayıt yapıyoruz.

Edit + post-prodüksiyon: renk koreksiyonu (color grading), ses düzenleme, alt yazı, motion graphics, müzik (telifsiz), brand kit entegrasyonu. Final teslim formatları: 4K master, 1080p web, dikey 9:16 sosyal medya, kare 1:1 Instagram.

Hizmet türleri: Tanıtım filmi (1-3 dk sinematik), kurumsal eğitim videosu (5-15 dk), ürün tanıtım klibi (15-30 sn), event highlight (1-2 dk), müzik klibi (3-5 dk), webinar/röportaj kayıt. Her birine özel yaklaşım.`,
    features: ["4K sinema kayıt", "Gimbal + slider + multi-cam", "Color grading + alt yazı", "Telifsiz müzik koordinasyonu", "Çoklu format teslim", "Brand kit entegrasyonu"],
    packages: [
      { name: "Mini", priceRange: "₺5.000 - ₺9.000", description: "1 günde 1-1.5 dk klip", includes: ["1 günlük çekim", "1-1.5 dk video", "Renk koreksiyonu", "1 format teslim"] },
      { name: "Klasik", priceRange: "₺12.000 - ₺22.000", description: "1-2 günde 2-3 dk klip", includes: ["1-2 günlük çekim", "2-3 dk video", "Multi-cam + drone", "Çift dil alt yazı", "Tüm formatlar"], popular: true },
      { name: "Premium", priceRange: "₺28.000 - ₺55.000", description: "Sinema kalite, çoklu mekan", includes: ["3-5 günlük çekim", "3-5 dk film", "Profesyonel anlatıcı", "Motion graphics", "Sınırsız revizyon"] },
    ],
    faqs: [
      { question: "Tanıtım filmi ile video çekimi arasındaki fark?", answer: "Tanıtım Filmi spesifik bir paket (sinematik kurumsal anlatım). Video Çekimi genel kategori — etkinlik, ürün, eğitim, müzik klibi gibi farklı amaçlara hizmet eder." },
      { question: "Multi-cam ne demek?", answer: "Çoklu kamera açısı eş zamanlı kayıt. Röportaj, panel, etkinlik için kritik; 2-3 kameradan editle dinamik kurgu yapılır." },
      { question: "Drone şart mı?", answer: "Çekim türüne göre değişir. Kurumsal/fabrika tanıtımı için harika; röportaj/eğitim videosu için gerekmez. Klasik pakette dahil." },
      { question: "Müzik telif sorunu olur mu?", answer: "Telifsiz stok platformlardan (Musicbed, Artlist, Soundstripe) müzik kullanıyoruz; YouTube/Instagram Content ID engeli yaşanmaz." },
      { question: "Edit revizyon sınırı var mı?", answer: "Mini: 1, Klasik: 3, Premium: sınırsız. Major (büyük) revizyonlar için ek ücret söz konusu olabilir; brief netleştirilirse minimum revizyon yeterli olur." },
      { question: "Ses kalitesi nasıl?", answer: "Kablosuz yaka mikrofonu (lavalier) röportaj için, shotgun mikrofon ortam sesi için. Ses düzenleme post-prodüksiyon dahil." },
    ],
    relatedServices: ["tanitim-filmi-cekimi", "video-editoru", "drone-fotograf-ve-video", "youtube-video-cekimi"],
    galleryCategory: "video",
    metaTitle: "Gebze Video Çekimi | 4K Profesyonel Video Hizmeti",
    metaDescription: "Gebze video çekimi. 4K, multi-cam, gimbal, drone. Tanıtım, etkinlik, ürün, kurumsal video. Çift dil alt yazı. 0533 241 75 22",
  },

  {
    slug: "video-editoru",
    name: "Video Editörlüğü",
    category: "video-drone",
    primaryKeyword: "video editörü",
    secondaryKeywords: ["video kurgu", "Gebze video editor", "post-prodüksiyon", "sinematik kurgu", "düğün video editörü"],
    shortDescription: "Çekilmiş ham video kayıtlarınız için profesyonel kurgu, renk koreksiyonu ve final teslim hizmeti.",
    longDescription: `Video editörlüğü, ham kayıtlarınızı (kendi telefonunuzdan, başka fotoğrafçıdan, eski arşivden) profesyonel bir videoya dönüştüren post-prodüksiyon hizmetidir. Akse Fotoğrafçılık olarak düğün, etkinlik, kurumsal, sosyal medya, müzik klibi gibi farklı amaçlar için kurgu hizmeti veriyoruz.

Süreç: 1) Ham materyal teslim alma (USB/cloud), 2) Brief ve hedef tartışma, 3) Storyboard/akış planlama, 4) Kurgu (cut + transition + ses), 5) Renk koreksiyonu, 6) Müzik + alt yazı + grafik ekleme, 7) Revizyon + final teslim.

Ham materyal kalitesi sonucu doğrudan etkiler; düşük çözünürlük/sallantılı/ses sorunlu kayıtlar için 'restorasyon' ek hizmet. 4K master + 1080p web + dikey sosyal medya format teslim.

Düğün video editörlüğü özel bir kategori; düğün kayıtlarınız varsa sinematik düğün hikayesi formatında 5-10 dakikalık kurgu yapıyoruz. Eski VHS/DVD'leri dijitalleştirme + edit hizmeti de mevcut.`,
    features: ["Ham kayıt → profesyonel video", "Renk koreksiyonu (grading)", "Müzik + alt yazı + grafik", "Restorasyon (eski materyal)", "Çoklu format teslim", "Düğün özel kategorisi"],
    packages: [
      { name: "Sade", priceRange: "₺3.000 - ₺5.500", description: "1-2 dk klip kurgu", includes: ["1-2 dk video", "Renk koreksiyonu", "Müzik + alt yazı", "1 revizyon"] },
      { name: "Klasik", priceRange: "₺6.000 - ₺11.000", description: "3-5 dk klip + grafik", includes: ["3-5 dk video", "Motion graphics", "Çift dil alt yazı", "3 revizyon", "Tüm formatlar"], popular: true },
      { name: "Düğün/Premium", priceRange: "₺12.000 - ₺22.000", description: "5-10 dk düğün hikayesi", includes: ["5-10 dk sinematik kurgu", "Renk grading + grafik", "Sınırsız revizyon", "4K master teslim"] },
    ],
    faqs: [
      { question: "Kendi çektiğim ham video kayıtlarıyla geliştirebilir misiniz?", answer: "Tabi — telefon kayıtları dahil her tür ham materyal kabul. 4K kayıtlar daha iyi sonuç verir; FHD ve 720p de işlenebilir. Ön görüşmede kalite değerlendirmesi yapıyoruz." },
      { question: "Eski düğün videosu kurgulanabilir mi?", answer: "Evet — VHS/DVD/SD kart eski formatları dijitalleştirip kurguluyoruz. Restorasyon ek hizmettir; sallantılı görüntü stabilizasyon, ses temizleme, renk düzeltme yapılabilir." },
      { question: "Kurgu süresi ne kadar?", answer: "Kısa klip (1-3 dk): 1 hafta. Düğün hikayesi (5-10 dk): 3-4 hafta. Karmaşık kurgu (motion graphics + çoklu kayıt): 4-6 hafta." },
      { question: "Müzik seçimini siz mi yapıyorsunuz?", answer: "Brief'ten hareketle 3-5 telifsiz parça öneriyoruz; siz seçiyorsunuz. Belirli bir popüler şarkı isterseniz lisans/Content ID durumunu bildiriyoruz." },
      { question: "Kaç revizyon hakkım var?", answer: "Sade: 1, Klasik: 3, Premium: sınırsız. Brief net olduğunda minimum revizyon yeterli olur; revizyon hak'kını verimli kullanmak için ilk versiyonda detaylı geri dönüş bekliyoruz." },
      { question: "Alt yazı dili Türkçe + İngilizce mi?", answer: "Klasik ve Premium pakette çift dil dahil. Otomatik çeviri değil, manuel Türkçe + İngilizce. Daha fazla dil isteyenler için ek ücret." },
    ],
    relatedServices: ["video-cekimi", "tanitim-filmi-cekimi", "dugun-hikayesi", "youtube-video-cekimi"],
    galleryCategory: "video",
    metaTitle: "Gebze Video Editörlüğü | Profesyonel Video Kurgu Hizmeti",
    metaDescription: "Gebze video editörü. Ham kayıt → sinematik video. Renk grading, müzik, alt yazı, motion graphics. Düğün özel kategori. 0533 241 75 22",
  },

  {
    slug: "youtube-video-cekimi",
    name: "YouTube Video Çekimi",
    category: "video-drone",
    primaryKeyword: "youtube video çekimi",
    secondaryKeywords: ["YouTuber çekim", "kanal açılışı çekim", "YouTube set kurulum", "vlog çekim", "podcast video"],
    shortDescription: "YouTube kanalları açan içerik üreticileri için stüdyo set kurulum, çekim ve post-prodüksiyon paketi.",
    longDescription: `YouTube video çekimi, kanal açan içerik üreticilerinin profesyonel kalitede başlangıç yapması için özel paketimizdir. Akse Fotoğrafçılık olarak vlog, podcast, eğitim, ürün inceleme, oyun yorumlama, kişisel marka YouTuberları için stüdyomuzda çekim yapıyoruz.

Stüdyomuzda hazır YouTube setleri: 1) Klasik vlog seti (sandalye, kitaplık arka plan, sıcak ışık), 2) Podcast seti (2 koltuk + masa + mikrofon), 3) Eğitim seti (whiteboard + sunum ekranı), 4) Lifestyle seti (yatak, masa, doğal ışık). Her setin LED panel + softbox + ring light + multi-cam kurulumu hazır.

Çekim sonrası YouTube optimizasyon: 16:9 1080p ve 4K, intro/outro animasyonu, alt yazı (Türkçe + İngilizce CC), thumbnail tasarımı, kanal banner ve profil resmi tasarım. SEO uyumlu başlık + açıklama önerisi.

Aylık abonelik popüler: kanal başlangıcında her ay 4-8 video çekimi (haftalık paylaşım için). Sürekli içerik üretimi sayesinde YouTube algoritması kanalınızı favori sayar.`,
    features: ["Hazır YouTube setleri (vlog/podcast/eğitim)", "Multi-cam kurulum", "Mikrofon + ring light + LED panel", "Intro/outro animasyon", "Thumbnail + banner tasarım", "Aylık çekim aboneliği"],
    packages: [
      { name: "Tek Video", priceRange: "₺3.000 - ₺5.000", description: "1 video, 30-60 dk içerik", includes: ["1 günlük çekim", "1 video edit", "İntro/outro", "Thumbnail tasarım"] },
      { name: "Aylık 4 Video", priceRange: "₺10.000 - ₺16.000 / ay", description: "Aylık 4 video, haftalık paylaşım", includes: ["Aylık 4 çekim", "Tüm edit dahil", "SEO optimize", "Banner + profil"], popular: true },
      { name: "Kanal Açılışı Premium", priceRange: "₺18.000 - ₺28.000", description: "Tam kanal kurulumu + ilk 8 video", includes: ["Stüdyo set kurulumu", "İlk 8 video çekim + edit", "Branding (logo + intro)", "Strateji danışmanlığı"] },
    ],
    faqs: [
      { question: "YouTube setini siz mi sağlıyorsunuz?", answer: "Tabi — stüdyomuzda 4 farklı hazır YouTube seti mevcut. Sandalye, masa, kitaplık, ışık, mikrofon — hepsi kurulu. Sadece gelin, çekim başlasın." },
      { question: "Mikrofon kalitesi nasıl?", answer: "Profesyonel kondansatör mikrofon (Rode NT1, Shure SM7B) ses kalitesini sağlıyor. Ek olarak yaka mikrofonu yedek kayıt için." },
      { question: "Intro/outro animasyon dahil mi?", answer: "Evet — kanal logonuzdan hareketle 3-5 saniyelik standart intro animasyonu hazırlıyoruz. İlk videodan sonra her videoda kullanılabilir." },
      { question: "Thumbnail nasıl tasarlanıyor?", answer: "Çekim karelerinden + grafik metin + kontrastlı renkler ile YouTube'da tıklanır thumbnail. CTR (click-through rate) odaklı tasarım." },
      { question: "Aylık paket nasıl çalışır?", answer: "Her ay 4 çekim günü (1 günde 4 video çekim mümkün), haftalık paylaşıma uygun teslim. SEO uyumlu başlık + açıklama önerisi de dahil." },
      { question: "YouTube SEO desteği veriyor musunuz?", answer: "Aylık ve Premium pakette dahil. Anahtar kelime araştırması, başlık optimizasyonu, açıklama yazımı, tag önerisi." },
    ],
    relatedServices: ["video-cekimi", "video-editoru", "sosyal-medya-video-cekimi", "sosyal-medya-yonetimi-ve-danismanligi"],
    galleryCategory: "video",
    metaTitle: "Gebze YouTube Video Çekimi | Kanal Açılış Paketi",
    metaDescription: "Gebze YouTube çekim. Hazır setler, multi-cam, mikrofon, edit + thumbnail + banner. Aylık abonelik. 0533 241 75 22",
  },

  {
    slug: "sosyal-medya-video-cekimi",
    name: "Sosyal Medya Video Çekimi",
    category: "video-drone",
    primaryKeyword: "sosyal medya video çekimi",
    secondaryKeywords: ["Reels video çekimi", "TikTok video", "Instagram video", "kısa video çekimi", "viral video"],
    shortDescription: "Reels, TikTok, Instagram için trend uyumlu, viral potansiyeli yüksek 15-60 saniyelik kısa videolar.",
    longDescription: `Sosyal medya video çekimi, dikey 9:16 formatında 15-60 saniyelik trend uyumlu klipler üreten özel kategorimizdir. Akse Fotoğrafçılık olarak içerik üreticileri, marka hesapları, kişisel markalar için Reels/TikTok odaklı çekim yapıyoruz.

Yaklaşımımız: ilk 3 saniyede 'hook' (dikkat çekme), sonraki 10 saniye ana mesaj, son 5 saniye CTA (call to action). Trend olan müzikler, transition efektleri ve hook tarzları takip ediliyor; 2-3 hafta öncesi trend bizim için 'eski' kabul ediliyor.

Çekim ekipmanı: gimbal stabilizatör (akıcı hareket), gopro (POV açı), 4K kayıt (kropp esnekliği için), drone (mekan fonu), kablosuz mikrofon (konuşma odaklı). Aynı çekimden hem Reels (9:16) hem feed kare (1:1) çıkarmak için 4K kayıt kritik.

Aylık paket popüler: aylık 8-15 reels üretimi, sürekli içerik akışı sağlıyor. Algorithma sürekli paylaşım yapanı favori sayar; haftada 2-3 reels paylaşım optimum.`,
    features: ["Dikey 9:16 + 1:1 kare", "Hook + mesaj + CTA yapısı", "Trend uyumlu müzik + efekt", "Gimbal + gopro + drone", "Aylık paket sürekli içerik", "Hızlı teslim (3-5 gün)"],
    packages: [
      { name: "Tek Reels", priceRange: "₺1.500 - ₺2.500", description: "Tek video, 15-30 sn", includes: ["1 reels çekim + edit", "Trend müzik", "Alt yazı dahil", "3 günde teslim"] },
      { name: "Aylık 8", priceRange: "₺8.000 - ₺13.000 / ay", description: "Aylık 8 reels", includes: ["Aylık 8 reels üretimi", "Tüm trend kontrol", "Sosyal medya planlama", "Aylık takvim"], popular: true },
      { name: "Aylık 15", priceRange: "₺13.000 - ₺22.000 / ay", description: "Aylık 15 reels + strateji", includes: ["Aylık 15 reels", "Strateji danışmanlığı", "Hashtag araştırması", "Performans raporu"] },
    ],
    faqs: [
      { question: "Reels nasıl viral olur?", answer: "İlk 3 sn hook (dikkat çekici giriş), trend müzik kullanımı, ilgili hashtag'ler, doğru paylaşım saati. Garanti viral yok, ama bu öğeler şansı %200 artırır." },
      { question: "Trend müzik nasıl seçiliyor?", answer: "Haftalık olarak Türkiye TikTok/Instagram trend listesini takip ediyoruz. Trende olan ve markanızın tonuna uygun müzikler seçiliyor." },
      { question: "Aylık 8 reels yetiyor mu?", answer: "Haftada 2 paylaşım = ayda 8 = optimum. Daha fazla paylaşım algoritma tarafından spam algılanabilir; daha az ise akış kaybedilir." },
      { question: "Strateji danışmanlığı ne demek?", answer: "Hashtag araştırması, içerik takvimi planlama, hedef kitle analizi, rakip analizi, performans takibi. Aylık 15 pakette dahil." },
      { question: "Reels yapay zeka ile yapılabilir mi?", answer: "AI üretimi reels'ler şu anda etkisiz; kullanıcılar 'gerçek' içeriği seviyor. AI sadece müzik seçimi, alt yazı önerisi, trend araştırması gibi destek için kullanıyoruz." },
      { question: "Hangi platformlarda yayınlanır?", answer: "Instagram Reels, TikTok, YouTube Shorts, Facebook Reels — tüm dikey 9:16 platformları için aynı format. Tek çekimden tüm platformlarda paylaşım." },
    ],
    relatedServices: ["sosyal-medya-icin-fotograf-cekimi", "instagram-icin-fotograf-cekimi", "video-cekimi", "sosyal-medya-yonetimi-ve-danismanligi"],
    galleryCategory: "video",
    metaTitle: "Gebze Sosyal Medya Video Çekimi | Reels TikTok Çekim",
    metaDescription: "Gebze reels video çekimi. Trend müzik, gimbal, hook + CTA yapısı. Aylık 8-15 reels paketi. 0533 241 75 22",
  },

  {
    slug: "drone-fotograf-ve-video",
    name: "Drone Fotoğraf ve Video",
    category: "video-drone",
    primaryKeyword: "drone fotoğraf ve video",
    secondaryKeywords: ["Gebze drone çekim", "hava çekimi", "drone video", "havadan fotoğraf", "drone hizmeti"],
    shortDescription: "Düğün, gayrimenkul, fabrika, etkinlik, doğa için profesyonel drone hava fotoğraf ve video çekimi.",
    longDescription: `Drone fotoğraf ve video, sıradan bakış açısından ulaşılamayan dramatic kompozisyonlar yaratır. Akse Fotoğrafçılık olarak SHGM (Sivil Havacılık Genel Müdürlüğü) lisanslı pilotlarımızla profesyonel drone hizmeti sunuyoruz.

Ekipman: DJI Mavic 3 / DJI Air 3 (4K 5.1K kayıt), 30+ dakika uçuş süresi, hassas obstacle avoidance, RTK GPS pozisyon doğruluğu. Drone fotoğraf için 20MP RAW + 4K video eş zamanlı kayıt mümkün.

Hizmet alanları: Düğün/event hava genel kareler, gayrimenkul ve site genel görüntü, fabrika/OSB tanıtım, sahil/doğa fotoğrafları, mimari proje, spor/maç saha üstü, müsabaka takip, harita-survey çalışmaları.

Uçuş kuralları: yerleşim alanı üstünde maksimum 50m yükseklik, no-fly zone (havalimanı, devlet binası) yasak, gece uçuşu özel izin gerektirir, rüzgar 7 m/s üzerinde uçuş yapılmaz, yağışta uçulmaz. SHGM Sınıf B drone lisansımız mevcuttur; her uçuş öncesi 'NOTAM' kontrolü yapılır.`,
    features: ["DJI Mavic 3 / Air 3 4K-5.1K", "SHGM lisanslı pilot", "RAW + 4K eş zamanlı kayıt", "Düğün/gayrimenkul/fabrika uzmanlığı", "NOTAM kontrolü + uçuş izni", "Hava şartı uyumu"],
    packages: [
      { name: "Sade", priceRange: "₺2.500 - ₺4.000", description: "1 mekan, 30 dk uçuş", includes: ["30 dk uçuş", "20+ foto + 1-2 dk video", "Renk koreksiyonu", "Dijital teslim"] },
      { name: "Klasik", priceRange: "₺5.000 - ₺8.500", description: "Tam etkinlik/mekan kapsamı", includes: ["1.5-2 saat kapsam", "60+ foto + 3-5 dk video", "Düğün/event entegrasyonu", "USB + dijital"], popular: true },
      { name: "Premium", priceRange: "₺10.000 - ₺18.000", description: "Tam gün, çoklu mekan", includes: ["Tam gün uçuş", "150+ foto + uzun video", "Çoklu mekan (3+)", "Sinematik klip 1-2 dk", "Yüksek çözünürlük teslim"] },
    ],
    faqs: [
      { question: "Drone uçurmak için izin gerekiyor mu?", answer: "Sınıf B (4 kg üstü ticari drone) için SHGM lisansı zorunlu. Bizim lisansımız mevcut. Bireysel drone (DJI Mini gibi) hobi amaçlı uçuyorsa izin daha basit; ticari kullanım için yine pilot lisansı şart." },
      { question: "Hangi alanlarda drone uçamazsınız?", answer: "Havalimanı 9 km çevresi, devlet binaları üstü, askeri tesisler, kalabalık (5000+ kişi) etkinlikler, hapishane çevresi. Uçuş öncesi NOTAM kontrolü ile kesin durum doğrulanır." },
      { question: "Hava nasıl olmalı?", answer: "Yağışsız, 7 m/s altı rüzgar, 5°C üstü sıcaklık (batarya verimi için). Ayrıca obstacle avoidance için yeterli ışık (gün doğumundan önce/batımından sonra zor)." },
      { question: "Düğünde drone uçabilir mi?", answer: "Açık alan düğünlerinde, hava şartları uygunsa harika sonuç verir. Salon düğünlerinde drone uçmaz; sadece dış mekan genel kareler için." },
      { question: "Drone sesi rahatsız edici değil mi?", answer: "Modern drone'lar (Mavic 3) 70 dB civarı ses çıkarır; 30+ metre yükseklikte salon dışından duyulmaz. Sadece düğün/event için problem olmaz." },
      { question: "RAW + video eş zamanlı kayıt nedir?", answer: "Drone aynı uçuşta hem fotoğraf çekiyor hem video kaydediyor — tek uçuştan iki materyal çıkıyor. Time + bütçe avantajı." },
    ],
    relatedServices: ["havadan-fotograf", "video-cekimi", "tanitim-filmi-cekimi", "dugun-hikayesi"],
    galleryCategory: "drone",
    metaTitle: "Gebze Drone Fotoğraf ve Video | Hava Çekimi Hizmeti",
    metaDescription: "Gebze drone çekim. SHGM lisanslı pilot, DJI Mavic 3 4K. Düğün, gayrimenkul, fabrika, doğa. NOTAM kontrolü. 0533 241 75 22",
  },

  {
    slug: "havadan-fotograf",
    name: "Havadan Fotoğraf",
    category: "video-drone",
    primaryKeyword: "havadan fotoğraf",
    secondaryKeywords: ["aerial photography", "Gebze hava fotoğraf", "kuş bakışı çekim", "drone fotoğraf", "hava perspektif"],
    shortDescription: "Drone ile hava perspektifinden çekilmiş kuş bakışı manzara, mimari ve doğa fotoğrafları.",
    longDescription: `Havadan fotoğraf, drone ile hava perspektifinden çekilmiş yüksek çözünürlüklü görsellerdir. Akse Fotoğrafçılık olarak Bayramoğlu sahili, Eskihisar limanı, Hereke kıyıları, Gebze tarihi alanları, sanayi sitelerinin hava görüntülerini çekiyoruz.

Hava fotoğrafının drone video'dan farkı: tek tek özenle planlanmış kareler, daha yüksek çözünürlük (20MP+ RAW), daha uzun pozlama (gün doğumu/batımı), tilt-shift composit (yatay düzeltme). Bir hava fotoğrafı birkaç saniyelik video kaydından çok daha yüksek çözünürlüklü baskı/billboard kalitesi sunar.

Kullanım alanları: gayrimenkul site genel kareler, fabrika/OSB pazarlama, restoran/otel açık alan kareler, doğa/sahil sanat fotoğrafı, mimari proje sunumu, yarışma/dergi başvuru.

Çekim yöntemi: gün doğumu/batımı altın saat, mavi saat (gün batımından sonra), öğle saati (yüksek kontrast). Her kompozisyon için 5-10 farklı yükseklik denenmesi standart. RAW + JPG eş zamanlı kayıt.`,
    features: ["20MP RAW + altın/mavi saat", "Tilt-shift composit", "Yüksek çözünürlük baskı kalitesi", "Yarışma/dergi format", "Çoklu yükseklik denemesi", "SHGM lisanslı pilot"],
    packages: [
      { name: "Sade", priceRange: "₺2.000 - ₺3.500", description: "1 mekan, 1 saat", includes: ["1 saat uçuş", "20+ RAW + JPG", "Renk koreksiyonu", "Web format"] },
      { name: "Klasik", priceRange: "₺4.000 - ₺7.000", description: "2-3 mekan + altın saat", includes: ["2 saat uçuş", "50+ kare", "Altın + mavi saat çekim", "Yüksek çözünürlük baskı"], popular: true },
      { name: "Sanat", priceRange: "₺8.000 - ₺14.000", description: "Çoklu mekan + yarışma format", includes: ["Tam gün uçuş", "100+ kare", "Yarışma format", "Tilt-shift composit", "Sanat baskı (50x70 cm) hediye"] },
    ],
    faqs: [
      { question: "Havadan fotoğraf drone video'dan nasıl farklı?", answer: "Foto: tek tek özenle planlanmış kareler, yüksek çözünürlük, baskı/yarışma kalitesi. Video: hareketli kayıt, 4K çözünürlük, klip için. İkisi farklı çıktı." },
      { question: "Yarışma için kullanılabilir mi?", answer: "Evet — Skypixel, Aerial Awards, World Drone Photography Awards gibi yarışmalara uygun format + grading hizmeti. Sanat pakedinde dahil." },
      { question: "Tilt-shift composit nedir?", answer: "Hava perspektifinden çekilen kompozisyonlarda yatay/vertical eğikliği post-prodüksiyonda düzeltme tekniği. Mimari yapı çekiminde kritik." },
      { question: "En iyi saat hangisi?", answer: "Altın saat (gün doğumu/batımı) yumuşak ışık + uzun gölge ile dramatic. Mavi saat ışıklar yandığında atmosferik. Öğle saati yüksek kontrast — her senaryoya uygun saat farklı." },
      { question: "Kaç yükseklik deneniyor?", answer: "Bir kompozisyon için 5-10 farklı yükseklik (50m, 100m, 150m). Her yüksek farklı perspektif — çekim sonrası en güzeli seçilir." },
      { question: "Sahil fotoğrafı için drone gerekli mi?", answer: "Sahilde drone hava perspektifi olağanüstü görsel sunar — kıyı + dalga + plaj kompozisyonu sıradan açıdan elde edilemez." },
    ],
    relatedServices: ["drone-fotograf-ve-video", "mimari-fotograf", "emlak-fotografcisi", "dis-cekim-fotograf"],
    galleryCategory: "drone",
    metaTitle: "Gebze Havadan Fotoğraf | Drone Aerial Photography",
    metaDescription: "Gebze hava fotoğrafı. RAW 20MP, altın+mavi saat, tilt-shift composit. Yarışma format, sanat baskı. 0533 241 75 22",
  },

  {
    slug: "360-derece-fotograf-cekimi",
    name: "360° Fotoğraf Çekimi",
    category: "video-drone",
    primaryKeyword: "360 derece fotoğraf çekimi",
    secondaryKeywords: ["360 panoramik fotoğraf", "Google Street View çekim", "VR fotoğraf", "panaromik çekim", "360 sanal tur"],
    shortDescription: "Google Street View, sanal tur ve VR uygulamaları için 360° panoramik fotoğraf çekimi.",
    longDescription: `360° fotoğraf, bir mekanı tüm açılardan tek bir interaktif görüntüde gösteren özel formatdır. Akse Fotoğrafçılık olarak Google Street View Trusted Photographer kapsamında 360° çekim hizmeti sunuyoruz; Google Maps'te işletmenizin 'içine girerek' gezilen sanal tur eklenebiliyor.

Ekipman: Insta360 X4 / Ricoh Theta Z1 360° kameralar, profesyonel tripod, HDR kayıt için 5+ pozlama bracketing. Tek çekimde 11K çözünürlük (Theta Z1) sağlanır.

Kullanım alanları: Google Street View Inside (otel, restoran, salon, klinik için), sanal tur web sitesi (gayrimenkul, müze, mağaza), VR uygulama içeriği, Facebook 360° post, eğitim materyali. Google'da işletmenizi sanal tur ile aratan müşteri %50 daha yüksek dönüşüm gösteriyor.

Çekim sırasında her odada 3-5 ayrı 360° fotoğraf alıyoruz; tripod görünür olmaması için fotoğrafçı saklanma + post-prodüksiyonda tripod retouch yapılıyor. HDR kayıt ile pencere dışı + iç detay aynı karede net çıkıyor.`,
    features: ["Insta360 X4 / Theta Z1 11K", "Google Street View Trusted", "HDR + tripod retouch", "Sanal tur platform entegrasyonu", "VR + Facebook 360° format", "Çoklu oda çekim"],
    packages: [
      { name: "Mini", priceRange: "₺2.500 - ₺4.000", description: "5 oda, sade çekim", includes: ["5 oda × 1 360° kare", "Renk koreksiyonu", "Web format", "Online galeri"] },
      { name: "Klasik", priceRange: "₺5.500 - ₺9.000", description: "10-15 oda + Google Street View", includes: ["10-15 oda", "HDR kayıt", "Google Street View entegrasyonu", "Sanal tur link"], popular: true },
      { name: "Premium", priceRange: "₺11.000 - ₺18.000", description: "30+ oda + tam sanal tur", includes: ["30+ oda", "Sanal tur platform setup", "Hot spot navigasyon", "Yıllık güncelleme"] },
    ],
    faqs: [
      { question: "Google Street View Trusted ne demek?", answer: "Google'ın onayladığı, işletme içi 360° çekim yapma yetkisi olan fotoğrafçılar. Kareler doğrudan Google Business profile'a entegre edilir; Maps'te işletmeniz 'gezilebilir' olur." },
      { question: "360° fotoğraf ile sanal tur farkı?", answer: "360° fotoğraf tek bir noktadan çekilmiş panoramik kare. Sanal tur birden fazla 360° fotoğrafın 'hot spot'larla bağlanmış halı; kullanıcı odadan odaya geçer." },
      { question: "Hangi platformlarda kullanabilirim?", answer: "Google Maps Street View, Facebook 360, web sitesi (Three.js + viewer), Matterport, Kuula, VR uygulamalar. Her platform için ayrı format teslim ediyoruz." },
      { question: "Tripod görünüyor mu?", answer: "Çekim sırasında görünür ama post-prodüksiyonda 'nadir' tekniği ile alttaki tripod kısmı temizleniyor; doğal görünüm." },
      { question: "Kaç oda makul?", answer: "Küçük işletme: 5-10 oda. Orta otel/restoran: 15-25 oda. Müze/büyük tesis: 30+ oda. Premium pakette tüm yapı kapsanabilir." },
      { question: "Yıllık güncelleme nedir?", answer: "Premium pakette dahil — yılda 1 kez yeni dekor/kuruluş güncellemesi sonrası tekrar çekim. Sanal tur sürekli güncel kalır." },
    ],
    relatedServices: ["sanal-tur-cekimi", "mekan-fotografcisi", "otel-fotograf-cekimi", "restoran-cekimi"],
    galleryCategory: "360-sanal-tur",
    metaTitle: "Gebze 360° Fotoğraf Çekimi | Google Street View",
    metaDescription: "Gebze 360 derece fotoğraf. Google Street View Trusted, sanal tur, VR format. HDR, 11K çözünürlük. 0533 241 75 22",
  },

  {
    slug: "sanal-tur-cekimi",
    name: "Sanal Tur Çekimi",
    category: "video-drone",
    primaryKeyword: "sanal tur çekimi",
    secondaryKeywords: ["virtual tour", "Gebze sanal tur", "interaktif sanal tur", "Matterport çekim", "3D sanal tur"],
    shortDescription: "Otel, restoran, klinik, mağaza, müze gibi mekanlar için interaktif 3D sanal tur deneyimi.",
    longDescription: `Sanal tur, müşterinizin web sitesinden veya Google Maps'ten işletmenize 'içeri girerek' gezdiği interaktif 3D deneyimdir. Akse Fotoğrafçılık olarak Matterport ve Kuula platformlarında sanal tur kurulumu yapıyoruz.

Süreç: 1) Mekan keşfi, 2) Çoklu noktada 360° fotoğraf çekimi (her oda 3-5 nokta), 3) Hot spot navigasyon kurulumu (kullanıcı bir butona tıklayarak odadan odaya geçer), 4) Bilgi etiketleri (örn: 'Bu odada wi-fi var', 'Bu masada rezervasyon mümkün'), 5) Web sitesine veya Google'a entegrasyon.

Sanal tur kullanım istatistikleri: e-ticaret + sanal tur olan otellerde rezervasyon dönüşüm oranı %30 artıyor. Restoranlarda 'menüye bakma' süresi %50 uzuyor. Klinik/güzellik salonu için müşteri 'ortamı görerek' rezervasyon yapıyor — ilk randevu konfor seviyesi yüksek.

VR uygulamaları (Oculus, Meta Quest) için ek format teslim ediliyor. Yıllık abonelik mevsimsel değişikliklerin (yeni dekor, koleksiyon) sanal tura yansımasını sağlar.`,
    features: ["Matterport + Kuula platform", "Çoklu nokta 360° çekim", "Hot spot navigasyon", "Bilgi etiketleri", "VR + web + Maps entegrasyon", "Yıllık güncelleme paketi"],
    packages: [
      { name: "Mini", priceRange: "₺6.000 - ₺10.000", description: "10-15 nokta, küçük mekan", includes: ["10-15 360° nokta", "Hot spot navigasyon", "Web embed", "Online tur link"] },
      { name: "Klasik", priceRange: "₺12.000 - ₺22.000", description: "30+ nokta, otel/restoran", includes: ["30+ nokta", "Bilgi etiketleri", "Google Street View entegre", "VR format"], popular: true },
      { name: "Premium", priceRange: "₺28.000 - ₺50.000", description: "Müze/AVM tam kapsam", includes: ["100+ nokta", "Tam sanal tur platformu", "Mobil app entegrasyonu", "Yıllık güncelleme dahil"] },
    ],
    faqs: [
      { question: "Sanal tur 360° fotoğraftan nasıl farklı?", answer: "360° fotoğraf tek bir noktadan panoramik kare. Sanal tur birden fazla 360° fotoğrafın hot spot'larla bağlanması; kullanıcı odadan odaya 'yürür' gibi geçer." },
      { question: "Hangi platformlar kullanılıyor?", answer: "Matterport (premium 3D sanal tur), Kuula (web entegrasyonu kolay), Google Street View (Maps entegrasyonu). Her platform farklı amaç için." },
      { question: "Ekran video kaydı yerine sanal tur niye?", answer: "Sanal tur interaktif — kullanıcı kendi yönünü seçer. Video pasif izleme. Sanal tur kullanım süresi 3-5x daha uzun, dönüşüm oranı 2-3x yüksek." },
      { question: "Web sitemize nasıl ekliyoruz?", answer: "iFrame embed kodu veriyoruz; web siteniz için sade kopyala-yapıştır. Mobil + desktop responsive otomatik." },
      { question: "VR ile uyumlu mu?", answer: "Klasik ve Premium pakette VR format dahil. Oculus/Meta Quest cihazlarda izlenebilir; mağaza/otel deneyim atriumları için kullanılır." },
      { question: "Yıllık güncelleme şart mı?", answer: "Mevsim değişiklikleri, yeni dekor, yeni hizmetler için yılda 1 kez güncelleme yapılması ideal. Premium pakette dahil; diğer paketlerde ek hizmet." },
    ],
    relatedServices: ["360-derece-fotograf-cekimi", "mekan-fotografcisi", "otel-fotograf-cekimi", "emlak-fotografcisi"],
    galleryCategory: "360-sanal-tur",
    metaTitle: "Gebze Sanal Tur Çekimi | Virtual Tour Hizmeti",
    metaDescription: "Gebze sanal tur. Matterport, Kuula, Google Street View. Hot spot navigasyon, VR, web embed. 0533 241 75 22",
  },
];
