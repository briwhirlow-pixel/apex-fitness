import { classes, trainers } from '@/lib/data';

const intensityColor: Record<string, string> = {
  'High': '#FF4D1C',
  'Moderate–High': '#FF8C00',
  'Low–Moderate': '#00C9A7',
  'Low': '#667EEA',
};

const categories = ['All', 'HIIT', 'Strength', 'Yoga', 'Cycling', 'Boxing', 'Recovery'];

export default function ClassesPage() {
  return (
    <div style={{ background: '#06080F' }} className="min-h-screen">

      {/* Header */}
      <section className="pt-32 pb-16 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Full Schedule</p>
        <h1 className="font-black leading-tight tracking-tighter text-white mb-6" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
          Every class.<br />Every level.
        </h1>
        <p className="text-white/40 text-[16px] leading-relaxed max-w-lg">
          40+ classes per week across 6 formats. Whether you're here to sweat, strengthen, or recover — there's a class for that.
        </p>
      </section>

      {/* Category pills */}
      <div className="px-5 sm:px-8 md:px-12 max-w-7xl mx-auto mb-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <span key={cat} className={`px-4 py-2 rounded-full text-[13px] font-bold border cursor-pointer transition-all ${
              cat === 'All'
                ? 'border-[#C8FF00] text-[#C8FF00]'
                : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
            }`}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Class grid */}
      <div className="px-5 sm:px-8 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {classes.map((cls) => (
            <div key={cls.id}
              className="rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#0E1118' }}>

              {/* Visual header */}
              <div className="h-44 relative flex items-end p-5" style={{ background: cls.gradient }}>
                <div className="absolute inset-0 opacity-[0.15]"
                  style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative flex items-center justify-between w-full">
                  <span className="text-white/90 text-[11px] font-bold tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {cls.category}
                  </span>
                  <span className="text-white/90 text-[11px] font-bold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {cls.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-white font-black text-[20px] tracking-tight">{cls.name}</h2>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-3"
                    style={{ color: intensityColor[cls.intensity] || '#C8FF00', background: `${intensityColor[cls.intensity] || '#C8FF00'}15` }}>
                    {cls.intensity}
                  </span>
                </div>

                <p className="text-white/40 text-[13px] leading-relaxed mb-5">{cls.description}</p>

                {/* Schedule */}
                <div className="mb-5">
                  <p className="text-white/25 text-[11px] uppercase tracking-widest mb-2 font-semibold">Schedule</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cls.schedule.map((time) => (
                      <span key={time} className="text-[11px] font-semibold text-white/50 border border-white/10 px-2.5 py-1 rounded-full">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Coach + spots */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white/70"
                      style={{ background: trainers.find(t => t.name === cls.trainer)?.gradient || 'rgba(255,255,255,0.1)' }}>
                      {cls.trainer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-white/50 text-[12px]">{cls.trainer}</span>
                  </div>
                  <span className="text-white/30 text-[12px]">{cls.spots} spots</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-[15px] mb-6">Ready to try your first class for free?</p>
          <a href="/contact"
            className="inline-flex items-center gap-2 font-black px-10 py-4 rounded-full text-[#06080F] text-[15px] hover:opacity-90 transition-all hover:scale-[1.03] active:scale-[0.97]"
            style={{ background: '#C8FF00' }}>
            Claim My Free Class →
          </a>
        </div>
      </div>
    </div>
  );
}
