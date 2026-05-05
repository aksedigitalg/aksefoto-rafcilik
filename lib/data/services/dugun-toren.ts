import type { Service } from "@/lib/types";

/**
 * Dugun, Nisan ve Toren Cekimleri kategorisi (14 hizmet)
 * Her hizmet icin yapi: meta + features + 3 paket + 6-8 SSS + ilgili hizmetler.
 * longDescription alani su an 200-250 kelime ozet icerir; Adim 5'te
 * her hizmet icin tek tek 1500+ kelimelik tam icerige genisletilecektir.
 */

export const dugunTorenServices: Service[] = [
  {
    slug: "dugun-fotografcisi",
    name: "Düğün Fotoğrafçısı",
    category: "dugun-toren",
    primaryKeyword: "düğün fotoğrafçısı",
    secondaryKeywords: [
      "Gebze düğün fotoğrafçısı",
      "Kocaeli düğün fotoğrafçısı",
      "düğün fotoğrafı çekimi",
      "düğün fotoğrafçı fiyatları",
      "profesyonel düğün fotoğrafçısı",
      "Darıca düğün fotoğrafçısı",
      "Çayırova düğün fotoğrafçısı",
    ],
    shortDescription:
      "Hayatınızın en özel gününü hikaye anlatan, doğal ve sanatsal karelerle ölümsüzleştiren profesyonel düğün fotoğrafçılığı.",
    longDescription: `Düğün günü; hazırlık kokulu sabahtan dans pistinin son şarkısına kadar süren, geri dönüşü olmayan bir gündür. Akse Fotoğrafçılık olarak Gebze Güzeller Mahallesi'ndeki stüdyomuzdan çıkıp Darıca, Çayırova, Dilovası ve İstanbul Anadolu yakasındaki düğünlere belgeselci bir bakışla geliyoruz. "Belgeselci" derken kastımız net: ailenin gerçek tepkilerini, kayınvalidenin gözyaşını, sağdıcın kahkahasını, dedenin kısa konuşmasını yakalamak; sahte sahnelenmiş pozlara değil günün kendiliğinden akışına odaklanmak.

Profesyonel düğün fotoğrafçılığı tek başına bir kameranın işi değildir. Mekan keşfi, ışık takibi, kıyafet uyumu, akış planlaması, ekipman yedeklemesi, edit standardı ve teslim süresi bir arada işlediğinde "iyi düğün fotoğrafı" çıkar. Bu sayfada yaklaşımımızı, çekim akışımızı, kullandığımız ekipmanı ve sözleştiğimiz beklentileri olabildiğince açık anlatmaya çalıştık.

## Belgeselci yaklaşım: Sahte poz değil, gerçek anılar

Türkiye'deki düğün fotoğrafçılığında iki ana ekol var. Birincisi klasik stüdyo poz odaklı çekim: gelin damadı duvarın önüne dizip "şimdi gül", "el ele tut", "yan dön" diyerek kareler oluşturur. İkincisi belgesel (documentary) tarz: günün kendiliğinden gelişen anlarını yakalar, müdahale minimumdur. İkisi de meşrudur, biz ikinciyi tercih ediyoruz çünkü on-yirmi yıl sonra geri dönüp baktığınızda hatırlamak istediğiniz şey poz vermiş bir karenizden çok, o gün yaşadığınız gerçek duygudur.

Bu yaklaşım, fotoğrafçının görünmez olmasını gerektirir. Gelin hazırlığı sırasında odanın bir köşesinden uzun lensle çekim yapıyor, anneye düğmeleri iliklerken arka planda durup karenin ortasına girmiyoruz. Sağdıçların damatla şakalaştığı saniyeleri, çiçeği takan annenin alnındaki teri, yüzükleri uzatan halaya bakan dedenin elini kayda alıyoruz. Bunlar planlanmış pozlar değil, gerçek anlar.

Tabii ki "sıfır poz" demiyoruz. Aile büyüklerinin grup karelerini (anneanne-babaanne-dede-nine düzeni), gelin-damat dış çekim seansını, yüzük-çiçek detay karelerini elbette planlı çekiyoruz. Ama bu kareler toplam fotoğrafların belki yüzde on beş-yirmisi. Geri kalan büyük çoğunluk, dokunulmamış an. Belgeselci tarzın bir başka avantajı: çocuklar ve yaşlılar daha rahat oluyor. "Şuraya geç, gül" demek özellikle yaşlı bir teyzeyi geriyor; o doğal halinde yakalanmak çok daha güzel ve gerçek bir kare çıkarıyor. Bu yüzden kameralarımız sürekli omuzda, lensimiz hep hazır.

## Düğün gününüz: Saat saat akış

Standart bir Türk düğünü on iki ile on dört saat sürer. Akse Fotoğrafçılık'ta tam gün paketimiz hazırlık başlangıcından düğün sonu yorgun aileyi son arabaya kadar uğurlamaya kadar uzanır. İşte tipik bir akış.

### Sabah hazırlığı

Çekim genelde gelin hazırlığıyla başlar. Saat 08:30-09:00 civarı kuaföre veya ev hazırlığına geliyoruz. Kuaförde detay çekimleri önce: çiçekler, ayakkabılar, yüzük, davetiye kartı, kolye, küpe — bir natürmort gibi düzenleyip kayda alıyoruz. Sonra makyaj sürecinde gelinin yüzüne yakın çekimler, anneyle el ele anlar, yüzüğün takılış anı.

Damat hazırlığı paralel ekiple veya ardışık olarak çekiliyor. Hikaye paketinde iki fotoğrafçı olduğu için hazırlıklar aynı anda kayıt edilir. Kravat takma, ceket düğmeleme, sağdıçlarla kahve içme, baba-oğul el sıkışma — damat tarafında da gözyaşı çoğu zaman gelinden daha çok düşer.

### Salon, nikah ve tören

Salondan önce mekan keşfi yapıyoruz. Hangi yöne ışık var, kürsünün arkası nasıl, davetlilerin oturma düzeni ne — bunları on-on beş dakika içinde haritalıyoruz. Nikah anında iki açıdan eş zamanlı çekim: biri gelin-damat yüz yüze, diğeri salon arka kareler.

"Evet" anının kareli kareli onlarca kare olarak geri dönmesini istiyoruz; bunun için 1/250 saniye shutter, sürekli çekim modu, sessiz elektronik shutter kullanıyoruz. Salon içinde flaş yerine yüksek ISO ve hızlı lens tercih ediyoruz; flaş çakmasının töreni bölmemesi için.

Yüzük takma anı, çiçek atma, ailelerin tebriği, fotoğraf kuyruğu — hepsi sırayla. Aile büyük portresi (anneanne-babaanne-dede-nine ve gelin-damat) genelde nikahtan hemen sonra, salon dağılmadan çekiliyor. Yaşlılar yorulmadan bu kareyi alıyoruz.

### Dış çekim ve kokteyl

Nikahtan sonra gelin-damat dış çekim seansı, en verimli kısımlardan biri. Bayramoğlu sahili, Eskihisar feneri, Hereke kıyıları, Marmara sahil yolu — düğün konseptine göre lokasyon öneriyoruz. Altın saat (gün batımından bir saat öncesi) yumuşak ışığında otuz-kırk beş dakika gelin-damatla baş başa çekim yapıyoruz.

Bu seansta belgeselci tarzdan kısmen ayrılıyoruz: klasik dış çekim pozları, sinematik yürüyüş kareleri, sosyal medya için hazır beş-altı kuvvetli kare alıyoruz. Drone uçacaksa bu saatte uçar — sahil çizgisi, gelin-damat sahil yolunda yürürken yukarıdan kareler.

### Salon, dans ve son anlar

Davet/yemek salonuna geçince flaş hazır: salon ışığı genelde sarı/sıcak olur, flaş ve bounce kart ile temiz ten tonu yakalıyoruz. Damatlığın ilk dansı, baba-kız dansı, pasta kesme, çiçek atma, halay — geleneksel sahnelerin hepsi.

Dans pisti açılınca uzun lens elden bırakılıyor, 35mm/50mm prime lensle pistin içine giriyoruz. Burada belgeselci tarzımıza döneriz; en iyi kareler dans pistinde, terlemiş yorgun ama mutlu yüzlerden çıkar. Son şarkıyla beraber gelin-damat uğurlama, ailenin yorgun ama gülümseyen son grup karesi, gelinin annesini son kucaklayışı — bu kareler düğün albümünün son sayfasını oluşturur, çoğu zaman sezgiyle çekilen en duygusal kareler.

## Gebze ve civarındaki düğün mekanlarımız

Bölgenin düğün salonlarını ve dış çekim noktalarını yakından tanıyoruz; her birinin ışık koşullarını ve en iyi açılarını biliyoruz. Düğününüzün yapılacağı mekanı söylediğinizde mümkünse bir hafta öncesinden mekan keşfi yapıyoruz: ışık yönü, salon planı, dış çekim için en iyi köşeler — hepsini önceden netleştiriyoruz.

Gebze tarafında Güzeller Mahallesi'ndeki yeni nesil davet salonları, Gebze sanayi bölgesindeki kurumsal etkinlik mekanları, eski Gebze çarşı içindeki klasik düğün salonları sıkça çalıştığımız yerler. Belediye nikah salonu için özel bir not: pencerelerden gelen ışık öğleden önce ideal, öğleden sonra arka kare ışıklı çıkar — buna göre planlama yapıyoruz.

Darıca'da Bayramoğlu sahili düğün için bölgenin en gözde dış çekim noktası — özellikle gün batımı saatleri büyülü. Faruk Yalçın Hayvanat Bahçesi yakınındaki davet salonları, Bağlarbaşı tarafındaki orta ölçekli düğün mekanları sıkça gittiğimiz yerler arasında. Çayırova'da Şekerpınar düğün salonları sanayi yoğun bir bölgede ama içleri modern. Akse, Yeni Mahalle gibi mahallelerin düğünleri genelde ev tipi sade törenler — bu tür törenleri de aynı titizlikle çekiyoruz.

Dilovası'nda düğün mekanları daha kompakt ama Diliskelesi sahil dış çekim için harika; Tavşancıl tarafının eski mahalle dokusu atmosfer çekimleri için ilginç. İstanbul Anadolu yakasında Tuzla kıyısı, Pendik sahil yolu, Kartal sahil — Gebze çıkışlı çiftlerin sıkça tercih ettiği komşu lokasyonlar. Tarihi mekanlar için Eskihisar Feneri ve çevresi nostaljik düğün konseptleri için ideal.

## Ekipman: Düşük ışıkta keskin, hızlı çekim

Düğün, fotoğrafçılığın en zor disiplini sayılır çünkü ışık kontrol edilemez (salon ışığı kötü, pist ışığı renkli, dış çekimde gün batıyor) ve kare kaçırılırsa geri dönüşü yok. Ekipmanımız bu zorluklara göre seçilmiş: ana gövde olarak Sony A7 IV, yedek gövde A7 III; her ikisi de düşük ışıkta gürültüsüz ve hızlı autofocus performansı sunuyor.

Lens parkımız Sigma 35mm f/1.4 Art (hazırlık ve dans pisti için ana lens, geniş diyafram düşük ışıkta kurtarıcı), Sony 85mm f/1.4 GM (gelin-damat portreleri ve dış çekim için sinematik bokeh) ve Tamron 28-75mm f/2.8 (salon ve genel kareler için zoom esnekliği) ile temellendirilmiş. Salon yemek bölümünde sarı ışığı düzeltmek için Profoto A1X flaş kullanıyoruz; ayrıca kablosuz off-camera kurulumu mümkün.

Açık alan dış çekimleri için DJI Mavic 3 drone ile 4K hava görüntüsü alıyoruz. Tüm kameralarda iki SD kart slotuna eş zamanlı kayıt; biri bozulursa ikincisi sağlam. Düğün sonu çift yedek alır eve dönüyoruz, asla kart üzerinde kart silmeyiz. Sigorta poliçemiz kapsamlı; ekipman çalınma/hasar durumunda çekim aksamayacak şekilde 24 saat içinde yedek temin edilir.

## Albüm, klip ve dijital teslim seçenekleri

Çekimden sonra ham fotoğrafları on dört gün içinde edit teslim ediyoruz; yoğun yaz aylarında bu süre yirmi bir güne uzayabilir. Edit dediğimiz: ten tonu düzeltme, beyaz dengesi kalibrasyonu, kontrast ve keskinlik dengeleme, gerekirse istenmeyen objelerin kaldırılması (dış çekimde arka planda yürüyen birisi gibi). Sosyal medya için beş-on kareyi 48 saat içinde WhatsApp'tan iletiyoruz; bu sayede düğün ertesi paylaşımlarınız beklemez.

Düğün albümü seçeneklerimiz üç başlıkta toplanır. Kristal kapak modern minimalist görünüm sunar, akrilik kapak premium hissiyatla birleşir. İtalyan kumaş kapak klasik şıklık ve dokunsal sıcaklık taşır. Klasik deri kapak zamansızdır, anneanneye hediye için ideal. Ek olarak anne-baba mini albümü (20x20 cm) asıl albümün küçük versiyonu olarak Premium pakette hediyedir.

Albüm sayfa sayısı otuz-altmış arası değişir; tasarımı önce dijital olarak gönderiyor, sayfa düzeni üzerinde bir-iki revizyon kabul ediyoruz, sonra baskıya gönderiyoruz. Baskı ve ciltleme süresi on dört-yirmi bir gün, yani toplamda düğünden dört-altı hafta sonra elinizde olur.

Düğün hikayesi (sinematik klip) Hikaye ve Premium paketlerde dahil. Beş-on dakikalık 4K MP4 dosya artı sosyal medya için 60 saniye/30 saniye dikey ve kare versiyonlar. Müzik seçimini birlikte yapıyoruz; YouTube/Instagram telifi için lisanslı parça öneriyoruz. Tüm fotoğraflar parolalı bir online albüme yüklenir, davetlilerle link paylaşabilir, kendi favorilerini seçip yüksek çözünürlükte indirebilirler. Bu bağlantı bir yıl aktif kalır.

## Şeffaf fiyatlandırma yaklaşımımız

Düğün fotoğrafçılığında en sık karşılaştığımız hayal kırıklığı şu: müşteri ucuz bir paketi rezerve ediyor, ama "drone, dış çekim, klip, albüm" derken çekim öncesi fiyat iki katına çıkıyor. Biz bu yaklaşımı reddediyoruz. Web sitemizdeki üç paketimizin fiyat aralığı net: Klasik (₺18.000-25.000), Hikaye (₺28.000-38.000, en popüler), Premium (₺42.000-60.000). Aralığın altı ve üstü; düğün tarihi (yaz/kış), saat süresi, ek hizmet (kına ekleme, ek günler) ve mekan mesafesi gibi etkenlere göre değişir.

Pakete dahil olan: çekim, edit, dijital teslim, online galeri, sosyal medya kareleri, USB. Ek ücret olabilen kalemler: drone (Klasik pakette opsiyonel), albüm baskısı (Klasik ve Hikaye pakette opsiyonel; Premium'da dahil), ek gün (kına/nikah salonu farklıysa), Anadolu yakası dışı düğünler için ulaşım/konaklama. İlk telefon görüşmesinde tüm bu detayları konuşur, yazılı sözleşme ile teyit ederiz. Çekim öncesi ekstra istek gelmesi durumunda yazılı eklenti yapılır; sürpriz fatura olmaz.

## Düğün fotoğrafçınızı ne zaman seçmelisiniz?

İdeal süre altı-dokuz ay öncesinden. Yaz sezonuna (haziran-eylül) denk düşen düğünler için bu süre dokuz-on iki aya çıkarmanızı öneriyoruz çünkü iyi düğün fotoğrafçıları sezon başında dolar. Aralık-mart arasındaki düğünler için üç-dört ay öncesinden müsaitlik kontrol etmek genelde yeter. Ama şunu unutmayın: profesyonel fotoğrafçılar hafta sonu birden fazla düğün almaz; yani aynı gün başka çift sizi geçerse boştasınız.

Müsaitlik sorgulamak için bize WhatsApp'tan tarih, mekan ve paket fikrini atın, 24 saat içinde dönelim. Müsaitsek ön sözleşme ve %30 kapora ile tarihi rezerve ediyoruz; geri kalan ödeme çekim sonrası teslim ile tamamlanır.

Düğün öncesi 30 dakikalık tanışma görüşmesi yapıyoruz: stüdyoda kahve içerken hayalinizdeki kareleri konuşuyor, kıyafet uyumu, lokasyon önerileri, akış planı üzerinde anlaşıyoruz. Bu görüşme ücretsiz ve bizim için de değerli; ekibimizin sizinle uyum sağlaması düğün gününün rahat geçmesi için kritik.

Düğün, geri dönüşü olmayan tek bir gün. Doğru fotoğrafçı seçimi, otuz-kırk yıl sonra çocuklarınıza, torunlarınıza gösterdiğinizde gurur duyacağınız hatıra demektir. Bizimle çalışmasanız bile, düğün fotoğrafçınızı belgeselci tarz, gerçek müşteri portfolyosu ve yazılı sözleşme kriterleriyle seçin.`,
    features: [
      "İki fotoğrafçı ile çift açı çekim",
      "Drone hava çekimi opsiyonu",
      "Düğün hikayesi (cinematic klip)",
      "Hazırlık + nikah + kokteyl tam gün kapsam",
      "Gelin damat dış çekim seansı dahil",
      "Profesyonel ışık + flaş ekipmanı",
      "14 günde edit teslim",
      "Sınırsız çekim, sınırsız edit",
    ],
    packages: [
      {
        name: "Klasik",
        priceRange: "₺18.000 - ₺25.000",
        description: "Salon çekimi odaklı temel paket",
        includes: [
          "1 fotoğrafçı, 6 saat kapsam",
          "300+ edit fotoğraf",
          "USB + dijital teslim",
          "Online galeri",
          "Hazırlık çekimi dahil",
        ],
      },
      {
        name: "Hikaye",
        priceRange: "₺28.000 - ₺38.000",
        description: "En popüler paketimiz — hem fotoğraf hem video",
        includes: [
          "2 fotoğrafçı + 1 videograf",
          "Tam gün kapsam (hazırlık → kokteyl)",
          "500+ edit fotoğraf",
          "5 dk düğün hikayesi (4K)",
          "Drone hava çekimi",
          "Save the Date dış çekim hediye",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺42.000 - ₺60.000",
        description: "Albüm + ek günlerle eksiksiz hatıra paketi",
        includes: [
          "2 fotoğrafçı + 1 videograf + drone",
          "Kına + nikah + düğün üç gün",
          "800+ edit fotoğraf",
          "10 dk sinematik düğün hikayesi",
          "30x30 cm kristal kapak albüm",
          "Trash the Dress veya After Wedding çekim",
          "Anne-baba için 20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Düğün fotoğrafçısı kaç ay öncesinden tutulmalı?",
        answer:
          "İdeal süre 6-9 aydır. Yaz aylarına denk gelen düğünler için en az 6 ay önceden müsaitlik kontrolü yaptırmanızı öneriyoruz; haziran-eylül arası tarihler hızlı dolar.",
      },
      {
        question: "Düğün fotoğrafları kaç günde teslim ediliyor?",
        answer:
          "Edit teslim süremiz ortalama 14 gündür. Yoğun sezonda (haziran-eylül) bu süre 21 güne uzayabilir. Acil 5-10 kareyi 48 saat içinde size iletiriz, böylece sosyal medya paylaşımlarınız beklemez.",
      },
      {
        question: "Kaç fotoğraf teslim ediliyor, sınırlama var mı?",
        answer:
          "Çekimde sınır yok — düğününüzün başından sonuna kadar yüzlerce kare çekiyoruz. Edit aşamasında en başarılı 300-800 kareyi (paketinize göre) renk, ışık ve detay düzeltmesinden geçirerek teslim ediyoruz.",
      },
      {
        question: "Ham (RAW) dosyalar veriliyor mu?",
        answer:
          "Standart pakette ham dosya verilmez; profesyonel fotoğrafçılık dünyasında ham dosyalar sanatçının imzası kabul edilir. Ek ücretle ham yedek talebi karşılanabilir; detaylar sözleşmeye eklenir.",
      },
      {
        question: "Düğün hikayesi (klip) ne kadar süre olur?",
        answer:
          "Standart klip 5 dakika, Premium pakette 10 dakikadır. Müzik seçimini sizinle birlikte belirliyor, telifsiz veya lisanslı parça önerisi sunuyoruz. Klip 4K çözünürlükte teslim edilir.",
      },
      {
        question: "Drone çekimi her düğünde yapılabiliyor mu?",
        answer:
          "Açık alanlardaki düğünlerde, hava koşulları ve uçuş izinleri uygunsa drone çekimi yapıyoruz. Salon içi düğünlerde drone kullanılmaz; mekan dışı genel kareler için kullanılır. SHGM uçuş kurallarına uygun hareket ediyoruz.",
      },
      {
        question: "Gebze dışında düğün için ek ücret var mı?",
        answer:
          "Gebze, Darıca, Çayırova ve Dilovası içinde ulaşım ücreti almıyoruz. İstanbul Anadolu yakası, Sakarya, Yalova düğünleri için sembolik bir ulaşım/konaklama ücreti sözleşmeye eklenir.",
      },
      {
        question: "Albüm baskısı dahil mi yoksa ayrı mı?",
        answer:
          "Klasik ve Hikaye paketlerinde dijital teslim esastır. Albüm baskısı opsiyoneldir; Premium pakette 30x30 cm kristal kapak albüm hediyedir. Albüm seçenekleri: kristal, italyan kumaş, klasik deri.",
      },
    ],
    relatedServices: ["dugun-hikayesi", "nisan-fotografcisi", "save-the-date", "after-wedding"],
    galleryCategory: "dugun",
    metaTitle: "Gebze Düğün Fotoğrafçısı | Hikaye Anlatan Düğün Çekimi",
    metaDescription:
      "Gebze, Darıca, Çayırova, Dilovası düğün fotoğrafçısı. Belgeselci yaklaşım, drone, sinematik klip, 14 günde edit teslim. Hemen ara: 0539 633 03 58",
  },

  {
    slug: "dugun-hikayesi",
    name: "Düğün Hikayesi (Sinematik Klip)",
    category: "dugun-toren",
    primaryKeyword: "düğün hikayesi",
    secondaryKeywords: [
      "düğün klibi",
      "sinematik düğün videosu",
      "Gebze düğün klibi",
      "düğün hikayesi çekimi",
      "wedding film",
      "4K düğün videosu",
    ],
    shortDescription:
      "Düğününüzü 5-10 dakikalık sinematik bir kısa filme dönüştürüyoruz: kurgu, müzik, renk yönetimiyle.",
    longDescription: `Düğün hikayesi (cinematic wedding film), düğün gününüzü standart bir kayıttan çıkarıp gerçek bir kısa filme dönüştürür. Akse Fotoğrafçılık olarak düğün klibi çekimini sinema diliyle planlıyoruz: hazırlık anlarındaki sessiz duygulardan, nikah sahnesindeki gözyaşına ve dans pistinin enerjisine kadar her an doğru tempoda kurgulanıyor.

Çekimde sinema seviyesinde 4K kameralar, gimbal stabilizatör, kablosuz yaka mikrofonu ve düşük ışık performansı yüksek lensler kullanıyoruz. Yemin metinleri ve baba-kız konuşması net duyulsun diye konuşmacılara mikrofon takıyor, salon ortam sesini ayrıca kayıt ediyoruz. Drone çekimi açık alan düğünlerinde hikayeye derinlik katıyor.

Kurguda renk korreksiyonu (color grading) sinemasal bir tonlama sağlıyor; pop, romantik orkestral veya akustik tarzda — düğün konseptinize uygun müzik seçimi yapıyoruz. Telif takipli platformlarda (YouTube, Instagram) sorun çıkmaması için lisanslı parça kullanıyoruz.

Standart düğün klibi süremiz 5 dakika; Premium pakette 10 dakikalık genişletilmiş hikaye sunuyoruz. Sosyal medya için 30 saniyelik kısa teaser hediye, böylece düğünden hemen sonra paylaşabileceğiniz bir önizleme elinizde olur. Klip 4K MP4 + sosyal medya için 1080p kare/dikey versiyonlarıyla teslim edilir.`,
    features: [
      "4K sinema kalitesinde çekim",
      "Gimbal stabilizatör + ek kamera açıları",
      "Yemin/konuşmaya kablosuz mikrofon",
      "Renk koreksiyonu (color grading)",
      "Müzik seçimi danışmanlığı (lisanslı)",
      "Drone hava çekimleri (uygunsa)",
      "30 sn sosyal medya teaser hediye",
      "MP4 + sosyal medya formatları",
    ],
    packages: [
      {
        name: "Mini Hikaye",
        priceRange: "₺8.000 - ₺12.000",
        description: "Salon odaklı 3 dk klip",
        includes: ["3 dakika klip", "1 kameraman", "Tek müzik teması", "1080p teslim"],
      },
      {
        name: "Sinematik",
        priceRange: "₺14.000 - ₺22.000",
        description: "Tam gün kapsam, 5 dk hikaye",
        includes: [
          "5 dakika sinematik klip",
          "1 ana + 1 yardımcı kamera",
          "Gimbal + mikrofon",
          "30 sn teaser hediye",
          "4K teslim",
        ],
        popular: true,
      },
      {
        name: "Sinema Filmi",
        priceRange: "₺26.000 - ₺38.000",
        description: "10 dakikalık genişletilmiş anlatı",
        includes: [
          "10 dakika hikaye",
          "2 kameraman + drone",
          "Çoklu mikrofon kayıt",
          "Renk koreksiyonu",
          "Teaser + uzun + sosyal medya formatları",
        ],
      },
    ],
    faqs: [
      {
        question: "Düğün klibi kaç dakika olmalı?",
        answer:
          "Standart 5 dakika ideal süredir; izleyicinin dikkati dağılmadan tüm önemli anlar yer alır. 10 dakikalık versiyon, daha çok aile/yakın çevre için ayrıntılı izlenmesi düşünülen klipler için tercih edilir.",
      },
      {
        question: "Düğün klibinde kullanılan müzik telifli mi?",
        answer:
          "Telif sorunu çıkmaması için lisanslı stok platformlarından (Musicbed, Artlist, Soundstripe) parça kullanıyoruz. Belirli bir popüler şarkı isterseniz, sosyal medyada Content ID engeline takılma ihtimali olduğunu önceden bildiriyoruz.",
      },
      {
        question: "Klip ne zaman teslim edilir?",
        answer:
          "Standart teslim süresi 4-6 haftadır. Düğünden hemen sonra paylaşabileceğiniz 30 saniyelik teaser klibi ise 7-10 günde size iletiriz.",
      },
      {
        question: "Konuşmalar net duyulacak mı?",
        answer:
          "Evet — damat ve gelin/baba/şahit gibi konuşmacılara kablosuz yaka mikrofonu takıyoruz. Salon DJ'inin mikserinden de hat çekiyoruz, böylece müzik ile konuşma ses dengeli kayda alınır.",
      },
      {
        question: "Drone hangi hava şartlarında uçar?",
        answer:
          "Yağış ve 7 m/s üstü rüzgarda uçuş yapılmaz; emniyet önceliklidir. Açık alan düğünlerinde sabah/öğleden sonra ışık optimumken uçurmayı tercih ediyoruz.",
      },
      {
        question: "Düğün hikayesi sadece video mu, yoksa fotoğraf da var mı?",
        answer:
          "Düğün hikayesi yalnızca video paketidir. Fotoğraf çekimi için 'Düğün Fotoğrafçısı' hizmetimiz ayrıdır; ikisini birlikte alırsanız 'Hikaye' paketinde önemli bir indirim uygulanır.",
      },
    ],
    relatedServices: ["dugun-fotografcisi", "drone-fotograf-ve-video", "save-the-date", "after-wedding"],
    galleryCategory: "video",
    metaTitle: "Gebze Düğün Hikayesi | Sinematik Düğün Klibi Çekimi",
    metaDescription:
      "Gebze sinematik düğün klibi. 4K kamera, gimbal, drone, kablosuz mikrofon. 5-10 dk düğün hikayesi + sosyal medya teaser. Lisanslı müzik. 0539 633 03 58",
  },

  {
    slug: "dugun-klibi",
    name: "Düğün Klibi",
    category: "dugun-toren",
    primaryKeyword: "düğün klibi",
    secondaryKeywords: [
      "Gebze düğün klibi",
      "düğün videosu çekimi",
      "kısa düğün klibi",
      "salon düğün klibi",
      "düğün filmi",
    ],
    shortDescription:
      "Klasik anlatımlı düğün klibi: nikah, dans, kokteyl ve tüm gecenin akışını kronolojik olarak özetleyen video.",
    longDescription: `Düğün klibi, sinematik 'düğün hikayesi' çekiminin biraz daha klasik ve kronolojik versiyonudur. Düğününüzün başından sonuna kadar olan akışı, sahne sahne ve müzik eşliğinde sade bir kurguyla özetler. Bütçe-fayda dengesini önemseyen çiftler için ideal bir tercihtir.

Kayıt aşamasında salon ışığını dengelemek için ek panel ışıklar kullanıyor, gimbal stabilizatörle düşük ışık dahi temiz görüntü almayı sağlıyoruz. Damatın ve gelinin yemin/konuşma sahneleri için telsiz mikrofonla net ses kaydı alınıyor.

Klip kurgusunda renk koreksiyonu uygulanır ancak sinema seviyesinde grading yapılmaz; bu sayede süreç hızlanır ve maliyet düşer. Standart süre 7-10 dakikadır; düğünün tüm ana anlarını (hazırlık özeti, nikah, dans, ilk dans, takı töreni, kokteyl) içerir. Sosyal medya için 60 saniyelik kısa versiyon hediye olarak sunulur.

Teslim süresi 4 haftadır. Klip MP4 formatında, USB veya dijital indirme linkiyle iletilir. Aynı düğünden 'Düğün Fotoğrafçısı' hizmetimizi de alıyorsanız fiyatta kombine indirim uygulanır.`,
    features: [
      "1 kameraman, salon odaklı kayıt",
      "Yaka mikrofonu ile net ses",
      "7-10 dakika kronolojik kurgu",
      "60 sn sosyal medya kısa versiyon hediye",
      "Renk koreksiyonu",
      "1080p Full HD veya 4K (paket)",
      "USB + dijital teslim",
      "4 haftada teslim",
    ],
    packages: [
      {
        name: "Salon",
        priceRange: "₺6.000 - ₺9.000",
        description: "Sade, salon odaklı klasik klip",
        includes: ["1 kameraman", "5 saat kapsam", "7 dk klip", "1080p teslim"],
      },
      {
        name: "Tam Gün",
        priceRange: "₺10.000 - ₺15.000",
        description: "Hazırlık + salon kapsam",
        includes: [
          "Tam gün kapsam",
          "10 dk klip",
          "Yaka mikrofonu",
          "60 sn teaser",
          "1080p teslim",
        ],
        popular: true,
      },
      {
        name: "Tam Gün 4K",
        priceRange: "₺16.000 - ₺22.000",
        description: "4K kayıt, gimbal stabilizatör",
        includes: ["Tam gün kapsam", "10 dk 4K klip", "Gimbal", "60 sn teaser", "Renk korreksiyonu"],
      },
    ],
    faqs: [
      {
        question: "Düğün klibi ile düğün hikayesi arasındaki fark nedir?",
        answer:
          "Düğün hikayesi sinematik bir kısa film tadındadır, duygu odaklı ve estetik olarak filmsel kurgulanır. Düğün klibi ise daha kronolojik, klasik bir özet sunar. Hikayede süreç ve fiyat daha yüksektir; klip ise hızlı ve ekonomiktir.",
      },
      {
        question: "Klip hangi platformlarda kullanılabilir?",
        answer:
          "MP4 formatında teslim ettiğimiz için TV, Smart Phone, sosyal medya, YouTube ve düğün websiteleri dahil her yerde kullanabilirsiniz. Lisanslı müzik kullandığımız için Content ID sorunu yaşanmaz.",
      },
      {
        question: "Müzik seçimini biz mi yapıyoruz?",
        answer:
          "Stilinize uygun 3-5 farklı parça öneriyoruz; siz seçim yapıyorsunuz. Belirli bir parçanız varsa, telif durumunu birlikte değerlendiriyoruz.",
      },
      {
        question: "Damatın ve gelinin yeminleri net duyulacak mı?",
        answer:
          "Tam Gün ve 4K paketlerimizde yaka mikrofonu standarttır. Salon paketinde ek ücretle eklenebilir.",
      },
      {
        question: "Klip kaç günde teslim ediliyor?",
        answer:
          "Standart teslim süresi 4 haftadır. Yoğun sezonda 5 haftaya uzayabilir. 60 sn teaser klibini ise 1 hafta içinde size iletiriz.",
      },
      {
        question: "Klipte fotoğraflar da yer alıyor mu?",
        answer:
          "Klipte odak video kayıttır. Fotoğraf çekimi 'Düğün Fotoğrafçısı' hizmetimiz altındadır; ikisini birlikte alarak görsel-ses bütünlüğü sağlanmış bir hatıra elde edersiniz.",
      },
    ],
    relatedServices: ["dugun-hikayesi", "dugun-fotografcisi", "video-cekimi", "drone-fotograf-ve-video"],
    galleryCategory: "video",
    metaTitle: "Gebze Düğün Klibi | Klasik Düğün Videosu Çekimi",
    metaDescription:
      "Gebze düğün klibi çekimi. Salon ve tam gün paketler, 4K seçeneği, yaka mikrofonu, 60 sn teaser hediye. Hızlı teslim. Bilgi: 0539 633 03 58",
  },

  {
    slug: "nikah-fotografcisi",
    name: "Nikah Fotoğrafçısı",
    category: "dugun-toren",
    primaryKeyword: "nikah fotoğrafçısı",
    secondaryKeywords: [
      "Gebze nikah fotoğrafçısı",
      "nikah salonu çekimi",
      "belediye nikahı fotoğrafı",
      "Darıca nikah fotoğrafçısı",
      "Çayırova nikah fotoğrafçısı",
    ],
    shortDescription:
      "Belediye veya özel mekanda gerçekleşen nikah töreniniz için sade ama etkileyici fotoğraf çekimi.",
    longDescription: `Nikah töreni — düğünün resmi adımı ve belki de en duygusal anı. Akse Fotoğrafçılık olarak nikah çekimini düğünden ayrı bir hizmet olarak da veriyoruz; özellikle belediye nikahını sade, samimi ve hızlı şekilde belgelemek isteyen çiftler için ideal bir paket sunuyoruz. Gebze, Darıca, Çayırova, Dilovası ve Tuzla belediye nikah salonlarında deneyimliyiz.

Tören öncesi salon keşfi yapıyoruz; nikah masasının arka planı, ışık yönü, akrabaların oturduğu sıralar — hepsi önceden tespit edilir. Tören sırasında hareket etmeden objektif değişimi yapabilen bir set kuruyoruz, böylece ne nikah memurunun konuşmasını ne de evet anlarındaki yüz ifadelerini kaçırıyoruz.

Tören sonrası 15-30 dakikalık kısa bir poz seansı düzenliyoruz: çift portresi, ailelerle grup karesi, şahitlerle kısa karelar. Salon dışında uygun bir alan varsa (bahçe, taş duvar, geniş cephe), birkaç dış mekan karesi de alıyoruz.

Edit teslim süremiz 7-14 gündür; sosyal medya için en başarılı 5-10 kareyi 48 saat içinde size iletiyoruz. Düğün öncesi/sonrası nikahlar için ekonomik 2-3 saatlik paket ideal seçenektir; sadece nikah evi için 'Klasik' paketimiz, nikah + evdeki kokteyl için 'Genişletilmiş' paketimiz uygundur.`,
    features: [
      "1 fotoğrafçı, salon odaklı",
      "Tören öncesi mekan keşfi",
      "Çift portresi + aile grup kareleri",
      "Salon dışı kısa dış çekim",
      "Sessiz çekim modu (bell sound off)",
      "7-14 günde edit teslim",
      "Online galeri + dijital indirme",
      "Yedek hafıza kartı + yedek kamera",
    ],
    packages: [
      {
        name: "Belediye",
        priceRange: "₺3.500 - ₺5.000",
        description: "Sadece nikah töreni — 90 dakika",
        includes: [
          "1 fotoğrafçı",
          "90 dakika kapsam",
          "100+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Klasik",
        priceRange: "₺5.500 - ₺8.500",
        description: "Nikah + tören sonrası 30 dk dış çekim",
        includes: [
          "1 fotoğrafçı",
          "3 saat kapsam",
          "200+ edit fotoğraf",
          "Tören sonrası dış çekim",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Genişletilmiş",
        priceRange: "₺9.000 - ₺13.000",
        description: "Nikah + evde kokteyl/yemek kapsamı",
        includes: [
          "2 fotoğrafçı",
          "5 saat kapsam",
          "300+ edit fotoğraf",
          "Dış çekim + ev/restoran kokteyl",
          "USB + dijital teslim",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Belediye nikahında flaş kullanılıyor mu?",
        answer:
          "Salon ışığı yeterliyse flaş kullanmıyoruz; doğal kareler için bu daha doğru bir tercih. Düşük ışıkta tavan/duvardan yansıtmalı flaş kullanarak göz almayan, doğal görünümlü bir aydınlatma sağlıyoruz.",
      },
      {
        question: "Yüzükleri ve nikah cüzdanını çekiyor musunuz?",
        answer:
          "Evet — yüzük takma anı, nikah cüzdanının imzalanması ve gelinin elinde yüzükle yakın detay kareler standart paketin parçasıdır. Ayrıca yakın akrabalardan yüzükleri ve cüzdanı tutarken yapı kareler de ekliyoruz.",
      },
      {
        question: "Tören sonrası dış mekan çekimi nerede yapılır?",
        answer:
          "Belediye binasının dış cephesi, çevre park alanları veya size yakın bir buluşma noktasında 20-30 dakikalık kısa bir seans yapıyoruz. Gebze Eskihisar, Darıca Sahili, Bayramoğlu önerilen güzel mekanlar arasındadır.",
      },
      {
        question: "Nikah ve düğünü ayrı tarihlerde yapacağız, ikisini birlikte alabilir miyiz?",
        answer:
          "Tabi — 'Nikah + Düğün Kombo' paketinde belirli bir indirim uyguluyoruz. Üstelik aynı fotoğrafçı her iki günde de sizinle olduğu için görsel bütünlük sağlanır.",
      },
      {
        question: "Çekim için kıyafet seçimi konusunda öneri verir misiniz?",
        answer:
          "Evet — koyu lacivert/gri takım, sade beyaz veya nude gelinlik, abartısız aksesuar nikah çekiminde en iyi sonucu verir. Detaylı kıyafet danışmanlığı için ön görüşmede konuşuyoruz.",
      },
      {
        question: "Belediye salonunda fotoğrafçıya izin var mı?",
        answer:
          "Türkiye'de belediye nikah salonlarında dış fotoğrafçıya genelde izin verilir; ancak nikah memurunun talimatlarına uyma zorunluluğu vardır. Özel salon (otel, restoran) gerektirmez. Gebze, Darıca, Çayırova belediyelerinde defalarca çalıştığımız için süreci biliyoruz.",
      },
    ],
    relatedServices: [
      "dugun-fotografcisi",
      "soz-fotograf-cekimi",
      "evlilik-teklifi-fotograf-cekimi",
      "dis-cekim-fotograf",
    ],
    galleryCategory: "dugun",
    metaTitle: "Gebze Nikah Fotoğrafçısı | Belediye Nikahı Çekimi",
    metaDescription:
      "Gebze, Darıca, Çayırova belediye nikahı fotoğrafçısı. Sade, doğal, hızlı teslim. 90 dk paketten genişletilmiş nikah+kokteyl paketine. 0539 633 03 58",
  },

  {
    slug: "nisan-fotografcisi",
    name: "Nişan Fotoğrafçısı",
    category: "dugun-toren",
    primaryKeyword: "nişan fotoğrafçısı",
    secondaryKeywords: [
      "Gebze nişan fotoğrafçısı",
      "nişan çekimi",
      "nişan töreni fotoğraf",
      "Darıca nişan fotoğrafçı",
      "söz ve nişan çekimi",
    ],
    shortDescription:
      "Nişan töreniniz için samimi ve duygusal kareler — yüzük takma anından aile karelerine kadar.",
    longDescription: `Nişan töreni, evlilik yolculuğunun ilk resmi adımı; iki ailenin tanışması ve duyguların doruk noktasına çıktığı bir anıdır. Akse Fotoğrafçılık olarak nişan çekimini düğünden ayrı bir özene değerek planlıyoruz. Gebze, Darıca, Çayırova ve Dilovası'ndaki nişan salonları, ev nişanları ve restoran törenlerinde tecrübeliyiz.

Nişan çekimi, düğün gecesinden farklı olarak daha küçük bir kalabalıkla, aile ağırlıklı bir tören olduğu için yakın çekim ve yüz ifadelerine odaklanıyoruz. Yüzük takma anı, hediye verme, anne-babaların duygulu hareketleri, kardeş kareleri — her bir an ayrı bir hatıra. Salon ışığını incelemek için törenden 1 saat önce mekana geliyor, ışık ölçümü yapıp poz alanlarını işaretliyoruz.

Tören öncesi gelinin/damadın hazırlık aşamasını opsiyonel olarak çekiyoruz (paket farkı uygulanır). Tören sonunda 30 dakikalık kısa bir çift seansı planlıyoruz; salon dışında uygun bir alan varsa dış çekim, yoksa salon içinde sade bir köşe seçiyoruz.

Edit teslim süremiz 7-10 gündür; sosyal medya paylaşımı için ilk 5-10 kareyi 24 saat içinde önce iletiyoruz. Nişan ve düğün kombineli alımlarda fiyatta indirim uygulanıyor; aynı fotoğrafçının her iki etkinlikte de bulunması görsel bütünlük açısından çok değerli.`,
    features: [
      "Yüzük takma anına özel detay çekim",
      "Aile ve akraba grup kareleri",
      "Tören sonrası çift seansı (30 dk)",
      "Salon ışığına göre flaş ayarlaması",
      "Önce 5-10 kare hızlı paylaşım",
      "7-10 günde tam edit teslim",
      "Online galeri",
      "Dijital + USB teslim",
    ],
    packages: [
      {
        name: "Sade Nişan",
        priceRange: "₺4.000 - ₺6.000",
        description: "Salon odaklı nişan, 2 saat kapsam",
        includes: [
          "1 fotoğrafçı",
          "2 saat kapsam",
          "150+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Klasik",
        priceRange: "₺7.000 - ₺10.000",
        description: "Nişan + tören sonrası dış çekim",
        includes: [
          "1 fotoğrafçı",
          "3-4 saat kapsam",
          "250+ edit fotoğraf",
          "Tören sonrası 30 dk dış çekim",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺11.000 - ₺16.000",
        description: "Hazırlık + tören + dış çekim, video dahil",
        includes: [
          "2 fotoğrafçı",
          "Hazırlık + tören kapsam (5 saat)",
          "350+ edit fotoğraf",
          "3 dk nişan klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Nişan çekiminde drone kullanılır mı?",
        answer:
          "Salon nişanlarında drone kullanılmaz. Açık alan/villa/bahçe nişanlarında, hava şartları uygunsa drone ile genel kareler alabiliriz. Drone hizmeti 'Hikaye' paketinde isteğe bağlı eklenir.",
      },
      {
        question: "Yüzük takma anına özel detay çekimi yapılıyor mu?",
        answer:
          "Evet — bu nişan çekiminin en önemli karelerinden biridir. Yakın çekim için makro lens kullanıyor, yüzüklerin parlak detayını ve elin yumuşak hatlarını net yakalıyoruz.",
      },
      {
        question: "Nişan ve düğünü birlikte alırsak indirim olur mu?",
        answer:
          "Evet — 'Nişan + Düğün Kombo' paketinde her iki etkinlik için belirli bir oranda indirim uygulanır. Detayları ön görüşmede netleştiriyoruz.",
      },
      {
        question: "Aile grup kareleri kaç kişiye kadar çıkabilir?",
        answer:
          "Geniş aile için bile 30-40 kişilik grup karelerini rahatça çekebiliyoruz. Salon ışığını ve mekan kapasitesini önceden değerlendirip ideal kompozisyonu hazırlıyoruz.",
      },
      {
        question: "Edit teslim süresi düğün ile aynı mı?",
        answer:
          "Nişan çekimi düğünden daha az kare üretir; bu yüzden teslim süremiz 7-10 gündür (düğün için 14 gün). İlk 5-10 kare 24 saatte size iletilir.",
      },
      {
        question: "Nişan çekiminde hangi kıyafet rengi en iyi sonucu verir?",
        answer:
          "Pastel tonlar, nude, nude pembe, beyaz/krem dökümlü kıyafetler nişan çekiminde fotoğrafın yumuşak görünmesini sağlar. Çok parlak/gri çizgili desenlerden kaçınmanızı öneriyoruz.",
      },
    ],
    relatedServices: [
      "dugun-fotografcisi",
      "soz-fotograf-cekimi",
      "kina-fotograf-cekimi",
      "evlilik-teklifi-fotograf-cekimi",
    ],
    galleryCategory: "nisan",
    metaTitle: "Gebze Nişan Fotoğrafçısı | Profesyonel Nişan Çekimi",
    metaDescription:
      "Gebze, Darıca, Çayırova nişan fotoğrafçısı. Yüzük takma detayı, aile grup kareleri, tören sonrası dış çekim. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "soz-fotograf-cekimi",
    name: "Söz Fotoğraf Çekimi",
    category: "dugun-toren",
    primaryKeyword: "söz fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze söz çekimi",
      "söz töreni fotoğrafçısı",
      "ev sözü çekimi",
      "söz fotoğrafları",
      "küçük söz töreni",
    ],
    shortDescription:
      "Söz töreniniz için sıcak, samimi ve aile odaklı fotoğraf çekimi — genelde ev veya küçük bir restoranda.",
    longDescription: `Söz töreni, evlilik kararının iki aile arasında resmiyetinin ilk adımıdır. Genellikle nişandan önce, kızın evinde gerçekleşir; küçük, samimi ve aile odaklıdır. Akse Fotoğrafçılık olarak söz çekimini bu samimiyetin ruhuna uygun şekilde planlıyoruz: gösterişsiz, doğal, anın akışına saygılı.

Çekimde tek fotoğrafçı yeterlidir; ev içi ışığını incelemek için törenden 30 dakika önce alana geliyor, perde, lamba ve oturma düzeni hakkında ev sahibiyle bilgi alışverişi yapıyoruz. Doğal gün ışığını mümkün olduğunca kullanıyor, gerektiğinde tavandan yansıtmalı yumuşak flaş ile destek ışık veriyoruz — gözlerin parlamasına neden olmadan.

Söz çekiminin önemli anları: gelenek söz tatlısı, baba-kız konuşması, yüzük takma (söz nişanı geleneği varsa), aile grup kareleri ve genç çiftin kısa bir poz seansı. 1.5-2 saatlik kapsam genelde yeterli olur. Tören sonunda 15-20 dakikalık kısa bir çift portresi yapmayı öneriyoruz.

Edit teslim süremiz 7 gündür. Sosyal medya için 3-5 kareyi 24 saat içinde size iletiyoruz. Söz çekimi, daha sonra alacağınız nişan ve düğün hizmetleriyle pakette indirim sağlar.`,
    features: [
      "1 fotoğrafçı, sade ekipman",
      "Aile odaklı samimi yaklaşım",
      "Doğal ışık + tavandan yansıma flaş",
      "Söz tatlısı + yüzük takma detayları",
      "Çift portresi (15-20 dk)",
      "5-10 kare hızlı paylaşım (24 saat)",
      "7 günde tam edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Mini Söz",
        priceRange: "₺2.500 - ₺3.500",
        description: "Sadece tören saatleri, 1 saat",
        includes: [
          "1 fotoğrafçı",
          "1 saat kapsam",
          "80+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Klasik Söz",
        priceRange: "₺3.500 - ₺5.000",
        description: "Tören + çift portresi",
        includes: [
          "1 fotoğrafçı",
          "2 saat kapsam",
          "120+ edit fotoğraf",
          "Çift portresi (15-20 dk)",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Söz + Yemek",
        priceRange: "₺5.500 - ₺8.000",
        description: "Aile yemeği dahil genişletilmiş kapsam",
        includes: [
          "1 fotoğrafçı",
          "3-4 saat kapsam (yemek dahil)",
          "180+ edit fotoğraf",
          "Çift portresi + yemek aile kareleri",
          "USB + dijital + 20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Söz çekimi nişan çekiminden farklı mı?",
        answer:
          "Evet — söz çekimi daha küçük, daha samimi ve aile odaklıdır; genelde evde yapılır. Nişan çekimi ise daha büyük, salonda ve daha resmi bir törenin belgelenmesidir. Söz çekiminde tek fotoğrafçı genelde yeterlidir.",
      },
      {
        question: "Söz çekiminde yüzük takılıyor mu?",
        answer:
          "Bazı geleneklerde söz töreninde de yüzük takılır (söz yüzüğü), bazılarında ise sadece nişanda. Sizin geleneğinizi önceden öğrenip ona göre plan yapıyoruz.",
      },
      {
        question: "Çekim öncesi evi düzenlememiz gerekiyor mu?",
        answer:
          "Çekim alanlarını sade ve düzenli tutmak görsel kaliteyi artırır — özellikle koltuğun arka planı ve yüzük takılan masanın çevresi. Ön görüşmede size kısa bir hazırlık önerisi listesi gönderiyoruz.",
      },
      {
        question: "Çift portresi evin içinde mi yapılıyor?",
        answer:
          "Hava ve mekan uygunsa balkon, bahçe veya evin yakınındaki bir parkta dış çekim yapıyoruz. Yoksa evin içindeki en bol ışıklı pencere önünde sade bir portre çekiyoruz.",
      },
      {
        question: "Söz + nişan + düğünü birlikte aldığımızda fiyat nasıl etkileniyor?",
        answer:
          "Bu kombinasyon en avantajlı seçenektir; söz çekimi neredeyse hediye gibi pakete eklenir. Üstelik aynı fotoğrafçı tüm etkinliklerinizi çekeceği için tutarlı bir görsel hatıra elde edersiniz.",
      },
      {
        question: "Söz çekimi kaç günde teslim edilir?",
        answer:
          "Edit teslim süremiz 7 gündür. Sosyal medya için 3-5 kareyi 24 saat içinde önceden iletiyoruz, böylece akrabalarınıza erken paylaşım yapabilirsiniz.",
      },
    ],
    relatedServices: [
      "nisan-fotografcisi",
      "evlilik-teklifi-fotograf-cekimi",
      "dugun-fotografcisi",
      "kina-fotograf-cekimi",
    ],
    galleryCategory: "nisan",
    metaTitle: "Gebze Söz Fotoğraf Çekimi | Samimi Söz Töreni Çekimi",
    metaDescription:
      "Gebze söz çekimi. Ev odaklı, sade ve samimi yaklaşım. Söz tatlısı, yüzük detayı, aile kareleri. Hızlı teslim. Bilgi: 0539 633 03 58",
  },

  {
    slug: "kina-fotograf-cekimi",
    name: "Kına Fotoğraf Çekimi",
    category: "dugun-toren",
    primaryKeyword: "kına fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze kına fotoğrafçısı",
      "kına gecesi fotoğrafları",
      "geleneksel kına çekimi",
      "kına gecesi videosu",
      "Darıca kına fotoğrafçı",
    ],
    shortDescription:
      "Geleneksel kına gecenizin coşkusunu, gözyaşlarını ve dansını yakalayan profesyonel çekim.",
    longDescription: `Kına gecesi, Türk düğün geleneğinin en duygulu ve renkli anıdır. Akse Fotoğrafçılık olarak kına çekimini hem belgeselci hem de sanatsal bir bakışla planlıyoruz. Gelin alayı, kına yakma, şarkılar, dans ve gözyaşları — her sahne kendi atmosferine uygun teknikle çekiliyor.

Salon kına geceleri için tören öncesi mekana en az 1 saat önce gelip ışık ve poz alanlarını planlıyoruz. Bindallı veya kına kıyafetinin parıltılarını korumak için yumuşak yansıma flaş kullanıyoruz; gelinin yüzündeki duygu doğal kalsın diye direkt flaş kullanmıyoruz. Sahne kareleri için telefoto lens (70-200mm), salon genel kareleri için geniş açı lens (24-70mm) eş zamanlı kullanılıyor.

Geleneksel kına yakma anının duygusal yoğunluğu çok yüksektir; gelinin elinden başlayıp yüzüne uzanan duygu geçişini yakalamak için bir fotoğrafçı gelin yakınında, diğeri salon panaromasında konumlanır. Hikaye paketi alındığında 3 dakikalık kısa bir kına klibi de hazırlıyoruz; bu klip sosyal medyada düğün öncesi paylaşım için ideal.

Edit teslim süremiz 10-14 gündür; sosyal medya için 5-10 kareyi 48 saat içinde iletiyoruz. Düğün ve kına ayrı tarihlerde fakat aynı stüdyodan alındığında pakette indirim uygulanır.`,
    features: [
      "Salon ışığına uygun yansıtmalı flaş",
      "Kına yakma anına özel yakın detay",
      "Bindallı + nişanlı + dans kareleri",
      "İki açı kapsam (gelin yakını + salon)",
      "Aile + arkadaş grup kareleri",
      "Hikaye paketinde 3 dk kına klibi",
      "5-10 kare hızlı paylaşım (48 saat)",
      "10-14 günde edit teslim",
    ],
    packages: [
      {
        name: "Salon",
        priceRange: "₺6.000 - ₺9.000",
        description: "Salon kına gecesi, tek fotoğrafçı",
        includes: [
          "1 fotoğrafçı",
          "3 saat kapsam",
          "200+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Hikaye",
        priceRange: "₺10.000 - ₺14.000",
        description: "Çift fotoğrafçı + 3 dk klip",
        includes: [
          "2 fotoğrafçı + 1 videograf",
          "Hazırlık + tören kapsam",
          "300+ edit fotoğraf",
          "3 dk kına klibi",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺15.000 - ₺22.000",
        description: "Klip + albüm + bindallı dış çekim",
        includes: [
          "2 fotoğrafçı + 1 videograf + drone (uygunsa)",
          "Hazırlık + tören + dış çekim",
          "400+ edit fotoğraf",
          "5 dk kına hikayesi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Kına gecesi videosunu da çekiyor musunuz?",
        answer:
          "Hikaye ve Premium paketlerinde 3-5 dakikalık kına klibi standartken Salon paketinde sadece fotoğraf vardır. Klip ek hizmet olarak da eklenebilir.",
      },
      {
        question: "Bindallı detayları için ek çekim oluyor mu?",
        answer:
          "Evet — kına başlamadan önce gelinin bindallısının detaylarını (işlemeler, takılar, baş süslemesi) makro lensle yakın çekiyoruz. Bu kareler düğün albümünde özel bir bölüm oluşturur.",
      },
      {
        question: "Salon ışığı çok sarı olunca fotoğraflar kötü çıkıyor mu?",
        answer:
          "Hayır — beyaz dengesi ayarını ortama göre yapıyoruz. Sarı ışıklı salonlarda flaşı tavandan yansıtarak ışığı dengeliyoruz, edit aşamasında ten tonu için manuel düzeltme uyguluyoruz.",
      },
      {
        question: "Kına ve düğün ayrı günlerde, fotoğrafçı aynı olabilir mi?",
        answer:
          "Tabi ki — hatta önemli ölçüde tavsiye ederiz. Aynı fotoğrafçının iki etkinlikte de bulunması görsel ve renk tutarlılığı sağlar. Kombineli alımlarda fiyatta indirim uygulanır.",
      },
      {
        question: "Kına gecesi drone ile çekilebilir mi?",
        answer:
          "Salon kına gecelerinde drone kullanılmaz. Açık alan/teras/villa kına gecelerinde, hava şartları uygunsa Premium pakette drone hava çekimi ekleyebiliriz.",
      },
      {
        question: "Kaç dakika önce salonda olmalısınız?",
        answer:
          "İdeal süre 1 saattir. Bu süre boyunca ışık testi, poz alanı belirleme ve gelinin hazırlığı varsa son rötuşları kayıt altına alıyoruz.",
      },
    ],
    relatedServices: ["dugun-fotografcisi", "nisan-fotografcisi", "soz-fotograf-cekimi", "after-wedding"],
    galleryCategory: "kina",
    metaTitle: "Gebze Kına Fotoğraf Çekimi | Geleneksel Kına Gecesi Çekimi",
    metaDescription:
      "Gebze, Darıca, Çayırova kına gecesi fotoğrafçısı. Bindallı detayları, kına yakma, dans kareleri, 3 dk kına klibi. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "sunnet-fotograf-cekimi",
    name: "Sünnet Fotoğraf Çekimi",
    category: "dugun-toren",
    primaryKeyword: "sünnet fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze sünnet fotoğrafçısı",
      "sünnet düğünü çekimi",
      "sünnet konvoyu",
      "sünnet stüdyo çekimi",
      "Darıca sünnet çekimi",
    ],
    shortDescription:
      "Sünnet düğününüz için stüdyo poz, konvoy, salon ve eğlence anlarını eksiksiz çekiyoruz.",
    longDescription: `Sünnet, çocuğunuzun hayatındaki en önemli geçiş törenlerinden biri ve aile için unutulmaz bir gün. Akse Fotoğrafçılık olarak sünnet çekimini iki aşamada planlıyoruz: stüdyo/açık mekan poz seansı ve düğün/salon kayıt. Çocuğun rahat ve mutlu olmasını birinci öncelik kabul ediyoruz; pozları zorlamadan, oyun havası içinde alıyoruz.

Stüdyo poz seansı için sünnet kıyafeti, kılıç, asa ve özel temalar (paşa, kaptan, doktor vs.) için hazırlık önerilerimizi paylaşıyoruz. Açık mekan tercih edilirse Eskihisar Müzesi, Bayramoğlu Sahili veya çevre parklar güzel doğal ışık alanlardır.

Sünnet düğününde konvoy, salon girişi, sünnet köşesi, dans, hediyeleşme ve aile kareleri standart olarak çekilir. Konvoy çekimi için aracın yanında hareket edebilen bir motorsiklet/scooter seçeneğiyle veya araç içinde fotoğrafçı yer alarak hareketli kareler alıyoruz.

Edit teslim süremiz 10-14 gündür. Sünnet çekimi tek başına alınabildiği gibi, doğum/yenidoğan çekimi geçmişiniz varsa "büyüme hikayesi" formatında albümlenebilir.`,
    features: [
      "Stüdyo poz seansı (30-45 dk)",
      "Sünnet kıyafeti detay çekimi",
      "Konvoy hareketli kareler",
      "Salon girişi + sünnet köşesi",
      "Aile + akraba grup kareleri",
      "Çocuk odaklı sabırlı yaklaşım",
      "10-14 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Stüdyo",
        priceRange: "₺2.500 - ₺3.500",
        description: "Sadece stüdyo poz seansı",
        includes: [
          "30-45 dakika çekim",
          "60+ edit fotoğraf",
          "1 büyük baskı (20x30 cm)",
          "Dijital teslim",
        ],
      },
      {
        name: "Sünnet Düğünü",
        priceRange: "₺6.000 - ₺9.000",
        description: "Salon + stüdyo poz",
        includes: [
          "1 fotoğrafçı",
          "3 saat salon kapsam",
          "30 dk stüdyo poz seansı",
          "200+ edit fotoğraf",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺10.000 - ₺14.000",
        description: "Konvoy + salon + stüdyo + 3 dk klip",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "Konvoy + salon (5 saat)",
          "Stüdyo poz seansı",
          "300+ edit fotoğraf",
          "3 dk sünnet klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Çocuk pozu vermek istemezse ne oluyor?",
        answer:
          "Çocuğun rahatı önceliklidir. Zorlamıyoruz; oyun aktiviteleri ekleyerek çekim ortamını eğlenceli kılıyoruz. Genellikle 10-15 dakika içinde çocuk rahatlar ve pozlar başlar.",
      },
      {
        question: "Sünnet kıyafeti dahil mi yoksa biz mi getiriyoruz?",
        answer:
          "Kıyafeti aile temin eder. Stüdyomuzda asa ve kılıç gibi temel aksesuarlar mevcuttur; özel tema isteyenler için hazırlık listesi gönderiyoruz.",
      },
      {
        question: "Konvoy çekimi nasıl yapılıyor?",
        answer:
          "Aracın önünden geniş açı kareler için bir araçtan, yan ve arkadan profesyonel bir motorsiklet/scooter ile hareketli kareler için takip ediyoruz. Konvoyun rotasını önceden birlikte planlıyoruz.",
      },
      {
        question: "Salon ışığı düşükse fotoğraflar net olmaz mı?",
        answer:
          "Profesyonel ekipman + tavandan yansıtmalı flaş ile düşük ışıkta dahi net ve doğal kareler alıyoruz. Endişelenmenize gerek yok.",
      },
      {
        question: "Sünnet sonrası çocuğun rahatsız olduğu anlar çekiliyor mu?",
        answer:
          "Hayır — çocuğun mahremiyeti önceliklidir. Sünnet anının kendisi çekilmez; sadece tören öncesi ve sonrası rahat olduğu anlar çekilir.",
      },
      {
        question: "Stüdyo poz seansı farklı bir günde olabilir mi?",
        answer:
          "Evet — bazı aileler stüdyo seansını sünnet düğününden 1-2 gün önce yapmayı tercih eder. Bu, tören gününde çocuğun yorulmaması için iyi bir seçenektir.",
      },
    ],
    relatedServices: [
      "sunnet-konvoy-cekimi",
      "cocuk-fotograf-cekimi",
      "dogum-gunu-fotografcisi",
      "aile-fotografcisi",
    ],
    galleryCategory: "sunnet",
    metaTitle: "Gebze Sünnet Fotoğraf Çekimi | Sünnet Düğünü Çekimi",
    metaDescription:
      "Gebze sünnet fotoğrafçısı. Stüdyo poz, konvoy, salon kapsam ve sünnet klibi. Çocuk odaklı sabırlı yaklaşım. 0539 633 03 58",
  },

  {
    slug: "sunnet-konvoy-cekimi",
    name: "Sünnet Konvoy Çekimi",
    category: "dugun-toren",
    primaryKeyword: "sünnet konvoy çekimi",
    secondaryKeywords: [
      "Gebze sünnet konvoyu",
      "sünnet konvoy fotoğrafçısı",
      "sünnet aracı çekimi",
      "konvoy video çekimi",
    ],
    shortDescription:
      "Sünnet konvoyunuzun heyecanını ve hareketini sinematik kayıtlarla yakalıyoruz.",
    longDescription: `Sünnet konvoyu, sünnet düğününün en hareketli ve görsel açıdan en zengin anlarından biridir. Akse Fotoğrafçılık olarak konvoy çekimini sinematik bir bakış açısıyla planlıyoruz; sadece fotoğraf değil, hareketli kayıtlar için video desteğiyle birlikte sunuyoruz.

Konvoy çekiminde profesyonel motorsiklet/scooter ile aracınızı yan ve önden takip ederek hareketli kareler alıyoruz. Drone uçurabileceğimiz alanlarda (cadde değil, açık alan) hava çekimi de ekliyoruz. Salon girişine kadar konvoyu izleyen sürekli kayıt + çift açı (drone + yer) sayesinde standart konvoy çekimlerinden çok daha sinematik sonuç elde ediyoruz.

Çekim sırasında trafik güvenliği önceliklidir; konvoyu yöneten aile ile rota ve hız konusunda önceden anlaşma yapıyoruz. Hızlı şutter hızı (1/1000+) ile araç hareketli olsa dahi keskin kareler alınır; gimbal stabilizatör ile video sallantısız kayıt eder.

Konvoy çekimi tek başına 30-45 dakikalık bir kapsam olduğu için sünnet düğünü ile pakete eklendiğinde çok daha avantajlıdır. Tek başına alındığında salon kayıt yapılmaz; sadece konvoy süresi kapsanır. Edit teslim süremiz 7-10 gündür.`,
    features: [
      "Profesyonel motorsiklet ile takip",
      "Açık alanda drone hava çekimi",
      "Hızlı shutter ile keskin hareket kareleri",
      "Gimbal stabilizatör (video)",
      "Önden ve yandan çift açı",
      "Trafik güvenliği önceliği",
      "30-45 dk kapsam",
      "7-10 günde teslim",
    ],
    packages: [
      {
        name: "Sade Konvoy",
        priceRange: "₺3.000 - ₺4.500",
        description: "Sadece fotoğraf, motorsiklet takip",
        includes: [
          "1 fotoğrafçı + sürücü",
          "30 dk konvoy kapsam",
          "80+ edit fotoğraf",
          "Dijital teslim",
        ],
      },
      {
        name: "Foto + Video",
        priceRange: "₺5.000 - ₺7.500",
        description: "Fotoğraf + 1 dk klip",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "30-45 dk kapsam",
          "120+ edit fotoğraf",
          "1 dk sinematik konvoy klibi",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺8.000 - ₺12.000",
        description: "Drone + sinematik klip",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone",
          "Genişletilmiş 60 dk kapsam",
          "150+ edit fotoğraf",
          "2 dk sinematik klip + 30 sn teaser",
          "USB + dijital teslim",
        ],
      },
    ],
    faqs: [
      {
        question: "Konvoy çekimi şehir içinde drone ile yapılabilir mi?",
        answer:
          "Şehir içi caddelerde drone uçurmak hem yasal hem güvenlik açısından uygun değildir. Konvoyun açık alandan geçtiği bölümlerde (sahil, geniş bulvar) hava şartları uygunsa drone uçuruyoruz.",
      },
      {
        question: "Aracımız nasıl süslü olmalı?",
        answer:
          "Bayrak, balon ve kurdele süslemeleri görsel açıdan zenginleştirir. Aşırı reflektif yüzeylerden kaçınmak fotoğrafta hot spot oluşturmaz.",
      },
      {
        question: "Konvoyun hızı önemli mi?",
        answer:
          "Evet — ortalama 40-50 km/saat hız ideal sonuç verir. Çok hızlı konvoy hareketli kareleri zorlaştırır, çok yavaş ise heyecan kaybolur.",
      },
      {
        question: "Konvoyun rotasını birlikte mi planlıyoruz?",
        answer:
          "Tabi — buluşma noktası, takip yolu ve salon varış noktasını harita üzerinde önceden belirliyoruz. Trafik durumuna göre alternatifler hazırlıyoruz.",
      },
      {
        question: "Konvoy çekimi salon kaydı içeriyor mu?",
        answer:
          "Hayır — bu hizmet yalnızca konvoy süresini kapsar. Salon ve sünnet köşesi çekimi için 'Sünnet Fotoğraf Çekimi' hizmetimizle birleştirmenizi öneriyoruz.",
      },
      {
        question: "Yağmurda konvoy çekimi yapılır mı?",
        answer:
          "Hafif yağışta yağmur kapağıyla devam edebiliriz; ancak ağır yağışta hem güvenlik hem de görüntü kalitesi açısından çekimi kısaltıyor veya erteliyoruz.",
      },
    ],
    relatedServices: ["sunnet-fotograf-cekimi", "drone-fotograf-ve-video", "video-cekimi", "etkinlik-fotografcisi"],
    galleryCategory: "sunnet",
    metaTitle: "Gebze Sünnet Konvoy Çekimi | Sinematik Konvoy Videosu",
    metaDescription:
      "Gebze sünnet konvoy çekimi. Motorsiklet takip, drone, gimbal stabilizatör. Sinematik klip + foto. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "evlilik-teklifi-fotograf-cekimi",
    name: "Evlilik Teklifi Fotoğraf Çekimi",
    category: "dugun-toren",
    primaryKeyword: "evlilik teklifi fotoğraf çekimi",
    secondaryKeywords: [
      "evlilik teklifi sürpriz çekim",
      "Gebze evlilik teklifi",
      "Bayramoğlu evlilik teklifi",
      "sürpriz teklif fotoğrafçısı",
      "engagement proposal photography",
    ],
    shortDescription:
      "Hayatınızın en heyecanlı sürpriz anını gizli bir fotoğrafçıyla kayıt altına alıyoruz.",
    longDescription: `Evlilik teklifi, hayat boyu hatırlanacak bir sürpriz anıdır. Akse Fotoğrafçılık olarak teklif çekimini bir 'gizli operasyon' gibi planlıyoruz: ne sevgilinizin onu fark edeceği bir fotoğrafçı, ne de teklifin akışını bozan bir varlık. Telefoto lens ve uzaktan kayıt teknikleriyle, doğal ifadeleri tüm samimiyetiyle yakalıyoruz.

Ön görüşmede teklif planınızı detaylı konuşuyoruz: lokasyon, saat, sevgilinin yaklaşma yönü, çekim için saklı pozisyon — hepsi haritada işaretleniyor. Bayramoğlu Sahili, Eskihisar Osman Hamdi Bey Müzesi, Darıca Sahili ve Hereke önlerindeki kıyı bölgeleri Kocaeli'nin en güzel teklif lokasyonlarındandır. Teklifi otelin terasında, restoranda veya gizli bir mekanda yapacaksanız mekan keşfi yapıyoruz.

Çekim sırasında 200-400mm telefoto lens kullanarak en az 30 metre uzaktan dahi yüz ifadelerini net yakalayabiliyoruz. Sevgili 'evet' dedikten sonra ortaya çıkıp profesyonel poz seansına geçiyoruz; bu, teklif çekiminin 'fotoğrafçı meydana çıktı, romantik kareleri çekiyoruz' bölümüdür. Toplam kapsam genelde 1-2 saat olur.

Edit teslim süremiz 7 gündür; sosyal medya için 5 kareyi 24 saatte iletiyoruz. Teklif çekimi alıp ardından nişan veya düğün çekimimizi de seçerseniz pakette indirim uygulanır.`,
    features: [
      "Telefoto lens (uzaktan gizli çekim)",
      "Mekan keşfi + plan",
      "Anın doğal ifadelerine odak",
      "Teklif sonrası çift portre seansı",
      "Sürpriz video opsiyonu",
      "5 kare hızlı paylaşım (24 saat)",
      "7 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Sürpriz",
        priceRange: "₺3.500 - ₺5.000",
        description: "Sadece teklif anı + 30 dk poz",
        includes: [
          "1 fotoğrafçı",
          "1 saat kapsam",
          "80+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺6.000 - ₺9.000",
        description: "Teklif + dış çekim seansı + kısa video",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "2 saat kapsam",
          "150+ edit fotoğraf",
          "1 dk teklif klibi",
          "USB + dijital teslim",
        ],
      },
      {
        name: "Premium",
        priceRange: "₺10.000 - ₺14.000",
        description: "Drone + sinematik klip + albüm",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone (uygunsa)",
          "3 saat kapsam",
          "200+ edit fotoğraf",
          "2 dk sinematik teklif hikayesi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Sevgilim fotoğrafçıyı nasıl fark etmiyor?",
        answer:
          "200-400mm telefoto lens ile 30-50 metre uzaktan çekim yapıyoruz. Genelde turist gibi davranıp doğal görünmeye çalışıyoruz. Çoğu çiftimiz teklif anına kadar fotoğrafçımızı fark etmediğini sonradan söylüyor.",
      },
      {
        question: "Hangi mekanları öneriyorsunuz?",
        answer:
          "Bayramoğlu Sahili gün batımı, Eskihisar Osman Hamdi Müzesi tarihi atmosfer, Darıca Sahili dalga sesi, restoranların terasları (özellikle Hereke yönü) öneri lokasyonlarımız arasında. Sizin hatıralı bir mekanınız varsa onu da değerlendiriyoruz.",
      },
      {
        question: "Yağmurda ne olur?",
        answer:
          "Açık alan teklif planında alternatif kapalı bir nokta önceden belirleniyor (otel lobisi, restoran terası, vs.). Yağmurla bile romantik kareler mümkün; şemsiye altında çekilen teklifler çok özel oluyor.",
      },
      {
        question: "Sevgilim 'evet' dedikten sonra ne oluyor?",
        answer:
          "Yaklaşıp kendimizi tanıtıyoruz, kısa bir 'sürpriz' kahkahası sonrası 30-45 dakikalık çift portre seansına geçiyoruz. Bu kareler nişanlığınızın en samimi karelerinden olur.",
      },
      {
        question: "Teklif videosunu da çekiyor musunuz?",
        answer:
          "Hikaye ve Premium paketlerinde 1-2 dakikalık sinematik teklif klibi standartken Sürpriz pakette sadece fotoğraf vardır. Klip ek hizmet olarak da eklenebilir.",
      },
      {
        question: "Drone ile teklif çekilebilir mi?",
        answer:
          "Sahil/açık alan teklifleri için drone hava kareleri çok dramatik sonuç verir. Ancak drone sesi sevgilinin dikkatini çekebilir; bu yüzden teklif anından sonra drone ile sinematik genel kareler alıyoruz.",
      },
    ],
    relatedServices: [
      "soz-fotograf-cekimi",
      "nisan-fotografcisi",
      "save-the-date",
      "dis-cekim-fotograf",
    ],
    galleryCategory: "nisan",
    metaTitle: "Gebze Evlilik Teklifi Fotoğraf Çekimi | Sürpriz Çekim",
    metaDescription:
      "Gebze, Darıca, Bayramoğlu evlilik teklifi sürpriz çekimi. Telefoto lens, gizli pozisyon, teklif sonrası çift seansı. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "save-the-date",
    name: "Save the Date Çekimi",
    category: "dugun-toren",
    primaryKeyword: "save the date çekimi",
    secondaryKeywords: [
      "Gebze save the date",
      "düğün davetiyesi çekimi",
      "save the date video",
      "düğün öncesi çekim",
      "engagement session",
    ],
    shortDescription:
      "Düğün davetiyenize özel, romantik dış çekim — düğün tarihini eğlenceli bir şekilde duyurmanın en sanatsal yolu.",
    longDescription: `Save the Date, düğün davetiyesinin modern hali — düğün tarihinizi yakın çevrenize fotoğraf veya kısa bir video ile duyurmanın en şık yolu. Akse Fotoğrafçılık olarak Save the Date çekimini, düğünden 2-4 ay önce yapılan, çiftin ilişkisinin samimiyetini yansıtan bir mini hikaye olarak planlıyoruz.

Çekim için Bayramoğlu Sahili, Eskihisar Müzesi ve Tarihi Liman, Darıca Faruk Yalçın Hayvanat Bahçesi yakını çayır alanları, Çayırova kırsalı ve Gebze'nin tarihi caddeleri tercih edilir. Mekan tercihinizi sizinle birlikte belirliyor, gün ışığının en romantik olduğu altın saati (gün batımından 1 saat önce) hedefliyoruz.

Çekimde poz değil, etkileşim yönlendiriyoruz: el ele yürüyüş, kahkaha, sarılma, dans hareketleri — anın kendiliğinden oluşan duygusunu yakalıyoruz. Kıyafet uyumu için ön görüşmede pastel ton/koordineli stil önerisi paylaşıyoruz.

Edit aşamasında düğün davetiyenizin tasarımı için en uygun 5-10 kareyi özel olarak hazırlıyoruz; alttan basılacak metin için yer bırakan kompozisyonlar veriyoruz. Save the Date video versiyonu (15-30 saniye) sosyal medyada paylaşmak için ideal.

Edit teslim süremiz 10-14 gündür. Save the Date paketini alan çiftler düğün paketimize eklendiğinde belirli oranda indirim uygulanır — düğün fotoğrafımızda Save the Date çekimi hediye olarak eklenir.`,
    features: [
      "Altın saat dış çekim",
      "1.5-2 saat seans",
      "Romantik etkileşim yönlendirmesi",
      "Davetiye için özel kompozisyonlar",
      "30 sn sosyal medya video opsiyonu",
      "Drone hava çekimi (sahil için)",
      "10-14 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Klasik",
        priceRange: "₺3.500 - ₺5.000",
        description: "1 lokasyon, 1.5 saat",
        includes: [
          "1 fotoğrafçı",
          "1.5 saat kapsam",
          "60+ edit fotoğraf",
          "Davetiye için 5 özel kare",
          "Dijital teslim",
        ],
      },
      {
        name: "Hikaye",
        priceRange: "₺6.000 - ₺9.000",
        description: "2 lokasyon + video",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "3 saat kapsam (2 mekan)",
          "100+ edit fotoğraf",
          "30 sn save the date klibi",
          "Davetiye tasarım önerileri",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺10.000 - ₺14.000",
        description: "Drone + 2 mekan + uzun klip",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone",
          "Tam yarım gün kapsam",
          "150+ edit fotoğraf",
          "1 dk sinematik save the date hikayesi",
          "Tam tasarımlı dijital davetiye (PDF)",
        ],
      },
    ],
    faqs: [
      {
        question: "Save the Date çekimi ne zaman yapılmalı?",
        answer:
          "Düğünden 2-4 ay önce ideal süredir. Çekim sonrası edit + davetiye tasarımı + dağıtım süreci için 1-2 ay yeterli. Çok erken yapmak (6 ay+) düğün öncesi havayı törpüleyebilir.",
      },
      {
        question: "Hangi kıyafetlerle gelmeliyiz?",
        answer:
          "Pastel tonlar, beyaz/krem/nude, renkli ama sade — ikiniz birbirinizle uyumlu olun, identik olmayın. Çok desenli/parlak kıyafetlerden kaçının. Detaylı kıyafet danışmanlığı ön görüşmede sağlanır.",
      },
      {
        question: "Save the Date davetiye tasarımı dahil mi?",
        answer:
          "Hikaye ve Premium paketlerinde davetiye için kareler ve tasarım önerileri sunuyoruz. Premium pakette tam tasarımlı PDF davetiye ekstra dahil olur. Matbaa baskısı ayrıdır.",
      },
      {
        question: "Çekimde drone kullanılır mı?",
        answer:
          "Açık alan/sahil çekimlerinde, hava şartları uygunsa drone hava çekimi sinematik genel kareler için harika sonuç verir. Hereke ve Bayramoğlu sahili özellikle drone için ideal mekanlardır.",
      },
      {
        question: "Save the Date video kaç saniye olur?",
        answer:
          "Hikaye paketinde 30 saniye, Premium pakette 1 dakika. Sosyal medya paylaşımı için optimum süre 15-30 saniyedir; uzun klipler izlenme oranını düşürür.",
      },
      {
        question: "Düğün paketi ile birlikte indirim oluyor mu?",
        answer:
          "Evet — düğün fotoğrafçımızı seçen çiftlerimize Hikaye paketinde Save the Date çekimi hediye olarak ekleniyor. Detayları ön görüşmede netleştiriyoruz.",
      },
    ],
    relatedServices: [
      "dugun-fotografcisi",
      "nisan-fotografcisi",
      "evlilik-teklifi-fotograf-cekimi",
      "after-wedding",
    ],
    galleryCategory: "nisan",
    metaTitle: "Gebze Save the Date Çekimi | Düğün Öncesi Romantik Çekim",
    metaDescription:
      "Gebze save the date çekimi. Bayramoğlu, Eskihisar, Darıca sahili. Drone, video, davetiye tasarım önerileri. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "trash-the-dress",
    name: "Trash the Dress Çekimi",
    category: "dugun-toren",
    primaryKeyword: "trash the dress",
    secondaryKeywords: [
      "Gebze trash the dress",
      "düğün sonrası özgür çekim",
      "gelinlik kirli çekim",
      "trash the dress fiyat",
      "macera düğün çekimi",
    ],
    shortDescription:
      "Düğün sonrası gelinliği yıpratmaktan korkmadan, özgür ve sanatsal bir dış çekim macerası.",
    longDescription: `Trash the Dress, düğün sonrası yapılan ve gelinliğin "trafik kazasına uğradığı" — yani su, kum, çamur, deniz veya tarihi mekanlarda özgürce kullanıldığı bir sanat çekimi türüdür. Akse Fotoğrafçılık olarak bu çekimi, evliliğinizin başlangıcına özgürce ve cesaretle adım atmanın görsel temsili olarak yorumluyoruz.

Lokasyon olarak Bayramoğlu Sahili (deniz kenarında dalga ve ıslak gelinlik), Eskihisar antik liman (sanat değeri yüksek arkaplan), Hereke kayalık kıyıları, Darıca Sahili (uzun gelinlik etekleriyle dans) öneri yerlerimiz. Daha cesur olmak isteyen çiftler için hatta yağmur altında veya boya patlatmalarıyla yaratıcı çekimler bile yapabiliyoruz.

Çekim için 2-4 saatlik kapsam idealdir; gelinliğin temizlenmesi mümkün olmayacak şekilde kullanılması için aile gelinliği yerine eski/yedek bir gelinlikle çekim önerilir. Çekim sonrası gelinlik yıkanabilirse temizlenir; aksi halde "anı" olarak saklanır.

Sanatsal yaklaşım ön planda olduğu için renk koreksiyonu ve bazen sanat editingi (cinematic, moody, low-key) uygulanır. Çekim 'düğün hikayesi'nin son sayfasıdır — bir nevi 'mutlu son'un görselleştirilmiş hali. Edit teslim süremiz 14 gündür.`,
    features: [
      "Sahil, antik liman, kayalık alan",
      "Gelinlikte özgür kullanım",
      "Sanatsal renk koreksiyonu",
      "2-4 saat kapsam",
      "Drone hava çekimi opsiyonu",
      "Sinematik bakış",
      "14 günde edit teslim",
      "Çift seansı + tek portreler",
    ],
    packages: [
      {
        name: "Sahil",
        priceRange: "₺5.000 - ₺7.500",
        description: "Bayramoğlu/Darıca sahil, 2 saat",
        includes: [
          "1 fotoğrafçı",
          "2 saat kapsam",
          "100+ edit fotoğraf",
          "Sanatsal renk koreksiyonu",
          "Dijital teslim",
        ],
      },
      {
        name: "Hikaye",
        priceRange: "₺8.000 - ₺12.000",
        description: "2 lokasyon + drone + video",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone",
          "3 saat kapsam (2 mekan)",
          "150+ edit fotoğraf",
          "1 dk sinematik klip",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺13.000 - ₺18.000",
        description: "Çoklu mekan + uzun video + albüm",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone",
          "Tam yarım gün (4 saat)",
          "200+ edit fotoğraf",
          "2 dk sinematik trash the dress hikayesi",
          "20x30 cm sanat albümü",
        ],
      },
    ],
    faqs: [
      {
        question: "Gelinliğim zarar görür mü?",
        answer:
          "Evet — bu çekimin tüm felsefesi 'gelinliği yıpratmaktan korkmamak'. Suya, kuma, çamura girilebilir. Bu yüzden aile gelinliği yerine eski/yedek bir gelinlik veya kiralanmış bir gelinlik tercih edilir.",
      },
      {
        question: "Hangi mevsim ideal?",
        answer:
          "Mayıs-eylül arası deniz girişli çekimler için, mart-mayıs ve eylül-kasım kayalık/orman çekimleri için ideal. Kış çekimleri yağmur/kar gibi dramatik bir element istenirse harika sonuç verir.",
      },
      {
        question: "Hangi mekanları öneriyorsunuz?",
        answer:
          "Bayramoğlu Sahili (uzun kumsal + Adalar manzarası), Eskihisar antik liman, Hereke kayalık kıyıları, Darıca Sahili. Daha sanatsal isteyenler için Çayırova kırsalı veya orman alanları da uygundur.",
      },
      {
        question: "Çekim sonrası gelinliği nasıl temizletirim?",
        answer:
          "Profesyonel kuru temizleme bazı durumlarda kurtarabilir, ancak deniz tuzu veya yoğun çamur sonrası geri dönüş zor. Çoğu çift gelinliği 'anı kutusu'nda saklamayı tercih ediyor.",
      },
      {
        question: "Drone çekimi havadan ne kadar etkili?",
        answer:
          "Sahilde uzun gelinliğin kumda izini takip eden drone çekimi son derece sinematik. Kayalık alanlarda kuş bakışı kadrajlar dramatik bir derinlik kazandırır.",
      },
      {
        question: "Bu çekim düğünden ne zaman sonra yapılmalı?",
        answer:
          "Düğünden 1-3 hafta sonra ideal süredir; düğün heyecanı tazeyken yapılır. Bazı çiftler ise 1. evlilik yıldönümünde 'after wedding' olarak yapmayı tercih eder.",
      },
    ],
    relatedServices: ["after-wedding", "dis-cekim-fotograf", "save-the-date", "dugun-fotografcisi"],
    galleryCategory: "dis-cekim",
    metaTitle: "Gebze Trash the Dress Çekimi | Sanatsal Düğün Sonrası Çekim",
    metaDescription:
      "Gebze trash the dress çekimi. Bayramoğlu, Eskihisar, Hereke kıyıları. Sanatsal yaklaşım, drone, sinematik klip. 0539 633 03 58",
  },

  {
    slug: "after-wedding",
    name: "After Wedding Çekimi",
    category: "dugun-toren",
    primaryKeyword: "after wedding çekimi",
    secondaryKeywords: [
      "Gebze after wedding",
      "düğün sonrası dış çekim",
      "rahat düğün çekimi",
      "honeymoon çekimi",
      "post wedding shoot",
    ],
    shortDescription:
      "Düğün stresi geride, gelin ve damat tamamen rahat — daha doğal, daha samimi karelerin alındığı düğün sonrası seans.",
    longDescription: `After Wedding (Düğün Sonrası) çekimi, düğün gününün stresi ve heyecanı geride kaldıktan sonra, çiftin daha rahat ve doğal halini yakalayan bir özel seansdır. Düğün gününde her şey hızlı akar — fotoğrafçı yüzlerce kare çekse de bazen 'sadece bizim için' bir kare kalmaz. After Wedding bu boşluğu doldurur.

Akse Fotoğrafçılık olarak after wedding çekimini düğünden 1-3 hafta sonra, daha sakin bir ortamda planlıyoruz. Çift gelinlik/damat takım giyebilir veya semi-formal kıyafetlerle daha rahat poz verebilir. Lokasyon esnektir: balayı dönüşü Adalar, Bayramoğlu/Hereke sahil yürüyüşleri, Çayırova/Pelitli kırsalı veya İstanbul tarafında Heybeliada/Büyükada gibi.

Çekim sırasında poz yerine etkileşim yönlendiriyoruz: el ele yürüyüş, dans hareketleri, kahkahalar. Bazı çiftler picnic, kahve içme veya hatta evcil hayvan eşliğinde çekimi tercih ediyor. After Wedding çekimi, düğün albümünüze son sayfa olarak eklenebilir veya ayrı bir 'aşk hikayesi' albümü olarak basılabilir.

Trash the Dress'ten farkı: after wedding'de gelinlik hala kullanılabilir kalır; sadece daha rahat, daha doğal bir çekimdir. Edit teslim süremiz 10-14 gündür. Düğün paketimizle birlikte alındığında belirli oranda indirim uygulanır.`,
    features: [
      "Düğünden 1-3 hafta sonra çekim",
      "Doğal etkileşim yönlendirmesi",
      "Çoklu mekan opsiyonu",
      "Gelinlik korunur (yıpratılmaz)",
      "Drone hava çekimi opsiyonu",
      "Sinematik klip eklemesi",
      "10-14 günde edit teslim",
      "Düğün albümüne ek bölüm",
    ],
    packages: [
      {
        name: "Sade",
        priceRange: "₺3.500 - ₺5.000",
        description: "Tek lokasyon, 1.5 saat",
        includes: [
          "1 fotoğrafçı",
          "1.5 saat kapsam",
          "70+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Hikaye",
        priceRange: "₺6.000 - ₺9.000",
        description: "2 lokasyon + 1 dk klip",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "3 saat kapsam",
          "120+ edit fotoğraf",
          "1 dk after wedding klibi",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺10.000 - ₺14.000",
        description: "Drone + uzun video + albüm",
        includes: [
          "1 fotoğrafçı + 1 videograf + drone",
          "Tam yarım gün (4 saat)",
          "180+ edit fotoğraf",
          "2 dk sinematik klip",
          "20x20 cm albüm bölümü",
        ],
      },
    ],
    faqs: [
      {
        question: "After Wedding çekimi düğün albümüne ekleniyor mu?",
        answer:
          "Evet — düğün albümünüzün son bölümüne 'Aşkın Devamı' olarak ekleyebiliriz. Veya ayrı bir mini albüm olarak basabiliriz. Tasarım önerilerini Premium pakette sunuyoruz.",
      },
      {
        question: "Düğün gününden ne kadar sonra yapılmalı?",
        answer:
          "1-3 hafta ideal süredir. Düğün heyecanı tazeyken hafıza canlı, ama düğün stresi geride. Daha geç yapılırsa (1+ ay sonra) gelinlik aksesuarları kayıp olabilir.",
      },
      {
        question: "Trash the Dress ile farkı nedir?",
        answer:
          "After Wedding'de gelinlik korunur, daha rahat poz seansı. Trash the Dress'te gelinlik 'yıpratılır' (su, kum, çamur). After Wedding daha çok 'aşk hikayesi', Trash the Dress daha çok 'sanat'.",
      },
      {
        question: "Hangi mekanları öneriyorsunuz?",
        answer:
          "Sahil yürüyüşleri (Bayramoğlu, Hereke), Adalar (Heybeliada, Büyükada), kırsal alanlar (Çayırova, Pelitli), şehir kafe-restoran terasları. Sizin hatıralı bir mekanınız varsa o da harika.",
      },
      {
        question: "Evcil hayvanımızla çekim olur mu?",
        answer:
          "Tabi — evcil hayvanlar after wedding çekimine eğlence katıyor, çiftin doğal halini ortaya çıkarıyor. Pet Fotoğrafçılık deneyimimiz olduğu için hayvanın rahatlamasını da sağlıyoruz.",
      },
      {
        question: "Kıyafet zorunlu olarak gelinlik mi?",
        answer:
          "Hayır — bazı çiftler smart casual veya semi-formal kıyafetlerle daha rahat çekim yapmayı tercih ediyor. Kıyafet seçimini birlikte planlıyoruz.",
      },
    ],
    relatedServices: ["trash-the-dress", "dis-cekim-fotograf", "dugun-fotografcisi", "pet-fotografcisi"],
    galleryCategory: "dis-cekim",
    metaTitle: "Gebze After Wedding Çekimi | Düğün Sonrası Doğal Kareler",
    metaDescription:
      "Gebze after wedding çekimi. Düğünden sonra rahat ve doğal seans. Bayramoğlu, Adalar, kırsal mekanlar. Drone, klip. 0539 633 03 58",
  },

  {
    slug: "dis-cekim-fotograf",
    name: "Dış Çekim Fotoğraf",
    category: "dugun-toren",
    primaryKeyword: "dış çekim fotoğraf",
    secondaryKeywords: [
      "Gebze dış çekim",
      "düğün dış çekimi",
      "Bayramoğlu dış çekim",
      "Eskihisar dış çekim",
      "doğa fotoğraf çekimi",
    ],
    shortDescription:
      "Düğün öncesi veya sonrası, doğa ve mimari ile bütünleşen romantik dış çekim seansı.",
    longDescription: `Dış Çekim, gelin ve damadın salon çekiminin baskısı olmadan, sadece kendi anlarına odaklanabildikleri özel bir seansdır. Akse Fotoğrafçılık olarak dış çekimi, düğün hikayenizin en sanatsal sayfası olarak görüyoruz. Kocaeli'nin doğal güzellikleri ve tarihi mekanları dünyanın herhangi bir destinasyonuyla yarışacak kalitedeki dış çekim alanları sunar.

En popüler dış çekim mekanlarımız: Bayramoğlu Sahili (deniz + Adalar manzarası, gün batımı altın saati), Eskihisar Antik Limanı ve Osman Hamdi Bey Müzesi (tarihi atmosfer), Darıca Faruk Yalçın Hayvanat Bahçesi yakını çayır alanları, Hereke kayalık kıyıları, Çayırova kırsalı ve Pelitli orman yolları. Şehir içi tercih edenler için Gebze tarihi caddeleri ve Köşklüçeşme yapıları da mükemmel arka plan oluşturur.

Çekim için altın saat (gün batımından 1 saat önce ile gün batımı arası) en idealdir; bu saatlerde ışık doğal yumuşaklıkta ve cilt tonu altın renkli görünür. Bulut örtülü günler 'overcast' ışığıyla yumuşak portreler için ekstra avantajlıdır.

Dış çekim, düğün paketine dahil olduğunda standart 30-45 dakikalık bir seans olur; bağımsız aldığınızda 1.5-3 saatlik genişletilmiş seans yapıyoruz, böylece çoklu mekan ve kıyafet değişikliği mümkün. Drone hava çekimi sahil ve geniş alan çekimleri için sinematik genel kareler sunar.`,
    features: [
      "Altın saat ışığı kullanımı",
      "Çoklu mekan opsiyonu",
      "Drone hava çekimi (uygunsa)",
      "Doğal poz yönlendirmesi",
      "Romantik etkileşim odaklı",
      "Mevsim ve hava koşullarına uyum",
      "10-14 günde edit teslim",
      "Online galeri + USB",
    ],
    packages: [
      {
        name: "Sade",
        priceRange: "₺3.500 - ₺5.500",
        description: "Tek mekan, 1.5 saat",
        includes: [
          "1 fotoğrafçı",
          "1.5 saat kapsam",
          "60+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "İki Mekan",
        priceRange: "₺6.500 - ₺9.500",
        description: "2 mekan + drone opsiyonu",
        includes: [
          "1 fotoğrafçı",
          "3 saat kapsam (2 mekan)",
          "120+ edit fotoğraf",
          "Drone hava çekimi (uygunsa)",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺10.000 - ₺14.000",
        description: "Çoklu mekan + 1 dk klip",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "Tam yarım gün (4 saat)",
          "180+ edit fotoğraf",
          "1 dk dış çekim klibi",
          "Drone hava çekimi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Dış çekim için en iyi saat hangisi?",
        answer:
          "Altın saat — gün batımından 1 saat önce ile gün batımı anı arası. Bu süre boyunca ışık doğal yumuşak ve sıcak tonludur. Sabah saat 7-9 arası da benzer bir ışık verir; ancak çiftler için sabah erken saatler genelde tercih edilmez.",
      },
      {
        question: "Hangi mevsim dış çekim için ideal?",
        answer:
          "Mayıs-haziran (yeşillik bol, ışık yumuşak) ve eylül-ekim (sonbahar tonları, ılıman hava) en ideal mevsimlerdir. Yaz ortası (temmuz-ağustos) sıcak nedeniyle zorlayıcı olabilir; bu dönemde sabah erken veya akşam geç saatler tercih edilir.",
      },
      {
        question: "Yağmurda dış çekim olur mu?",
        answer:
          "Hafif yağışta şemsiye altında çok romantik kareler çıkar. Ağır yağışta çekimi erteliyor veya alternatif kapalı bir mekana yönlendiriyoruz. Yağmur sonrası ıslak yüzeyler görsel yansımalar için harika.",
      },
      {
        question: "Birden fazla kıyafetle çekim olur mu?",
        answer:
          "İki Mekan ve Hikaye paketlerinde kıyafet değişimi standartken Sade pakette tek kıyafet. Aralarda araç içi veya sade bir kafe-tuvaletinde değişim yapıyoruz.",
      },
      {
        question: "Drone hava çekimi her zaman mümkün mü?",
        answer:
          "Hava şartları (rüzgar < 7 m/s, yağışsız) ve uçuş izinleri uygunsa mümkün. Bayramoğlu, Hereke, Darıca sahili gibi açık alanlar drone için ideal. Şehir içi parklarda izin durumunu kontrol ediyoruz.",
      },
      {
        question: "Düğünden önce mi sonra mı çekilmeli?",
        answer:
          "Düğünden önce çekim, save the date davetiyesi için kullanılabilir. Düğünden sonra çekim 'after wedding' olur ve daha rahat bir hava taşır. Her ikisinin de avantajları var; ön görüşmede hangisinin size uygun olduğunu konuşuyoruz.",
      },
    ],
    relatedServices: ["dugun-fotografcisi", "save-the-date", "after-wedding", "trash-the-dress"],
    galleryCategory: "dis-cekim",
    metaTitle: "Gebze Dış Çekim Fotoğraf | Bayramoğlu, Eskihisar Düğün Çekimi",
    metaDescription:
      "Gebze, Darıca, Bayramoğlu dış çekim fotoğraf. Altın saat, drone, çoklu mekan. Romantik atmosfer + sanatsal kareler. 0539 633 03 58",
  },
];
