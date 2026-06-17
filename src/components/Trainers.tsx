'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trainers } from '@/lib/data';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const coachPhoto: Record<string, string> = {
  'Marcus Reid': '/images/trainer.jpg',
  'Sofia Chen': '/images/yoga.jpg',
  'Darnell Banks': '/images/boxing.jpg',
};

export default function Trainers() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      gsap.fromTo(
        '[data-coach-up]',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-coach-card]',
        { y: 48, opacity: 0, scale: 0.98 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 65%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="trainers"
      className="relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)] py-24 sm:py-36 overflow-hidden"
    >
      <div aria-hidden className="glow-red absolute -bottom-40 -right-20 w-[640px] h-[640px] opacity-50" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        <div data-coach-up className="flex items-center gap-4 mb-10">
          <span className="block w-8 h-px bg-[color:var(--color-red)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
            § 05 — The Floor
          </span>
          <span className="block h-px flex-1 bg-[color:var(--color-border-cream)]" />
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-20">
          <h2
            data-coach-up
            className="font-display tracking-[-0.018em] leading-[0.9] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(48px, 8vw, 132px)', fontWeight: 700 }}
          >
            COACHES, NOT
            <br />
            <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>
              salespeople
            </span>
            <span className="text-[color:var(--color-red)]">.</span>
          </h2>
          <p data-coach-up className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-md">
            Three residents on the floor. They remember your numbers, what you said you&apos;d
            come back for, and whether your form is finally where it should be.
          </p>
        </div>

        {/* MOSAIC — featured (Marcus) spans 2 rows on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] grid-rows-1 lg:grid-rows-2 gap-5 sm:gap-6">
          {trainers.map((t, i) => {
            const photo = coachPhoto[t.name] || '/images/trainer.jpg';
            const featured = i === 0;
            return (
              <article
                data-coach-card
                key={t.name}
                className={`group relative overflow-hidden bg-[color:var(--color-ink-deep)] border border-[color:var(--color-border-cream)] hover:border-[color:var(--color-red)] transition-colors duration-500 ${
                  featured ? 'lg:row-span-2 min-h-[420px] lg:min-h-[680px]' : 'min-h-[360px]'
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={photo}
                    alt={`Coach ${t.name}`}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 100vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/65 to-transparent" />
                  <div className="absolute inset-0 bg-[color:var(--color-ink)]/15 group-hover:bg-[color:var(--color-ink)]/0 transition-colors duration-500" />
                </div>

                {(['top-2 left-2', 'top-2 right-2'] as const).map((pos) => (
                  <span key={pos} className={`absolute ${pos} w-3 h-3 z-10`} aria-hidden>
                    <span className="absolute inset-0 border-t border-l border-[color:var(--color-red)]/60" />
                  </span>
                ))}

                <div className="absolute top-4 right-4 z-10 text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/55 font-medium bg-[color:var(--color-ink)]/65 backdrop-blur px-2 py-1">
                  Nº 0{i + 1}
                </div>

                <div className={`relative z-10 h-full flex flex-col justify-end p-6 sm:p-7 ${featured ? 'lg:p-10' : ''}`}>
                  <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-3 flex items-center gap-3">
                      <span className="block w-5 h-px bg-[color:var(--color-red)]" />
                      {t.title}
                    </div>

                    <h3
                      className="font-display text-[color:var(--color-cream)] leading-[0.95] tracking-[-0.012em]"
                      style={{
                        fontSize: featured ? 'clamp(38px, 4.6vw, 64px)' : 'clamp(30px, 2.8vw, 40px)',
                        fontWeight: 700,
                      }}
                    >
                      {t.name}
                    </h3>

                    <p className={`mt-3 text-[color:var(--color-cream)]/70 leading-[1.6] font-light ${featured ? 'text-[14px] sm:text-[15px]' : 'text-[13px]'}`}>
                      {t.specialty}
                    </p>

                    <p className={`text-[color:var(--color-cream)]/65 leading-[1.65] font-light overflow-hidden transition-all duration-500 ${
                      featured
                        ? 'mt-4 text-[14px] max-h-none opacity-100'
                        : 'mt-0 text-[13px] max-h-0 opacity-0 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100'
                    }`}>
                      {t.bio}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[color:var(--color-border-cream)] flex items-center justify-between text-[10px] tracking-[0.28em] uppercase font-medium">
                      <span className="text-[color:var(--color-cream)]/45 truncate">
                        {t.teaches}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[color:var(--color-red)]">
                        Floor →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
