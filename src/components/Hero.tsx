import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX Performance Studio training floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/75" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-36 sm:pt-44 pb-16 sm:pb-24 min-h-[100svh] flex flex-col justify-end">

        <h1
          className="reveal-up font-display text-white leading-[0.9] text-balance"
          style={{ fontSize: 'clamp(48px, 10vw, 96px)' }}
        >
          An hour
          <br />
          at the limit.
        </h1>

        <p className="reveal-up reveal-d1 mt-6 sm:mt-8 max-w-lg text-white/80 text-[16px] sm:text-[18px] leading-[1.6] font-light text-pretty">
          Six disciplines. Three resident coaches. One floor in {siteConfig.city}.
          Your first hour is on the house.
        </p>

        <div className="reveal-up reveal-d2 mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
          <a href="/#freepass" className="btn-primary-light">
            Get Your Free Pass
          </a>
          <a href="/#programs" className="btn-ghost-light">
            View Programs
          </a>
        </div>

        <div className="reveal-up reveal-d3 mt-10 sm:mt-14 pt-5 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-6">
          <div>
            <div className="text-[11px] tracking-[0.04em] font-medium text-white/45 mb-1">
              Open today
            </div>
            <div className="text-[13px] sm:text-[14px] font-light text-white/85">{siteConfig.hours.weekday}</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.04em] font-medium text-white/45 mb-1">
              Call us
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="text-[13px] sm:text-[14px] font-light text-white/85 hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.04em] font-medium text-white/45 mb-1">
              First class
            </div>
            <a href="/#freepass" className="text-[13px] sm:text-[14px] font-light text-white/85 hover:text-white transition-colors">
              On the house
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
