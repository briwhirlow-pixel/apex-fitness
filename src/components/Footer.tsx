import { siteConfig } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1170px] mx-auto px-6 pt-14 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#e41313] rounded-sm flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-white text-[16px] font-bold leading-none">A</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-[18px] font-semibold uppercase tracking-[0.06em]">APEX</span>
            </div>
            <p className="text-white/45 text-[14px] leading-[1.7]">
              A performance studio in Lincoln Park. Six disciplines, three coaches, an hour we hope you remember.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[0.08em] text-white/70 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Classes', href: '/classes' },
                { label: 'Trainers', href: '/#trainers' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 text-[14px] hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[0.08em] text-white/70 mb-4">
              Gym Hours
            </h4>
            <table className="text-[14px] text-white/45">
              <tbody>
                <tr><td className="pr-4 py-0.5">Mon – Fri</td><td>{siteConfig.hours.weekday}</td></tr>
                <tr><td className="pr-4 py-0.5">Saturday</td><td>{siteConfig.hours.saturday}</td></tr>
                <tr><td className="pr-4 py-0.5">Sunday</td><td>{siteConfig.hours.sunday}</td></tr>
              </tbody>
            </table>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[0.08em] text-white/70 mb-4">
              Contact
            </h4>
            <div className="text-[14px] text-white/45 space-y-2">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/30">
          <p>© {year} APEX Performance Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
