import { pricingTiers } from '@/lib/data';

/**
 * Memberships — three tier cards.
 * Featured middle tier elevated (slightly taller + red border + solid red CTA).
 * Each card: name + huge price + period + feature list + JOIN CTA.
 */
export default function Pricing() {
  return (
    <section id="memberships" className="relative bg-[#0c0a08] py-20 sm:py-28 lg:py-32">

      {/* atmospheric red wash */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/4 h-[400px] pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(228,19,19,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* opener */}
        <div className="reveal-up text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
            Memberships
          </div>
          <h2
            className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(44px, 6.4vw, 96px)', fontWeight: 700 }}
          >
            ONE PRICE.
            <br />
            NO SURPRISES<span className="text-[#e41313]">.</span>
          </h2>
          <p className="mt-6 text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light">
            No joining fee. No contract. Cancel any month with two weeks notice. The number you see is the number you pay.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pricingTiers.map((t, idx) => {
            const featured = t.highlighted;
            const revealClass = idx === 0 ? '' : idx === 1 ? 'reveal-d1' : 'reveal-d2';
            return (
              <article
                key={t.name}
                className={`reveal-up ${revealClass} relative bg-[#100e0b] p-7 sm:p-8 lg:p-10 flex flex-col ${
                  featured
                    ? 'border-2 border-[#e41313] lg:-translate-y-4 lg:py-12'
                    : 'border border-[#1a1814]'
                } transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* tier name */}
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`font-display text-[12px] tracking-[0.32em] uppercase ${
                      featured ? 'text-[#e41313]' : 'text-[color:var(--color-cream)]/55'
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    {t.name}
                  </div>
                  {featured && (
                    <div className="font-display text-[10px] tracking-[0.28em] uppercase text-[#e41313]" style={{ fontWeight: 700 }}>
                      Most chosen
                    </div>
                  )}
                </div>

                {/* huge price */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className={`font-display leading-none tracking-[-0.02em] ${
                      featured ? 'text-[#e41313]' : 'text-[color:var(--color-cream)]'
                    }`}
                    style={{
                      fontSize: featured ? 'clamp(64px, 7vw, 124px)' : 'clamp(56px, 6vw, 96px)',
                      fontWeight: 700,
                    }}
                  >
                    {t.price}
                  </span>
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/55 font-medium mb-6">
                  {t.period}
                </div>

                <p className="text-[color:var(--color-cream)]/65 text-[14px] leading-[1.6] font-light mb-6 pb-6 border-b border-[color:var(--color-cream)]/12">
                  {t.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-3 text-[13.5px] text-[color:var(--color-cream)]/82 leading-[1.55] font-light">
                      <span className="block w-3 h-px bg-[#e41313] shrink-0 translate-y-[-3px]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#freepass"
                  className={`inline-flex items-center justify-between gap-3 px-5 py-4 font-display text-[12px] tracking-[0.18em] uppercase transition-colors ${
                    featured
                      ? 'bg-[#e41313] text-[color:var(--color-cream)] hover:bg-[#b50e0e]'
                      : 'bg-transparent border border-[color:var(--color-cream)]/40 text-[color:var(--color-cream)] hover:bg-[color:var(--color-cream)] hover:text-[#0c0a08]'
                  }`}
                  style={{ fontWeight: 700 }}
                >
                  <span>Join {t.name}</span>
                  <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-[12px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/45 font-medium">
          All access · Locker rooms · Recovery lounge · Trial hour on the house
        </p>
      </div>
    </section>
  );
}
