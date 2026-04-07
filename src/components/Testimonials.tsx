import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px]" style={{ background: '#C8FF00' }} />
              <p className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Member Stories</p>
            </div>
            <h2 className="font-black uppercase leading-[0.88] text-white" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Real people.<br />Real results.
            </h2>
          </div>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C8FF00">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06]">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-black p-8 flex flex-col gap-6 hover:bg-[#0A0A0A] transition-colors">

              {/* Class tag */}
              <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm self-start"
                style={{ background: '#C8FF00', color: '#0A0A0A' }}>
                {t.class}
              </span>

              {/* Quote */}
              <p className="text-white/55 text-[15px] leading-relaxed flex-1 italic">"{t.text}"</p>

              {/* Highlight bar */}
              <div className="border-l-2 border-[#C8FF00] pl-4">
                <p className="text-[#C8FF00] text-[13px] font-black uppercase tracking-wide">{t.highlight}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: t.gradient }}>
                  <span className="text-white text-[11px] font-black">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-black text-[14px] uppercase tracking-tight">{t.name}</p>
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
