import { useEffect, useRef } from 'react';

interface NanoParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  phaseSpeed: number;
  kind: 'chlorophyll' | 'pollen' | 'dew' | 'leaf';
  rotation: number;
  rotSpeed: number;
}

interface VeinFilament {
  startX: number;
  startY: number;
  cp1X: number;
  cp1Y: number;
  cp2X: number;
  cp2Y: number;
  endX: number;
  endY: number;
  pulseOffset: number;
  pulseSpeed: number;
  hue: 'emerald' | 'lime';
}

function cubicBezierPoint(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number {
  const mt = 1 - t;
  return (
    mt * mt * mt * p0 +
    3 * mt * mt * t * p1 +
    3 * mt * t * t * p2 +
    t * t * t * p3
  );
}

/**
 * Nature-inspired botanical nano-ecosystem canvas backdrop:
 * - Organic cellular leaf-lattice geometry
 * - Flowing leaf-vein / mycelial filaments with photosynthesis nano-pulses
 * - Drifting chlorophyll, golden pollen, dew-ring, and micro-leaf nano-particles
 * - Subtle pointer proximity luminescence
 */
export function NatureNanoBackdrop() {
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
    let particles: NanoParticle[] = [];
    let filaments: VeinFilament[] = [];

    const pointer = { x: -9999, y: -9999, active: false };

    const initScene = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, window.innerWidth);
      height = Math.max(rect.height, window.innerHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Adaptive particle density based on viewport area
      const count = Math.min(78, Math.max(38, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, (_, idx) => {
        const roll = idx % 12;
        const kind: NanoParticle['kind'] =
          roll === 0
            ? 'leaf'
            : roll <= 3
              ? 'pollen'
              : roll <= 5
                ? 'dew'
                : 'chlorophyll';

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: -(0.14 + Math.random() * 0.32),
          radius:
            kind === 'leaf'
              ? 6 + Math.random() * 4.5
              : kind === 'dew'
                ? 3.2 + Math.random() * 2.8
                : kind === 'pollen'
                  ? 1.6 + Math.random() * 1.8
                  : 1.8 + Math.random() * 2.4,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.008 + Math.random() * 0.015,
          kind,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.008,
        };
      });

      // Organic leaf-vein / mycelial energy pathways sweeping gently across the backdrop
      filaments = [
        {
          startX: -40,
          startY: height * 0.84,
          cp1X: width * 0.24,
          cp1Y: height * 0.62,
          cp2X: width * 0.52,
          cp2Y: height * 0.92,
          endX: width + 40,
          endY: height * 0.36,
          pulseOffset: 0.05,
          pulseSpeed: 0.00018,
          hue: 'emerald',
        },
        {
          startX: -40,
          startY: height * 0.26,
          cp1X: width * 0.28,
          cp1Y: height * 0.44,
          cp2X: width * 0.66,
          cp2Y: height * 0.14,
          endX: width + 40,
          endY: height * 0.58,
          pulseOffset: 0.42,
          pulseSpeed: 0.00015,
          hue: 'lime',
        },
        {
          startX: width * 0.12,
          startY: height + 30,
          cp1X: width * 0.34,
          cp1Y: height * 0.55,
          cp2X: width * 0.62,
          cp2Y: height * 0.48,
          endX: width * 0.94,
          endY: -30,
          pulseOffset: 0.72,
          pulseSpeed: 0.00013,
          hue: 'emerald',
        },
        {
          startX: -30,
          startY: height * 0.55,
          cp1X: width * 0.32,
          cp1Y: height * 0.28,
          cp2X: width * 0.72,
          cp2Y: height * 0.74,
          endX: width + 30,
          endY: height * 0.18,
          pulseOffset: 0.24,
          pulseSpeed: 0.00016,
          hue: 'emerald',
        },
      ];
    };

    const drawCellularHexGrid = (time: number) => {
      const hexR = 54;
      const hexH = Math.sqrt(3) * hexR;
      const stepX = hexR * 1.5;

      ctx.save();
      ctx.lineWidth = 0.7;

      const cols = Math.ceil(width / stepX) + 2;
      const rows = Math.ceil(height / hexH) + 2;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const cx = col * stepX;
          const cy = row * hexH + (col % 2 === 0 ? 0 : hexH / 2);

          // Gentle organic breathing wave across leaf cells
          const wave =
            Math.sin(cx * 0.0045 + time * 0.00065) *
            Math.cos(cy * 0.005 - time * 0.0005);

          if (wave < 0.08) continue;

          let alpha = (wave - 0.08) * 0.095;

          if (pointer.active) {
            const dx = cx - pointer.x;
            const dy = cy - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 220) {
              alpha += (1 - dist / 220) * 0.14;
            }
          }

          ctx.strokeStyle = `rgba(45, 212, 163, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const vx = cx + Math.cos(angle) * (hexR - 4);
            const vy = cy + Math.sin(angle) * (hexR - 4);
            if (i === 0) ctx.moveTo(vx, vy);
            else ctx.lineTo(vx, vy);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    const drawVeinFilaments = (time: number) => {
      ctx.save();
      for (let i = 0; i < filaments.length; i++) {
        const f = filaments[i];
        const drift = Math.sin(time * 0.00045 + i * 1.7) * 18;
        const cp1Y = f.cp1Y + drift;
        const cp2Y = f.cp2Y - drift * 0.8;

        // Delicate botanical vein stroke
        ctx.beginPath();
        ctx.moveTo(f.startX, f.startY);
        ctx.bezierCurveTo(f.cp1X, cp1Y, f.cp2X, cp2Y, f.endX, f.endY);
        ctx.strokeStyle =
          f.hue === 'emerald'
            ? 'rgba(45, 212, 163, 0.14)'
            : 'rgba(163, 230, 53, 0.11)';
        ctx.lineWidth = 1.15;
        ctx.stroke();

        // Two flowing photosynthesis energy pulses per filament
        for (let p = 0; p < 2; p++) {
          const t = (f.pulseOffset + p * 0.5 + time * f.pulseSpeed) % 1;
          const px = cubicBezierPoint(t, f.startX, f.cp1X, f.cp2X, f.endX);
          const py = cubicBezierPoint(t, f.startY, cp1Y, cp2Y, f.endY);

          // Soft luminescent trail halo
          const glow = ctx.createRadialGradient(px, py, 0, px, py, 18);
          if (f.hue === 'emerald') {
            glow.addColorStop(0, 'rgba(110, 245, 200, 0.85)');
            glow.addColorStop(0.35, 'rgba(45, 212, 163, 0.35)');
            glow.addColorStop(1, 'rgba(45, 212, 163, 0)');
          } else {
            glow.addColorStop(0, 'rgba(217, 249, 157, 0.82)');
            glow.addColorStop(0.35, 'rgba(134, 239, 172, 0.3)');
            glow.addColorStop(1, 'rgba(134, 239, 172, 0)');
          }

          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, 18, 0, Math.PI * 2);
          ctx.fill();

          // Crisp nano core
          ctx.fillStyle = f.hue === 'emerald' ? '#A7F3D0' : '#ECFCCB';
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    };

    const drawNanoLeaf = (p: NanoParticle, alpha: number) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      const s = p.radius;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s * 0.85, -s * 0.15, 0, s);
      ctx.quadraticCurveTo(-s * 0.85, -s * 0.15, 0, -s);
      ctx.closePath();

      ctx.fillStyle = `rgba(45, 212, 163, ${(alpha * 0.22).toFixed(3)})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(110, 231, 183, ${(alpha * 0.65).toFixed(3)})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();

      // Delicate central midrib vein
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.72);
      ctx.lineTo(0, s * 0.85);
      ctx.strokeStyle = `rgba(167, 243, 208, ${(alpha * 0.5).toFixed(3)})`;
      ctx.lineWidth = 0.65;
      ctx.stroke();

      ctx.restore();
    };

    const renderFrame = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Soft botanical canopy radial ambiance
      const canopyGlow = ctx.createRadialGradient(
        width * 0.78,
        height * 0.22,
        20,
        width * 0.78,
        height * 0.22,
        Math.max(width, height) * 0.65,
      );
      canopyGlow.addColorStop(0, 'rgba(45, 212, 163, 0.12)');
      canopyGlow.addColorStop(0.5, 'rgba(20, 83, 65, 0.07)');
      canopyGlow.addColorStop(1, 'rgba(6, 15, 18, 0)');
      ctx.fillStyle = canopyGlow;
      ctx.fillRect(0, 0, width, height);

      const lowerMist = ctx.createRadialGradient(
        width * 0.2,
        height * 0.88,
        10,
        width * 0.2,
        height * 0.88,
        Math.max(width, height) * 0.5,
      );
      lowerMist.addColorStop(0, 'rgba(134, 239, 172, 0.09)');
      lowerMist.addColorStop(1, 'rgba(6, 15, 18, 0)');
      ctx.fillStyle = lowerMist;
      ctx.fillRect(0, 0, width, height);

      // Layer 1: Living leaf cellular hex matrix
      drawCellularHexGrid(time);

      // Layer 2: Flowing leaf-vein nano-filaments
      drawVeinFilaments(time);

      // Layer 3: Update & connect nano-particles with bio-molecular bonds
      const bondDistance = 128;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.phase += p.phaseSpeed;
          p.rotation += p.rotSpeed;
          p.x += p.vx + Math.sin(p.phase) * 0.22;
          p.y += p.vy;

          // Gentle pointer repulsion/swirl for tactile responsiveness
          if (pointer.active) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 1 && dist < 150) {
              const push = ((150 - dist) / 150) * 0.32;
              p.x += (dx / dist) * push;
              p.y += (dy / dist) * push;
            }
          }

          // Wrap softly around edges
          if (p.y < -20) {
            p.y = height + 20;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
        }
      }

      // Draw organic nano-bonds between neighboring particles
      ctx.save();
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < bondDistance * bondDistance) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / bondDistance) * 0.24;
            ctx.strokeStyle =
              a.kind === 'pollen' || b.kind === 'pollen'
                ? `rgba(163, 230, 53, ${alpha.toFixed(3)})`
                : `rgba(45, 212, 163, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw each botanical nano-particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pulse = 0.62 + 0.38 * Math.sin(p.phase * 1.4);

        if (p.kind === 'leaf') {
          drawNanoLeaf(p, pulse);
        } else if (p.kind === 'dew') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(167, 243, 208, ${(pulse * 0.42).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(p.x - p.radius * 0.28, p.y - p.radius * 0.28, 0.9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(236, 253, 245, ${(pulse * 0.7).toFixed(3)})`;
          ctx.fill();
        } else if (p.kind === 'pollen') {
          // Warm golden-sage chlorophyll pollen glow
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4.5);
          glow.addColorStop(0, `rgba(217, 249, 157, ${(pulse * 0.8).toFixed(3)})`);
          glow.addColorStop(0.5, `rgba(163, 230, 53, ${(pulse * 0.25).toFixed(3)})`);
          glow.addColorStop(1, 'rgba(163, 230, 53, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 4.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(236, 252, 203, ${(pulse * 0.95).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Emerald chlorophyll nano-orb
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
          glow.addColorStop(0, `rgba(110, 245, 200, ${(pulse * 0.75).toFixed(3)})`);
          glow.addColorStop(0.5, `rgba(45, 212, 163, ${(pulse * 0.22).toFixed(3)})`);
          glow.addColorStop(1, 'rgba(45, 212, 163, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(167, 243, 208, ${(pulse * 0.9).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(renderFrame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleResize = () => {
      initScene();
      if (prefersReducedMotion) {
        renderFrame(0);
      }
    };

    initScene();
    renderFrame(0);

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
