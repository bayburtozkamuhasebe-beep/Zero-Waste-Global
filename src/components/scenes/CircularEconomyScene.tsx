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

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-6 pt-20 pb-16 md:px-12 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="mb-6 lg:mb-8 max-w-2xl">
          <p className="text-sm font-medium text-[#2DD4A3] mb-2">
            {t.circularEconomy.kicker}
          </p>
          <h2
            className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.1]"
            style={{ fontSize: 'clamp(1.7rem, 3.1vw, 2.75rem)' }}
          >
            {t.circularEconomy.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left 6 cols: Interactive Proportional ZWG Tokenomics Ring + 4 selectable allocations */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/10 bg-[#0B1A20] p-6 lg:p-7">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Interactive proportional donut diagram */}
              <div className="relative h-48 w-48 shrink-0 flex items-center justify-center">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <span className="font-mono text-[11px] text-[#9EB1B5]">
                    {t.circularEconomy.supplyLabel}
                  </span>
                  <span className="mt-1 font-mono text-2xl font-medium tabular-nums text-[#2DD4A3]">
                    {phase.metricValue}
                  </span>
                  <span className="mt-0.5 text-[11px] leading-tight text-[#CBD9D7]">
                    {phase.shortLabel}
                  </span>
                </div>
              </div>

              {/* 4 clickable ZWG tokenomics allocations */}
              <div className="w-full space-y-2">
                {phases.map((item, idx) => {
                  const isActive = idx === activePhaseIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivePhaseIndex(idx)}
                      aria-current={isActive ? 'step' : undefined}
                      className={`w-full flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-left transition-colors duration-200 cursor-pointer border ${
                        isActive
                          ? 'border-[#2DD4A3]/70 bg-[#102931] text-[#F2F6F4]'
                          : 'border-white/[0.06] bg-[#071216]/70 text-[#9EB1B5] hover:border-white/20 hover:text-[#F2F6F4]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`font-mono text-xs tabular-nums ${
                            isActive ? 'text-[#2DD4A3]' : 'text-[#9EB1B5]'
                          }`}
                        >
                          {item.step}.
                        </span>
                        <span className="text-sm font-medium truncate">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-mono text-xs tabular-nums shrink-0 text-[#CBD9D7]">
                        {item.metricValue}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active ZWG allocation details */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${t.meta.locale}-${phase.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-[#F2F6F4]">
                      {phase.step}. {phase.title}
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-[#2DD4A3]">
                      {phase.tokenAmount}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#CBD9D7]">
                    {phase.description}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#9EB1B5]">
                    <span className="text-[#F2F6F4] font-medium">
                      {t.circularEconomy.economicOutcomeLabel}
                    </span>{' '}
                    {phase.outcome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right 6 cols: Tactile circular material library photo + value-chain proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
            className="lg:col-span-6 flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B1A20]"
          >
            <div className="relative h-52 sm:h-64 lg:h-full lg:min-h-[250px] w-full overflow-hidden">
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
