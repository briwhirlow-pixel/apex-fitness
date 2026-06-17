'use client';
import { useEffect } from 'react';

/**
 * Reveal — observes any element with .reveal-up and flips it to .in
 * when it enters the viewport. One-shot per element.
 */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal-up');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
