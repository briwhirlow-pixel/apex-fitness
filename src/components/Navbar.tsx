'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Disciplines', href: '/classes' },
  { label: 'Coaches', href: '/#trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Visit', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm} CT`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? 'bg-[color:var(--color-bone)]/85 backdrop-blur-md border-b border-[color:var(--color-ink)]/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between gap-6">

        {/* WORDMARK — editorial */}
        <a href="/" className="flex flex-col leading-none -mt-0.5 select-none">
          <span
            className="serif-display text-[26px] sm:text-[28px] tracking-[-0.04em] text-[color:var(--color-ink)]"
            style={{ fontWeight: 500 }}
          >
            APEX
            <span
              className="serif-wonk text-[color:var(--color-ember)] ml-0.5"
              style={{ fontWeight: 500 }}
            >
              .
            </span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-ink)]/55 mt-0.5">
            Performance · Chi
          </span>
        </a>

        {/* CENTER — nav links */}
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/65 hover:text-[color:var(--color-ink)] transition-colors py-2"
            >
              {l.label}
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[color:var(--color-ember)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* RIGHT — clock + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 tabular-nums">
            {time || '—'}  ·  OPEN
          </span>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
          >
            Trial Pass
            <span className="block w-5 h-px bg-current transition-all duration-300 group-hover:w-9" />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-9 items-end"
          aria-label="Menu"
        >
          <span
            className={`h-px bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'
            }`}
          />
          <span
            className={`h-px bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? 'w-6 opacity-0' : 'w-4'
            }`}
          />
          <span
            className={`h-px bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5'
            }`}
          />
        </button>
      </div>

      {/* MOBILE SHEET */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[color:var(--color-bone)] z-40 flex flex-col px-6 sm:px-10 pt-8 pb-12 gap-1">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-4">
            Contents
          </span>
          <div className="h-px bg-[color:var(--color-ink)]/15 mb-4" />
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group grid grid-cols-12 items-baseline gap-3 py-4 border-b border-[color:var(--color-ink)]/10"
            >
              <span className="col-span-1 font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ink)]/40">
                0{i + 1}
              </span>
              <span className="col-span-9 serif-display text-[34px] sm:text-[40px] leading-none tracking-[-0.02em] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-ember)] transition-colors">
                {l.label}
              </span>
              <span className="col-span-2 text-right text-[color:var(--color-ink)]/40 group-hover:text-[color:var(--color-ember)] transition-colors">
                →
              </span>
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-between bg-[color:var(--color-ink)] text-[color:var(--color-bone)] font-mono text-[11px] tracking-[0.22em] uppercase px-6 py-5"
          >
            Claim Trial Pass
            <span className="block w-8 h-px bg-[color:var(--color-ember)]" />
          </a>
        </div>
      )}
    </header>
  );
}
