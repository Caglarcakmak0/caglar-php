export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "0-dan-1-e-mvp-taslagi-adim-adim-tam-kilavuz",
    title: "0→1 MVP Taslağı: Adım Adım Tam Kılavuz",
    excerpt:
      "30 günde 3 ürün çıkarmak için kullandığım kesin iş akışı. Yazılımcı yok, büyük bütçeler yok. Sadece yapay zeka araçları ve bu sistem.",
    content: `
# 0→1 MVP Taslağı: Adım Adım Tam Kılavuz

## 30 Günde 3 Ürün Çıkarmak İçin Kullandığım Kesin İş Akışı

Bu bir teori değil. Fikirden, yayına alınmış ürüne tam üç kez, bir ay içinde gitmek için harfiyen uyguladığım sistem bu. Yazılımcı yok. 50 bin dolarlık bütçeler yok. Sadece bu iş akışı ve birlikte çalışan yapay zeka araçları var.

Bu kılavuzu kaydedin. Bir şeyler inşa ederken referans alın. İhtiyacı olan girişimci arkadaşlarınıza gönderin.

### Bu Neden İşe Yarıyor?

Çoğu kurucu, kimsenin istemediği özellikleri geliştirmek için 6 ayını çöpe atar. Sonra lansman yaparlar ve koca bir sessizlikle karşılaşırlar.

Bu sistem durumu tersine çevirir. Tek bir satır kod yazmadan **ÖNCE** talebi doğrularsınız. Yapay zeka araçlarını, her birinin belirli bir işi yaptığı bir montaj hattı gibi kullanırsınız. Sonuç? 48 saat içinde işlevsel MVP'ler (Minimum Uygulanabilir Ürün) çıkarır ve hemen gerçek kullanıcı geri bildirimi alırsınız.

İşte tam iş akışı.

---

## AŞAMA 1: DOĞRULAMA & TASLAK

### ADIM 1: Fikrinizi Doğrulayın (Perplexity AI)

Herhangi bir şey inşa etmeden önce, insanların bunu gerçekten istediğini kanıtlayın.

**Araç:** Perplexity AI

**Eylem:**

1. Perplexity'yi açın ve aramayı "Social Media Only" (Sadece Sosyal Medya) olarak değiştirin.
2. Fikriniz hakkındaki tartışmaları doğal bir dille arayın.
3. Şunu sorun: "[Fikrinizi buraya yazın] yapmak istiyorum, insanlar bunu kullanmak ister mi?"
4. Anketlere veya oylamalara değil; Reddit, Twitter ve forumlardaki gerçek konuşmalara bakın.

**Tartışma Tekniği (Bu kritiktir):**

Perplexity'de iki yapay zeka ajanı oluşturun:

* **Ajan 1:** Özelliğinizi SAVUNAN (neden değerli olduğunu tartışan)
* **Ajan 2:** Özelliğinize KARŞI ÇIKAN (neden çalışmayacağını tartışan)

**Prompt (İstem):**

> "İki ajan oluştur. Biri [özelliğin] LEHİNE tartışsın, diğeri ALEYHİNE tartışsın. KARŞIT ajan ikna olana kadar tartışmalarını sağla."

**Altın Değerindeki Çıktı:**

Tartışmadan sonra şunu sorun: *"KARŞIT ajanı ikna etmek için gereken kesin minimum özellikler nelerdir?"*

Bu liste sizin nihai MVP özellik setiniz olur. Fazlası yok. Eksiği yok.

**Neden işe yarar:** Gerçek kullanıcı tartışmalarına erişimi olan şüpheci bir yapay zeka ajanını ikna edemiyorsanız, gerçek kullanıcıları da ikna edemezsiniz. Bu sizi kimsenin istemediği özellikler inşa etmekten kurtarır.

### ADIM 2: PRD'nizi Oluşturun (ChatGPT / Claude / Gemini)

Doğrulanmış özelliklerinizi yapılandırılmış bir taslağa dönüştürün.

**Araç:** ChatGPT, Claude veya Gemini (birini seçin)

**Eylem:**

1. Adım 1'deki minimum özellik listesini alın.
2. Seçtiğiniz LLM'e (Büyük Dil Modeli) besleyin.
3. Ek detayları anlatmak için Ses Modunu (Voice Mode) kullanın:
   * Kullanıcı akışı (birisi uygulamanızda nasıl hareket eder)
   * Tasarım yönü (minimal, cesur, eğlenceli, profesyonel)
   * Belirli davranışlar (bu butona tıkladıklarında ne olur)
   * Uç durumlar (kocaman bir dosya yüklerlerse ne olur)

**Prompt Şablonu:**

> MVP'm için detaylı bir Ürün Gereksinim Belgesi'ne (PRD) ihtiyacım var.
> İşte doğrulanmış özellikler:
> [özellik listenizi yapıştırın]
> İşte ek düşüncelerim:
> [ses modu dökümünü yapıştırın veya beyin fırtınanızı yazın]
> Şunları içeren adım adım bir PRD oluştur:
> * Geliştirme sürecini sırasıyla parçalara ayıran
> * Bir yapay zekanın kodlayabileceği kadar detaylı olan
> * Kullanıcı akışını, teknik gereksinimleri ve tasarım yönünü içeren

**Çıktı:** Tek doğruluk kaynağınız olacak eksiksiz bir PRD belgesi.

**Profesyonel İpucu:** Bu PRD'yi bir Google Dokümanına kaydedin. Sürekli buna başvuracak ve birden fazla yapay zeka aracıyla paylaşacaksınız.

### ADIM 3: Arayüzü (UI) Görselleştirin (Vercel v0)

Fikrinizi inşa etmeye başlamadan önce görün.

**Araç:** Vercel v0

**Eylem:**

1. v0.dev adresine gidin.
2. Adım 2'deki PRD'nizi yükleyin.
3. **Prompt:** "Bu PRD'ye dayanarak bu ürün için UI (kullanıcı arayüzü) oluştur."
4. Kafanızdakiyle eşleşen bir versiyon alana kadar yineleyin (iterate).

**Önemli:** Burada piksel piksel mükemmelliği hedeflemiyorsunuz. Sadece konsepti görselleştirmek ve akışın mantıklı olduğundan emin olmak istiyorsunuz.

**Aradığınız şey:**

* Düzen vizyonunuzla eşleşiyor mu?
* Kullanıcı akışı mantıklı mı?
* Kendinizi bunu kullanırken görebiliyor musunuz?

Oturana kadar farklı promptlarla oynayın. Doğru hissettirdiğinde ekran görüntüleri alın. Bunları bir sonraki aşamada kullanacaksınız.

**Bu adım neden önemli:** Görselleştiremediğiniz bir şeyi inşa etmek, gözü kapalı araba kullanmak gibidir. Bu adım, yolun yarısında fikrinizin aslında çalışmadığını fark etmenizi engeller.

---

## AŞAMA 2: İNŞA (THE BUILD)

### ADIM 4: İlk Kod Üretimi (Google AI Studio)

*Not: İsterseniz bu adımı atlayıp doğrudan Adım 5'e geçebilirsiniz. Bu adım sadece size bir avantaj sağlar.*

**Araç:** Google AI Studio

**Eylem:**

1. Google AI Studio'yu açın.
2. PRD'nizi ve Adım 3'teki UI ekran görüntülerini yükleyin.
3. **Prompt:** "Bu PRD'ye ve bu UI tasarımlarına dayanarak bu uygulamayı inşa et."
4. Kodu iyileştirmek için yapay zeka ile karşılıklı konuşun.
5. Önizlemede işlevselliği test edin.
6. Temel düzeyde çalıştığında, kodu indirin.
7. Bilgisayarınızdaki yerel bir klasöre kaydedin.

**Elde ettiğiniz şey:** İşlevsel bir başlangıç noktası. Mükemmel olmayacak ama sıfırdan başlamak yerine üzerine inşa edebileceğiniz bir şey verir.

### ADIM 5: Ana Geliştirme (Cursor AI)

Sihrin gerçekleştiği yer burası. MVP'nizin gerçeğe dönüştüğü yer.

**Araç:** Cursor AI

**Kurulum:**

1. Cursor'ı açın.
2. Yerel proje klasörünüze gidin (Adım 4'ten gelen veya yeni oluşturduğunuz).
3. Teknoloji yığını (stack) seçin:
   * **Veritabanı:** Supabase (yeni başlayanlar için en kolayı)
   * **Kimlik Doğrulama (Auth):** Clerk (tak-çalıştır auth)

**Geliştirme İş Akışı:**

**Birinci: Elinizdekini Doğrulayın**
PRD'nizi Cursor'a besleyin ve sorun:

> Bu kod tabanını bu PRD'ye karşı incele.
> Tüm MVP özellikleri mevcut ve çalışıyor mu?
> Ne eksik?

**İkinci: Verimlilik için Refactor (Düzenleme)**
**Prompt:**

> Daha iyi mantık ve verimlilik için bu kodu refactor et (yeniden düzenle).
> Temiz, sürdürülebilir ve ölçeklenebilir olmasına odaklan.

Zaman harcayacağınız yer burası. Acele etmeyin. Burada sağlam bir temel, daha sonra saatlerce hata ayıklamaktan (debugging) kurtarır.

**Üçüncü: Sürekli Commit Atın**
Her anlamlı ilerleme kaydettiğinizde GitHub'a commit atın:

\`\`\`bash
git add .
git commit -m "Kullanıcı kimlik doğrulaması eklendi"
git push
\`\`\`

Bu sizin sigorta poliçenizdir. Bir şeyler bozulduğunda (ki bozulacaktır), geri alabilirsiniz.

**Model Stratejisi (Kritik):**
Her şey için tek bir yapay zeka modeli kullanmayın. Göreve göre geçiş yapın:

* **Mantık ve kodlama için:** **Claude Opus 4.5**
  * *Kullanım yeri:* Fonksiyon yazma, veritabanı sorguları, API entegrasyonu, iş mantığı.

* **Tasarım ve UI için:** **Gemini 3.0**
  * *Kullanım yeri:* Bileşenleri stillendirme, düzen düzeltmeleri, responsive (duyarlı) tasarım, görsel cila.

Cursor'da ayarlardan modeller arasında geçiş yapabilirsiniz. Bunu stratejik kullanın.

**Sorun Giderme (Troubleshooting):**

*Supabase kurulumunda mı takıldınız? Prompt:*

> Bu proje için Supabase'i yapılandırmam gerekiyor.
> Kurulumu bana adım adım anlat.
> Şunları dahil et: veritabanı oluşturma, tablo şeması ve uygulamama bağlama.

*Clerk auth'da mı takıldınız? Prompt:*

> Clerk kimlik doğrulamasını uygulamam gerekiyor.
> Beni yönlendir: kurulum, yapılandırma, rotaları koruma, kullanıcı verilerini alma.

Yapay zeka size kelimenin tam anlamıyla her türlü kurulumda rehberlik edebilir. Takılıp kalmayın. Sadece sorun.

**İyi bir sonuç neye benzer:**
Bu adımın sonunda şunlara sahip olmalısınız:

* Çalışan tüm MVP özellikleri
* Temiz, verimli kod
* Bağlanmış veritabanı
* Çalışan kimlik doğrulama
* GitHub'a kaydedilmiş çoklu commit'ler

---

## AŞAMA 3: CİLALAMA & GÖNDERİM (POLISH & SHIP)

### ADIM 6: Tasarım & Duyarlılık (Responsiveness)

Prototip gibi değil, gerçek bir ürün gibi görünmesini sağlayın.

**Eylem:**

**Tasarımı Düzeltin:**

* Fikrinizin havasına uyuyor mu?
* Sıradan "mor gradyanlı SaaS çamuru"ndan kaçının.
* Öğelerin düzgün hizalandığını kontrol edin.
* Renklerin varsayılan değil, kasıtlı olduğundan emin olun.
* Tipografi okunabilir ve markaya uygun olmalı.

**Cursor için Prompt (Gemini 3.0 kullanarak):**

> Bu tasarımı incele. [İstediğiniz estetiği tarif edin] ile eşleşmesini sağla.
> Hizalama sorunlarını düzelt. Renk şemasını iyileştir. Cilalanmış hissettirmesini sağla.

**Duyarlılığı (Responsiveness) Düzeltin:**
Hem mobilde hem masaüstünde test edin. Bu pazarlığa kapalıdır.

**Prompt:**

> Bu uygulamayı tamamen responsive (duyarlı) hale getir.
> Şunlar için düzenleri test et ve düzelt:
> * Mobil (375px genişlik)
> * Tablet (768px genişlik)
> * Masaüstü (1440px genişlik)

Sonra gerçekten test edin. Tarayıcınızda geliştirici araçlarını (dev tools) açın, cihaz boyutlarını değiştirin ve her ekranı kontrol edin.

**Güvenlik Kontrolü:**
Commit atmadan önce, yanlışlıkla API anahtarlarını veya sırları (secrets) commit etmediğinizden emin olun:

\`\`\`bash
git status
\`\`\`

Neyin commit edildiğini inceleyin. Eğer \`.env\` dosyaları veya adında "secret" ya da "key" geçen bir şey görürseniz, bunları \`.gitignore\`'a ekleyin:

\`\`\`bash
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m ".gitignore gizli dosyalar için eklendi"
\`\`\`

### ADIM 7: Güvenlik & Açık Denetimi

Kullanıcılardan önce sorunları bulup düzeltin.

**Eylem:**

**Cursor için Prompt:**

> Bu tüm kod tabanını şunlar için tara:
> * Güvenlik açıkları
> * Olası hatalar (bugs)
> * Mantık hataları
> * Performans sorunları
> 
> Bulduğun her şeyin ciddiyet derecesine göre sıralanmış bir listesini ver.

Listeyi inceleyin. Önce kritik maddeleri düzeltin, sonra orta ve düşük öncelikli sorunlara geçin.

Düzeltmelerden sonra prompt:

> Kod tabanını tekrar tara.
> Tüm kritik ve yüksek öncelikli sorunların çözüldüğünü doğrula.

Temizlendikten sonra, son commit işleminizi yapın:

\`\`\`bash
git add .
git commit -m "Güvenlik denetimi tamamlandı - dağıtım için hazır"
git push
\`\`\`

### ADIM 8: Dağıtım (Deployment)

Uygulamanızı canlıya alın ve dünyanın erişimine açın.

**Platformlar:** Netlify, Vercel veya Replit (birini seçin)

**Neden bu platformlar:**

* Ücretsiz paketleri var
* Kolay GitHub entegrasyonu
* Otomatik dağıtımlar
* Yerleşik SSL sertifikaları

**Dağıtım Adımları:**

**Seçenek 1: Vercel (Next.js/React için önerilir)**

1. vercel.com'a gidin
2. GitHub ile giriş yapın
3. "New Project"e tıklayın
4. GitHub deponuzu (repository) seçin
5. Vercel framework'ü otomatik algılar
6. "Deploy"a tıklayın

**Seçenek 2: Netlify (Statik siteler için harika)**

1. netlify.com'a gidin
2. GitHub ile giriş yapın
3. "Add new site" → "Import an existing project"e tıklayın
4. GitHub deponuzu seçin
5. Build ayarlarını yapılandırın (genellikle otomatik algılanır)
6. "Deploy site"a tıklayın

**Seçenek 3: Replit (Hızlı dağıtımlar için iyi)**

1. replit.com'a gidin
2. "Create Repl"e tıklayın
3. GitHub'dan içe aktarın (Import from GitHub)
4. Deponuzu seçin
5. "Run"a tıklayın

**KRİTİK: Ortam Değişkenleri (Environment Variables)**
Uygulamanız bu adım olmadan çalışmaz.

1. Yerel \`.env\` dosyanızı bulun (commit etmediğiniz dosya).
2. Tüm API anahtarlarını ve sırları kopyalayın.
3. Dağıtım platformunuzun ayarlarına gidin.
4. "Environment Variables" bölümünü bulun.
5. Her anahtar-değer çiftini ekleyin:
   * \`SUPABASE_URL = [url adresiniz]\`
   * \`SUPABASE_ANON_KEY = [anahtarınız]\`
   * \`CLERK_PUBLISHABLE_KEY = [anahtarınız]\`
   * \`CLERK_SECRET_KEY = [anahtarınız]\`
   * (ve kullandığınız diğerleri)
6. Kaydedin ve yeniden dağıtın (redeploy).

**Bu neden önemli:** Canlı uygulamanızın veritabanınıza ve auth sisteminize bağlanmak için bu sırlara ihtiyacı vardır, ancak bunları herkese açık GitHub deponuza koyamazsınız. Ortam değişkenleri, bunları güvende tutarken dağıtılmış uygulamanızın kullanımına sunmanızı sağlar.

### ADIM 9: Gönder Gitsin (Ship It)

MVP'niz yayında. Şimdi ne olacak?

**Eylem:**

1. **Canlı versiyonu iyice test edin:**
   * Kayıt olma akışı
   * Ana özellikler
   * Mobil uyumluluk
   * Tüm butonlar (CTA) ve linkler

2. **Paylaşın:**
   * Twitter/X'te #BuildInPublic etiketiyle paylaşın
   * İlgili topluluklarda paylaşın (Reddit, Discord, Slack grupları)
   * Dürüst geri bildirim için arkadaşlarınıza gönderin
   * Product Hunt'ta paylaşın (eğer hazırsanız)

3. **Temel analitikleri kurun:**
   * Google Analytics (ücretsiz)
   * Veya Vercel Analytics (yerleşik)
   * Veya Plausible (gizlilik odaklı)

4. **Basit bir geri bildirim mekanizması oluşturun:**
   * Uygulamaya gömülü Typeform
   * Veya Discord/Telegram topluluğu
   * Veya sadece footer'da (alt bilgi) bir e-posta adresi

**Zihniyet Değişimi:**
Az önce bir MVP yayınladınız. Mükemmel değil. Amaç da bu zaten.
Gerçek kullanıcılar size neyi düzelteceğinizi, neyi ekleyeceğinizi ve neyi kaldıracağınızı söyleyecek. Hiçbir planlama miktarı, gerçek geri bildirimin yerini tutamaz.

---

### Araç Özeti

İşte bu kılavuzda bahsedilen her araç ve ne işe yaradığı:

**Doğrulama:**
* **Perplexity AI:** Fikriniz hakkındaki gerçek tartışmaları sosyal medyada arar.

**Planlama:**
* **ChatGPT / Claude / Gemini:** PRD'nizi oluşturur ve beyin fırtınasına yardımcı olur.
* **Vercel v0:** PRD'nizden UI önizlemeleri oluşturur.

**İnşa Etme:**
* **Google AI Studio:** İlk kodu oluşturur.
* **Cursor AI:** Yapay zeka destekli ana kodlama ortamınız.
* **Claude Opus 4.5:** Mantık ve kodlama görevleri için en iyisi.
* **Gemini 3.0:** Tasarım ve UI görevleri için en iyisi.

**Altyapı:**
* **Supabase:** Veritabanı (Kolay API'li PostgreSQL).
* **Clerk:** Kimlik doğrulama ve kullanıcı yönetimi.
* **GitHub:** Sürüm kontrolü ve kod depolama.

**Dağıtım:**
* **Vercel:** Barındırma platformu (Next.js/React için en iyisi).
* **Netlify:** Barındırma platformu (statik siteler için harika).
* **Replit:** Hızlı dağıtım platformu.

---

### Kaçınılması Gereken Yaygın Hatalar

* **Hata 1: Doğrulamayı atlamak.**
  Kimsenin istemediği bir şeyi inşa etmeyin. Her zaman Adım 1 ile başlayın.

* **Hata 2: Çok fazla özellik inşa etmek.**
  MVP'niz utandırıcı derecede basit olmalı. Eğer KARŞIT ajan ikna olmadıysa, o özellik içeri girmez.

* **Hata 3: GitHub'a commit atmamak.**
  Her anlamlı değişiklikten sonra commit atın. Gelecekteki siz, geçmişteki size teşekkür edecek.

* **Hata 4: Her şey için tek bir yapay zeka modeli kullanmak.**
  Mantık için Claude. Tasarım için Gemini. Tek bir modelin her şeyi yapmasını beklemeyin.

* **Hata 5: Test etmeden dağıtmak.**
  Herkese açık paylaşmadan önce canlı uygulamanızı iyice test edin. Bozuk demolar güveni öldürür.

* **Hata 6: API anahtarlarını commit etmek.**
  Sırlar için her zaman \`.gitignore\` kullanın. Canlı ortamda (production) her zaman ortam değişkenlerini kullanın.

* **Hata 7: Mükemmeli beklemek.**
  Mükemmel olduğunda değil, çalıştığında gönderin. Kullanıcılar size neyin düzeltilmesi gerektiğini söyleyecektir.

---

### Gönderdikten Sonra Ne Yapmalı

* **1. Hafta: Gözlemle**
  * İnsanların ürününüzü nasıl kullandığını izleyin.
  * Her geri bildirimi okuyun.
  * Seçimlerinizi savunmayın, sadece dinleyin.

* **2. Hafta: Önceliklendir**
  * En yaygın şikayetlerin listesini yapın.
  * En büyük sürtünme noktalarını belirleyin.
  * İlk neyi düzelteceğinize karar verin.

* **3. Hafta: Yinele (Iterate)**
  * Kritik hataları düzeltin.
  * En çok istenen özelliği ekleyin.
  * En büyük acı noktasını iyileştirin.

* **4. Hafta: İlerlemeyi Paylaş**
  * Sosyal medyada güncellemeleri paylaşın.
  * Yineleme sürecinizi gösterin.
  * "Build in public" (halka açık inşa et) yapın, insanlar yolculuğu sever.

Sonra bu döngüyü tekrarla. Gönder, gözlemle, önceliklendir, yinele, paylaş.

---

### Son Düşünceler

Bu sistem işe yarıyor çünkü kurucuların karşılaştığı en büyük iki engeli ortadan kaldırıyor:

1. "Bunu kimsenin isteyip istemediğini bilmiyorum" - **İnşa etmeden önce doğruluyorsunuz.**
2. "Kod yazmayı bilmiyorum" - **Teknik işi yapay zeka araçları hallediyor.**

Bir sonraki "Unicorn"u inşa etmeye çalışmıyorsunuz. Fikrinizi doğrulayan ve size gerçek kullanıcı geri bildirimi sağlayan işlevsel bir şey inşa etmeye çalışıyorsunuz.

Mükemmel ürün diye bir şey yoktur. Yayına alınmış ürünler yinelemeyle (iteration) daha iyi hale gelir.

Fikriniz canlıya geçene kadar hiçbir değeri yoktur. Bu iş akışı sizi 48 saatte canlıya geçirir.

Planlamayı bırakın. Göndermeye başlayın.

**Bu Kılavuzu Kaydedin**

Bu sayfayı yer imlerine ekleyin. Notlarınıza kaydedin. İhtiyacı olan girişimci arkadaşlarınızla paylaşın.

Bu sistemi kullanarak MVP'nizi yayınladığınızda, beni etiketleyin ve ne inşa ettiğinizi paylaşın. Görmek istiyorum.

Şimdi gidin ve bir şeyler inşa edin.

Sorularınız mı var? Bir adımda takıldınız mı?
Aşağıya bir yorum bırakın veya DM atın. Takıldığınız yerden kurtulmanıza yardım edeceğim.

Bunun işe yaramamasının tek yolu, başlamamanızdır.

**Bugün başlayın.**
    `,
    featuredImage: "/blog/mvp-blueprint-cover.png",
    date: "2024-12-26",
    readTime: "25",
    tags: ["MVP", "Girişimcilik", "Yapay Zeka", "Startup", "Ürün Geliştirme"],
    author: {
      name: "Çağlar Çakmak",
      avatar: "/profile.jpg",
    },
  },
];

// Helper function to get a single post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all blog slugs (for static generation)
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
