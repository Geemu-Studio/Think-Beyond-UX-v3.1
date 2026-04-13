import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  AlertCircle,
  Lightbulb,
  Target
} from 'lucide-react';
import { NavigationButtons } from './shared/NavigationButtons';
import { CaseStudyModal } from './shared/CaseStudyModal';

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
        "Admissions Yield: 27% increase in conversion yield through intelligent forecasting.",
        "Global Positioning: Established a premier digital-first gateway for international applicants, supporting the university's mission to attract elite global talent.",
        "Data Sovereignty: Secured full, real-time transparency across the application funnel, directly informing the institutional growth strategy."
      ]
    }
  ],
  reference: {
    text: "We transformed our candidate engagement from a fragmented approach to a unified digital ecosystem. Thanks to Think Beyond, our admissions journey is now entirely remote, frictionless, and applicant-centric.",
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
        "Student Retention: Achieved an 18% increase in retention rate YOY, directly translating to a sustained NSS 'Academic Support' rating.",
        "Academic Progression: Provided the digital foundation for a 'Whole University' approach to mental health and proactive academic care.",
        "Employment Outcomes: 98% timely outreach for career opportunities, strengthening the university's Graduate Outcomes dataset for TEF assessment."
      ]
    }
  ],
  reference: {
    text: "We transformed our student support from a reactive, disconnected process into a unified proactive care model. Thanks to Think Beyond, our academic advisors can now identify and support at-risk learners before they disengage, significantly boosting our overall progression rates.",
    author: "Head of Student Success, CDV Poznań"
  }
};

const ALUMNI_DETAILED_CONTENT: SWPSContent = {
  title: "Lifelong Engagement at Scale: The Open University Ecosystem",
  sections: [
    {
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      title: "At a Glance",
      items: [
        "Client: The Open University",
        "Focus: Continuous Education & Development",
        "Scale: 200,000+ Alumni global community"
      ]
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-black" />,
      title: "The Challenge: Fragmented Graduate Connections",
      description: "With a vast, global alumni network, the institution struggled with disconnected data and transactional philanthropic cycles. Mentorship and long-term engagement were hindered by legacy systems that provided no single view of the alumni journey.",
      items: []
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-black" />,
      title: "The Solution: A Unified Alumni Ecosystem",
      description: "Think Beyond architected an intelligent alumni portal and CRM architecture that synchronised philanthropic passion with career data. This enabled personalized engagement paths for mentorship and continuous learning.",
      items: []
    },
    {
      icon: <Target className="w-5 h-5 text-black" />,
      title: "Institutional Impact",
      items: [
        "Philanthropic Growth: 42% increase in recurring engagement through mission-aligned cultivation.",
        "Network Strength: 3x expansion of the student-alumni mentorship network in the first 24 months.",
        "Continuous Learning: 60% uplift in alumni uptake for microcredentials and professional development."
      ]
    }
  ],
  reference: {
    text: "We moved from disconnected outreach to a cohesive, data-driven alumni ecosystem. Thanks to Think Beyond, our development teams can now cultivate lifelong relationships, significantly increasing both philanthropic engagement and mentorship participation.",
    author: "Director of Development & Alumni Relations, The Open University"
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
      "100% Remote Admissions Infrastructure",
      "-45% Reduction in Application Drop-off",
      "+27% Yield Optimisation through Predictive Logic"
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
      "+35% Early Interventions",
      "100% Unified Student View",
      "+18% Retention Rate"
    ],
    button: "Explore the CDV Campus",
    initial: "C",
    fullStory: {
      title: "Fostering Lifelong Success: The CDV Poznań Experience",
      isDetailed: true,
      content: CDV_DETAILED_CONTENT
    }
  },
  {
    university: "The Open University",
    metrics: [
      "+42% Philanthropic Engagement",
      "3x Mentorship Network Growth",
      "+60% Continuous Education Uptake"
    ],
    button: "Discover the Alumni Story",
    initial: "O",
    fullStory: {
      title: "Lifelong Engagement at Scale: The Open University Ecosystem",
      isDetailed: true,
      content: ALUMNI_DETAILED_CONTENT
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

      <NavigationButtons
        onPrev={prevSlide}
        onNext={nextSlide}
        className="mt-8 justify-end px-3 lg:px-6 max-w-7xl mx-auto w-full"
      />

      <CaseStudyModal
        isOpen={openModal}
        onOpenChange={setOpenModal}
        data={CARDS[selectedIdx]}
        currentIndex={selectedIdx}
        totalItems={CARDS.length}
        onPrev={handlePrevCase}
        onNext={handleNextCase}
      />
    </div>
  );
}
