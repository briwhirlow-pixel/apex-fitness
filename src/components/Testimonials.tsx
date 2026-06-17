'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '@/lib/data';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const feature = testimonials[0]; // Jasmine T. — "Lost 18 lbs in 3 months"

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      gsap.fromTo(
        '[data-quote-up]',
        { y: 38, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.95, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 70%', once: true },
        }
      );

      gsap.fromTo(
        '[data-quote-mark]',
        { y: 28, opacity: 0, scale: 0.85 },
        {
          y: 0, opacity: 0.18, scale: 1, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-other-quote]',
        { y: 22, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 60%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative bg-[color:var(--color-ink-deep)] text-[color:var(--color-cream)] py-28 sm:py-40 overflow-hidden"
    >
      <div aria-hidden className="glow-red absolute top-0 left-1/4 w-[700px] h-[700px] opacity-25" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        <div data-quote-up className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="block w-8 h-px bg-[color:var(--color-red)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
            § 06 — The Voice
          </span>
          <span className="block h-px flex-1 bg-[color:var(--color-border-cream)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/35">
            ★★★★★ · 1,247 members
          </span>
        </div>

        {/* MASSIVE QUOTE — Jasmine's words, Instrument Serif italic */}
        <div className="relative max-w-5xl">
          {/* atmospheric quote mark */}
          <div
            data-quote-mark
            className="font-serif-italic text-[color:var(--color-red)] leading-none mb-2 sm:mb-4 pointer-events-none select-none"
            style={{ fontSize: 'clamp(140px, 18vw, 280px)' }}
            aria-hidden
          >
            &ldquo;
          </div>

          <blockquote
            data-quote-up
            className="font-serif-italic text-[color:var(--color-cream)]/92 leading-[1.18] tracking-[-0.005em] -mt-10 sm:-mt-16"
            style={{ fontSize: 'clamp(32px, 5vw, 78px)', fontWeight: 400 }}
          >
            {feature.text.split('. ').slice(0, 2).join('. ')}.
          </blockquote>

          <div data-quote-up className="mt-10 sm:mt-14 pt-6 border-t border-[color:var(--color-border)] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[color:var(--color-red)] flex items-center justify-center font-display text-[color:var(--color-cream)] text-[15px] tracking-[0.04em]" style={{ fontWeight: 700 }}>
                {feature.initials}
              </div>
              <div>
                <div className="font-display text-[color:var(--color-cream)] text-[18px] tracking-[0.04em]" style={{ fontWeight: 600 }}>
                  {feature.name}
                </div>
                <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  {feature.class} · {feature.date}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-1">
                The result
              </div>
              <div className="font-display text-[color:var(--color-cream)] text-[22px] sm:text-[26px] tracking-[-0.01em]" style={{ fontWeight: 600 }}>
                {feature.highlight}
              </div>
            </div>
          </div>
        </div>

        {/* OTHER TWO QUOTES — small, side by side */}
        <div className="mt-20 sm:mt-28 grid sm:grid-cols-2 gap-7 sm:gap-10 pt-10 border-t border-[color:var(--color-border-cream)]">
          {testimonials.slice(1).map((t) => (
            <div data-other-quote key={t.name} className="space-y-5">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-red)] font-semibold">
                <span className="block w-4 h-px bg-[color:var(--color-red)]" />
                ★★★★★
              </div>
              <p className="font-serif-italic text-[color:var(--color-cream)]/85 text-[22px] sm:text-[26px] leading-[1.35] tracking-[-0.005em]">
                &ldquo;{t.text.split('. ').slice(0, 1).join('. ')}.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[color:var(--color-border-cream)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[color:var(--color-red)]/85 flex items-center justify-center font-display text-[color:var(--color-cream)] text-[11px] tracking-[0.04em]" style={{ fontWeight: 700 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] text-[color:var(--color-cream)] font-medium">{t.name}</div>
                    <div className="text-[9px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">{t.class}</div>
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-red)] font-semibold">
                  {t.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
