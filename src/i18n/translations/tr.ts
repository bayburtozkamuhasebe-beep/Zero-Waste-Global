import {
  CHAPTERS,
  CIRCULAR_PHASES,
  NATURE_NFTS,
  PROTOCOL_LAYERS,
  WASTE_STREAMS,
} from '../../data/ecosystemData';
import { EXTRA_NATURE_NFTS } from '../../data/extraNatureNfts';
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
    kicker: '03. ZWG Doğa NFT Koleksiyonu',
    headline: 'Gerçek doğa korumasına bağlı koleksiyonluk ZWG NFT eserleri.',
    description:
      'Her ZWG Doğa NFT’si; orman koridorları, temiz su havzaları ve yaban hayatı sığınakları için zincir üstünde doğrulanmış koruma fonu üretir. Bir NFT seçin ve çevresel etkisini inceleyin.',
    slogan: 'Doğa emanetimizdir — her eser bir ormana nefes, her dokunuş geleceğe mirastır.',
    selectorLabel: 'Doğa NFT Koleksiyonu (32 Özel Seri)',
    imageAlt: 'Sisli çam ormanları ve berrak dağ akarsuyunun aktığı koruma altındaki doğal vadi',
    imageFallback: 'ZWG Doğa NFT Galerisi',
    metrics: {
      price: 'Mint Değeri',
      impact: 'Gerçek Doğa Etkisi',
      edition: 'Sınırlı Arz',
    },
    provenanceLabel: 'Koruma Kaynağı:',
    reserveCta: 'Whitelist İçin Ayırt',
    reservedCta: 'Whitelist Listesine Eklendi',
    nfts: [...NATURE_NFTS, ...EXTRA_NATURE_NFTS.tr],
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
  protocol: {
    kicker: '05. ZWG Protokol Mimarisi & Proof-of-Recycle',
    headline: 'Sensörden zincire kesintisiz doğrulama yapan açık kaynak sıfır atık protokolü.',
    description:
      'ZWG Protokolü; fiziksel geri dönüşüm istasyonlarını, akıllı sözleşme ödül motorunu ve çoklu imzalı doğa koruma hazinesini tek bir denetlenebilir mimaride birleştirir.',
    architectureTitle: 'Protokol Katmanları (İncelemek İçin Seçin)',
    metrics: {
      mechanism: 'Doğrulama Mekanizması',
      latency: 'Onay Süresi',
      security: 'Güvenlik Katmanı',
    },
    guaranteeLabel: 'Protokol Garantisi:',
    flowLabel: 'Canlı Zincir Üstü Veri Akışı',
    specs: [
      { label: 'Toplam Arz', value: '10.000.000.000' },
      { label: 'Maksimum Arz', value: '10.000.000.000' },
      { label: 'Dolaşımdaki Arz', value: '0' },
    ],
    layers: PROTOCOL_LAYERS,
  },
  join: {
    kicker: '06. ZWG Erken Erişim & Ekosistem Katılımı',
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
      links: ['Dönüştür-Kazan', 'NFT', 'ZWG Tokenomi'],
    },
  },
};
