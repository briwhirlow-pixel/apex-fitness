'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Programs', href: '/#programs' },
  { label: 'Coaches', href: '/#trainers' },
  { label: 'Membership', href: '/#memberships' },
  { label: 'Visit', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'glass-nav top-0 md:top-9'
          : 'bg-transparent top-0 md:top-9'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-[64px] md:h-[72px] flex items-center justify-between gap-6">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 bg-[#e41313] flex items-center justify-center">
            <span className="font-display text-[color:var(--color-cream)] text-[22px] leading-none" style={{ fontWeight: 700 }}>
              A
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[19px] text-[color:var(--color-cream)] tracking-[0.04em]" style={{ fontWeight: 700 }}>
              APEX
            </span>
            <span className="text-[9px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/55 font-medium mt-0.5">
              Performance Studio
            </span>
          </div>
        </a>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-[13px] tracking-[0.14em] uppercase text-[color:var(--color-cream)]/85 hover:text-[color:var(--color-red)] transition-colors"
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT — Free Pass */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#freepass"
            className="bg-[#e41313] hover:bg-[#b50e0e] text-[color:var(--color-cream)] inline-flex items-center gap-2 px-5 py-3 font-display text-[12px] tracking-[0.16em] uppercase transition-colors"
            style={{ fontWeight: 700 }}
          >
            Free Pass
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-9 items-end"
          aria-label="Menu"
        >
          <span className={`h-px bg-[color:var(--color-cream)] transition-all duration-200 ${open ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`} />
          <span className={`h-px bg-[color:var(--color-cream)] transition-opacity duration-200 ${open ? 'w-6 opacity-0' : 'w-4'}`} />
          <span className={`h-px bg-[color:var(--color-cream)] transition-all duration-200 ${open ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5'}`} />
        </button>
      </div>

      {/* MOBILE SHEET */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-[#0c0a08] z-40 flex flex-col px-6 pt-8 pb-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-[color:var(--color-cream)]/10 font-display text-[28px] sm:text-[34px] leading-none tracking-[-0.005em] text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
              style={{ fontWeight: 700 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#freepass"
            onClick={() => setOpen(false)}
            className="btn-solid-red mt-8 w-full"
          >
            <span>Get Your Free Pass</span>
          </a>
        </div>
      )}
    </header>
  );
}
