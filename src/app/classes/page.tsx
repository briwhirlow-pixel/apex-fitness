import { classes } from '@/lib/data';

export default function ClassesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white pt-32 sm:pt-36 pb-16">
        <div className="max-w-[1170px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(40px,8vw,64px)] font-bold uppercase tracking-wide mb-4">
            Our Classes
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Forty hours a week, every level admitted. Most members rotate two or three
            of the six — the right rotation depends on the season you&apos;re in.
          </p>
        </div>
      </section>

      {/* Class list */}
      <section className="max-w-[1170px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="space-y-10">
          {classes.map((cls) => (
            <article
              key={cls.id}
              id={cls.id}
              className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="h-1.5 bg-[color:var(--color-ember)]" />

              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: class info */}
                <div className="lg:col-span-2">
                  <span className="inline-block bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)] text-[12px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-4">
                    {cls.category}
                  </span>

                  <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
                    {cls.name}
                  </h2>

                  <p className="text-[color:var(--color-stone)] text-[15px] leading-relaxed mb-5 max-w-2xl">
                    {cls.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[13px] font-medium rounded-full px-4 py-1.5">
                      {cls.duration}
                    </span>
                    <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[13px] font-medium rounded-full px-4 py-1.5">
                      {cls.intensity}
                    </span>
                    <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[13px] font-medium rounded-full px-4 py-1.5">
                      Coach: {cls.trainer}
                    </span>
                    <span className="bg-gray-100 text-[color:var(--color-ink-soft)] text-[13px] font-medium rounded-full px-4 py-1.5">
                      {cls.spots} spots
                    </span>
                  </div>
                </div>

                {/* Right: schedule */}
                <div className="lg:border-l lg:border-gray-100 lg:pl-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] mb-4">
                    Schedule
                  </h3>
                  <ul className="space-y-2.5 mb-6">
                    {cls.schedule.map((slot) => (
                      <li key={slot} className="text-[color:var(--color-ink-soft)] text-[14px] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-ember)]" />
                        {slot}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-6 py-2.5 text-[14px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
                  >
                    Reserve a Spot
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-[color:var(--color-bone-soft)] rounded-xl p-10">
          <h3 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-3">
            Not Sure Which to Pick?
          </h3>
          <p className="text-[color:var(--color-stone)] text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
            Walk in for your free trial hour and we&apos;ll match you to the right class.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-8 py-3.5 text-[15px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
          >
            Claim Trial Hour
          </a>
        </div>
      </section>
    </div>
  );
}
