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
  Mail, 
  Phone, 
  GraduationCap, 
  AlertCircle, 
  Lightbulb, 
  Quote, 
  CheckCircle2, 
  ArrowRight,
  Target 
} from 'lucide-react';

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
  title: "Optimizing Global Admissions: The ALD Warsaw Ecosystem",
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
    initial: "S",
    buttonText: "Discover the SWPS Story",
    fullStory: {
      title: "Digital Recruitment Transformation at SWPS University",
      isDetailed: true,
      content: SWPS_DETAILED_CONTENT
    }
  },
  {
    university: "ALD Warsaw (Kozminski University)",
    initial: "ALK",
    buttonText: "Discover the ALD Story",
    fullStory: {
      title: "Global Scale and Prestige: ALD Warsaw Case Study",
      isDetailed: true,
      content: KOZMINSKI_DETAILED_CONTENT
    }
  },
  {
    university: "CDV Poznań (Collegium Da Vinci)",
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

function ExpertFooter() {
  const [form, setForm] = useState({ name: '', university: '', email: '', gdpr: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'This field is required';
    if (!form.university.trim()) e.university = 'This field is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address';
    if (!form.gdpr) e.gdpr = 'Your consent is required to proceed';
    return e;
  };

  const isFormValid = 
    form.name.trim() !== '' && 
    form.university.trim() !== '' && 
    form.email.trim() !== '' && 
    /\S+@\S+\.\S+/.test(form.email) && 
    form.gdpr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="mt-16 pt-12 border-t border-neutral-100 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
             <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-bold text-lg">
               MP
             </div>
          </div>
          <div className="flex flex-col text-left">
            <h5 className="font-bold text-black text-lg">Marcin Pieńkowski</h5>
            <p className="text-sm text-neutral-500">Digital Transformation Strategist</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+48502227174" className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:marcin@thinkbeyond.cloud" className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="w-full">
        {submitted ? (
          <div className="bg-white rounded-[24px] border border-[#F0F0F0] p-12 flex flex-col items-center gap-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.05)] animate-in fade-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-xl mb-2">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div>
              <h6 className="font-bold text-black text-2xl mb-2">Thank you!</h6>
              <p className="text-neutral-500 max-w-sm">
                Marcin will be in touch within 24 business hours to talk about the details.
              </p>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-bold text-black hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-[24px] border border-[#F0F0F0] p-8 sm:p-10 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            <div>
              <h3 className="text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black text-left">
                Let's talk about the complete student experience at your institution.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left" noValidate>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Full name</label>
                <input
                  type="text"
                  placeholder="Professor Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.name ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                />
                {errors.name && <p className="text-[12px] text-neutral-700 mt-1">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Institution name</label>
                <input
                  type="text"
                  placeholder="Your university"
                  list="uk-universities"
                  value={form.university}
                  onChange={(e) => setForm({ ...form, university: e.target.value })}
                  className={`rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.university ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                />
                {errors.university && <p className="text-[12px] text-neutral-700 mt-1">{errors.university}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Institutional email address</label>
                <input
                  type="email"
                  placeholder="j.smith@university.ac.uk"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.email ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                />
                {errors.email && <p className="text-[12px] text-neutral-700 mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.gdpr}
                    onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                    className="mt-1 accent-black w-4 h-4 shrink-0 cursor-pointer"
                  />
                  <span className="text-[13px] text-neutral-600 leading-[1.6]">
                    I consent to the processing of my personal data in accordance with GDPR for the purpose of responding to my enquiry.
                  </span>
                </label>
                {errors.gdpr && <p className="text-[12px] text-neutral-700 ml-7">{errors.gdpr}</p>}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 text-[15px] transition-all duration-300 rounded-full font-semibold shadow-sm
                  ${isFormValid 
                    ? 'bg-black text-white hover:bg-neutral-800 border border-black cursor-pointer' 
                    : 'bg-neutral-200 text-neutral-400 border border-neutral-200 cursor-not-allowed opacity-70'}`}
              >
                Speak with Our Team
              </button>

              <div className="flex items-center justify-center gap-2 text-[12px] text-neutral-400 mt-2">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5.5" width="9" height="6.5" rx="1" />
                  <path d="M4.5 5.5V3.5a2 2 0 0 1 4 0v2" />
                </svg>
                <span>Your data is 100% secure and will never be shared. No spam, ever.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function PartnerCard({ partner, onClick }: { partner: PartnerCase; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4 }}
      className="p-6 flex flex-row items-center gap-5 rounded-[20px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer w-[300px] sm:w-[340px]"
    >
      <div 
        className="w-10 h-10 rounded-[12px] flex items-center justify-center text-neutral-400 bg-neutral-50 border border-neutral-100 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
      >
        <span className="font-bold text-xs sm:text-sm">{partner.initial}</span>
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
            <DialogClose className="absolute right-8 sm:right-12 top-6 z-[130] w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-lg active:scale-95 outline-none cursor-pointer">
              <X className="w-4 h-4" strokeWidth={2.5} />
              <span className="sr-only">Close</span>
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
