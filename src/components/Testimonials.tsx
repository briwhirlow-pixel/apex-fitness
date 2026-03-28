import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32" style={{ background: '#080E1E' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Member Stories</p>
          <h2 className="font-black leading-tight tracking-tighter text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Real people.<br />Real results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name}
              className="rounded-2xl p-7 flex flex-col gap-5 border border-white/[0.06] hover:border-white/15 transition-all duration-300"
              style={{ background: '#0C1228' }}>

              {/* Stars + tag */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8FF00">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: '#C8FF00', background: 'rgba(200,255,0,0.08)' }}>
                  {t.class}
                </span>
              </div>

              {/* Quote */}
              <p className="text-white/60 text-[14px] leading-relaxed flex-1">"{t.text}"</p>

              {/* Highlight */}
              <div className="rounded-xl px-4 py-3 border border-[#C8FF00]/15" style={{ background: 'rgba(200,255,0,0.04)' }}>
                <p className="text-[#C8FF00] text-[12px] font-bold">✦ {t.highlight}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.gradient }}>
                  <span className="text-white text-[11px] font-black">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-[13px]">{t.name}</p>
                  <p className="text-white/30 text-[11px]">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
