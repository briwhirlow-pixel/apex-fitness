'use client';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/data';

const links = [
  { label: 'Classes', href: '/classes' },
  { label: 'Trainers', href: '/#trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const dark = !scrolled && !open;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white border-b border-black/[0.08] shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-16 flex items-center justify-between">

        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded flex items-center justify-center font-black text-[13px] text-[#0A0A0A]"
            style={{ background: '#C8FF00' }}>AX</div>
          <span className={`font-black text-[17px] tracking-tight transition-colors ${dark ? 'text-white' : 'text-[#0A0A0A]'}`}>
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
                dark ? 'text-white/60 hover:text-white' : 'text-[#0A0A0A]/50 hover:text-[#0A0A0A]'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/contact"
            className="bg-[#C8FF00] text-[#0A0A0A] font-bold px-5 py-2.5 rounded-lg text-[13px] hover:opacity-90 transition-opacity">
            Free Trial →
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
          <div className="w-5 flex flex-col gap-1.5">
            {[
              open ? 'rotate-45 translate-y-2' : '',
              open ? 'opacity-0' : '',
              open ? '-rotate-45 -translate-y-2' : '',
            ].map((cls, i) => (
              <span key={i} className={`h-0.5 rounded transition-all ${cls} ${dark ? 'bg-white' : 'bg-[#0A0A0A]'}`} />
            ))}
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col p-8 gap-5 border-t border-black/[0.06]">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-[#0A0A0A] text-[28px] font-black tracking-tight uppercase hover:text-[#C8FF00] transition-colors border-b border-black/[0.06] pb-5">
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)}
            className="mt-2 inline-block bg-[#C8FF00] text-[#0A0A0A] font-black px-8 py-4 rounded-lg text-[16px] text-center">
            Claim Free Trial →
          </a>
        </div>
      )}
    </header>
  );
}
