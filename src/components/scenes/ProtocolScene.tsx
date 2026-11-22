import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import type { TranslationDictionary } from '../../i18n';

interface ProtocolSceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const BEP20_ADDRESS = '0xA7435945cb5D1A5b121eaAb119E8ebc02F30bd69';

function BnbSmartChainLogo({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BNB Smart Chain (BEP-20)"
    >
      <defs>
        <linearGradient id="bnb-gold-bg" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD535" />
          <stop offset="55%" stopColor="#F3BA2F" />
          <stop offset="100%" stopColor="#D99B0E" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#bnb-gold-bg)" />
      <circle cx="32" cy="32" r="28.5" stroke="#FFF4C2" strokeOpacity="0.45" strokeWidth="1" />
      {/* Authentic BNB interlocking diamond emblem */}
      <g fill="#0B1215">
        {/* Top chevron */}
        <path d="M23.15 27.95L32 19.1L40.85 27.95L46 22.8L32 8.8L18 22.8L23.15 27.95Z" />
        {/* Bottom chevron */}
        <path d="M23.15 36.05L32 44.9L40.85 36.05L46 41.2L32 55.2L18 41.2L23.15 36.05Z" />
        {/* Left diamond */}
        <path d="M13.95 26.85L8.8 32L13.95 37.15L19.1 32L13.95 26.85Z" />
        {/* Right diamond */}
        <path d="M50.05 26.85L44.9 32L50.05 37.15L55.2 32L50.05 26.85Z" />
        {/* Center diamond */}
        <path d="M32 26.85L26.85 32L32 37.15L37.15 32L32 26.85Z" />
      </g>
    </svg>
  );
}

export function ProtocolScene({ t }: ProtocolSceneProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BEP20_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = BEP20_ADDRESS;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#051014]">
      {/* Soft warm BNB gold + deep teal ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(243,186,47,0.12),transparent_68%),radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(45,212,163,0.06),transparent_75%)]"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] items-center justify-center px-4 pt-16 pb-14 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="w-full max-w-2xl rounded-2xl border border-[#F3BA2F]/28 bg-[#07161C]/92 backdrop-blur-md p-5 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
            {/* BNB Smart Chain (BEP-20) Emblem */}
            <div className="shrink-0 rounded-full p-1.5 bg-[#F3BA2F]/12 border border-[#F3BA2F]/35 shadow-[0_0_32px_rgba(243,186,47,0.22)]">
              <BnbSmartChainLogo className="h-14 w-14 sm:h-20 sm:w-20" />
            </div>

            {/* Network Name + BEP-20 Address */}
            <div className="min-w-0 flex-1 text-center sm:text-left w-full">
              <h2 className="font-display text-lg sm:text-2xl font-semibold tracking-tight text-[#F2F6F4]">
                BNB Smart Chain <span className="text-[#F3BA2F]">(BEP-20)</span>
              </h2>

              <div className="mt-2.5 sm:mt-3 flex items-center justify-between gap-2.5 sm:gap-3 rounded-xl border border-white/12 bg-[#040D11]/90 px-3 py-2.5 sm:px-4 sm:py-3">
                <code className="font-mono text-xs sm:text-sm md:text-[15px] font-medium text-[#F2F6F4] break-all select-all text-left">
                  {BEP20_ADDRESS}
                </code>

                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={copied ? 'Copied' : 'Copy address'}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 cursor-pointer ${
                    copied
                      ? 'border-[#2DD4A3]/60 bg-[#2DD4A3]/15 text-[#2DD4A3]'
                      : 'border-white/15 bg-[#08171D] text-[#D0DFDD] hover:border-[#F3BA2F]/60 hover:text-[#F3BA2F]'
                  }`}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Total, Maximum, and Circulating Supply Row */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6">
            {t.protocol.specs.map((spec, idx) => (
              <div
                key={spec.label}
                className="rounded-xl border border-white/10 bg-[#040D11]/75 px-3.5 py-2.5 sm:px-4 sm:py-3.5 flex sm:flex-col items-baseline sm:items-start justify-between gap-2"
              >
                <span className="text-xs sm:text-xs font-medium text-[#9EB1B5]">
                  {spec.label}
                </span>
                <span
                  className={`font-mono text-sm sm:text-base md:text-lg font-semibold tabular-nums ${
                    idx === 2 ? 'text-[#2DD4A3]' : 'text-[#F3BA2F]'
                  }`}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
