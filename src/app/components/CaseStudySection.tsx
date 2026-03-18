import { useState } from 'react';

const STATS = [
  { value: '35\u00a0000', label: 'zgłoszeń' },
  { value: '\u221262%', label: 'czasu obsługi' },
  { value: '17\u00a0500', label: 'studentów obsłużonych' },
];

export function CaseStudySection() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="case-study" className="bg-neutral-50 py-24 px-6 border-t border-neutral-100">
      <div className="mx-auto max-w-4xl flex flex-col gap-10">

        {/* Section label */}
        <div>
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Case Studies
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[40px] leading-[1.15] tracking-[-1.4px] text-black">
            Zaufali nam liderzy transformacji edukacji:
          </h2>
        </div>

        {/* Single hero case study card */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 sm:p-12 flex flex-col gap-8">

          {/* Institution tag */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="#111" />
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontFamily="sans-serif" fontWeight="700">S</text>
            </svg>
            <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
              Case Study · Uniwersytet SWPS
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black" style={{ fontWeight: 700 }}>
            Jak Uniwersytet SWPS przetworzył 35&nbsp;000 zgłoszeń bez chaosu?
          </h3>

          {/* Body */}
          <p className="text-[15px] text-neutral-500 leading-[1.75] max-w-xl">
            Przejście z procesów papierowych na cyfrowe centrum spraw studenckich dla 17&nbsp;500 studentów.
          </p>

          {/* Expanded stats */}
          {expanded && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-t border-b border-neutral-200">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <span
                    className="text-[34px] sm:text-[42px] tracking-[-1.5px] text-black leading-none"
                    style={{ fontWeight: 700 }}
                  >
                    {stat.value}
                  </span>
                  <p className="text-[12px] text-neutral-500 uppercase tracking-[0.6px]" style={{ fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-black border border-black px-7 py-4 text-[14px] hover:bg-black hover:text-white transition-colors rounded-full w-full sm:w-auto"
              style={{ fontWeight: 600 }}
            >
              Zobacz pełne Case Study →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}