import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[color:var(--color-ink)]">
      {/* PHOTO — battle ropes, static, dim */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX Performance Studio training floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/45 via-[color:var(--color-ink)]/72 to-[color:var(--color-ink)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(228,19,19,0.18),transparent_55%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-32 sm:pt-36 pb-24 min-h-[100svh] flex flex-col justify-between">

        {/* TOP META STRIP */}
        <div className="flex items-center justify-between flex-wrap gap-4 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 font-medium">
          <span className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-red)]" />
            APEX / Haddon Township · NJ
          </span>
          <span className="hidden md:inline">Trial Hour, On the House</span>
          <span>Open · 05:00 – 22:00</span>
        </div>

        {/* HEADLINE BLOCK */}
        <div className="mt-auto flex flex-col gap-10 sm:gap-12">

          {/* eyebrow */}
          <div className="flex items-center gap-4">
            <span className="block w-10 h-px bg-[color:var(--color-red)]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
              Performance · Strength · Recovery
            </span>
          </div>

          {/* BLEEDING HEADLINE — Oswald, last word italic red (the ONE allowed italic accent on the site) */}
          <h1
            className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.018em] font-bold"
            style={{ fontSize: 'clamp(64px, 12vw, 180px)' }}
          >
            AN HOUR
            <br />
            AT THE{' '}
            <span
              className="font-serif-italic text-[color:var(--color-red)]"
              style={{ fontWeight: 400 }}
            >
              limit
            </span>
            <span className="text-[color:var(--color-red)]">.</span>
          </h1>

          {/* SUB + CTAs */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
            <p className="col-span-12 md:col-span-6 lg:col-span-5 text-[color:var(--color-cream)]/72 text-[15px] sm:text-[17px] leading-[1.6] font-light">
              A performance studio in Haddon Township. Six disciplines. Three resident coaches.
              One uncompromising standard. Walk in, clock in — your first hour is on us.
            </p>

            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-wrap gap-3 md:justify-end">
              <a href="/contact" className="btn-solid-red">
                <span>Claim Trial Pass</span>
              </a>
              <a href="/classes" className="btn-ghost">
                <span>The Slate</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL CHEVRON */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-[color:var(--color-cream)]/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[color:var(--color-cream)]/40 to-transparent" />
      </div>
    </section>
  );
}
