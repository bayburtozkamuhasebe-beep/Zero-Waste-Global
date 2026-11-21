import { useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ASSETS } from '../data/ecosystemData';
import { ResilientImage } from './ResilientImage';

interface AnimatedEcoGlobeProps {
  alt: string;
  fallbackTitle: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function AnimatedEcoGlobe({ alt, fallbackTitle }: AnimatedEcoGlobeProps) {
  const [spinCount, setSpinCount] = useState(0);

  // Smooth spring-driven 3D cursor tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 140, damping: 20, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const sheenX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const sheenY = useTransform(smoothY, [-0.5, 0.5], [-28, 28]);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = () => {
    setSpinCount((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.14, ease: EASE }}
      className="relative flex items-center justify-center w-[156px] h-[156px] sm:w-[216px] sm:h-[216px] md:w-[260px] md:h-[260px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] shrink-0 aspect-square mx-auto select-none"
      style={{ perspective: 1100 }}
    >
      {/* Breathing atmospheric emerald-cyan aura */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.36, 0.62, 0.36],
          scale: [0.95, 1.06, 0.95],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -inset-3 sm:-inset-5 lg:-inset-6 rounded-full bg-[radial-gradient(circle,rgba(45,212,163,0.34)_0%,rgba(14,165,233,0.16)_46%,transparent_72%)] blur-xl sm:blur-2xl"
      />

      {/* Outer clockwise rotating orbital ring with luminous arcs */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 500 500"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -inset-2.5 sm:-inset-4 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)]"
      >
        <circle
          cx="250"
          cy="250"
          r="242"
          fill="none"
          stroke="rgba(45,212,163,0.22)"
          strokeWidth="1.2"
          strokeDasharray="10 14"
        />
        <path
          d="M 250 8 A 242 242 0 0 1 460 129"
          fill="none"
          stroke="#2DD4A3"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.88"
        />
        <path
          d="M 250 492 A 242 242 0 0 1 40 371"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.72"
        />
        <circle cx="460" cy="129" r="4.5" fill="#2DD4A3" />
        <circle cx="40" cy="371" r="4" fill="#7DD3FC" />
      </motion.svg>

      {/* Inner counter-clockwise orbital energy track */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 500 500"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -inset-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)]"
      >
        <circle
          cx="250"
          cy="250"
          r="236"
          fill="none"
          stroke="rgba(242,246,244,0.14)"
          strokeWidth="1"
        />
        <path
          d="M 486 250 A 236 236 0 0 1 368 454"
          fill="none"
          stroke="rgba(45,212,163,0.68)"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <circle cx="368" cy="454" r="3.5" fill="#A7F3D0" />
      </motion.svg>

      {/* Interactive levitating & tiltable planet container with strict WebKit-safe circular mask */}
      <motion.button
        type="button"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label={alt}
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group relative h-[88%] w-[88%] shrink-0 aspect-square isolate rounded-full [clip-path:circle(50%_at_50%_50%)] overflow-hidden border border-[#2DD4A3]/35 shadow-[0_0_50px_rgba(45,212,163,0.24)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2DD4A3]"
      >
        {/* Continuous slow planetary circulation + interactive click full-cycle spin */}
        <motion.div
          animate={{
            rotate: spinCount * 360,
          }}
          transition={{
            duration: 1.5,
            ease: EASE,
          }}
          className="h-full w-full aspect-square"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1.03, 1.07, 1.03],
            }}
            transition={{
              rotate: {
                duration: 90,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="h-full w-full aspect-square will-change-transform"
          >
            <ResilientImage
              src={ASSETS.ecoGlobe}
              alt={alt}
              fallbackTitle={fallbackTitle}
              className="block h-full w-full aspect-square object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Cursor-tracked soft atmospheric specular sheen */}
        <motion.div
          aria-hidden="true"
          style={{ x: sheenX, y: sheenY }}
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(167,243,208,0.22)_0%,transparent_52%)] mix-blend-screen"
        />

        {/* Subtle circular atmospheric edge blend for seamless depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_28px_rgba(6,15,18,0.68)] ring-1 ring-inset ring-white/15"
        />
      </motion.button>
    </motion.div>
  );
}
