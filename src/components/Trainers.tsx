import { trainers } from '@/lib/data';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,5vw,48px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
            Meet Our Trainers
          </h2>
          <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full mb-5" />
          <p className="text-[color:var(--color-stone)] text-[16px] leading-relaxed max-w-xl mx-auto">
            No revolving door of contractors. Three resident coaches who own the floor, know every member, and deliver results.
          </p>
        </div>

        {/* Trainer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden text-center"
            >
              {/* Avatar circle */}
              <div className="pt-8 pb-4">
                <div className="w-24 h-24 rounded-full bg-[color:var(--color-accent)] mx-auto flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-[32px] font-bold text-white uppercase">
                    {t.initials}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-7">
                <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-semibold uppercase tracking-wide text-[color:var(--color-ink)] mb-1">
                  {t.name}
                </h3>
                <p className="text-[color:var(--color-ember)] text-[14px] font-medium mb-4">
                  {t.title}
                </p>
                <p className="text-[color:var(--color-stone)] text-[14px] leading-relaxed mb-5">
                  {t.bio}
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {t.certifications.map((c) => (
                    <span key={c} className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[11px] font-medium rounded-full px-3 py-1">
                      {c}
                    </span>
                  ))}
                </div>

                {/* Classes they lead */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-[color:var(--color-stone)] mb-2">
                    Leads
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {t.classes.map((cls) => (
                      <a
                        key={cls}
                        href="/classes"
                        className="text-[color:var(--color-ember)] text-[14px] font-medium hover:underline"
                      >
                        {cls}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
