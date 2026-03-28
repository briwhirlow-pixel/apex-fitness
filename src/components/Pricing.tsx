import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32" style={{ background: '#F2F2F0' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#C8FF00]" />
            <p className="text-[#0A0A0A]/40 text-[11px] font-bold tracking-[0.2em] uppercase">Membership</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-black uppercase leading-[0.88] text-[#0A0A0A]" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Simple pricing.<br />No surprises.
            </h2>
            <p className="text-[#0A0A0A]/45 text-[15px] max-w-xs leading-relaxed">
              Cancel anytime. No contracts. No joining fees. Your first class is always free.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div key={tier.name}
              className={`relative flex flex-col border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-black scale-[1.02]'
                  : 'border-black/[0.1] hover:border-black/25'
              }`}
              style={{ background: tier.highlighted ? '#0A0A0A' : '#FFFFFF' }}>

              {tier.badge && (
                <span className="absolute -top-3.5 left-5 text-[11px] font-black px-4 py-1.5 tracking-widest uppercase"
                  style={{ background: '#C8FF00', color: '#0A0A0A' }}>
                  {tier.badge}
                </span>
              )}

              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <p className={`text-[11px] font-bold tracking-widest uppercase mb-4 ${tier.highlighted ? 'text-white/40' : 'text-[#0A0A0A]/40'}`}>
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`font-black leading-none ${tier.highlighted ? 'text-[#C8FF00]' : 'text-[#0A0A0A]'}`}
                    style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}>
                    {tier.price}
                  </span>
                  <span className={`text-[14px] mb-2 ${tier.highlighted ? 'text-white/30' : 'text-[#0A0A0A]/30'}`}>
                    /{tier.period.replace('per ', '')}
                  </span>
                </div>
                <p className={`text-[13px] leading-relaxed mb-7 ${tier.highlighted ? 'text-white/40' : 'text-[#0A0A0A]/45'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px]">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5" style={{ color: '#C8FF00' }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className={tier.highlighted ? 'text-white/60' : 'text-[#0A0A0A]/60'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contact"
                  className={`block text-center py-4 font-black text-[14px] tracking-wide uppercase transition-all hover:scale-[1.02] active:scale-[0.98] rounded-lg ${
                    tier.highlighted
                      ? 'bg-[#C8FF00] text-[#0A0A0A] hover:opacity-90'
                      : 'bg-[#0A0A0A] text-white hover:bg-[#222]'
                  }`}>
                  {tier.cta} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {['No joining fee', 'Cancel anytime', 'First class free', 'No contracts'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[#0A0A0A]/40 text-[13px]">
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
