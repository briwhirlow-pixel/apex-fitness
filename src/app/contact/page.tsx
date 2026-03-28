'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire to API route when ready
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div style={{ background: '#0A0A0A' }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left */}
          <div>
            <p className="text-[#C8FF00] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Free Trial Class</p>
            <h1 className="font-black leading-tight tracking-tighter text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Your first class<br />is on us.
            </h1>
            <p className="text-white/45 text-[16px] leading-relaxed mb-10">
              No credit card. No commitment. Just show up, take any class, and see what APEX is about. If you love it, we'll talk membership. If not, no hard feelings.
            </p>

            {/* Info cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '📍', title: 'Location', body: siteConfig.address },
                { icon: '🕐', title: 'Hours', body: `Mon–Fri ${siteConfig.hours.weekday} · Sat ${siteConfig.hours.saturday} · Sun ${siteConfig.hours.sunday}` },
                { icon: '📞', title: 'Phone', body: siteConfig.phone },
                { icon: '✉️', title: 'Email', body: siteConfig.email },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl p-5 border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold mb-1">{item.title}</p>
                    <p className="text-white/60 text-[14px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="rounded-2xl p-6 border border-[#C8FF00]/20" style={{ background: 'rgba(200,255,0,0.04)' }}>
              <p className="text-white font-black text-[14px] mb-4">What to expect on your first visit</p>
              <ul className="space-y-2">
                {[
                  "Arrive 10 min early — we'll give you a quick tour",
                  'Wear workout clothes and bring water',
                  'All equipment is provided',
                  "Tell the coach it's your first time — they'll scale to your level",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/50 text-[13px]">
                    <span className="text-[#C8FF00] mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="rounded-3xl p-10 border border-[#C8FF00]/30 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                style={{ background: 'rgba(200,255,0,0.04)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6"
                  style={{ background: '#C8FF00' }}>
                  ✓
                </div>
                <h2 className="text-white font-black text-[26px] tracking-tight mb-3">You're in!</h2>
                <p className="text-white/50 text-[15px] leading-relaxed max-w-sm">
                  We've received your info and will reach out within a few hours to confirm your free class. See you on the floor.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-3xl p-8 sm:p-10 border border-white/[0.06]"
                style={{ background: 'rgba(255,255,255,0.04)' }}>

                <h2 className="text-white font-black text-[22px] tracking-tight mb-8">Claim your free class</h2>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">First Name</label>
                      <input type="text" name="firstName" required placeholder="Alex"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8FF00]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">Last Name</label>
                      <input type="text" name="lastName" required placeholder="Johnson"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8FF00]/50 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">Email</label>
                    <input type="email" name="email" required placeholder="alex@gmail.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8FF00]/50 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">Phone (optional)</label>
                    <input type="tel" name="phone" placeholder="(312) 555-0100"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8FF00]/50 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">Which class interests you?</label>
                    <select name="classInterest" required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white/70 text-[14px] focus:outline-none focus:border-[#C8FF00]/50 transition-colors appearance-none"
                      style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <option value="" className="bg-[#111111]">Pick a class</option>
                      {['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset', "I'm not sure yet"].map((c) => (
                        <option key={c} value={c} className="bg-[#111111]">{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/40 text-[12px] font-bold uppercase tracking-widest mb-2">What are your fitness goals?</label>
                    <textarea name="goals" rows={3} placeholder="Lose weight, build strength, reduce stress..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-[#C8FF00]/50 transition-colors resize-none" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-lg font-black text-[#0A0A0A] text-[15px] transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                    style={{ background: '#C8FF00' }}>
                    {loading ? 'Sending...' : 'Claim My Free Class →'}
                  </button>

                  <p className="text-white/25 text-[12px] text-center">
                    No credit card required · Walk-ins also welcome · Chicago, IL
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
