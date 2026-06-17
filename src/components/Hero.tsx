import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0c0a08]">
      {/* PHOTO with slow Ken Burns zoom */}
      <div className="absolute inset-0 ken-burns">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX Performance Studio training floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08]/40 via-[#0c0a08]/55 to-[#0c0a08]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(228,19,19,0.22),transparent_55%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-36 sm:pt-44 pb-24 min-h-[100svh] flex flex-col justify-end">

        {/* eyebrow line */}
        <div className="reveal-up flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#e41313]" />
          <span className="font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313]" style={{ fontWeight: 700 }}>
            {siteConfig.city} · {siteConfig.region}
          </span>
        </div>

        {/* HEADLINE — bold caps, bleeds right */}
        <h1
          className="reveal-up reveal-d1 font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.015em]"
          style={{ fontSize: 'clamp(64px, 13vw, 200px)', fontWeight: 700 }}
        >
          AN HOUR
          <br />
          AT THE LIMIT<span className="text-[#e41313]">.</span>
        </h1>

        {/* sub */}
        <p className="reveal-up reveal-d2 mt-8 max-w-2xl text-[color:var(--color-cream)]/82 text-[16px] sm:text-[19px] leading-[1.55] font-light">
          Six disciplines. Three resident coaches. One floor in {siteConfig.city}.
          Your first hour is on the house. Walk in, clock in.
        </p>

        {/* CTAs */}
        <div className="reveal-up reveal-d3 mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
          <a href="/#freepass" className="btn-solid-red">
            Get Your Free Pass
          </a>
          <a href="/#programs" className="btn-ghost">
            View Programs
          </a>
        </div>

        {/* bottom strip — phone + hours + schedule */}
        <div className="reveal-up reveal-d4 mt-12 sm:mt-16 pt-6 border-t border-[color:var(--color-cream)]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-[color:var(--color-cream)]/65">
          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#e41313] font-semibold mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
              Open Today
            </div>
            <div className="text-[14px] sm:text-[15px] font-light">{siteConfig.hours.weekday}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#e41313] font-semibold mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
              Call the floor
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="text-[14px] sm:text-[15px] font-light text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#e41313] font-semibold mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
              First class
            </div>
            <a href="/#freepass" className="text-[14px] sm:text-[15px] font-light text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors">
              On the house →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
