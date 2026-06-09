'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Classes', href: '/classes' },
  { label: 'Trainers', href: '/#trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">

        {/* LOGO */}
        <a href="/" className="flex items-baseline select-none">
          <span className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[32px] font-bold uppercase tracking-wider text-[color:var(--color-ink)]">
            APEX
          </span>
          <span className="text-[color:var(--color-ember)] text-[32px] font-bold ml-0.5">.</span>
        </a>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-[color:var(--color-ink)]/70 hover:text-[color:var(--color-ember)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="bg-[color:var(--color-ember)] text-white rounded-full px-6 py-2.5 text-[14px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
          >
            Free Trial
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-9 items-center"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 bg-[color:var(--color-ink)] rounded transition-all duration-300 ${
              open ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
            }`}
          />
          <span
            className={`h-0.5 bg-[color:var(--color-ink)] rounded transition-all duration-300 ${
              open ? 'w-6 opacity-0' : 'w-6'
            }`}
          />
          <span
            className={`h-0.5 bg-[color:var(--color-ink)] rounded transition-all duration-300 ${
              open ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 flex flex-col px-5 sm:px-8 pt-8 pb-12 gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-gray-100 text-[18px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 bg-[color:var(--color-ember)] text-white rounded-full px-6 py-4 text-center text-[16px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
