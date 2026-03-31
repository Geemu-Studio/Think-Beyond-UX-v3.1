import { useState, useMemo } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from './ConsultationModal';

const stats = [
  {
    key: 'dropouts',
    microcopy: 'Based on average UK HE at-risk student withdrawal rates.',
    suffix: (v: number) => (
      <p className="text-[13px] text-neutral-600 leading-[1.6]">
        Academic journeys requiring <span style={{ fontWeight: 600 }} className="text-black">strategic intervention and enablement</span>
      </p>
    ),
  },
  {
    key: 'saved',
    microcopy: 'Modelled on securing as few as 10% of at-risk academic journeys through early action.',
    suffix: (v: number) => (
      <p className="text-[13px] text-neutral-600 leading-[1.6]">
        Individual student outcomes secured through a <span style={{ fontWeight: 600 }} className="text-black">10% uplift in engagement</span>
      </p>
    ),
  },
  {
    key: 'tuition',
    microcopy: 'Average annual tuition cycle, adjusted for programme type.',
    suffix: (v: number) => (
      <p className="text-[13px] text-neutral-600 leading-[1.6]">
        <span style={{ fontWeight: 600 }} className="text-black">Months of sustained academic investment realised</span> per student
      </p>
    ),
  },
];

export function CalculatorSection() {
  const location = useLocation();
  const [students, setStudents] = useState(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const results = useMemo(() => {
    const dropouts = Math.round(students * 0.5);
    const saved = Math.round(students * 0.1);
    const tuition = 12;
    return { dropouts, saved, tuition };
  }, [students]);

  const displayValues: Record<string, string> = {
    dropouts: results.dropouts.toLocaleString('en-GB'),
    saved: `+${results.saved.toLocaleString('en-GB')}`,
    tuition: `×${results.tuition}`,
  };

  const sliderPct = ((students - 200) / (5000 - 200)) * 100;

  return (
    <section id="calculator" className="bg-neutral-100 py-20 px-6 border-t border-b border-neutral-200">
      <div className="mx-auto max-w-5xl flex flex-col gap-10">

        {/* Heading */}
        <div className="text-left max-w-2xl">
          <span
            className="text-[11px] text-neutral-400 uppercase tracking-[1.4px] text-left"
            style={{ fontWeight: 600 }}
          >
            Institutional Impact
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[40px] leading-[1.15] tracking-[-1.4px] text-black text-left">
            Measuring the institutional value of academic flourishing.
          </h2>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">

          {/* Slider label + value badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[14px] text-neutral-600" style={{ fontWeight: 500 }}>
              Annual Student Intake
            </p>
            <span
              className="self-start sm:self-auto bg-black text-white text-[20px] tracking-[-0.8px] px-5 py-1.5 rounded-full"
              style={{ fontWeight: 700 }}
            >
              {students.toLocaleString('en-GB')}
            </span>
          </div>

          {/* Slider */}
          <div className="relative group/slider">
            <style>
              {`
                input[type='range']::-webkit-slider-thumb {
                  transition: transform 0.2s ease;
                }
                input[type='range']:hover::-webkit-slider-thumb {
                  transform: scale(1.25);
                }
              `}
            </style>
            <input
              type="range"
              min={200}
              max={5000}
              step={50}
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-[3px] appearance-none cursor-pointer rounded-full"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${sliderPct}%, #d1d5db ${sliderPct}%, #d1d5db 100%)`,
                accentColor: 'black',
              }}
            />
            <div className="flex justify-between mt-2">
              <span className="text-[12px] text-neutral-400">200</span>
              <span className="text-[12px] text-neutral-400">5,000</span>
            </div>
          </div>

          {/* Results — stack on mobile, 3-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 pt-4 border-t border-neutral-200">
            {stats.map((stat, idx) => (
              <div
                key={stat.key}
                className={[
                  'flex flex-col gap-2 py-6 px-0',
                  idx > 0 ? 'sm:border-l sm:border-neutral-200 sm:pl-6 border-t border-neutral-100 sm:border-t-0' : '',
                  idx < stats.length - 1 ? 'sm:pr-6' : '',
                ].join(' ')}
              >
                {/* Big number */}
                <span
                  className="text-[38px] sm:text-[42px] tracking-[-1.5px] text-black leading-none"
                  style={{ fontWeight: 700 }}
                >
                  {displayValues[stat.key]}
                </span>

                {/* Bold sentence */}
                {stat.suffix(results[stat.key as keyof typeof results] as number)}

                {/* Microcopy */}
                <p className="text-[11px] leading-[1.55] mt-1 text-[#6a6a6a]">
                  {stat.microcopy}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-black px-6 py-3 text-[14px] text-black hover:bg-black hover:text-white transition-colors rounded-full"
              style={{ fontWeight: 600 }}
            >
              Secure Your Institutional Legacy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </div>

        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pathname={location.pathname}
      />
    </section>
  );
}