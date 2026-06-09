import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden bg-[color:var(--color-bone)]">

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Masthead */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-14 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                § 06 — The Rate Card
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
            </div>
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.95] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(46px, 7.5vw, 108px)', fontWeight: 500 }}
            >
              No tiers,<br />
              just <span className="serif-wonk">three</span> ways in.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pl-12 mt-4 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] leading-[1.6] max-w-md">
              No joining fee. No contract. No quiet auto-bumps. Cancel any month
              with notice, take ninety days for an injury, return when you&apos;re ready.
            </p>
          </div>
        </div>

        {/* THE TABLE */}
        <div className="relative">
          {/* Top rule */}
          <div className="h-px bg-[color:var(--color-ink)]/30" />

          {/* Headers */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 py-4 border-b border-[color:var(--color-ink)]/15">
            <div className="hidden lg:block col-span-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
              Rate
            </div>
            <div className="hidden lg:block col-span-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
              Price
            </div>
            <div className="hidden lg:block col-span-4 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
              What it includes
            </div>
            <div className="hidden lg:block col-span-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 text-right">
              Action
            </div>
          </div>

          {/* ROWS */}
          {pricingTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-6 py-10 sm:py-14 border-b border-[color:var(--color-ink)]/15 ${
                tier.highlighted ? 'bg-[color:var(--color-ink)] text-[color:var(--color-bone)] -mx-6 sm:-mx-10 px-6 sm:px-10' : ''
              }`}
            >
              {tier.highlighted && tier.badge && (
                <span className="absolute -top-px left-6 sm:left-10 px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase bg-[color:var(--color-ember)] text-[color:var(--color-bone)]">
                  {tier.badge}
                </span>
              )}

              {/* Rate name + index */}
              <div className="col-span-12 lg:col-span-3">
                <div className={`font-mono text-[10px] tracking-[0.22em] uppercase mb-2 ${tier.highlighted ? 'text-[color:var(--color-ember)]' : 'text-[color:var(--color-ink)]/50'}`}>
                  Nº 0{i + 1}
                </div>
                <h3
                  className={`serif-display leading-[0.95] tracking-[-0.02em] ${tier.highlighted ? 'text-[color:var(--color-bone)]' : 'text-[color:var(--color-ink)]'}`}
                  style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 500 }}
                >
                  {tier.name}<span className="text-[color:var(--color-ember)]">.</span>
                </h3>
                {!tier.highlighted && tier.badge && (
                  <div className="mt-3 inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] border border-[color:var(--color-ember)]/40 px-2.5 py-1">
                    {tier.badge}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="col-span-12 lg:col-span-3">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`serif-display leading-none tracking-[-0.025em] ${tier.highlighted ? 'text-[color:var(--color-ember)]' : 'text-[color:var(--color-ink)]'}`}
                    style={{ fontSize: 'clamp(48px, 6.5vw, 84px)', fontWeight: 500 }}
                  >
                    {tier.price}
                  </span>
                  <span className={`font-mono text-[11px] tracking-[0.15em] uppercase ${tier.highlighted ? 'text-[color:var(--color-bone)]/50' : 'text-[color:var(--color-ink)]/45'}`}>
                    / {tier.period.replace('per ', '')}
                  </span>
                </div>
                <p className={`mt-3 font-sans text-[13px] leading-[1.55] max-w-[28ch] ${tier.highlighted ? 'text-[color:var(--color-bone)]/55' : 'text-[color:var(--color-ink-soft)]'}`}>
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="col-span-12 lg:col-span-4">
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-sans text-[13.5px] leading-[1.5]">
                      <span className={`font-mono text-[11px] mt-1 ${tier.highlighted ? 'text-[color:var(--color-ember)]' : 'text-[color:var(--color-ember)]'}`}>—</span>
                      <span className={tier.highlighted ? 'text-[color:var(--color-bone)]/85' : 'text-[color:var(--color-ink)]/85'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="col-span-12 lg:col-span-2 lg:text-right flex lg:justify-end items-end">
                <a
                  href="/contact"
                  className={`group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
                    tier.highlighted
                      ? 'text-[color:var(--color-bone)] hover:text-[color:var(--color-ember)]'
                      : 'text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)]'
                  }`}
                >
                  {tier.cta}
                  <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-12" />
                </a>
              </div>
            </div>
          ))}

          {/* Footnotes */}
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 pt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
            <div className="col-span-12 lg:col-span-6 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              <span>* All rates incl. tax</span>
              <span>† 30-day money-back floor</span>
              <span>‡ Member rate locked to start date</span>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right mt-2 lg:mt-0">
              Filed: rate-card.06 · valid through 12.31.26
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
