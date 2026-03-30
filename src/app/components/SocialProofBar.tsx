import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from './ui/dialog';
import {
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  AlertCircle,
  Lightbulb,
  Quote,
  CheckCircle2,
  ArrowRight,
  Target
} from 'lucide-react';
import { ExpertFooter } from './ui/ExpertFooterAccordion';

/* --- Shared Types --- */
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

interface PartnerCase {
  university: string;
  initial: string;
  buttonText: string;
  fullStory: FullStory;
}

/* --- Data Definitions --- */
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
      title: "Transformational Impact",
      items: [
        "Centralised Student Hub: A highly responsive, digital portal empowering students to manage their academic journey from any device.",
        "360-Degree Visibility: Breaking down data silos to provide staff with a single, holistic view of every student—aggregating communication history, applications, and academic milestones in one place."
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
      title: "Transformational Impact",
      items: [
        "Unprecedented Efficiency: Achieved a 35% reduction in administrative overhead per enrolment.",
        "Candidate-Centric Journey: Reached a 92% positive candidate experience score through highly personalized, timely engagement."
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
      description: "CDV Poznań recognized a critical need to shift from reactive student administration to proactive welfare and career guidance. Without early-alert mechanisms, identifying students at risk of discontinuation or struggling with their academic path was highly inefficient.",
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
      title: "Transformational Impact",
      items: [
        "Increased Retention: Achieved a 25% increase in the student retention rate year-over-year.",
        "Career Readiness: Delivered 98% timely outreach for relevant career opportunities, bridging the gap between education and industry."
      ]
    }
  ],
  reference: {
    text: "Think Beyond shared our vision of a student-centric campus. From early-warning systems to automated career matching, the technical solutions they delivered have significantly enhanced our institutional impact.",
    author: "Student Success Lead, CDV Poznań"
  }
};

const PARTNER_CASES: PartnerCase[] = [
  {
    university: "SWPS University",
    initial: "SWPS",
    buttonText: "Discover the SWPS Story",
    fullStory: {
      title: "Digital Recruitment Transformation at SWPS University",
      isDetailed: true,
      content: SWPS_DETAILED_CONTENT
    }
  },
  {
    university: "Kozminski University (ALK)",
    initial: "ALK",
    buttonText: "Discover the ALK Story",
    fullStory: {
      title: "Global Scale and Prestige: Kozminski University Case Study",
      isDetailed: true,
      content: KOZMINSKI_DETAILED_CONTENT
    }
  },
  {
    university: "Collegium Da Vinci (CDV)",
    initial: "CDV",
    buttonText: "Explore the CDV Campus",
    fullStory: {
      title: "Proactive Student Support: CDV Poznań Success Story",
      isDetailed: true,
      content: CDV_DETAILED_CONTENT
    }
  }
];

/* --- Component Definition --- */

function PartnerCard({ partner, onClick }: { partner: PartnerCase; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 flex flex-row items-center gap-5 rounded-[20px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 group cursor-pointer w-[300px] sm:w-[340px]"
    >
      <div
        className="w-12 h-10 rounded-[12px] flex items-center justify-center text-neutral-400 bg-neutral-50 border border-neutral-100 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-2"
      >
        <span className="font-bold text-[10px] sm:text-[11px] tracking-tight">{partner.initial}</span>
      </div>

      <div className="flex flex-1 items-center justify-between overflow-hidden">
        <h3 className="text-[17px] text-black tracking-[-0.4px] font-[700] text-left leading-tight line-clamp-1 pr-2">
          {partner.university}
        </h3>

        <div className="shrink-0 w-8 h-8 flex items-center justify-center">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="arrow-indicator"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function SocialProofBar() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isNearForm, setIsNearForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setIsNearForm(false);
  }, [selectedIdx, openModal]);

  const handleOpenModal = (idx: number) => {
    setSelectedIdx(idx);
    setOpenModal(true);
  };

  const handleNextCase = () => {
    setSelectedIdx((prev) => (prev + 1) % PARTNER_CASES.length);
  };

  const handlePrevCase = () => {
    setSelectedIdx((prev) => (prev - 1 + PARTNER_CASES.length) % PARTNER_CASES.length);
  };

  return (
    <section id="partners" className="bg-neutral-50 py-16 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <div className="text-center w-full">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px] font-bold" style={{ fontWeight: 600 }}>
            Our Partnerships
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {PARTNER_CASES.map((pc, idx) => (
            <PartnerCard
              key={pc.university}
              partner={pc}
              onClick={() => handleOpenModal(idx)}
            />
          ))}
        </div>
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-[750px] p-0 overflow-hidden rounded-[24px] sm:rounded-[40px] border-none shadow-2xl [&>button]:hidden max-h-[92vh] flex flex-col bg-white">
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
                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">
                  {PARTNER_CASES[selectedIdx].initial}
                </div>
                <div className="relative z-10 w-full text-left">
                  <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-0.5 block">
                    Case Study Success Story
                  </span>
                  <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                    {PARTNER_CASES[selectedIdx].university}
                  </h2>
                </div>
              </div>
            </motion.div>

            <div
              ref={scrollContainerRef}
              onScroll={(e) => {
                const target = e.currentTarget;
                const scrollPos = target.scrollTop;
                const scrollHeight = target.scrollHeight;
                const clientHeight = target.clientHeight;

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
                {PARTNER_CASES[selectedIdx].fullStory.isDetailed ? (
                  <div className="flex flex-col gap-10 text-left">
                    <header>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 leading-tight">
                        {PARTNER_CASES[selectedIdx].fullStory.content?.title}
                      </h3>
                    </header>
                    <div className="flex flex-col gap-12">
                      {PARTNER_CASES[selectedIdx].fullStory.content?.sections.map((section, sIdx) => (
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
                    <blockquote className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-black relative overflow-hidden group/quote">
                      <Quote className="absolute -top-2 -right-2 w-20 h-20 text-black/5 opacity-10" />
                      <p className="text-lg italic text-neutral-800 leading-relaxed mb-6 relative z-10">
                        "{PARTNER_CASES[selectedIdx].fullStory.content?.reference.text}"
                      </p>
                      <footer className="flex items-center gap-4 relative z-10">
                        <div className="h-px w-8 bg-neutral-200"></div>
                        <cite className="not-italic font-bold text-black text-sm">
                          {PARTNER_CASES[selectedIdx].fullStory.content?.reference.author}
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                ) : (
                  <div className="flex flex-col gap-8 text-left">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                        {PARTNER_CASES[selectedIdx].fullStory.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-lg">
                        {PARTNER_CASES[selectedIdx].fullStory.description}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {PARTNER_CASES[selectedIdx].fullStory.impact?.map((item, i) => (
                        <div key={i} className="flex gap-3 bg-neutral-50 p-5 rounded-[20px] border border-neutral-100 text-left">
                          <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                          <span className="text-[14px] text-neutral-700 font-medium leading-[1.5]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <ExpertFooter />
              </motion.div>
            </div>

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
                  <div className="font-bold text-black text-base">{selectedIdx + 1} / {PARTNER_CASES.length}</div>
                  <div className="flex gap-2">
                    <button onClick={handlePrevCase} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer active:scale-90" aria-label="Previous case"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={handleNextCase} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer active:scale-90" aria-label="Next case"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
