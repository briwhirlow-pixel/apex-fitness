import { features } from '@/lib/data';

export default function WhyApex() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: '#080E1E' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — headline + guarantee */}
          <div>
            <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Why APEX</p>
            <h2 className="font-black leading-tight tracking-tighter text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              A studio built by athletes,<br />
              <span style={{ color: '#C8FF00' }}>for results.</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed mb-8">
              Most gyms are just real estate with equipment. APEX is a performance system — every class, every coach, every square foot is designed to get you measurably better.
            </p>

            {/* Guarantee card */}
            <div className="rounded-2xl p-6 border border-[#C8FF00]/20" style={{ background: 'rgba(200,255,0,0.04)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" style={{ background: '#C8FF00' }}>
                  🏆
                </div>
                <div>
                  <p className="text-white font-black text-[15px] mb-1">The 30-Day Results Guarantee</p>
                  <p className="text-white/45 text-[13px] leading-relaxed">
                    If you don't see measurable progress in your first 30 days, we'll refund your full membership. No questions asked. We're that confident.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title}
                className="rounded-2xl p-6 border border-white/[0.06] hover:border-white/15 transition-all duration-300 group"
                style={{ background: '#0C1228' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: 'rgba(200,255,0,0.08)' }}>
                  {f.icon}
                </div>
                <h3 className="text-white font-black text-[15px] mb-2 leading-snug">{f.title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee strip */}
        <div className="mt-20 sm:mt-24 overflow-hidden border-t border-white/[0.06] pt-8">
          <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite', width: 'max-content' }}>
            {[
              'STRENGTH', 'HIIT', 'RECOVERY', 'PERFORMANCE', 'MOBILITY', 'ENDURANCE', 'COMMUNITY', 'RESULTS',
              'STRENGTH', 'HIIT', 'RECOVERY', 'PERFORMANCE', 'MOBILITY', 'ENDURANCE', 'COMMUNITY', 'RESULTS',
            ].map((word, i) => (
              <span key={i} className="text-[13px] font-black tracking-[0.25em] uppercase flex items-center gap-12">
                <span className="text-white/15">{word}</span>
                {i < 15 && <span style={{ color: '#C8FF00' }}>✦</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
