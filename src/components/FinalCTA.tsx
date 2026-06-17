'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      // photo parallax
      gsap.fromTo(
        '[data-cta-img]',
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: trig,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7,
          },
        }
      );

      gsap.fromTo(
        '[data-cta-line]',
        { y: '110%', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-cta-up]',
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 65%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden flex items-center"
    >
      {/* parallax photo */}
      <div data-cta-img className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX studio floor"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink-deep)] via-[color:var(--color-ink)]/85 to-[color:var(--color-ink)]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,19,19,0.22),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">

        <div data-cta-up className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="block w-8 h-px bg-[color:var(--color-red)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
            § 08 — Clock In
          </span>
          <span className="block h-px flex-1 bg-[color:var(--color-border-cream)]" />
        </div>

        {/* HEAD — bleeding */}
        <h2
          className="font-display tracking-[-0.022em] leading-[0.85] text-[color:var(--color-cream)]"
          style={{ fontSize: 'clamp(72px, 14vw, 220px)', fontWeight: 700 }}
        >
          <span className="block overflow-hidden">
            <span data-cta-line className="block">WALK IN.</span>
          </span>
          <span className="block overflow-hidden">
            <span data-cta-line className="block">
              <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>clock</span>{' '}
              IN.
            </span>
          </span>
        </h2>

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end">
          <p data-cta-up className="text-[color:var(--color-cream)]/72 text-[16px] sm:text-[19px] leading-[1.6] font-light max-w-2xl">
            Your first hour is on the house. No paperwork, no sales pitch.
            Show up Tuesday at 6, meet a coach, see if the floor fits.
          </p>

          <div data-cta-up className="flex flex-wrap gap-3 lg:justify-end">
            <a href="/contact" className="btn-solid-red">
              <span>Claim Trial Pass</span>
              <span aria-hidden className="block w-6 h-px bg-current" />
            </a>
            <a href={`tel:${'8565550174'}`} className="btn-ghost">
              <span>Call · (856) 555-0174</span>
            </a>
          </div>
        </div>

        {/* sign-off */}
        <div data-cta-up className="mt-16 sm:mt-20 pt-7 border-t border-[color:var(--color-border-cream)] flex items-center justify-between flex-wrap gap-4 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium">
          <span className="text-[color:var(--color-cream)]/45">
            Haddon Township · NJ
          </span>
          <span className="text-[color:var(--color-cream)]/45">
            Mon–Fri 05:00 – 22:00 · Open weekends
          </span>
        </div>
      </div>
    </section>
  );
}
