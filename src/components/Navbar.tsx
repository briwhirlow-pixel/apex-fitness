'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'The Slate', href: '/classes' },
  { label: 'Coaches', href: '/#trainers' },
  { label: 'The Hour', href: '/#the-hour' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Visit', href: '/contact' },
];

/**
 * Navbar — static glass blur after scroll (not an entrance animation;
 * a state change). Sticky, mobile sheet, no decorative dashes.
 */
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-[72px] flex items-center justify-between gap-6">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 bg-[#e41313] flex items-center justify-center">
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
              className="px-3 py-2 text-[11px] tracking-[0.22em] uppercase font-medium text-[color:var(--color-cream)]/72 hover:text-[color:var(--color-cream)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className={`inline-flex items-center gap-2 font-medium text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
              scrolled
                ? 'bg-[#e41313] text-[color:var(--color-cream)] px-4 py-2 hover:bg-[#b50e0e]'
                : 'text-[color:var(--color-cream)] hover:text-[#e41313]'
            }`}
          >
            Trial Pass
            <span className="block w-5 h-px bg-current" />
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
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#0c0a08] z-40 flex flex-col px-6 pt-8 pb-12 gap-1">
          <span className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/45 mb-4 font-medium">
            The Index
          </span>
          <div className="h-px bg-[color:var(--color-cream)]/12 mb-4" />
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-[color:var(--color-cream)]/10 font-display text-[32px] sm:text-[38px] leading-none tracking-[-0.012em] text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
              style={{ fontWeight: 700 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-solid-red mt-8 w-full"
          >
            <span>Claim Trial Pass</span>
          </a>
        </div>
      )}
    </header>
  );
}
