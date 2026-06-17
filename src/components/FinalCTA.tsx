import Image from 'next/image';
import { siteConfig } from '@/lib/data';

/**
 * Walk in. Clock in.
 *
 * Full bleed photo, static — no parallax, no animation.
 * Massive bleeding caps headline, period in red. No italic, no underline.
 * No § eyebrow.
 */
export default function FinalCTA() {
  return (
    <section className="relative min-h-[100svh] bg-[color:var(--color-ink)] text-[color:var(--color-cream)] overflow-hidden flex items-center">

      {/* photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX training floor"
          fill
          className="object-cover opacity-32"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink-deep)] via-[color:var(--color-ink)]/85 to-[color:var(--color-ink)]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,19,19,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">

        {/* massive bleeding head */}
        <h2
          className="font-display tracking-[-0.024em] leading-[0.84] text-[color:var(--color-cream)]"
          style={{ fontSize: 'clamp(72px, 14vw, 220px)', fontWeight: 700 }}
        >
          WALK IN.
          <br />
          <span className="text-[#e41313]">CLOCK IN.</span>
        </h2>

        {/* sub + CTAs — asymmetric, sub left 1.6fr, CTAs right 1fr */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end">
          <p className="text-[color:var(--color-cream)]/72 text-[16px] sm:text-[19px] leading-[1.6] font-light max-w-2xl">
            Your first hour is on the house. No paperwork, no sales pitch.
            Show up Tuesday at six, meet a coach, see if the floor fits.
          </p>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="/contact" className="btn-solid-red">
              <span>Claim Trial Pass</span>
            </a>
            <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`} className="btn-ghost">
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* location strip */}
        <div className="mt-16 sm:mt-20 pt-7 border-t border-[color:var(--color-cream)]/15 flex items-center justify-between flex-wrap gap-4 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium">
          <span className="text-[color:var(--color-cream)]/55">
            Haddon Township · NJ
          </span>
          <span className="text-[color:var(--color-cream)]/55">
            Open weekdays 05:00 · 22:00
          </span>
        </div>
      </div>
    </section>
  );
}
