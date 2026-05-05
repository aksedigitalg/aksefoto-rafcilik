import type { Service } from "@/lib/types";

export const etkinlikServices: Service[] = [
  {
    slug: "etkinlik-fotografcisi",
    name: "Etkinlik Fotoğrafçısı",
    category: "etkinlik",
    primaryKeyword: "etkinlik fotoğrafçısı",
    secondaryKeywords: ["Gebze etkinlik fotoğrafı", "şirket etkinlik çekimi", "konferans fotoğrafçısı", "lansman çekimi", "fuar fotoğraf"],
    shortDescription: "Şirket etkinlikleri, konferans, lansman, fuar ve gala için profesyonel etkinlik kayıt çekimi.",
    longDescription: `Etkinlik fotoğrafı, bir etkinliğin atmosferini, konuşmacılarını, katılımcılarını ve kilit anlarını belgeleyen kapsamlı bir hizmettir. Akse Fotoğrafçılık olarak şirket toplantıları, konferans, lansman, fuar, gala, kongre ve B2B etkinlikleri çekiyoruz.

Çekim yaklaşımı: belgesel + portre + atmosferik. Konuşmacı sahnede iken telefoto lens (70-200mm) ile yakın ifade kareleri; salondan geniş açı (24-70mm) ile katılımcı görüntüleri; kokteyl molasında portre + grup pozları. Tek bir etkinlikte 500-1000 kare üretilir; en başarılı 200-400'ü edit edilir.

Hızlı teslim önemlidir; etkinlik sonrası 24 saat içinde 10-20 'preview' kare iletmemiz, müşterinin hemen sosyal medya/PR paylaşımı yapabilmesi için kritik. Tam edit 7-10 günde teslim edilir. Yıllık sponsor etkinlikleri için 'event package' aboneliği avantajlı.

Çoklu kameraman: büyük etkinliklerde (200+ kişi) 2-3 fotoğrafçı ekibi ile sahne + salon + lobi eş zamanlı kapsam. Konuşmacı röportajı için sade ışık kurulumu yapılabilir; gala balıkları için flaş kullanılmaz, mevcut salon ışığı korunur.`,
    features: ["Belgesel + portre + atmosferik", "Telefoto + geniş açı eş zamanlı", "Çoklu kameraman opsiyonu (büyük etkinlik)", "24 saat preview, 10 gün tam teslim", "Konuşmacı + katılımcı + atmosfer", "Yıllık event aboneliği"],
    packages: [
      { name: "Mini", priceRange: "₺3.000 - ₺5.000", description: "Tek etkinlik, 2-3 saat", includes: ["1 fotoğrafçı, 2-3 saat", "100+ edit kare", "24 saat preview", "Online galeri"] },
      { name: "Klasik", priceRange: "₺6.000 - ₺10.000", description: "Yarım gün etkinlik", includes: ["1 fotoğrafçı, 5-6 saat", "200+ kare", "Sosyal medya hızlı paylaşım", "USB + dijital"], popular: true },
      { name: "Premium", priceRange: "₺12.000 - ₺22.000", description: "Tam gün, 2 kameraman + video", includes: ["2 fotoğrafçı + 1 videograf", "500+ kare", "30 sn highlight klibi", "Konuşmacı röportajı"] },
    ],
    faqs: [
      { question: "Konferans çekiminde flaş kullanıyor musunuz?", answer: "Konuşmacının dikkatini dağıtmamak için flaş kullanmıyoruz. Yüksek ISO + telefoto lens ile salon ışığında çekim yapıyoruz. Modern kameralarda 6400 ISO temiz görüntü üretir." },
      { question: "Etkinlik sırasında sosyal medya için hızlı kareler iletilebilir mi?", answer: "Evet — etkinlik devam ederken her 30-60 dakikada bir 5-10 kareyi WhatsApp/email ile iletebiliriz. Anlık paylaşım için kritik. Standart pakette 24 saat preview var." },
      { question: "Konuşmacı portresi yapıyor musunuz?", answer: "Tabi — etkinlik sonrası 5-10 dakikalık ek seansla profesyonel konuşmacı portreleri çekiyoruz. Genelde sahnenin kenarında veya basın alanında." },
      { question: "Highlight klibi nedir?", answer: "Etkinliğin 30-60 saniyelik sinematik özeti. Premium pakette dahil; sosyal medya sonrası paylaşım için ideal. En iyi anlar müzik eşliğinde kurgulanır." },
      { question: "Çoklu sahneli etkinlikte (örn: workshop'lar) kapsam nasıl?", answer: "Çoklu salon için ek fotoğrafçılar gerekir. 3+ salon paralel etkinlik için Premium paketinde +2 fotoğrafçı standardı." },
      { question: "Yıllık event aboneliği nedir?", answer: "Şirketinizin yıl içindeki tüm etkinliklerini aynı stüdyodan çekme; aynı görsel kimlik ve fiyat avantajı. 5+ etkinliği olan şirketler için ideal." },
    ],
    relatedServices: ["konser-fotografcisi", "kurumsal-fotograf-cekimi", "tanitim-filmi-cekimi", "davet-cekimi"],
    galleryCategory: "etkinlik",
    metaTitle: "Gebze Etkinlik Fotoğrafçısı | Konferans, Lansman, Fuar Çekimi",
    metaDescription: "Gebze etkinlik fotoğrafçısı. Konferans, lansman, fuar, gala. 24 saat preview, çoklu kameraman, highlight klibi. 0539 633 03 58",
  },

  {
    slug: "konser-fotografcisi",
    name: "Konser Fotoğrafçısı",
    category: "etkinlik",
    primaryKeyword: "konser fotoğrafçısı",
    secondaryKeywords: ["Gebze konser fotoğrafı", "müzik etkinliği çekimi", "festival fotoğraf", "sahne çekimi", "düşük ışık konser"],
    shortDescription: "Konser, festival ve müzik etkinlikleri için sahne enerjisini ve kalabalık coşkusunu yakalayan profesyonel çekim.",
    longDescription: `Konser fotoğrafı, düşük ışık + hızlı hareket + dramatic sahne ışıklandırma kombinasyonu nedeniyle teknik açıdan en zorlu çekim alanlarından biridir. Akse Fotoğrafçılık olarak yerel müzisyenler, festival organizatörleri ve etkinlik şirketleri için konser çekimi yapıyoruz.

Düşük ışıkta keskin görüntü için yüksek ISO performanslı kameralar (6400-12800 ISO temiz) ve geniş açıklıklı lensler (f/2.8 veya daha geniş) kullanıyoruz. Hızlı shutter (1/250+) ile hareket eden müzisyen keskin yakalanır. Stage light değişimi sırasında auto-WB yerine manual ayar — renk doğruluğu için.

Çekim pozisyonu önemli: sahne önü 'photo pit' alan, salon ortası genel kareler, sahne yanı backstage perspektifi. Aynı şarkıda farklı pozisyondan çekim yaparak çoklu açı sağlıyoruz. Müzisyenin ifade ve enerjisi için yüz ekspresyonu odaklı yakın çekim öne çıkar.

Edit aşamasında konsere özgü dramatic grading (low key veya high contrast) uygulanır; gürültü azaltma yüksek ISO kareler için kritik. PR + albüm kapağı + sosyal medya kullanımı için ek format.`,
    features: ["Düşük ışık uzmanlığı (6400+ ISO)", "Geniş açıklık f/2.8 lens", "Sahne önü + salon + backstage", "Hızlı shutter hareketli kayıt", "Dramatic edit grading", "PR + albüm format"],
    packages: [
      { name: "Sade", priceRange: "₺3.500 - ₺5.500", description: "Tek konser, 1.5 saat", includes: ["1.5 saat kapsam", "100+ edit kare", "1 müzisyen/grup odaklı", "Online galeri"] },
      { name: "Klasik", priceRange: "₺6.500 - ₺10.500", description: "Tam konser + backstage", includes: ["3-4 saat kapsam", "200+ kare", "Sahne + salon + backstage", "Müzisyen portresi"], popular: true },
      { name: "Festival", priceRange: "₺12.000 - ₺22.000", description: "Çok günlük festival", includes: ["1-3 günlük festival", "500+ kare", "2 fotoğrafçı", "Highlight klibi 30 sn", "PR + albüm format"] },
    ],
    faqs: [
      { question: "Konser ışığı çok karanlık, nasıl çekiyorsunuz?", answer: "Yüksek ISO performanslı (Sony A7 IV, Canon R6 II) kameralar 6400-12800 ISO temiz görüntü üretir. Geniş açıklıklı lens (f/1.4 veya f/2.8) az ışıkta da net çeker." },
      { question: "Stroboscope/spot ışıklarda renk doğru çıkıyor mu?", answer: "Manual white balance ayarı yapıyoruz; auto-WB hızlı değişen sahne ışığında yetersiz kalır. RAW kayıt + post-prodüksiyonda renk düzeltmesi standart." },
      { question: "Sahne önü 'photo pit' alanında çekim alabilir miyim?", answer: "Konser organizatörünün izniyle sahne önü 'photo pit' alanında çekim yapıyoruz. İlk 3 şarkı (standart) veya tam konser izni alabiliriz." },
      { question: "Backstage çekimi etik mi?", answer: "Sadece müzisyen + ekibinin onayıyla. Genelde rahat anları, sahne öncesi hazırlık, sahne sonrası rahatlama anları çekiliyor. Hassas momentler atlanır." },
      { question: "Festival için kaç fotoğrafçı?", answer: "Tek sahne festivalinde 1; çoklu sahne (2+) festivalinde sahne başına 1 fotoğrafçı. 3 günlük festival için ideal 2-3 kişilik ekip." },
      { question: "Müzisyen albüm kapağı için kullanılabilir mi?", answer: "Evet — yüksek çözünürlüklü RAW + edit teslim. Festival paketinde albüm kapağı format ek hizmet olarak dahil." },
    ],
    relatedServices: ["etkinlik-fotografcisi", "spor-fotografcisi", "video-cekimi", "kurumsal-fotograf-cekimi"],
    galleryCategory: "etkinlik",
    metaTitle: "Gebze Konser Fotoğrafçısı | Festival ve Müzik Etkinliği",
    metaDescription: "Gebze konser fotoğrafçısı. Düşük ışık uzmanlığı, sahne + backstage, festival çekimi. PR + albüm format. 0539 633 03 58",
  },

  {
    slug: "spor-fotografcisi",
    name: "Spor Fotoğrafçısı",
    category: "etkinlik",
    primaryKeyword: "spor fotoğrafçısı",
    secondaryKeywords: ["Gebze spor fotoğraf", "futbol maç çekimi", "antrenman fotoğraf", "spor etkinliği", "atletizm çekim"],
    shortDescription: "Futbol, basketbol, atletizm gibi spor etkinlikleri ve antrenman seansları için hızlı hareket çekimi.",
    longDescription: `Spor fotoğrafçılığı, hareket halindeki sporcuyu keskin yakalayabilmek için yüksek shutter hızı, hızlı autofocus ve uzun telefoto lens gerektiren teknik bir alandır. Akse Fotoğrafçılık olarak yerel kulüpler, spor okulları, atletizm yarışları ve hobi sporcuları için çekim yapıyoruz.

Ekipman: 70-200mm f/2.8 + 100-400mm telefoto lens, 1/2000 shutter hızı, 30+ FPS burst mode kayıt, eye-AF ile yüze otofokus. Saha kenarından hareketli kareleri yakalamak için tripod + monopod kullanıyoruz. Drone ile saha üstü genel kompozisyonlar.

Spor çekiminde 'anlatıcı kareler' önemlidir; sadece 'koşan sporcu' değil, 'coşkuyla gol kutlayan' veya 'yorgun ifade ile su içen' gibi duygu içeren kareler. Maç sonu poz seansında takım grup karesi standart.

Aylık antrenman aboneliği yapan kulüplerimiz var; her ay 1-2 ziyaret ile sürekli içerik üretimi. Sporcu portfolyosu (genç sporcular için kariyer materyali) için 'Sporcu Portresi' özel paketimiz mevcut.`,
    features: ["Yüksek shutter (1/2000+)", "Eye-AF + 30 FPS burst", "70-200 + 100-400 telefoto", "Drone saha üstü", "Anlatıcı kareler odaklı", "Sporcu portfolyo paketi"],
    packages: [
      { name: "Tek Maç", priceRange: "₺3.000 - ₺5.000", description: "Maç süresi 90 dk", includes: ["Maç tam süresi", "100+ edit kare", "Takım grup karesi", "Online galeri"] },
      { name: "Klasik", priceRange: "₺5.500 - ₺9.000", description: "Maç + antrenman + portre", includes: ["Maç + 1 antrenman seansı", "200+ kare", "Sporcu portrelerle", "USB + dijital"], popular: true },
      { name: "Aylık Kulüp", priceRange: "₺6.000 - ₺10.000 / ay", description: "Aylık kulüp aboneliği", includes: ["Aylık 4 ziyaret", "Maç + antrenman + portre", "Sürekli içerik üretimi", "Sosyal medya planlama"] },
    ],
    faqs: [
      { question: "Spor çekimi normal etkinlikten nasıl farklı?", answer: "Hareketli özne keskin yakalanmalı; shutter hızı 1/2000+, autofocus AI-Servo. Standart etkinlik çekiminde bu seviye gerekmez. Spor için özel optimize ekipman + teknik." },
      { question: "Saha kenarından mı çekiyorsunuz?", answer: "Tabi — saha kenarındaki 'fotoğrafçı bölgesi'nden veya tribün üstünden çekim. Drone ile saha üstü genel kompozisyon. Kulüp izniyle." },
      { question: "Genç sporcu portfolyosu nedir?", answer: "Üniversite/burs başvuruları için sporcu görsel materyali. Aksiyon kareleri + portre + biyografi sayfa tasarımı. 'Sporcu Portresi' özel paket." },
      { question: "Drone maçta uçabilir mi?", answer: "Maç içinde sportif kurallar nedeniyle drone uçmaz; antrenman/dış mekan seansında uçuyoruz. Saha üstü genel kompozisyonlar harika." },
      { question: "Bireysel antrenman seansı çekimi olur mu?", answer: "Evet — özellikle dövüş sporları, atletizm, kişisel fitness için bireysel sporcu çekimi popüler. Sosyal medya + sponsor sunumu için kullanılır." },
      { question: "Aylık kulüp aboneliği nasıl çalışır?", answer: "Aylık 4 ziyaret (maç + antrenman + portre dengeli). Sürekli içerik üretimi, sosyal medya posta planlaması. Yıllık üye olan kulüplere fiyat avantajı." },
    ],
    relatedServices: ["etkinlik-fotografcisi", "konser-fotografcisi", "drone-fotograf-ve-video", "video-cekimi"],
    galleryCategory: "etkinlik",
    metaTitle: "Gebze Spor Fotoğrafçısı | Maç ve Antrenman Çekimi",
    metaDescription: "Gebze spor fotoğrafçısı. Futbol, basketbol, atletizm. Yüksek shutter, telefoto, drone, sporcu portfolyo. 0539 633 03 58",
  },

  {
    slug: "davet-cekimi",
    name: "Davet Çekimi",
    category: "etkinlik",
    primaryKeyword: "davet çekimi",
    secondaryKeywords: ["Gebze davet fotoğrafı", "yemek davet çekimi", "ev daveti fotoğraf", "kokteyl çekim", "private event"],
    shortDescription: "Yemek davetleri, kokteyl, küçük özel etkinlikler için samimi ve atmosferik çekim hizmeti.",
    longDescription: `Davet çekimi, daha küçük ve samimi etkinliklerin (yemek daveti, kokteyl, baby shower, gelin duşı, kapı açılışı, mezuniyet partisi) belgelenmesi için yapılan hizmetidir. Akse Fotoğrafçılık olarak ev, restoran veya küçük salon davetlerinde 1-3 saatlik kapsam çekimleri yapıyoruz.

Yaklaşımımız: gözlem + minimal müdahale. Davet ev sahibi ve davetlilerin doğal halini bozmamak için sessiz hareket ediyor, flaş kullanmadan ortam ışığında çekim yapıyoruz. Önemli anlar: davet açılışı, yemek servisi, hediyeleşme, ortak konuşma anları, grup poz seansı (5-10 dk).

Ev davetlerinde mekan keşfi yapıyoruz; salon ışığı, masa düzeni, doğal ışık girişi planlanıyor. Sade ve samimi atmosfer korunuyor; profesyonel etkinlik tarzı 'kurulu' kareler yerine doğal anlar.

Edit teslim 7 günde; sosyal medya için 5-10 kareyi 24 saat içinde iletiyoruz. Çiftler için baby shower/gelin duşu paketinde özel tema dekor + grup poz dahil.`,
    features: ["Minimal müdahaleli yaklaşım", "Flaşsız ortam ışığı çekim", "Ev + restoran + küçük salon", "Grup poz 5-10 dk seans", "7 günde teslim", "Sosyal medya hızlı paylaşım"],
    packages: [
      { name: "Mini", priceRange: "₺2.000 - ₺3.000", description: "1-1.5 saat", includes: ["1-1.5 saat", "60+ kare", "Online galeri", "Dijital teslim"] },
      { name: "Klasik", priceRange: "₺3.500 - ₺5.500", description: "Yarım gün davet", includes: ["3 saat kapsam", "120+ kare", "Grup poz seansı", "USB + dijital"], popular: true },
      { name: "Premium", priceRange: "₺6.500 - ₺10.000", description: "Tüm gün + tema dekor", includes: ["5-6 saat kapsam", "250+ kare", "Tema fotoğraf köşesi", "30 sn klip", "20x20 mini albüm"] },
    ],
    faqs: [
      { question: "Davet çekimi etkinlik çekiminden nasıl farklı?", answer: "Etkinlik kurumsal+büyük (50+ kişi); davet özel+küçük (10-30 kişi). Davette samimi yaklaşım, etkinlikte resmi yaklaşım. Davet ev/restoranda olur, etkinlik genelde salon." },
      { question: "Flaşsız çekim olur mu?", answer: "Evet — yüksek ISO performanslı kameralar ile salon/ev ışığında çekim. Atmosferin doğal kalmasını sağlar; davetlilerin gözünde flaş rahatsızlığı yok." },
      { question: "Tema fotoğraf köşesi nedir?", answer: "Premium pakette dahil — davetin temasına uygun (örn: pastel balonlu, çiçek arklı) sade dekor + portre alanı. Davetliler grup poz veya tek poz alabilir." },
      { question: "Ev davetinde önceden ne hazırlanmalı?", answer: "Salon ışığı (lambalar açık), pencerelerin perdesi açık (gün ışığı için), masa düzeni temiz. Kameraya rahatsızlık vermeyecek alan." },
      { question: "Çocuklar için yaklaşım nasıl?", answer: "Çocuk fotoğrafçılığı deneyimimiz var; oyun ve şarkıyla doğal halini yakalıyoruz. Baby shower veya doğum günü davetlerinde çocuk öncelikli." },
      { question: "Klip dahil mi?", answer: "Premium pakette 30 sn klip standardı. Klasik pakette ek hizmet olarak ekleniyor." },
    ],
    relatedServices: ["etkinlik-fotografcisi", "dogum-gunu-fotografcisi", "1-yas-pasta-patlatma", "aile-fotografcisi"],
    galleryCategory: "etkinlik",
    metaTitle: "Gebze Davet Çekimi | Yemek Daveti, Baby Shower Çekimi",
    metaDescription: "Gebze davet fotoğrafçısı. Yemek daveti, baby shower, gelin duşu. Samimi yaklaşım, flaşsız çekim, hızlı teslim. 0539 633 03 58",
  },
];
