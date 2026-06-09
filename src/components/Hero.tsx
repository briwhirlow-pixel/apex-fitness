'use client';
import { useEffect, useState } from 'react';
import { stats } from '@/lib/data';

const cards = [
  { title: 'Our Classes', desc: 'Six disciplines from HIIT to recovery yoga.', href: '/classes', icon: '🏋️' },
  { title: 'Meet the Trainers', desc: 'Three resident coaches who know your name.', href: '/#trainers', icon: '👊' },
  { title: 'View Schedule', desc: 'Find your next session and reserve a spot.', href: '/classes', icon: '📅' },
  { title: 'Pricing', desc: 'No contracts, no joining fee. Cancel anytime.', href: '/pricing', icon: '💰' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white pt-32 sm:pt-40 pb-20 sm:pb-28">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(228,19,19,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(85,159,176,0.2) 0%, transparent 50%)',
        }} />

        <div
          className="relative max-w-[1170px] mx-auto px-5 sm:px-8 text-center"
          style={{
            animation: mounted ? 'fade-up 800ms ease-out both' : 'none',
            opacity: mounted ? undefined : 0,
          }}
        >
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(40px,8vw,72px)] font-bold uppercase leading-[1.1] tracking-wide mb-6">
            Experience the <span className="text-[color:var(--color-ember)]">APEX</span> Difference
          </h1>
          <p className="text-white/75 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10">
            A performance studio in Lincoln Park. Six disciplines, three coaches, one
            uncompromising standard. Your first hour is on the house.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-10 py-4 text-[16px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="relative max-w-[1170px] mx-auto px-5 sm:px-8 mt-16"
          style={{
            animation: mounted ? 'fade-in 600ms ease-out 500ms both' : 'none',
            opacity: mounted ? undefined : 0,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5">
                <div className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[32px] font-bold text-[color:var(--color-ember)]">
                  {s.value}
                </div>
                <div className="text-white/60 text-[13px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8 -mt-8 relative z-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="text-[32px] mb-3">{card.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase tracking-wide text-[color:var(--color-ink)] group-hover:text-[color:var(--color-ember)] transition-colors mb-2">
                {card.title}
              </h3>
              <p className="text-[color:var(--color-stone)] text-[14px] leading-relaxed">
                {card.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
