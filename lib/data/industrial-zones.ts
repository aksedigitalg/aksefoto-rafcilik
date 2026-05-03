import type { IndustrialZone } from "@/lib/types";

export const industrialZones: IndustrialZone[] = [
  {
    slug: "gosb",
    name: "GOSB",
    fullName: "Gebze Organize Sanayi Bölgesi",
    district: "gebze",
    description: `Gebze Organize Sanayi Bölgesi (GOSB), Türkiye'nin en köklü ve en büyük organize sanayi bölgelerinden biridir; otomotiv, elektronik, makine, plastik ve kimya sektörlerinin lokomotifi konumundadır. 250+ üretim tesisinin yer aldığı GOSB, Türkiye'nin sanayi üretiminin önemli bir bölümünü tek bölgede toplar.

Akse Fotoğrafçılık olarak GOSB'daki firmalar için fabrika tanıtım çekimi, ürün fotoğrafçılığı, kurumsal portre, drone hava çekimi ve tanıtım filmi hizmetlerinde uzmanlaşmış bir B2B ekibimiz var. Tesis güvenlik kuralları, ATEX patlamaya dayanıklı bölge gereksinimleri ve NDA gizlilik standartlarımız uluslararası seviyededir.

GOSB içinde çekim yapmak için tesis daveti yeterlidir; gelirken kimlik gösterip kayıt yapıyoruz. Drone uçuşları için GOSB yönetiminden ayrıca izin gerekebilir; bunu da koordine ediyoruz. Çoklu firma çekimleri için günlük rota planlaması ile aynı gün içinde 3-5 firmayı ziyaret edebiliyoruz.

GOSB'ın ana üretim sektörleri için özel deneyimimiz: otomotiv yan sanayi (montaj hattı, kalite kontrol, depo), beyaz eşya (üretim hattı + Ar-Ge laboratuvarı), elektronik (clean room çekim — özel ekipman gereksinimleri), plastik ve kauçuk (sıcak ortam kayıt), kimya (ATEX zonlu üretim alanı). Her sektörün kendine özgü görsel yaklaşımı vardır; bunu firmanın brand kit'ine uydurarak yansıtıyoruz.

Üretim hattı çekimi sırasında çalışan operatörlerin onayı + güvenlik ekipmanı + tesisinin görsel mahremiyet kuralları gözetilir. Standart kapsam: dış cephe drone hava + giriş + üretim hattı (3-5 farklı bölüm) + Ar-Ge + kalite kontrol + depo + lojistik + yönetici ofisleri + personel çalışma kareleri.

GOSB'daki yatırımcı sunumu, ihale dosyası, B2B katalog, kurumsal web sitesi yenileme, ISO/CE belge başvurusu ve fuar standı görsel ihtiyaçlarınızın tamamını tek paket altında karşılayabiliyoruz.`,
    servicesOffered: [
      "Fabrika tanıtım çekimi (1-3 günlük tam kapsam)",
      "Drone hava çekimi (NOTAM kontrolü ile)",
      "Üretim hattı + Ar-Ge fotoğrafçılığı",
      "Kurumsal personel + yönetici portresi",
      "B2B katalog + ihale dosyası fotoğrafı",
      "Tanıtım filmi (1-3 dk sinematik)",
      "360° sanal tur (fabrika içi gezinme)",
      "Ürün fotoğrafçılığı (üretim öncesi/sonrası)",
    ],
    notableTenantsHint:
      "GOSB'da 250+ üretim tesisi yer almaktadır. NDA gizlilik standardımız nedeniyle çalıştığımız spesifik firmaları kamuya açık şekilde paylaşmıyoruz; referansımız için doğrudan bizimle iletişime geçebilirsiniz.",
    faqs: [
      {
        question: "GOSB'a girmek için izin gerekiyor mu?",
        answer:
          "Tesisinizin önceden bizi davet etmesi yeterli; GOSB girişinde kimlik gösterip kayıt yaptırıyoruz. Çekim için tesisinizin iç güvenlik onayı gerekir.",
      },
      {
        question: "ATEX patlamaya dayanıklı bölgelerde çekim yapabiliyor musunuz?",
        answer:
          "Evet — kimya, plastik, akaryakıt gibi tesislerde ATEX uyumlu ekipmanla veya tesisinizin kendi onaylı ekipmanıyla çalışıyoruz. Önceden bildirimle koordine ediyoruz.",
      },
      {
        question: "GOSB içinde drone uçabilir mi?",
        answer:
          "GOSB yönetiminden izinle mümkün. Bazı bölgeler 'no fly zone' olabilir; uçuş öncesi NOTAM kontrolü ve GOSB onayı yapıyoruz. Hava şartları (rüzgar 7 m/s altı, yağışsız) uygun olmalı.",
      },
      {
        question: "Birden fazla GOSB tesisini aynı gün çekebilir miyiz?",
        answer:
          "Evet — günlük rota planlaması ile 3-5 firma ziyareti mümkün. Her firma için 2-3 saatlik kapsam, geçişte 30-45 dk hareket süresi.",
      },
      {
        question: "NDA imzalıyor musunuz?",
        answer:
          "Tabi — B2B çekimlerinin %80'inde NDA standarttır. Marka mahremiyeti, üretim süreç sırrı, müşteri listesi gibi konularda gizlilik standardımız çok yüksek.",
      },
      {
        question: "Tanıtım filmi de yapıyor musunuz?",
        answer:
          "Evet — 1-3 dakikalık sinematik tanıtım filmleri tam kapsamlı paketin parçası. Çekim + senaryo + edit + müzik + alt yazı (TR + EN) dahil.",
      },
    ],
  },

  {
    slug: "tosb",
    name: "TOSB",
    fullName: "TAYSAD Organize Sanayi Bölgesi (Çayırova)",
    district: "cayirova",
    description: `TOSB (TAYSAD Organize Sanayi Bölgesi), Çayırova'nın Şekerpınar mahallesinde yer alan, Türkiye'nin otomotiv yan sanayi yoğunluklu OSB'sidir. 100+ otomotiv yan sanayi tedarikçisi burada faaliyet gösterir; Toyota, Ford, Renault, Hyundai gibi büyük otomotiv markalarının yerel tedarik zincirinin ana üretim merkezidir.

Akse Fotoğrafçılık olarak TOSB'da fabrika tanıtım çekimi, ürün ve parça fotoğrafçılığı, montaj hattı kayıt, yatırımcı sunumu için drone hava çekimi ve tanıtım filmi hizmetlerinde aktifiz. Otomotiv yan sanayinin spesifik görsel ihtiyaçlarına aşinayız: parça katalog çekimi, kalite kontrol süreci görselleştirilmesi, üretim verimliliği rapor için gerekli görseller.

TOSB içine giriş için tesis daveti yeterlidir; ana giriş kapısında kimlik kayıt yapıyoruz. Çayırova'nın E-5 üzerindeki konumu sayesinde Gebze stüdyomuza 10 dakika mesafede; aynı gün içinde stüdyo + TOSB ziyareti yapabiliyoruz.

Otomotiv yan sanayi çekimlerinin spesifik gereksinimleri: pres atölyesi (yüksek ses + ısı, koruyucu kıyafet zorunlu), boya hattı (toz/buhar kontrolü), kalite kontrol laboratuvarı (kalibre cihazlar, hassas ışık), montaj hattı (hareketli kayıt, hız), depo (geniş açı + yüksek tavan).

TOSB tesislerinin Avrupa OEM'lerine (Volkswagen, Mercedes, BMW) ihalede sunduğu B2B materyaller için ekstra titizlik gerekir; uluslararası standartlara uygun fotoğraf + sertifika belgesi çekimi yapıyoruz. ISO/IATF 16949/CE uyumlu görsel doküman teslim ediyoruz.

Çoklu vardiyada çalışan tesisler için sabah/öğleden sonra/gece vardiyalarında çekim yapabiliyoruz. Gece üretim çekiminde özel LED panel + uzun pozlama tekniği ile dramatic ve etkileyici görseller üretiliyor.`,
    servicesOffered: [
      "Otomotiv yan sanayi tesis tanıtımı",
      "Parça/komponent katalog fotoğrafı",
      "Pres + boya + kalite kontrol kayıt",
      "Montaj hattı hareketli çekim",
      "Avrupa OEM ihale dosyası görseli",
      "ISO/IATF 16949 belge çekimi",
      "Drone hava + dış cephe çekimi",
      "Tanıtım filmi + 360° sanal tur",
    ],
    notableTenantsHint:
      "TOSB'da 100+ otomotiv yan sanayi tedarikçisi yer alır. Çalıştığımız firmaların listesi NDA korumalıdır; referansımız için doğrudan iletişime geçebilirsiniz.",
    faqs: [
      {
        question: "TOSB'a Çayırova'dan ulaşım nasıl?",
        answer:
          "TOSB Çayırova Şekerpınar mahallesindedir; E-5 üzerinden direkt erişilebilir. Stüdyomuzdan (Gebze Güzeller) 10-15 dakika mesafede.",
      },
      {
        question: "Avrupa OEM ihalesi için fotoğraf çekiyor musunuz?",
        answer:
          "Evet — uluslararası standartlara (DIN, ISO, IATF) uygun yüksek çözünürlüklü görsel + belge çekimi yapıyoruz. Volkswagen, BMW, Mercedes ihalelerinde kullanılan formatlar.",
      },
      {
        question: "Pres atölyesinde çekim güvenli mi?",
        answer:
          "Tesisinizin güvenlik kurallarına %100 uyuyoruz: kulak koruyucu, gözlük, eldiven, baret, iş ayakkabısı standardı. Yüksek ses + sıcak ortam için zaman planlaması.",
      },
      {
        question: "Gece vardiyası çekimi yapıyor musunuz?",
        answer:
          "Evet — bazı tesislerin sürekli üretim akışı nedeniyle gece çekimi yapılır. LED panel + uzun pozlama ile dramatic kareler. Ek ücret söz konusu olabilir.",
      },
      {
        question: "Kalite kontrol laboratuvarı çekimi nasıl?",
        answer:
          "Hassas cihazlar + kalibreli ışık + sterile ortam. Cihazların yansıma yapmayacağı açı + diffüzör ışık kullanıyoruz.",
      },
      {
        question: "Komponent katalog çekimi tek tek mi yapılıyor?",
        answer:
          "Evet — her komponentin 5-7 farklı açıdan çekimi standart. Beyaz fon (B2B katalog) + lifestyle (fabrika içi montaj sahnesi) iki paralel set.",
      },
    ],
  },

  {
    slug: "bilisim-vadisi",
    name: "Bilişim Vadisi",
    fullName: "Bilişim Vadisi Teknoloji Geliştirme Bölgesi (Muallimköy)",
    district: "gebze",
    description: `Bilişim Vadisi, Gebze'nin Muallimköy mevkiinde yer alan ve Türkiye'nin yazılım, donanım, IoT, fintech ve oyun sektörlerinin yoğunlaştığı yenilikçi bir teknoloji geliştirme bölgesidir. 250+ teknoloji firması, 12+ üniversite Ar-Ge merkezi, kuluçka programları ve sürekli açılan yeni binalarla Türkiye'nin Silikon Vadisi olarak konumlanmaktadır.

Akse Fotoğrafçılık olarak Bilişim Vadisi içindeki teknoloji firmaları için kurumsal portre, ofis çekimi, tanıtım filmi, ürün çekimi (özellikle donanım/IoT cihazları için), yatırımcı sunumu fotoğrafçılığı ve etkinlik kayıt hizmetleri sunuyoruz. Geleneksel sanayiden farklı olarak Bilişim Vadisi tesisleri 'modern ofis' ortamıdır; cam cephe, açık plan ofisler, kafeterya, oyun alanları, fitness studio gibi yenilikçi mekanlar görsel açıdan zengindir.

Bilişim Vadisi'nin spesifik fotoğraf ihtiyaçları: 1) Kurumsal personel portresi (LinkedIn ve startup yatırımcı sunumu için), 2) Ofis ortam ve kültür çekimi (talent çekme amaçlı; rekabetçi yetenek pazarında ofis çekimleri kritik), 3) Etkinlik kayıt (demoday, hackathon, meetup), 4) Ürün çekimi (donanım, prototip, IoT cihaz), 5) Drone (kompleks geneli + cam cephe yansıma — çok dramatic).

Startup ve scale-up'lar için 'Founder Pack' özel paketimiz: CEO/CTO + ekip + ofis + pitch deck için hazır görsel paketi. Yatırımcı sunumlarında profesyonel görsel materyalin değerlendirme üzerine etkisi büyüktür.

Etkinlik çekimleri için (meetup, hackathon, demoday) özel deneyimimiz var; teknoloji etkinliklerinin spesifik dinamiklerini biliyoruz. Konuşmacı portresi + atmosfer + networking anları + kazanan ekiplerin coşkusunu yakalıyoruz.

Tanıtım filmi konusunda startup'ların 'investor pitch' formatına özel yaklaşım: 60-90 saniyelik kısa, etkili, tempo yüksek anlatım. Müşteri sorununu, çözümü, ekibi, gelişimi tek video da gösterir.`,
    servicesOffered: [
      "Startup founder + ekip portresi",
      "Modern ofis + kültür çekimi (talent attraction)",
      "Demoday/hackathon/meetup etkinlik kayıt",
      "Donanım + IoT prototip ürün çekimi",
      "Yatırımcı sunum (pitch) görsel paketi",
      "Drone (cam cephe + kompleks genel)",
      "Tanıtım filmi (60-90 sn investor format)",
      "Sosyal medya + LinkedIn içerik üretimi",
    ],
    notableTenantsHint:
      "Bilişim Vadisi'nde 250+ teknoloji firması yer alır. NDA korumalı çalışma standardımız nedeniyle firma listesi paylaşılmaz; doğrudan iletişimle referans bilgisi alabilirsiniz.",
    faqs: [
      {
        question: "Bilişim Vadisi içine girmek için izin gerekiyor mu?",
        answer:
          "Tesisinizin önceden bizi davet etmesi yeterli; ana girişte ziyaretçi kayıt yaptırıyoruz. Bazı yüksek güvenlikli binalar (örn: kuluçka merkezleri) ek prosedür isteyebilir.",
      },
      {
        question: "Founder pack içinde neler var?",
        answer:
          "CEO/CTO/CMO bireysel portreleri + ekip grup karesi + ofis ortam çekimi + pitch için 'arka plan' kareleri. Yatırımcı sunumunda kullanılabilecek tam görsel paketi.",
      },
      {
        question: "Donanım/IoT prototip çekimi yapıyor musunuz?",
        answer:
          "Tabi — küçük elektronik cihazlar için makro lens + özel ışık masası. Prototip aşaması için 'wow' faktörü yüksek dramatic kareler. Kataloğa hazır + Kickstarter sayfasına uyumlu.",
      },
      {
        question: "Hackathon nasıl çekiliyor?",
        answer:
          "Etkinliğin 24/48 saatlik akışı boyunca farklı zamanlarda 2-3 ziyaret. Coding intensity, takım çalışması, mentorluk, sunum ve kazanan duyurusu. Highlight klibi de üretilir.",
      },
      {
        question: "Cam cephe yansımaları için drone çekimi etkili mi?",
        answer:
          "Çok etkili — Bilişim Vadisi binalarının cam cepheleri gün ışığı + drone hava perspektifi ile dramatic yansımalar yaratır. Kurumsal pazarlama için harika.",
      },
      {
        question: "Tanıtım filmi 60-90 saniyede ne anlatabilir?",
        answer:
          "Kısa formatta sorun + çözüm + ekip + traction. Yatırımcı 'attention span' kısa olduğu için bu süre optimum. Senaryo + edit destekli profesyonel kurgu.",
      },
    ],
  },

  {
    slug: "pelitli-osb",
    name: "Pelitli OSB",
    fullName: "Pelitli Organize Sanayi Bölgesi",
    district: "gebze",
    description: `Pelitli Organize Sanayi Bölgesi, Gebze'nin Pelitli mahallesinde yer alan ve genel sanayi (metal, makine, plastik, gıda) yoğunluklu bir OSB'dir. GOSB'a göre daha küçük ölçekli ama aynı şekilde kapsamlı altyapı ve KOBİ-orta ölçek üreticiler için idealdir. Akse Fotoğrafçılık stüdyomuza 10-15 dakika mesafede.

Pelitli OSB'deki firmalar için fabrika çekimi, ürün fotoğrafçılığı, drone tanıtım, tanıtım filmi ve B2B katalog hizmetleri sunuyoruz. Bölgenin yoğun sektörleri: metal işleme (CNC + tornadan kaynak çekim), gıda işleme (HACCP uyumlu çekim — sterile ortam gereksinimleri), plastik enjeksiyon (sıcak ortam), makine yan sanayi.

Pelitli OSB'nin avantajı: orta ölçekli firmalar için ulaşılabilir maliyet + yüksek üretim kapasitesi. Bu firmaların B2B pazarlama ihtiyacı genelde Avrupa fuarları (EMO, Hannover Messe) için hazırlık. Fuar standı görselleri + ürün katalog + tanıtım filmi tek paket altında verilebilir.

Bölgenin görsel hikaye olanakları: dış cephe + giriş tabela + üretim hattı + Ar-Ge + kalite kontrol + depo + sevkiyat. Drone ile geneli kompleks görüntüsü pazarlama materyallerinde kritik.`,
    servicesOffered: [
      "KOBİ-orta ölçek tesis tanıtımı",
      "Metal işleme + CNC + tornadan çekim",
      "Gıda işleme (HACCP uyumlu) çekim",
      "Plastik enjeksiyon süreci kayıt",
      "Avrupa fuarı için katalog çekimi",
      "Drone hava + sevkiyat alanı",
      "Tanıtım filmi (2-3 dk B2B)",
      "Yıllık güncelleme paketi",
    ],
    notableTenantsHint:
      "Pelitli OSB'de 80+ firma yer alır. NDA korumalı çalıştığımız için firma listesi paylaşılmaz; referans için iletişime geçebilirsiniz.",
    faqs: [
      {
        question: "Pelitli OSB'ye Gebze'den ulaşım kolay mı?",
        answer:
          "Evet — Gebze merkezine 10-15 dk mesafede, Pelitli mahallesi içinde. Akse stüdyomuzdan da 10 dakika.",
      },
      {
        question: "Gıda tesisinde fotoğraf çekimi nasıl?",
        answer:
          "HACCP gereksinimlerine uygun: galoş, bone, önlük, eldiven standardı. Üretim alanlarında temizlik kuralları + ışık tasarımı tesise özel.",
      },
      {
        question: "Avrupa fuarı için ne tür görsel gerekiyor?",
        answer:
          "Yüksek çözünürlük + CMYK profilli + büyük format basılabilir kareler. Fuar standı için 5x3 m baskıya uygun çözünürlük.",
      },
      {
        question: "Yıllık güncelleme paketi nedir?",
        answer:
          "Yılda 1 kez tesis güncel görseli + yeni ürün/dekor değişikliği. Pazarlama materyali sürekli güncel kalır.",
      },
      {
        question: "Birden fazla Pelitli firması aynı gün çekilebilir mi?",
        answer:
          "Evet — 2-3 firma ziyareti 1 günde mümkün. Aralarda 15-20 dakika ulaşım süresi.",
      },
      {
        question: "Drone Pelitli OSB içinde uçabilir mi?",
        answer:
          "OSB yönetiminden izinle. NOTAM kontrolü ve hava şartları uygunsa.",
      },
    ],
  },

  {
    slug: "plastikciler-osb",
    name: "Plastikçiler OSB",
    fullName: "Plastikçiler Organize Sanayi Bölgesi",
    district: "gebze",
    description: `Plastikçiler OSB, Gebze'de plastik enjeksiyon, ekstrüzyon, ambalaj ve plastik mamul üretiminin yoğunlaştığı sektörel OSB'dir. Türkiye'nin plastik sanayi tedarik zincirinde önemli bir merkezdir; otomotiv, beyaz eşya, ambalaj endüstrisi için yan ürün üretir.

Akse Fotoğrafçılık olarak plastik sanayi tesislerinde özel deneyimimiz var. Plastik üretiminin görsel hikayesi yoğun ve etkileyicidir: ham granül, ısıtma sistemleri, enjeksiyon makineleri, soğutma kanalları, paketleme. Sıcak ve kapalı ortam çekim koşulları için ekipman + güvenlik standardımız uygundur.

Plastik tesisleri için ürün katalogları (mamul plastik parça çeşitleri, ambalaj örnekleri), fabrika tanıtım filmleri (Avrupa müşterilerinin ziyaret öncesi izleyeceği), B2B fuarı için sunum materyalleri (Plastimagen, K Show Düsseldorf) ve drone ile genel görüntü hizmetleri sunuyoruz.

Plastikçiler OSB'deki üreticilerin önemli bir kısmı ihracat odaklıdır; özellikle Avrupa, Orta Doğu ve Afrika pazarları. Bu nedenle pazarlama materyalleri uluslararası standartlarda olmalıdır; çift dil (TR + EN) alt yazı, CMYK basılı format, ISO/CE belgeleri için fotoğraf çekimi standart hizmetlerimizdendir.`,
    servicesOffered: [
      "Plastik enjeksiyon süreç kayıt",
      "Ekstrüzyon + soğutma hattı çekim",
      "Mamul plastik parça katalog",
      "Ambalaj örneği fotoğraf",
      "Avrupa fuarı sunum materyali (K Show, Plastimagen)",
      "Çift dil (TR + EN) tanıtım filmi",
      "ISO/CE belge çekimi",
      "Drone tesis genel görüntü",
    ],
    notableTenantsHint:
      "Plastikçiler OSB'de plastik sektörü yoğunluklu 50+ firma yer alır. Çalıştığımız firmaların listesi NDA korumalıdır.",
    faqs: [
      {
        question: "Plastik tesisinde yüksek sıcaklık var, çekim olur mu?",
        answer:
          "Tabi — çekim ekipmanımız 50-60°C ortamda dahi çalışır. Kişisel olarak ısıya dayanıklı kıyafet ve sık molalarla çalışıyoruz.",
      },
      {
        question: "Ambalaj çeşidi katalogu nasıl çekiliyor?",
        answer:
          "Stüdyomuzda beyaz fon + makro detay + lifestyle (ambalaj kullanılırken) üç paralel set. Çoklu varyasyon için her ambalaj 5+ açıdan çekilir.",
      },
      {
        question: "Almanya'daki K Show fuarı için sunum hazırlığı yapıyor musunuz?",
        answer:
          "Evet — uluslararası fuar standartlarına uygun (yüksek çözünürlük, CMYK, A0 baskı kalitesi) görsel paketi. Standart iş.",
      },
      {
        question: "İhracat müşterisi için tanıtım filmi nasıl?",
        answer:
          "Çift dil alt yazı (TR + EN), 2-3 dakika, kalite vurgusu + ihracat süreci + sertifikasyonlar + üretim kapasitesi gösterimi.",
      },
      {
        question: "ISO 9001/14001 belge çekimi nedir?",
        answer:
          "Sertifikasyon başvuruları için belge fotoğrafı + tesis koşullarının belgelenmesi. Denetçinin görüp doğrulayabileceği netlikte.",
      },
      {
        question: "Plastik granül + ham madde çekimi yapılır mı?",
        answer:
          "Tabi — özellikle B2B pazarlamasında ham madde kalitesi vurgulanır. Makro çekim ile granülün yüzey detayı + renk doğruluğu yansıtılır.",
      },
    ],
  },

  {
    slug: "kimya-ihtisas-osb",
    name: "Kimya İhtisas OSB",
    fullName: "Kimya İhtisas Organize Sanayi Bölgesi",
    district: "gebze",
    description: `Kimya İhtisas OSB, Gebze ve Dilovası sınırında yer alan, kimya sanayi (boya, vernik, deterjan, yapı kimyasalları, ilaç hammaddesi) yoğunluklu özel sektörel OSB'dir. ATEX patlamaya dayanıklı bölge gereksinimleri, hassas kimyasal süreçler ve yüksek güvenlik standartları nedeniyle çekim açısından en zorlu OSB'lerden biridir.

Akse Fotoğrafçılık olarak Kimya İhtisas OSB tesislerinde çekim için özel hazırlık yapıyoruz: ATEX uyumlu ekipman, gaz dedektörü, koruyucu kıyafet, tesisinizin güvenlik prosedürlerine tam uyum. Bazı çekim alanlarında dijital ekipman kısıtlanabilir; bu durumda yerel partner laboratuvarımızla veya tesisin onaylı ekipmanıyla çalışıyoruz.

Kimya sektöründe görsel pazarlamanın özel hassasiyetleri vardır: ürün karakteri (sıvı, granül, toz, gas) görselleştirmesi, paketleme + etiketleme + güvenlik bilgileri (MSDS) belgesi, AR-GE laboratuvarları + kalite kontrol süreçleri, dünya standartları sertifikasyonları (REACH, FDA, GMP, ISO).

Kimya tesislerinin Avrupa ihracat hedefli pazarlama materyali için ek titizlik: REACH uyumluluğu görsel ifadesi, üretim sürecinin şeffaf görselleştirmesi, sürdürülebilirlik (sustainability) raporlarına uygun kareler. ESG raporlama için fotoğraf desteği de talep ediliyor.

Çekim sırasında çevre ve insan sağlığı standartları + tesisinizin güvenlik prosedürleri %100 öncelikli. NDA + güvenlik bilgilendirme + ATEX uyum + kişisel koruma standardı çift kontrolü yapılır.`,
    servicesOffered: [
      "ATEX uyumlu kimya tesisi çekimi",
      "Üretim süreci + reaktör kayıt",
      "AR-GE laboratuvarı fotoğrafçılığı",
      "Kalite kontrol + sertifikasyon belgesi",
      "Paketleme + etiketleme + MSDS uyumlu çekim",
      "Drone (ATEX zonsuz alanda) hava çekimi",
      "Çift dil sürdürülebilirlik raporu görseli",
      "Avrupa REACH/FDA başvuru görseli",
    ],
    notableTenantsHint:
      "Kimya İhtisas OSB'de 30+ kimya firması yer alır. ATEX uyum ve NDA standartı nedeniyle firma listesi kamuya açık değildir.",
    faqs: [
      {
        question: "ATEX bölgelerinde dijital ekipman kullanılabilir mi?",
        answer:
          "Bazı zone 0/1 alanlarda yasaklıdır. Tesisinizin ATEX onaylı ekipmanı varsa onu kullanırız; yoksa zone 2 dışında çekim yapıp post-prodüksiyonda zenginleştirme yapıyoruz.",
      },
      {
        question: "Kimya tesisine girmek için özel eğitim gerekiyor mu?",
        answer:
          "Tesisinizin önceden 'Saha Güvenlik Bilgilendirmesi' yapması yeterli. Bizim ekibimiz bu eğitimleri onaylı şekilde almıştır; her tesise özel ek bilgilendirme alınır.",
      },
      {
        question: "REACH başvurusu için fotoğraf hazırlığı yapıyor musunuz?",
        answer:
          "Evet — Avrupa REACH yönetmeliği başvurularında üretim süreci + güvenlik koşullarını belgeleyen fotoğraflar gerekir. Standart hizmetimiz dahilinde.",
      },
      {
        question: "Drone Kimya OSB'de uçabilir mi?",
        answer:
          "Sadece ATEX zone'undan uzak alanlarda + OSB yönetimi izniyle. Tesisinizin spesifik konumuna göre değerlendirme yapıyoruz.",
      },
      {
        question: "ESG raporlama görseli nedir?",
        answer:
          "Çevresel + sosyal + yönetimsel sürdürülebilirlik raporlarında kullanılan, şirketin sorumlu üretim uygulamalarını yansıtan görsel paketi. Kimya sektöründe giderek artan talep.",
      },
      {
        question: "İlaç hammaddesi tesislerinde GMP uyumu var mı?",
        answer:
          "Evet — GMP (Good Manufacturing Practice) standartları üretim alanı temizliği + personel hijyeni için sıkı kurallar getirir; bu alanlarda dijital ekipman kısıtlamaları olabilir. Tesisinizin spesifik kurallarına uyuyoruz.",
      },
    ],
  },

  {
    slug: "dilovasi-osb",
    name: "Dilovası OSB",
    fullName: "Dilovası Organize Sanayi Bölgesi",
    district: "dilovasi",
    description: `Dilovası OSB, Kocaeli'nin Dilovası ilçesinde yer alan, ağır sanayi (metal, çelik, kimya, lojistik, ambalaj) yoğunluklu büyük ölçekli bir organize sanayi bölgesidir. Türkiye'nin önemli liman erişimine sahip olması (İzmit Körfezi) nedeniyle ihracat odaklı üreticilerin tercih ettiği konumdur.

Akse Fotoğrafçılık olarak Dilovası OSB'deki büyük ölçekli sanayi tesisleri için tanıtım çekimi, ürün fotoğrafçılığı, drone hava çekimi (özellikle limanlı kompleksler için), tanıtım filmi ve B2B katalog hizmetleri sunuyoruz. Stüdyomuza 15-20 dakika mesafede.

Ağır sanayi çekiminin özel gereksinimleri: yüksek tavan üretim alanları (24+ metre), büyük makineler (CNC + pres + kazan), sıcak ortam (metal döküm, ısıl işlem), açık alan stok alanları (drone için ideal), liman bağlantısı (RTG vinçler, konteyner stoku, ihracat akışı). Geniş açı + telefoto eş zamanlı kullanım, drone hava perspektifi kritik.

Dilovası'nın liman avantajı görsel hikayede önemli bir konudur: konteyner yükleme, gemi bekleme, vinç hareketi gibi 'global ticaret' anları pazarlama materyalinin değer önerisini güçlendirir. Drone ile bu süreç dramatic bir şekilde belgelenebilir.

İhracat odaklı üreticiler için çift dil (TR + EN) tanıtım filmi, uluslararası fuarlara (Stainless Steel World, ITM Industry) hazırlık, Avrupa OEM ihale dosyası fotoğraflama hizmetleri yoğun talep görür.`,
    servicesOffered: [
      "Ağır sanayi tesis tanıtımı",
      "Metal işleme + döküm + ısıl işlem kayıt",
      "Liman + konteyner + gemi yükleme drone",
      "İhracat süreci görsel hikayesi",
      "Avrupa OEM ihale dosyası",
      "Çift dil tanıtım filmi (TR + EN)",
      "Uluslararası fuar sunum materyali",
      "Yıllık tesis güncelleme paketi",
    ],
    notableTenantsHint:
      "Dilovası OSB'de 100+ büyük ölçekli üretim tesisi yer alır. NDA korumalı çalışma standardımız nedeniyle firma listesi kamuya açık değildir.",
    faqs: [
      {
        question: "Dilovası OSB'ye Gebze'den ulaşım nasıl?",
        answer:
          "Gebze merkezinden D-100/E-5 üzerinden 15-20 dakika. Stüdyomuza yakın bir bölgedir.",
      },
      {
        question: "Liman alanında drone uçabilir mi?",
        answer:
          "Liman alanları genelde 'no fly zone' kapsamındadır; özel izin gerekir. Liman dışı stok ve sevkiyat alanlarında uçuş mümkündür. Önceden NOTAM ve liman izni kontrolü yapıyoruz.",
      },
      {
        question: "Ağır sanayi çekimi için güvenlik ekipmanı gerekiyor mu?",
        answer:
          "Tabi — baret + güvenlik ayakkabısı + gözlük + yüksek görünür yelek standardımız. Tesisinizin ek gereksinimleri (kulak koruyucu, gaz maskesi, ısıya dayanıklı kıyafet) varsa koordine ediyoruz.",
      },
      {
        question: "Konteyner yükleme süreci çekilebilir mi?",
        answer:
          "Evet — RTG vinçler, konteyner stoku, gemi yükleme dramatic kareler için harika konular. Drone hava perspektifi özellikle etkili.",
      },
      {
        question: "İhracat hikayesi nasıl yansıtılır?",
        answer:
          "Üretim → kalite kontrol → paketleme → sevkiyat → liman → gemi yükleme akışı tek bir tanıtım filminde. Global ticaret ölçeğinin görsel temsili.",
      },
      {
        question: "Yıllık güncelleme paketi nedir?",
        answer:
          "Yılda 1 kez yeni hattı, yeni ürünü, yeni sertifikasyonu görsel olarak güncelleme. Pazarlama materyalinin sürekli güncel kalmasını sağlar.",
      },
    ],
  },

  {
    slug: "guzeller-osb",
    name: "Güzeller OSB",
    fullName: "Güzeller Organize Sanayi Bölgesi",
    district: "gebze",
    description: `Güzeller OSB, Gebze'nin Güzeller mahallesinde — yani Akse Fotoğrafçılık stüdyosunun bulunduğu mahallede — yer alan ve karma sanayi (metal, makine, plastik, gıda, ambalaj) yoğunluklu OSB'dir. KOBİ ve orta ölçekli üreticiler için ideal bir konum, Akse stüdyosuna yürüme + birkaç dakikalık mesafede yer alır.

Yerel coğrafi avantajımız nedeniyle Güzeller OSB'deki firmalara hızlı ve esnek hizmet sunabiliyoruz; aynı gün içinde stüdyo poz seansı + tesis tanıtım çekimi + drone hava kombinasyonu mümkün. Ulaşım kayıp süresi minimum.

Güzeller OSB'deki firmalar için en sık verdiğimiz hizmetler: ürün katalog çekimi (KOBİ'lerin pazarlama bütçesine uygun), kurumsal personel portresi (LinkedIn + web sitesi), B2B sunum materyali (yatırımcı + müşteri toplantıları için), aylık sosyal medya içeriği (sürekli pazarlama akışı için), tanıtım filmi (ihracat müşterisine yönelik).

Yerel KOBİ'ler için özel paketler: 'Mini Tanıtım' (yarım gün çekim + 1 dk klip + 30 fotoğraf), 'Aylık Pazarlama' (aylık 4 ziyaret + 60 görsel + 8 reels). Bu paketler düşük bütçeyle profesyonel pazarlama materyali üretmek isteyen yerel firmalar için tasarlanmıştır.`,
    servicesOffered: [
      "Yerel KOBİ tesis tanıtımı (yarım gün)",
      "Aylık pazarlama içerik üretimi",
      "Ürün katalog (e-ticaret + B2B)",
      "Kurumsal personel + LinkedIn portresi",
      "Mini tanıtım filmi (1-1.5 dk)",
      "Drone hava + tesis genel",
      "Stüdyo + tesis kombineli çekim",
      "Yıllık görsel arşiv güncelleme",
    ],
    notableTenantsHint:
      "Güzeller OSB'de 60+ KOBİ ve orta ölçekli firma yer alır. Akse stüdyomuza coğrafi yakınlık nedeniyle bölgenin ilk tercih edilen fotoğraf hizmetleyiz.",
    faqs: [
      {
        question: "Güzeller OSB'ye stüdyodan ulaşım ne kadar?",
        answer:
          "Akse stüdyosu Güzeller mahallesi 927. Sokak'ta — OSB'ye 5-10 dakika mesafede. Bazı tesislere yürüme mesafesi.",
      },
      {
        question: "Yerel KOBİ için bütçe avantajı var mı?",
        answer:
          "Tabi — 'Mini Tanıtım' ve 'Aylık Pazarlama' paketleri düşük bütçeyle profesyonel pazarlama materyali üretmek isteyen yerel firmalar için tasarlandı. Ulaşım ücretsiz.",
      },
      {
        question: "Aynı gün içinde stüdyo + tesis çekimi olur mu?",
        answer:
          "Evet — sabah stüdyoda kurumsal portreler, öğleden sonra tesiste tanıtım çekimi mümkün. Yerel coğrafi avantajımız.",
      },
      {
        question: "Aylık pazarlama paketi nasıl çalışır?",
        answer:
          "Ayda 4 ziyaret (haftada 1) + her ziyarette 15-20 yeni görsel + sosyal medya planlama. Sürekli içerik akışı sağlar.",
      },
      {
        question: "Güzeller OSB'de drone uçuruldu mu?",
        answer:
          "Evet — birçok firma için drone hava çekimi yaptık. OSB yönetimi + NOTAM koordinasyonu standart.",
      },
      {
        question: "Yıllık görsel arşiv güncelleme nedir?",
        answer:
          "Tesisin yıllık değişikliklerini (yeni ekipman, yeni ürün, yeni dekor) görsel olarak güncellemek. Pazarlama materyali daima güncel kalır.",
      },
    ],
  },
];

export function getIndustrialZoneBySlug(slug: string) {
  return industrialZones.find((z) => z.slug === slug);
}
