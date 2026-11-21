import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';
import { AnimatedEcoGlobe } from '../AnimatedEcoGlobe';
import { SpinningGoldCoin } from '../SpinningGoldCoin';

interface HeroSceneProps {
  onExplore: () => void;
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroScene({ onExplore, t }: HeroSceneProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Prominent natural landscape backdrop with subtle motion */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.85 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        className="absolute inset-0"
      >
        <ResilientImage
          src={ASSETS.heroOcean}
          alt={t.hero.imageAlt}
          fallbackTitle={t.hero.imageFallback}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Light, measured directional veil so the background stays prominent while copy stays legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#060F12]/58 via-[#060F12]/28 to-[#060F12]/12"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#060F12]/62 via-transparent to-[#060F12]/24"
      />

      {/* Main editorial split: Left proposition + Right Animated Eco Globe */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-between px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-20 md:pb-16 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center">
          {/* Right 5 cols on desktop, top visual anchor on mobile: Signature Animated Recycling Earth Globe */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center py-1 lg:py-0">
            <AnimatedEcoGlobe
              alt={t.hero.imageAlt}
              fallbackTitle={t.hero.imageFallback}
            />
          </div>

          {/* Left 7 cols on desktop: Headline, narrative, primary CTA */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="text-[11px] sm:text-sm font-semibold text-[#5EEAD4] tracking-wide mb-2 lg:mb-4 drop-shadow-[0_2px_10px_rgba(4,12,16,0.8)]"
            >
              {t.hero.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="font-display font-semibold tracking-tight text-[#F6FAF8] leading-[1.08] drop-shadow-[0_4px_20px_rgba(4,12,16,0.75)] text-balance"
              style={{ fontSize: 'clamp(1.45rem, 4.3vw, 3.85rem)' }}
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
              className="mt-2.5 lg:mt-5 mx-auto lg:mx-0 max-w-xl text-xs sm:text-base md:text-lg leading-relaxed text-[#E4EFEA] drop-shadow-[0_2px_14px_rgba(4,12,16,0.85)] line-clamp-3 sm:line-clamp-none"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
              className="mt-4 lg:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-5"
            >
              <button
                type="button"
                onClick={onExplore}
                className="group inline-flex items-center gap-2.5 lg:gap-3 rounded-lg bg-[#2DD4A3] px-5 py-2.5 lg:px-6 lg:py-3.5 text-xs sm:text-sm font-semibold text-[#041512] shadow-[0_8px_24px_rgba(4,15,18,0.45)] transition-colors duration-200 hover:bg-[#49E3B6] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </button>

              <span className="text-xs text-[#DCE8E4] hidden lg:inline drop-shadow-[0_2px_8px_rgba(4,12,16,0.85)]">
                {t.hero.navigationHint}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom 3-column quantitative proof strip separated by hairline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="mt-3 lg:mt-6 grid grid-cols-3 gap-2 sm:gap-5 border-t border-white/20 pt-3 lg:pt-5 md:gap-8"
        >
          {t.hero.stats.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 min-w-0">
              <SpinningGoldCoin
                delay={idx * 0.6}
                className="h-6 w-6 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs sm:text-xl md:text-2xl lg:text-3xl font-medium tabular-nums text-[#F6FAF8] drop-shadow-[0_2px_12px_rgba(4,12,16,0.8)] truncate">
                  {stat.value}
                </p>
                <p className="mt-0.5 lg:mt-1 text-[9px] sm:text-xs md:text-sm leading-tight text-[#D6E5E0] drop-shadow-[0_2px_8px_rgba(4,12,16,0.85)] line-clamp-2">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
