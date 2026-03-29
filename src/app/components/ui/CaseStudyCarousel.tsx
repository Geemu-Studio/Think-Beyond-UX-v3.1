import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'motion/react';

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

// Expanded for infinite looping [C,A,B, C,A,B, C,A,B]
const EXTENDED_CARDS = [...CARDS, ...CARDS, ...CARDS];

interface CaseStudyCarouselProps {
  initialActiveIdx?: number;
}

export function CaseStudyCarousel({ initialActiveIdx = 0 }: CaseStudyCarouselProps) {
  // We start in the middle set of cards (index 3 to 5)
  const [activeIdx, setActiveIdx] = useState(initialActiveIdx + CARDS.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  // Responsive settings
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => prev - 1);
  }, []);

  // Silent Jump Logic
  useEffect(() => {
    // If we've reached a clone in the first or last set
    // Index 6 (CDV clone in set 3) -> Jump to Index 3
    // Wait, with 3 cards: Set 1 (0,1,2), Set 2 (3,4,5), Set 3 (6,7,8)
    // If activeIdx becomes 6, we've just slid from 5 (CDV set 2) to 6 (SWPS set 3).
    // We should allow the animation to finish, then jump.

    let timer: any;

    if (activeIdx >= CARDS.length * 2) {
      // Reached Set 3 ( клоны ), jump to Set 2 equivalent
      timer = setTimeout(() => {
        setIsJumping(true);
        setActiveIdx(activeIdx - CARDS.length);
        setTimeout(() => setIsJumping(false), 50);
      }, 500); // 500ms matches transition duration
    } else if (activeIdx < CARDS.length) {
      // Reached Set 1 ( клоны ), jump to Set 2 equivalent
      timer = setTimeout(() => {
        setIsJumping(true);
        setActiveIdx(activeIdx + CARDS.length);
        setTimeout(() => setIsJumping(false), 50);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [activeIdx]);

  // Auto-play logic
  useEffect(() => {
    if (isPaused || isMobile || isJumping) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, isMobile, nextSlide, isJumping]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  const handleSelect = (idx: number) => {
    // Always navigate within the relative distance to keep it smooth
    // For simplicity, we just set the Logical index in the Middle Set
    setActiveIdx(idx + CARDS.length);
  };

  // Logical Display Index (0, 1, or 2)
  const logicalIdx = activeIdx % CARDS.length;

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
              ? `calc(${(4 - activeIdx) * 85}vw + ${(4 - activeIdx) * 24}px)`
              : `calc(${(4 - activeIdx) * 620}px + ${(4 - activeIdx) * 40}px)`
          }}
          transition={isJumping ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ cursor: isJumping ? "default" : "grab" }}
          whileTap={{ cursor: isJumping ? "default" : "grabbing" }}
        >
          {EXTENDED_CARDS.map((card, idx) => {
            const isActive = idx === activeIdx;

            return (
              <motion.div
                key={`${card.university}-${idx}`}
                onClick={() => {
                  if (!isActive && !isJumping) {
                    setActiveIdx(idx);
                  }
                }}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.35,
                  filter: isActive ? "blur(0px)" : "blur(1px)",
                }}
                whileHover={isActive ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
                transition={isJumping ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
                className={`group bg-white rounded-[32px] p-8 sm:p-10 flex flex-col gap-6 shrink-0 cursor-pointer select-none border border-neutral-100 transition-shadow duration-300
                  ${isActive
                    ? "w-[85vw] sm:w-[620px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] z-10"
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
                        {metric.split(/(\d+(?:,\d+)*[\+%]?)/).map((part, i) => 
                          /(\d+(?:,\d+)*[\+%]?)/.test(part) 
                            ? <strong key={i} className="font-bold text-black">{part}</strong> 
                            : part
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 text-left">
                  <div
                    className={`inline-flex items-center justify-center bg-white text-black border border-black px-8 py-4 text-[13px] group-hover:bg-black group-hover:text-white transition-all duration-300 rounded-full font-bold shadow-sm ${!isActive ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    {card.button} →
                  </div>
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
            onClick={() => handleSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[4px] rounded-full transition-all duration-500 ease-in-out cursor-pointer border-none p-0 outline-none
              ${i === logicalIdx ? 'w-10 bg-black' : 'w-5 bg-neutral-100 hover:bg-neutral-200'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
