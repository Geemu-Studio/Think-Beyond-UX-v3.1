import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogClose,
} from './dialog';
import { ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CARDS = [
  {
    university: "SWPS University",
    metrics: [
      "Processed 15,000+ Applications Annually",
      "40% Faster Processing of Complex Applications",
      "95% Prospective Student Satisfaction Score"
    ],
    button: "Discover the SWPS Story",
    initial: "S",
    fullStory: {
      title: "Transformacja Cyfrowa Rekrutacji na Uniwersytecie SWPS",
      description: "Przed wdrożeniem Salesforce Education Cloud, Uniwersytet SWPS zmagał się z rozproszonymi procesami rekrutacyjnymi i dużą ilością dokumentacji papierowej. Dzięki transformacji cyfrowej, uczelnia stworzyła zintegrowane centrum obsługi, które pozwala na płynne procesowanie ponad 15 000 wniosków rocznie.",
      impact: [
        "Automatyzacja powtarzalnych zadań skróciła czas rozpatrywania skomplikowanych aplikacji o 40%",
        "Wzrost satysfakcji kandydatów do rekordowego poziomu 95%",
        "Ujednolicenie procesów dla 5 wydziałów w całej Polsce",
        "Pełna transparentność statusu aplikacji dla kandydata w czasie rzeczywistym"
      ]
    }
  },
  {
    university: "ALD Warsaw (Akademia Leona Koźmińskiego)",
    metrics: [
      "Processed 12,000+ International Applications Annually",
      "35% Reduction in Administrative Overhead per Enrolment",
      "92% Alumni Engagement Score"
    ],
    button: "Discover the ALD Story",
    initial: "A",
    fullStory: {
      title: "Globalna Skala i Prestiż: Case Study ALD Warsaw",
      description: "Akademia Leona Koźmińskiego postawiła na wzmocnienie swojej pozycji na arenie międzynarodowej. Implementacja nowoczesnego systemu CRM pozwoliła na ujednolicenie obsługi kandydatów z całego świata, eliminując bariery językowe i czasowe.",
      impact: [
        "35% redukcji kosztów administracyjnych dzięki automatyzacji weryfikacji dokumentów",
        "Skuteczne zarządzanie rekrutacją ponad 12 000 kandydatów zagranicznych rocznie",
        "Wzrost zaangażowania absolwentów (Alumni Engagement) do poziomu 92%",
        "Personalizacja ścieżki kandydata w zależności od kraju pochodzenia i wybranego programu"
      ]
    }
  },
  {
    university: "CDV Poznań (Collegium Da Vinci)",
    metrics: [
      "Supported 8,000+ Students with Proactive Welfare Alerts",
      "25% Increase in Student Retention Rate YOY",
      "98% Timely Outreach for Career Opportunities"
    ],
    button: "Explore the CDV Campus",
    initial: "C",
    fullStory: {
      title: "Proaktywne Wsparcie Studenta: Sukces CDV Poznań",
      description: "W Collegium Da Vinci kluczowym wyzwaniem była retencja studentów i proaktywne wsparcie ich ścieżki edukacyjnej. Wykorzystując analitykę predykcyjną Salesforce, uczelnia wdrożyła system wczesnego ostrzegania Welfare Alerts.",
      impact: [
        "25-procentowy wzrost wskaźnika utrzymania studentów rok do roku",
        "Identyfikacja studentów zagrożonych rezygnacją przed wystąpieniem problemu",
        "98% skuteczności w terminowym dostarczaniu spersonalizowanych ofert kariery",
        "Budowa kultury opartej na danych i realnym wsparciu dobrostanu studenta"
      ]
    }
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
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll on case study change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedIdx, openModal]);

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

  // Synchronize carousel with modal selection
  useEffect(() => {
    if (openModal) {
      setActiveIdx(selectedIdx + CARDS.length);
    }
  }, [selectedIdx, openModal]);

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

  const logicalIdx = activeIdx % CARDS.length;

  const handleOpenModal = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx(idx % CARDS.length);
    setOpenModal(true);
  };

  const handleNextCase = () => {
    setSelectedIdx((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrevCase = () => {
    setSelectedIdx((prev) => (prev - 1 + CARDS.length) % CARDS.length);
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
                onClick={(e) => {
                  if (isActive) {
                    handleOpenModal(idx, e);
                  } else if (!isJumping) {
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
                  <button
                    onClick={(e) => handleOpenModal(idx, e)}
                    className={`inline-flex items-center justify-center bg-white text-black border border-black px-8 py-4 text-[13px] group-hover:bg-black group-hover:text-white transition-all duration-300 rounded-full font-bold shadow-sm cursor-pointer ${!isActive ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    {card.button} <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
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

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden rounded-[24px] sm:rounded-[40px] border-none shadow-2xl [&>button]:hidden max-h-[92vh] flex flex-col bg-white">
          {selectedIdx !== null && (
            <>
              {/* Fixed Header with gradient/image area */}
              <div className="relative shrink-0 h-32 sm:h-48 bg-neutral-900 flex items-end p-8 sm:p-12 overflow-hidden">
                {/* Custom Close Button */}
                <DialogClose className="absolute top-6 right-6 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white text-neutral-500 hover:text-black hover:bg-neutral-50 transition-all shadow-sm active:scale-95 outline-none cursor-pointer">
                  <X className="w-5 h-5" strokeWidth={2.5} />
                  <span className="sr-only">Zamknij</span>
                </DialogClose>

                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <div className="text-[120px] font-black text-white select-none leading-none">
                     {CARDS[selectedIdx].initial}
                   </div>
                </div>
                <div className="relative z-10 w-full">
                  <span className="text-neutral-400 text-[11px] uppercase tracking-[2px] font-bold mb-2 block">
                    Case Study Success Story
                  </span>
                  <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-tight">
                    {CARDS[selectedIdx].university}
                  </h2>
                </div>
              </div>

              {/* Scrollable Middle Content */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-8 sm:p-12 flex flex-col gap-8 bg-white min-h-0"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                    {CARDS[selectedIdx].fullStory.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {CARDS[selectedIdx].fullStory.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {CARDS[selectedIdx].fullStory.impact.map((item, i) => (
                    <div key={i} className="flex gap-3 bg-neutral-50 p-5 rounded-[20px] border border-neutral-100">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-700 font-medium leading-[1.5]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed Footer */}
              <div className="shrink-0 px-8 py-6 sm:px-12 sm:py-8 border-t border-neutral-100 flex justify-between items-center text-sm text-neutral-400 bg-white">
                <span>Think Beyond &copy; 2026</span>
                <div className="flex items-center gap-6">
                  <div className="font-bold text-black text-base">
                    {selectedIdx + 1} / {CARDS.length}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrevCase} 
                      className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer active:scale-90"
                      aria-label="Previous case"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleNextCase} 
                      className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer active:scale-90"
                      aria-label="Next case"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
