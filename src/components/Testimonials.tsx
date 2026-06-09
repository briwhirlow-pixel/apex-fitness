import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-[#f7f7f7]">
      <div className="max-w-[1170px] mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-semibold uppercase tracking-[0.03em] text-[#1a1a1a] mb-4">
            What Our Members Say
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.7]">
            Real results from real members. 4.9 stars across 412 Google reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-7 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              <div className="text-[#e41313] text-[14px] mb-3 tracking-wider">★★★★★</div>

              <p className="text-[#333] text-[15px] leading-[1.7] mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-[#eee] pt-4">
                <div>
                  <p className="text-[#1a1a1a] text-[15px] font-semibold">{t.name}</p>
                  <p className="text-[#999] text-[13px]">{t.class}</p>
                </div>
                <span className="text-[#e41313] text-[13px] font-semibold">
                  {t.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
