import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,5vw,48px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
            Simple Pricing
          </h2>
          <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full mb-5" />
          <p className="text-[color:var(--color-stone)] text-[16px] leading-relaxed max-w-xl mx-auto">
            No joining fee. No contracts. No hidden costs. Cancel anytime with 30 days notice.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl overflow-hidden transition-shadow ${
                tier.highlighted
                  ? 'border-2 border-[color:var(--color-ember)] shadow-xl'
                  : 'border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && tier.badge && (
                <div className="bg-[color:var(--color-ember)] text-white text-center py-2 text-[13px] font-semibold uppercase tracking-wider">
                  {tier.badge}
                </div>
              )}

              <div className="p-7">
                {/* Tier name */}
                <h3 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-[family-name:var(--font-heading)] text-[48px] font-bold text-[color:var(--color-ink)]">
                    {tier.price}
                  </span>
                  <span className="text-[color:var(--color-stone)] text-[14px]">
                    / {tier.period.replace('per ', '')}
                  </span>
                </div>

                <p className="text-[color:var(--color-stone)] text-[14px] leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px]">
                      <span className="text-[color:var(--color-ember)] mt-0.5 font-bold">✓</span>
                      <span className="text-[color:var(--color-ink)]/85">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`block text-center rounded-full py-3.5 text-[15px] font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-[color:var(--color-ember)] text-white hover:bg-[color:var(--color-ember-deep)]'
                      : 'border-2 border-[color:var(--color-ember)] text-[color:var(--color-ember)] hover:bg-[color:var(--color-ember)] hover:text-white'
                  }`}
                >
                  {tier.cta}
                </a>

                {!tier.highlighted && tier.badge && (
                  <p className="text-center text-[color:var(--color-ember)] text-[13px] font-medium mt-3">
                    {tier.badge}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
