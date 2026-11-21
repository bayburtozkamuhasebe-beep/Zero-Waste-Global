import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';

interface OceanProtectionSceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function OceanProtectionScene({ t }: OceanProtectionSceneProps) {
  const corridors = t.oceanProtection.corridors;
  const [activeId, setActiveId] = useState<string>(corridors[0].id);
  const corridor =
    corridors.find((item) => item.id === activeId) ?? corridors[0];
  const locale = t.meta.locale;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#051015]">
      {/* Full-bleed nature conservation valley & forest photography */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.75 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
        className="absolute inset-0"
      >
        <ResilientImage
          src={ASSETS.natureHabitat}
          alt={t.oceanProtection.imageAlt}
          fallbackTitle={t.oceanProtection.imageFallback}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Deep forest-obsidian contrast scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#051013]/96 via-[#051013]/78 to-[#051013]/68"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-6 pt-20 pb-16 md:px-12 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left 7 cols: Title, mission narrative, and nature reserve selector */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#2DD4A3] mb-2">
              {t.oceanProtection.kicker}
            </p>
            <h2
              className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.08]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.1rem)' }}
            >
              {t.oceanProtection.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-[#D0DFDD]">
              {t.oceanProtection.description}
            </p>

            {/* Conservation zone selector buttons */}
            <div className="mt-7">
              <p className="text-xs text-[#9EB1B5] mb-3">
                {t.oceanProtection.selectorLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {corridors.map((item) => {
                  const isSelected = item.id === corridor.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer border ${
                        isSelected
                          ? 'border-[#2DD4A3] bg-[#2DD4A3] text-[#041512] font-semibold'
                          : 'border-white/15 bg-[#07151B]/80 text-[#D0DFDD] hover:border-white/35 hover:text-[#F2F6F4]'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 cols: Animated regional nature telemetry & watershed diagram card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/12 bg-[#07161C]/90 backdrop-blur-md p-6 lg:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${locale}-${corridor.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#F2F6F4]">
                        {corridor.name}
                      </h3>
                      <p className="text-xs text-[#9EB1B5] mt-0.5">
                        {corridor.regionLabel} · <span className="font-mono">{corridor.coordinates}</span>
                      </p>
                    </div>
                  </div>

                  {/* Animated nature topography & watershed protection SVG schematic */}
                  <div className="my-5 rounded-lg bg-[#050E12] border border-white/[0.06] p-4">
                    <svg
                      viewBox="0 0 360 88"
                      className="w-full h-20"
                      aria-hidden="true"
                    >
                      {/* Topographic valley contour lines */}
                      <motion.path
                        d="M 10 68 Q 85 48, 175 56 T 350 42"
                        fill="none"
                        stroke="rgba(158,177,181,0.22)"
                        strokeWidth="1.25"
                        strokeDasharray="6 6"
                        initial={{ pathOffset: 0 }}
                        animate={{ pathOffset: -1 }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.path
                        d="M 10 46 Q 95 26, 185 38 T 350 24"
                        fill="none"
                        stroke="rgba(158,177,181,0.26)"
                        strokeWidth="1.25"
                        strokeDasharray="6 6"
                        initial={{ pathOffset: 0 }}
                        animate={{ pathOffset: -1 }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      />
                      {/* Protected forest & watershed canopy perimeter */}
                      <motion.path
                        d="M 110 74 C 135 20, 225 20, 250 74"
                        fill="none"
                        stroke="#2DD4A3"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.75, ease: EASE }}
                      />
                      <motion.path
                        d="M 142 74 C 158 38, 202 38, 218 74"
                        fill="none"
                        stroke="rgba(45,212,163,0.45)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, ease: EASE }}
                      />
                      {/* Sensor monitoring nodes */}
                      <circle cx="110" cy="74" r="3.5" fill="#F2F6F4" />
                      <circle cx="180" cy="34" r="4.5" fill="#2DD4A3" />
                      <circle cx="250" cy="74" r="3.5" fill="#F2F6F4" />
                    </svg>
                    <div className="mt-1 flex items-center justify-between gap-2 text-[11px] text-[#9EB1B5]">
                      <span>{t.oceanProtection.schematic.inflow}</span>
                      <span className="text-[#2DD4A3]">{t.oceanProtection.schematic.barrier}</span>
                      <span>{t.oceanProtection.schematic.protectedSea}</span>
                    </div>
                  </div>

                  {/* Regional metrics */}
                  <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-[#9EB1B5]">{t.oceanProtection.metrics.intercepted}</p>
                      <p className="mt-1 font-mono text-lg font-medium tabular-nums text-[#2DD4A3]">
                        {corridor.interceptedTonsPerYear}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9EB1B5]">{t.oceanProtection.metrics.barriers}</p>
                      <p className="mt-1 font-mono text-lg font-medium tabular-nums text-[#F2F6F4]">
                        {t.oceanProtection.metrics.barriersUnit(corridor.activeBarriers)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9EB1B5]">{t.oceanProtection.metrics.grantPool}</p>
                      <p className="mt-1 font-mono text-lg font-medium tabular-nums text-[#F2F6F4]">
                        {corridor.zwgGrantPool}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-[#CBD9D7]">
                    <p>{corridor.summary}</p>
                    <p className="text-[#9EB1B5]">
                      <span className="text-[#F2F6F4] font-medium">{t.oceanProtection.habitatLabel}</span>{' '}
                      {corridor.habitatFocus}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
