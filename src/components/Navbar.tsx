'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'The Slate', href: '/classes' },
  { label: 'Coaches', href: '/#trainers' },
  { label: 'The Hour', href: '/#the-hour' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Visit', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setScrollPct(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      {/* scroll progress sliver */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[color:var(--color-red)] origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${scrollPct / 100})` }}
        aria-hidden
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-[72px] flex items-center justify-between gap-6">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 select-none group">
          <div className="w-10 h-10 bg-[color:var(--color-red)] flex items-center justify-center transition-transform duration-500 group-hover:rotate-3">
            <span className="font-display text-[color:var(--color-cream)] text-[22px] leading-none" style={{ fontWeight: 700 }}>
              A
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[18px] text-[color:var(--color-cream)] tracking-[0.06em]" style={{ fontWeight: 700 }}>
              APEX
            </span>
            <span className="text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/55 font-medium mt-0.5">
              Haddon Twp · NJ
            </span>
          </div>
        </a>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative px-3 py-2 text-[11px] tracking-[0.22em] uppercase font-medium text-[color:var(--color-cream)]/72 hover:text-[color:var(--color-cream)] transition-colors"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-[color:var(--color-red)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="/contact"
            className={`group inline-flex items-center gap-2 font-medium text-[11px] tracking-[0.22em] uppercase transition-all duration-500 ${
              scrolled
                ? 'bg-[color:var(--color-red)] text-[color:var(--color-cream)] px-4 py-2 hover:bg-[color:var(--color-red-deep)]'
                : 'text-[color:var(--color-cream)] hover:text-[color:var(--color-red)]'
            }`}
          >
            Trial Pass
            <span className={`block h-px bg-current transition-all duration-300 ${scrolled ? 'w-4 group-hover:w-8' : 'w-5 group-hover:w-9'}`} />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-9 items-end"
          aria-label="Menu"
        >
          <span className={`h-px bg-[color:var(--color-cream)] transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`} />
          <span className={`h-px bg-[color:var(--color-cream)] transition-all duration-300 ${open ? 'w-6 opacity-0' : 'w-4'}`} />
          <span className={`h-px bg-[color:var(--color-cream)] transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5'}`} />
        </button>
      </div>

      {/* MOBILE SHEET */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[color:var(--color-ink)] z-40 flex flex-col px-6 pt-8 pb-12 gap-1">
          <span className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/45 mb-4 font-medium">
            The Index
          </span>
          <div className="h-px bg-[color:var(--color-border-cream)] mb-4" />
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group grid grid-cols-12 items-baseline gap-3 py-4 border-b border-[color:var(--color-border-cream)]"
            >
              <span className="col-span-1 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/40 font-medium">
                0{i + 1}
              </span>
              <span className="col-span-9 font-display text-[32px] sm:text-[38px] leading-none tracking-[-0.012em] text-[color:var(--color-cream)] group-hover:text-[color:var(--color-red)] transition-colors" style={{ fontWeight: 700 }}>
                {l.label}
              </span>
              <span className="col-span-2 text-right text-[color:var(--color-cream)]/40 group-hover:text-[color:var(--color-red)] transition-colors">→</span>
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-solid-red mt-8 w-full justify-between"
          >
            <span>Claim Trial Pass</span>
            <span aria-hidden className="block w-8 h-px bg-current" />
          </a>
        </div>
      )}
    </header>
  );
}
