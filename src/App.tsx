import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { getTranslation, type LanguageCode } from './i18n';
import { TopBar } from './components/TopBar';
import { ChapterRail } from './components/ChapterRail';
import { HeroScene } from './components/scenes/HeroScene';
import { SmartRecyclingScene } from './components/scenes/SmartRecyclingScene';
import { OceanProtectionScene } from './components/scenes/OceanProtectionScene';
import { CircularEconomyScene } from './components/scenes/CircularEconomyScene';
import { JoinEcosystemScene } from './components/scenes/JoinEcosystemScene';

const TOTAL_SCENES = 5;
const TRANSITION_LOCK_MS = 740;
const SCENE_EASE = [0.22, 1, 0.36, 1] as const;
const VALID_LANGUAGES: LanguageCode[] = ['tr', 'en', 'ja', 'de', 'fr'];

const sceneVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? '12%' : '-12%',
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    y: '0%',
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? '-10%' : '10%',
    scale: 0.95,
  }),
};

function readInitialLanguage(): LanguageCode {
  try {
    const saved = window.localStorage.getItem('zwg-lang') as LanguageCode | null;
    if (saved && VALID_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return 'tr';
}

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>(readInitialLanguage);
  const [[activeIndex, direction], setSceneState] = useState<[number, number]>([0, 1]);
  const lockTimerRef = useRef<number | null>(null);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const activeIndexRef = useRef(activeIndex);

  const t = getTranslation(language);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.pageTitle;
    try {
      window.localStorage.setItem('zwg-lang', language);
    } catch {
      // Ignore storage access errors in restricted frames
    }
  }, [language, t.meta.pageTitle]);

  const goToScene = useCallback((targetIndex: number, respectLock = false) => {
    const clamped = Math.max(0, Math.min(TOTAL_SCENES - 1, targetIndex));
    const current = activeIndexRef.current;
    if (clamped === current) {
      return;
    }
    if (respectLock && isLockedRef.current) {
      return;
    }

    isLockedRef.current = true;
    const nextDirection = clamped > current ? 1 : -1;
    setSceneState([clamped, nextDirection]);

    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current);
    }
    lockTimerRef.current = window.setTimeout(() => {
      isLockedRef.current = false;
    }, TRANSITION_LOCK_MS);
  }, []);

  const goNext = useCallback(
    (respectLock = false) => {
      goToScene(activeIndexRef.current + 1, respectLock);
    },
    [goToScene],
  );

  const goPrev = useCallback(
    (respectLock = false) => {
      goToScene(activeIndexRef.current - 1, respectLock);
    },
    [goToScene],
  );

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (lockTimerRef.current !== null) {
        window.clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  // Mouse wheel navigation (fixed single-screen, zero native scroll)
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (isLockedRef.current) {
        return;
      }
      if (Math.abs(event.deltaY) < 22) {
        return;
      }
      if (event.deltaY > 0) {
        goNext(true);
      } else {
        goPrev(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  // Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp, Home, End)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        const isTextInput =
          tag === 'TEXTAREA' ||
          tag === 'SELECT' ||
          (tag === 'INPUT' && (target as HTMLInputElement).type !== 'range');
        if (isTextInput || target.isContentEditable) {
          return;
        }
      }

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        goNext(false);
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        goPrev(false);
      } else if (event.key === 'Home') {
        event.preventDefault();
        goToScene(0, false);
      } else if (event.key === 'End') {
        event.preventDefault();
        goToScene(TOTAL_SCENES - 1, false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goToScene]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartYRef.current === null) {
      return;
    }
    const endY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
    const delta = touchStartYRef.current - endY;
    touchStartYRef.current = null;

    if (Math.abs(delta) < 48) {
      return;
    }
    if (delta > 0) {
      goNext(true);
    } else {
      goPrev(true);
    }
  };

  const progressRatio = (activeIndex + 1) / TOTAL_SCENES;

  const handleDirectNavigate = useCallback(
    (index: number) => {
      goToScene(index, false);
    },
    [goToScene],
  );

  const handleDirectNext = useCallback(() => {
    goNext(false);
  }, [goNext]);

  const handleDirectPrev = useCallback(() => {
    goPrev(false);
  }, [goPrev]);

  const renderScene = (index: number) => {
    switch (index) {
      case 0:
        return <HeroScene onExplore={handleDirectNext} t={t} />;
      case 1:
        return <SmartRecyclingScene t={t} />;
      case 2:
        return <OceanProtectionScene t={t} />;
      case 3:
        return <CircularEconomyScene t={t} />;
      case 4:
        return <JoinEcosystemScene onNavigateChapter={handleDirectNavigate} t={t} />;
      default:
        return <HeroScene onExplore={handleDirectNext} t={t} />;
    }
  };

  const activeChapter = t.chapters[activeIndex];

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative h-dvh w-screen overflow-hidden bg-[#060F12] text-[#F2F6F4]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <TopBar
          activeIndex={activeIndex}
          onNavigate={handleDirectNavigate}
          language={language}
          onLanguageChange={setLanguage}
          t={t}
        />

        {/* Subtle chapter progress hairline directly under TopBar */}
        <div
          aria-hidden="true"
          className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-white/[0.06]"
        >
          <motion.div
            className="h-full origin-left bg-[#2DD4A3]"
            animate={{ scaleX: progressRatio }}
            transition={{ duration: 0.55, ease: SCENE_EASE }}
          />
        </div>

        {/* Fixed single-viewport animated scene stage */}
        <main
          aria-live="polite"
          className="relative h-full w-full overflow-hidden"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.section
              key={activeChapter.id}
              aria-label={`${activeChapter.index}. ${activeChapter.shortTitle}`}
              custom={direction}
              variants={sceneVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.72,
                ease: SCENE_EASE,
              }}
              className="absolute inset-0 h-full w-full will-change-transform"
            >
              {renderScene(activeIndex)}
            </motion.section>
          </AnimatePresence>
        </main>

        <ChapterRail
          activeIndex={activeIndex}
          total={TOTAL_SCENES}
          onNavigate={handleDirectNavigate}
          onPrev={handleDirectPrev}
          onNext={handleDirectNext}
          t={t}
        />
      </div>
    </MotionConfig>
  );
}
