'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis smooth-scroll, mounted once at the root.
 * GSAP ScrollTrigger reads from `window.scrollY` which Lenis updates,
 * so everything else (ScrollTrigger reveals, sticky sections) just works.
 */
export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
