export interface ChapterMeta {
  id: string;
  index: string;
  navLabel: string;
  shortTitle: string;
}

export const CHAPTERS: ChapterMeta[] = [
  { id: 'ekosistem', index: '01', navLabel: 'ZWG Ekosistem', shortTitle: 'Zero Waste Global (ZWG)' },
  { id: 'akilli-sistem', index: '02', navLabel: 'Dönüştür-Kazan', shortTitle: 'Akıllı Geri Dönüşüm & ZWG' },
  { id: 'doga-koruma', index: '03', navLabel: 'Doğa Fonu', shortTitle: 'ZWG Doğa Koruma Fonu' },
  { id: 'sifir-atik', index: '04', navLabel: 'ZWG Tokenomi', shortTitle: 'ZWG Tokenomi & Döngüsel Ekonomi' },
  { id: 'katil', index: '05', navLabel: 'Erken Erişim', shortTitle: 'ZWG Ekosistemine Katıl' },
];

export const ASSETS = {
  heroOcean: '/src/assets/images/hero_ocean_earth_1795258305063.jpg',
  ecoGlobe: '/assets/zwg-eco-globe.jpeg',
  smartHub: '/src/assets/images/smart_recycling_hub_1795258305528.jpg',
  natureHabitat: '/src/assets/images/nature_conservation_habitat_1795261890944.jpg',
  circularCraft: '/src/assets/images/circular_economy_craft_1795258304901.jpg',
} as const;

export interface WasteStream {
  id: string;
  label: string;
  sensorMethod: string;
  recoveryRate: number;
  zwgPerKg: number;
  co2PerKg: number;
  waterSavedLitersPerKg: number;
  oceanRiskNote: string;
  rebornAs: string;
}

export const WASTE_STREAMS: WasteStream[] = [
  {
    id: 'plastik',
    label: 'Plastik',
    sensorMethod: 'Yakın kızılötesi (NIR) sensör polimeri doğrular ve anında zincir üstü ZWG ödül kaydı oluşturur.',
    recoveryRate: 94,
    zwgPerKg: 12,
    co2PerKg: 2.5,
    waterSavedLitersPerKg: 22,
    oceanRiskNote: 'Doğada 450 yıl çözülmeyen mikroplastik birikimi toprak ve akarsulara ulaşmadan durdurulur.',
    rebornAs: 'Gıda sınıfı ambalaj granülü ve doğrulanmış ZWG çevre kredisi',
  },
  {
    id: 'cam',
    label: 'Cam',
    sensorMethod: 'Yüksek hızlı optik renk kamerası kırıkları ayırır, ağırlığı ölçer ve ZWG cüzdanına aktarır.',
    recoveryRate: 98,
    zwgPerKg: 5,
    co2PerKg: 0.67,
    waterSavedLitersPerKg: 9,
    oceanRiskNote: 'Orman ve vadi tabanlarındaki atık ve yangın riski sıfırlanır; sonsuz döngüye girer.',
    rebornAs: 'Kalite kaybı olmadan yeni cam şişe ve mimari yalıtım yünü',
  },
  {
    id: 'metal',
    label: 'Metal',
    sensorMethod: 'Elektromanyetik sensörler alüminyum ve çeliği anında tanıyarak en yüksek ZWG çarpanını tanımlar.',
    recoveryRate: 96,
    zwgPerKg: 18,
    co2PerKg: 9.1,
    waterSavedLitersPerKg: 40,
    oceanRiskNote: 'Birincil maden çıkarımı kaynaklı orman tahribatı ve ağır metal sızıntısı %95 azalır.',
    rebornAs: 'Yüksek mukavemetli alüminyum külçe ve endüstriyel profiller',
  },
  {
    id: 'kagit',
    label: 'Kağıt',
    sensorMethod: 'Nem ve lif yoğunluğu tarayıcısı temiz selülozu onaylayıp anlık ZWG ödülü üretir.',
    recoveryRate: 89,
    zwgPerKg: 6,
    co2PerKg: 1.3,
    waterSavedLitersPerKg: 28,
    oceanRiskNote: 'Her 1 ton geri kazanılmış lif, 17 yetişkin ağacın ve doğal su havzasının korunmasını sağlar.',
    rebornAs: 'Biyobozunur lojistik kolileri ve düşük karbonlu baskı kağıdı',
  },
  {
    id: 'organik',
    label: 'Organik',
    sensorMethod: 'Biyometrik tartım haznesi gıda atığını kontaminasyonsuz doğrular ve ZWG kredisine dönüştürür.',
    recoveryRate: 92,
    zwgPerKg: 7,
    co2PerKg: 1.8,
    waterSavedLitersPerKg: 15,
    oceanRiskNote: 'Çöp sahası metan salımı önlenir, verimli toprak ekosistemi doğal kompostla beslenir.',
    rebornAs: 'Tarımsal kompost ve temiz şehir içi biyogaz enerjisi',
  },
];

export interface OceanCorridor {
  id: string;
  name: string;
  regionLabel: string;
  coordinates: string;
  interceptedTonsPerYear: string;
  activeBarriers: number;
  protectedCoastKm: number;
  zwgGrantPool: string;
  habitatFocus: string;
  summary: string;
  methodDetail: string;
}

export const OCEAN_CORRIDORS: OceanCorridor[] = [
  {
    id: 'anadolu',
    name: 'Anadolu Orman Havzası',
    regionLabel: 'Batı ve Güney Anadolu Ekosistemi',
    coordinates: '37.82° N · 29.45° E',
    interceptedTonsPerYear: '42.600 ha',
    activeBarriers: 18,
    protectedCoastKm: 1420,
    zwgGrantPool: '68M ZWG',
    habitatFocus: 'Endemik kızılçam ormanları, tatlı su vadileri ve yaban hayatı koridorları',
    summary:
      'ZWG Doğa Hazinesi ile desteklenen ağaçlandırma, erken yangın sensör ağı ve sıfır atık vadi projeleri doğal yaşamı kaynağında korur.',
    methodDetail:
      'Uydu ve saha sensörleriyle doğrulanan her hektarlık doğa iyileştirmesi zincir üstü şeffaf raporla kayıt altına alınır.',
  },
  {
    id: 'karadeniz',
    name: 'Karadeniz Yayla & Su Havzası',
    regionLabel: 'Kuzey Anadolu Yaşlı Orman Kuşağı',
    coordinates: '41.35° N · 34.12° E',
    interceptedTonsPerYear: '31.400 ha',
    activeBarriers: 14,
    protectedCoastKm: 980,
    zwgGrantPool: '52M ZWG',
    habitatFocus: 'Yaşlı kayın-ladin ormanları, dağ akarsuları ve biyolojik çeşitlilik alanları',
    summary:
      'Yayla ve akarsu havzalarında atık sızıntısını önleyen akıllı toplama noktaları ve biyoçeşitlilik izleme istasyonları ZWG fonuyla çalışır.',
    methodDetail:
      'Yerel kooperatifler temiz su havzası ve orman koruma görevleri karşılığında doğrudan ZWG hibesi alır.',
  },
  {
    id: 'amazon',
    name: 'Tropik Orman Kuşağı',
    regionLabel: 'Ekvatoral Biyoçeşitlilik Koridoru',
    coordinates: '3.12° S · 60.02° W',
    interceptedTonsPerYear: '84.000 ha',
    activeBarriers: 22,
    protectedCoastKm: 2850,
    zwgGrantPool: '86M ZWG',
    habitatFocus: 'Yağmur ormanı örtüsü, karbon yutak alanları ve nehir ekosistemleri',
    summary:
      'ZWG DAO topluluğunun oylarıyla belirlenen kritik yağmur ormanı koridorlarında ormansızlaşmayı önleyen uydu doğrulamalı koruma programı yürütülür.',
    methodDetail:
      'Her koruma dönemi blokzincir tabanlı Doğa Kanıtı (Proof-of-Nature) sertifikasıyla kamuoyuna açık denetlenir.',
  },
  {
    id: 'kuzey-avrupa',
    name: 'Kuzey Yeşil Koridoru',
    regionLabel: 'Avrupa Göl ve Turbalık Havzası',
    coordinates: '60.17° N · 24.94° E',
    interceptedTonsPerYear: '28.500 ha',
    activeBarriers: 12,
    protectedCoastKm: 1140,
    zwgGrantPool: '44M ZWG',
    habitatFocus: 'Doğal turbalıklar, tatlı su gölleri ve yeniden yabanlaştırma bölgeleri',
    summary:
      'Yüksek karbon tutma kapasitesine sahip turbalık ve göl çevreleri atıksız koruma protokolü ve ZWG ekolojik hibeleriyle rehabilite edilir.',
    methodDetail:
      'Toprak karbon ölçümü ve su kalitesi verileri sürekli olarak ZWG şeffaflık kayıtlarına işlenir.',
  },
];

export interface CircularPhase {
  step: string;
  id: string;
  title: string;
  shortLabel: string;
  sharePercent: number;
  metricValue: string;
  tokenAmount: string;
  metricLabel: string;
  description: string;
  outcome: string;
}

export const CIRCULAR_PHASES: CircularPhase[] = [
  {
    step: '01',
    id: 'odul-havuzu',
    title: 'Geri Dönüşüm Ödül Havuzu',
    shortLabel: 'Ödül Havuzu',
    sharePercent: 35,
    metricValue: '%35',
    tokenAmount: '350.000.000 ZWG',
    metricLabel: 'Akıllı istasyon doğrulama ödülleri',
    description:
      'Akıllı geri dönüşüm istasyonlarında optik sensörle doğrulanan her atık teslimatı karşılığında vatandaşların ve yerel işletmelerin cüzdanlarına dağıtılır.',
    outcome: 'Gerçek fiziksel geri dönüşüm hacmine bağlı şeffaf ve sürdürülebilir ZWG dağıtımı sağlar.',
  },
  {
    step: '02',
    id: 'doga-fonu',
    title: 'Doğa & Ekosistem Koruma Fonu',
    shortLabel: 'Doğa Fonu',
    sharePercent: 25,
    metricValue: '%25',
    tokenAmount: '250.000.000 ZWG',
    metricLabel: 'Orman, su havzası ve yaban hayatı',
    description:
      'Çok imzalı (multi-sig) çevre hazinesinde kilitli tutulur; yalnızca bağımsız olarak doğrulanan ağaçlandırma, su havzası ve doğal habitat koruma projelerine aktarılır.',
    outcome: 'Her ZWG işlemi ormanların, temiz suların ve doğal yaşam alanlarının kalıcı korunmasına kaynak üretir.',
  },
  {
    step: '03',
    id: 'dongusel-ekonomi',
    title: 'Sıfır Atık Ekonomisi & Likidite',
    shortLabel: 'Likidite',
    sharePercent: 25,
    metricValue: '%25',
    tokenAmount: '250.000.000 ZWG',
    metricLabel: 'Borsa likiditesi ve yeşil tedarik ağı',
    description:
      'Merkeziyetsiz ve merkezi borsa likidite havuzlarını destekler; geri kazanılmış ham madde kullanan üreticiler arasında düşük maliyetli ZWG takası sunar.',
    outcome: 'Döngüsel üreticiler için derin piyasa likiditesi ve sınır ötesi yeşil ticaret altyapısı kurar.',
  },
  {
    step: '04',
    id: 'yonetisim-staking',
    title: 'DAO Yönetişim, Staking & Ar-Ge',
    shortLabel: 'Yönetişim',
    sharePercent: 15,
    metricValue: '%15',
    tokenAmount: '150.000.000 ZWG',
    metricLabel: 'Topluluk oylaması ve sensör Ar-Ge',
    description:
      'ZWG sahiplerinin yeni doğa koruma havzalarını ve belediye hibelerini oyladığı DAO mekanizmasını, uzun vadeli staking ödüllerini ve donanım Ar-Ge çalışmalarını finanse eder.',
    outcome: 'Ekosistem kararları merkezi bir yapı yerine küresel ZWG topluluğu tarafından şeffafça yönetilir.',
  },
];
