import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-semibold uppercase tracking-[0.03em] text-[#1a1a1a] mb-4">
            Membership Plans
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.7]">
            No joining fee, no contracts, no fine print. The price you see is what you pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 ${
                tier.highlighted
                  ? 'bg-[#1a1a1a] text-white rounded-lg md:-my-4 shadow-[0_12px_40px_rgba(0,0,0,0.15)] z-10'
                  : 'bg-white border border-[#e5e5e5] first:rounded-l-lg last:rounded-r-lg'
              }`}
            >
              {tier.highlighted && tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e41313] text-white text-[11px] font-semibold uppercase tracking-[0.08em] rounded-full px-4 py-1">
                  {tier.badge}
                </span>
              )}

              <h3 className={`font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase tracking-[0.03em] mb-2 ${
                tier.highlighted ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className={`font-[family-name:var(--font-heading)] text-[44px] font-bold ${
                  tier.highlighted ? 'text-[#e41313]' : 'text-[#1a1a1a]'
                }`}>
                  {tier.price}
                </span>
                <span className={`text-[14px] ${tier.highlighted ? 'text-white/50' : 'text-[#999]'}`}>
                  / {tier.period.replace('per ', '')}
                </span>
              </div>

              <p className={`text-[13px] leading-[1.5] mb-6 ${tier.highlighted ? 'text-white/60' : 'text-[#777]'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-[1.5] ${
                    tier.highlighted ? 'text-white/85' : 'text-[#555]'
                  }`}>
                    <span className="text-[#e41313] mt-0.5 text-[13px]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`block text-center rounded-full py-3 text-[15px] font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-[#e41313] text-white hover:bg-[#c10e0e]'
                    : 'border-2 border-[#e41313] text-[#e41313] hover:bg-[#e41313] hover:text-white'
                }`}
              >
                {tier.cta}
              </a>

              {!tier.highlighted && tier.badge && (
                <p className="text-center text-[#e41313] text-[12px] font-medium mt-3">
                  {tier.badge}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
