import { motion } from 'motion/react';
import type { LanguageCode, TranslationDictionary } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

interface TopBarProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  t: TranslationDictionary;
}

export function TopBar({
  activeIndex,
  onNavigate,
  language,
  onLanguageChange,
  t,
}: TopBarProps) {
  const navChapters = t.chapters.slice(0, 4);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.08] bg-[#060F12]/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 md:gap-8 px-6 md:px-12">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          type="button"
          onClick={() => onNavigate(0)}
          className="font-display text-base sm:text-lg font-semibold tracking-tight text-[#F2F6F4] hover:text-[#2DD4A3] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
        >
          Zero Waste Global (ZWG)
        </button>

        {/* Zone 2: 4 concise single-line text links */}
        <nav
          aria-label={t.nav.mainAriaLabel}
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          {navChapters.map((chapter, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onNavigate(idx)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#F2F6F4]'
                    : 'text-[#9EB1B5] hover:text-[#F2F6F4]'
                }`}
              >
                {chapter.navLabel}
                {isActive && (
                  <motion.span
                    layoutId="topbar-active-underline"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#2DD4A3]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Top-right action & language selector */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate(4)}
            className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
              activeIndex === 4
                ? 'bg-[#F2F6F4] text-[#060F12]'
                : 'bg-[#2DD4A3] text-[#041512] hover:bg-[#49E3B6]'
            }`}
          >
            {t.nav.joinCta}
          </button>

          <LanguageSwitcher
            language={language}
            onChange={onLanguageChange}
            ariaLabel={t.nav.languageAria}
          />
        </div>
      </div>
    </header>
  );
}
