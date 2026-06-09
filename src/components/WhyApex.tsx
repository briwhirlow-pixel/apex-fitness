import { features } from '@/lib/data';
import Image from 'next/image';

export default function WhyApex() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#f7f7f7]">
      <div className="max-w-[1170px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — image */}
          <div className="relative h-[380px] sm:h-[460px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Training at APEX Performance Studio"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — copy */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-semibold uppercase tracking-[0.03em] text-[#1a1a1a] mb-5">
              Experience the APEX Difference
            </h2>
            <p className="text-[#555] text-[16px] leading-[1.75] mb-6">
              Most gyms sell memberships. We sell the hour you would have skipped — the one that moved your numbers, your mood, your year. With over 40 classes per week, three resident coaches, and equipment from the world&apos;s best manufacturers, APEX is designed for people who take their training seriously.
            </p>
            <p className="text-[#555] text-[16px] leading-[1.75] mb-8">
              No pressure, no sales pitches. Just walk in, meet a coach, and see if the floor fits. Your first hour is always on us.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title}>
                  <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-[0.02em] text-[#1a1a1a] mb-1.5">
                    {f.title}
                  </h4>
                  <p className="text-[#777] text-[13px] leading-[1.6]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
