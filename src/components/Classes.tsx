'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { classes } from '@/lib/data';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const intensityScale: Record<string, number> = {
  'Low': 1,
  'Low–Moderate': 2,
  'Moderate–High': 4,
  'High': 5,
};

const photoFor: Record<string, string> = {
  'hiit-forge': '/images/training.jpg',
  'iron-temple': '/images/training.jpg',
  'flow-state': '/images/yoga.jpg',
  'velocity-cycle': '/images/cycling.jpg',
  'combat-ready': '/images/boxing.jpg',
  'recover-reset': '/images/yoga.jpg',
};

export default function Classes() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      gsap.fromTo(
        '[data-svc-up]',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-svc-card]',
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 65%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="classes"
      className="relative bg-[color:var(--color-cream)] text-[color:var(--color-ink)] py-24 sm:py-36 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section masthead */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div data-svc-up className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[color:var(--color-red)]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
                § 03 — The Slate
              </span>
            </div>
            <h2
              data-svc-up
              className="font-display tracking-[-0.018em] leading-[0.92] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(48px, 8vw, 128px)', fontWeight: 700 }}
            >
              SIX DISCIPLINES.
              <br />
              <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>
                three
              </span>{' '}
              COACHES.
            </h2>
          </div>

          <div className="max-w-sm">
            <p data-svc-up className="text-[color:var(--color-ink-alt)] text-[14px] sm:text-[15px] leading-[1.7] font-light">
              Every hour periodized. Every set logged. Pick the discipline,
              clock the hour — the coaches do the programming.
            </p>
          </div>
        </div>

        {/* GRID — 6 disciplines, 3 cols desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {classes.map((c, i) => {
            const intensity = intensityScale[c.intensity] ?? 3;
            const photo = photoFor[c.id] || '/images/hero-gym.jpg';
            return (
              <a
                data-svc-card
                key={c.id}
                href={`/classes#${c.id}`}
                className="group relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden border border-[color:var(--color-ink)] hover:border-[color:var(--color-red)] transition-colors duration-500"
              >
                {/* photo backdrop */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-55 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/30" />

                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-red)] font-semibold">
                    Nº 0{i + 1}
                  </div>

                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                    {c.category}
                  </div>

                  <h3
                    className="absolute left-5 right-5 bottom-5 font-display text-[color:var(--color-cream)] leading-[0.95] tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 700 }}
                  >
                    {c.name}
                  </h3>
                </div>

                <div className="p-5 sm:p-6 flex flex-col gap-4">
                  <p className="text-[color:var(--color-cream)]/65 text-[13px] sm:text-[14px] leading-[1.65] font-light">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[color:var(--color-border-cream)]">
                    <div>
                      <div className="text-[9px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/40 font-medium mb-2">
                        Intensity · {c.intensity}
                      </div>
                      <div className="flex items-end gap-1.5 h-5">
                        {[1, 2, 3, 4, 5].map((b) => (
                          <span
                            key={b}
                            className="flex-1 transition-all duration-300"
                            style={{
                              height: `${30 + b * 14}%`,
                              background:
                                b <= intensity
                                  ? 'var(--color-red)'
                                  : 'rgba(244,236,224,0.12)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/40 font-medium mb-2">
                        Coach
                      </div>
                      <div className="text-[13px] text-[color:var(--color-cream)]/90 font-light">
                        {c.trainer}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[color:var(--color-border)] text-[10px] tracking-[0.28em] uppercase font-semibold">
                    <span className="text-[color:var(--color-cream)]/55">{c.duration} · {c.spots} spots</span>
                    <span className="inline-flex items-center gap-2 text-[color:var(--color-red)] transition-all group-hover:gap-3">
                      Open
                      <span aria-hidden className="block w-5 h-px bg-current transition-all group-hover:w-9" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-16 flex items-center justify-between pt-7 border-t border-[color:var(--color-ink)]/10">
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink-alt)]/65 font-medium">
            Schedule live · updated weekly
          </span>
          <a href="/classes" className="group inline-flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-red)] transition-colors">
            Full schedule
            <span aria-hidden className="block w-7 h-px bg-current transition-all group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
