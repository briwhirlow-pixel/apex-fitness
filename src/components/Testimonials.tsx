import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[color:var(--color-bone-soft)]">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,5vw,48px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
            What Our Members Say
          </h2>
          <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full mb-5" />
          <div className="flex items-center justify-center gap-3">
            <span className="font-[family-name:var(--font-heading)] text-[36px] font-bold text-[color:var(--color-ink)]">4.9</span>
            <div>
              <div className="text-yellow-400 text-[18px]">★★★★★</div>
              <p className="text-[color:var(--color-stone)] text-[13px]">412 reviews on Google</p>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <div className="text-[color:var(--color-ember)] text-[36px] leading-none mb-3">&ldquo;</div>

              <p className="text-[color:var(--color-ink)] text-[15px] leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Result badge */}
              <div className="bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)] text-[13px] font-semibold rounded-full px-4 py-1.5 inline-block mb-5">
                {t.highlight}
              </div>

              {/* Stars + name */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-yellow-400 text-[14px] mb-1">★★★★★</div>
                <p className="text-[color:var(--color-ink)] text-[15px] font-semibold">{t.name}</p>
                <p className="text-[color:var(--color-stone)] text-[13px]">{t.class} · {t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
