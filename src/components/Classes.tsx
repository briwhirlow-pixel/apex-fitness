import { classes } from '@/lib/data';

const intensityColor: Record<string, string> = {
  'High': '#FF4D1C',
  'Moderate–High': '#FF8C00',
  'Low–Moderate': '#00C9A7',
  'Low': '#667EEA',
};

export default function Classes() {
  return (
    <section id="classes" className="py-24 sm:py-32" style={{ background: '#F2F2F0' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#C8FF00]" />
              <p className="text-[#0A0A0A]/40 text-[11px] font-bold tracking-[0.2em] uppercase">What We Offer</p>
            </div>
            <h2 className="font-black leading-[0.9] uppercase text-[#0A0A0A]" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Six classes.<br />Zero excuses.
            </h2>
          </div>
          <a href="/classes"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#0A0A0A]/50 hover:text-[#0A0A0A] border border-black/15 hover:border-black/40 px-5 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wide transition-all">
            Full Schedule →
          </a>
        </div>

        <div className="-mx-5 sm:mx-0 overflow-x-auto sm:overflow-visible scroll-smooth">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 px-5 sm:px-0 pb-4 sm:pb-0 snap-x snap-mandatory sm:snap-none">
            {classes.map((cls) => (
              <div key={cls.id}
                className="flex-shrink-0 w-[80vw] max-w-[300px] sm:w-auto snap-start group rounded-xl overflow-hidden border border-black/[0.08] hover:border-black/20 bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer">

                {/* Visual header */}
                <div className="h-40 relative overflow-hidden" style={{ background: cls.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/10 font-black select-none" style={{ fontSize: '80px', lineHeight: 1 }}>
                      {cls.name.split(' ')[0].charAt(0)}{cls.name.split(' ')[1]?.charAt(0) ?? ''}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}>
                    <span className="text-white text-[11px] font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-sm">
                      {cls.category}
                    </span>
                    <span className="text-white text-[11px] font-bold">{cls.duration}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-[#0A0A0A] font-black text-[18px] tracking-tight">{cls.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm flex-shrink-0 mt-1"
                      style={{ color: intensityColor[cls.intensity] ?? '#000', background: `${intensityColor[cls.intensity] ?? '#000'}18` }}>
                      {cls.intensity}
                    </span>
                  </div>
                  <p className="text-[#0A0A0A]/45 text-[13px] leading-relaxed mb-4">{cls.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                    <p className="text-[#0A0A0A]/35 text-[12px]">with <span className="text-[#0A0A0A]/60 font-semibold">{cls.trainer}</span></p>
                    <p className="text-[#0A0A0A]/35 text-[12px]">{cls.spots} spots</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
