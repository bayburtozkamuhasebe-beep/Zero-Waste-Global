import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';

interface CircularEconomySceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function CircularEconomyScene({ t }: CircularEconomySceneProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const phases = t.circularEconomy.phases;
  const phase = phases[activePhaseIndex] ?? phases[0];

  // Proportional SVG donut ring math: radius = 84, circumference = 2 * pi * 84 ≈ 527.8
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const priorPercent = phases
    .slice(0, activePhaseIndex)
    .reduce((sum, item) => sum + item.sharePercent, 0);
  const activeArcLength = Math.max(
    18,
    (phase.sharePercent / 100) * circumference - 12,
  );
  const activeArcOffset = -(priorPercent / 100) * circumference;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#061014]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_25%_55%,rgba(45,212,163,0.07),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-20 md:pb-16 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="mb-3 sm:mb-6 lg:mb-8 max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#2DD4A3] mb-1 sm:mb-2">
            {t.circularEconomy.kicker}
          </p>
          <h2
            className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.1] text-balance"
            style={{ fontSize: 'clamp(1.3rem, 3.1vw, 2.75rem)' }}
          >
            {t.circularEconomy.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left 6 cols: Interactive Proportional ZWG Tokenomics Ring + 4 selectable allocations */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/10 bg-[#0B1A20] p-4 sm:p-6 lg:p-7">
            <div className="flex flex-row items-center gap-3.5 sm:gap-6">
              {/* Interactive proportional donut diagram */}
              <div className="relative h-28 w-28 sm:h-44 sm:w-44 lg:h-48 lg:w-48 shrink-0 aspect-square flex items-center justify-center">
                <svg
                  viewBox="0 0 210 210"
                  className="h-full w-full -rotate-90"
                  aria-hidden="true"
                >
                  {/* Base track */}
                  <circle
                    cx="105"
                    cy="105"
                    r={radius}
                    fill="none"
                    stroke="rgba(242,246,244,0.1)"
                    strokeWidth="7"
                  />
                  {/* Active proportional ZWG allocation arc */}
                  <motion.circle
                    cx="105"
                    cy="105"
                    r={radius}
                    fill="none"
                    stroke="#2DD4A3"
                    strokeWidth="7"
                    strokeLinecap="round"
                    animate={{
                      strokeDasharray: `${activeArcLength} ${circumference}`,
                      strokeDashoffset: activeArcOffset,
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                  />
                  {/* Inner subtle hairline ring */}
                  <circle
                    cx="105"
                    cy="105"
                    r="62"
                    fill="none"
                    stroke="rgba(242,246,244,0.08)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                  />
                </svg>

                {/* Center readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4">
                  <span className="font-mono text-[9px] sm:text-[11px] text-[#9EB1B5] truncate max-w-full">
                    {t.circularEconomy.supplyLabel}
                  </span>
                  <span className="mt-0.5 sm:mt-1 font-mono text-base sm:text-2xl font-medium tabular-nums text-[#2DD4A3]">
                    {phase.metricValue}
                  </span>
                  <span className="mt-0.5 text-[9px] sm:text-[11px] leading-tight text-[#CBD9D7] line-clamp-1">
                    {phase.shortLabel}
                  </span>
                </div>
              </div>

              {/* 4 clickable ZWG tokenomics allocations */}
              <div className="w-full min-w-0 space-y-1.5 sm:space-y-2">
                {phases.map((item, idx) => {
                  const isActive = idx === activePhaseIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivePhaseIndex(idx)}
                      aria-current={isActive ? 'step' : undefined}
                      className={`w-full flex items-center justify-between gap-2 sm:gap-3 rounded-lg px-2.5 py-2 sm:px-4 sm:py-3 text-left transition-colors duration-200 cursor-pointer border ${
                        isActive
                          ? 'border-[#2DD4A3]/70 bg-[#102931] text-[#F2F6F4]'
                          : 'border-white/[0.06] bg-[#071216]/70 text-[#9EB1B5] hover:border-white/20 hover:text-[#F2F6F4]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                        <span
                          className={`font-mono text-[10px] sm:text-xs tabular-nums shrink-0 ${
                            isActive ? 'text-[#2DD4A3]' : 'text-[#9EB1B5]'
                          }`}
                        >
                          {item.step}.
                        </span>
                        <span className="text-[11px] sm:text-sm font-medium truncate">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs tabular-nums shrink-0 text-[#CBD9D7]">
                        {item.metricValue}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active ZWG allocation details */}
            <div className="mt-3.5 sm:mt-6 border-t border-white/10 pt-3 sm:pt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${t.meta.locale}-${phase.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-lg font-semibold text-[#F2F6F4]">
                      {phase.step}. {phase.title}
                    </h3>
                    <span className="font-mono text-[11px] sm:text-xs tabular-nums text-[#2DD4A3]">
                      {phase.tokenAmount}
                    </span>
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-snug sm:leading-relaxed text-[#CBD9D7] line-clamp-2 sm:line-clamp-none">
                    {phase.description}
                  </p>
                  <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-[#9EB1B5] line-clamp-2 sm:line-clamp-none">
                    <span className="text-[#F2F6F4] font-medium">
                      {t.circularEconomy.economicOutcomeLabel}
                    </span>{' '}
                    {phase.outcome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile compact proof strip */}
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-[#0B1A20] p-3.5 lg:hidden">
            {t.circularEconomy.proofStats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="font-mono text-base sm:text-xl font-medium tabular-nums text-[#F2F6F4] truncate">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-[#9EB1B5] line-clamp-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right 6 cols (desktop): Tactile circular material library photo + value-chain proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
            className="hidden lg:flex lg:col-span-6 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B1A20]"
          >
            <div className="relative h-full min-h-[250px] w-full overflow-hidden">
              <ResilientImage
                src={ASSETS.circularCraft}
                alt={t.circularEconomy.imageAlt}
                fallbackTitle={t.circularEconomy.imageFallback}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B1A20] via-transparent to-transparent"
              />
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 border-b border-white/10 pb-4">
                {t.circularEconomy.proofStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-2xl font-medium tabular-nums text-[#F2F6F4]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-[#9EB1B5]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#CBD9D7]">
                {t.circularEconomy.closingNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
