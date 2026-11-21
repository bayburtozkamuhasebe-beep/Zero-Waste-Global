import { ArrowDown, ArrowUp } from 'lucide-react';
import type { TranslationDictionary } from '../i18n';

interface ChapterRailProps {
  activeIndex: number;
  total: number;
  onNavigate: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  t: TranslationDictionary;
}

export function ChapterRail({
  activeIndex,
  total,
  onNavigate,
  onPrev,
  onNext,
  t,
}: ChapterRailProps) {
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;
  const nextChapter = !isLast ? t.chapters[activeIndex + 1] : null;
  const currentChapter = t.chapters[activeIndex];

  return (
    <>
      {/* Right-edge chapter index rail (desktop) */}
      <aside
        aria-label={t.nav.chapterRailAria}
        className="fixed right-5 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-4"
      >
        <span className="font-mono text-xs tabular-nums text-[#9EB1B5] tracking-wider">
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        <div className="flex flex-col items-end gap-2.5">
          {t.chapters.map((chapter, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onNavigate(idx)}
                aria-label={`${chapter.index}. ${chapter.shortTitle}`}
                aria-current={isActive ? 'step' : undefined}
                className="group flex items-center gap-3 py-1 cursor-pointer"
              >
                <span
                  className={`text-xs transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#F2F6F4] opacity-100 translate-x-0'
                      : 'text-[#9EB1B5] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {chapter.navLabel}
                </span>
                <span
                  className={`block h-[2px] transition-all duration-300 ${
                    isActive
                      ? 'w-7 bg-[#2DD4A3]'
                      : 'w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/60'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            aria-label={t.nav.prevAria}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-[#0B191E]/80 text-[#F2F6F4] transition-colors duration-200 hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={isLast}
            aria-label={t.nav.nextAria}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-[#0B191E]/80 text-[#F2F6F4] transition-colors duration-200 hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ArrowDown className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </aside>

      {/* Bottom fixed bar: chapter indicator + directional cue */}
      <div className="fixed bottom-2.5 md:bottom-4 left-0 right-0 z-30 pointer-events-none px-4 md:px-12">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3">
          {/* Mobile compact prev/next + chapter readout */}
          <div className="flex md:hidden w-full items-center justify-between gap-2 pointer-events-auto rounded-lg border border-white/10 bg-[#071419]/88 backdrop-blur-md px-2.5 py-1.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[11px] tabular-nums text-[#2DD4A3] shrink-0">
                {String(activeIndex + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-medium text-[#D0DFDD] truncate">
                {currentChapter.navLabel}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={onPrev}
                disabled={isFirst}
                aria-label={t.nav.prevAria}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#0A171C] text-[#F2F6F4] disabled:opacity-30 cursor-pointer"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={onNext}
                disabled={isLast}
                aria-label={t.nav.nextAria}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#0A171C] text-[#F2F6F4] disabled:opacity-30 cursor-pointer"
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Desktop subtle chapter label */}
          <div className="hidden md:flex items-center gap-2.5 text-xs text-[#9EB1B5]">
            <span className="font-mono tabular-nums text-[#F2F6F4]/80">
              {currentChapter.index}
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentChapter.shortTitle}</span>
          </div>

          {nextChapter ? (
            <button
              type="button"
              onClick={onNext}
              className="pointer-events-auto group hidden md:inline-flex items-center gap-2.5 text-xs font-medium text-[#C8D8D6] hover:text-[#2DD4A3] transition-colors duration-200 cursor-pointer"
            >
              <span>
                {t.nav.nextPrefix}: {nextChapter.shortTitle}
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="font-mono text-[#9EB1B5] group-hover:text-[#2DD4A3]">
                {t.nav.scrollOrArrowHint}
              </span>
              <ArrowDown
                className="h-3.5 w-3.5 text-[#2DD4A3] transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={2}
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate(0)}
              className="pointer-events-auto hidden md:inline-flex items-center gap-2 text-xs font-medium text-[#9EB1B5] hover:text-[#2DD4A3] transition-colors duration-200 cursor-pointer"
            >
              <span>{t.nav.backToTop}</span>
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
