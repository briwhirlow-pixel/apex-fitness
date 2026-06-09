import { classes } from '@/lib/data';

const intensityScale: Record<string, number> = {
  'Low': 1,
  'Low–Moderate': 2,
  'Moderate–High': 4,
  'High': 5,
};

export default function ClassesPage() {
  return (
    <div className="bg-[color:var(--color-bone)] min-h-screen">

      {/* Header — magazine cover for the slate */}
      <section className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-32 sm:pt-36 pb-12">

        {/* metadata strip */}
        <div className="h-px bg-[color:var(--color-ink)]/25" />
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-1 py-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-ink)]/55">
          <span className="md:col-span-3">Apex / Chicago</span>
          <span className="md:col-span-3">Section II — The Slate</span>
          <span className="hidden md:inline md:col-span-3">All Six Disciplines</span>
          <span className="md:col-span-3 text-right">Schedule live · weekly</span>
        </div>
        <div className="h-px bg-[color:var(--color-ink)]/25" />

        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mt-14">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-5">
              The Full Slate
            </div>
            <h1
              className="serif-display tracking-[-0.028em] leading-[0.94] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(56px, 10vw, 152px)', fontWeight: 500 }}
            >
              Six disciplines.<br />
              <span className="serif-wonk">One</span> floor.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6 mt-6 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] sm:text-[16px] leading-[1.6] max-w-sm">
              Forty hours a week, every level admitted. Most members rotate two or three
              of the six — the right rotation depends on the season you&apos;re in.
            </p>
          </div>
        </div>
      </section>

      {/* THE SLATE — full editorial index */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-24 sm:pb-32">

        <div className="h-px bg-[color:var(--color-ink)]/30 mb-0" />

        {classes.map((cls, i) => {
          const intensity = intensityScale[cls.intensity] ?? 3;
          return (
            <article
              key={cls.id}
              id={cls.id}
              className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-6 py-10 sm:py-14 border-b border-[color:var(--color-ink)]/20 group"
            >
              {/* Number gutter */}
              <div className="col-span-2 sm:col-span-1">
                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 leading-none">
                  Nº 0{i + 1}
                </div>
                <div className="h-px w-6 bg-[color:var(--color-ember)] mt-3" />
              </div>

              {/* Name + body */}
              <div className="col-span-10 sm:col-span-6 lg:col-span-5">
                <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55">
                    {cls.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/35">
                    {cls.duration}
                  </span>
                </div>

                <h2
                  className="serif-display leading-[0.92] tracking-[-0.025em] text-[color:var(--color-ink)] mb-5"
                  style={{ fontSize: 'clamp(36px, 5.5vw, 76px)', fontWeight: 500 }}
                >
                  {cls.name}
                </h2>

                <p className="font-sans text-[color:var(--color-ink-soft)] text-[14.5px] sm:text-[15.5px] leading-[1.6] max-w-[48ch]">
                  {cls.description}
                </p>
              </div>

              {/* Schedule */}
              <div className="col-span-12 sm:col-span-5 lg:col-span-3">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-3">
                  Schedule
                </div>
                <ul className="space-y-2">
                  {cls.schedule.map((slot) => (
                    <li key={slot} className="font-mono text-[12px] text-[color:var(--color-ink)]/85 flex items-center justify-between">
                      <span>{slot}</span>
                      <span className="text-[color:var(--color-ink)]/30 ml-3">·</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intensity + Coach */}
              <div className="col-span-12 sm:col-span-7 lg:col-span-3">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-3">
                  Intensity · {cls.intensity}
                </div>
                <div className="flex items-end gap-1.5 h-8 mb-6">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <span
                      key={b}
                      className="flex-1"
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

                <div className="pt-5 border-t border-[color:var(--color-ink)]/10">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-1">
                    Coach
                  </div>
                  <div className="serif-display text-[color:var(--color-ink)] text-[20px] leading-none mb-3" style={{ fontWeight: 500 }}>
                    {cls.trainer}
                  </div>

                  <a
                    href="/contact"
                    className="group/cta inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
                  >
                    Reserve a Seat
                    <span className="block w-6 h-px bg-current transition-all duration-300 group-hover/cta:w-12" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}

        {/* Section close */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 pt-14 sm:pt-20 items-end">
          <div className="col-span-12 sm:col-span-7">
            <p
              className="serif-display text-[color:var(--color-ink)] leading-[1.15] tracking-[-0.012em]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 500 }}
            >
              Unsure which to pick? Walk in the trial hour — we&apos;ll match you to the
              right room.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-5 mt-6 sm:mt-0 sm:text-right">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[color:var(--color-ink)] text-[color:var(--color-bone)] px-7 py-5 font-mono text-[11px] tracking-[0.24em] uppercase hover:bg-[color:var(--color-ember)] transition-colors duration-300"
            >
              Claim Trial Hour
              <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-14" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
