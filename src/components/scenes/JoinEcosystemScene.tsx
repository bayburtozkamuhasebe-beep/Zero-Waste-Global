import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import type { TranslationDictionary } from '../../i18n';
import { ZwgLogo } from '../ZwgLogo';

type ParticipationMode = 'bireysel' | 'kurumsal';
type ErrorField = 'name' | 'email' | 'city';

interface JoinEcosystemSceneProps {
  onNavigateChapter: (index: number) => void;
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function JoinEcosystemScene({
  onNavigateChapter,
  t,
}: JoinEcosystemSceneProps) {
  const [mode, setMode] = useState<ParticipationMode>('bireysel');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [detailIndex, setDetailIndex] = useState(0);
  const [errorField, setErrorField] = useState<ErrorField | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    mode: ParticipationMode;
    fullName: string;
    city: string;
    detailIndex: number;
  } | null>(null);

  const options =
    mode === 'bireysel' ? t.join.individualOptions : t.join.institutionalOptions;

  const handleModeChange = (nextMode: ParticipationMode) => {
    setMode(nextMode);
    setErrorField(null);
    setDetailIndex(0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedCity = city.trim();

    if (trimmedName.length < 2) {
      setErrorField('name');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorField('email');
      return;
    }
    if (trimmedCity.length < 2) {
      setErrorField('city');
      return;
    }

    setErrorField(null);
    setSubmittedData({
      mode,
      fullName: trimmedName,
      city: trimmedCity,
      detailIndex,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setEmail('');
    setCity('');
    setDetailIndex(0);
    setErrorField(null);
  };

  const submittedFocusLabel = submittedData
    ? (submittedData.mode === 'bireysel'
        ? t.join.individualOptions
        : t.join.institutionalOptions)[submittedData.detailIndex] ?? ''
    : '';

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#060F12]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_70%_50%,rgba(45,212,163,0.08),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-between px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-20 md:pb-16 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Left 5 cols: Closing call & institutional proof */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#2DD4A3] mb-1 sm:mb-3">
              {t.join.kicker}
            </p>
            <h2
              className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.35rem, 3.4vw, 3rem)' }}
            >
              {t.join.headline}
            </h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed text-[#CBD9D7] line-clamp-2 sm:line-clamp-none">
              {t.join.description}
            </p>

            <div className="hidden lg:block mt-8 space-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-sm font-semibold text-[#F2F6F4]">
                  {t.join.individualBlockTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#9EB1B5]">
                  {t.join.individualBlockDesc}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F2F6F4]">
                  {t.join.institutionalBlockTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#9EB1B5]">
                  {t.join.institutionalBlockDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 cols: Validated participation form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/12 bg-[#0B1A20] p-4 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {submittedData ? (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="py-3 sm:py-6"
                  >
                    <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-[#2DD4A3]/15 text-[#2DD4A3] mb-3 sm:mb-5">
                      <Check className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-lg sm:text-2xl font-semibold text-[#F2F6F4]">
                      {t.join.confirmation.heading(submittedData.fullName)}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#CBD9D7]">
                      {submittedData.mode === 'bireysel'
                        ? t.join.confirmation.bodyIndividual(submittedData.city)
                        : t.join.confirmation.bodyInstitutional(submittedData.city)}
                    </p>

                    <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 border-y border-white/10 py-3 sm:py-4 text-xs">
                      <div>
                        <span className="text-[#9EB1B5]">
                          {t.join.confirmation.typeLabel}
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#F2F6F4]">
                          {submittedData.mode === 'bireysel'
                            ? t.join.confirmation.typeIndividual
                            : t.join.confirmation.typeInstitutional}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#9EB1B5]">
                          {t.join.confirmation.focusLabel}
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#2DD4A3]">
                          {submittedFocusLabel}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-lg border border-white/15 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-[#F2F6F4] hover:border-[#2DD4A3] hover:text-[#2DD4A3] transition-colors cursor-pointer"
                      >
                        {t.join.confirmation.newEntryBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigateChapter(0)}
                        className="rounded-lg bg-[#2DD4A3] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#041512] hover:bg-[#49E3B6] transition-colors cursor-pointer"
                      >
                        {t.join.confirmation.returnStartBtn}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-3 sm:space-y-4"
                  >
                    {/* Segmented mode selector */}
                    <div className="flex rounded-lg bg-[#060F12] p-1 border border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => handleModeChange('bireysel')}
                        className={`flex-1 rounded-md px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap truncate cursor-pointer ${
                          mode === 'bireysel'
                            ? 'bg-[#2DD4A3] text-[#041512] font-semibold'
                            : 'text-[#9EB1B5] hover:text-[#F2F6F4]'
                        }`}
                      >
                        {t.join.modeIndividual}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleModeChange('kurumsal')}
                        className={`flex-1 rounded-md px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap truncate cursor-pointer ${
                          mode === 'kurumsal'
                            ? 'bg-[#2DD4A3] text-[#041512] font-semibold'
                            : 'text-[#9EB1B5] hover:text-[#F2F6F4]'
                        }`}
                      >
                        {t.join.modeInstitutional}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                      <div>
                        <label
                          htmlFor="zw-name"
                          className="block text-[11px] sm:text-xs font-medium text-[#CBD9D7] mb-1 sm:mb-1.5 truncate"
                        >
                          {mode === 'bireysel'
                            ? t.join.nameLabelIndividual
                            : t.join.nameLabelInstitutional}
                        </label>
                        <input
                          id="zw-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={
                            mode === 'bireysel'
                              ? t.join.namePlaceholderIndividual
                              : t.join.namePlaceholderInstitutional
                          }
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="zw-email"
                          className="block text-[11px] sm:text-xs font-medium text-[#CBD9D7] mb-1 sm:mb-1.5 truncate"
                        >
                          {t.join.emailLabel}
                        </label>
                        <input
                          id="zw-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.join.emailPlaceholder}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                      <div>
                        <label
                          htmlFor="zw-city"
                          className="block text-[11px] sm:text-xs font-medium text-[#CBD9D7] mb-1 sm:mb-1.5 truncate"
                        >
                          {t.join.walletOrCityLabel}
                        </label>
                        <input
                          id="zw-city"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder={t.join.walletOrCityPlaceholder}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="zw-detail"
                          className="block text-[11px] sm:text-xs font-medium text-[#CBD9D7] mb-1 sm:mb-1.5 truncate"
                        >
                          {mode === 'bireysel'
                            ? t.join.detailLabelIndividual
                            : t.join.detailLabelInstitutional}
                        </label>
                        <select
                          id="zw-detail"
                          value={detailIndex}
                          onChange={(e) => setDetailIndex(Number(e.target.value))}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-[#F2F6F4] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        >
                          {options.map((opt, idx) => (
                            <option key={opt} value={idx}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {errorField && (
                      <p role="alert" className="text-[11px] sm:text-xs font-medium text-[#FCA5A5]">
                        {t.join.errors[errorField]}
                      </p>
                    )}

                    <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                      <span className="text-[10px] sm:text-xs text-[#9EB1B5] line-clamp-1">
                        {t.join.privacyNote}
                      </span>
                      <button
                        type="submit"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#2DD4A3] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#041512] hover:bg-[#49E3B6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>
                          {mode === 'bireysel'
                            ? t.join.submitIndividual
                            : t.join.submitInstitutional}
                        </span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Quiet integrated footer inside final fixed screen */}
        <footer className="mt-3 lg:mt-6 flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-t border-white/10 pt-2.5 sm:pt-4 text-[10px] sm:text-xs text-[#9EB1B5]">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <ZwgLogo className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
            <span className="font-display font-semibold text-[#F2F6F4] shrink-0">
              Zero Waste Global
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{t.join.footer.copyright}</span>
          </div>
          <div className="hidden sm:flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => onNavigateChapter(1)}
              className="hover:text-[#F2F6F4] transition-colors cursor-pointer"
            >
              {t.join.footer.links[0]}
            </button>
            <button
              type="button"
              onClick={() => onNavigateChapter(2)}
              className="hover:text-[#F2F6F4] transition-colors cursor-pointer"
            >
              {t.join.footer.links[1]}
            </button>
            <button
              type="button"
              onClick={() => onNavigateChapter(3)}
              className="hover:text-[#F2F6F4] transition-colors cursor-pointer"
            >
              {t.join.footer.links[2]}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
