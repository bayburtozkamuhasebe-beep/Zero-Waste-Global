import { useId } from 'react';
import { motion } from 'motion/react';

interface SpinningGoldCoinProps {
  className?: string;
  delay?: number;
}

/**
 * 3D Y-axis spinning metallic gold ZWG digital coin with the
 * Zero Waste Global emblem minted on both front and reverse faces.
 */
function CoinFace({
  uid,
  reverse = false,
}: {
  uid: string;
  reverse?: boolean;
}) {
  const rimGrad = `zwg-coin-rim-${uid}`;
  const faceGrad = `zwg-coin-face-${uid}`;
  const coreGrad = `zwg-coin-core-${uid}`;
  const emblemGrad = `zwg-coin-emblem-${uid}`;
  const sheenGrad = `zwg-coin-sheen-${uid}`;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
    >
      <defs>
        <linearGradient id={rimGrad} x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="30%" stopColor="#F5C451" />
          <stop offset="68%" stopColor="#C88A19" />
          <stop offset="100%" stopColor="#7C4E08" />
        </linearGradient>

        <radialGradient id={faceGrad} cx="32%" cy="26%" r="74%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="38%" stopColor="#EAB308" />
          <stop offset="78%" stopColor="#B4730D" />
          <stop offset="100%" stopColor="#714306" />
        </radialGradient>

        <radialGradient id={coreGrad} cx="36%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3B2506" />
          <stop offset="70%" stopColor="#1E1304" />
          <stop offset="100%" stopColor="#120B02" />
        </radialGradient>

        <linearGradient id={emblemGrad} x1="16" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="45%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id={sheenGrad} x1="10" y1="8" x2="46" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer minted gold rim */}
      <circle cx="32" cy="32" r="30.5" fill={`url(#${rimGrad})`} />
      {/* Inner metallic coin body */}
      <circle cx="32" cy="32" r="27" fill={`url(#${faceGrad})`} />
      {/* Precision milled edge ticks */}
      <circle
        cx="32"
        cy="32"
        r="28.6"
        stroke="#FFF7C2"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeDasharray="1.8 2.4"
      />

      {/* Recessed dark-gold medallion center for razor-sharp ZWG logo contrast */}
      <circle cx="32" cy="32" r="22.5" fill={`url(#${coreGrad})`} />
      <circle
        cx="32"
        cy="32"
        r="22.5"
        stroke="#FDE047"
        strokeOpacity="0.55"
        strokeWidth="1.1"
      />

      {/* Subtle hexagonal crypto facet inside coin */}
      <polygon
        points="32,12.5 48.9,22.25 48.9,41.75 32,51.5 15.1,41.75 15.1,22.25"
        stroke="#F5C451"
        strokeOpacity="0.24"
        strokeWidth="0.9"
      />

      {/* Official ZWG Circular Zero-Waste Recycling Arcs */}
      <path
        d="M19.2 30C20.3 22.6 26.7 17.3 34.2 17.8C39.9 18.2 44.7 21.8 46.5 27"
        stroke={`url(#${emblemGrad})`}
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      <path
        d="M42.7 25.8L46.8 27.6L48.3 23.3"
        stroke="#FFFBEB"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M44.8 34C43.7 41.4 37.3 46.7 29.8 46.2C24.1 45.8 19.3 42.2 17.5 37"
        stroke={`url(#${emblemGrad})`}
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      <path
        d="M21.3 38.2L17.2 36.4L15.7 40.7"
        stroke="#F5C451"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central sculpted ZWG leaf & Z energy emblem */}
      <path
        d="M39.8 24C32.2 23.4 25.2 27.7 24.1 35.4C23.9 36.6 24 37.9 24.3 39C25.6 39.5 27.2 39.7 28.7 39.6C35.9 38.7 40.3 32.1 39.8 24Z"
        fill={reverse ? '#F5C451' : `url(#${emblemGrad})`}
      />
      <path
        d="M25 38.6C27.7 34.9 31.8 31 37.1 26.6"
        stroke="#291804"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M28.2 31.3H34.7L29.2 35.9H35"
        stroke="#291804"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Metallic diagonal highlight sheen */}
      <path
        d="M14 14C20 8 32 6 44 10L10 44C6 32 8 20 14 14Z"
        fill={`url(#${sheenGrad})`}
      />
    </svg>
  );
}

export function SpinningGoldCoin({
  className = 'h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11',
  delay = 0,
}: SpinningGoldCoinProps) {
  const uid = useId().replace(/:/g, '');

  return (
    <div
      aria-hidden="true"
      className={`relative shrink-0 aspect-square select-none ${className}`}
      style={{ perspective: '420px' }}
    >
      {/* Warm golden halo behind coin */}
      <div className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(245,196,81,0.34)_0%,transparent_70%)] blur-sm" />

      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'linear',
          delay,
        }}
        className="relative h-full w-full will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Metallic coin edge core so the coin retains gleaming thickness edge-on */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FEF08A] via-[#D99B26] to-[#7C4E08]"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Front face */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'translateZ(1.6px)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <CoinFace uid={`${uid}-f`} />
        </div>

        {/* Reverse face */}
        <div
          className="absolute inset-0"
          style={{
            transform: 'rotateY(180deg) translateZ(1.6px)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <CoinFace uid={`${uid}-b`} reverse />
        </div>
      </motion.div>
    </div>
  );
}
