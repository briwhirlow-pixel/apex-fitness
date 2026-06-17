'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricingTiers } from '@/lib/data';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      gsap.fromTo(
        '[data-price-up]',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        '[data-price-card]',
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 70%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="pricing"
      className="relative bg-[color:var(--color-cream)] text-[color:var(--color-ink)] py-24 sm:py-36 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-20">
          <div>
            <div data-price-up className="flex items-center gap-4 mb-7">
              <span className="block w-8 h-px bg-[color:var(--color-red)]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
                § 07 — The Rate Card
              </span>
            </div>
            <h2
              data-price-up
              className="font-display tracking-[-0.018em] leading-[0.9] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(48px, 8vw, 132px)', fontWeight: 700 }}
            >
              ONE PRICE,
              <br />
              <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>
                no
              </span>{' '}
              SURPRISES.
            </h2>
          </div>
          <div className="max-w-sm">
            <p data-price-up className="text-[color:var(--color-ink-alt)] text-[14px] sm:text-[15px] leading-[1.7] font-light">
              No joining fees. No contracts. Cancel any month with notice.
              The price you see is the price you pay.
            </p>
          </div>
        </div>

        {/* 3 TIERS */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {pricingTiers.map((tier, i) => {
            const featured = tier.highlighted;
            return (
              <div
                data-price-card
                key={tier.name}
                className={`relative flex flex-col p-7 sm:p-8 lg:p-10 border transition-all duration-500 ${
                  featured
                    ? 'bg-[color:var(--color-ink)] text-[color:var(--color-cream)] border-[color:var(--color-ink)] lg:-translate-y-4 shadow-[0_24px_60px_-20px_rgba(228,19,19,0.45)]'
                    : 'bg-[color:var(--color-cream-soft)] text-[color:var(--color-ink)] border-[color:var(--color-ink)]/10 hover:border-[color:var(--color-red)] hover:-translate-y-1'
                }`}
              >
                {/* badge */}
                {tier.badge && (
                  <div className={`absolute -top-3 left-7 sm:left-8 lg:left-10 px-3 py-1 text-[10px] tracking-[0.28em] uppercase font-semibold ${
                    featured
                      ? 'bg-[color:var(--color-red)] text-[color:var(--color-cream)]'
                      : 'bg-[color:var(--color-ink)] text-[color:var(--color-cream)]'
                  }`}>
                    {tier.badge}
                  </div>
                )}

                {/* tier head */}
                <div className="flex items-baseline justify-between mb-6 pb-5 border-b border-current/15">
                  <h3
                    className="font-display tracking-[0.02em] leading-none"
                    style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700 }}
                  >
                    {tier.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.28em] uppercase opacity-50 font-medium">
                    0{i + 1}
                  </span>
                </div>

                {/* price */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display leading-none ${featured ? 'text-[color:var(--color-red)]' : 'text-[color:var(--color-ink)]'}`}
                      style={{ fontSize: 'clamp(56px, 6vw, 84px)', fontWeight: 700, letterSpacing: '-0.02em' }}
                    >
                      {tier.price}
                    </span>
                    <span className={`text-[12px] tracking-[0.18em] uppercase font-medium ${featured ? 'text-[color:var(--color-cream)]/55' : 'text-[color:var(--color-ink)]/55'}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p className={`mt-4 text-[14px] leading-[1.6] font-light ${featured ? 'text-[color:var(--color-cream)]/70' : 'text-[color:var(--color-ink-alt)]'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[13.5px] leading-[1.55] font-light ${featured ? 'text-[color:var(--color-cream)]/85' : 'text-[color:var(--color-ink-alt)]'}`}>
                      <span className={`mt-1.5 block w-3 h-px ${featured ? 'bg-[color:var(--color-red)]' : 'bg-[color:var(--color-red)]'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`inline-flex items-center justify-between gap-3 px-5 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 ${
                    featured
                      ? 'bg-[color:var(--color-red)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-red-deep)]'
                      : 'bg-[color:var(--color-ink)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-red)]'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <span aria-hidden className="block w-6 h-px bg-current" />
                </a>
              </div>
            );
          })}
        </div>

        {/* footnote */}
        <div className="mt-14 pt-7 border-t border-[color:var(--color-ink)]/10 flex items-center justify-between flex-wrap gap-4 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink-alt)]/65 font-medium">
          <span>All access · Locker rooms · Recovery lounge included</span>
          <a href="/pricing" className="text-[color:var(--color-ink)] hover:text-[color:var(--color-red)] transition-colors inline-flex items-center gap-3">
            Compare in detail
            <span aria-hidden className="block w-7 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
