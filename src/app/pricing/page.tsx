import { pricingTiers } from '@/lib/data';

const faqs = [
  {
    q: "Is there really a free first class?",
    a: "Yes. Walk in, take any class on the schedule, meet your coach. If you don't love it, you owe us nothing and walk out with no obligation.",
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Monthly members can cancel any time with 30 days notice — no penalty, no questions. Annual members can cancel with a prorated refund in the first 30 days.",
  },
  {
    q: "What's the 30-Day Results Guarantee?",
    a: "If you attend at least 8 classes in your first 30 days and don't see measurable progress, we'll refund your full first month. We track everything so you can prove it.",
  },
  {
    q: "Are there joining fees?",
    a: "None. No initiation fees, no admin fees, no hidden costs. The price you see is what you pay.",
  },
  {
    q: "Can I pause my membership?",
    a: "Monthly members can pause for up to 60 days per year — useful for travel or injury. Just let the front desk know.",
  },
  {
    q: "What does the free guest pass cover?",
    a: "Your guest gets access to any single class of their choice. It's a great way to bring a friend and split the motivation.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: '#0A0A0A' }} className="min-h-screen">

      {/* Header */}
      <section className="pt-32 pb-16 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto text-center">
        <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Membership</p>
        <h1 className="font-black leading-tight tracking-tighter text-white mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
          Simple pricing.<br />No surprises.
        </h1>
        <p className="text-white/40 text-[16px] leading-relaxed max-w-lg mx-auto">
          No contracts. No joining fees. No commitment required to try. Your first class is always free.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="px-5 sm:px-8 md:px-12 max-w-5xl mx-auto mb-20">
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-start">
          {pricingTiers.map((tier) => (
            <div key={tier.name}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col border transition-all duration-300 ${
                tier.highlighted
                  ? 'border-[#C8FF00]/40 scale-[1.02]'
                  : 'border-white/[0.06] hover:border-white/15'
              }`}
              style={{ background: tier.highlighted ? 'rgba(200,255,0,0.06)' : 'rgba(255,255,255,0.04)' }}>

              {tier.badge && (
                <span className={`absolute -top-3.5 left-6 text-[11px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase ${
                  tier.highlighted
                    ? 'bg-[#C8FF00] text-[#0A0A0A]'
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
                      <svg width="8" height="8" fill="none" stroke={tier.highlighted ? '#0A0A0A' : '#C8FF00'} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-white/60">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact"
                className={`block text-center py-4 rounded-lg font-black text-[14px] transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? 'bg-[#C8FF00] text-[#0A0A0A] hover:bg-white'
                    : 'bg-white/[0.06] text-white hover:bg-white/10 border border-white/10'
                }`}>
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center">
          {['No joining fee', 'Cancel anytime', 'First class free', 'No contracts', '30-day guarantee'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/35 text-[13px]">
              <svg width="14" height="14" fill="none" stroke="#C8FF00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 md:px-12 max-w-3xl mx-auto pb-24">
        <h2 className="font-black text-white text-center mb-12 tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
          Common questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <p className="text-white font-bold text-[15px] mb-2">{faq.q}</p>
              <p className="text-white/45 text-[14px] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-[15px] mb-6">Still have questions? We're happy to help.</p>
          <a href="/contact"
            className="inline-flex items-center gap-2 font-black px-10 py-4 rounded-lg text-[#0A0A0A] text-[15px] hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.97]"
            style={{ background: '#C8FF00' }}>
            Talk to Us →
          </a>
        </div>
      </section>
    </div>
  );
}
