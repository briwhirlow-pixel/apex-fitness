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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isLight = scrolled || open;
  const textClass = isLight ? 'text-ink-muted hover:text-ink' : 'text-white/80 hover:text-white';
  const logoClass = isLight ? 'text-ink' : 'text-white';
  const barClass = isLight ? 'bg-ink' : 'bg-white';

  return (
    <>
      <header
        id="top"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isLight ? 'nav-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between gap-6">

          <a href="/" className="flex items-center gap-2.5 select-none">
            <span className={`font-display text-[22px] transition-colors duration-300 ${logoClass}`}>
              APEX
            </span>
            <span
              className={`hidden sm:block text-[11px] tracking-[0.06em] font-medium transition-colors duration-300 ${
                isLight ? 'text-ink-muted' : 'text-white/55'
              }`}
            >
              Performance Studio
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 ${textClass}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/#freepass"
              className="hidden lg:inline-flex items-center px-4 py-3 min-h-[44px] bg-accent text-white text-[13px] font-semibold tracking-[0.01em] hover:bg-accent-hover transition-colors"
            >
              Free Pass
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-[60] p-2.5 -mr-2 flex flex-col gap-[5px] min-w-[44px] min-h-[44px] items-end justify-center"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className={`block h-[1.5px] transition-all duration-200 ${barClass} ${open ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`} />
              <span className={`block h-[1.5px] transition-opacity duration-200 ${barClass} ${open ? 'w-5 opacity-0' : 'w-3.5'}`} />
              <span className={`block h-[1.5px] transition-all duration-200 ${barClass} ${open ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-4'}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-[55] bg-white flex flex-col px-5 pt-6 pb-8 overflow-y-auto transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="py-4 border-b border-edge font-display text-[24px] sm:text-[28px] leading-none text-ink hover:text-accent transition-colors"
            style={{ fontWeight: 600 }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/#freepass"
          onClick={() => setOpen(false)}
          className="btn-primary mt-6 w-full"
        >
          Get Your Free Pass
        </a>
      </div>
    </>
  );
}
