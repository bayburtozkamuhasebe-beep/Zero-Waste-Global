import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface WaterSwellGlow {
  x: number;
  depth: number; // 0 = distant horizon, 1 = foreground ocean
  rx: number;
  ry: number;
  speed: number;
  phase: number;
  alpha: number;
  warm: boolean;
}

interface WaterShimmerDot {
  xRatio: number;
  depth: number;
  phase: number;
  speed: number;
  radius: number;
  warm: boolean;
}

interface MistPuff {
  x: number;
  yRatio: number;
  rx: number;
  ry: number;
  speed: number;
  alpha: number;
  phase: number;
  warm: boolean;
}

interface AirMote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  warm: boolean;
}

/**
 * Vivid, line-free living atmosphere overlay for the ZWG Ecosystem backdrop:
 * - Upper-mid mountain ridge: lively billowing dawn mist & sunlit coastal fog
 * - Lower ocean band: vibrant rolling turquoise/gold tidal swells and dancing sunlight glints
 * - Air layer: subtle rising golden-emerald sunlit coastal mist motes
 */
export function HeroAtmosphereFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let swells: WaterSwellGlow[] = [];
    let shimmers: WaterShimmerDot[] = [];
    let mistPuffs: MistPuff[] = [];
    let airMotes: AirMote[] = [];

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, window.innerWidth);
      height = Math.max(rect.height, window.innerHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Lively feathered ocean swell light patches drifting across the water (zero lines)
      const swellCount = Math.min(24, Math.max(14, Math.floor(width / 68)));
      swells = Array.from({ length: swellCount }, (_, idx) => {
        const depth = Math.pow(Math.random(), 1.3);
        return {
          x: Math.random() * (width + 320) - 160,
          depth,
          rx: 80 + depth * 170 + Math.random() * 70,
          ry: 12 + depth * 26 + Math.random() * 12,
          speed: (0.36 + depth * 0.62) * (idx % 3 === 0 ? -0.7 : 1),
          phase: Math.random() * Math.PI * 2,
          alpha: 0.1 + depth * 0.11,
          warm: idx % 3 === 0,
        };
      });

      // Vibrant twinkling sunlight glints dancing across ocean ripples
      const shimmerCount = Math.min(88, Math.max(44, Math.floor(width / 16)));
      shimmers = Array.from({ length: shimmerCount }, (_, idx) => {
        const depth = Math.pow(Math.random(), 1.4);
        return {
          xRatio: Math.random(),
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.0024 + Math.random() * 0.0032,
          radius: 3.5 + depth * 8 + Math.random() * 3.5,
          warm: idx % 2 === 0,
        };
      });

      // Richer, brisker volumetric mist clouds flowing across mountain ridges
      const puffCount = Math.min(24, Math.max(14, Math.floor(width / 72)));
      mistPuffs = Array.from({ length: puffCount }, (_, idx) => ({
        x: Math.random() * (width + 480) - 240,
        yRatio: 0.13 + Math.random() * 0.37,
        rx: 170 + Math.random() * 250,
        ry: 40 + Math.random() * 68,
        speed: (0.34 + Math.random() * 0.42) * (idx % 3 === 0 ? -0.72 : 1),
        alpha: 0.12 + Math.random() * 0.11,
        phase: Math.random() * Math.PI * 2,
        warm: idx % 2 === 0,
      }));

      // Gentle sunlit atmospheric air motes drifting above the misty ridge & sea breeze
      const moteCount = Math.min(34, Math.max(18, Math.floor(width / 46)));
      airMotes = Array.from({ length: moteCount }, (_, idx) => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        vx: 0.18 + Math.random() * 0.32,
        vy: -(0.12 + Math.random() * 0.24),
        r: 1.4 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        warm: idx % 2 === 0,
      }));
    };

    const drawMountainMist = (time: number) => {
      ctx.save();
      for (let i = 0; i < mistPuffs.length; i++) {
        const m = mistPuffs[i];
        if (!prefersReducedMotion) {
          m.x += m.speed;
          if (m.speed > 0 && m.x - m.rx > width + 80) {
            m.x = -m.rx - 80;
          } else if (m.speed < 0 && m.x + m.rx < -80) {
            m.x = width + m.rx + 80;
          }
        }

        const bobY = Math.sin(time * 0.0006 + m.phase) * 12;
        const breathe = 0.72 + 0.28 * Math.sin(time * 0.00085 + m.phase * 1.3);
        const cy = height * m.yRatio + bobY;
        const alpha = m.alpha * breathe;

        ctx.save();
        ctx.translate(m.x, cy);
        ctx.scale(1, m.ry / m.rx);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, m.rx);
        if (m.warm) {
          grad.addColorStop(0, `rgba(255, 246, 222, ${(alpha * 1.2).toFixed(3)})`);
          grad.addColorStop(0.5, `rgba(224, 244, 236, ${(alpha * 0.65).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(224, 244, 236, 0)');
        } else {
          grad.addColorStop(0, `rgba(209, 250, 240, ${(alpha * 1.15).toFixed(3)})`);
          grad.addColorStop(0.52, `rgba(125, 224, 206, ${(alpha * 0.58).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(125, 224, 206, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, m.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    };

    const drawOceanAtmosphere = (time: number) => {
      const horizonY = height * 0.52;
      const oceanHeight = height - horizonY;

      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      // Lively rolling light-swell patches (pure feathered radial clouds, zero lines)
      for (let i = 0; i < swells.length; i++) {
        const w = swells[i];
        if (!prefersReducedMotion) {
          w.x += w.speed;
          if (w.speed > 0 && w.x - w.rx > width + 60) {
            w.x = -w.rx - 60;
          } else if (w.speed < 0 && w.x + w.rx < -60) {
            w.x = width + w.rx + 60;
          }
        }

        const riseY = Math.sin(time * 0.00125 + w.phase) * (5 + w.depth * 11);
        const breathe = 0.65 + 0.35 * Math.sin(time * 0.0014 + w.phase * 1.2);
        const cy = horizonY + w.depth * oceanHeight + riseY;
        const alpha = w.alpha * breathe;

        ctx.save();
        ctx.translate(w.x, cy);
        ctx.scale(1, w.ry / w.rx);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, w.rx);
        if (w.warm) {
          grad.addColorStop(0, `rgba(254, 243, 199, ${(alpha * 1.2).toFixed(3)})`);
          grad.addColorStop(0.45, `rgba(110, 245, 212, ${(alpha * 0.58).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(110, 245, 212, 0)');
        } else {
          grad.addColorStop(0, `rgba(167, 250, 236, ${(alpha * 1.2).toFixed(3)})`);
          grad.addColorStop(0.48, `rgba(45, 212, 163, ${(alpha * 0.52).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(45, 212, 163, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, w.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Crisp, sparkling sunlight water glints dancing across moving ocean surface
      for (let i = 0; i < shimmers.length; i++) {
        const s = shimmers[i];
        const twinkle = Math.sin(time * s.speed + s.phase);
        if (twinkle <= 0.12) continue;

        const intensity = Math.pow((twinkle - 0.12) / 0.88, 1.65);
        const driftX = Math.sin(time * 0.0008 + s.phase) * (12 + s.depth * 24);
        const driftY = Math.cos(time * 0.0011 + s.phase) * (3 + s.depth * 5.5);
        const sx = s.xRatio * width + driftX;
        const sy = horizonY + s.depth * oceanHeight + driftY;
        const r = s.radius * (0.72 + intensity * 0.72);

        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
        if (s.warm) {
          glow.addColorStop(0, `rgba(255, 252, 230, ${(intensity * 0.72).toFixed(3)})`);
          glow.addColorStop(0.42, `rgba(253, 230, 138, ${(intensity * 0.28).toFixed(3)})`);
          glow.addColorStop(1, 'rgba(253, 230, 138, 0)');
        } else {
          glow.addColorStop(0, `rgba(230, 255, 248, ${(intensity * 0.65).toFixed(3)})`);
          glow.addColorStop(0.42, `rgba(94, 234, 212, ${(intensity * 0.24).toFixed(3)})`);
          glow.addColorStop(1, 'rgba(94, 234, 212, 0)');
        }

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating dawn air motes drifting gently across the coastal light
      for (let i = 0; i < airMotes.length; i++) {
        const a = airMotes[i];
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy + Math.sin(time * 0.001 + a.phase) * 0.12;
          if (a.x > width + 20) a.x = -20;
          if (a.y < -20) {
            a.y = height * 0.88;
            a.x = Math.random() * width;
          }
        }

        const pulse = 0.45 + 0.55 * Math.sin(time * 0.002 + a.phase);
        const halo = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 3.8);
        if (a.warm) {
          halo.addColorStop(0, `rgba(254, 243, 199, ${(pulse * 0.6).toFixed(3)})`);
          halo.addColorStop(1, 'rgba(254, 243, 199, 0)');
        } else {
          halo.addColorStop(0, `rgba(110, 245, 200, ${(pulse * 0.55).toFixed(3)})`);
          halo.addColorStop(1, 'rgba(110, 245, 200, 0)');
        }

        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * 3.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawMountainMist(time);
      drawOceanAtmosphere(time);

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      init();
      if (prefersReducedMotion) {
        render(0);
      }
    };

    init();
    render(0);

    window.addEventListener('resize', handleResize);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Vivid drifting sunlit mountain ridge mist */}
      <motion.div
        animate={{
          x: ['-10%', '10%', '-10%'],
          opacity: [0.34, 0.58, 0.34],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[8%] -left-[18%] h-[38%] w-[136%] rounded-full bg-[radial-gradient(ellipse_55%_48%_at_38%_52%,rgba(252,254,250,0.38)_0%,rgba(167,243,216,0.2)_45%,transparent_75%)] blur-3xl will-change-transform"
      />

      {/* Counter-drifting warm golden mountain valley fog */}
      <motion.div
        animate={{
          x: ['9%', '-9%', '9%'],
          opacity: [0.28, 0.5, 0.28],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[22%] -right-[18%] h-[36%] w-[134%] rounded-full bg-[radial-gradient(ellipse_50%_46%_at_62%_50%,rgba(254,243,199,0.32)_0%,rgba(110,231,196,0.18)_48%,transparent_76%)] blur-3xl will-change-transform"
      />

      {/* Lively ocean surface tidal turquoise & sunlit golden glow (zero lines) */}
      <motion.div
        animate={{
          x: ['-7%', '7%', '-7%'],
          y: ['1%', '-3.5%', '1%'],
          opacity: [0.26, 0.46, 0.26],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-8%] -left-[12%] h-[48%] w-[124%] rounded-full bg-[radial-gradient(ellipse_62%_44%_at_52%_58%,rgba(94,234,212,0.34)_0%,rgba(254,240,180,0.16)_42%,transparent_74%)] blur-3xl will-change-transform"
      />

      {/* Line-free vivid volumetric mist, ocean swells & sunlit water glints */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
