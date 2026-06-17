import { classes } from '@/lib/data';

/**
 * Disciplines — vertical list, NOT cards, NOT columns.
 * Each row: name LEFT (huge Oswald), description middle, schedule times RIGHT in red.
 * HIIT FORGE row takes ~50% more visual space than the others.
 * Thin red horizontal rule between each row.
 */

const intensityToCopy: Record<string, string> = {
  'Low': 'Easy',
  'Low to Moderate': 'Easy to Mid',
  'Moderate to High': 'Mid to Hard',
  'High': 'Hard',
};

export default function Classes() {
  return (
    <section
      id="classes"
      className="relative bg-[#0c0a08] text-[color:var(--color-cream)] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* atmospheric off-canvas red glow */}
      <div
        aria-hidden
        className="absolute -top-20 right-[-10%] w-[640px] h-[640px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(228,19,19,0.28) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section opener — no eyebrow, just a headline + asymmetric note */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-12 sm:mb-16">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(56px, 9vw, 144px)', fontWeight: 700 }}
          >
            THE SLATE
            <span className="text-[#e41313]">.</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/70 text-[15px] sm:text-[16px] leading-[1.7] font-light lg:pb-3 max-w-md">
            Six hours, six ways to break. The schedule lives below. The coach&apos;s name lives beside each row.
          </p>
        </div>

        {/* DISCIPLINE LIST — vertical, HIIT dominant */}
        <ul className="border-t border-[#e41313]/35">
          {classes.map((c) => {
            const isHero = c.id === 'hiit-forge';
            return (
              <li
                key={c.id}
                className={`grid grid-cols-12 gap-x-5 sm:gap-x-8 gap-y-3 border-b border-[#e41313]/25 ${
                  isHero ? 'py-12 sm:py-20' : 'py-7 sm:py-10'
                }`}
              >
                {/* LEFT — discipline name (huge, left-aligned, asymmetric width) */}
                <div className="col-span-12 sm:col-span-7 lg:col-span-6">
                  <h3
                    className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em]"
                    style={{
                      fontSize: isHero
                        ? 'clamp(56px, 10vw, 160px)'
                        : 'clamp(34px, 5.6vw, 84px)',
                      fontWeight: 700,
                    }}
                  >
                    {c.name.toUpperCase()}
                    {isHero && <span className="text-[#e41313]">.</span>}
                  </h3>

                  <p
                    className={`text-[color:var(--color-cream)]/70 leading-[1.6] font-light mt-3 sm:mt-4 max-w-[52ch] ${
                      isHero ? 'text-[15px] sm:text-[17px]' : 'text-[13px] sm:text-[14px]'
                    }`}
                  >
                    {c.description}
                  </p>
                </div>

                {/* MIDDLE — category + duration + coach */}
                <div className="col-span-6 sm:col-span-2 lg:col-span-2 flex flex-col gap-2 sm:gap-3 sm:pt-3">
                  <div>
                    <div className="text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/35 font-medium">
                      Category
                    </div>
                    <div className={`text-[color:var(--color-cream)] font-display tracking-[0.04em] ${isHero ? 'text-[16px] sm:text-[18px]' : 'text-[13px] sm:text-[14px]'}`} style={{ fontWeight: 600 }}>
                      {c.category}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/35 font-medium">
                      Coach
                    </div>
                    <div className={`text-[color:var(--color-cream)]/85 ${isHero ? 'text-[14px] sm:text-[15px]' : 'text-[12px] sm:text-[13px]'} font-light`}>
                      {c.trainer}
                    </div>
                  </div>
                </div>

                {/* RIGHT — schedule times in RED */}
                <div className="col-span-6 sm:col-span-3 lg:col-span-4 flex flex-col gap-1.5 items-end sm:pt-3">
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/35 font-medium mb-1">
                    {c.duration} · {intensityToCopy[c.intensity] || c.intensity}
                  </div>
                  {c.schedule.map((s) => (
                    <span
                      key={s}
                      className={`font-display tracking-[0.04em] text-[#e41313] text-right tabular-nums ${
                        isHero ? 'text-[18px] sm:text-[22px]' : 'text-[14px] sm:text-[16px]'
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        {/* bottom note */}
        <div className="mt-12 sm:mt-14 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[13px] text-[color:var(--color-cream)]/55 leading-[1.5] font-light max-w-md">
            Schedule live. Updated weekly. Walk in for the trial hour, no booking required.
          </p>
          <a
            href="/classes"
            className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
          >
            Full week schedule
            <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 hover:w-14" />
          </a>
        </div>
      </div>
    </section>
  );
}
