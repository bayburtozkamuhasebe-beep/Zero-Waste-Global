export interface ChapterMeta {
  id: string;
  index: string;
  navLabel: string;
  shortTitle: string;
}

export const CHAPTERS: ChapterMeta[] = [
  { id: 'ekosistem', index: '01', navLabel: 'ZWG Ekosistem', shortTitle: 'Zero Waste Global (ZWG)' },
  { id: 'akilli-sistem', index: '02', navLabel: 'Dönüştür-Kazan', shortTitle: 'Akıllı Geri Dönüşüm & ZWG' },
  { id: 'nft', index: '03', navLabel: 'NFT', shortTitle: 'ZWG Doğa NFT Koleksiyonu' },
  { id: 'sifir-atik', index: '04', navLabel: 'ZWG Tokenomi', shortTitle: 'ZWG Tokenomi & Döngüsel Ekonomi' },
  { id: 'protokol', index: '05', navLabel: 'Protokol', shortTitle: 'ZWG Protokol Mimarisi' },
  { id: 'katil', index: '06', navLabel: 'Erken Erişim', shortTitle: 'ZWG Ekosistemine Katıl' },
];

export const ASSETS = {
  heroOcean: '/src/assets/images/hero_ocean_earth_1795258305063.jpg',
  ecoGlobe: '/assets/zwg-eco-globe.jpeg',
  smartHub: '/src/assets/images/smart_recycling_hub_1795258305528.jpg',
  natureHabitat: '/src/assets/images/nature_conservation_habitat_1795261890944.jpg',
  circularCraft: '/src/assets/images/circular_economy_craft_1795258304901.jpg',
  nftForest: '/src/assets/images/nft_ancient_forest_guardian_1795361859753.jpg',
  nftWatershed: '/src/assets/images/nft_crystal_watershed_spirit_1795361859458.jpg',
  nftWildlife: '/src/assets/images/nft_alpine_wildlife_totem_1795361859160.jpg',
  nftBiosphere: '/src/assets/images/nft_living_biosphere_seed_1795361859869.jpg',
  nftCoral: '/src/assets/images/nft_coral_abyss_citadel_1795363042049.jpg',
  nftGlacier: '/src/assets/images/nft_glacial_aurora_crown_1795363049678.jpg',
  nftPollinator: '/src/assets/images/nft_solar_pollinator_bloom_1795363050053.jpg',
  nftVolcanicFern: '/src/assets/images/nft_volcanic_obsidian_fern_1795363049452.jpg',
  nftSeaTurtle: '/src/assets/images/nft_celestial_sea_turtle_1795363049786.jpg',
  nftCloudOrchid: '/src/assets/images/nft_cloud_forest_orchid_1795363049892.jpg',
  nftBambooHaven: '/src/assets/images/nft_bamboo_wind_pavilion_1795363049646.jpg',
  nftDesertOasis: '/src/assets/images/nft_desert_oasis_mirage_1795363050765.jpg',
  nftSnowLeopard: '/src/assets/images/nft_snow_leopard_ridge_1795370477945.jpg',
  nftJellyfish: '/src/assets/images/nft_biolum_jellyfish_drift_1795370488109.jpg',
  nftBaobab: '/src/assets/images/nft_sacred_baobab_twilight_1795370490831.jpg',
  nftMonarch: '/src/assets/images/nft_monarch_migration_veil_1795370490659.jpg',
  nftMangrove: '/src/assets/images/nft_jade_mangrove_labyrinth_1795370487870.jpg',
  nftWhale: '/src/assets/images/nft_arctic_whale_song_1795370487053.jpg',
  nftRedwood: '/src/assets/images/nft_redwood_sunbeam_cathedral_1795370488291.jpg',
  nftGeodeMoss: '/src/assets/images/nft_crystal_geode_moss_1795370488290.jpg',
  nftGoldenEagle: '/src/assets/images/nft_golden_eagle_thermal_1795370487225.jpg',
  nftSakuraStream: '/src/assets/images/nft_sakura_mountain_stream_1795370486710.jpg',
  nftArcticFox: '/src/assets/images/nft_silver_fox_winter_pine_1795370518454.jpg',
  nftKingfisher: '/src/assets/images/nft_emerald_kingfisher_dive_1795370529778.jpg',
  nftMycelium: '/src/assets/images/nft_mycelium_forest_network_1795370623285.jpg',
  nftFlamingo: '/src/assets/images/nft_pink_flamingo_lagoon_1795370531088.jpg',
  nftGiantPanda: '/src/assets/images/nft_giant_panda_mist_valley_1795370530497.jpg',
  nftEmeraldBoa: '/src/assets/images/nft_emerald_tree_boa_1795370622703.jpg',
  nftAlpineMeadow: '/src/assets/images/nft_lavender_alpine_meadow_1795370621401.jpg',
  nftKelpSeahorse: '/src/assets/images/nft_coral_seahorse_kelp_1795370530318.jpg',
  nftAncientOlive: '/src/assets/images/nft_ancient_olive_mediterranean_1795370529024.jpg',
  nftPrismWaterfall: '/src/assets/images/nft_solar_waterfall_rainbow_1795370620929.jpg',
} as const;

export interface ProtocolLayer {
  id: 'oracle' | 'settlement' | 'treasury' | 'governance';
  step: string;
  name: string;
  shortLabel: string;
  mechanism: string;
  latency: string;
  security: string;
  summary: string;
  guarantee: string;
}

export const PROTOCOL_LAYERS: ProtocolLayer[] = [
  {
    id: 'oracle',
    step: '01',
    name: 'Proof-of-Recycle (PoR) Oracle',
    shortLabel: 'Sensör & Oracle',
    mechanism: 'IoT + NIR İmza',
    latency: '< 1.8 sn',
    security: 'Donanım HSM',
    summary:
      'Akıllı geri dönüşüm istasyonlarındaki optik ve ağırlık sensörleri, her atık teslimatını kriptografik olarak imzalayıp doğrudan zincire yazar.',
    guarantee: 'İnsan müdahalesi olmadan sahte işlem önlenir; her gram atık doğrulanmış zincir üstü kanıta dönüşür.',
  },
  {
    id: 'settlement',
    step: '02',
    name: 'Otomatik ZWG Ödül & Yakım Motoru',
    shortLabel: 'Ödül & Yakım',
    mechanism: 'EVM Akıllı Sözleşme',
    latency: '< 2.4 sn',
    security: 'Bağımsız Denetim',
    summary:
      'Doğrulanan her geri dönüşüm kaydı anında kullanıcı cüzdanına ZWG ödülü aktarır; endüstriyel karbon takaslarında %1 otomatik arz yakımı uygular.',
    guarantee: 'Sabit 1 milyar arz kilidi ve yeni basım (mint) yasağı sözleşme seviyesinde kalıcı olarak kilitlidir.',
  },
  {
    id: 'treasury',
    step: '03',
    name: 'Zincir Üstü Doğa Hazine Kasası',
    shortLabel: 'Doğa Kasası',
    mechanism: 'Multi-Sig + Kilitleme',
    latency: 'Gerçek Zamanlı',
    security: '5/7 Çoklu İmza',
    summary:
      '250M ZWG doğa koruma fonu; yalnızca uydu ve saha sensörü kanıtı onaylanan orman, su havzası ve NFT koruma projelerine aşamalı olarak açılır.',
    guarantee: 'Tüm hibe hareketleri herkese açık gezginde kuruşu kuruşuna izlenebilir ve zaman kilidiyle korunur.',
  },
  {
    id: 'governance',
    step: '04',
    name: 'ZWG DAO Yönetişim & Staking',
    shortLabel: 'DAO Yönetişim',
    mechanism: 'On-Chain Oylama',
    latency: '7 Gün Oylama',
    security: 'Şeffaf Quorum',
    summary:
      'ZWG ve Doğa NFT sahipleri; yeni istasyon kurulacak şehirleri, korunacak orman havzalarını ve protokol parametrelerini zincir üstü oylamayla belirler.',
    guarantee: 'Merkeziyetsiz topluluk yönetimi sayesinde ekosistem yönü tek bir otoriteye değil küresel paydaşlara aittir.',
  },
];

export interface NatureNftItem {
  id: string;
  tokenId: string;
  image: string;
  name: string;
  collection: string;
  rarity: string;
  zwgPrice: string;
  edition: string;
  natureImpact: string;
  summary: string;
  provenance: string;
}

export const NATURE_NFTS: NatureNftItem[] = [
  {
    id: 'forest-guardian',
    tokenId: '#001',
    image: ASSETS.nftForest,
    name: 'Kadim Orman Koruyucusu',
    collection: 'ZWG Genesis Orman',
    rarity: 'Efsanevi',
    zwgPrice: '1.250 ZWG',
    edition: '100 Adet',
    natureImpact: '100 Ağaç · 1.2 ha',
    summary:
      'Her NFT, uydu doğrulamalı kadim çam ve sedir ormanlarında kalıcı koruma ve yeni fidan dikimi fonlar.',
    provenance: 'Anadolu & Alp Orman Koridoru · Zincir Üstü Doğa Kanıtı',
  },
  {
    id: 'watershed-spirit',
    tokenId: '#042',
    image: ASSETS.nftWatershed,
    name: 'Kristal Su Havzası',
    collection: 'ZWG Temiz Su Serisi',
    rarity: 'Epik',
    zwgPrice: '850 ZWG',
    edition: '250 Adet',
    natureImpact: '50.000 L Temiz Su',
    summary:
      'Dağ akarsularını ve tatlı su kaynaklarını atık sızıntısından koruyan sensörlü su havzası istasyonlarını destekler.',
    provenance: 'Yüksek Yayla Su Kaynakları · Gerçek Zamanlı Kalite Kaydı',
  },
  {
    id: 'wildlife-sanctuary',
    tokenId: '#108',
    image: ASSETS.nftWildlife,
    name: 'Yaban Hayatı Sığınağı',
    collection: 'ZWG Biyoçeşitlilik',
    rarity: 'Efsanevi',
    zwgPrice: '1.600 ZWG',
    edition: '150 Adet',
    natureImpact: '2.5 ha Yaşam Alanı',
    summary:
      'Doğal göç yollarını ve nesli tehlike altındaki orman yaban hayatını koruma altına alan özel doğa koleksiyonu.',
    provenance: 'Kuzey Yaban Hayatı Koridoru · Bağımsız Ekosistem Denetimi',
  },
  {
    id: 'biosphere-seed',
    tokenId: '#256',
    image: ASSETS.nftBiosphere,
    name: 'Yaşayan Biyosfer Tohumu',
    collection: 'ZWG Karbon Yutağı',
    rarity: 'Nadir',
    zwgPrice: '600 ZWG',
    edition: '500 Adet',
    natureImpact: '10 Ton CO₂ Tutumu',
    summary:
      'Yağmur ormanı ve toprak karbon yutaklarının rehabilitasyonunu finanse eden, staking bonuslu ZWG doğa NFT’si.',
    provenance: 'Küresel Biyosfer Ağı · Doğrulanmış Karbon Sertifikası',
  },
  {
    id: 'coral-sanctuary',
    tokenId: '#312',
    image: ASSETS.nftCoral,
    name: 'Mercan Resifi Tapınağı',
    collection: 'ZWG Derin Deniz',
    rarity: 'Efsanevi',
    zwgPrice: '1.850 ZWG',
    edition: '80 Adet',
    natureImpact: '40 m² Mercan Onarımı',
    summary:
      'Biyolüminesans resif kolonilerinin yeniden canlandırılmasını ve deniz tabanı plastik temizliğini fonlar.',
    provenance: 'Akdeniz & Pasifik Resif Ağı · Sualtı Sensör Doğrulaması',
  },
  {
    id: 'glacial-aurora',
    tokenId: '#389',
    image: ASSETS.nftGlacier,
    name: 'Buzul Aurora Tacı',
    collection: 'ZWG Kutup İklim',
    rarity: 'Efsanevi',
    zwgPrice: '2.100 ZWG',
    edition: '60 Adet',
    natureImpact: '25 Ton CO₂ Önleme',
    summary:
      'Kutup buzullarını koruyan iklim izleme istasyonlarını ve sıfır karbon temiz enerji geçişini destekler.',
    provenance: 'Arktik İklim Gözlem Ağı · Zincir Üstü Buzul Verisi',
  },
  {
    id: 'pollinator-bloom',
    tokenId: '#415',
    image: ASSETS.nftPollinator,
    name: 'Altın Polen Çiçeği',
    collection: 'ZWG Tozlaşma',
    rarity: 'Epik',
    zwgPrice: '920 ZWG',
    edition: '200 Adet',
    natureImpact: '500.000 Arı Yaşam Alanı',
    summary:
      'Pestisit içermeyen kır çiçeği çayırları ve bal arısı koruma kolonileri kurarak doğal tozlaşmayı güvenceye alır.',
    provenance: 'Anadolu Çayır Ekosistemi · Ekolojik Çiftlik Ortaklığı',
  },
  {
    id: 'volcanic-fern',
    tokenId: '#504',
    image: ASSETS.nftVolcanicFern,
    name: 'Volkanik Eğrelti Otu',
    collection: 'ZWG Toprak Yenileme',
    rarity: 'Nadir',
    zwgPrice: '740 ZWG',
    edition: '350 Adet',
    natureImpact: '3.0 ha Toprak Islahı',
    summary:
      'Yanık ve çorak arazilerin mineralce zengin organik kompostla yeniden yeşermesini finanse eden özel seri.',
    provenance: 'Jeotermal & Volkanik Havza · Toprak Karbon Denetimi',
  },
  {
    id: 'sea-turtle-voyager',
    tokenId: '#618',
    image: ASSETS.nftSeaTurtle,
    name: 'Okyanus Deniz Kaplumbağası',
    collection: 'ZWG Mavi Koridor',
    rarity: 'Efsanevi',
    zwgPrice: '1.750 ZWG',
    edition: '100 Adet',
    natureImpact: '12 km Kıyı Koruma',
    summary:
      'Caretta caretta ve yeşil deniz kaplumbağalarının yuvalama plajlarını 7/24 koruma altına alır.',
    provenance: 'Akdeniz Yuvalama Kıyıları · Biyolog Doğrulamalı Kayıt',
  },
  {
    id: 'cloud-orchid',
    tokenId: '#721',
    image: ASSETS.nftCloudOrchid,
    name: 'Bulut Ormanı Orkidesi',
    collection: 'ZWG Endemik Flora',
    rarity: 'Epik',
    zwgPrice: '1.100 ZWG',
    edition: '180 Adet',
    natureImpact: '18 Endemik Tür Koruma',
    summary:
      'Yüksek rakımlı bulut ormanlarındaki nadir orkide ve sinek kuşu yaşam alanlarını kaçak tahribattan korur.',
    provenance: 'Yüksek Bulut Ormanı Rezervi · Botanik Envanter Kanıtı',
  },
  {
    id: 'bamboo-haven',
    tokenId: '#809',
    image: ASSETS.nftBambooHaven,
    name: 'Zümrüt Bambu Vadisi',
    collection: 'ZWG Hızlı Karbon',
    rarity: 'Nadir',
    zwgPrice: '680 ZWG',
    edition: '400 Adet',
    natureImpact: '15 Ton Yıllık O₂',
    summary:
      'Tek kullanımlık plastik yerine geçen sürdürülebilir bambu ormanları ve sıfır atık köy atölyelerini fonlar.',
    provenance: 'Yeşil Bambu Koridoru · Sürdürülebilir Hasat Sertifikası',
  },
  {
    id: 'desert-oasis',
    tokenId: '#940',
    image: ASSETS.nftDesertOasis,
    name: 'Yaşayan Vaha Kalbi',
    collection: 'ZWG Çöl Yeşertme',
    rarity: 'Epik',
    zwgPrice: '1.350 ZWG',
    edition: '120 Adet',
    natureImpact: '120.000 L Su Tutumu',
    summary:
      'Kurak kanyonlarda güneş enerjili damla sulama ve kadim zeytin-hurma vahalarının yeniden canlanmasını destekler.',
    provenance: 'Kurak Bölge Vaha Ağı · Uydu Nem & Bitki Örtüsü Kaydı',
  },
];

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
