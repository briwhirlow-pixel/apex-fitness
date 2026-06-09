import { features } from '@/lib/data';

const romans = ['I.', 'II.', 'III.', 'IV.'];

export default function WhyApex() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-bone)]">

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Top metadata */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mb-12 sm:mb-16">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
              § 03 — The House Doctrine
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 h-px bg-[color:var(--color-bone)]/15 mt-3 lg:mt-2.5" />
        </div>

        {/* Top split: manifesto headline + intro */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-10 mb-20 sm:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.94] text-[color:var(--color-bone)]"
              style={{ fontSize: 'clamp(46px, 7.8vw, 116px)', fontWeight: 500 }}
            >
              What we&apos;d
              <br />
              <span className="serif-wonk text-[color:var(--color-bone)]">refuse</span>
              <span className="text-[color:var(--color-ember)]">,</span> if asked.
            </h2>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:pt-8 max-w-md">
            <p className="font-sans text-[color:var(--color-bone)]/65 text-[15px] sm:text-[16px] leading-[1.6]">
              Most gyms sell hours. We sell the hour you would have skipped — the one
              that moved your numbers, your mood, your year. What follows is
              the small list of standards that get us there.
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/40">
              — The Resident Coaches
            </p>
          </aside>
        </div>

        {/* DOCTRINE — numbered manifesto */}
        <ol className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16 mb-24 sm:mb-32">
          {features.map((f, i) => (
            <li key={f.title} className={`col-span-12 sm:col-span-6 ${i % 2 === 1 ? 'sm:mt-12 lg:mt-20' : ''}`}>
              <div className="flex gap-5 sm:gap-7">
                {/* Roman numeral */}
                <div className="flex-shrink-0">
                  <span
                    className="serif-display text-[color:var(--color-ember)] leading-none block"
                    style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', fontWeight: 500 }}
                  >
                    {romans[i]}
                  </span>
                </div>

                <div className="flex-1 pt-2">
                  <h3
                    className="serif-display text-[color:var(--color-bone)] leading-[1.05] tracking-[-0.012em] mb-4"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 500 }}
                  >
                    {f.title}<span className="text-[color:var(--color-ember)]">.</span>
                  </h3>
                  <p className="font-sans text-[color:var(--color-bone)]/55 text-[14px] sm:text-[15px] leading-[1.6] max-w-[44ch]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Guarantee — set as a press clipping at bottom */}
        <div className="relative grid grid-cols-12 gap-x-6 sm:gap-x-8 pt-12 sm:pt-14 border-t border-[color:var(--color-bone)]/15">
          <div className="col-span-12 sm:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-3">
              From the masthead
            </div>
            <p
              className="serif-display text-[color:var(--color-bone)] leading-[1.08] tracking-[-0.012em]"
              style={{ fontSize: 'clamp(26px, 3.4vw, 44px)', fontWeight: 500 }}
            >
              Eight hours in thirty days. If your numbers haven&apos;t moved, neither will our hand on your wallet — your first month is on us<span className="text-[color:var(--color-ember)]">.</span>
            </p>
          </div>

          <div className="col-span-12 sm:col-span-7 sm:pl-10 lg:pl-16 mt-6 sm:mt-2">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Window
                </div>
                <div className="serif-display text-[color:var(--color-bone)] text-[22px] sm:text-[26px] leading-none" style={{ fontWeight: 500 }}>
                  30 days
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Floor
                </div>
                <div className="serif-display text-[color:var(--color-bone)] text-[22px] sm:text-[26px] leading-none" style={{ fontWeight: 500 }}>
                  8 sessions
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Tracked
                </div>
                <div className="serif-display text-[color:var(--color-bone)] text-[22px] sm:text-[26px] leading-none" style={{ fontWeight: 500 }}>
                  Coach&nbsp;notes
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Refund
                </div>
                <div className="serif-display text-[color:var(--color-ember)] text-[22px] sm:text-[26px] leading-none" style={{ fontWeight: 500 }}>
                  Full month
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[color:var(--color-bone)]/10 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45">
              <span>Filed under: standards</span>
              <a href="/contact" className="text-[color:var(--color-bone)] hover:text-[color:var(--color-ember)] transition-colors inline-flex items-center gap-2">
                Take us up on it
                <span className="block w-6 h-px bg-current" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
