import { siteConfig } from '@/lib/data';

/**
 * Visit / Contact — full bleed dark.
 * City + state massive and bold (not buried in a small card).
 * Static SVG map graphic breaking out of the container on the right.
 * No animations. No dashes. No three columns.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[100svh] bg-[#0c0a08] text-[color:var(--color-cream)] overflow-hidden flex items-center"
    >
      {/* atmospheric red wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(228,19,19,0.18),transparent_55%)]" />

      {/* MAP GRAPHIC — static SVG, breaks out of container on right edge */}
      <div className="absolute right-[-12%] sm:right-[-8%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[720px] sm:h-[720px] pointer-events-none opacity-90 hidden md:block">
        <MapGraphic />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-24 sm:py-32">

        <div className="max-w-3xl">
          <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-6">
            Visit the floor
          </div>

          {/* MASSIVE LOCATION */}
          <h2
            className="font-display text-[color:var(--color-cream)] leading-[0.84] tracking-[-0.024em]"
            style={{ fontSize: 'clamp(72px, 14vw, 220px)', fontWeight: 700 }}
          >
            WEST
            <br />
            CHESTER<span className="text-[#e41313]">.</span>
            <br />
            <span className="font-display text-[color:var(--color-cream)]/55" style={{ fontSize: 'clamp(36px, 6vw, 96px)', fontWeight: 600 }}>
              PA
            </span>
          </h2>
        </div>

        {/* INFO ROWS — asymmetric, not three equal columns */}
        <div className="mt-14 sm:mt-20 grid grid-cols-12 gap-6 sm:gap-10 max-w-3xl">

          {/* hours */}
          <div className="col-span-12 sm:col-span-5">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
              Hours
            </div>
            <ul className="space-y-1.5 text-[14px] sm:text-[15px] leading-[1.6] text-[color:var(--color-cream)]/85 font-light tabular-nums">
              <li className="flex justify-between gap-6"><span>Weekdays</span><span>{siteConfig.hours.weekday}</span></li>
              <li className="flex justify-between gap-6"><span>Saturday</span><span>{siteConfig.hours.saturday}</span></li>
              <li className="flex justify-between gap-6"><span>Sunday</span><span>{siteConfig.hours.sunday}</span></li>
            </ul>
          </div>

          {/* talk */}
          <div className="col-span-12 sm:col-span-7">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
              Talk to a coach
            </div>
            <div className="flex flex-col gap-2 text-[15px] sm:text-[16px] text-[color:var(--color-cream)]/85 font-light">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
                className="font-display text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors leading-none"
                style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 600 }}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#e41313] transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <a href="#" className="text-[color:var(--color-cream)]/70 hover:text-[#e41313] transition-colors">
                {siteConfig.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="mt-14 sm:mt-20 pt-7 border-t border-[color:var(--color-cream)]/15 flex flex-wrap items-center justify-between gap-5">
          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[17px] leading-[1.5] font-light max-w-xl">
            Trial hour is on the house. Walk in any morning before nine, the coffee is on us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="btn-solid-red">
              <span>Claim Trial Pass</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Static stylized street grid + location pin.
 * Pure SVG, no animation.
 */
function MapGraphic() {
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full" aria-hidden>
      {/* horizontal streets */}
      {[60, 140, 220, 300, 380, 460, 540].map((y, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={y}
          x2="600"
          y2={y}
          stroke="rgba(244,236,224,0.08)"
          strokeWidth={y === 300 ? 1.5 : 1}
        />
      ))}

      {/* vertical streets */}
      {[60, 160, 260, 340, 440, 540].map((x, i) => (
        <line
          key={`v-${i}`}
          x1={x}
          y1="0"
          x2={x}
          y2="600"
          stroke="rgba(244,236,224,0.08)"
          strokeWidth={x === 340 ? 1.5 : 1}
        />
      ))}

      {/* diagonal main road */}
      <line
        x1="0"
        y1="200"
        x2="600"
        y2="500"
        stroke="rgba(244,236,224,0.18)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* a few building blocks suggesting a downtown */}
      {[
        { x: 100, y: 100, w: 50, h: 30 },
        { x: 180, y: 90, w: 40, h: 60 },
        { x: 260, y: 80, w: 30, h: 40 },
        { x: 420, y: 410, w: 60, h: 40 },
        { x: 380, y: 460, w: 40, h: 30 },
        { x: 130, y: 410, w: 70, h: 50 },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          fill="rgba(244,236,224,0.05)"
          stroke="rgba(244,236,224,0.1)"
          strokeWidth="0.5"
        />
      ))}

      {/* APEX location pin — center */}
      <g transform="translate(340 300)">
        {/* outer ring */}
        <circle r="32" fill="none" stroke="#e41313" strokeWidth="1" opacity="0.4" />
        {/* mid ring */}
        <circle r="20" fill="none" stroke="#e41313" strokeWidth="1.2" opacity="0.7" />
        {/* solid dot */}
        <circle r="9" fill="#e41313" />
        {/* center mark */}
        <circle r="2.5" fill="#0c0a08" />
      </g>

      {/* APEX label */}
      <g transform="translate(340 245)">
        <text
          textAnchor="middle"
          fontFamily="var(--font-oswald)"
          fontSize="14"
          fontWeight="700"
          letterSpacing="4"
          fill="#e41313"
        >
          APEX
        </text>
      </g>

      {/* compass N marker */}
      <g transform="translate(540 60)">
        <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(244,236,224,0.4)" strokeWidth="1" />
        <polygon points="0,-15 -4,-6 4,-6" fill="rgba(244,236,224,0.5)" />
        <text x="0" y="28" textAnchor="middle" fontSize="9" letterSpacing="2" fill="rgba(244,236,224,0.5)" fontFamily="var(--font-oswald)">N</text>
      </g>
    </svg>
  );
}
