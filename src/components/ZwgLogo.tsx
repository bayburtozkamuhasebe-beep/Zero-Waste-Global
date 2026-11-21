import { useId } from 'react';

interface ZwgLogoProps {
  className?: string;
}

/**
 * Bespoke Zero Waste Global (ZWG) emblem:
 * - Precision circular zero-waste loop symbolizing infinite circular recycling
 * - Interlocking botanical leaf & globe arc representing nature protection
 * - Subtle hexagonal coin-edge geometry anchoring the ZWG cryptocurrency identity
 */
export function ZwgLogo({ className = 'h-8 w-8' }: ZwgLogoProps) {
  const uid = useId().replace(/:/g, '');
  const ringGradId = `zwg-ring-${uid}`;
  const leafGradId = `zwg-leaf-${uid}`;
  const coreGradId = `zwg-core-${uid}`;
  const glowGradId = `zwg-glow-${uid}`;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={coreGradId} cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#123038" />
          <stop offset="65%" stopColor="#08181E" />
          <stop offset="100%" stopColor="#040D11" />
        </radialGradient>

        <linearGradient id={ringGradId} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="45%" stopColor="#2DD4A3" />
          <stop offset="100%" stopColor="#0EA5A4" />
        </linearGradient>

        <linearGradient id={leafGradId} x1="20" y1="16" x2="46" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BEF264" />
          <stop offset="48%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>

        <radialGradient id={glowGradId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2DD4A3" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#2DD4A3" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer precision token medallion */}
      <circle cx="32" cy="32" r="30" fill={`url(#${coreGradId})`} />
      <circle
        cx="32"
        cy="32"
        r="29.2"
        stroke={`url(#${ringGradId})`}
        strokeOpacity="0.42"
        strokeWidth="1.2"
      />

      {/* Subtle internal botanical aura */}
      <circle cx="32" cy="32" r="22" fill={`url(#${glowGradId})`} />

      {/* Precision hexagonal crypto-token facet guide */}
      <polygon
        points="32,7.5 53.2,19.75 53.2,44.25 32,56.5 10.8,44.25 10.8,19.75"
        stroke="#2DD4A3"
        strokeOpacity="0.16"
        strokeWidth="1"
      />

      {/* Upper sweeping Zero-Waste circular recycling arc */}
      <path
        d="M16.5 29.5C17.8 20.4 25.6 13.8 34.8 14.4C41.8 14.9 47.7 19.4 49.9 25.8"
        stroke={`url(#${ringGradId})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Upper directional leaf-arrow tip */}
      <path
        d="M45.3 24.4L50.3 26.6L52.1 21.4"
        stroke="#A7F3D0"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lower sweeping Zero-Waste circular recycling arc */}
      <path
        d="M47.5 34.5C46.2 43.6 38.4 50.2 29.2 49.6C22.2 49.1 16.3 44.6 14.1 38.2"
        stroke={`url(#${ringGradId})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Lower directional leaf-arrow tip */}
      <path
        d="M18.7 39.6L13.7 37.4L11.9 42.6"
        stroke="#2DD4A3"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central sculpted living leaf & Z-vein energy core */}
      <path
        d="M41.5 22.2C32.2 21.5 23.6 26.7 22.3 36.2C22.1 37.6 22.2 39.2 22.6 40.5C24.2 41.1 26.1 41.4 28 41.2C36.8 40.2 42.2 32.1 41.5 22.2Z"
        fill={`url(#${leafGradId})`}
      />

      {/* Crisp luminous leaf midrib & stylized Z energy flow */}
      <path
        d="M23.2 40.2C26.5 35.6 31.6 30.8 38.2 25.4"
        stroke="#041512"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M27.4 31.2H35.2L28.6 36.8H35.6"
        stroke="#ECFDF5"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.92"
      />
    </svg>
  );
}
