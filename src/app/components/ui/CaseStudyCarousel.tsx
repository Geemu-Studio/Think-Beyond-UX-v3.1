import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from './dialog';
import { Input } from './input';
import { Button } from './button';
import {
  ArrowRight,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  SendHorizonal,
  GraduationCap,
  AlertCircle,
  Lightbulb,
  Quote,
  Target
} from 'lucide-react';

// --- Types ---
interface SWPSSection {
  icon: React.ReactNode;
  title: string;
  description?: string;
  subTitle?: string;
  items: string[];
}

interface SWPSContent {
  title: string;
  sections: SWPSSection[];
  reference: {
    text: string;
    author: string;
  };
}

interface FullStory {
  title: string;
  description?: string;
  impact?: string[];
  isDetailed?: boolean;
  content?: SWPSContent;
}

interface Card {
  university: string;
  metrics: string[];
  button: string;
  initial: string;
  fullStory: FullStory;
}

// Specialized content for SWPS - Conversion-optimized B2B copy
const SWPS_DETAILED_CONTENT: SWPSContent = {
  title: "Transforming the Student Experience at Scale: The SWPS University Ecosystem",
  sections: [
    {
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      title: "At a Glance",
      items: [
        "Client: SWPS University",
        "Scale: 17,500+ undergraduate, postgraduate, and doctoral students",
        "Footprint: 6 campuses across major cities"
      ]
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-black" />,
      title: "The Challenge: Overcoming Administrative Silos",
      description: "Before partnering with Think Beyond, the university relied on fragmented, paper-based documentation. They needed to modernize their infrastructure to meet the digital expectations of today’s learners. The key objectives were:",
      items: [
        "Frictionless Journeys: Replacing obsolete manual processes with seamless, digital workflows.",
        "Omnichannel Engagement: Creating a responsive environment that provides top-tier support across all student touchpoints."
      ]
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-black" />,
      title: "The Solution: A Unified Digital Campus",
      description: "Powered by Salesforce Education Cloud and Genesys Cloud, Think Beyond orchestrated a complete omnichannel transformation, shifting the institution from reactive administration to proactive student care.",
      items: []
    },
    {
      icon: <Target className="w-5 h-5 text-black" />,
      title: "Institutional Impact",
      items: [
        "NSS Improvement: Projected 8.5% increase in 'Learning Resources' satisfaction scoring within 18 months.",
        "TEF Excellence: Reinforced the institutional evidence base for 'Student Experience' and 'Student Outcomes' under the TEF Gold framework.",
        "Operational Resilience: Eliminated 100% of paper-reliant critical paths in the first year of deployment."
      ]
    }
  ],
  reference: {
    text: "Incredible attention to our institutional needs. The Think Beyond team provided wonderful support, patience, and expertise. Thanks to their commitment, this complex transformation went as smoothly as possible.",
    author: "SWPS University Representative"
  }
};

const KOZMINSKI_DETAILED_CONTENT: SWPSContent = {
  title: "Optimising Global Admissions: The ALD Warsaw Ecosystem",
  sections: [
    {
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      title: "At a Glance",
      items: [
        "Client: ALD Warsaw (Kozminski University)",
        "Focus: Elite Business Education",
        "Scale: 12,000+ international applications processed annually"
      ]
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-black" />,
      title: "The Challenge: Scaling Global Talent Acquisition",
      description: "As a globally recognized institution, ALD Warsaw faced a massive influx of international applications. Their existing, rigid administrative processes led to slow response times and high administrative overhead, risking the loss of top-tier candidates to competing universities.",
      items: []
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-black" />,
      title: "The Solution: Intelligent Application Workflows",
      description: "Leveraging Salesforce Education Cloud, Think Beyond implemented an automated, data-driven admissions ecosystem. The new architecture streamlined candidate scoring, automated routine communications, and provided admissions teams with real-time analytics.",
      items: []
    },
    {
      icon: <Target className="w-5 h-5 text-black" />,
      title: "Institutional Impact",
      items: [
        "Enrolment Yield: 35% reduction in administrative overhead per enrolment, allowing for higher strategic investment in faculty recruitment.",
        "Global Positioning: Established a premier digital-first gateway for international applicants, supporting the university's mission to attract elite global talent.",
        "Data Sovereignty: Secured full, real-time transparency across the application funnel, directly informing the institutional growth strategy."
      ]
    }
  ],
  reference: {
    text: "Think Beyond entirely reshaped how we engage with global talent. The automation, clarity, and strategic insight brought to our admissions team have given us a distinct competitive advantage.",
    author: "Admissions Director, ALD Warsaw"
  }
};

const CDV_DETAILED_CONTENT: SWPSContent = {
  title: "Fostering Lifelong Success: The CDV Poznań Experience",
  sections: [
    {
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      title: "At a Glance",
      items: [
        "Client: CDV Poznań (Collegium Da Vinci)",
        "Focus: Creative and Technology Education",
        "Scale: 8,000+ students supported"
      ]
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-black" />,
      title: "The Challenge: Redefining Student Retention",
      description: "CDV Poznań recognized a critical need to shift from reactive student administration to proactive welfare and career guidance. Without early-alert mechanisms, identifying students at risk of dropping out or struggling with their academic path was highly inefficient.",
      items: []
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-black" />,
      title: "The Solution: A Proactive Care Ecosystem",
      description: "Think Beyond deployed a unified engagement platform centered on student success. By integrating academic performance data with behavioral insights in Salesforce, the university gained the ability to intervene early and provide tailored support.",
      items: []
    },
    {
      icon: <Target className="w-5 h-5 text-black" />,
      title: "Institutional Impact",
      items: [
        "Student Retention: Achieved a 25% increase in retention rate YOY, directly translating to a sustained NSS 'Academic Support' rating.",
        "Academic Flourishing: Provided the digital foundation for a 'Whole University' approach to mental health and proactive academic care.",
        "Employment Outcomes: 98% timely outreach for career opportunities, strengthening the university's Graduate Outcomes dataset for TEF assessment."
      ]
    }
  ],
  reference: {
    text: "The transition from reactive administration to proactive student care has fundamentally changed our campus culture. Think Beyond's strategic approach and deep understanding of our mission made this evolution possible.",
    author: "Head of Student Success, CDV Poznań"
  }
};

const CARDS: Card[] = [
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
      title: "Transforming the Student Experience at Scale: The SWPS University Ecosystem",
      isDetailed: true,
      content: SWPS_DETAILED_CONTENT
    }
  },
  {
    university: "ALD Warsaw (Kozminski University)",
    metrics: [
      "Processed 12,000+ International Applications Annually",
      "35% Reduction in Administrative Overhead per Enrolment",
      "92% Alumni Engagement Score"
    ],
    button: "Discover the ALD Story",
    initial: "A",
    fullStory: {
      title: "Optimising Global Admissions: The ALD Warsaw Ecosystem",
      isDetailed: true,
      content: KOZMINSKI_DETAILED_CONTENT
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
      title: "Fostering Lifelong Success: The CDV Poznań Experience",
      isDetailed: true,
      content: CDV_DETAILED_CONTENT
    }
  }
];

// Expanded for infinite looping
const EXTENDED_CARDS = [...CARDS, ...CARDS, ...CARDS];

interface CaseStudyCarouselProps {
  initialActiveIdx?: number;
}

import { ExpertFooterAccordion } from './ExpertFooterAccordion';

export function CaseStudyCarousel({ initialActiveIdx = 0 }: CaseStudyCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(initialActiveIdx + CARDS.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isNearForm, setIsNearForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll and UI state on case study change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setIsNearForm(false);
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
    let timer: any;

    if (activeIdx >= CARDS.length * 2) {
      timer = setTimeout(() => {
        setIsJumping(true);
        setActiveIdx(activeIdx - CARDS.length);
        setTimeout(() => setIsJumping(false), 50);
      }, 500);
    } else if (activeIdx < CARDS.length) {
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
                whileHover={isActive ? { scale: 1.03, transition: { duration: 0.2 } } : {}}
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

                <h3 className="text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.8px] text-black font-bold text-left w-full">
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

      {/* Navigation Controls — Standardized across the page */}
      <div className="mt-8 flex justify-end gap-5 px-6 max-w-7xl mx-auto w-full">
        <button
          onClick={prevSlide}
          className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900 active:scale-95 cursor-pointer"
          aria-label="Previous case study"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900 active:scale-95 cursor-pointer"
          aria-label="Next case study"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-6xl w-full p-0 overflow-hidden rounded-[24px] sm:rounded-[32px] border-none shadow-2xl [&>button]:hidden max-h-[92vh] flex flex-col bg-white">
          {selectedIdx !== null && (
            <div className="relative h-full flex flex-col overflow-hidden">
              {/* Floating Global Close Button - Persistent with dynamic contrast */}
              <DialogClose asChild>
                <motion.button
                  animate={{
                    backgroundColor: isNearForm ? "#000000" : "#ffffff",
                    color: isNearForm ? "#ffffff" : "#000000",
                    borderColor: isNearForm ? "#000000" : "#e5e5e5"
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute right-8 sm:right-12 top-6 z-[130] w-10 h-10 flex items-center justify-center rounded-full shadow-lg active:scale-95 outline-none cursor-pointer border transition-shadow hover:shadow-xl"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                  <span className="sr-only">Close</span>
                </motion.button>
              </DialogClose>

              {/* Header - Collapses height on scroll toward form */}
              <motion.div
                initial={false}
                animate={{
                  height: isNearForm ? 0 : (window.innerWidth < 640 ? 80 : 112),
                  opacity: isNearForm ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative shrink-0 bg-black flex items-center overflow-hidden z-[100]"
              >
                <div className="h-20 sm:h-28 flex items-center px-8 sm:px-12 w-full relative">
                  {/* Background Watermark */}
                  <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">
                    {CARDS[selectedIdx].initial}
                  </div>

                  <div className="relative z-10 w-full text-left">
                    <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-0.5 block">
                      Case Study Success Story
                    </span>
                    <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                      {CARDS[selectedIdx].university}
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Scrollable Middle Content */}
              <div
                ref={scrollContainerRef}
                onScroll={(e) => {
                  const target = e.currentTarget;
                  const scrollPos = target.scrollTop;
                  const scrollHeight = target.scrollHeight;
                  const clientHeight = target.clientHeight;

                  // Refined logic: hide when user scrolls down and is in the bottom area
                  const nearBottom = scrollHeight - scrollPos <= clientHeight + 450;
                  setIsNearForm(scrollPos > 100 && nearBottom);
                }}
                className="flex-1 overflow-y-auto w-full bg-white min-h-0 relative z-[50] scroll-smooth"
              >
                <motion.div
                  animate={{
                    paddingTop: isNearForm ? 40 : (window.innerWidth < 640 ? 32 : 48),
                    paddingBottom: isNearForm ? 40 : (window.innerWidth < 640 ? 32 : 48)
                  }}
                  className="px-8 sm:px-12 flex flex-col gap-10"
                >
                  {CARDS[selectedIdx].fullStory.isDetailed && CARDS[selectedIdx].fullStory.content ? (
                    <div className="flex flex-col gap-10 text-left">
                      {/* Rich Content View for SWPS */}
                      <header>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 leading-tight">
                          {CARDS[selectedIdx].fullStory.content.title}
                        </h3>
                      </header>

                      <div className="flex flex-col gap-12">
                        {CARDS[selectedIdx].fullStory.content.sections.map((section, sIdx) => (
                          <section key={sIdx} className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-1">
                              {section.icon}
                              <h4 className="font-bold text-lg text-black">{section.title}</h4>
                            </div>
                            {section.description && (
                              <p className="text-neutral-600 leading-relaxed mb-2">{section.description}</p>
                            )}
                            {section.subTitle && (
                              <p className="font-bold text-black mt-2 mb-1">{section.subTitle}</p>
                            )}
                            <ul className="flex flex-col gap-3">
                              {section.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex gap-3 items-start">
                                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 shrink-0 mt-2"></div>
                                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>

                      {/* Reference Block */}
                      <blockquote className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-black relative overflow-hidden group/quote">
                        <Quote className="absolute -top-2 -right-2 w-20 h-20 text-black/5 opacity-10" />
                        <p className="text-lg italic text-neutral-800 leading-relaxed mb-6 relative z-10">
                          "{CARDS[selectedIdx].fullStory.content.reference.text}"
                        </p>
                        <footer className="flex items-center gap-4 relative z-10">
                          <div className="h-px w-8 bg-neutral-200"></div>
                          <cite className="not-italic font-bold text-black text-sm">
                            {CARDS[selectedIdx].fullStory.content.reference.author}
                          </cite>
                        </footer>
                      </blockquote>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-8 text-left">
                      {/* Standard View for other cards */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                          {CARDS[selectedIdx].fullStory.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                          {CARDS[selectedIdx].fullStory.description}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {CARDS[selectedIdx].fullStory.impact?.map((item, i) => (
                          <div key={i} className="flex gap-3 bg-neutral-50 p-5 rounded-[20px] border border-neutral-100 text-left">
                            <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                            <span className="text-[14px] text-neutral-700 font-medium leading-[1.5]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Form - Scrolling target */}
                  <ExpertFooterAccordion />
                </motion.div>
              </div>

              {/* Fixed Footer - Collapses height on scroll toward form */}
              <motion.div
                initial={false}
                animate={{
                  height: isNearForm ? 0 : (window.innerWidth < 640 ? 76 : 88),
                  opacity: isNearForm ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="shrink-0 bg-white border-t border-neutral-100 overflow-hidden z-[100]"
              >
                <div className="h-[76px] sm:h-[88px] px-8 py-6 sm:px-12 sm:py-8 flex justify-between items-center text-sm text-neutral-400 w-full">
                  <span>Think Beyond &copy; 2026</span>
                  <div className="flex items-center gap-6">
                    <div className="font-bold text-black text-base">
                      {selectedIdx + 1} / {CARDS.length}
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={handlePrevCase}
                        className="h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900 active:scale-95 cursor-pointer"
                        aria-label="Previous case"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextCase}
                        className="h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900 active:scale-95 cursor-pointer"
                        aria-label="Next case"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
