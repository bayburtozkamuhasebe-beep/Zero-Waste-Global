import { motion } from 'motion/react';
import { ArrowLeftRight, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../../data/ecosystemData';
import type { TranslationDictionary } from '../../i18n';
import { ResilientImage } from '../ResilientImage';
import { SpinningGoldCoin } from '../SpinningGoldCoin';
import { ZwgLogo } from '../ZwgLogo';

interface ProtocolSceneProps {
  t: TranslationDictionary;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const PANCAKESWAP_URL =
  'https://pancake.xyz/swap?outputCurrency=0x5333C72228782B161009e1eB523457d56654aD52';

function PancakeSwapLogo({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PancakeSwap"
    >
      {/* Signature PancakeSwap turquoise medallion */}
      <circle cx="32" cy="32" r="30" fill="#1FC7D4" />
      <circle cx="32" cy="32" r="28.5" stroke="#A7F3F8" strokeOpacity="0.5" strokeWidth="1.2" />

      {/* Bunny ears */}
      <path
        d="M19.5 29.5L15.8 17.2C14.7 13.7 17.2 10.2 20.9 10.2C23.5 10.2 25.8 11.9 26.5 14.5L29.1 24.4"
        fill="#F0B96B"
        stroke="#633001"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5 29.5L48.2 17.2C49.3 13.7 46.8 10.2 43.1 10.2C40.5 10.2 38.2 11.9 37.5 14.5L34.9 24.4"
        fill="#F0B96B"
        stroke="#633001"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner ear highlights */}
      <path
        d="M19.4 20.6L18.2 16.5C17.8 15.2 18.8 13.9 20.2 13.9C21.2 13.9 22 14.5 22.3 15.5L23.4 19.8"
        fill="#D1884F"
      />
      <path
        d="M44.6 20.6L45.8 16.5C46.2 15.2 45.2 13.9 43.8 13.9C42.8 13.9 42 14.5 41.7 15.5L40.6 19.8"
        fill="#D1884F"
      />

      {/* Pancake base crust */}
      <path
        d="M12.5 37.5C12.5 46.8 20.5 52.5 32 52.5C43.5 52.5 51.5 46.8 51.5 37.5V34.2C51.5 26.8 43.5 22 32 22C20.5 22 12.5 26.8 12.5 34.2V37.5Z"
        fill="#D1884F"
        stroke="#633001"
        strokeWidth="2.6"
      />

      {/* Golden top face of pancake */}
      <ellipse
        cx="32"
        cy="34.2"
        rx="18.2"
        ry="12.2"
        fill="#FDE7B2"
        stroke="#633001"
        strokeWidth="2.2"
      />

      {/* Iconic glossy PancakeSwap bunny eyes */}
      <ellipse cx="25.2" cy="34.5" rx="2.6" ry="3.8" fill="#633001" />
      <ellipse cx="38.8" cy="34.5" rx="2.6" ry="3.8" fill="#633001" />
      <circle cx="24.4" cy="33.1" r="0.95" fill="#FFFFFF" />
      <circle cx="38" cy="33.1" r="0.95" fill="#FFFFFF" />

      {/* Subtle rosy cheeks */}
      <ellipse cx="20.4" cy="37.4" rx="2.1" ry="1.15" fill="#F29F9B" fillOpacity="0.65" />
      <ellipse cx="43.6" cy="37.4" rx="2.1" ry="1.15" fill="#F29F9B" fillOpacity="0.65" />
    </svg>
  );
}

export function ProtocolScene({ t }: ProtocolSceneProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#051014]">
      {/* Subtle atmospheric photography under deep architectural scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <ResilientImage
          src={ASSETS.circularCraft}
          alt=""
          fallbackTitle=""
          className="h-full w-full object-cover object-center scale-105 saturate-[0.9] brightness-[0.8]"
        />
      </div>

      {/* Layered directional scrim + turquoise & minted-gold studio bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#051014]/90 via-[#051014]/76 to-[#040C10]/96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_46%_at_68%_42%,rgba(31,199,212,0.16),transparent_68%),radial-gradient(ellipse_44%_42%_at_22%_38%,rgba(229,199,115,0.10),transparent_70%),radial-gradient(ellipse_60%_38%_at_50%_92%,rgba(45,212,163,0.08),transparent_70%)]"
      />

      {/* Precision subtle orbital geometry accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 900"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="980" cy="400" r="290" stroke="#1FC7D4" strokeOpacity="0.35" strokeWidth="1" />
        <circle
          cx="980"
          cy="400"
          r="390"
          stroke="#E5C773"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="4 10"
        />
      </svg>

      {/* Main single-screen container mirroring HeroScene geometry */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-between px-4 pt-16 pb-14 sm:px-6 md:px-12 md:pt-20 md:pb-16 md:pr-28 overflow-y-auto md:overflow-hidden">
        {/* Main Editorial 2-Column Listings Showcase */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center py-2">
          {/* Left 5 cols: Editorial Listings Header */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-xs sm:text-sm font-medium tracking-wide text-[#5EEAD4]"
            >
              05. Zero Waste Global <span aria-hidden="true" className="text-white/35 mx-1.5">·</span> ZWG
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="mt-2 sm:mt-3 font-display font-semibold tracking-tight text-[#F6FAF8] leading-[1.06] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.8vw, 3.35rem)' }}
            >
              {t.protocol.listingsLabel}
            </motion.h1>

            {/* Refined gold-to-turquoise architectural hairline */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
              className="mt-3.5 sm:mt-4 mx-auto lg:mx-0 h-[2px] w-20 origin-center lg:origin-left bg-gradient-to-r from-[#E5C773] via-[#2DD4A3] to-[#1FC7D4]"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mt-4 sm:mt-5 mx-auto lg:mx-0 max-w-md text-sm sm:text-base leading-relaxed text-[#CBDAD6]"
            >
              {t.protocol.listingsSubtitle}
            </motion.p>

            {/* Clean unboxed inline metadata (zero pills) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: EASE }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1 font-mono text-xs text-[#9EB1B5]"
            >
              <span className="text-[#E5C773]">ZWG</span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <span>PancakeSwap</span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <span className="text-[#1FC7D4]">pancake.xyz</span>
            </motion.div>
          </div>

          {/* Right 7 cols: Signature Single-Elevation PancakeSwap Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
            className="lg:col-span-7"
          >
            <a
              href={PANCAKESWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-[#1FC7D4]/32 bg-gradient-to-br from-[#081F27]/94 via-[#06151C]/96 to-[#040E13]/98 backdrop-blur-xl p-6 sm:p-8 lg:p-9 shadow-[0_32px_96px_rgba(0,0,0,0.68)] transition-all duration-300 hover:border-[#1FC7D4]/75 hover:shadow-[0_36px_110px_rgba(31,199,212,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FC7D4]/80"
            >
              {/* Luminous top hairline sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1FC7D4]/75 to-transparent"
              />
              {/* Ambient hover turquoise & gold glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1FC7D4]/12 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-75"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-[#E5C773]/8 blur-3xl"
              />

              {/* Top Row: Iconic PancakeSwap ↔ ZWG Liquidity Pair Lockup */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4 sm:gap-5">
                  {/* Sculpted PancakeSwap Emblem */}
                  <div className="relative shrink-0">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-2 rounded-full bg-[#1FC7D4]/18 blur-md transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                    />
                    <div className="relative rounded-full p-1.5 bg-[#041217] ring-1 ring-[#1FC7D4]/45 transition-transform duration-300 group-hover:scale-105">
                      <PancakeSwapLogo className="h-16 w-16 sm:h-20 sm:w-20" />
                    </div>
                  </div>

                  {/* Minimal Swap Connector */}
                  <ArrowLeftRight
                    aria-hidden="true"
                    className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#5EEAD4]/65 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#1FC7D4]"
                    strokeWidth={1.75}
                  />

                  {/* Official ZWG Gold Medallion */}
                  <div className="relative shrink-0">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-1.5 rounded-full bg-[#E5C773]/16 blur-md"
                    />
                    <ZwgLogo className="relative h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>

                {/* Top-right subtle external arrow cue */}
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-[#CBDAD6] transition-all duration-200 group-hover:border-[#1FC7D4]/65 group-hover:bg-[#1FC7D4]/15 group-hover:text-[#1FC7D4]"
                >
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Middle: Clean Title + Unboxed Exchange Details */}
              <div className="relative mt-6 sm:mt-7 border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                <div className="min-w-0">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F6FAF8] group-hover:text-[#1FC7D4] transition-colors duration-200">
                    PancakeSwap
                  </h2>
                  <p className="mt-1.5 font-mono text-xs sm:text-sm text-[#9EB1B5] truncate">
                    DEX <span aria-hidden="true" className="text-white/25 mx-1.5">·</span> ZWG Swap{' '}
                    <span aria-hidden="true" className="text-white/25 mx-1.5">·</span>{' '}
                    <span className="text-[#CBDAD6]">pancake.xyz</span>
                  </p>
                </div>

                {/* Single Primary High-Contrast Action Control */}
                <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1FC7D4] px-5 py-3 text-xs sm:text-sm font-semibold text-[#031418] shadow-[0_10px_28px_rgba(31,199,212,0.28)] transition-all duration-200 group-hover:bg-[#3BD8E4] group-hover:shadow-[0_12px_34px_rgba(31,199,212,0.42)] whitespace-nowrap shrink-0">
                  <span>{t.protocol.swapCta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom 3-column supply proof strip matching ZWG Ecosystem (HeroScene) format */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          className="mt-3 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 border-t border-white/20 pt-3 lg:pt-5 md:gap-8"
        >
          {t.protocol.specs.map((spec, idx) => (
            <div
              key={spec.label}
              className="flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 min-w-0"
            >
              <SpinningGoldCoin
                delay={idx * 0.6}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
              <div className="min-w-0">
                <p className="font-mono text-base sm:text-lg md:text-2xl lg:text-[26px] xl:text-3xl font-medium tabular-nums text-[#F6FAF8] drop-shadow-[0_2px_12px_rgba(4,12,16,0.8)] truncate">
                  {spec.value}
                </p>
                <p className="mt-0.5 lg:mt-1 text-xs md:text-sm leading-tight text-[#D6E5E0] drop-shadow-[0_2px_8px_rgba(4,12,16,0.85)] line-clamp-2">
                  {spec.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
