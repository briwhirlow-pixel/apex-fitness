import { trainers } from '@/lib/data';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-semibold uppercase tracking-[0.03em] text-[#1a1a1a] mb-4">
            Meet Our Trainers
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.7]">
            No revolving door of contractors. Three resident coaches who own the floor, know every member by name, and are invested in your progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="text-center"
            >
              {/* Avatar with initials */}
              <div className="w-[140px] h-[140px] rounded-full bg-[#559fb0] mx-auto flex items-center justify-center mb-5">
                <span className="font-[family-name:var(--font-heading)] text-[44px] font-semibold text-white tracking-wider">
                  {t.initials}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-semibold uppercase tracking-[0.02em] text-[#1a1a1a] mb-1">
                {t.name}
              </h3>
              <p className="text-[#e41313] text-[14px] font-medium mb-4">
                {t.title}
              </p>
              <p className="text-[#555] text-[14px] leading-[1.65] mb-5 max-w-[320px] mx-auto">
                {t.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {t.certifications.map((c) => (
                  <span key={c} className="text-[12px] text-[#777] border border-[#ddd] rounded-full px-3 py-0.5">
                    {c}
                  </span>
                ))}
              </div>

              <div className="text-[13px] text-[#999]">
                Leads: {t.classes.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
