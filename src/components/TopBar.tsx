import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import type { LanguageCode, TranslationDictionary } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ZwgLogo } from './ZwgLogo';

interface TopBarProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function TopBar({
  activeIndex,
  onNavigate,
  language,
  onLanguageChange,
  t,
}: TopBarProps) {
  const [logoEnlarged, setLogoEnlarged] = useState(false);
  const navChapters = t.chapters.slice(0, 5);

  useEffect(() => {
    if (!logoEnlarged) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLogoEnlarged(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [logoEnlarged]);

  const logoModal =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence>
            {logoEnlarged && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLogoEnlarged(false)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#030A0D]/82 backdrop-blur-md p-4"
                role="dialog"
                aria-modal="true"
                aria-label="Zero Waste Global (ZWG) Logo"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.86, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative flex w-full max-w-sm flex-col items-center rounded-2xl border border-[#E5C773]/38 bg-[#07161C]/96 p-7 sm:p-9 text-center shadow-[0_32px_96px_rgba(0,0,0,0.78)]"
                >
                  <button
                    type="button"
                    onClick={() => setLogoEnlarged(false)}
                    aria-label="Close"
                    className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#050F14]/90 text-[#CBD9D7] transition-colors hover:border-white/35 hover:text-white cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="relative flex items-center justify-center p-2">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(13,154,81,0.18),rgba(203,167,71,0.12)_55%,transparent_75%)] blur-2xl"
                    />
                    <ZwgLogo className="relative h-56 w-56 sm:h-72 sm:w-72 drop-shadow-[0_12px_36px_rgba(0,0,0,0.5)]" />
                  </div>

                  <h4 className="mt-5 font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#F2F6F4]">
                    Zero Waste Global <span className="text-[#2DD4A3]">(ZWG)</span>
                  </h4>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.08] bg-[#060F12]/78 backdrop-blur-md">
        <div className="mx-auto flex h-14 md:h-16 max-w-[1360px] items-center justify-between gap-2 sm:gap-4 md:gap-8 px-3.5 sm:px-6 md:px-12">
          {/* Zone 1: Brand emblem (click to enlarge) + single-line wordmark (home) */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setLogoEnlarged(true)}
              aria-label="Zero Waste Global (ZWG) Logo"
              className="group shrink-0 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C773]/70"
            >
              <ZwgLogo className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(229,199,115,0.32)]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate(0)}
              className="font-display text-sm sm:text-base md:text-lg font-semibold tracking-tight text-[#F2F6F4] hover:text-[#2DD4A3] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <span className="sm:hidden">Zero Waste <span className="text-[#2DD4A3]">ZWG</span></span>
              <span className="hidden sm:inline">Zero Waste Global <span className="text-[#2DD4A3]">(ZWG)</span></span>
            </button>
          </div>

          {/* Zone 2: 5 concise single-line text links */}
          <nav
            aria-label={t.nav.mainAriaLabel}
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium"
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
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#2DD4A3]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Top-right action & language selector */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate(5)}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer max-w-[132px] sm:max-w-none truncate ${
                activeIndex === 5
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

      {logoModal}
    </>
  );
}
