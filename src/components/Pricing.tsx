import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32" style={{ background: '#06080F' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Membership</p>
          <h2 className="font-black leading-tight tracking-tighter text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Simple pricing.<br />No surprise fees.
          </h2>
          <p className="text-white/40 text-[16px] max-w-md mx-auto leading-relaxed">
            Cancel anytime. No contracts. No joining fees. Just show up.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-start">
          {pricingTiers.map((tier) => (
            <div key={tier.name}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-[#C8FF00]/40 scale-[1.02]'
                  : 'border-white/[0.06] hover:border-white/15'
              }`}
              style={{ background: tier.highlighted ? '#0F1A00' : '#0E1118' }}>

              {tier.badge && (
                <span className={`absolute -top-3.5 left-6 text-[11px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase ${
                  tier.highlighted
                    ? 'bg-[#C8FF00] text-[#06080F]'
                    : 'bg-white/10 text-white/60'
                }`}>
                  {tier.badge}
                </span>
              )}

              <div className="mb-6">
                <p className="text-white/40 text-[12px] font-bold tracking-widest uppercase mb-3">{tier.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`font-black leading-none tracking-tighter ${tier.highlighted ? 'text-[#C8FF00]' : 'text-white'}`}
                    style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
                    {tier.price}
                  </span>
                  <span className="text-white/30 text-[14px] mb-2">/{tier.period.replace('per ', '')}</span>
                </div>
                <p className="text-white/40 text-[13px] leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px]">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: tier.highlighted ? '#C8FF00' : 'rgba(200,255,0,0.12)' }}>
                      <svg width="8" height="8" fill="none" stroke={tier.highlighted ? '#06080F' : '#C8FF00'} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-white/60">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact"
                className={`block text-center py-4 rounded-full font-black text-[14px] transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? 'bg-[#C8FF00] text-[#06080F] hover:bg-white'
                    : 'bg-white/[0.06] text-white hover:bg-white/10 border border-white/10'
                }`}>
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center">
          {['No joining fee', 'Cancel anytime', 'First class free', 'No contracts'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/35 text-[13px]">
              <svg width="14" height="14" fill="none" stroke="#C8FF00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
