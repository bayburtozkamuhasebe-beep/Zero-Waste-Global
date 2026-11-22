import { ASSETS, type NatureNftItem } from './ecosystemData';
import type { LanguageCode } from '../i18n/types';

interface ExtraNftSeed {
  id: string;
  tokenId: string;
  image: string;
  priceNum: number;
  editionCount: number;
  rarityKey: 'legendary' | 'epic' | 'rare';
  locales: Record<
    LanguageCode,
    {
      name: string;
      collection: string;
      natureImpact: string;
      summary: string;
      provenance: string;
    }
  >;
}

const RARITY_LABELS: Record<LanguageCode, Record<'legendary' | 'epic' | 'rare', string>> = {
  en: { legendary: 'Legendary', epic: 'Epic', rare: 'Rare' },
  tr: { legendary: 'Efsanevi', epic: 'Epik', rare: 'Nadir' },
  ja: { legendary: 'レジェンダリー', epic: 'エピック', rare: 'レア' },
  de: { legendary: 'Legendär', epic: 'Episch', rare: 'Selten' },
  fr: { legendary: 'Légendaire', epic: 'Épique', rare: 'Rare' },
};

function formatPrice(lang: LanguageCode, amount: number): string {
  if (lang === 'tr' || lang === 'de') {
    return `${amount.toLocaleString('de-DE')} ZWG`;
  }
  if (lang === 'fr') {
    return `${amount.toLocaleString('fr-FR').replace(/\u202f/g, ' ')} ZWG`;
  }
  return `${amount.toLocaleString('en-US')} ZWG`;
}

function formatEdition(lang: LanguageCode, count: number): string {
  switch (lang) {
    case 'tr':
      return `${count} Adet`;
    case 'ja':
      return `限定 ${count}点`;
    case 'de':
      return `${count} Stück`;
    case 'fr':
      return `${count} Ex.`;
    default:
      return `${count} Editions`;
  }
}

const EXTRA_SEEDS: ExtraNftSeed[] = [
  {
    id: 'snow-leopard-summit',
    tokenId: '#1012',
    image: ASSETS.nftSnowLeopard,
    priceNum: 2400,
    editionCount: 50,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Snow Leopard Summit',
        collection: 'ZWG High Peaks',
        natureImpact: '4.5 ha Alpine Refuge',
        summary: 'Funds solar camera-trap networks and high-altitude sanctuaries safeguarding endangered snow leopards.',
        provenance: 'Himalayan Quartz Ridge · Satellite Wildlife Audit',
      },
      tr: {
        name: 'Kar Leoparı Zirvesi',
        collection: 'ZWG Yüksek Zirve',
        natureImpact: '4.5 ha Dağ Sığınağı',
        summary: 'Nesli tükenmekte olan kar leoparları için güneş enerjili yaban hayatı kameraları ve yüksek irtifa sığınaklarını fonlar.',
        provenance: 'Himalaya Zirve Hattı · Uydu Yaban Hayatı Denetimi',
      },
      ja: {
        name: '雪豹の月光峰',
        collection: 'ZWG 高山保護',
        natureImpact: '高山保護区 4.5 ha',
        summary: '絶滅危惧種ユキヒョウを守る太陽光カメラ監視網と高山サンクチュアリを直接支援します。',
        provenance: 'ヒマラヤ高山稜線 · 衛星野生生物監査',
      },
      de: {
        name: 'Schneeleopard-Gipfel',
        collection: 'ZWG Hochgebirge',
        natureImpact: '4,5 ha Alpen-Refugium',
        summary: 'Finanziert solare Wildtier-Sensoren und geschützte Hochgebirgs-Korridore für bedrohte Schneeleoparden.',
        provenance: 'Himalaya-Gipfelkamm · Satelliten-Wildtier-Audit',
      },
      fr: {
        name: 'Sommet du Léopard des Neiges',
        collection: 'ZWG Hauts Sommets',
        natureImpact: '4,5 ha Refuge Alpin',
        summary: 'Finance des réseaux de capteurs solaires et des sanctuaires d’altitude protégeant les léopards des neiges.',
        provenance: 'Crête Himalayenne · Audit Faune par Satellite',
      },
    },
  },
  {
    id: 'abyssal-jellyfish',
    tokenId: '#1064',
    image: ASSETS.nftJellyfish,
    priceNum: 1180,
    editionCount: 160,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Abyssal Jellyfish Drift',
        collection: 'ZWG Bioluminescence',
        natureImpact: '18 Tons Ocean Clean',
        summary: 'Sponsors autonomous deep-water microplastic skimmers and pelagic biodiversity monitoring drones.',
        provenance: 'Deep Pelagic Sanctuary · Subsea Clarity Ledger',
      },
      tr: {
        name: 'Derin Deniz Denizanası',
        collection: 'ZWG Biyolüminesans',
        natureImpact: '18 Ton Deniz Temizliği',
        summary: 'Otonom mikroplastik toplayıcıları ve derin deniz biyoçeşitlilik gözlem sensörlerini destekler.',
        provenance: 'Derin Pelajik Koridor · Sualtı Berraklık Kaydı',
      },
      ja: {
        name: '深海の発光クラゲ',
        collection: 'ZWG 深海発光',
        natureImpact: '海洋回収 18トン',
        summary: '自律型マイクロプラスチック回収船と深海生態系観測ドローンの運用を資金支援します。',
        provenance: '深海ペラジック保護区 · 海中透明度台帳',
      },
      de: {
        name: 'Tiefsee-Leuchtqualle',
        collection: 'ZWG Biolumineszenz',
        natureImpact: '18 t Ozean-Reinigung',
        summary: 'Unterstützt autonome Mikroplastik-Filter und Tiefsee-Biodiversitätsdrohnen in offenen Meereszonen.',
        provenance: 'Tiefsee-Schutzzone · Unterwasser-Klarheitslog',
      },
      fr: {
        name: 'Méduse Abyssale Lumineuse',
        collection: 'ZWG Bioluminescence',
        natureImpact: '18 t Océan Nettoyé',
        summary: 'Soutient les collecteurs autonomes de microplastiques et les drones de suivi marin en eau profonde.',
        provenance: 'Sanctuaire Pélagique · Registre Clarté Marine',
      },
    },
  },
  {
    id: 'sacred-baobab',
    tokenId: '#1120',
    image: ASSETS.nftBaobab,
    priceNum: 1920,
    editionCount: 75,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Ancient Baobab Twilight',
        collection: 'ZWG Savanna Heritage',
        natureImpact: '220 Drought Trees',
        summary: 'Protects millennial savanna baobabs and funds community-led regenerative agroforestry belts.',
        provenance: 'Great Green Savanna Belt · On-Chain Canopy Proof',
      },
      tr: {
        name: 'Kadim Baobab Alacakaranlığı',
        collection: 'ZWG Savana Mirası',
        natureImpact: '220 Kurakçıl Ağaç',
        summary: 'Bin yıllık savana baobablarını korur ve kuraklığa dayanıklı topluluk orman kuşaklarını finanse eder.',
        provenance: 'Büyük Yeşil Savana Kuşağı · Zincir Üstü Kanıt',
      },
      ja: {
        name: '太古のバオバブ黄昏',
        collection: 'ZWG サバンナ遺産',
        natureImpact: '耐乾植林 220本',
        summary: '樹齢千年のバオバブ巨木を守り、地域主導の再生アグロフォレストリー帯を広げます。',
        provenance: 'グリーンサバンナ回廊 · オンチェーン樹冠証明',
      },
      de: {
        name: 'Uralter Baobab-Abend',
        collection: 'ZWG Savannen-Erbe',
        natureImpact: '220 Dürre-Bäume',
        summary: 'Bewahrt jahrtausendealte Baobabs und finanziert trockenheitsresistente Agroforst-Gürtel.',
        provenance: 'Grüner Savannengürtel · On-Chain-Kronennachweis',
      },
      fr: {
        name: 'Baobab Millénaire Crépuscule',
        collection: 'ZWG Savane Vivante',
        natureImpact: '220 Arbres Arides',
        summary: 'Protège les baobabs millénaires et finance des ceintures agroforestières résilientes à la sécheresse.',
        provenance: 'Grande Ceinture Verte · Preuve Canopée On-Chain',
      },
    },
  },
  {
    id: 'monarch-canopy',
    tokenId: '#1175',
    image: ASSETS.nftMonarch,
    priceNum: 980,
    editionCount: 220,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Monarch Butterfly Canopy',
        collection: 'ZWG Migration Trail',
        natureImpact: '6.0 ha Milkweed Belt',
        summary: 'Restores native milkweed meadows and oyamel fir roosting forests along the monarch flyway.',
        provenance: 'Transcontinental Flyway · Ecological Migration Log',
      },
      tr: {
        name: 'Kral Kelebeği Göçü',
        collection: 'ZWG Göç Koridoru',
        natureImpact: '6.0 ha Çiçek Kuşağı',
        summary: 'Kral kelebeklerinin binlerce kilometrelik göç hattı boyunca doğal çayır ve çam dinlenme ormanlarını onarır.',
        provenance: 'Kıtalararası Göç Hattı · Ekolojik İzleme Kaydı',
      },
      ja: {
        name: 'オオカバマダラの森',
        collection: 'ZWG 渡り回廊',
        natureImpact: '花畑保護 6.0 ha',
        summary: '数千キロを旅するオオカバマダラの越冬林と在来草花ベルトを継続的に再生します。',
        provenance: '大陸横断渡りルート · 生態移動監査ログ',
      },
      de: {
        name: 'Monarchfalter-Baldachin',
        collection: 'ZWG Zugkorridor',
        natureImpact: '6,0 ha Blütenband',
        summary: 'Stellt Wildblumenwiesen und geschützte Tannenwälder entlang der Monarchfalter-Wanderroute wieder her.',
        provenance: 'Kontinentaler Flugkorridor · Migrations-Audit',
      },
      fr: {
        name: 'Canopée des Monarques',
        collection: 'ZWG Corridor Migratoire',
        natureImpact: '6,0 ha Prairies Fleuries',
        summary: 'Restaure les prairies d’asclépiades et les forêts de sapins refuges le long de la route des monarques.',
        provenance: 'Voie Migratoire Continentale · Suivi Écologique',
      },
    },
  },
  {
    id: 'emerald-mangrove',
    tokenId: '#1210',
    image: ASSETS.nftMangrove,
    priceNum: 1290,
    editionCount: 140,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Emerald Mangrove Roots',
        collection: 'ZWG Blue Carbon',
        natureImpact: '45 Tons Blue Carbon',
        summary: 'Plants tidal mangrove forests that lock 4× more carbon than inland woods while sheltering young reef fish.',
        provenance: 'Tropical Estuary Belt · Blue Carbon Registry',
      },
      tr: {
        name: 'Zümrüt Mangrov Kökleri',
        collection: 'ZWG Mavi Karbon',
        natureImpact: '45 Ton Mavi Karbon',
        summary: 'Kıyı mangrov ormanlarını genişleterek normal ormanların 4 katı karbon tutar ve resif yavrularına yuva olur.',
        provenance: 'Tropikal Kıyı Lagünü · Mavi Karbon Kayıt Defteri',
      },
      ja: {
        name: '翡翠マングローブの根',
        collection: 'ZWG ブルーカーボン',
        natureImpact: '青色炭素 45トン',
        summary: '陸上林の4倍の炭素を固定し稚魚を育む沿岸マングローブ林の植栽を直接資金化します。',
        provenance: '熱帯河口保護帯 · ブルーカーボン登録簿',
      },
      de: {
        name: 'Smaragd-Mangrovenwurzeln',
        collection: 'ZWG Blue Carbon',
        natureImpact: '45 t Blue Carbon',
        summary: 'Pflanzt Küsten-Mangroven, die viermal mehr CO₂ speichern und jungen Rifffischen Schutz bieten.',
        provenance: 'Tropisches Ästuar · Blue-Carbon-Register',
      },
      fr: {
        name: 'Racines de Mangrove Émeraude',
        collection: 'ZWG Carbone Bleu',
        natureImpact: '45 t Carbone Bleu',
        summary: 'Reboise les mangroves côtières qui captent 4× plus de carbone et abritent les juvéniles des récifs.',
        provenance: 'Estuaire Tropical · Registre Carbone Bleu',
      },
    },
  },
  {
    id: 'polar-humpback',
    tokenId: '#1268',
    image: ASSETS.nftWhale,
    priceNum: 2250,
    editionCount: 55,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Polar Humpback Song',
        collection: 'ZWG Whale Sanctuary',
        natureImpact: '33 Tons Whale Carbon',
        summary: 'Funds acoustic ship-routing buoys that prevent whale collisions and keep polar ocean lanes quiet.',
        provenance: 'North Polar Sea Corridor · Acoustic Hydrophone Audit',
      },
      tr: {
        name: 'Kutup Balinası Şarkısı',
        collection: 'ZWG Balina Sığınağı',
        natureImpact: '33 Ton Balina Karbonu',
        summary: 'Kutup sularında balina göç yollarını gemi gürültüsünden ve çarpışmalardan koruyan akustik şamandıraları fonlar.',
        provenance: 'Kuzey Kutup Deniz Koridoru · Hidrofon Doğrulama',
      },
      ja: {
        name: '極海ザトウクジラの歌',
        collection: 'ZWG 鯨類保護区',
        natureImpact: '海洋炭素 33トン',
        summary: 'クジラとの船舶衝突を防ぎ極海の静けさを守る音響ブイ監視ネットワークを支援します。',
        provenance: '北極海回遊路 · 水中音響センサー監査',
      },
      de: {
        name: 'Gesang des Polarwals',
        collection: 'ZWG Walschutzgebiet',
        natureImpact: '33 t Wal-Kohlenstoff',
        summary: 'Finanziert akustische Schutzbojen, die Kollisionen verhindern und polare Wanderrouten beruhigen.',
        provenance: 'Nordpolarer Meereskorridor · Hydrophon-Audit',
      },
      fr: {
        name: 'Chant de la Baleine Polaire',
        collection: 'ZWG Sanctuaire Baleines',
        natureImpact: '33 t Carbone Marin',
        summary: 'Finance des bouées acoustiques évitant les collisions maritimes et préservant le silence des océans polaires.',
        provenance: 'Corridor Marin Polaire · Audit Hydrophone',
      },
    },
  },
  {
    id: 'giant-redwood',
    tokenId: '#1305',
    image: ASSETS.nftRedwood,
    priceNum: 1680,
    editionCount: 90,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Giant Redwood Cathedral',
        collection: 'ZWG Ancient Giants',
        natureImpact: '180 Tons CO₂ Vault',
        summary: 'Secures permanent land-trust easements for coastal old-growth redwood groves and fog-fed watersheds.',
        provenance: 'Pacific Fog Belt · Permanent Forestry Deed',
      },
      tr: {
        name: 'Dev Sekoya Tapınağı',
        collection: 'ZWG Kadim Devler',
        natureImpact: '180 Ton CO₂ Deposu',
        summary: 'Binlerce yıllık dev sekoya ormanları ve sisle beslenen orman ekosistemleri için kalıcı koruma tapusu oluşturur.',
        provenance: 'Pasifik Sis Ormanı · Kalıcı Orman Koruma Kaydı',
      },
      ja: {
        name: '巨木セコイアの大聖堂',
        collection: 'ZWG 太古巨木',
        natureImpact: 'CO₂貯蔵 180トン',
        summary: '沿岸の原生セコイア巨木群と霧に育まれる水源林の恒久的な土地信託保全を支援します。',
        provenance: '太平洋霧林帯 · 恒久森林保全証書',
      },
      de: {
        name: 'Kathedrale der Mammutbäume',
        collection: 'ZWG Uralte Giganten',
        natureImpact: '180 t CO₂-Tresor',
        summary: 'Sichert dauerhafte Schutzrechte für uralte Küsten-Redwood-Wälder und nebelgespeiste Bachläufe.',
        provenance: 'Pazifik-Nebelwald · Dauerhafte Forsturkunde',
      },
      fr: {
        name: 'Cathédrale des Séquoias Géants',
        collection: 'ZWG Géants Anciens',
        natureImpact: '180 t CO₂ Stockées',
        summary: 'Garantit la protection perpétuelle des forêts anciennes de séquoias côtiers et de leurs bassins brumeux.',
        provenance: 'Forêt Brumeuse Pacifique · Acte Forestier Perpétuel',
      },
    },
  },
  {
    id: 'crystal-geode-moss',
    tokenId: '#1352',
    image: ASSETS.nftGeodeMoss,
    priceNum: 890,
    editionCount: 260,
    rarityKey: 'rare',
    locales: {
      en: {
        name: 'Living Crystal Geode',
        collection: 'ZWG Mineral Flora',
        natureImpact: '2.0 ha Karst Reserve',
        summary: 'Protects fragile limestone caves, mineral springs, and subterranean bryophyte ecosystems from mining runoff.',
        provenance: 'Karst Mineral Sanctuary · Hydro-Geological Audit',
      },
      tr: {
        name: 'Kristal Yosun Mağarası',
        collection: 'ZWG Mineral Flora',
        natureImpact: '2.0 ha Karst Rezervi',
        summary: 'Kırılgan karstik mağaraları, doğal mineral kaynaklarını ve yeraltı yosun ekosistemlerini maden sızıntısından korur.',
        provenance: 'Karstik Mineral Sığınağı · Hidro-Jeolojik Denetim',
      },
      ja: {
        name: '結晶ジオードの苔庭',
        collection: 'ZWG 鉱物植物',
        natureImpact: 'カルスト保護 2.0 ha',
        summary: '繊細な石灰岩洞窟・鉱泉・地下苔生態系を採掘排水から守る保全活動を支援します。',
        provenance: 'カルスト鉱物保護区 · 水文地質監査済み',
      },
      de: {
        name: 'Lebende Kristall-Geode',
        collection: 'ZWG Mineral-Flora',
        natureImpact: '2,0 ha Karst-Reservat',
        summary: 'Schützt empfindliche Karsthöhlen, Mineralquellen und seltene Moos-Ökosysteme vor Bergbauabflüssen.',
        provenance: 'Karst-Mineralschutzgebiet · Hydrogeologie-Audit',
      },
      fr: {
        name: 'Géode Cristalline Vivante',
        collection: 'ZWG Flore Minérale',
        natureImpact: '2,0 ha Réserve Karstique',
        summary: 'Protège les grottes karstiques, sources minérales et mousses souterraines contre les ruissellements miniers.',
        provenance: 'Sanctuaire Karstique · Audit Hydrogéologique',
      },
    },
  },
  {
    id: 'golden-eagle-canyon',
    tokenId: '#1419',
    image: ASSETS.nftGoldenEagle,
    priceNum: 1540,
    editionCount: 110,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Golden Eagle Canyon',
        collection: 'ZWG Raptor Skies',
        natureImpact: '8.0 ha Cliff Habitat',
        summary: 'Protects alpine raptor nesting cliffs and promotes zero-toxin mountain grazing corridors.',
        provenance: 'Anatolian & Alpine Cliffs · Ornithology Telemetry',
      },
      tr: {
        name: 'Altın Kartal Kanyonu',
        collection: 'ZWG Yırtıcı Gökler',
        natureImpact: '8.0 ha Kanyon Alanı',
        summary: 'Kaya kartallarının üreme kanyonlarını korur ve zehirsiz yüksek yayla yaşam koridorları oluşturur.',
        provenance: 'Anadolu & Alp Kanyonları · Ornitoloji Takibi',
      },
      ja: {
        name: 'イヌワシの黄金峡谷',
        collection: 'ZWG 猛禽保護',
        natureImpact: '峡谷保全 8.0 ha',
        summary: '希少なイヌワシの営巣断崖と無農薬の高山草原回廊を長期的に保全します。',
        provenance: 'アナトリア＆アルプス断崖 · 鳥類学観測ログ',
      },
      de: {
        name: 'Steinadler-Canyon',
        collection: 'ZWG Greifvogel-Himmel',
        natureImpact: '8,0 ha Fels-Habitat',
        summary: 'Sichert alpine Brutfelsen für Steinadler und fördert giftfreie Gebirgs-Ökosysteme.',
        provenance: 'Anatolische & Alpine Felsen · Ornithologie-Audit',
      },
      fr: {
        name: 'Canyon de l’Aigle Royal',
        collection: 'ZWG Ciels Sauvages',
        natureImpact: '8,0 ha Falaises Protégées',
        summary: 'Protège les falaises de nidification des aigles royaux et préserve les vallées alpines sans pesticides.',
        provenance: 'Falaises d’Anatolie & Alpes · Suivi Ornithologique',
      },
    },
  },
  {
    id: 'blossom-mountain-stream',
    tokenId: '#1485',
    image: ASSETS.nftSakuraStream,
    priceNum: 1050,
    editionCount: 190,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Blossom Mountain Stream',
        collection: 'ZWG Pure Springs',
        natureImpact: '75,000 L Spring Water',
        summary: 'Keeps highland cherry-lined mountain streams free of micro-waste with solar-powered filtration weirs.',
        provenance: 'Eastern Highland Brooks · Water Purity Proof',
      },
      tr: {
        name: 'Kiraz Çiçeği Deresi',
        collection: 'ZWG Berrak Akarsu',
        natureImpact: '75.000 L Kaynak Suyu',
        summary: 'Yabani kiraz ağaçlarıyla çevrili dağ derelerini mikro atıklardan arındıran güneş enerjili filtre bentlerini destekler.',
        provenance: 'Yüksek Yayla Dereleri · Su Saflığı Kanıtı',
      },
      ja: {
        name: '山桜の清流せせらぎ',
        collection: 'ZWG 清流保全',
        natureImpact: '清流保全 75,000 L',
        summary: '山桜が咲く清らかな渓流を太陽光マイクロ廃棄物フィルターで恒久的に守り抜きます。',
        provenance: '東山渓流保護区 · 水質純度オンチェーン証明',
      },
      de: {
        name: 'Kirschblüten-Bergbach',
        collection: 'ZWG Reine Quellen',
        natureImpact: '75.000 L Quellwasser',
        summary: 'Hält blühende Bergbäche durch solare Mikrofilter-Wehre dauerhaft frei von Verpackungsresten.',
        provenance: 'Hochland-Bäche · On-Chain-Reinheitsnachweis',
      },
      fr: {
        name: 'Ruisseau des Cerisiers',
        collection: 'ZWG Sources Pures',
        natureImpact: '75 000 L Eau de Source',
        summary: 'Préserve les torrents de montagne bordés de cerisiers sauvages grâce à des barrages filtrants solaires.',
        provenance: 'Ruisseaux d’Altitude · Preuve de Pureté Hydrique',
      },
    },
  },
  {
    id: 'arctic-fox-solstice',
    tokenId: '#1520',
    image: ASSETS.nftArcticFox,
    priceNum: 1420,
    editionCount: 130,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Arctic Fox Solstice',
        collection: 'ZWG Tundra Pulse',
        natureImpact: '14 Tons Permafrost CO₂',
        summary: 'Supports sub-arctic tundra conservation and permafrost carbon monitoring stations across northern valleys.',
        provenance: 'Nordic Tundra Reserve · Permafrost Sensor Chain',
      },
      tr: {
        name: 'Kutup Tilkisi Gündönümü',
        collection: 'ZWG Tundra Nabzı',
        natureImpact: '14 Ton Tundra Karbonu',
        summary: 'Kuzey tundralarında kutup tilkisi yaşam alanlarını ve permafrost karbon izleme istasyonlarını finanse eder.',
        provenance: 'Kuzey Tundra Rezervi · Permafrost Sensör Ağı',
      },
      ja: {
        name: 'ホッキョクギツネの冬至',
        collection: 'ZWG ツンドラ保護',
        natureImpact: '凍土炭素 14トン',
        summary: '北方ツンドラのホッキョクギツネ生息地と永久凍土炭素観測所の維持を支援します。',
        provenance: '北欧ツンドラ保護区 · 凍土センサー連携',
      },
      de: {
        name: 'Polarfuchs-Sonnenwende',
        collection: 'ZWG Tundra-Puls',
        natureImpact: '14 t Permafrost-CO₂',
        summary: 'Unterstützt subarktische Tundra-Schutzgebiete und Permafrost-Kohlenstoffmessstationen im Norden.',
        provenance: 'Nordisches Tundra-Reservat · Permafrost-Sensorik',
      },
      fr: {
        name: 'Solstice du Renard Polaire',
        collection: 'ZWG Toundra Nordique',
        natureImpact: '14 t CO₂ Pergélisol',
        summary: 'Soutient les réserves de toundra arctique et les stations de suivi carbone du pergélisol nordique.',
        provenance: 'Réserve Toundra Nordique · Capteurs Pergélisol',
      },
    },
  },
  {
    id: 'sapphire-kingfisher',
    tokenId: '#1577',
    image: ASSETS.nftKingfisher,
    priceNum: 820,
    editionCount: 280,
    rarityKey: 'rare',
    locales: {
      en: {
        name: 'Sapphire Kingfisher Plunge',
        collection: 'ZWG River Wings',
        natureImpact: '3.5 km Riverbank',
        summary: 'Restores natural reed beds and clean gravel riverbanks essential for kingfisher nesting habitats.',
        provenance: 'Emerald River Valley · Riparian Bio-Audit',
      },
      tr: {
        name: 'Safir Yalıçapkını',
        collection: 'ZWG Nehir Kanatları',
        natureImpact: '3.5 km Nehir Kıyısı',
        summary: 'Yalıçapkını kuşlarının yuva yaptığı doğal sazlıkları ve temiz akarsu kıyılarını atıksız hale getirir.',
        provenance: 'Zümrüt Nehir Vadisi · Kıyı Ekosistem Denetimi',
      },
      ja: {
        name: '蒼玉カワセミの飛翔',
        collection: 'ZWG 河川野鳥',
        natureImpact: '河岸再生 3.5 km',
        summary: 'カワセミが営巣する自然葦原と澄んだ砂礫河岸のゼロウェイスト再生を資金支援します。',
        provenance: '翡翠河川渓谷 · 河畔生態監査済み',
      },
      de: {
        name: 'Saphir-Eisvogel',
        collection: 'ZWG Fluss-Schwingen',
        natureImpact: '3,5 km Flussufer',
        summary: 'Renaturiert Schilfgürtel und saubere Kiesufer als sichere Brutstätten für heimische Eisvögel.',
        provenance: 'Smaragd-Flusstal · Ufer-Bioaudit',
      },
      fr: {
        name: 'Plongeon du Martin-Pêcheur',
        collection: 'ZWG Ailes des Rivières',
        natureImpact: '3,5 km Berges Pures',
        summary: 'Restaure les roselières naturelles et berges propres indispensables à la nidification du martin-pêcheur.',
        provenance: 'Vallée Fluviale Émeraude · Audit Riverain',
      },
    },
  },
  {
    id: 'glowing-mycelium',
    tokenId: '#1633',
    image: ASSETS.nftMycelium,
    priceNum: 1120,
    editionCount: 175,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Glowing Mycelium Web',
        collection: 'ZWG Living Soil',
        natureImpact: '4.0 ha Forest Soil',
        summary: 'Funds fungal mycelium bioremediation that breaks down soil toxins and reconnects recovering forest roots.',
        provenance: 'Wood Wide Web Initiative · Mycology Field Proof',
      },
      tr: {
        name: 'Işıklı Miselyum Ağı',
        collection: 'ZWG Yaşayan Toprak',
        natureImpact: '4.0 ha Orman Toprağı',
        summary: 'Topraktaki kirleticileri doğal yolla parçalayan ve ağaç köklerini besleyen miselyum biyoremediasyonunu fonlar.',
        provenance: 'Orman Kök Ağı Projesi · Mikoloji Saha Kanıtı',
      },
      ja: {
        name: '発光菌糸ネットワーク',
        collection: 'ZWG 生きた土壌',
        natureImpact: '森林土壌 4.0 ha',
        summary: '土壌汚染を自然分解し森の根系を繋ぐ菌糸バイオレメディエーション計画を支援します。',
        provenance: '森林根系プロジェクト · 菌類学フィールド証明',
      },
      de: {
        name: 'Leuchtendes Myzel-Netz',
        collection: 'ZWG Lebender Boden',
        natureImpact: '4,0 ha Waldboden',
        summary: 'Fördert Myzel-Bioremediation, die Bodengifte natürlich abbaut und junge Waldwurzeln vernetzt.',
        provenance: 'Wood-Wide-Web-Initiative · Mykologie-Nachweis',
      },
      fr: {
        name: 'Réseau Mycélium Lumineux',
        collection: 'ZWG Sols Vivants',
        natureImpact: '4,0 ha Sol Forestier',
        summary: 'Finance la bioremédiation par mycélium qui dépollue les sols et reconnecte les racines forestières.',
        provenance: 'Initiative Wood Wide Web · Preuve Mycologique',
      },
    },
  },
  {
    id: 'salt-lagoon-flamingos',
    tokenId: '#1688',
    image: ASSETS.nftFlamingo,
    priceNum: 1320,
    editionCount: 145,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Salt Lagoon Flamingos',
        collection: 'ZWG Wetland Mirrors',
        natureImpact: '9.5 ha Wetland Basin',
        summary: 'Safeguards seasonal salt-lake breeding grounds and diverts agricultural runoff away from flamingo wetlands.',
        provenance: 'Anatolian & Andean Lagoons · Wetland Hydro Audit',
      },
      tr: {
        name: 'Tuz Gölü Flamingoları',
        collection: 'ZWG Sulak Alan',
        natureImpact: '9.5 ha Sulak Havza',
        summary: 'Flamingoların üreme lagünlerini kuraklıktan ve tarımsal atık sızıntısından koruyan sulak alan projelerini fonlar.',
        provenance: 'Tuz Gölü & Lagün Ağı · Sulak Alan Su Denetimi',
      },
      ja: {
        name: '塩湖フラミンゴの朝凪',
        collection: 'ZWG 湿地保全',
        natureImpact: '湿地保護 9.5 ha',
        summary: 'フラミンゴの繁殖地となる塩湖湿地を干ばつと農業排水汚染から守り続けます。',
        provenance: 'アナトリア＆アンデス塩湖 · 湿地水質監査',
      },
      de: {
        name: 'Salzlagunen-Flamingos',
        collection: 'ZWG Feuchtgebiete',
        natureImpact: '9,5 ha Feuchtbiotop',
        summary: 'Schützt saisonale Salzsee-Brutplätze und leitet landwirtschaftliche Rückstände von Lagunen ab.',
        provenance: 'Anatolische & Anden-Lagunen · Feuchtgebiet-Audit',
      },
      fr: {
        name: 'Flamants de la Lagune Salée',
        collection: 'ZWG Zones Humides',
        natureImpact: '9,5 ha Bassin Humide',
        summary: 'Préserve les lagunes de reproduction des flamants roses contre la sécheresse et les pollutions agricoles.',
        provenance: 'Lagunes d’Anatolie & Andes · Audit Zones Humides',
      },
    },
  },
  {
    id: 'mist-valley-panda',
    tokenId: '#1740',
    image: ASSETS.nftGiantPanda,
    priceNum: 2050,
    editionCount: 65,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Mist Valley Panda',
        collection: 'ZWG Bamboo Refuge',
        natureImpact: '5.5 ha Bamboo Valley',
        summary: 'Connects fragmented mountain bamboo valleys with wildlife overpasses and zero-waste eco-villages.',
        provenance: 'Highland Bamboo Sanctuary · Wildlife Corridor Log',
      },
      tr: {
        name: 'Sis Vadisi Pandası',
        collection: 'ZWG Bambu Sığınağı',
        natureImpact: '5.5 ha Bambu Vadisi',
        summary: 'Parçalanmış dağ bambu vadilerini yaban hayatı koridorları ve sıfır atık eko-köylerle yeniden birleştirir.',
        provenance: 'Yüksek Bambu Sığınağı · Yaban Hayatı Koridoru',
      },
      ja: {
        name: '霧渓谷のジャイアントパンダ',
        collection: 'ZWG 竹林保護区',
        natureImpact: '竹林回廊 5.5 ha',
        summary: '分断された山岳竹林を野生動物回廊とゼロウェイスト環境村で結び直します。',
        provenance: '高山竹林保護区 · 野生生物回廊ログ',
      },
      de: {
        name: 'Nebeltal-Panda',
        collection: 'ZWG Bambus-Refugium',
        natureImpact: '5,5 ha Bambustal',
        summary: 'Verbindet getrennte Berg-Bambustäler über Wildtierbrücken und abfallfreie Öko-Dörfer.',
        provenance: 'Hochland-Bambusreservat · Korridor-Audit',
      },
      fr: {
        name: 'Panda de la Vallée Brumeuse',
        collection: 'ZWG Refuge Bambou',
        natureImpact: '5,5 ha Vallée Bambou',
        summary: 'Relie les vallées de bambous fragmentées par des corridors fauniques et des écovillages zéro déchet.',
        provenance: 'Sanctuaire Bambou d’Altitude · Suivi Corridor',
      },
    },
  },
  {
    id: 'amazon-emerald-boa',
    tokenId: '#1795',
    image: ASSETS.nftEmeraldBoa,
    priceNum: 1150,
    editionCount: 165,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Amazon Emerald Coil',
        collection: 'ZWG Rainforest Canopy',
        natureImpact: '3.8 ha Canopy Shield',
        summary: 'Funds indigenous-led canopy patrols and bio-acoustic sensors protecting tropical rainforest biodiversity.',
        provenance: 'Upper Amazon Canopy · Bio-Acoustic Proof',
      },
      tr: {
        name: 'Amazon Zümrüt Yılanı',
        collection: 'ZWG Yağmur Ormanı',
        natureImpact: '3.8 ha Kanopi Kalkanı',
        summary: 'Tropikal yağmur ormanı biyoçeşitliliğini kaçak kesimden koruyan akustik sensör ağlarını fonlar.',
        provenance: 'Yukarı Amazon Kanopisi · Biyo-Akustik Kanıt',
      },
      ja: {
        name: 'アマゾン翡翠ボア',
        collection: 'ZWG 熱帯雨林樹冠',
        natureImpact: '樹冠保護 3.8 ha',
        summary: '熱帯雨林の違法伐採を検知する音響センサーと先住民パトロール活動を資金支援します。',
        provenance: '上流アマゾン樹冠帯 · 音響バイオ証明',
      },
      de: {
        name: 'Amazonas-Smaragdboa',
        collection: 'ZWG Regenwald-Krone',
        natureImpact: '3,8 ha Kronenschutz',
        summary: 'Finanziert indigene Waldpatrouillen und Bio-Akustiksensoren gegen illegalen Regenwald-Einschlag.',
        provenance: 'Oberer Amazonas · Bioakustik-Nachweis',
      },
      fr: {
        name: 'Boa Émeraude d’Amazonie',
        collection: 'ZWG Canopée Tropicale',
        natureImpact: '3,8 ha Canopée Protégée',
        summary: 'Finance des capteurs bio-acoustiques et patrouilles locales protégeant la biodiversité amazonienne.',
        provenance: 'Haute Canopée Amazonienne · Preuve Bio-Acoustique',
      },
    },
  },
  {
    id: 'alpine-wildflower-crown',
    tokenId: '#1852',
    image: ASSETS.nftAlpineMeadow,
    priceNum: 760,
    editionCount: 320,
    rarityKey: 'rare',
    locales: {
      en: {
        name: 'Alpine Wildflower Crown',
        collection: 'ZWG Highland Flora',
        natureImpact: '7.0 ha Alpine Meadow',
        summary: 'Preserves untouched mountain wildflower meadows, glacial tarns, and alpine butterfly pollinators.',
        provenance: 'Highland Meadow Trust · Botanical Survey Log',
      },
      tr: {
        name: 'Alp Çiçek Yaylası',
        collection: 'ZWG Yayla Florası',
        natureImpact: '7.0 ha Çiçek Yaylası',
        summary: 'El değmemiş yüksek dağ lavanta ve kır çiçeği çayırlarını, buzul göllerini ve kelebek türlerini korur.',
        provenance: 'Yüksek Yayla Koruma Ağı · Botanik Envanter',
      },
      ja: {
        name: 'アルプス高山花畑',
        collection: 'ZWG 高原植物',
        natureImpact: '高山草原 7.0 ha',
        summary: '手つかずの高山ラベンダー草原・氷河湖・高山蝶の生息環境を恒久的に守り抜きます。',
        provenance: '高山草原トラスト · 植物調査ログ',
      },
      de: {
        name: 'Alpine Wildblumen-Krone',
        collection: 'ZWG Hochland-Flora',
        natureImpact: '7,0 ha Bergwiese',
        summary: 'Bewahrt unberührte Bergblumenwiesen, klare Gletscherseen und alpine Schmetterlings-Habitate.',
        provenance: 'Hochland-Wiesenstiftung · Botanisches Register',
      },
      fr: {
        name: 'Couronne Fleurie Alpine',
        collection: 'ZWG Flore d’Altitude',
        natureImpact: '7,0 ha Prairie Alpine',
        summary: 'Préserve les prairies de lavande sauvage, lacs glaciaires et papillons pollinisateurs d’altitude.',
        provenance: 'Fonds Prairies Alpines · Inventaire Botanique',
      },
    },
  },
  {
    id: 'golden-kelp-seahorse',
    tokenId: '#1910',
    image: ASSETS.nftKelpSeahorse,
    priceNum: 1240,
    editionCount: 150,
    rarityKey: 'epic',
    locales: {
      en: {
        name: 'Golden Kelp Seahorse',
        collection: 'ZWG Sea Forests',
        natureImpact: '60 m² Kelp Forest',
        summary: 'Seeds fast-growing underwater kelp forests that absorb ocean acidification and shelter leafy sea dragons.',
        provenance: 'Southern Kelp Sanctuary · Marine Carbon Audit',
      },
      tr: {
        name: 'Altın Yosun Denizatı',
        collection: 'ZWG Deniz Ormanları',
        natureImpact: '60 m² Yosun Ormanı',
        summary: 'Okyanus asitlenmesini azaltan ve nadir deniz ejderlerine yuva olan sualtı yosun ormanlarını yeniden eker.',
        provenance: 'Güney Yosun Sığınağı · Deniz Karbon Denetimi',
      },
      ja: {
        name: '黄金ケルプのリーフィーシードラゴン',
        collection: 'ZWG 海中林',
        natureImpact: '海中林再生 60 m²',
        summary: '海洋酸性化を和らげ希少なシードラゴンを育む巨大ケルプ海中林の再生を支援します。',
        provenance: '南部ケルプ保護区 · 海洋炭素監査済み',
      },
      de: {
        name: 'Goldenes Kelp-Seepferdchen',
        collection: 'ZWG Meereswälder',
        natureImpact: '60 m² Kelp-Wald',
        summary: 'Pflanzt schnell wachsende Unterwasser-Kelpwälder gegen Ozeanversauerung und für seltene Seedrachen.',
        provenance: 'Südliches Kelp-Reservat · Meeres-Karbon-Audit',
      },
      fr: {
        name: 'Hippocampe d’Or des Laminaires',
        collection: 'ZWG Forêts Marines',
        natureImpact: '60 m² Forêt de Kelp',
        summary: 'Réensemence des forêts sous-marines de kelp luttant contre l’acidification et abritant les dragons de mer.',
        provenance: 'Sanctuaire Kelp Austral · Audit Carbone Marin',
      },
    },
  },
  {
    id: 'millennial-olive-sanctuary',
    tokenId: '#1964',
    image: ASSETS.nftAncientOlive,
    priceNum: 1780,
    editionCount: 85,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Millennial Olive Sanctuary',
        collection: 'ZWG Aegean Heritage',
        natureImpact: '150 Heritage Olives',
        summary: 'Protects ancient Mediterranean coastal olive groves and funds dry-farming zero-waste coastal stewardship.',
        provenance: 'Aegean & Mediterranean Cliffs · Heritage Tree ID',
      },
      tr: {
        name: 'Bin Yıllık Zeytin Ağacı',
        collection: 'ZWG Ege Mirası',
        natureImpact: '150 Anıt Zeytin',
        summary: 'Akdeniz ve Ege kıyılarındaki anıt zeytin ağaçlarını korur ve susuz tarım sıfır atık kooperatiflerini destekler.',
        provenance: 'Ege & Akdeniz Kıyıları · Anıt Ağaç Kimliği',
      },
      ja: {
        name: '千年オリーブの聖域',
        collection: 'ZWG 地中海遺産',
        natureImpact: '古木保護 150本',
        summary: '地中海沿岸の樹齢千年オリーブ古木群を守り、節水型ゼロウェイスト農業を支援します。',
        provenance: 'エーゲ＆地中海沿岸 · 遺産樹木オンチェーンID',
      },
      de: {
        name: 'Jahrtausend-Olivenhain',
        collection: 'ZWG Ägäis-Erbe',
        natureImpact: '150 Antike Oliven',
        summary: 'Schützt jahrtausendealte Mittelmeer-Olivenbäume und fördert abfallfreie Trockenlandwirtschaft.',
        provenance: 'Ägäis- & Mittelmeerküste · Naturdenkmal-ID',
      },
      fr: {
        name: 'Sanctuaire de l’Olivier Millénaire',
        collection: 'ZWG Patrimoine Égéen',
        natureImpact: '150 Oliviers Anciens',
        summary: 'Protège les oliviers millénaires méditerranéens et soutient les coopératives côtières zéro déchet.',
        provenance: 'Falaises Égéennes · Registre Arbres Remarquables',
      },
    },
  },
  {
    id: 'prism-canyon-waterfall',
    tokenId: '#2026',
    image: ASSETS.nftPrismWaterfall,
    priceNum: 2600,
    editionCount: 40,
    rarityKey: 'legendary',
    locales: {
      en: {
        name: 'Prism Canyon Waterfall',
        collection: 'ZWG Genesis Finale',
        natureImpact: '250,000 L Pure Gorge',
        summary: 'Flagship 2026 Genesis collector edition funding whole-valley zero-waste watershed sanctuaries.',
        provenance: 'Emerald Basalt Gorge · Full-Valley Proof of Nature',
      },
      tr: {
        name: 'Gökkuşağı Kanyon Şelalesi',
        collection: 'ZWG Genesis Final',
        natureImpact: '250.000 L Kanyon Suyu',
        summary: '2026 koleksiyonunun amiral gemisi; tüm vadiyi kapsayan sıfır atık su havzası sığınaklarını finanse eder.',
        provenance: 'Zümrüt Bazalt Kanyonu · Tam Vadi Doğa Kanıtı',
      },
      ja: {
        name: '虹彩キャニオンの瀑布',
        collection: 'ZWG ジェネシス完結',
        natureImpact: '渓谷水源 250,000 L',
        summary: '2026年フラグシップ限定作品。渓谷全体を守るゼロウェイスト水源サンクチュアリを資金化します。',
        provenance: '翡翠玄武岩渓谷 · 全流域自然証明',
      },
      de: {
        name: 'Regenbogen-Canyon-Wasserfall',
        collection: 'ZWG Genesis Finale',
        natureImpact: '250.000 L Schluchtwasser',
        summary: 'Flaggschiff-Edition 2026 zur Finanzierung kompletter Zero-Waste-Talschutzgebiete.',
        provenance: 'Smaragd-Basaltschlucht · Talweites Natur-Audit',
      },
      fr: {
        name: 'Cascade Prisme du Canyon',
        collection: 'ZWG Genesis Finale',
        natureImpact: '250 000 L Bassin Pur',
        summary: 'Édition phare 2026 finançant des sanctuaires hydrauliques zéro déchet sur des vallées entières.',
        provenance: 'Gorge de Basalte Émeraude · Preuve Vallée Complète',
      },
    },
  },
];

function buildExtraNfts(lang: LanguageCode): NatureNftItem[] {
  return EXTRA_SEEDS.map((seed) => {
    const localized = seed.locales[lang];
    return {
      id: seed.id,
      tokenId: seed.tokenId,
      image: seed.image,
      name: localized.name,
      collection: localized.collection,
      rarity: RARITY_LABELS[lang][seed.rarityKey],
      zwgPrice: formatPrice(lang, seed.priceNum),
      edition: formatEdition(lang, seed.editionCount),
      natureImpact: localized.natureImpact,
      summary: localized.summary,
      provenance: localized.provenance,
    };
  });
}

export const EXTRA_NATURE_NFTS: Record<LanguageCode, NatureNftItem[]> = {
  en: buildExtraNfts('en'),
  tr: buildExtraNfts('tr'),
  ja: buildExtraNfts('ja'),
  de: buildExtraNfts('de'),
  fr: buildExtraNfts('fr'),
};
