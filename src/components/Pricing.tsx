import { pricingTiers } from '@/lib/data';

/**
 * Rate card — asymmetric.
 *
 * Drop-In is a small inline callout at top.
 * Annual + Monthly are the two real tiers in a 1.6fr/1fr split.
 * Annual is the dominant card (the value pick), Monthly secondary.
 * No "Most Popular" badge. No three equal columns.
 * Background: warm near-black #0c0a08.
 */
export default function Pricing() {
  const dropIn  = pricingTiers.find((t) => t.name === 'Drop-In')!;
  const monthly = pricingTiers.find((t) => t.name === 'Monthly')!;
  const annual  = pricingTiers.find((t) => t.name === 'Annual')!;

  return (
    <section
      id="pricing"
      className="relative bg-[#0c0a08] text-[color:var(--color-cream)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* atmospheric red glow */}
      <div
        aria-hidden
        className="absolute top-20 -right-32 w-[640px] h-[640px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(228,19,19,0.22) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* ASYMMETRIC HEAD */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-20">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(56px, 9vw, 152px)', fontWeight: 700 }}
          >
            ONE PRICE.
            <br />
            NO SURPRISES<span className="text-[#e41313]">.</span>
          </h2>

          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.75] font-light max-w-md">
            No joining fee. No contract. Cancel any month with two weeks&apos; notice.
            The number you see is the number you pay.
          </p>
        </div>

        {/* DROP-IN — inline callout at top, single line, not a card */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[color:var(--color-cream)]/15">
          <div className="flex items-baseline gap-5 flex-wrap">
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold">
              Pay as you go
            </span>
            <span
              className="font-display text-[color:var(--color-cream)] leading-none tracking-[0.02em]"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700 }}
            >
              {dropIn.price}
            </span>
            <span className="text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/55 font-medium">
              per class · any discipline · drop-in
            </span>
          </div>
          <a
            href="/contact"
            className="text-[11px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
          >
            Book one →
          </a>
        </div>

        {/* MAIN TIERS — asymmetric 1.6fr / 1fr (Annual dominant, Monthly secondary) */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">

          {/* ANNUAL — dominant */}
          <article className="col-span-12 lg:col-span-7 relative bg-[#100e0b] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 p-8 sm:p-10 lg:p-12 flex flex-col">
            <div className="flex items-start justify-between mb-8 pb-6 border-b border-[color:var(--color-cream)]/15">
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
                  Save $600 a year
                </div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 700 }}
                >
                  Annual.
                </h3>
                <p className="mt-2 text-[color:var(--color-cream)]/65 text-[14px] leading-[1.6] font-light max-w-md">
                  Everything in Monthly. Billed yearly. Locked rate.
                </p>
              </div>
              <div className="text-right">
                <div
                  className="font-display text-[#e41313] leading-none tracking-[-0.018em]"
                  style={{ fontSize: 'clamp(56px, 7.5vw, 108px)', fontWeight: 700 }}
                >
                  {annual.price}
                </div>
                <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                  {annual.period}
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-3 mb-10 flex-1">
              {annual.features.map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-[14px] text-[color:var(--color-cream)]/85 leading-[1.5] font-light">
                  <span className="block w-3 h-px bg-[#e41313] shrink-0 translate-y-[-3px]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center justify-between gap-3 bg-[#e41313] text-[color:var(--color-cream)] hover:bg-[#b50e0e] px-6 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              <span>Start the year</span>
              <span aria-hidden className="block w-6 h-px bg-current" />
            </a>
          </article>

          {/* MONTHLY — secondary */}
          <article className="col-span-12 lg:col-span-5 relative bg-transparent border border-[color:var(--color-cream)]/12 hover:border-[#e41313]/60 transition-colors duration-500 p-7 sm:p-8 lg:p-10 flex flex-col">
            <div className="flex items-start justify-between mb-7 pb-5 border-b border-[color:var(--color-cream)]/12">
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/55 font-medium mb-3">
                  Month to month
                </div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', fontWeight: 700 }}
                >
                  Monthly.
                </h3>
              </div>
              <div className="text-right">
                <div
                  className="font-display text-[color:var(--color-cream)] leading-none tracking-[-0.018em]"
                  style={{ fontSize: 'clamp(42px, 5vw, 76px)', fontWeight: 700 }}
                >
                  {monthly.price}
                </div>
                <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                  {monthly.period}
                </div>
              </div>
            </div>

            <p className="text-[color:var(--color-cream)]/65 text-[14px] leading-[1.6] font-light mb-7">
              {monthly.description}
            </p>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {monthly.features.slice(0, 5).map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-[13.5px] text-[color:var(--color-cream)]/80 leading-[1.5] font-light">
                  <span className="block w-3 h-px bg-[#e41313]/70 shrink-0 translate-y-[-3px]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center justify-between gap-3 bg-transparent border border-[color:var(--color-cream)]/40 text-[color:var(--color-cream)] hover:border-[color:var(--color-cream)] px-6 py-4 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              <span>Start this month</span>
              <span aria-hidden className="block w-6 h-px bg-current" />
            </a>
          </article>
        </div>

        {/* footnote */}
        <p className="mt-12 sm:mt-14 text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/45 text-center font-medium">
          All access · Locker rooms · Recovery lounge · Trial hour on the house
        </p>
      </div>
    </section>
  );
}
