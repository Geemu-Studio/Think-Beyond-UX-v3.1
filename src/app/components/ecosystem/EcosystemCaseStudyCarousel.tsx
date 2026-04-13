import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  GraduationCap, 
  AlertCircle, 
  Lightbulb, 
  Target,
  X 
} from 'lucide-react';
import { NavigationButtons } from '../ui/shared/NavigationButtons';
import { PlaceholderPhoto } from '../ui/shared/PlaceholderPhoto';
import { CaseStudyModal } from '../ui/shared/CaseStudyModal';

function AnimatedCounter({ value, match }: { value: string, match: RegExpMatchArray }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numStr = match[0].replace(/,/g, '');
  const targetNum = parseFloat(numStr);
  const prefix = value.substring(0, value.indexOf(match[0]));
  const suffix = value.substring(value.indexOf(match[0]) + match[0].length);
  const hasCommas = value.includes(',');

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 1.5
  });

  const display = useTransform(springValue, (current) => {
    const val = Math.floor(current);
    const formatted = hasCommas ? val.toLocaleString('en-GB') : val.toString();
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(targetNum);
    } else {
      springValue.set(0);
    }
  }, [isInView, targetNum, springValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function Counter({ value, noAnim }: { value: string, noAnim?: boolean }) {
  const match = value.match(/([\d,.]+)/);
  if (!match || noAnim) {
    return <span>{value}</span>;
  }
  return <AnimatedCounter value={value} match={match} />;
}

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
    ],
    storyContent: {
      title: "Resolving Data Silos at Scale: The SWPS University Ecosystem",
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
          description: "Before partnering with Think Beyond, the university relied on fragmented data pipelines and disconnected legacy systems. They needed to stabilize their core IT infrastructure to support large-scale data governance.",
          items: [
            "Technical Debt Reduction: Replacing obsolete manual processes with resilient digital workflows.",
            "Single Source of Truth (SSOT): Consolidating disparate systems into a unified architecture."
          ]
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-black" />,
          title: "The Solution: Core CRM Architecture Deployment",
          description: "Powered by Salesforce Education Cloud, Think Beyond orchestrated a complete infrastructure transformation, shifting the institution from fragmented data management to proactive data governance.",
          items: []
        },
        {
          icon: <Target className="w-5 h-5 text-black" />,
          title: "Institutional Impact",
          items: [
            "Data Synchronisation: Seamless integration across 6 campuses ensuring real-time reporting.",
            "System Stability: Reinforced the institutional evidence base for compliance and operational resilience.",
            "Legacy Replacement: Eliminated 100% of paper-reliant critical paths in the first year of deployment."
          ]
        }
      ]
    }
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
      { label: 'Business School in Poland', value: '1st', noAnim: true },
      { label: 'Student View', value: 'Unified 360°' }
    ],
    storyContent: {
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
          description: "As a globally recognized institution, ALD Warsaw faced a massive influx of international applications. Their existing, rigid administrative processes led to slow response times.",
          items: []
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-black" />,
          title: "The Solution: Intelligent Application Workflows",
          description: "Leveraging Salesforce Education Cloud, Think Beyond implemented an automated, data-driven admissions ecosystem. The new architecture streamlined candidate scoring and automated routine communications.",
          items: []
        },
        {
          icon: <Target className="w-5 h-5 text-black" />,
          title: "Institutional Impact",
          items: [
            "Enrolment Yield: 35% reduction in administrative overhead per enrolment.",
            "Global Positioning: Established a premier digital-first gateway for international applicants.",
            "Data Sovereignty: Secured full, real-time transparency across the application funnel."
          ]
        }
      ]
    }
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
    ],
    storyContent: {
      title: "Deploying a Unified Architectural Framework: The CDV Poznań Experience",
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
          title: "The Challenge: Eliminating Fragmented Data Processes",
          description: "CDV Poznań recognized a critical need to eliminate legacy constraints and shift towards an automated, scalable data infrastructure.",
          items: []
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-black" />,
          title: "The Solution: A Centralized Data Architecture",
          description: "Think Beyond deployed a unified digital platform, integrating core academic systems with Salesforce to establish a secure, continuous flow of institutional data.",
          items: []
        },
        {
          icon: <Target className="w-5 h-5 text-black" />,
          title: "Institutional Impact",
          items: [
            "System Stabilisation: Achieved a 25% increase in data-processing efficiency YOY.",
            "Digital Infrastructure: Provided the architectural foundation for a 'Whole University' digital approach.",
            "Automated Operations: Enabled 98% automated system-driven execution for routine administrative tasks."
          ]
        }
      ]
    }
  }
];

export function EcosystemCaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const activeStudy = caseStudies[currentIndex];

  const mappedData = {
    university: activeStudy.name,
    initial: activeStudy.name[0],
    fullStory: {
      isDetailed: true,
      content: {
        title: activeStudy.storyContent.title,
        sections: activeStudy.storyContent.sections,
        reference: {
          text: activeStudy.quote,
          author: `${activeStudy.representative.name}, ${activeStudy.representative.role}`
        }
      }
    }
  };

  return (
    <section className="bg-neutral-50/50 py-16 sm:py-24 border-t border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-3 lg:px-6">
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
              <PlaceholderPhoto 
                className="relative aspect-square lg:aspect-auto flex-1"
                onAction={() => setIsModalOpen(true)}
                actionLabel={`Discover the ${activeStudy.name.split(' ')[0]} Story`}
              />

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
                        <Counter value={stat.value} noAnim={(stat as any).noAnim} />
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

        </div>
      </div>

      <NavigationButtons
        onPrev={prevSlide}
        onNext={nextSlide}
        className="mt-8 justify-end px-3 lg:px-6 max-w-7xl mx-auto"
      />

      <CaseStudyModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        data={mappedData}
        currentIndex={currentIndex}
        totalItems={caseStudies.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </section>
  );
}
