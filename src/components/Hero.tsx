'use client';
import { useEffect, useState } from 'react';
import { stats } from '@/lib/data';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Lime corner accent */}
      <div className="absolute top-0 right-0 w-[2px] h-[40vh]" style={{ background: '#C8FF00' }} />
      <div className="absolute top-0 right-0 h-[2px] w-[20vw]" style={{ background: '#C8FF00' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full pt-36 pb-0">

        {/* Eyebrow */}
        <div className={`flex items-center justify-center gap-3 mb-8 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-8 h-[2px]" style={{ background: '#C8FF00' }} />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: '#C8FF00' }}>
            Chicago's #1 Performance Studio
          </span>
          <span className="w-8 h-[2px]" style={{ background: '#C8FF00' }} />
        </div>

        {/* Massive headline */}
        <h1 className={`font-black uppercase leading-[0.88] text-white text-center mb-10 transition-opacity duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontSize: 'clamp(68px, 13vw, 172px)' }}>
          BUILT<br />
          FOR<br />
          <span style={{ color: '#C8FF00' }}>PEAK</span><br />
          PERFORMANCE.
        </h1>

        {/* Sub + CTAs */}
        <div className={`flex flex-col items-center gap-6 mb-16 text-center transition-opacity duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/50 text-[16px] sm:text-[17px] leading-relaxed max-w-sm">
            HIIT, strength, yoga, cycling, and recovery — all under one roof. First class is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact"
              className="inline-flex items-center justify-center gap-2 font-black px-8 py-4 rounded-lg text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#C8FF00', color: '#0A0A0A' }}>
              Claim Free Trial →
            </a>
            <a href="/classes"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-lg border border-white/20 text-[15px] hover:bg-white/10 transition-colors">
              View Schedule
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 transition-opacity duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`py-7 sm:py-8 flex flex-col gap-1.5 ${i > 0 ? 'pl-6 sm:pl-8 border-l border-white/10' : ''}`}>
              <p className="font-black text-white leading-none" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>{s.value}</p>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
