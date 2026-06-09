import { classes } from '@/lib/data';

const intensityScale: Record<string, number> = {
  'Low': 1,
  'Low–Moderate': 2,
  'Moderate–High': 4,
  'High': 5,
};

const featured = ['hiit-forge', 'iron-temple', 'flow-state']
  .map((id) => classes.find((c) => c.id === id)!)
  .filter(Boolean);

export default function Classes() {
  return (
    <section id="classes" className="relative py-28 sm:py-36 overflow-hidden bg-[color:var(--color-bone)]">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Section masthead */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-16 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                § 02 — The Slate
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
            </div>
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.95] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(44px, 7vw, 104px)', fontWeight: 500 }}
            >
              Three hours, in <span className="serif-wonk">detail</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] leading-[1.55] max-w-sm">
              A close read of the slate&apos;s headliners. The full index of six lives on the schedule page.
            </p>
          </div>
        </div>

        {/* FEATURED SPREADS — alternating asymmetric */}
        <div className="space-y-20 sm:space-y-28">
          {featured.map((cls, i) => {
            const flip = i % 2 === 1;
            const intensity = intensityScale[cls.intensity] ?? 3;
            return (
              <article key={cls.id} className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-6 items-start">

                {/* Number gutter */}
                <div className={`col-span-2 sm:col-span-1 ${flip ? 'lg:order-3' : ''}`}>
                  <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 flex flex-col gap-1">
                    <span>Nº 0{i + 1}</span>
                    <span className="h-px w-6 bg-[color:var(--color-ember)] mt-1" />
                  </div>
                </div>

                {/* Title + body */}
                <div className={`col-span-10 sm:col-span-7 ${flip ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}`}>
                  <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55">
                      {cls.category}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/35">
                      {cls.duration}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                      {cls.intensity}
                    </span>
                  </div>

                  <h3
                    className="serif-display tracking-[-0.025em] leading-[0.92] text-[color:var(--color-ink)] mb-6"
                    style={{ fontSize: 'clamp(40px, 6.5vw, 92px)', fontWeight: 500 }}
                  >
                    {cls.name}
                  </h3>

                  <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] sm:text-[16px] leading-[1.6] max-w-[52ch]">
                    {cls.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href={`/classes#${cls.id}`}
                      className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
                    >
                      Open the page
                      <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-12" />
                    </a>
                  </div>
                </div>

                {/* Right: schedule + intensity meter */}
                <aside className={`col-span-12 sm:col-span-4 ${flip ? 'lg:order-1 lg:col-span-4' : 'lg:col-span-4'} mt-2 sm:mt-0`}>
                  <div className="border-t border-[color:var(--color-ink)]/25 pt-5">
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-4">
                      <span>Schedule</span>
                      <span>This Week</span>
                    </div>
                    <ul className="space-y-2.5">
                      {cls.schedule.map((slot) => (
                        <li
                          key={slot}
                          className="flex items-center justify-between font-mono text-[12px] tracking-[0.04em] text-[color:var(--color-ink)]/85"
                        >
                          <span>{slot}</span>
                          <span className="text-[color:var(--color-ink)]/35">w/ {cls.trainer.split(' ').map((n) => n[0]).join('')}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 pt-5 border-t border-[color:var(--color-ink)]/10">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-3">
                        Intensity · {cls.intensity}
                      </div>
                      <div className="flex items-end gap-1.5 h-7">
                        {[1, 2, 3, 4, 5].map((b) => (
                          <span
                            key={b}
                            className="flex-1 transition-colors"
                            style={{
                              height: `${30 + b * 14}%`,
                              background:
                                b <= intensity
                                  ? 'var(--color-ember)'
                                  : 'color-mix(in oklab, var(--color-ink) 12%, transparent)',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-5 border-t border-[color:var(--color-ink)]/10 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55">
                      <span>Coach</span>
                      <span className="text-[color:var(--color-ink)]">{cls.trainer}</span>
                    </div>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>

        {/* Footer of section */}
        <div className="mt-20 sm:mt-28 grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end pt-8 border-t border-[color:var(--color-ink)]/20">
          <div className="col-span-12 sm:col-span-8">
            <p className="serif-display text-[color:var(--color-ink)] text-[22px] sm:text-[28px] leading-[1.25] tracking-[-0.01em] max-w-[28ch]">
              The remaining three — cycling, boxing, recovery — live on the full slate.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-4 mt-4 sm:mt-0 sm:text-right">
            <a
              href="/classes"
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
            >
              <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-16" />
              See the full slate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
