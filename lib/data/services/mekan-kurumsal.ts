import type { Service } from "@/lib/types";

export const mekanKurumsalServices: Service[] = [
  {
    slug: "mekan-fotografcisi",
    name: "Mekan Fotoğrafçısı",
    category: "mekan-kurumsal",
    primaryKeyword: "mekan fotoğrafçısı",
    secondaryKeywords: ["Gebze mekan fotoğrafı", "işletme tanıtım çekim", "kafe mekan çekimi", "spor salonu çekim", "güzellik salonu fotoğraf"],
    shortDescription: "Kafe, restoran, salon, klinik gibi tüm hizmet işletmeleri için profesyonel iç-dış mekan tanıtım çekimi.",
    longDescription: `Mekan fotoğrafı, müşterinizin sizinle ilk dijital karşılaşmasıdır. Akse Fotoğrafçılık olarak kafe, restoran, kuaför, güzellik salonu, spor salonu, klinik, atölye ve butik mağazalar gibi tüm hizmet sektörü işletmeleri için profesyonel mekan tanıtım çekimi yapıyoruz.

Çekim öncesi mekana 15-30 dakika önce gelip ışık planlaması yapıyoruz. Geniş açı lens (16-35mm) ile odaların gerçek boyutunu yansıtıyor, telefoto lens ile detay kareler alıyoruz. Doğal ışık + yapay LED panel kombinasyonu ile mekanın gerçek atmosferini koruyup gölgeleri yumuşatıyoruz.

Çekim sonrası lens distortion düzeltmesi, vertical/horizontal düzleştirme, yansıma temizliği ve renk dengeleme yapıyoruz. Google Business Profile, Instagram, web sitesi ve broşür için ayrı format teslim ediyoruz.

Sanal tur (360°) ile birleştirildiğinde tam dijital deneyim oluşur — müşteri sayfanızdan içeri girer gibi mekanı gezer. Aylık 'Mekan Yenileme' paketi mevsimlik dekor değişimlerini takip etmek isteyen işletmeler için ideal.`,
    features: ["Geniş açı + telefoto kombinasyonu", "Doğal + LED ışık karması", "Lens distortion düzeltmesi", "Google Business + Instagram format", "Sanal tur birleştirme", "Mevsimlik yenileme paketi"],
    packages: [
      { name: "Mini", priceRange: "₺3.500 - ₺5.500", description: "Tek mekan, 1.5 saat", includes: ["1.5 saat çekim", "30+ edit kare", "Web + Google format", "10 günde teslim"] },
      { name: "Klasik", priceRange: "₺6.000 - ₺10.000", description: "Tam kapsam + ambient", includes: ["3 saat çekim", "60+ edit kare", "Tüm formatlar (web + sosyal medya)", "Detay + ambient kareler"], popular: true },
      { name: "Premium", priceRange: "₺12.000 - ₺18.000", description: "Foto + drone + sanal tur", includes: ["Tam yarım gün", "100+ kare", "Drone hava + 360° sanal tur", "Mevsimlik yenileme opsiyonu"] },
    ],
    faqs: [
      { question: "Mekan çekimi neden önemli?", answer: "Profesyonel mekan fotoğrafları Google Business Profile'da %35-50 daha fazla tıklanır. İlk izlenim dijital olarak fotoğrafla oluşur; amatör fotoğraflar müşteri kaybettirir." },
      { question: "Çekim sırasında mekan açık mı kapalı mı?", answer: "Genelde mekan açıldıktan önce veya kapandıktan sonra çekim tercih ediliyor — boş mekan daha kolay çekilir. Müşteri/personel ile çekim isterseniz yapabiliriz; gizlilik sözleşmesiyle." },
      { question: "Drone şart mı?", answer: "Hayır — şehir içi mekanlar için drone genelde gerekli değil. Açık alan kafe/restoran (sahil, bahçe) için drone harika genel kareler verir." },
      { question: "360° sanal tur dahil mi?", answer: "Premium pakette dahil. Diğer paketlerde ek hizmet olarak eklenebilir; 'Sanal Tur Çekimi' hizmetimizle birleştirilir." },
      { question: "Google Business Profile için doğru format nedir?", answer: "1024x768 minimum, 16:9 oranı önerilir. JPG format. Bizim çekimimizde Google için optimize ayrı klasörle teslim alıyorsunuz." },
      { question: "Kaç günde teslim?", answer: "Mini: 10 gün, Klasik: 14 gün, Premium: 21 gün (sanal tur işleme dahil)." },
    ],
    relatedServices: ["restoran-cekimi", "otel-fotograf-cekimi", "sanal-tur-cekimi", "mimari-fotograf"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Mekan Fotoğrafçısı | Kafe, Salon, Klinik Çekimi",
    metaDescription: "Gebze mekan fotoğrafçısı. Kafe, restoran, salon, klinik tanıtım çekimi. Geniş açı, ambient, sanal tur. 0533 241 75 22",
  },

  {
    slug: "emlak-fotografcisi",
    name: "Emlak Fotoğrafçısı",
    category: "mekan-kurumsal",
    primaryKeyword: "emlak fotoğrafçısı",
    secondaryKeywords: ["Gebze emlak fotoğrafı", "ev satılık fotoğraf", "kiralık daire çekimi", "emlak ilanı fotoğraf", "lüks villa çekimi"],
    shortDescription: "Satılık/kiralık daireler, villalar ve ticari gayrimenkul için profesyonel emlak ilanı çekimi.",
    longDescription: `Emlak fotoğrafı, mülkün satış/kiralanma süresini doğrudan etkiler. Profesyonel çekilen ilanlar Sahibinden, Hepsiemlak, Endeksa gibi platformlarda 4-5 kat daha hızlı kiralanıyor/satılıyor. Akse Fotoğrafçılık olarak emlak ofisleri, müteahhitler, bireysel ev sahipleri ve oto-park/depo gibi ticari gayrimenkul için emlak çekimi yapıyoruz.

Geniş açı lens (16mm civarı) odaların gerçek boyutunu yansıtır; HDR (high dynamic range) tekniğiyle pencere dışı parlamayı kontrol ederiz, böylece içerideki detaylar ve dışarıdaki manzara aynı karede net olur. Drone ile dış cephe ve çevre genel görüntüsü değer katar.

Çekim öncesi mülkün hazırlanması önemlidir: temizlik, kişisel eşyaların kaldırılması (depersonalization), staging (boş ev için yatak/koltuk dekoru opsiyonel). Müteahhit projeleri için 'henüz inşaat halinde' gösterim için 3D render desteği de sunuyoruz.

Sahibinden ilanı için 1280x960 max 200KB format, Hepsiemlak ve diğer platformlar için yüksek çözünürlük teslim ediliyor. Edit teslim 7-10 gün; acil ilan için 3 günde priority edit mevcut.`,
    features: ["Geniş açı 16mm lens", "HDR teknik (pencere dışı kontrol)", "Drone dış cephe + çevre", "Sahibinden + Hepsiemlak format", "Staging (dekor) opsiyonu", "7-10 günde teslim"],
    packages: [
      { name: "Daire/Ev", priceRange: "₺2.000 - ₺3.500", description: "Tek konut, dış + iç", includes: ["1.5 saat çekim", "30+ edit kare", "Sahibinden + Hepsiemlak format", "Dijital teslim"] },
      { name: "Villa/Lüks", priceRange: "₺4.000 - ₺7.000", description: "Lüks konut + drone", includes: ["3 saat çekim", "60+ edit kare", "Drone hava çekimi", "HDR teknik", "Tüm formatlar"], popular: true },
      { name: "Site/Ticari", priceRange: "₺8.000 - ₺15.000", description: "Çoklu daire site veya ticari", includes: ["Tam gün kapsam", "10+ daire/birim", "Drone + 360° sanal tur", "Müteahhit pazarlama paketi"] },
    ],
    faqs: [
      { question: "Profesyonel emlak fotoğrafı neden önemli?", answer: "Sahibinden çalışmaları, profesyonel fotoğrafla ilan veren mülklerin %57 daha hızlı satıldığını gösteriyor. Amatör (telefon) fotoğrafla ilan veren mülkler aylarca beklerken." },
      { question: "Geniş açı lens neden?", answer: "Standart lens dar gösterir; geniş açı (16mm civarı) odanın gerçek geniş hissini yansıtır. Distortion (kıvrım) düzeltmesi de yapılır; doğal görünür." },
      { question: "HDR ne demek?", answer: "Pencere dışındaki manzaranın da, içerideki detayın da aynı karede net görünmesini sağlayan teknik. Çoklu pozlama + edit ile parlak pencere ve karanlık iç birleştirilir." },
      { question: "Staging (dekor) hizmeti veriyor musunuz?", answer: "Boş evler için minimal dekor (yatak, koltuk, masa) sağlayan staging hizmeti opsiyonel. Hızlı satılması için ev 'yaşanılır' gösterilir." },
      { question: "Drone şart mı?", answer: "Daireler için gereksiz, villa/site için harika. Lüks konutta drone hava çekimi 'değer algısı' yaratır." },
      { question: "Acil ilan için hızlı teslim olur mu?", answer: "Evet — 3 günde priority edit hizmetimiz mevcut (ek %30 ücret). Standart 7-10 gün." },
    ],
    relatedServices: ["mekan-fotografcisi", "mimari-fotograf", "drone-fotograf-ve-video", "sanal-tur-cekimi"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Emlak Fotoğrafçısı | Satılık Kiralık Ev Çekimi",
    metaDescription: "Gebze emlak fotoğrafçısı. Sahibinden + Hepsiemlak format, geniş açı, HDR, drone. Daire/villa/site/ticari. 0533 241 75 22",
  },

  {
    slug: "otel-fotograf-cekimi",
    name: "Otel Fotoğraf Çekimi",
    category: "mekan-kurumsal",
    primaryKeyword: "otel fotoğraf çekimi",
    secondaryKeywords: ["Gebze otel fotoğrafı", "Booking.com otel çekim", "otel oda fotoğrafı", "butik otel çekimi", "tatil köyü çekim"],
    shortDescription: "Booking.com, Trivago, Tripadvisor için otel oda, lobi, restoran ve genel mekan profesyonel çekimi.",
    longDescription: `Otel fotoğrafı, online rezervasyon platformlarında (Booking.com, Trivago, Otelz, ETS) tıklanma ve dönüşüm oranınızı belirleyen kritik faktördür. Akse Fotoğrafçılık olarak Gebze, Tuzla, Pendik bölgesindeki otel ve butik konaklama tesisleri için profesyonel çekim hizmeti sunuyoruz.

Çekim kapsamı: standart oda, suite oda, banyo detay, lobi, resepsiyon, restoran, bar, havuz, spa, fitness merkezi, dış cephe + çevre. Bir 30 odalı otel için 200-300 kare üretimi mümkündür. Drone ile genel görünüm ve havuz/teras kareleri büyük fark yaratır.

Booking.com formatı: 1500x1000 px minimum, JPG. Trivago: 1200x600 px. Tripadvisor: 1500x1000 px. Hepsi için ayrı klasörle teslim ediyoruz. Otel kataloğu (basılı) için CMYK + yüksek DPI ek formatı.

Aylık abonelik (yeni dekorasyon, yeni etkinlik, mevsim değişikliği) yapan otellerimiz var; her ay 1-2 günlük çekim ziyareti ile sürekli yenilenen görsel üretimi sağlıyoruz.`,
    features: ["Booking.com/Trivago/Tripadvisor format", "Standart + suite oda + banyo", "Lobi, restoran, havuz, spa", "Drone hava + çevre", "Yıllık abonelik opsiyonu", "Basılı katalog formatı"],
    packages: [
      { name: "Mini Pansiyon", priceRange: "₺6.000 - ₺10.000", description: "5-10 oda butik", includes: ["1 günlük çekim", "100+ kare", "Booking format", "10 günde teslim"] },
      { name: "Otel", priceRange: "₺12.000 - ₺22.000", description: "20-50 oda otel + drone", includes: ["1.5 günlük çekim", "200+ kare", "Tüm rezervasyon platformları", "Drone hava çekimi", "14 günde teslim"], popular: true },
      { name: "Tatil Köyü", priceRange: "₺25.000 - ₺45.000", description: "Tatil köyü tam kapsam", includes: ["3 günlük çekim", "500+ kare", "Drone + 360° sanal tur", "Aylık abonelik opsiyonu", "Basılı katalog"] },
    ],
    faqs: [
      { question: "Booking.com için kaç fotoğraf gerekiyor?", answer: "Minimum 5, ideal 25+ kare. 10+ otelin %38 daha fazla rezervasyon aldığı Booking analytics raporları var. Her oda tipi + ortak alan + çevre detayları." },
      { question: "Otel çekimi ne kadar sürer?", answer: "20-30 odalı bir otel için 1.5-2 gün çekim. Tatil köyü 3-5 gün. Çekim akışını otel yönetimiyle birlikte planlıyoruz." },
      { question: "Misafir fotoğrafları çekiliyor mu?", answer: "Misafirlerin onayıyla 'lifestyle' kareler alınabilir. Genelde modeller veya otel personeliyle hayatlı sahneler tercih edilir; gizlilik açısından." },
      { question: "Drone şart mı?", answer: "Tatil köyleri ve büyük oteller için harika. Şehir içi butik oteller için gerekmez; sadece Booking ana görseli için drone genel kare etkili." },
      { question: "360° sanal tur dahil mi?", answer: "Tatil Köyü pakedinde dahil. Diğer paketlerde ek hizmet olarak; rezervasyon platformlarında sanal tur konversiyon oranını %30+ artırır." },
      { question: "Aylık abonelik nasıl?", answer: "Her ay 1 günlük çekim ziyareti — yeni etkinlikler, mevsim değişikliği, yeni dekor. Otel sosyal medya hesabını sürekli canlı tutmak için ideal." },
    ],
    relatedServices: ["mekan-fotografcisi", "mimari-fotograf", "drone-fotograf-ve-video", "sanal-tur-cekimi"],
    galleryCategory: "otel",
    metaTitle: "Gebze Otel Fotoğraf Çekimi | Booking.com Otel Çekimi",
    metaDescription: "Gebze otel fotoğrafçısı. Booking, Trivago, Tripadvisor format. Oda, lobi, havuz, drone, sanal tur. 0533 241 75 22",
  },

  {
    slug: "restoran-cekimi",
    name: "Restoran Çekimi",
    category: "mekan-kurumsal",
    primaryKeyword: "restoran çekimi",
    secondaryKeywords: ["Gebze restoran fotoğrafı", "restoran tanıtım çekim", "restoran iç çekim", "restoran menü çekimi", "kafe çekimi"],
    shortDescription: "Restoran iç-dış mekan, ambient atmosfer ve menü kartı için profesyonel restoran tanıtım çekimi.",
    longDescription: `Restoran çekimi, mekanı + yemekleri + atmosferi tek bütünde belgeleyen kapsamlı bir hizmettir. Akse Fotoğrafçılık olarak Gebze, Çayırova, Darıca'daki restoran, kafe, pasta-tatlı ve fast food zincirleri için tam çekim paketi sunuyoruz.

Tek paketle: 1) Restoran iç-dış mekan, 2) Yemek + içecek menü kartı, 3) Ambient atmosfer (akşam ışıkları, müşterilerle), 4) Personel/şef portreleri, 5) Sosyal medya için reels. Bu çoklu kapsam aynı çekim ekibiyle 1 günde tamamlanır.

Sosyal medya için aylık abonelik avantajlıdır; aylık 1 günlük çekim ile menü değişikliği, sezon kampanyası, yeni yemek lansmanı görselleri üretiyoruz. Restoranınızın Instagram hesabı sürekli canlı kalır.

Edit aşamasında restoran ışığının ton karakterini koruyoruz; sıcak ahşap tonlu restoranlarda sıcak edit, modern soğuk tonlu mekanlarda da uygun renk ayarı. Google Business Profile için ayrı format, web sitesi için tam çözünürlük.`,
    features: ["Mekan + yemek + ambient + personel kapsamı", "1 günde tam paket", "Sosyal medya aylık abonelik", "Reels + flat lay yemek", "Restoran ışığı uyumu", "Google Business format"],
    packages: [
      { name: "Mini Kafe", priceRange: "₺4.000 - ₺6.500", description: "Kafe/küçük restoran, yarım gün", includes: ["4 saat çekim", "60+ kare", "Mekan + 10 yemek", "Web + sosyal medya format"] },
      { name: "Restoran Tam", priceRange: "₺7.500 - ₺13.000", description: "Tam kapsam tek gün", includes: ["1 günlük çekim", "150+ kare", "Mekan + menü + ambient + personel", "Reels videoları"], popular: true },
      { name: "Aylık Abonelik", priceRange: "₺6.000 - ₺10.000 / ay", description: "Sürekli içerik üretimi", includes: ["Aylık 1 günlük ziyaret", "60+ yeni içerik", "Sosyal medya planlama", "Sezon kampanyası desteği"] },
    ],
    faqs: [
      { question: "Restoran çekimi yemek çekiminden farklı mı?", answer: "Yemek çekimi sadece tabaklara odaklanır. Restoran çekimi mekan + yemek + ambient + personel — tam kapsamlıdır. Restoran kategori brief'i için ideal." },
      { question: "Müşteriler ile çekim olur mu?", answer: "Müşterilerin onayıyla bazı kareler 'lifestyle' olarak çekilir. Genelde restoran arkadaşları/personel + birkaç yapay 'müşteri' rolüyle hayatlı sahneler kuruyoruz." },
      { question: "Akşam çekimi de yapılıyor mu?", answer: "Tabi — restoranların ambient ışıkları akşam saat 18-21 arası en güzel. Akşam-gündüz iki vardiya çekim sıkça tercih edilen bir model." },
      { question: "Reels videosu dahil mi?", answer: "Klasik ve Aylık Abonelik paketinde standart. Reels'leri sosyal medya kullanımı için kısa ve trend uyumlu hazırlıyoruz." },
      { question: "Aylık abonelik nasıl çalışıyor?", answer: "Her ay 1 günlük çekim ziyareti, yeni menü/sezon görselleri üretimi, sosyal medya posta hazırlığı, takvim planlama. Sürekli içerik üreten restoranlar için." },
      { question: "Sosyal medya planlama içeriyor mu?", answer: "Aylık Abonelik pakedinde caption + hashtag + post saati planlaması dahil. Sosyal Medya Yönetimi hizmetimizle birleştirilebilir." },
    ],
    relatedServices: ["mekan-fotografcisi", "yemek-fotografcisi", "sanal-tur-cekimi", "sosyal-medya-yonetimi-ve-danismanligi"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Restoran Çekimi | Restoran Tanıtım Fotoğrafı",
    metaDescription: "Gebze restoran fotoğrafçısı. Mekan + yemek + ambient + personel kapsamı. Reels, sosyal medya aylık abonelik. 0533 241 75 22",
  },

  {
    slug: "mimari-fotograf",
    name: "Mimari Fotoğraf",
    category: "mekan-kurumsal",
    primaryKeyword: "mimari fotoğraf",
    secondaryKeywords: ["Gebze mimari fotoğraf", "bina çekimi", "site mimari çekim", "mimar portfolyo çekimi", "iç mimari fotoğraf"],
    shortDescription: "Mimar, müteahhit ve iç mimar portfolyoları için sanatsal ve teknik mimari fotoğraf çekimi.",
    longDescription: `Mimari fotoğraf, bir yapının mimari değerini ve estetik bütünlüğünü yansıtan özel bir uzmanlıktır. Akse Fotoğrafçılık olarak mimar ofisleri, müteahhit firmalar, iç mimarlar ve restoratörler için portfolyo + tanıtım çekimi yapıyoruz.

Teknik gereksinimler: tilt-shift lens (perspektif düzeltmesi için), drone (üst görüntü), uzun pozlama (akşam ışıklı çekim), HDR (gölge ve ışık dengelemesi). Çekim öncesi mimari proje brief'i alıyoruz; hangi mimari özelliklerin ön plana çıkması gerektiğini birlikte planlıyoruz.

İç mimari için: doğal ışık + LED panel kombinasyonu, tüm odaların aynı renk sıcaklığında çekimi, mobilya/dekor detay kareleri. Dış mimari için: altın saat (gün doğumu/batımı), mavi saat (gün batımından sonra ışıklar yandığında), drone hava perspektifi.

Edit aşamasında perspektif düzleştirme, vertical alignment, gökyüzü değişimi (gerekirse), gece-gündüz birleştirme (mavi saat tekniği) yapıyoruz. Yarışma + dergi başvuruları için ek format ve özel grading sunuyoruz.`,
    features: ["Tilt-shift + perspektif düzeltme", "Mavi saat + altın saat çekim", "HDR + uzun pozlama", "Drone hava perspektifi", "Yarışma + dergi formatı", "İç + dış kapsam"],
    packages: [
      { name: "Tek Yapı", priceRange: "₺5.000 - ₺8.500", description: "Tek bina/proje", includes: ["3 saat çekim", "40+ edit kare", "Dış + iç", "Perspektif düzeltme"] },
      { name: "Klasik Portfolyo", priceRange: "₺10.000 - ₺16.000", description: "Mavi saat + drone + iç-dış", includes: ["Tam gün çekim", "80+ kare", "Mavi saat + drone", "Dergi formatı"], popular: true },
      { name: "Premium", priceRange: "₺20.000 - ₺35.000", description: "Çoklu yapı + yarışma format", includes: ["2-3 günlük çekim", "150+ kare", "Yarışma + dergi başvuru hazırlığı", "Sanat grading"] },
    ],
    faqs: [
      { question: "Mimari fotoğraf normal bina çekiminden nasıl farklı?", answer: "Tilt-shift lens ile perspektif tam düzeltilir (binalar 'eğik' görünmez). Mavi saat tekniği ile aydınlatılmış cephe + alacakaranlık gökyüzü dramatic etki yaratır. Mimari yarışmalarda kullanılır." },
      { question: "Tilt-shift lens neden gerekli?", answer: "Standart lens ile yüksek bina çekiminde yapı geriye kıvrılır. Tilt-shift bu kıvrımı çekim sırasında düzeltir; edit sonrası işlem gerektirmez. Dergi/yarışma başvurusu için kritik." },
      { question: "Mavi saat ne zaman?", answer: "Gün batımından 15-30 dakika sonra; gökyüzü hala mavi ama yapı içi/dış aydınlatma yanmış. Bu pencerede yaklaşık 20 dakikalık ideal çekim süresi var." },
      { question: "Drone şart mı?", answer: "Yüksek katlı binalar ve site/kompleks için harika. Tek katlı yapılar için gerekli değil." },
      { question: "Yarışma başvurusu için ne yapılıyor?", answer: "World Architecture Festival, Archdaily, Designboom gibi yayın/yarışmalar için özel format + sıralı sunum sayfaları + kısa metin desteği. Premium pakette dahil." },
      { question: "İç mimar portfolyosu için uygun mu?", answer: "Tabi — iç mekan çekiminde uzun pozlama + HDR ile her oda detayı net çıkar. Mobilya/dekor markalarıyla birlikte çalışan iç mimarlar için ideal." },
    ],
    relatedServices: ["emlak-fotografcisi", "mekan-fotografcisi", "drone-fotograf-ve-video", "sanal-tur-cekimi"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Mimari Fotoğraf | Mimar İç Mimar Portfolyo Çekimi",
    metaDescription: "Gebze mimari fotoğrafçı. Tilt-shift, mavi saat, drone, HDR. Mimar/iç mimar/müteahhit portfolyo. 0533 241 75 22",
  },

  {
    slug: "kurumsal-fotograf-cekimi",
    name: "Kurumsal Fotoğraf Çekimi",
    category: "mekan-kurumsal",
    primaryKeyword: "kurumsal fotoğraf çekimi",
    secondaryKeywords: ["Gebze kurumsal fotoğraf", "kurumsal portre", "LinkedIn portre çekim", "şirket çekimi", "B2B kurumsal çekim"],
    shortDescription: "Şirket personeli kurumsal portreleri, ofis ortamı çekimi ve LinkedIn için profesyonel kurumsal fotoğraf hizmeti.",
    longDescription: `Kurumsal fotoğraf, bir şirketin profesyonel imajını ve ekibini dış dünyaya tanıtmasının en güçlü yoludur. Akse Fotoğrafçılık olarak Gebze ve çevre OSB'lerdeki şirketler, KOBİ'ler ve serbest profesyoneller için kurumsal çekim paketleri sunuyoruz.

Kapsam: 1) Personel portreleri (LinkedIn, web sitesi, kartvizit), 2) Ofis ortamı (çalışma alanı, toplantı odası, lobi), 3) Takım grubu pozları, 4) Çalışma anı kareleri (toplantı, sunum, masaüstü detay), 5) Yönetici portreleri (sanatsal, dergi tarzı). Her biri için ayrı kompozisyon ve ışık kurulumu.

Personel portrelerinde tutarlılık önemlidir: aynı arka plan, aynı ışık kurulumu, aynı poz açısı. 50 kişilik bir şirket için 1 günde tüm portreler çekilebilir; her kişi için 5-10 dakika ayrılır.

Kurumsal kareler şirketin web sitesi 'Hakkımızda' bölümü, LinkedIn şirket sayfası, basılı broşür, B2B kataloglar için kullanılır. Edit aşamasında ten tonu ve renk paleti tüm karelerde tutarlı tutulur.`,
    features: ["Tutarlı personel portresi", "Ofis ortamı kapsam", "Takım + yönetici portresi", "Çalışma anı kareleri", "LinkedIn + web format", "1 günde 50+ kişi"],
    packages: [
      { name: "Kobi", priceRange: "₺4.000 - ₺7.000", description: "10-15 kişi + ofis", includes: ["Yarım gün çekim", "10-15 personel portresi", "Ofis ortamı 20+ kare", "LinkedIn format"] },
      { name: "Klasik", priceRange: "₺8.000 - ₺14.000", description: "30-50 kişi + tam kapsam", includes: ["1 günlük çekim", "30-50 portre", "Ofis + takım + çalışma anı", "100+ kare", "Tüm formatlar"], popular: true },
      { name: "Premium", priceRange: "₺16.000 - ₺28.000", description: "Tam şirket + sanatsal yönetici", includes: ["1.5-2 günlük çekim", "100+ portre", "Sanatsal yönetici çekimi", "Dergi tarzı kurumsal albüm", "Kurumsal video opsiyonu"] },
    ],
    faqs: [
      { question: "Personel portrelerinde tutarlılık nasıl sağlanıyor?", answer: "Aynı stüdyo seti veya ofis ışığı, aynı arka plan, aynı poz açısı, aynı sandalye/duruş. Kişi değişse de kompozisyon aynı; web sitesinde grid görünüm tutarlı olur." },
      { question: "1 günde 50 kişi çekilebilir mi?", answer: "Evet — kişi başı 5-10 dakika hesabıyla 50 kişi 6-7 saatte tamamlanır. Önceden 'çekim akışı' planlaması yapılıyor; herkes 5 dk önce gelir, çekim sonrası işine döner." },
      { question: "LinkedIn için optimum format nedir?", answer: "1:1 kare (400x400 minimum), 1.91:1 yatay banner. Her ikisi için optimum kareler teslim ediyoruz; ek kırpım ücreti yok." },
      { question: "Yönetici portresi 'sanatsal' mı?", answer: "Klasik kurumsal + ek bir sanatsal poz seansı. Dergi tarzı dramatic ışık, daha az 'şirket', daha çok 'kişilik'. Premium pakette dahil; CEO/genel müdürler için ideal." },
      { question: "Kurumsal video da çekiyor musunuz?", answer: "Premium pakette opsiyonel; 30-60 sn şirket tanıtım klibi. Personel röportajı veya ofis tour formatlı. Tanıtım Filmi hizmetimizle birleştirilebilir." },
      { question: "Takım grup karesi nasıl çekiliyor?", answer: "Şirket lobisi/toplantı odası geniş açı kompozisyon. 50 kişiye kadar tek karede mümkün; daha kalabalık şirketler için stüdyoda multi-poz çekiyoruz." },
    ],
    relatedServices: ["portre-cekimi", "tanitim-filmi-cekimi", "sanayi-fotografciligi", "fabrika-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Kurumsal Fotoğraf Çekimi | Şirket Personel Portresi",
    metaDescription: "Gebze kurumsal fotoğrafçı. Personel portreleri, ofis ortamı, takım pozları. LinkedIn + web format. 1 günde 50 kişi. 0533 241 75 22",
  },

  {
    slug: "tanitim-filmi-cekimi",
    name: "Tanıtım Filmi Çekimi",
    category: "mekan-kurumsal",
    primaryKeyword: "tanıtım filmi çekimi",
    secondaryKeywords: ["Gebze tanıtım filmi", "şirket tanıtım videosu", "kurumsal video çekim", "fabrika tanıtım filmi", "marka filmi"],
    shortDescription: "Şirket, fabrika, ürün veya hizmetinizin profesyonel 1-3 dakikalık sinematik tanıtım filmi.",
    longDescription: `Tanıtım filmi, bir şirketin/markanın 1-3 dakikalık zarif bir özetidir; web sitesi açılış sayfası, fuar standı, sosyal medya kampanyası, B2B sunumları için kritiktir. Akse Fotoğrafçılık olarak Gebze ve OSB'lerdeki şirketler için sinematik tanıtım filmi üretiyoruz.

Süreç: 1) Brief ve hedef kitle, 2) Storyboard ve senaryo, 3) Konuşmacı/anlatıcı seçimi (CEO, ürün müdürü, dış ses), 4) Çekim günleri (1-3 gün), 5) Edit + müzik + alt yazı, 6) Final teslim. Toplam süreç 3-5 hafta.

Çekim ekipmanı: 4K sinema kameraları, gimbal stabilizatör, slider, drone (dış cephe), kablosuz mikrofon (röportajlar için), profesyonel LED panel ışık. Fabrika içi çekim için patlamaya dayanıklı ekipman gerekirse koordine ediyoruz.

Müzik: telifsiz stok platformlardan marka tonuna uygun parça. Alt yazı: Türkçe + İngilizce çift dilde teslim. Format: 16:9 web (1080p ve 4K), 9:16 sosyal medya dikey, 1:1 Instagram kare. Yıllık tanıtım filmi yenileme paketi de mevcut.`,
    features: ["Senaryo + storyboard hazırlığı", "4K sinema + gimbal + drone", "Kablosuz mikrofon röportaj", "Çift dil alt yazı (TR + EN)", "Çoklu format teslim", "Yıllık yenileme opsiyonu"],
    packages: [
      { name: "Mini Tanıtım", priceRange: "₺15.000 - ₺25.000", description: "1-1.5 dk, 1 gün çekim", includes: ["1 günlük çekim", "1-1.5 dk film", "1 dil alt yazı", "Web format teslim"] },
      { name: "Klasik", priceRange: "₺28.000 - ₺50.000", description: "2-3 dk, 2 gün çekim, drone", includes: ["2 günlük çekim", "2-3 dk film", "Drone hava çekimi", "Çift dil alt yazı", "Tüm formatlar"], popular: true },
      { name: "Premium", priceRange: "₺55.000 - ₺120.000", description: "Sinema kalite, çoklu mekan", includes: ["3-5 günlük çekim", "3-5 dk film", "Sinema kalite kayıt", "Profesyonel anlatıcı (dış ses)", "Animasyon + grafik", "Yıllık güncelleme"] },
    ],
    faqs: [
      { question: "Tanıtım filmi kaç dakika olmalı?", answer: "Web sitesi için 1-1.5 dk ideal (kullanıcı sabrı). B2B sunum için 2-3 dk. Fuar standı sürekli oynayan klip 30-60 sn. Birden fazla format aynı çekimden çıkabilir." },
      { question: "Senaryo desteği veriyor musunuz?", answer: "Evet — Klasik ve Premium pakette senaryo + storyboard hazırlığı dahil. Brief + marka materyallerinden hareketle hikaye akışı oluşturuyoruz." },
      { question: "CEO/genel müdür röportajı çekiliyor mu?", answer: "Evet — kurumsal tanıtım filmi en sık formatlarından biri. Profesyonel mikrofon + LED ışık + sade arka planla röportaj kayıt ediyoruz." },
      { question: "Drone şart mı?", answer: "Fabrika dış cephesi, geniş kompleks, sahil ofisi için harika. Şehir içi küçük ofis için gerekmez." },
      { question: "Animasyon/grafik dahil mi?", answer: "Premium pakette dahil — istatistik, harita, akış şeması gibi grafiksel öğeler animasyonlu eklenir." },
      { question: "Yıllık güncelleme nedir?", answer: "Filmin yıllık olarak yeni şubeler, yeni ürünler, güncel istatistiklerle yenilenmesi. Premium pakette ilk yıl ücretsiz." },
    ],
    relatedServices: ["video-cekimi", "kurumsal-fotograf-cekimi", "drone-fotograf-ve-video", "fabrika-cekimi"],
    galleryCategory: "video",
    metaTitle: "Gebze Tanıtım Filmi Çekimi | Şirket Kurumsal Video",
    metaDescription: "Gebze tanıtım filmi. Şirket, fabrika, marka için 1-3 dk sinematik film. 4K, drone, çift dil alt yazı. 0533 241 75 22",
  },

  {
    slug: "fabrika-cekimi",
    name: "Fabrika Çekimi",
    category: "mekan-kurumsal",
    primaryKeyword: "fabrika çekimi",
    secondaryKeywords: ["Gebze fabrika fotoğrafı", "GOSB fabrika çekim", "üretim hattı çekimi", "endüstri fotoğrafı", "fabrika tanıtım"],
    shortDescription: "GOSB, TOSB, Dilovası OSB'deki fabrika ve üretim tesislerinin profesyonel çekim ve tanıtım hizmeti.",
    longDescription: `Fabrika çekimi, üretim tesislerinin müşteri/yatırımcı/ihale gibi profesyonel hedef kitlelere tanıtımı için yapılan endüstriyel fotoğrafçılık alanıdır. Akse Fotoğrafçılık olarak GOSB, TOSB, Bilişim Vadisi, Dilovası OSB, Pelitli OSB ve Plastikçiler OSB'deki tesislerde çekim deneyimimiz var.

Çekim kapsamı: dış cephe (drone hava + zemin), giriş + lobi, üretim hattı, Ar-Ge laboratuvarı, kalite kontrol bölümü, depo + lojistik, yönetici ofisleri, personel çalışma kareleri, ürün hazırlık aşamaları. Tek paketle 200-400 kare üretiyoruz.

Endüstriyel güvenlik kritik. ATEX patlamaya dayanıklı bölgeler için özel ekipman gerekir; bu durumda yerel partnerlerimiz veya tesisinizin güvenlik kurallarına uygun ekipman sağlıyoruz. Tüm çalışanlar için baret, gözlük, koruyucu ayakkabı standardı uygulanır.

NDA (gizlilik sözleşmesi) çoğu B2B çekiminde standart. Ürün/üretim sürecinin gizlilik gereksinimlerini önceden netleştiriyor, sadece izin verilen alanlarda çekim yapıyoruz. ISO/CE/Halal gibi sertifikasyon başvuruları için belge fotoğrafları da çekiyoruz.`,
    features: ["GOSB/TOSB/Dilovası OSB deneyimi", "Drone + üretim hattı + Ar-Ge", "ATEX patlamaya dayanıklı uyum", "NDA gizlilik standardı", "ISO/CE/Halal belge çekimi", "B2B + yatırımcı sunumu uyumu"],
    packages: [
      { name: "Mini", priceRange: "₺6.000 - ₺10.000", description: "Yarım gün, sınırlı kapsam", includes: ["4 saat çekim", "60+ kare", "Dış cephe + üretim", "B2B format"] },
      { name: "Klasik", priceRange: "₺12.000 - ₺22.000", description: "1 gün tam kapsam + drone", includes: ["1 günlük çekim", "200+ kare", "Drone + tüm bölümler", "Personel çalışma kareleri", "Yatırımcı sunumu format"], popular: true },
      { name: "Premium", priceRange: "₺25.000 - ₺50.000", description: "Tam kapsam + tanıtım filmi", includes: ["2 günlük çekim", "400+ kare", "1-2 dk tanıtım filmi", "Sanal tur opsiyonu", "Yıllık güncelleme"] },
    ],
    faqs: [
      { question: "GOSB içine girmek izin gerektiriyor mu?", answer: "GOSB'a giriş için tesisinizin önceden sizi davet etmesi yeterli; tesise gelirken kimlik gösterip kayıt yaptırıyoruz. Çekim için tesisinizin iç onayı yeterli." },
      { question: "Patlamaya dayanıklı (ATEX) bölgelerde çekim yapıyor musunuz?", answer: "Evet — kimya, petrol, plastik tesislerinde ATEX gerektiren alanlar için yerel partnerlerimizle veya tesisinizin uyumlu ekipmanıyla çalışıyoruz. Önceden güvenlik kurallarınızı bildirin." },
      { question: "NDA imzalıyor musunuz?", answer: "Tabi — B2B çekimlerinin %80'inde NDA imzalanır. Marka mahremiyeti, üretim süreci sırrı, müşteri listesi gibi konularda gizlilik standardımız çok yüksektir." },
      { question: "Drone GOSB içinde uçabilir mi?", answer: "Bazı bölgeler 'no fly zone'dur. Önceden harita kontrolü yapıyoruz; izin gerekirse alıyoruz veya alternatif kompozisyon planlanır." },
      { question: "Personel çekimi etik kurallarla mı?", answer: "Evet — her personelin çekim öncesi onayı alınır. Kareler dağıtılmadan önce şirket onayı zorunludur. Bireysel pozlar yapılmaz; çalışma anı kareleri tercih edilir." },
      { question: "Tanıtım filmi de ekleniyor mu?", answer: "Premium pakette dahil. Klasik pakette ek hizmet olarak ekleniyor. Tanıtım Filmi hizmetimizle entegre çalışıyoruz." },
    ],
    relatedServices: ["sanayi-fotografciligi", "tanitim-filmi-cekimi", "drone-fotograf-ve-video", "kurumsal-fotograf-cekimi"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Fabrika Çekimi | GOSB TOSB Üretim Tesisi Çekim",
    metaDescription: "Gebze fabrika fotoğrafçısı. GOSB, TOSB, Bilişim Vadisi, Dilovası OSB. Üretim hattı, drone, Ar-Ge, NDA standardı. 0533 241 75 22",
  },

  {
    slug: "sanayi-fotografciligi",
    name: "Sanayi Fotoğrafçılığı",
    category: "mekan-kurumsal",
    primaryKeyword: "sanayi fotoğrafçılığı",
    secondaryKeywords: ["Gebze sanayi fotoğraf", "endüstriyel fotoğraf", "OSB fotoğrafçısı", "ağır sanayi çekim", "B2B sanayi"],
    shortDescription: "Ağır sanayi, OSB tesisi, depo, lojistik ve B2B sektörü için endüstriyel fotoğraf hizmeti.",
    longDescription: `Sanayi fotoğrafçılığı, ağır sanayi, üretim tesisi, depo, lojistik ve diğer B2B sektörler için yapılan kapsamlı endüstriyel fotoğraf alanıdır. Akse Fotoğrafçılık olarak Kocaeli'nin yoğun sanayi havzasında — GOSB, TOSB, Bilişim Vadisi, Dilovası OSB, Plastikçiler OSB, Kimya İhtisas OSB — çekim deneyimimiz var.

Fabrika çekiminden farkı: sanayi fotoğrafçılığı daha geniş kapsamlıdır; sadece üretim tesisi değil, depo, lojistik kompleks, liman terminali, lojistik araçlar, sürücü/operatör portreleri gibi geniş yelpazede görsel üretir. B2B kataloglar, ihale dosyaları, müşteri sunumları için kullanılır.

Endüstriyel ışık zorludur; floresan/karbon ark/sodium gibi farklı ışık tipleri tek bir mekanda olabilir. Renk doğruluğu için color checker + RAW format kayıt + post-prodüksiyon manuel beyaz dengesi yapıyoruz. Geniş alan kapsamı için panaromik birleştirme tekniği de kullanılır.

Çekim sırasında güvenlik birinci öncelik. Tüm ekibimiz baret + güvenlik ayakkabısı + yüksek görünür yelek standardındadır. Tesisinizin spesifik güvenlik gereksinimlerine (ATEX, ISO 45001, vb.) uyum sağlıyoruz.`,
    features: ["Tüm Kocaeli OSB deneyimi", "Endüstriyel ışık çözümü", "Color checker + RAW", "Panaromik birleştirme", "Güvenlik ekipmanı standardı", "B2B katalog + ihale formatı"],
    packages: [
      { name: "Sade", priceRange: "₺5.000 - ₺8.500", description: "Yarım gün, depo/küçük tesis", includes: ["4 saat çekim", "50+ kare", "Dış + iç kapsam", "B2B format"] },
      { name: "Klasik", priceRange: "₺10.000 - ₺18.000", description: "1 gün tam kapsam", includes: ["1 günlük çekim", "150+ kare", "Üretim + depo + lojistik", "Drone + panaromik", "Müşteri sunumu format"], popular: true },
      { name: "Premium", priceRange: "₺22.000 - ₺40.000", description: "Çoklu tesis veya kompleks", includes: ["2-3 günlük çekim", "300+ kare", "Tüm tesis bölümleri", "Sanal tur + tanıtım filmi", "Yıllık güncelleme"] },
    ],
    faqs: [
      { question: "Sanayi fotoğrafçılığı fabrika çekiminden farklı mı?", answer: "Sanayi fotoğrafçılığı daha geniştir; üretim + depo + lojistik + liman + ofis tüm kapsamı içerir. Fabrika çekimi sadece üretim tesisine odaklanır." },
      { question: "Ağır sanayi (kimya/metal) için özel ekipman gerekiyor mu?", answer: "Evet — ATEX uyumlu ekipman, yüksek sıcaklığa dayanıklı kıyafet, gaz dedektörü gibi özel araçlar. Tesisinizin güvenlik gereksinimlerine göre koordine ediyoruz." },
      { question: "İhale dosyası için hangi format gerekiyor?", answer: "Yüksek DPI (300+), CMYK profilli, A4 yatay basılabilir format. İhale dokümanına entegre edilebilir kareler. Klasik ve Premium pakette dahil." },
      { question: "Sürücü/operatör portresi nasıl çekiliyor?", answer: "Çalışma anında, baret/güvenlik ayakkabılı, makinenin başında. Bireysel poz yapılmaz; iş başında kareler tercih edilir. Kişisel onayla dağıtılır." },
      { question: "Liman/lojistik kompleks çekimi yapıyor musunuz?", answer: "Evet — Kocaeli'nin liman yoğunluğu nedeniyle bu konuda deneyimimiz var. Konteyner stoku, RTG vinçler, yükleme/boşaltma süreçleri çekiliyor. Drone ile genel görüntü etkili." },
      { question: "Panaromik birleştirme nedir?", answer: "Çok geniş alanı (örn: 100m+ uzunluk üretim hattı) tek karede gösterebilmek için 5-10 ayrı kare çekip post-prodüksiyonda birleştirme. Standart yapımız değildir; özel istek üzerine yapılır." },
    ],
    relatedServices: ["fabrika-cekimi", "drone-fotograf-ve-video", "tanitim-filmi-cekimi", "kurumsal-fotograf-cekimi"],
    galleryCategory: "emlak",
    metaTitle: "Gebze Sanayi Fotoğrafçılığı | OSB Endüstriyel Çekim",
    metaDescription: "Gebze sanayi fotoğrafçısı. GOSB, TOSB, OSB tesis, depo, lojistik. ATEX uyumu, B2B katalog/ihale formatı. 0533 241 75 22",
  },
];
