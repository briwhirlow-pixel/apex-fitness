import { classes } from '@/lib/data';
import Image from 'next/image';

const classImages: Record<string, string> = {
  'hiit-forge': '/images/training.jpg',
  'iron-temple': '/images/about.jpg',
  'flow-state': '/images/yoga.jpg',
  'velocity-cycle': '/images/cycling.jpg',
  'combat-ready': '/images/boxing.jpg',
  'recover-reset': '/images/yoga.jpg',
};

export default function Classes() {
  return (
    <section id="classes" className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-semibold uppercase tracking-[0.03em] text-[#1a1a1a] mb-4">
            Our Classes
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.7]">
            Six disciplines designed to challenge every level. From explosive HIIT intervals to recovery yoga — find the hour that moves you forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {classes.map((cls) => (
            <a
              key={cls.id}
              href={`/classes#${cls.id}`}
              className="group rounded-lg overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={classImages[cls.id] || '/images/training.jpg'}
                  alt={cls.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e41313] text-white text-[11px] font-semibold uppercase tracking-[0.06em] rounded-full px-3 py-1">
                    {cls.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase tracking-[0.02em] text-[#1a1a1a] group-hover:text-[#e41313] transition-colors mb-2">
                  {cls.name}
                </h3>
                <p className="text-[#555] text-[14px] leading-[1.6] mb-4 line-clamp-2">
                  {cls.description}
                </p>
                <div className="flex items-center gap-3 text-[13px] text-[#999]">
                  <span>{cls.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{cls.intensity}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{cls.trainer}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/classes"
            className="inline-block bg-[#e41313] text-white rounded-full px-9 py-3 text-[15px] font-semibold hover:bg-[#c10e0e] transition-colors"
          >
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
