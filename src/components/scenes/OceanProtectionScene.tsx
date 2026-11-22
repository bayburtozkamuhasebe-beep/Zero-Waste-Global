import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronLeft, ChevronRight, Expand, Leaf, ShieldCheck, X } from 'lucide-react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';

interface OceanProtectionSceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_SIZE = 4;

export function OceanProtectionScene({ t }: OceanProtectionSceneProps) {
  const nfts = t.oceanProtection.nfts;
  const [activeId, setActiveId] = useState<string>(nfts[0].id);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useState(1);
  const [reservedIds, setReservedIds] = useState<Record<string, boolean>>({});
  const [isZoomed, setIsZoomed] = useState(false);

  const totalPages = Math.max(1, Math.ceil(nfts.length / PAGE_SIZE));
  const safePageIndex = Math.min(pageIndex, totalPages - 1);
  const visibleNfts = nfts.slice(
    safePageIndex * PAGE_SIZE,
    safePageIndex * PAGE_SIZE + PAGE_SIZE,
  );

  const activeIndex = Math.max(
    0,
    nfts.findIndex((item) => item.id === activeId),
  );
  const activeNft = nfts[activeIndex] ?? nfts[0];
  const isReserved = Boolean(reservedIds[activeNft.id]);
  const locale = t.meta.locale;

  const goToPage = useCallback(
    (nextPage: number) => {
      const wrapped = (nextPage + totalPages) % totalPages;
      setPageDirection(wrapped >= safePageIndex ? 1 : -1);
      setPageIndex(wrapped);
      const firstOfPage = nfts[wrapped * PAGE_SIZE];
      if (firstOfPage) {
        setActiveId(firstOfPage.id);
      }
    },
    [nfts, safePageIndex, totalPages],
  );

  const openNftCenter = (id: string) => {
    setActiveId(id);
    setIsZoomed(true);
  };

  const stepNft = useCallback(
    (delta: number) => {
      const nextIndex = (activeIndex + delta + nfts.length) % nfts.length;
      const nextPage = Math.floor(nextIndex / PAGE_SIZE);
      setActiveId(nfts[nextIndex].id);
      if (nextPage !== safePageIndex) {
        setPageDirection(delta >= 0 ? 1 : -1);
        setPageIndex(nextPage);
      }
    },
    [activeIndex, nfts, safePageIndex],
  );

  useEffect(() => {
    if (!isZoomed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setIsZoomed(false);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        stepNft(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        event.stopPropagation();
        stepNft(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [isZoomed, stepNft]);

  const toggleReserve = (id: string) => {
    setReservedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const modalPortal =
    typeof document !== 'undefined'
      ? createPortal(
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsZoomed(false)}
                onWheel={(event) => event.stopPropagation()}
                onTouchStart={(event) => event.stopPropagation()}
                onTouchEnd={(event) => event.stopPropagation()}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030A0D]/82 backdrop-blur-md p-4 sm:p-6"
              >
                <div className="relative flex w-full max-w-[360px] sm:max-w-[460px] items-center justify-center">
                  {/* Previous NFT arrow */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      stepNft(-1);
                    }}
                    aria-label={t.nav.prevAria}
                    className="hidden sm:flex absolute -left-14 z-10 h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#07161C]/90 text-[#F2F6F4] hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Centered Enlarged NFT Card */}
                  <motion.div
                    initial={{ scale: 0.88, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.26, ease: EASE }}
                    onClick={(event) => event.stopPropagation()}
                    className="relative w-full rounded-2xl border border-white/18 bg-[#07161C]/98 p-3 sm:p-4 shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
                  >
                    <span className="absolute top-5 left-5 z-20 rounded-md bg-[#050F14]/82 px-2 py-1 font-mono text-[11px] font-medium tabular-nums text-[#F2F6F4]/90 border border-white/15">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(nfts.length).padStart(2, '0')}
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsZoomed(false)}
                      aria-label="Close"
                      className="absolute top-5 right-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#050F14]/85 text-[#F2F6F4] border border-white/20 hover:border-[#2DD4A3] hover:text-[#2DD4A3] transition-colors cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`zoom-${locale}-${activeNft.id}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: EASE }}
                      >
                        {/* Natural 1:1 Enlarged Artwork */}
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#050E12] border border-white/10">
                          <ResilientImage
                            src={activeNft.image}
                            alt={`${activeNft.name} — ${activeNft.collection}`}
                            fallbackTitle={activeNft.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Clean Collector Info Footer */}
                        <div className="mt-3 px-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-[11px] sm:text-xs text-[#9EB1B5] truncate">
                                <span className="font-mono text-[#2DD4A3]">{activeNft.tokenId}</span>
                                {' · '}
                                {activeNft.collection}
                                {' · '}
                                <span className="text-[#E5C773]">{activeNft.rarity}</span>
                              </p>
                              <h4 className="mt-0.5 font-display text-base sm:text-xl font-semibold text-[#F2F6F4] truncate">
                                {activeNft.name}
                              </h4>
                            </div>
                            <p className="font-mono text-sm sm:text-base font-semibold tabular-nums text-[#E5C773] shrink-0">
                              {activeNft.zwgPrice}
                            </p>
                          </div>

                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#CBD9D7]">
                            {activeNft.summary}
                          </p>

                          <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                            <div className="min-w-0">
                              <p className="text-[10px] text-[#9EB1B5] truncate">
                                {t.oceanProtection.metrics.impact} · {activeNft.edition}
                              </p>
                              <p className="font-mono text-xs font-semibold tabular-nums text-[#2DD4A3] truncate">
                                {activeNft.natureImpact}
                              </p>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => stepNft(-1)}
                                aria-label={t.nav.prevAria}
                                className="flex sm:hidden h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#050F14] text-[#F2F6F4] cursor-pointer"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => stepNft(1)}
                                aria-label={t.nav.nextAria}
                                className="flex sm:hidden h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#050F14] text-[#F2F6F4] cursor-pointer"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleReserve(activeNft.id)}
                                className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-200 cursor-pointer border whitespace-nowrap ${
                                  isReserved
                                    ? 'border-[#2DD4A3]/50 bg-[#2DD4A3]/15 text-[#2DD4A3]'
                                    : 'border-[#2DD4A3] bg-[#2DD4A3] text-[#041512] hover:bg-[#3CE0B0]'
                                }`}
                              >
                                {isReserved && <Check className="h-3.5 w-3.5 shrink-0" />}
                                <span>
                                  {isReserved
                                    ? t.oceanProtection.reservedCta
                                    : t.oceanProtection.reserveCta}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Next NFT arrow */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      stepNft(1);
                    }}
                    aria-label={t.nav.nextAria}
                    className="hidden sm:flex absolute -right-14 z-10 h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#07161C]/90 text-[#F2F6F4] hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#051015]">
      {/* Full-bleed nature conservation valley backdrop */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.72 }}
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

      {/* Deep forest-obsidian scrim so glowing NFT artworks remain the focal point */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#051013]/96 via-[#051013]/82 to-[#051013]/72"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-18 md:pb-14 md:pr-28 overflow-y-auto md:overflow-hidden">
        {/* Compact Full-Width Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-1.5 lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#2DD4A3] mb-0.5 sm:mb-1.5">
              {t.oceanProtection.kicker}
            </p>
            <h2
              className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.2rem, 2.55vw, 2.35rem)' }}
            >
              {t.oceanProtection.headline}
            </h2>
          </div>
          <p className="hidden sm:block max-w-md text-xs md:text-sm leading-relaxed text-[#D0DFDD] lg:text-right">
            {t.oceanProtection.description}
          </p>
        </div>

        {/* Editorial Nature Slogan directly above the NFT showcase */}
        <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-2.5 sm:gap-4 border-y border-white/10 bg-[#07161C]/55 backdrop-blur-sm py-2 sm:py-2.5 px-3 sm:px-5 rounded-xl">
          <span
            aria-hidden="true"
            className="hidden sm:block h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-[#2DD4A3]/55"
          />
          <Leaf
            aria-hidden="true"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#2DD4A3]"
          />
          <p className="font-display text-xs sm:text-sm md:text-base font-medium tracking-wide text-center text-[#EEF7F4] leading-snug">
            “{t.oceanProtection.slogan}”
          </p>
          <span
            aria-hidden="true"
            className="hidden sm:block h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-[#E5C773]/55"
          />
        </div>

        {/* Enlarged Full-Width 32-Edition Nature NFT Gallery (8 Pages × 4 Large Cards) */}
        <div className="mt-2.5 sm:mt-4">
          <div className="flex items-center justify-between gap-3 mb-2 sm:mb-2.5">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-[#F2F6F4] tracking-tight truncate">
              {t.oceanProtection.selectorLabel}
            </h3>

            {/* Sleek Responsive Multi-Page Gallery Switcher */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => goToPage(safePageIndex - 1)}
                aria-label={t.nav.prevAria}
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-white/15 bg-[#07161C]/88 text-[#D0DFDD] hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Compact page indicator on mobile */}
              <span className="flex md:hidden h-7 items-center px-2 rounded-lg border border-white/12 bg-[#07161C]/88 font-mono text-[11px] font-semibold tabular-nums text-[#2DD4A3]">
                {String(safePageIndex + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>

              {/* Direct numbered page buttons on desktop */}
              <div className="hidden md:flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const isCurrent = idx === safePageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToPage(idx)}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={`h-8 min-w-7 px-1.5 rounded-lg font-mono text-xs font-semibold tabular-nums transition-colors cursor-pointer border ${
                        isCurrent
                          ? 'border-[#2DD4A3] bg-[#2DD4A3] text-[#041512]'
                          : 'border-white/15 bg-[#07161C]/88 text-[#CBD9D7] hover:border-white/35 hover:text-[#F2F6F4]'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => goToPage(safePageIndex + 1)}
                aria-label={t.nav.nextAria}
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-white/15 bg-[#07161C]/88 text-[#D0DFDD] hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`nft-page-${safePageIndex}`}
              initial={{ opacity: 0, x: pageDirection * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: pageDirection * -24 }}
              transition={{ duration: 0.24, ease: EASE }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4"
            >
              {visibleNfts.map((item) => {
                const isSelected = item.id === activeNft.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => openNftCenter(item.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openNftCenter(item.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.name} ${item.tokenId}`}
                    className={`group relative text-left rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer bg-[#07161C]/90 ${
                      isSelected
                        ? 'border-[#2DD4A3] shadow-[0_0_28px_rgba(45,212,163,0.22)] -translate-y-0.5'
                        : 'border-white/14 hover:border-white/35'
                    }`}
                  >
                    {/* Large Vivid NFT Artwork Frame */}
                    <div className="relative aspect-[4/3] sm:aspect-square max-h-[120px] sm:max-h-[215px] xl:max-h-[255px] w-full overflow-hidden bg-[#050E12]">
                      <ResilientImage
                        src={item.image}
                        alt={`${item.name} — ${item.collection} ${item.tokenId}`}
                        fallbackTitle={item.name}
                        className={`h-full w-full object-cover object-center transition-transform duration-500 ${
                          isSelected ? 'scale-[1.04]' : 'group-hover:scale-[1.06]'
                        }`}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#050F14]/92 via-[#050F14]/40 to-transparent"
                      />
                      <div className="absolute bottom-1.5 inset-x-2 sm:bottom-2 sm:inset-x-3 flex items-baseline justify-between gap-1.5">
                        <span className="font-mono text-[11px] sm:text-xs font-semibold tabular-nums text-[#F2F6F4]">
                          {item.tokenId}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium text-[#E5C773] truncate">
                          {item.rarity}
                        </span>
                      </div>

                      {/* Visual Expand Hint Indicator */}
                      <span
                        aria-hidden="true"
                        className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-md bg-[#050F14]/75 text-[#F2F6F4]/90 border border-white/15 opacity-75 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                      >
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Card Caption */}
                    <div className="px-2.5 py-2 sm:px-3.5 sm:py-3">
                      <p
                        className={`font-display text-xs sm:text-sm md:text-[15px] font-semibold leading-tight truncate ${
                          isSelected ? 'text-[#2DD4A3]' : 'text-[#F2F6F4]'
                        }`}
                      >
                        {item.name}
                      </p>
                      <div className="mt-1 flex items-baseline justify-between gap-2">
                        <span className="font-mono text-[11px] sm:text-xs font-semibold tabular-nums text-[#E5C773] truncate">
                          {item.zwgPrice}
                        </span>
                        <span className="hidden sm:inline text-[11px] text-[#9EB1B5] truncate">
                          {item.edition}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sleek Horizontal Collector Spotlight & Whitelist Bar */}
        <div className="mt-3 sm:mt-4 rounded-xl border border-white/12 bg-[#07161C]/92 backdrop-blur-md px-3.5 py-3 sm:px-5 sm:py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${locale}-${activeNft.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-center"
            >
              {/* Left 5 cols: Active NFT Summary & Provenance */}
              <div className="lg:col-span-5 min-w-0">
                <p className="text-[11px] sm:text-xs text-[#9EB1B5] truncate">
                  <span className="font-mono text-[#2DD4A3]">{activeNft.tokenId}</span>
                  {' · '}
                  {activeNft.collection}
                  {' · '}
                  <span className="text-[#E5C773]">{activeNft.rarity}</span>
                </p>
                <p className="mt-1 text-[11px] sm:text-sm leading-snug text-[#CBD9D7] line-clamp-2">
                  {activeNft.summary}
                </p>
                <p className="hidden sm:flex items-center gap-1.5 mt-1.5 text-xs text-[#9EB1B5] truncate">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#2DD4A3]" />
                  <span className="truncate">
                    <span className="text-[#F2F6F4] font-medium">
                      {t.oceanProtection.provenanceLabel}
                    </span>{' '}
                    {activeNft.provenance}
                  </span>
                </p>
              </div>

              {/* Middle 4 cols: 3 Tabular Collector Metrics */}
              <div className="lg:col-span-4 grid grid-cols-3 gap-2.5 sm:gap-4 border-y lg:border-y-0 lg:border-x border-white/10 py-2 lg:py-0 lg:px-5">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.oceanProtection.metrics.price}
                  </p>
                  <p className="mt-0.5 font-mono text-xs sm:text-sm font-semibold tabular-nums text-[#E5C773] truncate">
                    {activeNft.zwgPrice}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.oceanProtection.metrics.impact}
                  </p>
                  <p className="mt-0.5 font-mono text-xs sm:text-sm font-semibold tabular-nums text-[#2DD4A3] truncate">
                    {activeNft.natureImpact}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#9EB1B5] truncate">
                    {t.oceanProtection.metrics.edition}
                  </p>
                  <p className="mt-0.5 font-mono text-xs sm:text-sm font-semibold tabular-nums text-[#F2F6F4] truncate">
                    {activeNft.edition}
                  </p>
                </div>
              </div>

              {/* Right 3 cols: Whitelist Reserve Action */}
              <div className="lg:col-span-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleReserve(activeNft.id)}
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer border whitespace-nowrap ${
                    isReserved
                      ? 'border-[#2DD4A3]/50 bg-[#2DD4A3]/15 text-[#2DD4A3]'
                      : 'border-[#2DD4A3] bg-[#2DD4A3] text-[#041512] hover:bg-[#3CE0B0]'
                  }`}
                >
                  {isReserved && <Check className="h-4 w-4 shrink-0" />}
                  <span>
                    {isReserved
                      ? t.oceanProtection.reservedCta
                      : t.oceanProtection.reserveCta}
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {modalPortal}
    </div>
  );
}
