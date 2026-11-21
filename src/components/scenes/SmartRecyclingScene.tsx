import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';
import { NatureNanoBackdrop } from '../NatureNanoBackdrop';

interface SmartRecyclingSceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SmartRecyclingScene({ t }: SmartRecyclingSceneProps) {
  const streams = t.smartRecycling.streams;
  const [selectedId, setSelectedId] = useState<string>(streams[0].id);
  const [weeklyKg, setWeeklyKg] = useState<number>(8);

  const activeStream =
    streams.find((item) => item.id === selectedId) ?? streams[0];

  const locale = t.meta.locale;
  const annualKg = weeklyKg * 52;
  const annualZwg = Math.round(annualKg * activeStream.zwgPerKg);
  const annualCo2 = Math.round(annualKg * activeStream.co2PerKg);
  const annualWater = Math.round(annualKg * activeStream.waterSavedLitersPerKg);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#061114]">
      {/* Organic nature-inspired botanical nano animation backdrop */}
      <NatureNanoBackdrop />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-20 md:pb-16 md:pr-28 overflow-y-auto md:overflow-hidden">
        {/* Header block */}
        <div className="mb-3 sm:mb-5 lg:mb-8 max-w-2xl">
          <p className="text-xs sm:text-sm font-medium text-[#2DD4A3] mb-1 sm:mb-2">
            {t.smartRecycling.kicker}
          </p>
          <h2
            className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.1] text-balance"
            style={{ fontSize: 'clamp(1.3rem, 3.1vw, 2.75rem)' }}
          >
            {t.smartRecycling.headline}
          </h2>
        </div>

        {/* 12-column balanced split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
          {/* Left 5 cols (desktop): Architectural station photo + caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="hidden lg:flex lg:col-span-5 flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-[#09171C]/78 backdrop-blur-md"
          >
            <div className="relative h-full min-h-[250px] w-full overflow-hidden">
              <ResilientImage
                src={ASSETS.smartHub}
                alt={t.smartRecycling.imageAlt}
                fallbackTitle={t.smartRecycling.imageFallback}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B1A20] via-[#0B1A20]/20 to-transparent"
              />
            </div>

            <div className="p-5 lg:p-6">
              <p className="text-xs text-[#9EB1B5]">
                {t.smartRecycling.stationMeta}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#D5E2E0]">
                {t.smartRecycling.stationDescription}
              </p>
            </div>
          </motion.div>

          {/* Right 7 cols: Interactive Smart Sorting & ZWG Reward Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
            className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-white/12 bg-[#09171C]/80 backdrop-blur-md p-4 sm:p-6 lg:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 sm:pb-4">
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-lg font-semibold text-[#F2F6F4]">
                    {t.smartRecycling.calculatorTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#9EB1B5] mt-0.5 line-clamp-1">
                    {t.smartRecycling.calculatorSubtitle}
                  </p>
                </div>
                <span className="font-mono text-[11px] sm:text-xs tabular-nums text-[#2DD4A3] shrink-0">
                  {t.smartRecycling.rewardRateBadge(activeStream.zwgPerKg)}
                </span>
              </div>

              {/* Interactive segmented filter tabs */}
              <div
                role="tablist"
                aria-label={t.smartRecycling.tabsAriaLabel}
                className="mt-3 sm:mt-5 grid grid-cols-5 sm:flex sm:flex-wrap gap-1 sm:gap-1.5 rounded-lg bg-[#060F12]/90 p-1 border border-white/[0.06]"
              >
                {streams.map((stream) => {
                  const isSelected = stream.id === activeStream.id;
                  return (
                    <button
                      key={stream.id}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      onClick={() => setSelectedId(stream.id)}
                      className={`sm:flex-1 rounded-md px-1.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap truncate cursor-pointer ${
                        isSelected
                          ? 'bg-[#2DD4A3] text-[#041512] font-semibold'
                          : 'text-[#9EB1B5] hover:text-[#F2F6F4]'
                      }`}
                    >
                      {stream.label}
                    </button>
                  );
                })}
              </div>

              {/* Quantity slider */}
              <div className="mt-3.5 sm:mt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-1.5 mb-1.5 sm:mb-2">
                  <label
                    htmlFor="weekly-waste-range"
                    className="text-xs sm:text-sm text-[#CBD9D7]"
                  >
                    {t.smartRecycling.sliderLabel(activeStream.label)}
                  </label>
                  <span className="font-mono text-xs sm:text-base font-medium tabular-nums text-[#F2F6F4]">
                    {weeklyKg} {t.smartRecycling.perWeekUnit}{' '}
                    <span className="text-[11px] sm:text-xs text-[#9EB1B5]">
                      ({annualKg.toLocaleString(locale)} {t.smartRecycling.perYearUnit})
                    </span>
                  </span>
                </div>
                <input
                  id="weekly-waste-range"
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={weeklyKg}
                  onChange={(e) => setWeeklyKg(Number(e.target.value))}
                  className="zw-range w-full"
                />
              </div>

              {/* Live animated ZWG & ecological metrics grid */}
              <div className="mt-3.5 sm:mt-6 grid grid-cols-3 gap-2.5 sm:gap-4 border-y border-white/10 py-3 sm:py-5">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.zwgTitle}
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-mono text-sm sm:text-2xl font-medium tabular-nums text-[#2DD4A3] truncate">
                    {annualZwg.toLocaleString(locale)} ZWG
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.zwgSub}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.co2Title}
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-mono text-sm sm:text-2xl font-medium tabular-nums text-[#F2F6F4] truncate">
                    {annualCo2.toLocaleString(locale)} kg
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.co2Sub}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.waterTitle}
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-mono text-sm sm:text-2xl font-medium tabular-nums text-[#F2F6F4] truncate">
                    {annualWater.toLocaleString(locale)} L
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.smartRecycling.metrics.waterSub}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic sensor & material rebirth details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${locale}-${activeStream.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="mt-3 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-xs sm:text-sm"
              >
                <div>
                  <p className="text-[11px] sm:text-xs font-medium text-[#2DD4A3]">
                    {t.smartRecycling.sensorHeading}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm leading-snug sm:leading-relaxed text-[#CBD9D7] line-clamp-2 sm:line-clamp-none">
                    {activeStream.sensorMethod}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-medium text-[#2DD4A3]">
                    {t.smartRecycling.lifecycleHeading}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm leading-snug sm:leading-relaxed text-[#CBD9D7] line-clamp-2 sm:line-clamp-none">
                    {activeStream.rebornAs}. {activeStream.oceanRiskNote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
