'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Classes', href: '/classes' },
  { label: 'Trainers', href: '/#trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Schedule a Session', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        scrolled || open ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]' : 'bg-white/95'
      }`}
    >
      {/* Top info bar */}
      <div className="hidden md:block bg-[#1a1a1a] text-white/70 text-[13px]">
        <div className="max-w-[1170px] mx-auto px-6 flex items-center justify-between h-9">
          <span>2847 N Clark St, Chicago, IL 60657</span>
          <div className="flex items-center gap-6">
            <a href="tel:3125550174" className="hover:text-white transition-colors">(312) 555-0174</a>
            <a href="mailto:hello@apexperformancestudio.com" className="hover:text-white transition-colors">hello@apexperformancestudio.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 select-none">
          {/* Logo mark — stylized A */}
          <div className="w-10 h-10 bg-[#e41313] rounded-sm flex items-center justify-center">
            <span className="font-[family-name:var(--font-heading)] text-white text-[22px] font-bold leading-none">A</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase tracking-[0.08em] text-[#1a1a1a]">
              APEX
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#999] font-medium">
              Performance Studio
            </span>
          </div>
        </a>

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-[15px] font-medium text-[#333] hover:text-[#e41313] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-8"
          aria-label="Menu"
        >
          <span className={`h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
          <span className={`h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${open ? 'w-6 opacity-0' : 'w-6'}`} />
          <span className={`h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] md:top-[108px] bg-white z-40 flex flex-col px-6 pt-6 pb-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-[#eee] text-[17px] font-medium text-[#333] hover:text-[#e41313] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 bg-[#e41313] text-white rounded-full px-6 py-3.5 text-center text-[15px] font-semibold hover:bg-[#c10e0e] transition-colors"
          >
            Sign Up Today
          </a>
        </div>
      )}
    </header>
  );
}
