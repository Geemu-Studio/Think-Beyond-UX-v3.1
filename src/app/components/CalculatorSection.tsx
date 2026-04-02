import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';
import { User } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';
import { CALCULATOR_CONFIGS } from '../data/calculatorContent';

export function CalculatorSection() {
  const location = useLocation();
  const config = CALCULATOR_CONFIGS[location.pathname] || CALCULATOR_CONFIGS.default;

  const [value, setValue] = useState(config.initialValue);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync value when config changes (e.g. navigation between pages)
  useEffect(() => {
    setValue(config.initialValue);
  }, [config.initialValue]);

  const { results, displayValues } = useMemo(() => {
    const res = config.calculate(value);
    const fmt = config.formatDisplay(res);
    return { results: res, displayValues: fmt };
  }, [value, config]);

  const sliderPct = useMemo(() => {
    return ((value - config.min) / (config.max - config.min)) * 100;
  }, [value, config.min, config.max]);

  return (
    <section id="calculator" className="bg-neutral-100 py-20 px-3 lg:px-6 border-t border-b border-neutral-200">
      <div className="mx-auto max-w-5xl flex flex-col gap-10">

        {/* Heading */}
        <div className="text-left max-w-2xl">
          <span
            className="text-[11px] text-neutral-400 uppercase tracking-[1.4px] text-left"
            style={{ fontWeight: 600 }}
          >
            {config.tagline}
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[40px] leading-[1.15] tracking-[-1.4px] text-black text-left">
            {config.title}
          </h2>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">

          {/* Slider label + value badge - E-0 BALANCED DESIGN */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            
            {/* Group 1: Value & Label (Natural width) */}
            <div className="flex items-center gap-5 flex-1 py-4 lg:py-0">
              <span className="bg-black text-white text-[20px] tracking-[-0.8px] px-6 py-1.5 rounded-full font-extrabold shadow-sm shrink-0">
                {value.toLocaleString('en-GB')}
              </span>
              <p className="text-[14px] text-neutral-600 font-bold uppercase tracking-[1.4px]">
                {config.inputLabel}
              </p>
            </div>

            {/* Group 2: Institutional Strategy Architects (NEW TEAM DESIGN) */}
            <div className="flex-1 lg:max-w-2xl bg-neutral-50 p-5 rounded-2xl border border-neutral-100 hover:bg-neutral-100/50 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* Avatar Stack */}
                <div className="flex -space-x-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-neutral-100 flex items-center justify-center text-[10px] font-bold text-neutral-400 shadow-sm">
                    AK
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-500 shadow-sm">
                    MB
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                    +17
                  </div>
                </div>

                {/* Team Info */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">20+ Experts</span>
                    <h4 className="text-[14px] font-extrabold text-black uppercase tracking-tight leading-none pt-0.5">
                      Institutional Strategy Architects
                    </h4>
                  </div>
                  <p className="text-[12px] text-neutral-500 leading-relaxed font-medium mt-1">
                    Your institution's transformation will be guided by our full team of certified Salesforce architects.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="relative group/slider pt-4">
            <style>
              {`
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 32px;
                  height: 32px;
                  background: #000;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 3px solid #fff;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  transition: transform 0.2s ease, background 0.2s ease;
                }
                
                @media (max-width: 640px) {
                  input[type='range']::-webkit-slider-thumb {
                    width: 48px;
                    height: 48px;
                  }
                }

                input[type='range']::-moz-range-thumb {
                  width: 32px;
                  height: 32px;
                  background: #000;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 3px solid #fff;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  transition: transform 0.2s ease;
                }

                @media (max-width: 640px) {
                  input[type='range']::-moz-range-thumb {
                    width: 48px;
                    height: 48px;
                  }
                }

                input[type='range']:active::-webkit-slider-thumb {
                  transform: scale(1.1);
                  background: #333;
                }
              `}
            </style>
            <input
              type="range"
              min={config.min}
              max={config.max}
              step={config.step}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-[6px] appearance-none cursor-pointer rounded-full outline-none"
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${sliderPct}%, #e5e7eb ${sliderPct}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between mt-4">
              <span className="text-[12px] text-neutral-400 font-medium tracking-tight">MIN: {config.min.toLocaleString('en-GB')}</span>
              <span className="text-[12px] text-neutral-400 font-medium tracking-tight">MAX: {config.max.toLocaleString('en-GB')}</span>
            </div>
          </div>

          {/* Results — stack on mobile, 3-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 pt-4 border-t border-neutral-200">
            {config.stats.map((stat, idx) => (
              <div
                key={stat.key}
                className={[
                  'flex flex-col gap-2 py-6 px-0',
                  idx > 0 ? 'sm:border-l sm:border-neutral-200 sm:pl-6 border-t border-neutral-100 sm:border-t-0' : '',
                  idx < config.stats.length - 1 ? 'sm:pr-6' : '',
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
                {stat.suffix(results[stat.key] as number)}

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
              {config.ctaText}
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