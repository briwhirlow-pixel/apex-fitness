'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function WhyApex() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      gsap.fromTo(
        '[data-intro-img]',
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-intro-up]',
        { y: 38, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 70%', once: true },
        }
      );

      // counter — animate the stat numbers
      const counters = trig.querySelectorAll<HTMLElement>('[data-counter]');
      counters.forEach((el) => {
        const target = Number(el.dataset.counter || '0');
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)] py-24 sm:py-36 overflow-hidden"
    >
      {/* atmospheric red glow */}
      <div aria-hidden className="glow-red absolute -top-24 -right-32 w-[520px] h-[520px] opacity-60" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* section eyebrow */}
        <div data-intro-up className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="block w-8 h-px bg-[color:var(--color-red)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
            § 02 — The Studio
          </span>
          <span className="block h-px flex-1 bg-[color:var(--color-border-cream)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/35">
            Haddon Twp · NJ
          </span>
        </div>

        {/* ASYMMETRIC GRID — 1.6fr 1fr feel */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">

          {/* LEFT — image with crop marks */}
          <div data-intro-img className="relative aspect-[5/4] lg:aspect-[6/5] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="APEX training floor in Haddon Township"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            {/* dark wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/35 via-transparent to-transparent" />
            {/* crop-mark corners */}
            {(['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'] as const).map((pos) => (
              <span key={pos} className={`absolute ${pos} w-4 h-4`} aria-hidden>
                <span className="absolute inset-0 border-t border-l border-[color:var(--color-red)]" />
              </span>
            ))}
            {/* film label */}
            <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/65 font-medium bg-[color:var(--color-ink)]/65 backdrop-blur px-2 py-1">
              FLOOR · 06:42 AM
            </div>
          </div>

          {/* RIGHT — copy + stat block */}
          <div className="flex flex-col gap-7 lg:pt-4">

            {/* huge headline */}
            <h2
              data-intro-up
              className="font-display leading-[0.95] tracking-[-0.012em] text-[color:var(--color-cream)]"
              style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', fontWeight: 700 }}
            >
              BUILT FOR THE
              <br />
              <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>
                committed
              </span>
              <span className="text-[color:var(--color-red)]">.</span>
            </h2>

            <p data-intro-up className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.75] font-light">
              Most gyms sell memberships. We sell the hour you would have skipped — the one
              that moved your numbers, your mood, your year. Six disciplines run by three
              resident coaches who remember your name, your numbers, and what you said you&apos;d come back for.
            </p>

            <p data-intro-up className="text-[color:var(--color-cream)]/55 text-[14px] sm:text-[15px] leading-[1.7] font-light">
              No salespeople disguised as trainers. No protein bars in the lobby. Walk in,
              meet a coach, see if the floor fits. First hour is on us — that&apos;s the only
              pitch you&apos;ll hear.
            </p>

            {/* STAT BLOCK — gold numbers (here: red), muted labels */}
            <div data-intro-up className="grid grid-cols-2 gap-6 pt-7 mt-3 border-t border-[color:var(--color-border)]">
              <div>
                <div className="font-display text-[color:var(--color-red)] text-[42px] sm:text-[52px] leading-none">
                  <span data-counter="40">40</span>+
                </div>
                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  Classes weekly
                </div>
              </div>
              <div>
                <div className="font-display text-[color:var(--color-red)] text-[42px] sm:text-[52px] leading-none">
                  <span data-counter="85">85</span>k
                </div>
                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  Sq ft on the floor
                </div>
              </div>
              <div>
                <div className="font-display text-[color:var(--color-red)] text-[42px] sm:text-[52px] leading-none">
                  03
                </div>
                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  Resident coaches
                </div>
              </div>
              <div>
                <div className="font-display text-[color:var(--color-red)] text-[42px] sm:text-[52px] leading-none">
                  4.9★
                </div>
                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  Member rating
                </div>
              </div>
            </div>

            {/* signature line */}
            <div data-intro-up className="pt-6 mt-2 border-t border-[color:var(--color-border-cream)] flex items-center justify-between text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/40 font-medium">
              <span>— The Resident Coaches</span>
              <a href="/contact" className="text-[color:var(--color-cream)]/80 hover:text-[color:var(--color-red)] transition-colors inline-flex items-center gap-2">
                Visit the floor
                <span aria-hidden className="block w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
