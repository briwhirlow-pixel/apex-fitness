import { siteConfig } from '@/lib/data';

const classLinks = ['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset'];
const quickLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Trainers', href: '/#trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Schedule', href: '/classes' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-baseline mb-4">
              <span className="font-[family-name:var(--font-heading)] text-[28px] font-bold uppercase tracking-wider">
                APEX
              </span>
              <span className="text-[color:var(--color-ember)] text-[28px] font-bold ml-0.5">.</span>
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed mb-5">
              A small studio with high standards. Six disciplines, three coaches, an hour we hope you remember.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[color:var(--color-ember)] hover:text-white transition-colors text-[14px]">
                f
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[color:var(--color-ember)] hover:text-white transition-colors text-[14px]">
                ig
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 text-[14px] hover:text-[color:var(--color-ember)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider mb-4">
              Classes
            </h4>
            <ul className="space-y-2.5">
              {classLinks.map((label) => (
                <li key={label}>
                  <a href="/classes" className="text-white/50 text-[14px] hover:text-[color:var(--color-ember)] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider mb-4">
              Hours
            </h4>
            <div className="text-white/50 text-[14px] space-y-1.5 mb-5">
              <p>Mon–Fri: {siteConfig.hours.weekday}</p>
              <p>Saturday: {siteConfig.hours.saturday}</p>
              <p>Sunday: {siteConfig.hours.sunday}</p>
            </div>

            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="text-white/50 text-[14px] space-y-1.5">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[color:var(--color-ember)] transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[color:var(--color-ember)] transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[13px]">
            © {year} APEX Performance Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-white/30 text-[13px]">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Waiver</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
