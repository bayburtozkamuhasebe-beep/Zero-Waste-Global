import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { LANGUAGE_OPTIONS, type LanguageCode } from '../i18n';

interface LanguageSwitcherProps {
  language: LanguageCode;
  onChange: (language: LanguageCode) => void;
  ariaLabel: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function LanguageSwitcher({
  language,
  onChange,
  ariaLabel,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentOption =
    LANGUAGE_OPTIONS.find((item) => item.code === language) ?? LANGUAGE_OPTIONS[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative pointer-events-auto shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#08161B]/90 px-3 py-2 text-xs font-medium text-[#F2F6F4] hover:border-[#2DD4A3]/60 hover:text-[#2DD4A3] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Globe className="h-3.5 w-3.5 text-[#2DD4A3]" strokeWidth={1.75} />
        <span className="font-mono tracking-wider">{currentOption.shortLabel}</span>
        <span className="hidden sm:inline text-[#CBD9D7]">
          {currentOption.nativeName}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-[#9EB1B5] transition-transform duration-200 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          strokeWidth={1.75}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute top-full right-0 mt-2 w-44 rounded-lg border border-white/15 bg-[#08161B]/96 backdrop-blur-lg p-1.5 shadow-xl z-50"
          >
            {LANGUAGE_OPTIONS.map((option) => {
              const isSelected = option.code === language;
              return (
                <li key={option.code} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option.code);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-xs transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#2DD4A3]/15 text-[#2DD4A3] font-semibold'
                        : 'text-[#D5E1DF] hover:bg-white/[0.06] hover:text-[#F2F6F4]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="font-mono text-[11px] opacity-80">
                        {option.shortLabel}
                      </span>
                      <span>{option.nativeName}</span>
                    </span>
                    {isSelected && <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
