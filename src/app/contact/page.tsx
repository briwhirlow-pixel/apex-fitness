'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white pt-32 sm:pt-36 pb-16">
        <div className="max-w-[1170px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(40px,8vw,64px)] font-bold uppercase tracking-wide mb-4">
            Get In Touch
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Pick a class, leave a note, and we&apos;ll have a coach reach out within the day. Your first hour is free — no card, no commitment.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-[1170px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <aside className="order-2 lg:order-1 space-y-8">

            {/* Location */}
            <div className="bg-[color:var(--color-bone-soft)] rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] mb-3">
                Location
              </h3>
              <p className="text-[color:var(--color-ink)] text-[15px] font-medium">
                {siteConfig.address.split(',')[0]}
              </p>
              <p className="text-[color:var(--color-stone)] text-[14px]">
                {siteConfig.address.split(',').slice(1).join(',').trim()}
              </p>
            </div>

            {/* Hours */}
            <div className="bg-[color:var(--color-bone-soft)] rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] mb-3">
                Hours
              </h3>
              <div className="text-[color:var(--color-stone)] text-[14px] space-y-1.5">
                <p>Mon–Fri: {siteConfig.hours.weekday}</p>
                <p>Saturday: {siteConfig.hours.saturday}</p>
                <p>Sunday: {siteConfig.hours.sunday}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[color:var(--color-bone-soft)] rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] mb-3">
                Contact
              </h3>
              <div className="space-y-2">
                <a href={`mailto:${siteConfig.email}`} className="block text-[color:var(--color-ember)] text-[15px] font-medium hover:underline">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="block text-[color:var(--color-stone)] text-[14px] hover:text-[color:var(--color-ember)] transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Trial day info */}
            <div className="bg-[color:var(--color-bone-soft)] rounded-xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-[color:var(--color-ember)] mb-3">
                On the Day
              </h3>
              <ol className="space-y-3 text-[14px] text-[color:var(--color-stone)] leading-relaxed">
                {[
                  'Arrive ten minutes early',
                  'Wear what you train in. Bring water.',
                  'Equipment and towels provided.',
                  'Tell the coach it\'s your first hour.',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[color:var(--color-ember)] text-white text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">

            {submitted ? (
              <div className="bg-[color:var(--color-bone-soft)] rounded-xl p-10 sm:p-14 min-h-[440px] flex flex-col justify-center text-center">
                <div className="text-[48px] mb-4">✅</div>
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
                  We&apos;ve Got You!
                </h2>
                <p className="text-[color:var(--color-stone)] text-[16px] leading-relaxed max-w-md mx-auto">
                  A coach will reach out within the day to lock in your trial hour. If you don&apos;t hear from us by sundown, give us a call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[color:var(--color-bone-soft)] rounded-xl p-8 sm:p-10"
              >
                <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-8">
                  Reserve Your Trial Hour
                </h2>

                <div className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                        First Name <span className="text-[color:var(--color-ember)]">*</span>
                      </span>
                      <input
                        name="firstName"
                        type="text"
                        required
                        placeholder="Alex"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                        Last Name <span className="text-[color:var(--color-ember)]">*</span>
                      </span>
                      <input
                        name="lastName"
                        type="text"
                        required
                        placeholder="Johnson"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                      Email <span className="text-[color:var(--color-ember)]">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                      Phone (optional)
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(312) 555-0100"
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                      Which class interests you? <span className="text-[color:var(--color-ember)]">*</span>
                    </span>
                    <select
                      name="classInterest"
                      required
                      defaultValue=""
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Pick a class…</option>
                      {['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset', 'Not sure — surprise me'].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[color:var(--color-ink)] text-[14px] font-medium mb-1.5 block">
                      Anything we should know?
                    </span>
                    <textarea
                      name="goals"
                      rows={3}
                      placeholder="Goals, injuries, schedule constraints…"
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ember)] focus:border-transparent transition resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[color:var(--color-ember)] text-white rounded-full py-4 text-[16px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send & Reserve'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
