import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '../ui/carousel';
import { ConsultationModal } from '../ConsultationModal';
import { useLocation } from 'react-router';
import { 
  ArrowRight, 
  Users, 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  LayoutDashboard,
  Sparkles,
  ChevronDown,
  Filter
} from 'lucide-react';

// Types - Strictly Education Cloud Focused
type Category = "All" | "Education Cloud Architects" | "Recruitment & Engagement" | "Student Success" | "Data & Integration";

interface Expert {
  id: string;
  name: string;
  role: string;
  highlight: string;
  category: Category;
  image?: string;
}

// Full Dataset (20 Experts) - Education Cloud Specialization
const EXPERTS: Expert[] = [
  { id: "1", name: "Marcin Pieńkowski", role: "Lead Education Cloud Architect", highlight: "8x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "2", name: "Dr. Eleanor Hayes", role: "Head of Unified System Strategy", highlight: "Legacy SIS/SITS Expertise", category: "Data & Integration" },
  { id: "3", name: "Tomasz Wróbel", role: "Student Success Consultant", highlight: "NSS Strategy Specialist", category: "Student Success" },
  { id: "4", name: "Sarah Jenkins", role: "Admissions Strategy Consultant", highlight: "Education Cloud Certified", category: "Recruitment & Engagement" },
  { id: "5", name: "David O'Connor", role: "Education Cloud Architect", highlight: "7x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "6", name: "Piotr Kowalski", role: "Student Journey Specialist", highlight: "10+ Years in Higher Ed IT", category: "Student Success" },
  { id: "7", name: "James Montgomery", role: "Head of Student Engagement", highlight: "NSS Strategy Expert", category: "Student Success" },
  { id: "8", name: "Aisha Khan", role: "HE Data Governance Lead", highlight: "UK HE Compliance Expert", category: "Data & Integration" },
  { id: "9", name: "Robert Smith", role: "Alumni Relations Architect", highlight: "Advancement Cloud Expert", category: "Recruitment & Engagement" },
  { id: "10", name: "Elena Rossi", role: "Curriculum Management Lead", highlight: "Curriculum Transformation Expert", category: "Student Success" },
  { id: "11", name: "Oliver Brown", role: "Global Recruitment Strategist", highlight: "International Admissions Expert", category: "Recruitment & Engagement" },
  { id: "12", name: "Sophie Williams", role: "Technical Integration Engineer", highlight: "MuleSoft/SIS Specialist", category: "Data & Integration" },
  { id: "13", name: "Michael Chang", role: "Education Cloud Solution Lead", highlight: "6x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "14", name: "Hannah Taylor", role: "HE Business Analyst", highlight: "HE Process Audit Specialist", category: "Student Success" },
  { id: "15", name: "Adam Nowak", role: "Resilient Cloud Infrastructure Lead", highlight: "Strategic Hosting Expert", category: "Data & Integration" },
  { id: "16", name: "Charlotte Davies", role: "Transformation Change Management Lead", highlight: "Oxford Governance Expert", category: "Education Cloud Architects" },
  { id: "17", name: "Benjamin Lee", role: "Student Experience Designer", highlight: "UK HE Digital Campus Expert", category: "Student Success" },
  { id: "18", name: "Maria Garcia", role: "Educational Data Scientist", highlight: "Predictive Analytics Lead", category: "Data & Integration" },
  { id: "19", name: "William Turner", role: "Institutional Strategy Consultant", highlight: "Former Vice-Chancellor Advisor", category: "Education Cloud Architects" },
  { id: "20", name: "Grace Evans", role: "Enrolment Management Strategist", highlight: "Student Conversion Expert", category: "Recruitment & Engagement" }
];

const CATEGORIES: Category[] = [
  "All", 
  "Education Cloud Architects", 
  "Recruitment & Engagement", 
  "Student Success", 
  "Data & Integration"
];

// Shorter labels for the desktop filter pills
const CATEGORY_LABELS: Record<Category, string> = {
  "All": "All",
  "Education Cloud Architects": "Architects",
  "Recruitment & Engagement": "Recruitment",
  "Student Success": "Student Success",
  "Data & Integration": "Integration"
};

export function EcosystemExpertsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  // Visibility detection for the floating bar
  const isInView = useInView(sectionRef, { amount: 0.1 });

  const filteredExperts = activeFilter === "All" 
    ? EXPERTS 
    : EXPERTS.filter(e => e.category === activeFilter);

  // Wheel Gesture Support for Mac Trackpads
  useEffect(() => {
    const wheelElement = wheelRef.current;
    if (!api || !wheelElement) return;

    let accumulatedDeltaX = 0;
    const threshold = 100;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        accumulatedDeltaX += e.deltaX;
        
        if (accumulatedDeltaX > threshold) {
          api.scrollNext();
          accumulatedDeltaX = 0;
        } else if (accumulatedDeltaX < -threshold) {
          api.scrollPrev();
          accumulatedDeltaX = 0;
        }
      }
    };

    wheelElement.addEventListener('wheel', handleWheel, { passive: false });
    return () => wheelElement.removeEventListener('wheel', handleWheel);
  }, [api]);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-neutral-50 py-12 lg:py-16 overflow-hidden"
    >
      <Carousel 
        setApi={setApi}
        opts={{ 
          align: 'start',
          dragFree: true,
          containScroll: 'trimSnaps'
        }} 
        className="w-full"
      >
        <div className="mx-auto max-w-7xl px-3 lg:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold mb-3 block"
              >
                The People Behind the Platform
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl text-black font-bold leading-tight tracking-tight font-heading"
              >
                Meet Europe’s most certified Education Cloud practice
              </motion.h2>
            </div>

          </div>
        </div>

        {/* Carousel Container - Padding added to prevent shadow/scale clipping */}
        <div 
          ref={wheelRef}
          className="pl-3 lg:pl-[max(theme(spacing.6),calc((100vw-80rem)/2+1.5rem))]"
        >
          <CarouselContent className="-ml-6 pt-16 pb-6">
            <AnimatePresence mode="popLayout">
              {filteredExperts.map((expert, idx) => (
                <CarouselItem 
                  key={expert.id} 
                  className="pl-6 basis-[364px] shrink-0"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.015, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white border border-neutral-100 rounded-[28px] p-3 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-grab active:cursor-grabbing h-[480px] w-[340px] flex flex-col"
                  >
                    {/* Placeholder Area */}
                    <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] bg-neutral-50 flex items-center justify-center shrink-0">
                      <span className="text-[11px] text-neutral-300 font-black tracking-[0.5em] uppercase">PHOTO</span>
                    </div>

                    <div className="px-5 py-4 flex flex-col flex-1 min-h-0">
                      <h3 className="text-lg text-black font-bold tracking-tight line-clamp-1 mb-1">{expert.name}</h3>
                      <p className="text-[13px] text-neutral-500 font-medium mb-3 line-clamp-2 leading-relaxed">{expert.role}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 mb-4">
                        <button className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors" title="WhatsApp">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors" title="Email">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors" title="Phone">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="pt-3 border-t border-neutral-50 flex items-center gap-2 mt-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <span className="text-[11px] text-black font-bold uppercase tracking-wider">{expert.highlight}</span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}


              {/* 21st item - Strategic CTA Card */}
              <CarouselItem className="pl-6 basis-[364px] shrink-0">
                <motion.div
                  layout={{ duration: 0.15 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black rounded-[28px] p-10 flex flex-col justify-between h-[480px] w-[340px] cursor-pointer group overflow-hidden relative shadow-2xl"
                >
                  <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[60px]" />
                  
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3 block">Student Conversion Expert • Institutional Growth</span>
                    <h3 className="text-xl sm:text-2xl text-white font-bold leading-tight mb-6">
                      Ready to foster student belonging?
                    </h3>
                    <button className="inline-flex items-center gap-3 text-white font-bold text-[13px] uppercase tracking-wider group/btn">
                      Schedule a Strategic Consultation 
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </CarouselItem>
            </AnimatePresence>
          </CarouselContent>
        </div>

        {/* Navigation Controls - Moved below cards */}
        <div className="hidden sm:flex items-center justify-end gap-2 pr-4 mt-0">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 border-neutral-200 hover:bg-black hover:text-white transition-all duration-300" />
          <CarouselNext className="static translate-y-0 h-10 w-10 border-neutral-200 hover:bg-black hover:text-white transition-all duration-300" />
        </div>
      </Carousel>

      {/* Responsive Floating Filter Bar */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-24px)] md:w-auto max-w-[95vw]"
          >
            {/* Desktop View: Pill Buttons */}
            <div className="hidden md:flex bg-white/70 backdrop-blur-xl border border-white/20 rounded-full p-1 shadow-[0_8px_32px_rgba(0,0,0,0.12)] items-center gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`
                    px-5 py-2 rounded-full text-[12px] font-bold transition-all duration-300 whitespace-nowrap min-h-[38px] flex items-center justify-center
                    ${activeFilter === cat 
                      ? 'bg-black text-white shadow-lg' 
                      : 'text-neutral-500 hover:text-black hover:bg-black/5'}
                  `}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            {/* Mobile View: Styled Select Dropdown */}
            <div className="flex md:hidden bg-white/70 backdrop-blur-xl border border-white/20 rounded-full h-[48px] px-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] items-center gap-3 relative min-w-[200px]">
              <Filter className="w-4 h-4 text-black shrink-0" />
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value as Category)}
                className="bg-transparent text-[13px] font-bold text-black appearance-none outline-none w-full pr-6 cursor-pointer"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Specialists" : cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-black absolute right-5 pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}
