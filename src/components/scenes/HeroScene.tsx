import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';
import { AnimatedEcoGlobe } from '../AnimatedEcoGlobe';

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
      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-between px-6 pt-20 pb-16 md:px-12 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 7 cols: Headline, narrative, primary CTA */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className="text-xs sm:text-sm font-semibold text-[#5EEAD4] tracking-wide mb-4 drop-shadow-[0_2px_10px_rgba(4,12,16,0.8)]"
            >
              {t.hero.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
              className="font-display font-semibold tracking-tight text-[#F6FAF8] leading-[1.06] drop-shadow-[0_4px_20px_rgba(4,12,16,0.75)]"
              style={{ fontSize: 'clamp(2.1rem, 4.3vw, 3.85rem)' }}
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
              className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#E4EFEA] drop-shadow-[0_2px_14px_rgba(4,12,16,0.85)]"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <button
                type="button"
                onClick={onExplore}
                className="group inline-flex items-center gap-3 rounded-lg bg-[#2DD4A3] px-6 py-3.5 text-sm font-semibold text-[#041512] shadow-[0_8px_24px_rgba(4,15,18,0.45)] transition-colors duration-200 hover:bg-[#49E3B6] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </button>

              <span className="text-xs text-[#DCE8E4] hidden sm:inline drop-shadow-[0_2px_8px_rgba(4,12,16,0.85)]">
                {t.hero.navigationHint}
              </span>
            </motion.div>
          </div>

          {/* Right 5 cols: Signature Animated Recycling Earth Globe */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatedEcoGlobe
              alt={t.hero.imageAlt}
              fallbackTitle={t.hero.imageFallback}
            />
          </div>
        </div>

        {/* Bottom 3-column quantitative proof strip separated by hairline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.46, ease: EASE }}
          className="mt-6 grid grid-cols-1 gap-5 border-t border-white/20 pt-5 sm:grid-cols-3 md:gap-10"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-xl md:text-2xl lg:text-3xl font-medium tabular-nums text-[#F6FAF8] drop-shadow-[0_2px_12px_rgba(4,12,16,0.8)]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm text-[#D6E5E0] drop-shadow-[0_2px_8px_rgba(4,12,16,0.85)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
