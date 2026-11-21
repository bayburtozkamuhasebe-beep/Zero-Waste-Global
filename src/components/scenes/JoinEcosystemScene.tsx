import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import type { TranslationDictionary } from '../../i18n';

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

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-between px-6 pt-20 pb-16 md:px-12 md:pr-28 overflow-y-auto md:overflow-hidden">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left 5 cols: Closing call & institutional proof */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#2DD4A3] mb-3">
              {t.join.kicker}
            </p>
            <h2
              className="font-display font-semibold tracking-tight text-[#F2F6F4] leading-[1.08]"
              style={{ fontSize: 'clamp(1.85rem, 3.4vw, 3rem)' }}
            >
              {t.join.headline}
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#CBD9D7]">
              {t.join.description}
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
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
            <div className="rounded-xl border border-white/12 bg-[#0B1A20] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submittedData ? (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="py-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#2DD4A3]/15 text-[#2DD4A3] mb-5">
                      <Check className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#F2F6F4]">
                      {t.join.confirmation.heading(submittedData.fullName)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#CBD9D7]">
                      {submittedData.mode === 'bireysel'
                        ? t.join.confirmation.bodyIndividual(submittedData.city)
                        : t.join.confirmation.bodyInstitutional(submittedData.city)}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-white/10 py-4 text-xs">
                      <div>
                        <span className="text-[#9EB1B5]">
                          {t.join.confirmation.typeLabel}
                        </span>
                        <p className="mt-1 text-sm font-medium text-[#F2F6F4]">
                          {submittedData.mode === 'bireysel'
                            ? t.join.confirmation.typeIndividual
                            : t.join.confirmation.typeInstitutional}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#9EB1B5]">
                          {t.join.confirmation.focusLabel}
                        </span>
                        <p className="mt-1 text-sm font-medium text-[#2DD4A3]">
                          {submittedFocusLabel}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-[#F2F6F4] hover:border-[#2DD4A3] hover:text-[#2DD4A3] transition-colors cursor-pointer"
                      >
                        {t.join.confirmation.newEntryBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigateChapter(0)}
                        className="rounded-lg bg-[#2DD4A3] px-5 py-2.5 text-sm font-semibold text-[#041512] hover:bg-[#49E3B6] transition-colors cursor-pointer"
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
                    className="space-y-4"
                  >
                    {/* Segmented mode selector */}
                    <div className="flex rounded-lg bg-[#060F12] p-1 border border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => handleModeChange('bireysel')}
                        className={`flex-1 rounded-md px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
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
                        className={`flex-1 rounded-md px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          mode === 'kurumsal'
                            ? 'bg-[#2DD4A3] text-[#041512] font-semibold'
                            : 'text-[#9EB1B5] hover:text-[#F2F6F4]'
                        }`}
                      >
                        {t.join.modeInstitutional}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="zw-name"
                          className="block text-xs font-medium text-[#CBD9D7] mb-1.5"
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
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-3.5 py-2.5 text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="zw-email"
                          className="block text-xs font-medium text-[#CBD9D7] mb-1.5"
                        >
                          {t.join.emailLabel}
                        </label>
                        <input
                          id="zw-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.join.emailPlaceholder}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-3.5 py-2.5 text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="zw-city"
                          className="block text-xs font-medium text-[#CBD9D7] mb-1.5"
                        >
                          {t.join.walletOrCityLabel}
                        </label>
                        <input
                          id="zw-city"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder={t.join.walletOrCityPlaceholder}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-3.5 py-2.5 text-sm text-[#F2F6F4] placeholder:text-[#667B80] focus:border-[#2DD4A3] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="zw-detail"
                          className="block text-xs font-medium text-[#CBD9D7] mb-1.5"
                        >
                          {mode === 'bireysel'
                            ? t.join.detailLabelIndividual
                            : t.join.detailLabelInstitutional}
                        </label>
                        <select
                          id="zw-detail"
                          value={detailIndex}
                          onChange={(e) => setDetailIndex(Number(e.target.value))}
                          className="w-full rounded-lg border border-white/15 bg-[#060F12] px-3.5 py-2.5 text-sm text-[#F2F6F4] focus:border-[#2DD4A3] focus:outline-none transition-colors"
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
                      <p role="alert" className="text-xs font-medium text-[#FCA5A5]">
                        {t.join.errors[errorField]}
                      </p>
                    )}

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs text-[#9EB1B5]">
                        {t.join.privacyNote}
                      </span>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2.5 rounded-lg bg-[#2DD4A3] px-6 py-3 text-sm font-semibold text-[#041512] hover:bg-[#49E3B6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-[#9EB1B5]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-semibold text-[#F2F6F4]">
              Zero Waste Global
            </span>
            <span aria-hidden="true">·</span>
            <span>{t.join.footer.copyright}</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
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
