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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060B18]/95 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-16 sm:h-18 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#C8FF00' }}>
            <span className="text-[#06080F] font-black text-[13px] leading-none">AX</span>
          </div>
          <span className="text-white font-black text-[17px] tracking-tight">{siteConfig.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white/50 hover:text-white text-[12px] font-bold transition-colors tracking-[0.12em] uppercase">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/contact" className="text-white/50 hover:text-white text-[14px] font-medium transition-colors">
            Sign in
          </a>
          <a href="/contact"
            className="bg-[#C8FF00] text-[#06080F] font-bold px-5 py-2.5 rounded-lg text-[13px] hover:bg-white transition-colors">
            Free Trial Class →
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white rounded transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-white rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#060B18] z-40 flex flex-col p-8 gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-white text-[24px] font-black tracking-tight hover:text-[#C8FF00] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)}
            className="mt-4 inline-block bg-[#C8FF00] text-[#06080F] font-black px-8 py-4 rounded-lg text-[16px] text-center">
            Free Trial Class →
          </a>
        </div>
      )}
    </header>
  );
}
