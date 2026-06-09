import { features } from '@/lib/data';

const icons = ['📋', '🧊', '🎯', '💯'];

export default function WhyApex() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[color:var(--color-bone-soft)]">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,5vw,48px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
            Why Choose APEX
          </h2>
          <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full mb-5" />
          <p className="text-[color:var(--color-stone)] text-[16px] leading-relaxed max-w-xl mx-auto">
            We&apos;re not your average gym. Here&apos;s what makes training at APEX different.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-[40px] mb-4">{icons[i]}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-semibold uppercase tracking-wide text-[color:var(--color-ink)] mb-3">
                {f.title}
              </h3>
              <p className="text-[color:var(--color-stone)] text-[14px] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 30-day guarantee callout */}
        <div className="mt-14 bg-white rounded-xl border-l-4 border-[color:var(--color-ember)] p-8 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-2">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-[color:var(--color-stone)] text-[15px] leading-relaxed">
                Attend at least 8 sessions in your first 30 days. If your numbers haven&apos;t moved, we&apos;ll refund your entire first month. No questions asked.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-[color:var(--color-ember)] text-white rounded-full px-8 py-3.5 text-[15px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
