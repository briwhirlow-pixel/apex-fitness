'use client';
import { useEffect, useState } from 'react';
import { stats } from '@/lib/data';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ background: '#060B18' }}>

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #C8FF00 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #FF4D1C 0%, transparent 70%)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full pt-32 pb-0">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] rounded-full px-4 py-1.5 mb-8 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span className="text-white/50 text-[12px] font-semibold tracking-widest uppercase">Chicago's Premier Performance Studio</span>
        </div>

        {/* Headline */}
        <h1 className={`font-black leading-[0.92] tracking-tighter mb-8 transition-opacity duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontSize: 'clamp(64px, 12vw, 148px)' }}>
          BUILT FOR<br />
          <span style={{ color: '#C8FF00' }}>PEAK</span><br />
          PERFORMANCE.
        </h1>

        {/* Sub + CTAs */}
        <div className={`flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-16 transition-opacity duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/45 text-[16px] sm:text-[18px] leading-relaxed max-w-sm">
            HIIT, strength, yoga, cycling, and recovery — all under one roof. First class is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8FF00] text-[#060B18] font-black px-7 py-4 rounded-lg text-[15px] hover:bg-white transition-colors hover:scale-[1.03] active:scale-[0.97]">
              Claim Free Trial →
            </a>
            <a href="/classes"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-lg border border-white/15 text-[15px] hover:border-white/40 transition-colors">
              View Schedule
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 border-t border-white/[0.08] transition-opacity duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`py-7 sm:py-8 px-0 sm:px-8 flex flex-col gap-1 ${i > 0 ? 'pl-6 sm:pl-8 border-l border-white/[0.08]' : ''}`}>
              <p className="text-[28px] sm:text-[36px] font-black text-white leading-none tracking-tight">{s.value}</p>
              <p className="text-white/35 text-[12px] sm:text-[13px] font-medium uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
