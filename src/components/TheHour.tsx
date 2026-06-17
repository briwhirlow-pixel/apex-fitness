/**
 * The Hour — APEX's signature section.
 *
 * 5 phases of a single APEX hour. Vertical ladder layout, time-led,
 * intensity bars right. Each phase a different row weight.
 * No "Phase 01" numbering. No § eyebrow. No italic underline.
 * Static — no scroll-drawn SVG, no animations.
 * Background: warm cream variant (#ede8de) — different from WhyApex above.
 */

const phases = [
  { time: '00:00 — 00:08', name: 'Warm-up',    rpe: 3,  note: 'Mobility flow ramping into RPE 3.' },
  { time: '00:08 — 00:20', name: 'Build',      rpe: 6,  note: 'Strength primer. Find the floor.' },
  { time: '00:20 — 00:42', name: 'Main set',   rpe: 10, note: 'The hour at the limit. This is the work.' },
  { time: '00:42 — 00:52', name: 'Finisher',   rpe: 8,  note: 'Conditioning sprint. Leave it on the floor.' },
  { time: '00:52 — 01:00', name: 'Cool-down',  rpe: 2,  note: 'Breath, reset, log the session.' },
];

// Intensity bar — small horizontal segments
const RPEBar = ({ rpe }: { rpe: number }) => {
  const filled = Math.round((rpe / 10) * 8);
  return (
    <div className="flex items-end gap-[3px] h-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="block w-[5px]"
          style={{
            height: `${30 + (i + 1) * 9}%`,
            background: i < filled ? '#e41313' : 'rgba(12,10,8,0.15)',
          }}
        />
      ))}
    </div>
  );
};

export default function TheHour() {
  return (
    <section
      id="the-hour"
      className="relative bg-[#ede8de] text-[color:var(--color-ink)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* ASYMMETRIC HEAD — headline left big, sub right small */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-16 sm:mb-20">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-ink)]"
            style={{ fontSize: 'clamp(56px, 9vw, 152px)', fontWeight: 700 }}
          >
            ONE HOUR.
            <br />
            PERIODIZED.
          </h2>

          <div className="flex flex-col gap-4 lg:pb-3 max-w-md">
            <p className="text-[color:var(--color-ink)]/72 text-[15px] sm:text-[16px] leading-[1.75] font-light">
              Every APEX session is built around one curve — warm-up to limit to reset.
              Below is the shape of the hour, minute by minute.
            </p>
            <p className="text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 font-medium">
              Programming, not workouts
            </p>
          </div>
        </div>

        {/* PHASE LADDER — vertical rows, each different visual weight */}
        <div className="grid grid-cols-1 gap-0">
          {phases.map((p, i) => {
            const isMain = p.name === 'Main set';
            const isWarm = p.name === 'Warm-up';
            return (
              <div
                key={p.name}
                className={`grid grid-cols-12 gap-4 sm:gap-6 items-center py-7 sm:py-8 ${
                  i === 0 ? 'border-t' : ''
                } border-b border-[color:var(--color-ink)]/15`}
              >
                {/* time — red, mono numerals */}
                <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                  <span className="font-display text-[#e41313] text-[15px] sm:text-[16px] tabular-nums tracking-[0.04em]" style={{ fontWeight: 600 }}>
                    {p.time}
                  </span>
                </div>

                {/* phase name — varies in size to give each row different weight */}
                <div className="col-span-12 sm:col-span-5 lg:col-span-6">
                  <h3
                    className="font-display text-[color:var(--color-ink)] leading-none tracking-[-0.015em]"
                    style={{
                      fontSize: isMain
                        ? 'clamp(40px, 6vw, 88px)'
                        : isWarm
                          ? 'clamp(28px, 3.4vw, 44px)'
                          : 'clamp(30px, 4vw, 56px)',
                      fontWeight: 700,
                    }}
                  >
                    {p.name}
                    {isMain && <span className="text-[#e41313]">.</span>}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-[14px] text-[color:var(--color-ink)]/65 leading-[1.6] font-light max-w-md">
                    {p.note}
                  </p>
                </div>

                {/* RPE label */}
                <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/45 font-medium mb-2">
                    RPE
                  </div>
                  <div className="font-display text-[color:var(--color-ink)] text-[22px] sm:text-[26px] leading-none tabular-nums" style={{ fontWeight: 600 }}>
                    {p.rpe}
                  </div>
                </div>

                {/* intensity bar */}
                <div className="col-span-6 sm:col-span-2 lg:col-span-2 flex justify-end">
                  <RPEBar rpe={p.rpe} />
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-14 sm:mt-16 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[13px] text-[color:var(--color-ink)]/55 leading-[1.5] font-light max-w-md">
            Reviewed weekly by the resident coaches. Every hour periodized to the session you walked in on.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-ink)] hover:text-[#e41313] transition-colors"
          >
            Book the hour
            <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 hover:w-14" />
          </a>
        </div>
      </div>
    </section>
  );
}
