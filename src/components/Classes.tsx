import { classes } from '@/lib/data';

export default function Classes() {
  return (
    <section id="classes" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,5vw,48px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
            Our Classes
          </h2>
          <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full mb-5" />
          <p className="text-[color:var(--color-stone)] text-[16px] leading-relaxed max-w-xl mx-auto">
            Six disciplines designed to challenge every level. From high-intensity circuits to recovery yoga — find the hour that fits.
          </p>
        </div>

        {/* Class cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {classes.map((cls) => (
            <a
              key={cls.id}
              href={`/classes#${cls.id}`}
              className="group bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-[color:var(--color-ember)]" />

              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)] text-[12px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-4">
                  {cls.category}
                </span>

                <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-semibold uppercase tracking-wide text-[color:var(--color-ink)] group-hover:text-[color:var(--color-ember)] transition-colors mb-3">
                  {cls.name}
                </h3>

                <p className="text-[color:var(--color-stone)] text-[14px] leading-relaxed mb-5 line-clamp-3">
                  {cls.description}
                </p>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[12px] font-medium rounded-full px-3 py-1">
                    {cls.duration}
                  </span>
                  <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[12px] font-medium rounded-full px-3 py-1">
                    {cls.intensity}
                  </span>
                  <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[12px] font-medium rounded-full px-3 py-1">
                    {cls.trainer}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/classes"
            className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-8 py-3.5 text-[15px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
          >
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
