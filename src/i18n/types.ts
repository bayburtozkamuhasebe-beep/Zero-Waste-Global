import type {
  ChapterMeta,
  CircularPhase,
  OceanCorridor,
  WasteStream,
} from '../data/ecosystemData';

export type LanguageCode = 'tr' | 'en' | 'ja' | 'de' | 'fr';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  nativeName: string;
  locale: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'tr', shortLabel: 'TR', nativeName: 'Türkçe', locale: 'tr-TR' },
  { code: 'en', shortLabel: 'EN', nativeName: 'English', locale: 'en-US' },
  { code: 'ja', shortLabel: 'JA', nativeName: '日本語', locale: 'ja-JP' },
  { code: 'de', shortLabel: 'DE', nativeName: 'Deutsch', locale: 'de-DE' },
  { code: 'fr', shortLabel: 'FR', nativeName: 'Français', locale: 'fr-FR' },
];

export interface TranslationDictionary {
  meta: {
    pageTitle: string;
    locale: string;
  };
  nav: {
    mainAriaLabel: string;
    joinCta: string;
    chapterRailAria: string;
    prevAria: string;
    nextAria: string;
    nextPrefix: string;
    scrollOrArrowHint: string;
    backToTop: string;
    languageAria: string;
  };
  chapters: ChapterMeta[];
  hero: {
    kicker: string;
    headline: string;
    description: string;
    cta: string;
    navigationHint: string;
    imageAlt: string;
    imageFallback: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  smartRecycling: {
    kicker: string;
    headline: string;
    imageAlt: string;
    imageFallback: string;
    stationMeta: string;
    stationDescription: string;
    calculatorTitle: string;
    calculatorSubtitle: string;
    rewardRateBadge: (zwgPerKg: number) => string;
    tabsAriaLabel: string;
    sliderLabel: (streamLabel: string) => string;
    perWeekUnit: string;
    perYearUnit: string;
    metrics: {
      zwgTitle: string;
      zwgSub: string;
      co2Title: string;
      co2Sub: string;
      waterTitle: string;
      waterSub: string;
    };
    sensorHeading: string;
    lifecycleHeading: string;
    streams: WasteStream[];
  };
  oceanProtection: {
    kicker: string;
    headline: string;
    description: string;
    selectorLabel: string;
    imageAlt: string;
    imageFallback: string;
    schematic: {
      inflow: string;
      barrier: string;
      protectedSea: string;
    };
    metrics: {
      intercepted: string;
      barriers: string;
      barriersUnit: (count: number) => string;
      grantPool: string;
    };
    habitatLabel: string;
    corridors: OceanCorridor[];
  };
  circularEconomy: {
    kicker: string;
    headline: string;
    supplyLabel: string;
    economicOutcomeLabel: string;
    imageAlt: string;
    imageFallback: string;
    proofStats: Array<{
      value: string;
      label: string;
    }>;
    closingNote: string;
    phases: CircularPhase[];
  };
  join: {
    kicker: string;
    headline: string;
    description: string;
    individualBlockTitle: string;
    individualBlockDesc: string;
    institutionalBlockTitle: string;
    institutionalBlockDesc: string;
    modeIndividual: string;
    modeInstitutional: string;
    nameLabelIndividual: string;
    nameLabelInstitutional: string;
    namePlaceholderIndividual: string;
    namePlaceholderInstitutional: string;
    emailLabel: string;
    emailPlaceholder: string;
    walletOrCityLabel: string;
    walletOrCityPlaceholder: string;
    detailLabelIndividual: string;
    detailLabelInstitutional: string;
    individualOptions: string[];
    institutionalOptions: string[];
    errors: {
      name: string;
      email: string;
      city: string;
    };
    privacyNote: string;
    submitIndividual: string;
    submitInstitutional: string;
    confirmation: {
      heading: (name: string) => string;
      bodyIndividual: (walletOrCity: string) => string;
      bodyInstitutional: (walletOrCity: string) => string;
      typeLabel: string;
      typeIndividual: string;
      typeInstitutional: string;
      focusLabel: string;
      newEntryBtn: string;
      returnStartBtn: string;
    };
    footer: {
      copyright: string;
      links: [string, string, string];
    };
  };
}
