'use client';
import Image from 'next/image';

const cards = [
  { title: 'Packages', img: '/images/training.jpg', href: '/pricing', alt: 'Training packages' },
  { title: 'Trainers', img: '/images/trainer.jpg', href: '/#trainers', alt: 'Our trainers' },
  { title: 'Schedule', img: '/images/schedule.jpg', href: '/classes', alt: 'Class schedule' },
  { title: 'About', img: '/images/about.jpg', href: '/#about', alt: 'About APEX' },
];

export default function Hero() {
  return (
    <section>
      {/* HERO — full-width photo with overlay */}
      <div className="relative h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden">
        <Image
          src="/images/hero-gym.jpg"
          alt="APEX Performance Studio — training floor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-[clamp(32px,6vw,56px)] font-semibold uppercase tracking-[0.04em] leading-[1.15] max-w-3xl">
            Experience the APEX Difference
          </h1>
          <p className="text-white/80 text-[16px] sm:text-[18px] leading-relaxed mt-5 max-w-2xl">
            An 85,000 sq ft facility with world-class equipment and coaches who know your name. No pressure, no gimmicks — just results.
          </p>
          <a
            href="/contact"
            className="mt-8 bg-[#e41313] text-white rounded-full px-10 py-3.5 text-[15px] font-semibold hover:bg-[#c10e0e] transition-colors inline-block"
          >
            Sign Up Today
          </a>
        </div>
      </div>

      {/* FEATURE CARDS — 2×2 image grid like Four Seasons */}
      <div className="max-w-[1170px] mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative h-[260px] sm:h-[300px] rounded-lg overflow-hidden"
            >
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-white text-[24px] sm:text-[28px] font-semibold uppercase tracking-[0.03em]">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
