import {
  CHAPTERS,
  CIRCULAR_PHASES,
  OCEAN_CORRIDORS,
  WASTE_STREAMS,
} from '../../data/ecosystemData';
import type { TranslationDictionary } from '../types';

export const tr: TranslationDictionary = {
  meta: {
    pageTitle: 'Zero Waste Global (ZWG) — Sıfır Atık Kripto Ekosistemi',
    locale: 'tr-TR',
  },
  nav: {
    mainAriaLabel: 'Ana Bölümler',
    joinCta: 'ZWG Katıl',
    chapterRailAria: 'Bölüm Gezgini',
    prevAria: 'Önceki Bölüm (Yukarı Ok)',
    nextAria: 'Sonraki Bölüm (Alt Ok)',
    nextPrefix: 'Sonraki',
    scrollOrArrowHint: 'Alt Ok veya Kaydır',
    backToTop: 'Başa Dön',
    languageAria: 'Dil Seçimi',
  },
  chapters: CHAPTERS,
  hero: {
    kicker: '01. Zero Waste Global (ZWG) · Doğa Odaklı Kripto Ekosistemi',
    headline: 'Geri dönüşümü ve doğa korumasını ZWG ile ödüllendiren küresel kripto ağı.',
    description:
      'Zero Waste Global (ZWG); akıllı istasyonlarda doğrulanan geri dönüşüm eylemlerini, orman ve su havzalarının korunmasını ve döngüsel sıfır atık ekonomisini şeffaf blokzincir değerine dönüştüren yeşil kripto para projesidir.',
    cta: 'ZWG Sistemini Keşfet',
    navigationHint: 'Fare tekerleği veya alt ok tuşu ile bölümler arasında gezinin',
    imageAlt: 'Geri dönüşüm oklarıyla çevrelenmiş parlayan Zero Waste Global (ZWG) gezegeni',
    imageFallback: 'Zero Waste Global (ZWG)',
    stats: [
      { value: '1.000.000.000 ZWG', label: 'Sabit toplam arz · Enflasyonsuz deflasyonist model' },
      { value: '%35 Ödül Havuzu', label: 'Akıllı geri dönüşüm istasyonlarına ayrılan ZWG payı' },
      { value: '250M ZWG', label: 'Orman, su havzası ve doğa koruma hazinesi' },
    ],
  },
  smartRecycling: {
    kicker: '02. Akıllı Geri Dönüşüm & ZWG Kazanım',
    headline: 'Geri dönüştür, sensörle doğrula, anında ZWG kazan.',
    imageAlt: 'Park içinde konumlandırılmış cam ve ahşap detaylı ZWG akıllı geri dönüşüm istasyonu',
    imageFallback: 'ZWG Akıllı Geri Dönüşüm İstasyonu',
    stationMeta: 'Geri Dönüştür-Kazan (Recycle-to-Earn) · Anlık Cüzdan Aktarımı',
    stationDescription:
      'Optik sensörlü ZWG istasyonları bıraktığınız her materyali türüne ve ağırlığına göre doğrular; zincir üstü akıllı sözleşmelerle ZWG ödülünü doğrudan dijital cüzdanınıza gönderir.',
    calculatorTitle: 'ZWG Geri Dönüşüm Ödül Hesaplayıcı',
    calculatorSubtitle: 'Materyal türünü ve haftalık miktarı seçerek yıllık ZWG kazancınızı görün',
    rewardRateBadge: (zwgPerKg) => `${zwgPerKg} ZWG / kg ödül`,
    tabsAriaLabel: 'Atık Materyal Türleri',
    sliderLabel: (streamLabel) => `Haftalık ayrıştırılan ${streamLabel.toLowerCase()} miktarı`,
    perWeekUnit: 'kg / hafta',
    perYearUnit: 'kg / yıl',
    metrics: {
      zwgTitle: 'Yıllık ZWG Ödülü',
      zwgSub: 'Doğrulanan cüzdan kazancı',
      co2Title: 'Önlenen Karbon',
      co2Sub: 'CO₂ eşdeğeri / yıl',
      waterTitle: 'Korunan Su',
      waterSub: 'Tatlı su kaynağı',
    },
    sensorHeading: 'Sensör & Zincir Üstü Doğrulama',
    lifecycleHeading: 'Döngüsel Değer & Doğa Katkısı',
    streams: WASTE_STREAMS,
  },
  oceanProtection: {
    kicker: '03. ZWG Doğa Koruma Fonu',
    headline: 'Her ZWG işlemi ormanlara, temiz su havzalarına ve yaban hayatına kaynak üretir.',
    description:
      'ZWG Doğa Hazinesi, toplam arzın %25’ini yalnızca bağımsız olarak doğrulanmış ağaçlandırma, su havzası koruma ve doğal yaşam alanı iyileştirme projelerine tahsis eder. Her adım zincir üstü şeffaflıkla denetlenir.',
    selectorLabel: 'ZWG Doğa Koruma Havzası Seçin',
    imageAlt: 'Sisli çam ormanları ve berrak dağ akarsuyunun aktığı koruma altındaki doğal vadi',
    imageFallback: 'ZWG Doğa Koruma Ağı',
    schematic: {
      inflow: 'Su Havzası & Toprak',
      barrier: 'ZWG Koruma Kalkanı',
      protectedSea: 'Doğal Yaşam Alanı',
    },
    metrics: {
      intercepted: 'Korunan Alan',
      barriers: 'Sensör İstasyonu',
      barriersUnit: (count) => `${count} nokta`,
      grantPool: 'ZWG Hibe Fonu',
    },
    habitatLabel: 'Habitat Odağı:',
    corridors: OCEAN_CORRIDORS,
  },
  circularEconomy: {
    kicker: '04. ZWG Tokenomisi & Sıfır Atık Ekonomisi',
    headline: '1 Milyar sabit ZWG arzı, gerçek doğa koruma etkisine bağlı şeffaf dağılım.',
    supplyLabel: 'Toplam Arz Payı',
    economicOutcomeLabel: 'Ekonomik ve Zincir Üstü Etki:',
    imageAlt:
      'Geri kazanılmış cam granülleri, şeffaf polimer peletler, alüminyum külçeler ve doğal keten lifleri',
    imageFallback: 'ZWG Döngüsel Malzeme Kütüphanesi',
    proofStats: [
      { value: '1 Milyar ZWG', label: 'Sabit maksimum arz · Yeni basım (mint) kapalı' },
      { value: '%1 Yakım (Burn)', label: 'Doğrulanan endüstriyel karbon takaslarında arz azaltımı' },
    ],
    closingNote:
      'ZWG, gerçek dünyada geri kazanılan ham madde ve korunan doğal yaşam alanlarıyla desteklenen, döngüsel sıfır atık ekonomisinin dijital değer birimidir.',
    phases: CIRCULAR_PHASES,
  },
  join: {
    kicker: '05. ZWG Erken Erişim & Ekosistem Katılımı',
    headline: 'ZWG erken erişim listesine ve küresel doğa koruma ağına katılın.',
    description:
      'İster geri dönüşüm yaparak ZWG kazanmak isteyen bireysel bir katılımcı, ister belediye istasyonu, doğa koruma projesi veya likidite ortağı olun — ZWG ekosisteminde yerinizi alın.',
    individualBlockTitle: 'Bireysel ZWG Cüzdan & Erken Erişim',
    individualBlockDesc:
      'Ön kayıt (whitelist) önceliği, akıllı istasyon QR cüzdan eşleşmesi ve DAO oylama hakları.',
    institutionalBlockTitle: 'Kurumsal, Belediye & Borsa Ortaklığı',
    institutionalBlockDesc:
      'Akıllı geri dönüşüm donanımı entegrasyonu, doğa koruma hibeleri ve likidite iş birliği.',
    modeIndividual: 'Bireysel ZWG Kaydı',
    modeInstitutional: 'Kurumsal Ortaklık',
    nameLabelIndividual: 'Ad Soyad',
    nameLabelInstitutional: 'Yetkili Ad Soyad / Kurum',
    namePlaceholderIndividual: 'Örn. Deniz Kaya',
    namePlaceholderInstitutional: 'Örn. Doğa Koruma Vakfı / Yeşil Fon',
    emailLabel: 'E-posta Adresi',
    emailPlaceholder: 'ornek@eposta.com',
    walletOrCityLabel: 'Web3 Cüzdan (0x...) veya Şehir',
    walletOrCityPlaceholder: 'Örn. 0x71C... veya İstanbul',
    detailLabelIndividual: 'ZWG Katılım Alanınız',
    detailLabelInstitutional: 'İş Birliği Alanı',
    individualOptions: [
      'ZWG Ön Kayıt & Erken Erişim (Whitelist)',
      'Akıllı İstasyon Dönüştür-Kazan Programı',
      'ZWG Staking & DAO Topluluk Yönetişimi',
      'Doğa & Orman Koruma ZWG Gönüllü Ağı',
    ],
    institutionalOptions: [
      'Belediye / ZWG Akıllı İstasyon Kurulumu',
      'Orman ve Su Havzası Koruma Hibe Ortaklığı',
      'Borsa Listeleme & Likidite İş Birliği',
    ],
    errors: {
      name: 'Lütfen geçerli bir ad ve soyad girin.',
      email: 'Lütfen geçerli bir e-posta adresi girin.',
      city: 'Lütfen Web3 cüzdan adresinizi veya şehrinizi belirtin.',
    },
    privacyNote: 'Şeffaf ZWG topluluk kaydı · Özel anahtar talep edilmez',
    submitIndividual: 'ZWG Erken Erişime Katıl',
    submitInstitutional: 'Ortaklık Başvurusu Gönder',
    confirmation: {
      heading: (name) => `ZWG kaydınız onaylandı, ${name}.`,
      bodyIndividual: (walletOrCity) =>
        `${walletOrCity} referansı ile ZWG erken erişim sıranız ve akıllı geri dönüşüm cüzdan rehberiniz e-posta adresinize hazırlandı.`,
      bodyInstitutional: (walletOrCity) =>
        `${walletOrCity} için ZWG kurumsal iş birliği talebiniz kaydedildi. Ekosistem ekibimiz 2 iş günü içinde sizinle iletişime geçecektir.`,
      typeLabel: 'Katılım Türü',
      typeIndividual: 'Bireysel ZWG Erken Erişim',
      typeInstitutional: 'Kurumsal / Belediye ZWG Ortaklığı',
      focusLabel: 'Seçilen Program',
      newEntryBtn: 'Yeni Kayıt Oluştur',
      returnStartBtn: 'ZWG Başına Dön',
    },
    footer: {
      copyright: '© 2026 Zero Waste Global (ZWG) Kripto Ekosistemi',
      links: ['Dönüştür-Kazan', 'Doğa Fonu', 'ZWG Tokenomi'],
    },
  },
};
