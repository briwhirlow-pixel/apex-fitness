import { classes } from '@/lib/data';

const intensityColor: Record<string, string> = {
  'High': '#FF4D1C',
  'Moderate–High': '#FF8C00',
  'Low–Moderate': '#00C9A7',
  'Low': '#667EEA',
};

export default function Classes() {
  return (
    <section id="classes" className="py-24 sm:py-32" style={{ background: '#060B18' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">What We Offer</p>
            <h2 className="font-black leading-tight tracking-tighter text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Six classes.<br />Zero excuses.
            </h2>
          </div>
          <a href="/classes" className="flex-shrink-0 inline-flex items-center gap-2 text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all">
            Full Schedule →
          </a>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-5 sm:mx-0 overflow-x-auto sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-3 gap-4 px-5 sm:px-0 pb-2 sm:pb-0">
            {classes.map((cls) => (
              <div key={cls.id}
                className="flex-shrink-0 w-[300px] sm:w-auto group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                style={{ background: '#0C1228' }}>

                {/* Visual header */}
                <div className="h-40 relative overflow-hidden" style={{ background: cls.gradient }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/10 font-black text-[80px] leading-none tracking-tighter select-none">
                      {cls.name.split(' ')[0].charAt(0)}{cls.name.split(' ')[1]?.charAt(0) ?? ''}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                    <span className="text-white text-[11px] font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full">{cls.category}</span>
                    <span className="text-white text-[11px] font-bold">{cls.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-black text-[18px] tracking-tight">{cls.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-1"
                      style={{ color: intensityColor[cls.intensity] ?? '#fff', background: `${intensityColor[cls.intensity] ?? '#fff'}18` }}>
                      {cls.intensity}
                    </span>
                  </div>
                  <p className="text-white/40 text-[13px] leading-relaxed mb-4">{cls.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <p className="text-white/35 text-[12px]">with <span className="text-white/60 font-semibold">{cls.trainer}</span></p>
                    <p className="text-white/35 text-[12px]">{cls.spots} spots</p>
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
