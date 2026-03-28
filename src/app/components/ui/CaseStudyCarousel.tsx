import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CARDS = [
  {
    university: "SWPS University",
    metrics: [
      "Processed 15,000+ Applications Annually",
      "40% Faster Processing of Complex Applications",
      "95% Prospective Student Satisfaction Score"
    ],
    button: "Discover the SWPS Story",
    initial: "S"
  },
  {
    university: "ALD Warsaw (Akademia Leona Koźmińskiego)",
    metrics: [
      "Processed 12,000+ International Applications Annually",
      "35% Reduction in Administrative Overhead per Enrolment",
      "92% Alumni Engagement Score"
    ],
    button: "Discover the ALD Story",
    initial: "A"
  },
  {
    university: "CDV Poznań (Collegium Da Vinci)",
    metrics: [
      "Supported 8,000+ Students with Proactive Welfare Alerts",
      "25% Increase in Student Retention Rate YOY",
      "98% Timely Outreach for Career Opportunities"
    ],
    button: "Explore the CDV Campus",
    initial: "C"
  }
];

interface CaseStudyCarouselProps {
  initialActiveIdx?: number;
}

export function CaseStudyCarousel({ initialActiveIdx = 0 }: CaseStudyCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(initialActiveIdx);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive settings
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % CARDS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused || isMobile) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, isMobile, nextSlide]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Track */}
      <div className="relative w-full flex justify-center py-10 px-4 sm:px-0">
        <motion.div 
          className="flex gap-6 sm:gap-10 shrink-0"
          animate={{ 
            x: isMobile 
              ? `calc(${(1 - activeIdx) * 85}vw + ${(1 - activeIdx) * 24}px)`
              : `calc(${(1 - activeIdx) * 620}px + ${(1 - activeIdx) * 40}px)`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {CARDS.map((card, idx) => {
            const isActive = idx === activeIdx;
            
            return (
              <motion.div 
                key={card.university}
                onClick={() => !isActive && setActiveIdx(idx)}
                initial={false}
                animate={{ 
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.35,
                  filter: isActive ? "blur(0px)" : "blur(1px)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-white rounded-[32px] p-8 sm:p-10 flex flex-col gap-6 shrink-0 cursor-pointer select-none border border-neutral-100
                  ${isActive 
                    ? "w-[85vw] sm:w-[620px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-10" 
                    : "w-[85vw] sm:w-[620px]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-neutral-900 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                    {card.initial}
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-[1.2px] font-bold truncate">
                    Case Study · {card.university}
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.8px] text-black font-bold">
                  {card.university}
                </h3>

                <div className="flex flex-col gap-4 py-6 border-y border-neutral-100">
                  {card.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-200 shrink-0"></div>
                      <span className="text-[14px] text-neutral-600 font-medium leading-tight text-left">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 text-left">
                  <a
                    href="#"
                    onClick={(e) => {
                      if (!isActive) e.preventDefault();
                    }}
                    className={`inline-flex items-center justify-center bg-white text-black border border-black px-8 py-4 text-[13px] hover:bg-black hover:text-white transition-all duration-300 rounded-full font-bold shadow-sm ${!isActive ? 'pointer-events-none' : ''}`}
                  >
                    {card.button} →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Apple-style Pagination Buttons */}
      <div className="flex justify-center gap-3 mt-4 mb-2">
        {CARDS.map((_, i) => (
          <button 
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[4px] rounded-full transition-all duration-500 ease-in-out cursor-pointer border-none p-0 outline-none
              ${i === activeIdx ? 'w-10 bg-black' : 'w-5 bg-neutral-100 hover:bg-neutral-200'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
