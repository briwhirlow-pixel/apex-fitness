import { trainers } from '@/lib/data';

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32" style={{ background: '#F2F2F0' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#C8FF00]" />
              <p className="text-[#0A0A0A]/40 text-[11px] font-bold tracking-[0.2em] uppercase">The Coaches</p>
            </div>
            <h2 className="font-black uppercase leading-[0.88] text-[#0A0A0A]" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Elite coaches.<br />Real results.
            </h2>
          </div>
          <p className="text-[#0A0A0A]/45 text-[15px] leading-relaxed max-w-xs">
            Every APEX coach holds 2+ certifications and 60 hours of internal training before leading a single class.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.name}
              className="group bg-white border border-black/[0.08] hover:border-black/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">

              {/* Avatar */}
              <div className="h-56 relative flex items-center justify-center" style={{ background: trainer.gradient }}>
                <span className="text-white/12 font-black select-none" style={{ fontSize: '108px', lineHeight: 1 }}>
                  {trainer.initials}
                </span>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-sm">
                    {trainer.specialty.split(' · ')[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#0A0A0A]/40 text-[11px] font-bold tracking-widest uppercase mb-1">{trainer.title}</p>
                <h3 className="text-[#0A0A0A] font-black text-[22px] tracking-tight mb-3 uppercase">{trainer.name}</h3>
                <p className="text-[#0A0A0A]/45 text-[13px] leading-relaxed mb-5">{trainer.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="text-[11px] font-bold text-[#0A0A0A]/50 border border-black/10 px-2.5 py-1 rounded-sm">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <p className="text-[#0A0A0A]/30 text-[11px] uppercase tracking-widest mb-2 font-bold">Leads</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.classes.map((cls) => (
                      <span key={cls} className="text-[12px] font-bold px-3 py-1 rounded-sm text-[#0A0A0A]"
                        style={{ background: '#C8FF00' }}>
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
