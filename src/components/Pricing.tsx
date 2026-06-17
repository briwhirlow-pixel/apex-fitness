import { pricingTiers } from '@/lib/data';

/**
 * Pricing — vertical full-width list. Each tier its own row.
 * Price massive LEFT, features RIGHT, CTA inline.
 * NOT three columns side-by-side. No "Most Popular" badge.
 * Background: #070503 (deeper than Coaches above for variation).
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#070503] text-[color:var(--color-cream)] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section opener */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-12 sm:mb-16">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(56px, 9vw, 144px)', fontWeight: 700 }}
          >
            THE RATE CARD
            <span className="text-[#e41313]">.</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/70 text-[15px] sm:text-[16px] leading-[1.7] font-light lg:pb-3 max-w-md">
            No joining fee. No contract. Cancel any month with two weeks notice. The number you see is the number you pay.
          </p>
        </div>

        {/* TIER LIST — full-width rows */}
        <ul className="border-t border-[#e41313]/35">
          {pricingTiers.map((t) => {
            const isFeature = t.highlighted;
            return (
              <li
                key={t.name}
                className={`grid grid-cols-12 gap-x-5 sm:gap-x-8 gap-y-5 border-b border-[#e41313]/25 ${
                  isFeature ? 'py-10 sm:py-16' : 'py-8 sm:py-12'
                }`}
              >
                {/* LEFT — name + huge price */}
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                  <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-2 sm:mb-3">
                    {t.name}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display text-[color:var(--color-cream)] leading-none tracking-[-0.018em]"
                      style={{
                        fontSize: isFeature
                          ? 'clamp(64px, 8vw, 132px)'
                          : 'clamp(48px, 6vw, 96px)',
                        fontWeight: 700,
                      }}
                    >
                      {t.price}
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                    {t.period}
                  </div>
                </div>

                {/* MIDDLE — what you get */}
                <div className="col-span-12 sm:col-span-5 lg:col-span-6">
                  <p className="text-[color:var(--color-cream)]/72 text-[14px] sm:text-[15px] leading-[1.7] font-light mb-4">
                    {t.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-baseline gap-2.5 text-[13px] sm:text-[13.5px] text-[color:var(--color-cream)]/80 leading-[1.5] font-light">
                        <span className="block w-2.5 h-px bg-[#e41313] shrink-0 translate-y-[-3px]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT — CTA inline */}
                <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex sm:items-center sm:justify-end">
                  <a
                    href="/#contact"
                    className={`inline-flex items-center justify-between gap-3 px-5 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors w-full sm:w-auto ${
                      isFeature
                        ? 'bg-[#e41313] text-[color:var(--color-cream)] hover:bg-[#b50e0e]'
                        : 'bg-transparent border border-[color:var(--color-cream)]/35 text-[color:var(--color-cream)] hover:border-[color:var(--color-cream)] hover:bg-[color:var(--color-cream)] hover:text-[#0c0a08]'
                    }`}
                  >
                    <span>{t.cta}</span>
                    <span aria-hidden className="block w-5 h-px bg-current" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 sm:mt-14 text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/45 font-medium">
          All access · Locker rooms · Recovery lounge · Trial hour on the house
        </p>
      </div>
    </section>
  );
}
