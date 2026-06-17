import Image from 'next/image';

/**
 * Built for the committed.
 *
 * Layout: asymmetric 1fr / 1.6fr — text panel left, dominant image right.
 * No stats grid. No § eyebrow. No italic underline. No decorative dashes.
 * Background: warm cream (#f0ece4) per CLAUDE.md (warm, never clinical).
 */
export default function WhyApex() {
  return (
    <section
      id="about"
      className="relative bg-[#f0ece4] text-[color:var(--color-ink)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* ASYMMETRIC GRID — text 1fr, image 1.6fr (image dominates) */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-stretch">

          {/* TEXT PANEL LEFT */}
          <div className="flex flex-col justify-between gap-10 lg:py-4">
            <div>
              <h2
                className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-ink)]"
                style={{ fontSize: 'clamp(56px, 8.4vw, 132px)', fontWeight: 700 }}
              >
                BUILT FOR
                <br />
                THE COMMITTED
                <span className="text-[#e41313]">.</span>
              </h2>

              <p className="mt-8 sm:mt-10 text-[color:var(--color-ink)]/72 text-[15px] sm:text-[17px] leading-[1.75] font-light max-w-[44ch]">
                Most gyms sell memberships. We sell the hour you would have skipped.
                Six disciplines, three resident coaches, one floor in Haddon Township.
                The coaches remember your numbers, your form, and what you said you&apos;d come back for.
              </p>

              <p className="mt-6 text-[color:var(--color-ink)]/55 text-[14px] sm:text-[15px] leading-[1.7] font-light max-w-[44ch]">
                No salespeople disguised as trainers. No protein bars in the lobby.
                Walk in, meet a coach, see if the floor fits.
              </p>
            </div>

            {/* signature line, not an em-dash decoration — a sentence */}
            <div className="pt-8 mt-4 border-t border-[color:var(--color-ink)]/15">
              <p className="font-display text-[18px] sm:text-[20px] text-[color:var(--color-ink)] leading-[1.4]" style={{ fontWeight: 500 }}>
                Filed under: standards.
              </p>
              <p className="mt-1 text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 font-medium">
                Signed by the resident coaches
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-ink)] hover:text-[#e41313] transition-colors"
              >
                Visit the floor
                <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 hover:w-14" />
              </a>
            </div>
          </div>

          {/* DOMINANT IMAGE RIGHT */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[680px] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="APEX training floor in Haddon Township"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            {/* small dark wash at bottom for caption legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/55 via-transparent to-transparent" />

            {/* caption — single line, not a stat */}
            <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 flex items-baseline justify-between gap-4 text-[color:var(--color-cream)]">
              <span className="font-display text-[16px] sm:text-[18px] tracking-[0.04em]" style={{ fontWeight: 600 }}>
                The floor · 06:42 AM
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase opacity-65 font-medium">
                Haddon Township, NJ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
