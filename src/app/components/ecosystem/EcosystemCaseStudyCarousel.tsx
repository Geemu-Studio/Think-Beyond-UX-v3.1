import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const caseStudies = [
  {
    id: 'swps',
    name: 'SWPS University',
    representative: {
      name: 'Dr. Jane Smith',
      role: 'Vice Rector for Development',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    },
    quote: "Our student recruitment process had stalled. Think Beyond stepped in, took ownership of our Salesforce Education Cloud architecture, and stabilised the system in just three months.",
    stats: [
      { label: 'Students', value: '17,500' },
      { label: 'Digital Engagement', value: '+47%' },
      { label: 'Revenue Impact', value: '£1.3M' }
    ]
  },
  {
    id: 'kozminski',
    name: 'Kozminski University',
    representative: {
      name: 'Prof. Grzegorz Mazurek',
      role: 'Rector',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    },
    quote: "We needed a partner who understands the profound difference between standard e-commerce and higher education. Think Beyond delivered a data architecture that scales our global ambitions.",
    stats: [
      { label: 'Students', value: '12,000' },
      { label: 'Ranked in Poland', value: 'Top' },
      { label: 'Student View', value: 'Unified 360°' }
    ]
  },
  {
    id: 'cdv',
    name: 'Collegium Da Vinci',
    representative: {
      name: 'Piotr Kaczmarek',
      role: 'Head of Recruitment',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    },
    quote: "We transformed our student services from a traditional paper-based approach to a fully digital ecosystem. Thanks to Think Beyond, our enrolment process is now 100% remote and candidate-centric.",
    stats: [
      { label: 'Digital Workflow', value: '100%' },
      { label: 'Less Manual Paperwork', value: '65%' },
      { label: 'Years of Excellence', value: '27' }
    ]
  }
];

export function EcosystemCaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const activeStudy = caseStudies[currentIndex];

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-slate-50 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden shadow-sm border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Left Column: Image Placeholder */}
              <div className="relative aspect-square lg:aspect-auto flex-1 bg-neutral-50 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[11px] text-neutral-300 font-black tracking-[0.5em] uppercase">PHOTO</span>
                  <div className="w-8 h-[1px] bg-neutral-200 ml-[0.5em]" />
                </div>
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.01] to-transparent lg:bg-gradient-to-r lg:from-black/[0.01]" />
              </div>

              {/* Right Column: Content */}
              <div className="p-6 sm:p-8 lg:p-10 lg:h-[460px] flex flex-col justify-center bg-white">
                <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px] mb-2 lg:mb-4" style={{ fontWeight: 600 }}>
                  Voice of the Customer
                </span>

                <blockquote className="mb-4 lg:mb-6">
                  <p className="text-2xl sm:text-2xl lg:text-[28px] leading-[1.2] font-bold text-black tracking-tight font-['Outfit']">
                    "{activeStudy.quote}"
                  </p>
                </blockquote>

                <div className="mb-6 lg:mb-8">
                  <div className="font-bold text-[16px] text-black tracking-tight">
                    {activeStudy.representative.name}
                  </div>
                  <div className="text-[13px] font-medium text-neutral-500 mt-0.5">
                    {activeStudy.representative.role} • {activeStudy.name}
                  </div>
                </div>

                {/* Data Bar */}
                <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 border-t border-neutral-100">
                  {activeStudy.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="text-xl lg:text-[28px] font-bold tracking-tight text-black font-['Outfit']">
                        {stat.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-[1px] font-bold text-neutral-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex items-center gap-3 bg-white p-2 rounded-full shadow-lg border border-slate-100 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-[1px] h-6 bg-slate-200" />
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
