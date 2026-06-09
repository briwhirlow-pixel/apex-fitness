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
    <div className="bg-[color:var(--color-bone)] min-h-screen">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-32 sm:pt-36 pb-24 sm:pb-32">

        {/* Masthead strip */}
        <div className="h-px bg-[color:var(--color-ink)]/25" />
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-1 py-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-ink)]/55">
          <span className="md:col-span-3">Apex / Chicago</span>
          <span className="md:col-span-3">Section IV — Reservation</span>
          <span className="hidden md:inline md:col-span-3">Trial hour on the house</span>
          <span className="md:col-span-3 text-right">No card · No commit</span>
        </div>
        <div className="h-px bg-[color:var(--color-ink)]/25 mb-14" />

        {/* Headline */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mb-16 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-5">
              Reserve a Trial Hour
            </div>
            <h1
              className="serif-display tracking-[-0.028em] leading-[0.94] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(52px, 9vw, 140px)', fontWeight: 500 }}
            >
              Show up.<br />
              <span className="serif-wonk">Try a class</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6 mt-6 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] sm:text-[16px] leading-[1.6] max-w-sm">
              Pick a class, leave a note, and we&apos;ll have a coach reach out inside the
              day. The hour itself is yours — paid or not, returning or not.
            </p>
          </div>
        </div>

        {/* Form + sidebar */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 gap-y-12">

          {/* Sidebar: studio info */}
          <aside className="col-span-12 lg:col-span-4 order-2 lg:order-1">

            {/* Visit */}
            <div className="border-t border-[color:var(--color-ink)]/25 pt-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-3">
                Where
              </div>
              <p
                className="serif-display text-[color:var(--color-ink)] leading-[1.2]"
                style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 500 }}
              >
                {siteConfig.address.split(',')[0]}
              </p>
              <p className="font-sans text-[color:var(--color-ink-soft)] text-[14px] mt-1">
                {siteConfig.address.split(',').slice(1).join(',').trim()}
              </p>
            </div>

            {/* Hours */}
            <div className="border-t border-[color:var(--color-ink)]/15 mt-8 pt-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-3">
                Hours
              </div>
              <table className="w-full font-mono text-[12px]">
                <tbody>
                  <tr className="border-b border-[color:var(--color-ink)]/10">
                    <td className="py-2 pr-3 uppercase tracking-[0.18em] text-[color:var(--color-ink)]/55">Mon — Fri</td>
                    <td className="py-2 text-right text-[color:var(--color-ink)]">{siteConfig.hours.weekday}</td>
                  </tr>
                  <tr className="border-b border-[color:var(--color-ink)]/10">
                    <td className="py-2 pr-3 uppercase tracking-[0.18em] text-[color:var(--color-ink)]/55">Sat</td>
                    <td className="py-2 text-right text-[color:var(--color-ink)]">{siteConfig.hours.saturday}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 uppercase tracking-[0.18em] text-[color:var(--color-ink)]/55">Sun</td>
                    <td className="py-2 text-right text-[color:var(--color-ink)]">{siteConfig.hours.sunday}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reach */}
            <div className="border-t border-[color:var(--color-ink)]/15 mt-8 pt-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-3">
                Direct
              </div>
              <div className="space-y-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block serif-display text-[color:var(--color-ink)] text-[18px] hover:text-[color:var(--color-ember)] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block font-mono text-[13px] text-[color:var(--color-ink)]/65 hover:text-[color:var(--color-ember)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Notice */}
            <div className="border-t border-[color:var(--color-ink)]/15 mt-8 pt-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-3">
                On the Day
              </div>
              <ol className="space-y-3 text-[14px] font-sans text-[color:var(--color-ink-soft)] leading-[1.55]">
                {[
                  'Arrive ten minutes early — we keep the tour short.',
                  'Wear what you train in. Bring water.',
                  'Equipment provided. Towels too.',
                  'Tell the coach it is your first hour. They scale to it.',
                ].map((line, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ember)] mt-1">
                      0{i + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Form */}
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">

            {submitted ? (
              <div className="relative border border-[color:var(--color-ink)] p-10 sm:p-14 min-h-[440px] flex flex-col justify-center">
                <span className="absolute top-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />

                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-5">
                  Received · Filed
                </div>
                <h2
                  className="serif-display text-[color:var(--color-ink)] leading-[0.95] tracking-[-0.025em] mb-6"
                  style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 500 }}
                >
                  We&apos;ve got you.
                </h2>
                <p className="font-sans text-[color:var(--color-ink-soft)] text-[16px] leading-[1.6] max-w-md">
                  A coach will reach out inside the day to lock in your trial hour. If
                  you don&apos;t hear from us by sundown, the email forwards to the front
                  desk — call us, we&apos;ll make it right.
                </p>

                <div className="mt-10 pt-6 border-t border-[color:var(--color-ink)]/15 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                  Filed · {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative border border-[color:var(--color-ink)]/25 p-8 sm:p-10 lg:p-12 bg-[color:var(--color-bone)]"
              >
                <span className="absolute top-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute top-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                <span className="absolute bottom-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />

                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-3">
                  Reservation Form · No. 06
                </div>
                <h2
                  className="serif-display text-[color:var(--color-ink)] leading-[0.95] tracking-[-0.025em] mb-10"
                  style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 500 }}
                >
                  Leave a note<span className="text-[color:var(--color-ember)]">.</span>
                </h2>

                <div className="space-y-8">

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                    <FieldText name="firstName" label="First Name" placeholder="Alex" required />
                    <FieldText name="lastName" label="Last Name" placeholder="Johnson" required />
                  </div>

                  <FieldText name="email" type="email" label="Email" placeholder="alex@gmail.com" required />
                  <FieldText name="phone" type="tel" label="Phone (optional)" placeholder="(312) 555-0100" />

                  <FieldSelect
                    name="classInterest"
                    label="Which hour interests you?"
                    options={['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset', 'Not sure — surprise me']}
                  />

                  <FieldTextarea name="goals" label="Anything we should know?" placeholder="Goals, injuries, schedule constraints…" rows={3} />

                  <div className="pt-4 border-t border-[color:var(--color-ink)]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                      Filed automatically · We don&apos;t share notes
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center justify-center gap-4 bg-[color:var(--color-ink)] text-[color:var(--color-bone)] px-8 py-5 font-mono text-[11px] tracking-[0.24em] uppercase hover:bg-[color:var(--color-ember)] transition-colors duration-300 disabled:opacity-60"
                    >
                      {loading ? 'Filing…' : 'Send the Note'}
                      <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-14" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldText({
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
}: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-2">
        {label}{required && <span className="text-[color:var(--color-ember)]"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-[color:var(--color-ink)]/25 px-0 py-3 font-sans text-[16px] text-[color:var(--color-ink)] placeholder-[color:var(--color-ink)]/25 focus:outline-none focus:border-[color:var(--color-ember)] transition-colors"
      />
    </label>
  );
}

function FieldTextarea({
  name,
  label,
  placeholder,
  rows = 3,
}: { name: string; label: string; placeholder?: string; rows?: number }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-2">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-[color:var(--color-ink)]/25 px-0 py-3 font-sans text-[16px] text-[color:var(--color-ink)] placeholder-[color:var(--color-ink)]/25 focus:outline-none focus:border-[color:var(--color-ember)] transition-colors resize-none"
      />
    </label>
  );
}

function FieldSelect({
  name,
  label,
  options,
}: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          required
          defaultValue=""
          className="w-full bg-transparent border-0 border-b border-[color:var(--color-ink)]/25 px-0 py-3 pr-6 font-sans text-[16px] text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-ember)] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>Pick an hour…</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[11px] text-[color:var(--color-ink)]/55 pointer-events-none">
          ▾
        </span>
      </div>
    </label>
  );
}
