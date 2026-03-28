import { trainers } from '@/lib/data';

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32" style={{ background: '#060B18' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">The Coaches</p>
            <h2 className="font-black leading-tight tracking-tighter text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Coaches who train.<br />Teachers who care.
            </h2>
          </div>
          <p className="text-white/40 text-[15px] leading-relaxed max-w-xs">
            Every APEX coach holds 2+ certifications and goes through 60 hours of internal training before leading a single class.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.name}
              className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#0C1228' }}>

              {/* Avatar area */}
              <div className="h-52 relative flex items-center justify-center" style={{ background: trainer.gradient }}>
                <span className="text-white/15 font-black select-none" style={{ fontSize: '100px', lineHeight: 1 }}>
                  {trainer.initials}
                </span>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                    {trainer.specialty.split(' · ')[0]}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-[#C8FF00] text-[11px] font-bold tracking-widest uppercase mb-1">{trainer.title}</p>
                <h3 className="text-white font-black text-[22px] tracking-tight mb-3">{trainer.name}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed mb-5">{trainer.bio}</p>

                {/* Certs */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="text-[11px] font-bold text-white/50 border border-white/10 px-2.5 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Classes */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white/25 text-[11px] uppercase tracking-widest mb-2 font-semibold">Leads</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.classes.map((cls) => (
                      <span key={cls} className="text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(200,255,0,0.08)', color: '#C8FF00' }}>
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
