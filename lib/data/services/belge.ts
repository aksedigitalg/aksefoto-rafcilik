import type { Service } from "@/lib/types";

export const belgeServices: Service[] = [
  {
    slug: "biyometrik-fotograf-cekimi",
    name: "Biyometrik Fotoğraf Çekimi",
    category: "belge",
    primaryKeyword: "biyometrik fotoğraf çekimi",
    secondaryKeywords: ["Gebze biyometrik fotoğraf", "biyometrik vesikalık", "ICAO standart biyometrik", "anında biyometrik baskı"],
    shortDescription: "Pasaport, vize ve resmi belgeler için ICAO standartlarına uygun, anında baskılı biyometrik fotoğraf.",
    longDescription: `Biyometrik fotoğraf, pasaport, vize, ehliyet, kimlik gibi resmi belgelerde kullanılan, uluslararası ICAO standartlarına uygun çekilmiş özel bir fotoğraf türüdür. Akse Fotoğrafçılık olarak Gebze Güzeller'deki stüdyomuzda anında biyometrik fotoğraf hizmeti sunuyoruz.

Biyometrik fotoğrafın belirli kuralları vardır: arka plan açık beyaz/krem, yüzün tam ön cepheden, gözler net açık, gülmeden ve dudaklar kapalı, saç yüzü kapatmamalı, gözlük varsa parlamamalı, başörtüsü varsa yüz hatlarını kapatmamalı. Bu kurallara uymayan fotoğraflar ülkelerin konsolosluk/pasaport ofisleri tarafından reddedilir.

Stüdyomuzda biyometrik standartlara göre kalibreli ışık kurulumu, doğru yükseklikte tripod ve özel arka plan bulunmaktadır. Çekim 5-10 dakika sürer; baskı 5 dakikada hazır. ICAO/Schengen/ABD/UK standartları için ayrı şablonlar mevcuttur. Bebek/çocuk biyometrik çekimleri için sabırlı yaklaşım sergiliyoruz.

Tüm belge fotoğraf türleri (vesikalık, biyometrik, pasaport, vize, ehliyet, kimlik) tek stüdyoda; randevuya gerek yok, yürüyüş mesafesinde gelin.`,
    features: ["ICAO + Schengen + ABD/UK standartları", "Anında baskı (5 dk)", "Profesyonel kalibreli ışık", "Bebek/çocuk için sabırlı çekim", "Dijital + baskı teslim", "Randevu gerekmez"],
    packages: [
      { name: "Sade", priceRange: "₺150 - ₺250", description: "4 adet baskı", includes: ["4 adet 5x6 cm baskı", "Dijital JPG", "ICAO standart"] },
      { name: "Klasik", priceRange: "₺250 - ₺400", description: "8 adet baskı + dijital", includes: ["8 adet baskı", "Dijital + e-pasaport boyut", "Tüm uluslararası standartlar"], popular: true },
      { name: "Aile/Grup", priceRange: "₺500 - ₺800", description: "Ailece 4 kişi", includes: ["4 kişi × 4 baskı", "Tüm dijital", "Toplu indirim"] },
    ],
    faqs: [
      { question: "Biyometrik fotoğraf nedir?", answer: "ICAO standartlarına uygun, yüz hatlarını net gösteren, arka planı beyaz/krem, gözleri açık, ifade nötr olan resmi belge fotoğrafıdır. Pasaport, vize, ehliyet, kimlik için zorunludur." },
      { question: "Hangi ülkelerin standartlarına uygun?", answer: "Türkiye Pasaport (5x6 cm), Schengen Vizesi (3.5x4.5 cm), ABD Vizesi (5x5 cm), UK Vizesi (35x45 mm), Çin/Japonya/Rusya vize standartları. Hangi belge için olduğunu söylediğinizde doğru şablonu kullanıyoruz." },
      { question: "Vesikalıktan farkı nedir?", answer: "Vesikalık eski tip belge fotoğrafıdır (boyut 4.5x6 cm), biyometrik daha yeni standarttır (boyut ülkeye göre değişir, yüz orantısı sıkı). Bugün resmi belgelerin çoğu biyometrik ister." },
      { question: "Çocuk biyometrik fotoğrafı zor mu?", answer: "Sabır ister; çocuğu güldürmeden ama doğal halde çekmek incelik gerektirir. Stüdyomuzda çocuk için özel oyuncak/şarkı yöntemleri kullanıyoruz." },
      { question: "Gözlük takabilir miyim?", answer: "Türkiye pasaport için gözlüksüz çekim isteniyor (yansıma ve yüz tanıma için). Bazı vizelerde gözlük takılabilir ama camı temiz, parlamayan olmalı. Önce hangi belge için olduğunu söyleyin." },
      { question: "Başörtüsü ile çekilebilir mi?", answer: "Evet — dini sebeple başörtüsü takabilirsiniz; ancak yüz hatlarının (alın, kulaklar, çene) net görülmesi gerekir. Stüdyomuzda doğru ayar yapıyoruz." },
    ],
    relatedServices: ["vesikalik-fotograf-cekimi", "pasaport-fotografi", "vize-fotografi", "ehliyet-fotografi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Biyometrik Fotoğraf | Anında Baskılı Pasaport Çekimi",
    metaDescription: "Gebze Güzeller biyometrik fotoğraf. ICAO/Schengen/ABD standartları, anında baskı (5 dk), randevu gerekmez. Bebek/çocuk için sabırlı. 0533 241 75 22",
  },

  {
    slug: "vesikalik-fotograf-cekimi",
    name: "Vesikalık Fotoğraf Çekimi",
    category: "belge",
    primaryKeyword: "vesikalık fotoğraf çekimi",
    secondaryKeywords: ["Gebze vesikalık", "klasik vesikalık", "iş başvurusu vesikalık", "diploma vesikalık"],
    shortDescription: "Klasik vesikalık fotoğraf — iş başvurusu, diploma, üyelik kartı için anında baskılı çekim.",
    longDescription: `Vesikalık fotoğraf, biyometrikten önce kullanılan klasik resmi belge fotoğrafıdır; bugün hala iş başvuruları, diploma, üyelik kartları, dosya gibi alanlarda istenir. Akse Fotoğrafçılık olarak vesikalık çekimini stüdyomuzda 5 dakikada tamamlıyor, baskıyı 5 dakika içinde teslim ediyoruz.

Standart vesikalık 4.5x6 cm boyutta, beyaz/açık gri arka planlıdır. Yüz tam ön cepheden, gözler açık, ifade doğal-nötr. Biyometriğe göre daha esnek; hafif gülümseme genelde kabul edilir. Renkli (genel kullanım) veya siyah-beyaz (eski moda formal kurumlar) basabiliyoruz.

Stüdyomuzda farklı boyut şablonları var: 4.5x6 cm (klasik vesikalık), 3.5x4.5 cm (Schengen vize uyumlu), 5x6 cm (Türkiye pasaport). Hangi belge için ihtiyacınız olduğunu söylediğinizde doğru şablonu seçiyoruz. Tek seansta birden fazla belge için çekim ek ücret olmadan mümkündür.`,
    features: ["4.5x6 cm klasik standart", "Renkli + siyah-beyaz baskı", "Anında teslim", "Tek seansta çoklu belge", "Aile indirimi", "Dijital + baskı"],
    packages: [
      { name: "Mini", priceRange: "₺100 - ₺200", description: "4 adet baskı", includes: ["4 adet vesikalık baskı", "Dijital JPG", "Renkli veya siyah-beyaz"] },
      { name: "Klasik", priceRange: "₺200 - ₺350", description: "8 adet + dijital", includes: ["8 adet baskı", "Tüm boyut şablonları (vesikalık + biyometrik)", "Dijital teslim"], popular: true },
      { name: "Aile", priceRange: "₺400 - ₺600", description: "Ailece 4 kişi", includes: ["4 kişi × 4 baskı", "Toplu indirim", "Tüm dijital"] },
    ],
    faqs: [
      { question: "Vesikalık ile biyometrik aynı mı?", answer: "Hayır — vesikalık eski klasik standart (4.5x6 cm), biyometrik daha sıkı uluslararası standart (boyut ülkeye göre değişir). Çoğu resmi belge bugün biyometrik ister; iş başvurusu/diploma için vesikalık yeterli." },
      { question: "Renkli mi siyah-beyaz mı?", answer: "Standart günümüzde renklidir; bazı eski formal kurumlar siyah-beyaz ister. İhtiyacınız neyse o seçeneği basabiliriz." },
      { question: "Tek çekimden hem vesikalık hem biyometrik basılır mı?", answer: "Evet — tek çekimden farklı boyut şablonlarına göre baskı yapabiliyoruz. İhtiyacınızı söylerseniz tek seansla birden fazla belge için fotoğraf alırsınız." },
      { question: "Anında teslim ne kadar?", answer: "Çekim 5 dakika, baskı 5 dakika. Toplam 10-15 dakikada elinizde olur." },
      { question: "Vesikalık için randevu gerekiyor mu?", answer: "Hayır — yürüyüş mesafesinde gelin, beklemeden çekiliriz. Yoğun saatlerde 10-15 dakika beklemeniz gerekebilir." },
      { question: "Gözlük takılabilir mi?", answer: "Vesikalıkta gözlük genelde sorun değil; cam temiz ve parlamamalı. Biyometrikte ise daha sıkı kurallar var, gözlüksüz tercih edilir." },
    ],
    relatedServices: ["biyometrik-fotograf-cekimi", "pasaport-fotografi", "ehliyet-fotografi", "kimlik-fotografi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Vesikalık Fotoğraf | Anında Baskı, Klasik Vesikalık",
    metaDescription: "Gebze vesikalık fotoğraf çekimi. Klasik 4.5x6 cm, renkli + siyah-beyaz, anında baskı (10 dk). İş başvurusu + diploma uyumlu. 0533 241 75 22",
  },

  {
    slug: "pasaport-fotografi",
    name: "Pasaport Fotoğrafı",
    category: "belge",
    primaryKeyword: "pasaport fotoğrafı",
    secondaryKeywords: ["Gebze pasaport fotoğrafı", "Türkiye pasaportu fotoğraf", "yeni pasaport çekimi", "e-pasaport fotoğraf"],
    shortDescription: "Türkiye e-pasaportu için ICAO standartlarına uygun resmi pasaport fotoğrafı çekimi.",
    longDescription: `Türkiye pasaport fotoğrafı için kesin standartlar vardır: 5x6 cm boyut, açık gri/beyaz arka plan, yüz tam ön cepheden, gözler net açık, ifade nötr (gülmeyen), gözlük varsa cam temiz ve parlamayan, başörtüsü varsa yüz hatları net görünür olmalı. Akse Fotoğrafçılık olarak Gebze Güzeller stüdyomuzda Nüfus Müdürlüğü ve Pasaport Şubesi başvurularında reddedilmeyen, tam standart pasaport fotoğrafı sağlıyoruz.

Stüdyomuzda Türkiye pasaport şablonu kalibreli olarak ayarlıdır: ışık yüksekliği, arka plan tonu, kamera yüksekliği — hepsi standart için sabit. Çekim 5 dakika, baskı 5 dakika sürer. 6 adet pasaport boyutunda baskı + dijital JPG teslim ediyoruz; bazı başvurular dijital yükleme istediği için her ikisi de elinizde olur.

Bebek/küçük çocuk pasaport fotoğrafı zorlu bir iştir; çocuğun ifadesi nötr, gözleri açık, yüzü tam karşıya bakar olmalı. Stüdyomuzda bebek/çocuk için yumuşak yastık + ebeveyn yardımıyla doğru pozun yakalanması için sabırlı yaklaşım sergiliyoruz.`,
    features: ["Türkiye e-pasaport standartı", "5x6 cm boyut, kalibreli ışık", "6 adet baskı + dijital JPG", "Anında teslim (10 dk)", "Bebek/çocuk için sabırlı çekim", "Dijital yükleme dosyası"],
    packages: [
      { name: "Yetişkin", priceRange: "₺200 - ₺350", description: "6 adet baskı + dijital", includes: ["6 adet 5x6 cm baskı", "Dijital JPG (yüklemeye uygun)", "ICAO standart"] },
      { name: "Bebek/Çocuk", priceRange: "₺250 - ₺400", description: "Çocuk için ekstra sabırlı seans", includes: ["6 adet baskı", "Dijital JPG", "Yumuşak yastık + ebeveyn yardımı", "Sabırlı çekim"], popular: true },
      { name: "Aile", priceRange: "₺600 - ₺900", description: "Ailece 4 kişi", includes: ["4 kişi × 6 baskı", "Tüm dijitaller", "Toplu indirim"] },
    ],
    faqs: [
      { question: "Türkiye pasaport fotoğrafı boyutu nedir?", answer: "5x6 cm. Yüz alanı toplam alanın %70-80'ini kaplar. Stüdyomuzda kalibreli şablon hazır." },
      { question: "Arka plan nasıl olmalı?", answer: "Açık gri veya beyaz (saf parlak beyaz değil). Stüdyomuzda standart arka plan kağıdı kalibrelidir." },
      { question: "Gülümsenebilir mi?", answer: "Hayır — Türkiye pasaport için ifade nötr, dudaklar kapalı veya sadece hafifçe açık. Geniş gülümseme reddedilir." },
      { question: "Bebek pasaport fotoğrafı zor mu?", answer: "Evet — bebeğin gözleri açık, yüzü karşıya, ifadesi nötr olmalı. Stüdyomuzda yumuşak yastık + ebeveyn yardımıyla en iyi pozu yakalıyoruz. Birkaç deneme normal." },
      { question: "Saç yüzü kapatabilir mi?", answer: "Hayır — saç alını, kulağı, çene hattını net göstermeli. Saçınız uzun ve yüzü kapıyorsa çekim öncesi geriye toplamanız önerilir." },
      { question: "Dijital yükleme dosyası nedir?", answer: "Bazı başvurular (e-Pasaport randevu sistemi) fotoğrafın dijital JPG'sini ister; standart boyut ve dosya boyutuna uygun teslim ediyoruz." },
    ],
    relatedServices: ["biyometrik-fotograf-cekimi", "vize-fotografi", "vesikalik-fotograf-cekimi", "kimlik-fotografi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Pasaport Fotoğrafı | Türkiye e-Pasaport Çekimi",
    metaDescription: "Gebze pasaport fotoğrafı. Türkiye e-pasaport standartları, 5x6 cm, ICAO uyumlu. Anında baskı, dijital JPG. Bebek/çocuk için sabırlı. 0533 241 75 22",
  },

  {
    slug: "vize-fotografi",
    name: "Vize Fotoğrafı",
    category: "belge",
    primaryKeyword: "vize fotoğrafı",
    secondaryKeywords: ["Schengen vize fotoğrafı", "ABD vize fotoğrafı", "Gebze vize fotoğraf", "UK vize fotoğraf"],
    shortDescription: "Schengen, ABD, UK ve diğer ülke vize başvuruları için standartlara uygun, reddedilmeyen vize fotoğrafı.",
    longDescription: `Vize fotoğrafı, başvurduğunuz ülkenin konsolosluk standartlarına tam uyumlu olmazsa başvurunuz reddedilebilir. Akse Fotoğrafçılık olarak Schengen ülkeleri (3.5x4.5 cm), ABD vizesi (5x5 cm), UK vize (35x45 mm), Çin (33x48 mm), Japonya (45x35 mm) ve diğer ülkelerin standartlarına özel şablonlarımız var.

Vize fotoğrafı genel kuralları: arka plan açık beyaz, yüz tam ön cepheden, gözler net açık, ifade nötr, gözlük genelde yasak (yansıma riski), başörtüsü dini gerekçeyle takılabilir ama yüz hatları net olmalı, son 6 ay içinde çekilmiş olmalı.

Çekim öncesi hangi ülke için olduğunu söyleyin; o ülkenin standartlarına göre kalibreli kurulum yapıyoruz. Stüdyomuzda her ülke şablonu hazır; başvuru ofislerinden geri dönüş gelmemesi için titiz çalışıyoruz. Dijital teslim formatı PDF ya da JPG olabilir; konsolosluk neyi istiyorsa öyle teslim ediyoruz.`,
    features: ["Schengen + ABD + UK + Çin + Japonya standartları", "Ülkeye özel kalibreli şablon", "Anında baskı (10 dk)", "Dijital + baskı teslim", "Konsolosluk reddini önleyen titizlik", "Son 6 ay tarihli çekim"],
    packages: [
      { name: "Tek Ülke", priceRange: "₺200 - ₺350", description: "Bir ülke standardı, 4 baskı", includes: ["4 adet baskı", "Dijital JPG", "Tek ülke standardı"] },
      { name: "Çoklu", priceRange: "₺350 - ₺550", description: "Birden fazla ülke (örn: çoklu Schengen + UK)", includes: ["8 adet baskı (farklı boyutlar)", "Tüm dijital", "Ülke şablon karşılaştırması"], popular: true },
      { name: "Aile/Grup", priceRange: "₺600 - ₺1.000", description: "4 kişiye kadar", includes: ["4 kişi × 4 baskı", "Tüm dijital", "Toplu indirim"] },
    ],
    faqs: [
      { question: "Schengen vize fotoğraf standartı nedir?", answer: "3.5x4.5 cm boyut, açık beyaz arka plan, yüz tam ön cepheden, gözler açık, gözlüksüz, ifade nötr. Stüdyomuzda Schengen kalibreli şablon hazır." },
      { question: "ABD vize fotoğrafı farklı mı?", answer: "Evet — 5x5 cm kare boyut, beyaz arka plan, gözlük yasak (medikal istisnalar hariç). Stüdyomuzda ABD şablonu mevcut." },
      { question: "UK vize fotoğrafı nasıl?", answer: "35x45 mm boyut, beyaz arka plan, son 1 ay içinde çekilmiş olmalı. Çocuk vizesinde yaş 6'dan küçükse ifade kuralları daha esnek." },
      { question: "Vize başvurusu reddedilirse fotoğraf yenilenir mi?", answer: "Fotoğraf bizim standartımızda olduğu için konsolosluktan reddedildiğine henüz şahit olmadık. Yine de reddedilirse ücretsiz yeniden çekim yapıyoruz." },
      { question: "Birden fazla ülkeye başvuracağım, tek çekim yeterli mi?", answer: "Tek çekimden farklı ülke şablonlarına göre baskı yapabiliyoruz; ancak boyutlar farklı olduğu için baskı çoklu pakette daha avantajlı." },
      { question: "Gözlüksüz çekim mi gerekiyor?", answer: "Çoğu ülke gözlüksüz ister (yansıma + yüz tanıma için). Tıbbi nedenle gözlük kullananlar için medikal sertifika gerekebilir." },
    ],
    relatedServices: ["pasaport-fotografi", "biyometrik-fotograf-cekimi", "vesikalik-fotograf-cekimi", "kimlik-fotografi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Vize Fotoğrafı | Schengen ABD UK Vize Çekimi",
    metaDescription: "Gebze vize fotoğraf çekimi. Schengen, ABD, UK, Çin, Japonya standartları. Konsolosluk reddini önleyen titiz çekim. 0533 241 75 22",
  },

  {
    slug: "ehliyet-fotografi",
    name: "Ehliyet Fotoğrafı",
    category: "belge",
    primaryKeyword: "ehliyet fotoğrafı",
    secondaryKeywords: ["Gebze ehliyet fotoğraf", "yeni ehliyet çekimi", "ehliyet yenileme fotoğraf", "biyometrik ehliyet"],
    shortDescription: "Yeni nesil ehliyet için biyometrik standartlara uygun, anında baskılı ehliyet fotoğrafı.",
    longDescription: `Türkiye yeni nesil ehliyet (kart tipi) için biyometrik standartlara uygun fotoğraf gerekir. Akse Fotoğrafçılık olarak Gebze Güzeller stüdyomuzda ehliyet için 5x6 cm boyutlu, ICAO uyumlu fotoğraf çekiyor ve anında baskılıyoruz.

Ehliyet fotoğrafı pasaport ile aynı standarttadır: açık beyaz/gri arka plan, tam ön cephe, gözler açık, ifade nötr, gözlük varsa cam temiz olmalı. Sürücü kursundan/Trafik Tescil müracaat formuna ekleyebilmeniz için 4 adet baskı + dijital JPG teslim ediyoruz.

Anında ehliyet yenileme veya ilk ehliyet başvurusunda, fotoğrafın standart dışı olması başvurunuzu yavaşlatır. Stüdyomuzdan çıkan fotoğraflar 100% reddedilmeyecek standartta. Tek çekimden hem ehliyet hem pasaport hem kimlik için baskı çıkarabiliyoruz; tek seansta tüm belgeler için fotoğraf alın.`,
    features: ["Türkiye ehliyet standardı (5x6 cm)", "ICAO uyumlu, biyometrik", "Anında baskı (10 dk)", "4 adet + dijital teslim", "Tek seansta çoklu belge", "Sürücü kursu uyumlu"],
    packages: [
      { name: "Sade", priceRange: "₺150 - ₺250", description: "4 adet baskı", includes: ["4 adet 5x6 cm baskı", "Dijital JPG"] },
      { name: "Klasik", priceRange: "₺250 - ₺400", description: "8 adet + dijital", includes: ["8 adet baskı", "Dijital JPG", "Tüm belge formatları (ehliyet + pasaport + kimlik)"], popular: true },
      { name: "Aile", priceRange: "₺500 - ₺800", description: "4 kişi", includes: ["4 kişi × 4 baskı", "Tüm dijitaller", "Toplu indirim"] },
    ],
    faqs: [
      { question: "Yeni nesil ehliyet için fotoğraf nasıl olmalı?", answer: "5x6 cm boyutta, biyometrik standartta. Açık arka plan, ön cephe, gözler açık, ifade nötr. Stüdyomuzdan çıkan tüm ehliyet fotoğrafları başvurularda kabul ediliyor." },
      { question: "Sürücü kursu için aynı fotoğraf kullanılır mı?", answer: "Evet — sürücü kursu kayıt evrakında ve ehliyet başvurusunda aynı standart fotoğraf kullanılır. Tek çekimden 4-8 adet baskı sizin için yeterli olur." },
      { question: "Ehliyet yenileme için yeni fotoğraf gerekiyor mu?", answer: "Eski sürücü belgesinden yeni karta geçişte yeni fotoğraf gerekir; eski 'sürücü belgesi' fotoğrafı kabul edilmez. Stüdyomuzda anında çekim mümkün." },
      { question: "Gözlük takabilir miyim?", answer: "Cam temiz ve parlamayan ise takabilirsiniz. Trafikte gözlük kullanıyorsanız ehliyet fotoğrafında da gözlüklü olmanız tercih edilir (gözlük şartı ehliyete işlenir)." },
      { question: "Tek çekimden hem ehliyet hem pasaport baskı olur mu?", answer: "Evet — boyut aynı (5x6 cm). Tek çekimden istediğiniz kadar baskı çıkartabiliriz; ek dijital JPG ile e-pasaport başvurusu için de elinizde olur." },
      { question: "Anında baskı ne kadar?", answer: "Çekim 5 dk, baskı 5 dk. Toplam 10 dakikada elinizde." },
    ],
    relatedServices: ["pasaport-fotografi", "biyometrik-fotograf-cekimi", "kimlik-fotografi", "vesikalik-fotograf-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Ehliyet Fotoğrafı | Yeni Nesil Ehliyet Çekimi",
    metaDescription: "Gebze ehliyet fotoğraf çekimi. Yeni nesil ehliyet standartı, biyometrik, anında baskı. Sürücü kursu + ehliyet yenileme. 0533 241 75 22",
  },

  {
    slug: "kimlik-fotografi",
    name: "Kimlik Fotoğrafı",
    category: "belge",
    primaryKeyword: "kimlik fotoğrafı",
    secondaryKeywords: ["yeni kimlik fotoğraf", "Gebze kimlik çekimi", "TC kimlik fotoğraf", "çocuk kimlik fotoğraf"],
    shortDescription: "TC kimlik kartı (yeni çipli) için biyometrik standartlara uygun anında kimlik fotoğrafı.",
    longDescription: `TC kimlik kartı (çipli, yeni nesil) için biyometrik standartlara uygun fotoğraf gerekir. Akse Fotoğrafçılık olarak Gebze Güzeller stüdyomuzda kimlik fotoğrafı çekimi yapıyor ve Nüfus Müdürlüğü başvurusu için 4 adet baskı + dijital teslim ediyoruz.

Kimlik fotoğrafı standartı: 5x6 cm, açık beyaz/gri arka plan, ön cephe, gözler açık, ifade nötr. Bebek/çocuk kimlik fotoğrafı için sabırlı yaklaşım sergiliyoruz; küçük çocuğun ifadesi nötr ve gözleri açık olmalı (bu çocuk için zor olabilir).

15 yaş altı çocuklara kimlik fotoğrafı çekiminde ailenin yardımı önemlidir; çocuğun başını sabit tutması için yumuşak destek kullanıyoruz. Yenidoğan kimlik fotoğrafı için ise bebeğin gözleri açıkken hızlı çekim gerekir; bunu deneyimli yaklaşımla yapıyoruz.`,
    features: ["TC kimlik kartı standartı", "5x6 cm biyometrik", "Anında baskı (10 dk)", "Bebek/çocuk için sabırlı", "Dijital + 4 baskı", "Nüfus Müdürlüğü uyumlu"],
    packages: [
      { name: "Yetişkin", priceRange: "₺150 - ₺250", description: "4 adet baskı + dijital", includes: ["4 adet 5x6 cm baskı", "Dijital JPG"] },
      { name: "Çocuk", priceRange: "₺200 - ₺350", description: "Çocuk için sabırlı seans", includes: ["4 adet baskı", "Dijital JPG", "Sabırlı yaklaşım"], popular: true },
      { name: "Aile", priceRange: "₺500 - ₺800", description: "Ailece 4 kişi", includes: ["4 kişi × 4 baskı", "Tüm dijital", "Toplu indirim"] },
    ],
    faqs: [
      { question: "TC kimlik kartı fotoğrafı standartı nedir?", answer: "5x6 cm boyut, açık beyaz/gri arka plan, biyometrik standart. Stüdyomuzda Nüfus Müdürlüğü uyumlu kalibreli kurulum mevcuttur." },
      { question: "Bebek için kimlik fotoğrafı nasıl çekiliyor?", answer: "Bebeğin gözleri açık, yüzü karşıya bakıyor olmalı. Stüdyomuzda yumuşak yastık + ebeveyn yardımıyla doğru pozu yakalıyoruz. Birkaç deneme normaldir." },
      { question: "Kimlik yenileme için yeni fotoğraf zorunlu mu?", answer: "Evet — yeni çipli kimliğe geçişte mutlaka yeni fotoğraf gerekir. Eski kimlik fotoğrafı kabul edilmez." },
      { question: "15 yaş altı çocuk kendisi başvurabilir mi?", answer: "Hayır — anne veya babanın eşliğinde başvuru yapılır. Stüdyoya da ebeveynle gelmeniz gerekir; çocuk için sabırlı çekim yapıyoruz." },
      { question: "Pasaport ile kimlik aynı fotoğraf olur mu?", answer: "Boyut ve standart aynı (5x6 cm biyometrik). Tek çekimden hem pasaport hem kimlik baskısı çıkarmak ekonomik bir tercih." },
      { question: "Anında baskı süresi ne kadar?", answer: "Çekim 5 dakika, baskı 5 dakika. Toplam 10 dakikada elinizde." },
    ],
    relatedServices: ["pasaport-fotografi", "ehliyet-fotografi", "biyometrik-fotograf-cekimi", "vesikalik-fotograf-cekimi"],
    galleryCategory: "studyo",
    metaTitle: "Gebze Kimlik Fotoğrafı | TC Kimlik Kartı Çekimi",
    metaDescription: "Gebze kimlik fotoğrafı. Yeni TC kimlik kartı standartı, biyometrik, anında baskı. Bebek/çocuk için sabırlı. 0533 241 75 22",
  },
];
