'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // background image slow zoom + fade
      tl.fromTo(
        '[data-hero-img]',
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' },
        0
      );

      // glow pulses in
      tl.fromTo('[data-hero-glow]', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }, 0.1);

      // location + meta strip
      tl.fromTo('[data-hero-meta]', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.45);

      // headline lines — masked rise, staggered
      tl.fromTo(
        '[data-hero-line]',
        { y: '100%', opacity: 0 },
        { y: 0, opacity: 1, duration: 1.05, stagger: 0.12 },
        0.6
      );

      // italic underline draws after headline lands
      tl.fromTo(
        '[data-hero-underline] path',
        { strokeDashoffset: 220 },
        { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' },
        1.2
      );

      // subhead + CTAs
      tl.fromTo('[data-hero-sub]', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.35);
      tl.fromTo('[data-hero-cta]', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 1.55);

      // stats strip
      tl.fromTo('[data-hero-stat]', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 1.75);

      // chevron pulse
      tl.fromTo('[data-hero-scroll]', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 2.05);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--color-ink)]"
    >
      {/* PHOTO — battle ropes, dim, slow zoom */}
      <div data-hero-img className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX Performance Studio training floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* dark wash + red gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/45 via-[color:var(--color-ink)]/72 to-[color:var(--color-ink)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(228,19,19,0.18),transparent_55%)]" />
      </div>

      {/* RED GLOW — atmospheric */}
      <div
        data-hero-glow
        className="glow-red absolute -bottom-32 -left-20 w-[640px] h-[640px] will-change-transform"
        aria-hidden
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-32 sm:pt-36 pb-24 min-h-[100svh] flex flex-col justify-between">

        {/* TOP META STRIP */}
        <div data-hero-meta className="flex items-center justify-between flex-wrap gap-4 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 font-medium">
          <span className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-red)] pulse-dot" />
            APEX / Haddon Township · NJ
          </span>
          <span className="hidden md:inline">Issue Nº 06 — Trial Hour, On the House</span>
          <span>Open · 05:00 – 22:00</span>
        </div>

        {/* HEADLINE BLOCK — center column */}
        <div className="mt-auto flex flex-col gap-10 sm:gap-12">

          {/* eyebrow */}
          <div data-hero-meta className="flex items-center gap-4">
            <span className="block w-10 h-px bg-[color:var(--color-red)]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
              Performance · Strength · Recovery
            </span>
          </div>

          {/* BLEEDING HEADLINE — Oswald, last word Instrument Serif italic */}
          <h1
            className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.018em] font-bold"
            style={{ fontSize: 'clamp(64px, 12vw, 180px)' }}
          >
            <span className="block overflow-hidden">
              <span data-hero-line className="block will-change-transform">AN HOUR</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block will-change-transform">
                AT THE{' '}
                <span className="relative inline-block align-baseline">
                  <span
                    className="font-serif-italic text-[color:var(--color-red)]"
                    style={{ fontWeight: 400 }}
                  >
                    limit
                  </span>
                  <svg
                    data-hero-underline
                    className="absolute left-0 right-0 -bottom-2 w-full pointer-events-none"
                    style={{ height: '0.18em' }}
                    viewBox="0 0 220 14"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 9 C 40 3, 90 12, 140 6 S 200 7, 218 10"
                      fill="none"
                      stroke="var(--color-red)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="220"
                      strokeDashoffset="220"
                    />
                  </svg>
                  <span className="text-[color:var(--color-red)]">.</span>
                </span>
              </span>
            </span>
          </h1>

          {/* SUB + CTAs */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
            <p
              data-hero-sub
              className="col-span-12 md:col-span-6 lg:col-span-5 text-[color:var(--color-cream)]/72 text-[15px] sm:text-[17px] leading-[1.6] font-light"
            >
              A performance studio in Haddon Township. Six disciplines. Three resident coaches.
              One uncompromising standard. Walk in, clock in — your first hour is on us.
            </p>

            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-wrap gap-3 md:justify-end">
              <a data-hero-cta href="/contact" className="btn-solid-red">
                <span>Claim Trial Pass</span>
                <span aria-hidden className="w-6 h-px bg-current transition-all" />
              </a>
              <a data-hero-cta href="/classes" className="btn-ghost">
                <span>The Slate</span>
                <span aria-hidden className="w-6 h-px bg-current transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS STRIP */}
        <div className="mt-16 sm:mt-20 pt-7 border-t border-[color:var(--color-border-cream)] grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
          {[
            { v: '1,247', l: 'Active members' },
            { v: '40+',  l: 'Classes / week' },
            { v: '03',   l: 'Resident coaches' },
            { v: '4.9★', l: 'Member rating' },
          ].map((s) => (
            <div data-hero-stat key={s.l} className="flex flex-col gap-1.5">
              <div className="font-display text-[color:var(--color-cream)] text-[34px] sm:text-[42px] leading-none">
                {s.v}
              </div>
              <div className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL CHEVRON */}
      <div
        data-hero-scroll
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-[color:var(--color-cream)]/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[color:var(--color-cream)]/40 to-transparent" />
      </div>
    </section>
  );
}
