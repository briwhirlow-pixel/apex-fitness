import { features } from '@/lib/data';

export default function WhyApex() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px]" style={{ background: '#C8FF00' }} />
              <p className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Why APEX</p>
            </div>
            <h2 className="font-black uppercase leading-[0.88] text-white mb-8"
              style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}>
              Built by athletes.<br />
              <span style={{ color: '#C8FF00' }}>Engineered<br />for results.</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed mb-10 max-w-md">
              Most gyms are just real estate with equipment. APEX is a performance system — every class, every coach, every square foot is designed to get you measurably better.
            </p>

            {/* Guarantee card */}
            <div className="border-l-4 border-[#C8FF00] pl-6 py-2">
              <p className="text-white font-black text-[17px] mb-2 uppercase tracking-tight">30-Day Results Guarantee</p>
              <p className="text-white/40 text-[14px] leading-relaxed">
                Attend 8+ classes in your first 30 days. See measurable progress or we refund your full membership — no questions asked.
              </p>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
            {features.map((f) => (
              <div key={f.title} className="p-7 bg-black hover:bg-[#111] transition-colors group">
                <div className="text-2xl mb-5">{f.icon}</div>
                <h3 className="text-white font-black text-[16px] uppercase tracking-tight mb-3">{f.title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 sm:mt-24 overflow-hidden border-t border-white/[0.06] pt-8">
          <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite', width: 'max-content' }}>
            {[
              'STRENGTH', 'HIIT', 'RECOVERY', 'PERFORMANCE', 'MOBILITY', 'ENDURANCE', 'COMMUNITY', 'RESULTS',
              'STRENGTH', 'HIIT', 'RECOVERY', 'PERFORMANCE', 'MOBILITY', 'ENDURANCE', 'COMMUNITY', 'RESULTS',
            ].map((word, i) => (
              <span key={i} className="text-[13px] font-black tracking-[0.3em] uppercase flex items-center gap-12">
                <span className="text-white/12">{word}</span>
                {i < 15 && <span style={{ color: '#C8FF00' }}>✦</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
