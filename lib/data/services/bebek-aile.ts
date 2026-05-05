import type { Service } from "@/lib/types";

export const bebekAileServices: Service[] = [
  {
    slug: "yenidogan-cekimi",
    name: "Yenidoğan Fotoğraf Çekimi",
    category: "bebek-aile",
    primaryKeyword: "yenidoğan fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze yenidoğan fotoğrafçısı",
      "yenidoğan stüdyo çekimi",
      "5-15 günlük bebek çekimi",
      "newborn photography",
      "Darıca yenidoğan çekimi",
    ],
    shortDescription:
      "Bebeğinizin doğumdan sonraki ilk günlerini, en uykulu ve en kıvrımlı halini sanat eserine dönüştürüyoruz.",
    longDescription: `Yenidoğan çekimi, bebeğin doğumdan sonraki ilk 5-15 gün içinde yapılan, hayatın en kısa sürelerinden birini ölümsüzleştiren özel bir hizmettir. Bu dönemde bebek hala anne karnındaki kıvrım pozlarını alabiliyor, derin uykuya dalıyor ve özel pozlar mümkün oluyor. Akse Fotoğrafçılık olarak yenidoğan çekimini stüdyomuzda, sterilize edilmiş aksesuarlarla, ısıtılmış ortamda gerçekleştiriyoruz.

Stüdyomuzda yenidoğan için sıcaklık 26-28°C'ye ayarlanır, beyaz gürültü cihazı ile bebeğin uyku konforu sağlanır. Çekim 2-3 saat sürer; bu süre boyunca anne emzirme/altını değiştirme molaları verilir. Bebeği zorlamadan, doğal pozlarla, profesyonel sepet/kutu/battaniye aksesuarlarıyla farklı kompozisyonlar alıyoruz.

Bebeğin güvenliği önceliklidir; "kolu üstüne dayalı poz" gibi riskli composite pozlar için iki ayrı kare çekip sonra Photoshop'ta birleştiriyoruz — gerçekte bebek hiçbir zaman tehlikeli pozisyonda olmuyor. Edit teslim süremiz 14-21 gündür; sosyal medya için 5 kareyi 7 gün içinde iletiyoruz.`,
    features: [
      "Stüdyoda 26-28°C ısıtılmış ortam",
      "Sterilize aksesuarlar",
      "Anne ile birlikte kareler dahil",
      "Aile portresi 15 dk seans",
      "Composite (güvenli) poz teknikleri",
      "Beyaz gürültü cihazı",
      "14-21 günde edit teslim",
    ],
    packages: [
      {
        name: "Mini",
        priceRange: "₺3.500 - ₺5.000",
        description: "Sadece bebek pozları, 1.5 saat",
        includes: ["1.5 saat seans", "30+ edit fotoğraf", "5 farklı kompozisyon", "Dijital teslim"],
      },
      {
        name: "Klasik",
        priceRange: "₺5.500 - ₺8.000",
        description: "Bebek + anne + aile pozları",
        includes: [
          "2-3 saat seans",
          "60+ edit fotoğraf",
          "Anne-baba-bebek kareleri",
          "Kardeş pozları (varsa)",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺9.000 - ₺13.000",
        description: "Albüm + büyük baskı dahil",
        includes: [
          "3 saat seans",
          "80+ edit fotoğraf",
          "20x20 cm 20 sayfa mini albüm",
          "30x40 cm büyük baskı",
          "USB + dijital teslim",
        ],
      },
    ],
    faqs: [
      {
        question: "Bebek kaç günlükken çekim için ideal?",
        answer:
          "5-15 gün arası ideal süredir. Bu dönemde bebek hala kıvrımlı pozlara yatkındır ve uyku saatleri uzundur. 21 günü geçince bebek daha tetiktedir ve klasik newborn pozları zorlaşır.",
      },
      {
        question: "Çekim ne kadar sürüyor?",
        answer:
          "2-3 saat. Anneye ve bebeğe yeterli mola süresi verilir. Acele etmiyoruz; bebeğin konforu önceliklidir.",
      },
      {
        question: "Aksesuarlar steril mi?",
        answer:
          "Evet — tüm sepet, battaniye, şapka ve kutular her çekim öncesi yıkanır ve sterilize edilir. Bebeğin sağlığı önceliğimizdir.",
      },
      {
        question: "Composite poz nedir, güvenli mi?",
        answer:
          "Bebeğin başını eline yaslamış göründüğü pozlar gibi riskli kompozisyonları, iki ayrı kare çekip Photoshop'ta birleştirerek oluşturuyoruz. Bebek hiçbir zaman gerçekte o pozisyonda değildir.",
      },
      {
        question: "Anne emzirme molası verebilir mi?",
        answer:
          "Tabi — çekim boyunca istediğiniz zaman mola verebilirsiniz. Stüdyoda emzirme için sessiz bir köşe ayrılmıştır.",
      },
      {
        question: "Doğum öncesi rezervasyon yapabilir miyiz?",
        answer:
          "Evet ve şiddetle öneriyoruz. Tahmini doğum tarihinizden 1-2 ay önce 'tahmini hafta' rezervasyonu alıyoruz. Bebek geldiğinde aramanız yeterli, kesin tarihi netleştiririz.",
      },
    ],
    relatedServices: ["bebek-fotografcisi", "aylik-bebek-cekimi", "hamile-fotograf-cekimi", "aile-fotografcisi"],
    galleryCategory: "bebek",
    metaTitle: "Gebze Yenidoğan Fotoğraf Çekimi | 5-15 Günlük Bebek Çekimi",
    metaDescription:
      "Gebze yenidoğan fotoğrafçısı. Stüdyoda ısıtılmış ortam, steril aksesuar, güvenli composite pozlar. Anne-bebek-aile kareleri. 0539 633 03 58",
  },

  {
    slug: "bebek-fotografcisi",
    name: "Bebek Fotoğrafçısı",
    category: "bebek-aile",
    primaryKeyword: "bebek fotoğrafçısı",
    secondaryKeywords: [
      "Gebze bebek fotoğrafçısı",
      "bebek fotoğraf çekimi",
      "stüdyo bebek çekimi",
      "Darıca bebek fotoğraf",
      "Çayırova bebek fotoğrafçı",
    ],
    shortDescription:
      "1 aylıktan 1 yaşa kadar bebeklerinizin doğal ifadelerini ve gelişimini sanatla belgeliyoruz.",
    longDescription: `Bebek fotoğrafçılığı, yenidoğan çekiminden sonra başlayan ve 1 yaşa kadar farklı evrelerde yapılan çekim türüdür. Akse Fotoğrafçılık olarak her yaş için farklı yaklaşım benimsiyoruz: 3-4 aylıkta gülümseme refleksi, 6-7 aylıkta oturma, 9-10 aylıkta emekleme, 11-12 aylıkta ayağa kalkma — her dönem ayrı bir zenginlik.

Stüdyo çekimlerinde bebek için güvenli aksesuarlar (yumuşak yüzeyli sandalye, blanket, balon), evcimen renk paletinde arka plan kağıtları ve doğal ışığı taklit eden softbox aydınlatma kullanıyoruz. Bebek tetikteyse oyuncak ve şarkılarla dikkatini dağıtıp doğal gülümseme yakalıyoruz.

Tema çekimleri (denizci, prenses, paşa, melek) için stüdyomuzda kostüm setlerimiz var. Tema önerilerini ön görüşmede paylaşıyoruz. Çekim 1-1.5 saat sürer; bebeğin huzursuzlandığı anda hemen mola veriyoruz. Edit teslim süresi 10-14 gündür.`,
    features: [
      "Yaşa özel yaklaşım (1-12 ay)",
      "Tema kostüm setleri",
      "Yumuşak softbox ışık",
      "Oyuncak/şarkı ile dikkat dağıtma",
      "Aile poz seansı dahil",
      "Sterilize aksesuarlar",
      "10-14 günde edit teslim",
      "USB + dijital teslim",
    ],
    packages: [
      {
        name: "Tek Seans",
        priceRange: "₺2.500 - ₺3.500",
        description: "Stüdyo, 1 saat",
        includes: ["1 saat seans", "30+ edit fotoğraf", "2 farklı tema", "Dijital teslim"],
      },
      {
        name: "Aile Dahil",
        priceRange: "₺4.000 - ₺6.000",
        description: "Bebek + aile + tema",
        includes: [
          "1.5 saat seans",
          "50+ edit fotoğraf",
          "3 farklı tema",
          "Aile portreleri (15 dk)",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺6.500 - ₺9.500",
        description: "Albüm + büyük baskı",
        includes: [
          "2 saat seans",
          "80+ edit fotoğraf",
          "5 tema",
          "20x20 cm 20 sayfa albüm",
          "30x40 cm baskı",
        ],
      },
    ],
    faqs: [
      {
        question: "Hangi yaşta çekim ideal?",
        answer:
          "Her yaşın kendine özel güzelliği var. 3-4 aylıkta gülümseme refleksi başlar; 6-7 aylıkta oturma pozu mümkündür; 9-12 aylıkta hareketli kareler harika olur. Aylık çekim paketimizle her ayı belgeleyebilirsiniz.",
      },
      {
        question: "Bebek çekim sırasında huysuzlanırsa ne oluyor?",
        answer:
          "Hemen mola veriyoruz. Anne emzirir veya bebek dinlenir; sonra tekrar başlıyoruz. Çekim için sabit bir süre yok; bebeğin keyfine göre devam ediyoruz.",
      },
      {
        question: "Stüdyoda mı yoksa evde mi çekim yapılır?",
        answer:
          "Stüdyo, kontrollü ışık ve güvenli ortam sağlar — biz öneriyoruz. Ev çekimi de mümkün; doğal aile ortamında daha samimi sonuçlar verir.",
      },
      {
        question: "Aile portresi dahil mi?",
        answer:
          "Tek Seans pakette opsiyonel; Aile Dahil ve Premium paketlerinde standart. 15-20 dakikalık aile seansı, bebekle birlikte tüm aile karelerini içerir.",
      },
      {
        question: "Aksesuarlar dahil mi?",
        answer:
          "Tüm aksesuarlar (kostüm, balon, sandalye, blanket) stüdyo tarafından sağlanır. Sizin getirmek istediğiniz özel bir kıyafet/aksesuar varsa kullanabiliriz.",
      },
      {
        question: "Edit teslim süresi nedir?",
        answer:
          "Standart 10-14 gündür. Sosyal medya için 5 kareyi 5 gün içinde iletiyoruz.",
      },
    ],
    relatedServices: ["yenidogan-cekimi", "aylik-bebek-cekimi", "1-yas-pasta-patlatma", "aile-fotografcisi"],
    galleryCategory: "bebek",
    metaTitle: "Gebze Bebek Fotoğrafçısı | Stüdyo Bebek Çekimi",
    metaDescription:
      "Gebze bebek fotoğrafçısı. 1-12 aylık bebekler için tema çekimi, aile pozları, güvenli aksesuar. Hızlı teslim. 0539 633 03 58",
  },

  {
    slug: "aylik-bebek-cekimi",
    name: "Aylık Bebek Çekimi",
    category: "bebek-aile",
    primaryKeyword: "aylık bebek çekimi",
    secondaryKeywords: [
      "12 aylık bebek paketi",
      "Gebze aylık bebek",
      "büyüme hikayesi çekimi",
      "yıl boyunca bebek çekimi",
      "milestone bebek çekimi",
    ],
    shortDescription:
      "Bebeğinizin ilk 12 ayını her ay aynı tema/numara ile çekerek 'büyüme hikayesi' albümü oluşturuyoruz.",
    longDescription: `Aylık bebek çekimi, bebeğinizin ilk 12 ayını ay ay aynı standartta belgeleyen ve sonunda bir 'büyüme hikayesi' albümüne dönüşen özel bir abonelik hizmetidir. Akse Fotoğrafçılık olarak her ay aynı stüdyo, aynı ışık, aynı temel kompozisyon ile çekim yapıyoruz; sadece bebeğin büyümesi ve yıl içindeki değişim öne çıkıyor.

Her ay 30 dakikalık kısa bir seans yapıyoruz. Bebeğin ay numarasını gösteren ahşap rakamlar/balon/blok aksesuarlar standartken aileler özel temalar (denizci, prenses, paşa) eklenebilir. 12. ayda büyük bir 'pasta patlatma' (cake smash) seansıyla yıllık paket sonlanır.

Yıl sonunda 12 ayın en başarılı kareleri ile 30 sayfalık 'Birinci Yılım' albümü hazırlıyoruz; bu albüm bebeğin doğumundan 1. yaş gününe kadar olan değişimini sayfa sayfa anlatır. Her seansın peşinden 5 kareyi sosyal medya için ileterek aylık paylaşım yapabilirsiniz.`,
    features: [
      "12 ay × 30 dk seans (toplam 6 saat)",
      "Aynı ışık + aynı arka plan tutarlılığı",
      "Ay numarası aksesuarları",
      "12. ay pasta patlatma (cake smash) finalı",
      "Aile pozları her ay opsiyonel",
      "30 sayfalık yıl sonu albüm",
      "Aylık 5 kare hızlı paylaşım",
      "Online galeri (12 ayrı klasör)",
    ],
    packages: [
      {
        name: "Yarım Yıl",
        priceRange: "₺6.000 - ₺9.000",
        description: "1-6. ay arası 6 seans",
        includes: ["6 seans × 30 dk", "Her ay 20+ edit", "Online galeri", "Dijital teslim"],
      },
      {
        name: "Tam Yıl",
        priceRange: "₺12.000 - ₺18.000",
        description: "1-12. ay + pasta patlatma",
        includes: [
          "12 seans + cake smash",
          "Toplam 250+ edit fotoğraf",
          "30 sayfa yıl sonu albüm",
          "Aile pozları her ay",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺20.000 - ₺28.000",
        description: "Tam yıl + büyük albüm + büyük baskı",
        includes: [
          "12 seans + cake smash",
          "Toplam 350+ edit fotoğraf",
          "40x30 cm 40 sayfa premium albüm",
          "50x70 cm büyük cam baskı",
          "Aylık 30 sn klip 12 adet",
        ],
      },
    ],
    faqs: [
      {
        question: "Her ay aynı kompozisyon mu?",
        answer:
          "Genel kompozisyon (ışık, arkaplan rengi, ay numarası aksesuarı) tutarlı; ancak her ay yeni bir tema veya kıyafet ekleyebiliriz. Bu, hem tutarlılık hem de çeşitlilik sunar.",
      },
      {
        question: "Bir ayı kaçırırsak ne oluyor?",
        answer:
          "Esnek davranıyoruz; ayı 1-2 hafta kaydırabilirsiniz. 4 hafta gecikme olursa o ay atlanmış sayılır ama paket genel kapsamı etkilenmez.",
      },
      {
        question: "Kardeşi de katılabilir mi?",
        answer:
          "Tabi — bazı seanslarda büyük kardeş veya tüm aile pozları opsiyoneldir. Tam Yıl ve Premium paketlerde bu standart dahildir.",
      },
      {
        question: "Pasta patlatma çekimi ne içeriyor?",
        answer:
          "12. ayda yapılan, bebeğin renkli bir pastayı ellemek/yemek/üzerine sıçramasıyla doğan eğlenceli kareler. Pasta tema (mavi/pembe/altın) seçimi sizinle yapılır; bütçeye göre pasta hediye veya ek olur.",
      },
      {
        question: "Albüm ne zaman teslim edilir?",
        answer:
          "12. ay seansından (cake smash) sonra 30-45 gün içinde albüm matbaadan gelir ve size ulaştırırız.",
      },
      {
        question: "Aboneliği yarıda bırakabilir miyim?",
        answer:
          "Evet — paket ödemesi seans bazlı yapılabilir. Ancak Tam Yıl pakedi tam alındığında albüm hediye olur; yarım kalırsa albüm hizmeti ek ücretle eklenir.",
      },
    ],
    relatedServices: ["yenidogan-cekimi", "bebek-fotografcisi", "1-yas-pasta-patlatma", "aile-fotografcisi"],
    galleryCategory: "bebek",
    metaTitle: "Gebze Aylık Bebek Çekimi | 12 Aylık Büyüme Hikayesi Albümü",
    metaDescription:
      "Gebze aylık bebek çekimi paketi. 12 ay tutarlı çekim, pasta patlatma finalı, 30 sayfalık yıl sonu albüm. Aile pozları dahil. 0539 633 03 58",
  },

  {
    slug: "1-yas-pasta-patlatma",
    name: "1 Yaş Pasta Patlatma",
    category: "bebek-aile",
    primaryKeyword: "1 yaş pasta patlatma çekimi",
    secondaryKeywords: [
      "Gebze pasta patlatma",
      "cake smash çekimi",
      "1 yaş bebek çekimi",
      "doğum günü pasta çekimi",
      "smash the cake",
    ],
    shortDescription:
      "Bebeğinizin 1. yaş gününde renkli ve eğlenceli pasta patlatma çekimi — yüzü pasta, gözü oyunla dolu kareler.",
    longDescription: `Pasta Patlatma (Cake Smash) çekimi, bebeğin 1. yaş gününü kutlayan eğlenceli ve renkli bir stüdyo çekim türüdür. Bebek, kendine özel renklerde dekore edilmiş bir pastanın üzerine bırakılır ve doğal dürtüleriyle pastayı eller, yer, dağıtır — bu sırada en saf kahkahalı kareler ortaya çıkar.

Akse Fotoğrafçılık olarak pasta patlatma çekimini stüdyomuzda, balonlu/sade tema ile dekore edilmiş bir alan kurarak yapıyoruz. Pasta tema rengini sizinle birlikte belirliyoruz: mavi (erkek), pembe (kız), pastel/gold (üniseks) en popüler tonlardır. Pastayı sembolik olarak yerel bir pastacıdan temin ediyoruz veya istediğiniz pastacıdan gelmesini bekliyoruz.

Çekim 1 saatlik bir seansdır. Önce bebek temiz kıyafetiyle birkaç poz verir; sonra pasta önüne bırakılır ve 20-30 dakika 'pasta zamanı' başlar. Sonunda banyo köşemizde küvet/leğen içinde 'splash' çekimi yapılıyoruz — bebek banyo köpüğüyle son seansı tamamlıyor. Bu üç aşama (poz, pasta, banyo) yıllık aylık çekim paketinin de finalini oluşturur.

Edit teslim süremiz 10 gündür. Sosyal medya için 5 kareyi 3 gün içinde iletiyoruz.`,
    features: [
      "Tema renkli pasta + balon dekor",
      "Önce poz, sonra pasta, sonra splash",
      "Stüdyoda 3 aşamalı seans",
      "Aile pozları dahil",
      "1 saat kapsam",
      "Pasta dahil seçeneği (paket)",
      "10 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Sade",
        priceRange: "₺3.000 - ₺4.500",
        description: "1 saat, pasta hariç",
        includes: [
          "1 saat seans",
          "40+ edit fotoğraf",
          "Stüdyo dekoru",
          "Splash banyo dahil",
          "Dijital teslim",
        ],
      },
      {
        name: "Klasik",
        priceRange: "₺5.000 - ₺7.500",
        description: "Pasta + dekor dahil",
        includes: [
          "1.5 saat seans",
          "60+ edit fotoğraf",
          "Tema pasta dahil",
          "Balon dekor + ahşap '1' figürü",
          "Aile pozları (15 dk)",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺8.000 - ₺12.000",
        description: "Pasta + dekor + 30 sn klip + albüm",
        includes: [
          "2 saat seans",
          "80+ edit fotoğraf",
          "Premium pasta + tüm dekor",
          "30 sn cake smash klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Pasta sizin tarafınızdan mı temin ediliyor?",
        answer:
          "Klasik ve Premium paketlerde tema pasta dahildir. Sade pakette siz getirirsiniz veya ek ücretle ekleyebilirsiniz. Yerel pastacılarımızla anlaşmamız var; bütçeye uygun seçenekler sunuyoruz.",
      },
      {
        question: "Bebek pastayı yerse sorun olur mu?",
        answer:
          "Pasta gluten/laktoz içermez seçenekler sunuyoruz; alerjisi olan bebekler için özel pasta hazırlatıyoruz. Çoğu bebek pastayı sadece eller; yemeyenler de var, eyleme özgürlük tanıyoruz.",
      },
      {
        question: "Splash banyo nedir?",
        answer:
          "Pasta sonrası bebeğin temiz olmak için küvete/leğene koyulduğu, su sıçratmalı eğlenceli bir banyo seansı. Stüdyomuzda hazır küvet ve sıcak su mevcuttur.",
      },
      {
        question: "Kıyafet getirmeli miyiz?",
        answer:
          "Bebeğin pasta için 'pis olabilecek' bir kıyafeti gerekiyor — biz 'just diaper' (sadece bebek bezi) veya tema kıyafeti öneriyoruz. Önceden 1 yedek kıyafet de getirin (banyo sonrası giysi).",
      },
      {
        question: "Çekim sırasında bebek ağlarsa ne oluyor?",
        answer:
          "Bebeğin keyfine göre tempolu hareket ediyoruz; gerekirse mola veriyoruz. Çoğu bebek pastayı görünce hemen ilgileniyor; ağlama nadirdir.",
      },
      {
        question: "Aile pozları dahil mi?",
        answer:
          "Klasik ve Premium paketlerde 15-20 dakika aile pozları standarttır. Sade pakette ek ücretle eklenebilir.",
      },
    ],
    relatedServices: ["bebek-fotografcisi", "aylik-bebek-cekimi", "dogum-gunu-fotografcisi", "aile-fotografcisi"],
    galleryCategory: "bebek",
    metaTitle: "Gebze 1 Yaş Pasta Patlatma | Cake Smash Çekimi",
    metaDescription:
      "Gebze 1 yaş pasta patlatma çekimi. Tema pasta, balon dekor, splash banyo, aile pozları. Stüdyoda 3 aşamalı seans. 0539 633 03 58",
  },

  {
    slug: "dogum-fotografcisi",
    name: "Doğum Fotoğrafçısı",
    category: "bebek-aile",
    primaryKeyword: "doğum fotoğrafçısı",
    secondaryKeywords: [
      "Gebze doğum fotoğrafçısı",
      "doğum anı çekimi",
      "fresh 48 çekimi",
      "doğum hastane çekimi",
      "birth photography",
    ],
    shortDescription:
      "Doğumun kendisi ya da doğum sonrası ilk 48 saatte hastanedeki en duygusal anları belgeleyen profesyonel çekim.",
    longDescription: `Doğum fotoğrafçılığı, hayatınızdaki en güçlü duygusal anı — bir bebeğin dünyaya gelişini — belgeleyen son derece özel bir hizmettir. Akse Fotoğrafçılık olarak doğum çekimini iki şekilde sunuyoruz: 'Fresh 48' (doğum sonrası ilk 48 saat hastane çekimi) ve 'Doğum Anı' (sezaryen sonrası anne-bebek buluşması veya normal doğum sürecinin etik sınırlar içinde belgelenmesi).

Fresh 48 çekimi en çok tercih edilen seçenektir. Doğumdan sonraki ilk 48 saat içinde hastane odasına geliyor, anne-bebek-baba arasındaki ilk dokunuşları, ilk emzirme deneyimini, kardeşin bebekle buluşmasını ve doğum sonrası yorgunluk-mutluluk karışımı yüz ifadelerini doğal halinde yakalıyoruz. Çekim 1-2 saat sürer ve gizliliğe önem verilir.

Doğum anı çekimi daha hassastır; sadece çiftin onayıyla, doktor ve doğumhane personelinin müsadesiyle gerçekleştirilebilir. Etik sınırlar dahilinde, mahremiyeti koruyacak açılar tercih edilir. Çoğu çift sezaryen sonrası 'anne ile bebeğin ilk buluşması' anını çekmemizi tercih ediyor.

Edit teslim süremiz 10 gündür. Bu çekim ile yenidoğan stüdyo çekimini birlikte alanlara önemli paket indirimi uygulanır.`,
    features: [
      "Hastane odası çekimi (Fresh 48)",
      "Doğum anı (özel onay ile)",
      "Sessiz çekim (bell sound off)",
      "Aile-bebek ilk dokunuş kareleri",
      "Hastane personeli ile koordinasyon",
      "Mahremiyete azami özen",
      "10 günde edit teslim",
      "Yedek ekipman",
    ],
    packages: [
      {
        name: "Fresh 48",
        priceRange: "₺4.000 - ₺6.000",
        description: "Hastane odası, 1 saat",
        includes: [
          "1 saat hastane çekimi",
          "60+ edit fotoğraf",
          "Anne-bebek-baba kareleri",
          "Online galeri",
          "Dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Genişletilmiş",
        priceRange: "₺7.000 - ₺10.000",
        description: "Hastane + eve dönüş çekimi",
        includes: [
          "1 saat hastane çekimi",
          "1 saat eve dönüş kapsamı",
          "100+ edit fotoğraf",
          "Kardeş-bebek buluşması",
          "USB + dijital teslim",
        ],
      },
      {
        name: "Doğum Anı",
        priceRange: "₺12.000 - ₺18.000",
        description: "Doğum süreci + ilk 48 saat",
        includes: [
          "Doğum süreci (etik sınırlarda)",
          "İlk 48 saat hastane",
          "150+ edit fotoğraf",
          "1 dk 'doğum hikayesi' klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Doğum anı çekimi etik mi?",
        answer:
          "Sadece çiftin yazılı onayı + doktor müsadesi ile yapılır. Mahremiyeti korumak için açıların seçimine azami özen gösterilir. Genel sahne kareleri tercih edilir; tıbbi detaylar belgelenmez.",
      },
      {
        question: "Hastane fotoğrafçıya izin veriyor mu?",
        answer:
          "Türkiye'de doğum hastanelerinin çoğu Fresh 48 çekimine izin verir. Doğum anı çekimi için önceden hastane yönetimine bilgi vermek ve yazılı onay almak gerekir. Sürecin yönetimini birlikte yapıyoruz.",
      },
      {
        question: "Sezaryen sonrası çekim olur mu?",
        answer:
          "Tabi — sezaryen sonrası ameliyathaneden çıkışta veya odada ilk anne-bebek buluşması en çok tercih edilen sahnelerden. Anne yorgun olabilir; çekim hızlı ve sade tutulur.",
      },
      {
        question: "Bebek ağlarsa fotoğraf çıkar mı?",
        answer:
          "Çıkar — bebeğin ilk ağlaması doğum hikayesinin en güçlü anlarından biridir. Hatta bazı çiftler bunu istemekte; doğal halini belgeliyoruz.",
      },
      {
        question: "Kardeş bebekle buluşma nasıl çekilir?",
        answer:
          "Genişletilmiş ve Doğum Anı paketlerinde 'kardeş ilk buluşma' anı standartken Fresh 48'de opsiyonel. Kardeş hastaneye geldiğinde veya bebek eve geldiğinde planlıyoruz.",
      },
      {
        question: "Yenidoğan stüdyo çekimi ile birlikte alınca avantaj var mı?",
        answer:
          "Evet — 'Doğum + Yenidoğan' kombo paketinde belirli oranda indirim uygulanır. Aynı fotoğrafçı her iki çekimde de bulunur, görsel tutarlılık sağlanır.",
      },
    ],
    relatedServices: ["yenidogan-cekimi", "bebek-fotografcisi", "hamile-fotograf-cekimi", "aile-fotografcisi"],
    galleryCategory: "dogum",
    metaTitle: "Gebze Doğum Fotoğrafçısı | Hastane Doğum Anı ve Fresh 48",
    metaDescription:
      "Gebze doğum fotoğrafçısı. Fresh 48 hastane çekimi, doğum anı (etik onayla), eve dönüş kapsamı. Mahremiyet öncelikli. 0539 633 03 58",
  },

  {
    slug: "hamile-fotograf-cekimi",
    name: "Hamile Fotoğraf Çekimi",
    category: "bebek-aile",
    primaryKeyword: "hamile fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze hamile fotoğrafçısı",
      "maternity photography",
      "hamilelik dış çekimi",
      "doğum öncesi çekim",
      "Darıca hamile çekimi",
    ],
    shortDescription:
      "Hamileliğinizin en güzel haftalarında, doğa veya stüdyoda sanatsal anne adayı portreleri.",
    longDescription: `Hamile çekimi, anne adayının yaşadığı en güçlü ve değerli dönemi belgeleyen sanatsal bir portre seansıdır. Akse Fotoğrafçılık olarak hamile çekimini 28-34. haftalar arasında, bebek karnı belirgin ama hareket konforlu bir dönemde planlamayı öneriyoruz.

Çekim için iki ana seçenek sunuyoruz: stüdyo (kontrollü ışık, profesyonel kostüm/aksesuar) ve dış çekim (Bayramoğlu sahili, Eskihisar, kırsal alan). Stüdyoda anne adayı için romantik tüllü kostümler, çiçek taçları, kalp simgeli ışık dekorları kullanıyoruz. Dış çekimde altın saat ışığı, doğal manzara ve eşin/büyük çocuğun katılımıyla aile aile tarzı kareler alıyoruz.

Eşin katılımı önerilir; el ele karın detay, sarılma ve ortak gülümseme kareleri çekimin en etkili anlarındandır. Büyük kardeş varsa bebekle 'tanışma' temalı pozlar ekleniyor. Kıyafet için stüdyomuzda 5-10 farklı tüllü kostüm bulunmaktadır; özel bir kıyafetiniz varsa onu da kullanabiliriz.

Edit teslim süremiz 10-14 gündür. Hamile + yenidoğan + aylık bebek paketini birlikte alan aileler için 'Anne Olma Hikayesi' albümü hazırlıyoruz; bu üç dönem (hamilelik, doğum, ilk yıl) tek bir kitapta birleşir.`,
    features: [
      "28-34. hafta ideal çekim dönemi",
      "Stüdyo veya dış çekim opsiyonu",
      "Tüllü kostüm + çiçek taç koleksiyonu",
      "Eş + büyük kardeş katılımı",
      "Altın saat dış çekim",
      "Romantik konsept yönlendirme",
      "10-14 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Stüdyo Sade",
        priceRange: "₺3.000 - ₺4.500",
        description: "Stüdyo, 1 saat",
        includes: ["1 saat seans", "40+ edit fotoğraf", "2 kostüm değişimi", "Dijital teslim"],
      },
      {
        name: "Stüdyo + Dış Çekim",
        priceRange: "₺5.000 - ₺8.000",
        description: "Stüdyo + sahil/dış mekan",
        includes: [
          "Stüdyo (1 sa) + dış çekim (1.5 sa)",
          "80+ edit fotoğraf",
          "Eş + kardeş kareleri",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Premium",
        priceRange: "₺9.000 - ₺13.000",
        description: "Çoklu mekan + drone + albüm",
        includes: [
          "Yarım gün kapsam (4 saat)",
          "120+ edit fotoğraf",
          "2 dış mekan + stüdyo",
          "Drone hava çekimi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Hangi haftada çekim ideal?",
        answer:
          "28-34. hafta ideal süredir. Bu dönemde bebek karnı belirgin ama anne adayı hareket konforunu kaybetmemiş olur. 35. haftadan sonra yorgunluk artar; daha erken haftada karın yeterince belirgin olmayabilir.",
      },
      {
        question: "Eşim ve büyük çocuğum da katılabilir mi?",
        answer:
          "Tabi — hatta öneriyoruz. Eşin karın detay sahneleri ve büyük kardeşin bebekle 'tanışma' temalı kareler çekimin en duygusal anlarındandır.",
      },
      {
        question: "Tüllü kostümler dahil mi yoksa biz mi getiriyoruz?",
        answer:
          "Stüdyomuzda 5-10 farklı renk ve stilde tüllü kostüm + çiçek taç koleksiyonu var, dahildir. Kendi özel kıyafetinizi de getirebilirsiniz; pastel ton ve dökümlü kumaşlar fotoğrafta en iyi sonucu verir.",
      },
      {
        question: "Dış çekim için en iyi mekanlar nereler?",
        answer:
          "Bayramoğlu Sahili (deniz manzaralı altın saat), Eskihisar Antik Limanı (tarihi atmosfer), Çayırova kırsalı (yeşil çayır + ağaçlar), Pelitli orman yolları. Sizin hatıralı bir mekanınız varsa o da kullanılabilir.",
      },
      {
        question: "Stüdyoda mı dış çekimde mi daha iyi?",
        answer:
          "Stüdyo daha kontrollü, ışık ve dekor kesin. Dış çekim daha doğal ve geniş atmosfer sunar. İdeali ikisini birleştirmek — Klasik paketimiz tam olarak bunu sunuyor.",
      },
      {
        question: "Hamile + yenidoğan + bebek paketi var mı?",
        answer:
          "Evet — 'Anne Olma Hikayesi' kombo paketimiz hamilelik (28-34. hafta), yenidoğan (5-15 günlük), aylık bebek çekimi ve cake smash'i tek pakette birleştirir. Belirli oranda indirim ve özel albüm dahildir.",
      },
    ],
    relatedServices: ["yenidogan-cekimi", "dogum-fotografcisi", "bebek-fotografcisi", "aile-fotografcisi"],
    galleryCategory: "hamile",
    metaTitle: "Gebze Hamile Fotoğraf Çekimi | Maternity Çekim",
    metaDescription:
      "Gebze hamile fotoğrafçısı. Stüdyo + Bayramoğlu/Eskihisar dış çekim. Tüllü kostümler, eş ve büyük kardeş kareleri. 0539 633 03 58",
  },

  {
    slug: "cocuk-fotograf-cekimi",
    name: "Çocuk Fotoğraf Çekimi",
    category: "bebek-aile",
    primaryKeyword: "çocuk fotoğraf çekimi",
    secondaryKeywords: [
      "Gebze çocuk fotoğrafçısı",
      "çocuk portre çekimi",
      "okul öncesi çekim",
      "stüdyo çocuk çekimi",
      "Darıca çocuk fotoğraf",
    ],
    shortDescription:
      "1-12 yaş arası çocuklar için doğal, eğlenceli ve sabırlı yaklaşımla portre ve dış çekim.",
    longDescription: `Çocuk çekimi, sabır, oyun anlayışı ve doğal yaklaşım gerektiren bir uzmanlık alanıdır. Akse Fotoğrafçılık olarak 1-12 yaş çocuklarla çekim deneyimimiz çoktur; çocuğun yaşına göre yaklaşımı uyarlıyoruz.

1-3 yaş çocuklarda oyuncak ve şarkıyla dikkat dağıtarak doğal gülümseme yakalıyoruz; uzun süre poz vermeleri beklenmez. 4-7 yaş arası çocuklar 'tema' fikrini sever — superhero, prenses, hayvan kostümleri eğlenceli oluyor. 8-12 yaş çocuklar için kişisel marka portreler (sosyal medya, okul yıllığı) profesyonel düzeyde çekiliyor.

Stüdyo çekimi, kontrollü ışık ve farklı renkli arka plan seçenekleri sunar. Dış çekim ise doğal ortamda daha rahat poz veren çocuklar için tercih edilir; Bayramoğlu Sahili (uçurtma), Çayırova kırsalı (papatya), Pelitli orman (sonbahar yapraklar) sezona göre değişen mekanlardır. Çekim 1-1.5 saatlik bir seansdır; çocuğun keyfine göre tempo ayarlanır.

Edit teslim süremiz 10 gündür. Aylık paket isteyen ailelere yıl içinde 4 mevsim çekim paketi sunuyoruz; ilkbahar/yaz/sonbahar/kış teması farklı mekanlarda çekim yapıyoruz.`,
    features: [
      "1-12 yaş için yaşa özel yaklaşım",
      "Tema kostüm seçenekleri",
      "Stüdyo + dış çekim opsiyonu",
      "Mevsimlik dış çekim mekanları",
      "Oyun + şarkı ile dikkat dağıtma",
      "Sabırlı, çocuk dostu çekim",
      "10 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Stüdyo",
        priceRange: "₺2.000 - ₺3.000",
        description: "1 saat stüdyo seansı",
        includes: ["1 saat seans", "30+ edit fotoğraf", "2 tema/kıyafet", "Dijital teslim"],
      },
      {
        name: "Klasik",
        priceRange: "₺3.500 - ₺5.000",
        description: "Stüdyo veya dış çekim",
        includes: [
          "1.5 saat seans",
          "50+ edit fotoğraf",
          "Mekan tercih (stüdyo/dış)",
          "Kardeş pozları dahil",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Mevsim Paketi",
        priceRange: "₺10.000 - ₺14.000",
        description: "Yıl içinde 4 mevsim çekim",
        includes: [
          "4 seans × 1.5 saat",
          "Toplam 150+ edit fotoğraf",
          "Mevsim teması farklı mekan",
          "Yıl sonu mini albüm",
          "USB + dijital teslim",
        ],
      },
    ],
    faqs: [
      {
        question: "Çocuk poz vermek istemezse ne yapıyorsunuz?",
        answer:
          "Asla zorlamıyoruz. Oyuncak, şarkı, balon ve hareketli oyunlar ile dikkati çekiyoruz. 10-15 dakika içinde çoğu çocuk rahatlar. Bu yüzden çekim süresi esnektir; çocuğun keyfine göre uzar/kısalır.",
      },
      {
        question: "Tema/kostüm sizin tarafınızda mı?",
        answer:
          "Stüdyomuzda temel tema kıyafetleri var (prenses tacı, superhero pelerini, hayvan kulakları). Özel bir tema isterseniz kıyafeti siz getirirsiniz; öneri listesi paylaşıyoruz.",
      },
      {
        question: "Kardeş pozları dahil mi?",
        answer:
          "Klasik ve Mevsim paketlerinde standart. Stüdyo pakette ek ücretle eklenebilir. Kardeşler arası etkileşim çekimleri çok popüler oluyor.",
      },
      {
        question: "Hangi yaş için en iyi çekim olur?",
        answer:
          "Her yaşın güzelliği var; 4-7 yaş çocuklar pozlara en yatkın olduğu dönem. 1-3 yaş daha doğal anlar, 8-12 yaş daha 'olgun' portreler verir.",
      },
      {
        question: "Dış çekimde mevsime göre öneri var mı?",
        answer:
          "İlkbahar: Bayramoğlu çiçekli alanlar. Yaz: Çayırova kırsalı papatya tarlaları. Sonbahar: Pelitli orman sarı yapraklar. Kış: stüdyo (kar nadir). Mevsim paketinde 4 mevsim 4 farklı mekan kullanırız.",
      },
      {
        question: "Edit teslim süresi nedir?",
        answer:
          "Standart 10 gündür. Sosyal medya için 5 kareyi 3 gün içinde iletiyoruz.",
      },
    ],
    relatedServices: ["aile-fotografcisi", "bebek-fotografcisi", "dogum-gunu-fotografcisi", "mezuniyet-fotograf-cekimi"],
    galleryCategory: "cocuk",
    metaTitle: "Gebze Çocuk Fotoğraf Çekimi | Stüdyo ve Dış Çekim",
    metaDescription:
      "Gebze çocuk fotoğrafçısı. 1-12 yaş için sabırlı ve eğlenceli çekim. Tema kostüm, kardeş pozları, mevsim paketi. 0539 633 03 58",
  },

  {
    slug: "aile-fotografcisi",
    name: "Aile Fotoğrafçısı",
    category: "bebek-aile",
    primaryKeyword: "aile fotoğrafçısı",
    secondaryKeywords: [
      "Gebze aile fotoğrafçısı",
      "aile portresi",
      "kuşaklar bir arada çekim",
      "geniş aile çekimi",
      "Çayırova aile fotoğraf",
    ],
    shortDescription:
      "Çekirdek aileden geniş kuşaklara, samimi ve tutarlı aile portreleri — yıllar geçtikçe değer kazanır.",
    longDescription: `Aile çekimi, yıllar sonra döndüğünüzde en çok kıymet vereceğiniz hatıralardan biridir. Akse Fotoğrafçılık olarak aile fotoğrafçılığını ciddi bir uzmanlık olarak görüyoruz; çünkü bir karede 4-5 hatta 10-15 kişiyi doğal, mutlu ve tutarlı görünmesini sağlamak teknik+sanatsal bir denge ister.

Çekim için stüdyo (sade arka plan, kontrollü ışık) veya dış çekim (sahil, kırsal, kentsel) seçenekleri var. Geniş aile çekimleri için dış mekan tercih edilir; alan yeterli ve atmosfer doğal. Çekim öncesi kıyafet danışmanlığı sunuyoruz: aile bireylerinin uyumlu (ama identik olmayan) renk paletinde giyinmesi görsel armoni sağlar. Genelde 2-3 ana renk + nötr (beyaz/krem/lacivert) önerilir.

Çekim sırasında geniş grup karelerinin yanı sıra mini gruplar (büyükanne+torunlar, kardeşler, çiftler) ve bireysel portreler de alıyoruz. Çocuklar için oyun molaları planlıyoruz; ailenin stresini fotoğrafa yansıtmamak için sakin ve eğlenceli bir tempo tutuyoruz.

Yıllık aile çekimi geleneği oluşturmak isteyenler için 'Yıllık Aile' paketimiz, her yıl aynı stüdyoda aynı tema ile çekim yaparak kuşaklar boyu kıymetli bir koleksiyon oluşturur. Edit teslim süremiz 10-14 gündür.`,
    features: [
      "Çekirdek aile veya geniş kuşak",
      "Stüdyo + dış çekim seçenek",
      "Kıyafet danışmanlığı",
      "Mini grup + bireysel kareler",
      "Çocuk için oyun molası",
      "Yıllık aile geleneği paketi",
      "10-14 günde edit teslim",
      "USB + dijital teslim",
    ],
    packages: [
      {
        name: "Çekirdek Aile",
        priceRange: "₺2.500 - ₺4.000",
        description: "4-6 kişi, 1 saat",
        includes: ["1 saat seans", "40+ edit fotoğraf", "Stüdyo veya dış çekim", "Dijital teslim"],
      },
      {
        name: "Geniş Aile",
        priceRange: "₺5.000 - ₺7.500",
        description: "10-15 kişi, 1.5 saat",
        includes: [
          "1.5 saat seans",
          "70+ edit fotoğraf",
          "Geniş grup + mini gruplar",
          "Bireysel portreler",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Yıllık Aile",
        priceRange: "₺8.000 - ₺12.000",
        description: "Yıl içinde 2 seans + albüm",
        includes: [
          "2 × 1 saat seans (ilkbahar + sonbahar)",
          "100+ edit fotoğraf",
          "20x20 cm 16 sayfa albüm",
          "Yıllar boyu artan koleksiyon",
        ],
      },
    ],
    faqs: [
      {
        question: "Geniş aile için stüdyo yeterli mi?",
        answer:
          "Stüdyomuz 12-15 kişiye kadar rahat çekim için uygundur. 15+ kişi için dış çekim öneriyoruz; geniş alan, doğal ışık ve atmosfer tüm bireylerin rahat olmasını sağlar.",
      },
      {
        question: "Kıyafet uyumu konusunda öneriniz var mı?",
        answer:
          "2-3 ana renk paleti seçin (örn: beyaz + lacivert + bej). Aile bireyleri bu paletten farklı parçalarla giyinir; identik olmayan ama uyumlu kareler ortaya çıkar. Ön görüşmede detaylı liste paylaşıyoruz.",
      },
      {
        question: "Bebek/küçük çocuk varsa süreç nasıl?",
        answer:
          "Çekim akışını çocuğun keyfine göre düzenliyoruz. Önce sabırsız küçükleri çekiyoruz, sonra büyükleri. Oyun molaları planlanır.",
      },
      {
        question: "Yıllık aile geleneği paketi ne içeriyor?",
        answer:
          "Her yıl 2 seans (ilkbahar + sonbahar) ve yıllık albüm sayfaları. Yıllar boyunca biriken albüm, ailenin görsel hikayesi olur. Yıl başında abonelik benzeri ödeme planı yapılır.",
      },
      {
        question: "Geniş aile için kıyafet uyumu zor değil mi?",
        answer:
          "Tabi ki zor olabilir. Bunun için 'tema yerine palet' yaklaşımını öneriyoruz; 3 ana renk seçimi yeterli, kişiler bu renklerden serbestçe giyinir.",
      },
      {
        question: "Aile evcil hayvanı katılabilir mi?",
        answer:
          "Tabi — Pet Fotoğrafçılık deneyimimiz olduğu için kedi/köpeklerin de çekimde olmasını yönetebiliyoruz. Çocuklar gibi oyun molası ihtiyaçları olduğunu unutmuyoruz.",
      },
    ],
    relatedServices: ["cocuk-fotograf-cekimi", "bebek-fotografcisi", "pet-fotografcisi", "mezuniyet-fotograf-cekimi"],
    galleryCategory: "aile",
    metaTitle: "Gebze Aile Fotoğrafçısı | Geniş Aile ve Kuşak Çekimi",
    metaDescription:
      "Gebze aile fotoğrafçısı. Çekirdek + geniş aile çekimi, kıyafet danışmanlığı, yıllık aile paketi. Stüdyo veya dış çekim. 0539 633 03 58",
  },

  {
    slug: "dogum-gunu-fotografcisi",
    name: "Doğum Günü Fotoğrafçısı",
    category: "bebek-aile",
    primaryKeyword: "doğum günü fotoğrafçısı",
    secondaryKeywords: [
      "Gebze doğum günü çekimi",
      "çocuk parti fotoğrafçısı",
      "yetişkin doğum günü çekimi",
      "tema parti çekimi",
      "doğum günü video",
    ],
    shortDescription:
      "Çocuk veya yetişkin doğum günü partilerinizde tema, hediyeleşme, kek kesme ve neşeli kareleri eksiksiz belgeliyoruz.",
    longDescription: `Doğum günü çekimi, hayatın en mutlu kutlamalarından biri olan doğum gününüzü sanatla belgeleyen hizmettir. Akse Fotoğrafçılık olarak çocuk doğum günü partileri, yetişkin sürpriz kutlamaları ve aile yemekleri olmak üzere üç ana çekim türü sunuyoruz.

Çocuk parti çekiminde balonlu dekor, tema kostümler, oyun aktiviteleri, hediyeleşme, kek kesme ve mum üfleme anları belgeleniyor. Çocukları doğal halinde görüntülemek için müdahale etmiyoruz; hızlı reflekslerle mutluluk anlarını yakalıyoruz. Yetişkin doğum günü çekiminde davetlilerle samimi konuşma, sürpriz girişi, pasta kesme ve dans kareleri öne çıkar.

Mekan esnektir — ev, restoran, kafe, parti salonu olabilir. Önceden mekan keşfi yaparak ışık planı çıkarıyoruz; salon ışığı düşükse profesyonel ek ışık ekipmanı kullanıyoruz. Çekim 2-3 saatlik bir kapsamı içerir; standart paket bu sürede 200-300 edit fotoğraf üretir.

Edit teslim süremiz 7 gündür; sosyal medya için 5-10 kareyi 24 saat içinde iletiyoruz. Tema parti çekimleri için (denizci, prenses, jungle vb.) önceden dekor önerileri ve kostüm kataloğumuzu paylaşıyoruz.`,
    features: [
      "Çocuk + yetişkin parti uzmanlığı",
      "Tema dekor uyumlu çekim",
      "Hediyeleşme + kek kesme detay",
      "Hızlı refleks ile spontan kareler",
      "Ev, restoran, salon esnek mekan",
      "Profesyonel ek ışık ekipmanı",
      "7 günde edit teslim",
      "5-10 kare 24 saat hızlı paylaşım",
    ],
    packages: [
      {
        name: "Mini Parti",
        priceRange: "₺2.500 - ₺3.500",
        description: "1.5 saat, 1 fotoğrafçı",
        includes: [
          "1.5 saat kapsam",
          "80+ edit fotoğraf",
          "Online galeri",
          "Dijital teslim",
        ],
      },
      {
        name: "Klasik Parti",
        priceRange: "₺4.000 - ₺6.000",
        description: "3 saat tam kapsam",
        includes: [
          "3 saat kapsam",
          "200+ edit fotoğraf",
          "Mum üfleme + hediye + dans",
          "Aile + arkadaş kareleri",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺7.000 - ₺10.000",
        description: "Foto + video + 1 dk klip",
        includes: [
          "1 fotoğrafçı + 1 videograf",
          "3-4 saat kapsam",
          "250+ edit fotoğraf",
          "1 dk doğum günü klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Çocuk partisinde fotoğrafçıdan ne beklemeliyim?",
        answer:
          "Çocukların doğal halinde belgelenmesi, parti aktivitelerinin (oyun, dans, mum üfleme) tamamı, hediye anları, aile pozları. Çocuklar yorulduğunda mola, ihtiyaç olduğunda hızlı ek ışık.",
      },
      {
        question: "Yetişkin sürpriz partilerinde özel bir yaklaşım var mı?",
        answer:
          "Evet — sürpriz girişin kayda alınması için partiyi koordine eden kişiyle önceden iletişimde oluyoruz. Sürpriz anının yakalanmasını telefoto lensle uzaktan yapıp ses çıkarmadan kayıt ediyoruz.",
      },
      {
        question: "Tema parti dekorasyonu önerebilir misiniz?",
        answer:
          "Evet — yerel parti dekoratörleriyle anlaşmamız var; bütçeye uygun tema önerileri paylaşıyoruz. Önceki çekimlerimizden tema fotoğrafları paylaşarak fikir veriyoruz.",
      },
      {
        question: "Pasta detay çekimi de yapılıyor mu?",
        answer:
          "Tabi — pasta kesim öncesi makro detay kareleri standart. Pastacı + hediye + dekor uyumunu yansıtan 'flat lay' kareler de alıyoruz; bu kareler genelde sosyal medyada en çok beğeni alanlar.",
      },
      {
        question: "Çocuklarda izin gerekiyor mu?",
        answer:
          "Davetli çocukların ailelerinin onayı olmadan kareler dağıtılmaz. Çekim sırasında genel kareler alınır; bireysel çocuk pozları sadece ailenin onayıyla dağıtılır.",
      },
      {
        question: "Klip dahil mi?",
        answer:
          "Hikaye paketinde 1 dakikalık doğum günü klibi standart. Diğer paketlerde foto ağırlıklı; klip ek hizmet olarak eklenebilir.",
      },
    ],
    relatedServices: ["1-yas-pasta-patlatma", "cocuk-fotograf-cekimi", "etkinlik-fotografcisi", "aile-fotografcisi"],
    galleryCategory: "etkinlik",
    metaTitle: "Gebze Doğum Günü Fotoğrafçısı | Çocuk ve Yetişkin Parti Çekimi",
    metaDescription:
      "Gebze doğum günü fotoğrafçısı. Çocuk + yetişkin parti, tema dekor, mum üfleme + hediye + dans. 7 günde teslim. 0539 633 03 58",
  },

  {
    slug: "pet-fotografcisi",
    name: "Pet Fotoğrafçısı",
    category: "bebek-aile",
    primaryKeyword: "pet fotoğrafçısı",
    secondaryKeywords: [
      "Gebze evcil hayvan fotoğrafçısı",
      "köpek çekimi",
      "kedi çekimi",
      "pet portre",
      "hayvan fotoğraf çekimi",
    ],
    shortDescription:
      "Kedi, köpek ve diğer evcil hayvanlar için sabırlı ve sanatkar yaklaşımla portre ve etkileşim çekimleri.",
    longDescription: `Pet fotoğrafçılığı, evcil hayvanın karakterini ve ailesiyle olan bağını yansıtan özel bir uzmanlık alanıdır. Akse Fotoğrafçılık olarak kedi, köpek, kuş ve hatta egzotik hayvanlarla çekim deneyimimiz var. Hayvanın rahat olmasını birinci öncelik kabul ediyor, çekim alanını oyuncak ve güvenli bir ortama dönüştürüyoruz.

Stüdyo çekiminde sade arka plan + yumuşak softbox ışık ile portre alıyor, hayvanın doğal ifadesini yakalıyoruz. Köpek için aktif (yürüyüş, koşu) çekimleri açık alanda — Bayramoğlu sahili, Çayırova çayırları, Pelitli ormanları gibi mekanlarda — yapıyoruz. Kediler için stüdyo daha uygun, ancak ev çekimi de mümkün; çünkü kedi yabancı ortamda gerilebilir.

Pet + sahibi etkileşim kareleri en güzel sonuçları verir; hayvanı sevme, kucağa alma, oyun oynama anlarında doğal bağı belgeliyoruz. Ailelerin pet'iyle birlikte çekildiği aile portreleri özellikle popüler.

Edit teslim süremiz 7-10 gündür. Pet'iniz için yıllık çekim isterseniz 'Pet Aylık' paketimiz var; 4 mevsim 4 ayrı çekim ile yıllık koleksiyon oluşur.`,
    features: [
      "Kedi, köpek, kuş uzmanlığı",
      "Stüdyo veya dış çekim",
      "Sahibi ile etkileşim kareleri",
      "Sabırlı ve hayvan dostu yaklaşım",
      "Oyuncak + ödül ile dikkat çekme",
      "Aile + pet portresi",
      "7-10 günde edit teslim",
      "Online galeri",
    ],
    packages: [
      {
        name: "Stüdyo",
        priceRange: "₺1.500 - ₺2.500",
        description: "30 dk stüdyo seansı",
        includes: ["30 dk seans", "20+ edit fotoğraf", "Sahibi pozları dahil", "Dijital teslim"],
      },
      {
        name: "Klasik",
        priceRange: "₺2.500 - ₺4.000",
        description: "Stüdyo veya dış çekim, 1 saat",
        includes: [
          "1 saat seans",
          "40+ edit fotoğraf",
          "Mekan tercih (stüdyo/dış)",
          "Aile dahil",
          "USB + dijital teslim",
        ],
        popular: true,
      },
      {
        name: "Hikaye",
        priceRange: "₺5.000 - ₺7.500",
        description: "Çoklu mekan + 30 sn klip",
        includes: [
          "2 saat kapsam",
          "70+ edit fotoğraf",
          "30 sn pet klibi",
          "20x20 cm mini albüm",
        ],
      },
    ],
    faqs: [
      {
        question: "Kedim çekim sırasında saklanırsa ne yapacağız?",
        answer:
          "Kediler için ev çekimi tercih edilir; tanıdık ortamda daha rahat olurlar. Saklanırsa yumuşak müzik ve kediotu ile çıkarmasını teşvik ediyoruz. Sabırlı bir yaklaşım sergiliyoruz.",
      },
      {
        question: "Köpeğim çok hareketli, çekim olur mu?",
        answer:
          "Tabi — hatta hareketli köpekler en güzel kareleri verir. Hızlı shutter ile takip ediyoruz. Köpeğin enerji harcaması için önce 10-15 dakika oyun oynatıyor, sonra dingin pozlar alıyoruz.",
      },
      {
        question: "Egzotik hayvan çekimi yapıyor musunuz?",
        answer:
          "Tavşan, kuş, hatta sürüngenlerle deneyimimiz var. Hayvanın stres seviyesini düşürmek için ortamı sade tutuyoruz; uzun çekim süreleri yerine kısa molalar.",
      },
      {
        question: "Birden fazla pet'imiz varsa hepsi birlikte çekilebilir mi?",
        answer:
          "Evet — multi-pet aileler özel ilgi alanımız. Hayvanlar birbirini tanıyorsa birlikte çekilir; tanımıyorsa ayrı ayrı sonra Photoshop'ta composite kompozisyon yapabiliriz.",
      },
      {
        question: "Aile + pet portresi popüler mi?",
        answer:
          "Çok — özellikle yıllık aile çekimi geleneğine pet'in dahil edilmesi hem ailenin hem hayvanın değerli bir hatırası olur.",
      },
      {
        question: "Çekim öncesi pet'i hazırlamak için öneri var mı?",
        answer:
          "Çekim öncesi pet'in beslenmesi (toklığa dikkat), banyosu (1 gün önce ideal), tüy bakımı (köpek için) ve oyuncak getirilmesi önerilir. Ödül atıştırmalıklarınızı getirin; çekim sırasında dikkat çekmede çok faydalıdır.",
      },
    ],
    relatedServices: ["aile-fotografcisi", "cocuk-fotograf-cekimi", "after-wedding", "portre-cekimi"],
    galleryCategory: "pet",
    metaTitle: "Gebze Pet Fotoğrafçısı | Köpek ve Kedi Çekimi",
    metaDescription:
      "Gebze evcil hayvan fotoğrafçısı. Kedi + köpek + kuş portreleri, sahibi ile etkileşim kareleri, stüdyo + dış çekim. Sabırlı yaklaşım. 0539 633 03 58",
  },
];
