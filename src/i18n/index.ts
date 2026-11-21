import { tr } from './translations/tr';
import { en } from './translations/en';
import { ja } from './translations/ja';
import { de } from './translations/de';
import { fr } from './translations/fr';
import type { LanguageCode, TranslationDictionary } from './types';

export { LANGUAGE_OPTIONS } from './types';
export type { LanguageCode, LanguageOption, TranslationDictionary } from './types';

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  tr,
  en,
  ja,
  de,
  fr,
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang];
}
