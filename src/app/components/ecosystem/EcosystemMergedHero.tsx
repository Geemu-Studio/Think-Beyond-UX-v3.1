import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '../ui/carousel';
import { ConsultationModal, type ModalExpert } from '../ConsultationModal';
import { useLocation } from 'react-router';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Zap,
  Phone, 
  Mail, 
  MessageCircle,
  Sparkles,
  ChevronDown,
  Filter,
  Globe,
  Users,
  CheckCircle
} from 'lucide-react';
import { ExpertTrace } from '../ui/shared/ExpertTrace';
import { PlaceholderPhoto } from '../ui/shared/PlaceholderPhoto';

// --- Utility Components ---
function CountUp({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
}


// --- Data Types & Mocking ---
type Category = "All" | "Education Cloud Architects" | "Recruitment & Engagement" | "Student Success" | "Data & Integration";

interface Expert {
  id: string;
  name: string;
  role: string;
  highlight: string;
  category: Category;
}

const EXPERTS: Expert[] = [
  { id: "1", name: "Marcin Pieńkowski", role: "Lead Education Cloud Architect", highlight: "8x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "2", name: "Dr. Eleanor Hayes", role: "Head of Unified System Strategy", highlight: "Legacy SIS/SITS Expertise", category: "Data & Integration" },
  { id: "3", name: "Tomasz Wróbel", role: "Student Success Consultant", highlight: "NSS Strategy Specialist", category: "Student Success" },
  { id: "4", name: "Sarah Jenkins", role: "Admissions Strategy Consultant", highlight: "Recruitment Optimisation Expert", category: "Recruitment & Engagement" },
  { id: "5", name: "David O'Connor", role: "Education Cloud Architect", highlight: "7x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "6", name: "Piotr Kowalski", role: "Student Journey Specialist", highlight: "HE Institutional Strategy", category: "Student Success" },
  { id: "7", name: "James Montgomery", role: "Student Engagement Strategist", highlight: "Retention Data Specialist", category: "Student Success" },
  { id: "8", name: "Aisha Khan", role: "Institutional Data Governance Lead", highlight: "UK HE Compliance Expert", category: "Data & Integration" },
  { id: "9", name: "Robert Smith", role: "Alumni Relations Architect", highlight: "Strategic Development Expert", category: "Recruitment & Engagement" },
  { id: "10", name: "Elena Rossi", role: "Academic Programme Design Lead", highlight: "Curriculum Transformation Expert", category: "Student Success" },
  { id: "11", name: "Oliver Brown", role: "Global Recruitment Strategist", highlight: "International Admissions Expert", category: "Recruitment & Engagement" },
  { id: "12", name: "Sophie Williams", role: "Technical Integration Engineer", highlight: "MuleSoft/SIS Specialist", category: "Data & Integration" },
  { id: "13", name: "Michael Chang", role: "Education Cloud Solution Lead", highlight: "6x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "14", name: "Hannah Taylor", role: "HE Business Analyst", highlight: "HE Process Audit Specialist", category: "Student Success" },
  { id: "15", name: "Adam Nowak", role: "Resilient Cloud Infrastructure Lead", highlight: "Strategic Hosting Expert", category: "Data & Integration" },
  { id: "16", name: "Charlotte Davies", role: "Transformation Change Management Lead", highlight: "Oxford Governance Expert", category: "Education Cloud Architects" },
  { id: "17", name: "Benjamin Lee", role: "Student Experience Strategist", highlight: "UK HE Digital Campus Expert", category: "Student Success" },
  { id: "18", name: "Maria Garcia", role: "Educational Data Scientist", highlight: "Predictive Analytics Lead", category: "Data & Integration" },
  { id: "19", name: "William Turner", role: "Institutional Strategy Consultant", highlight: "Former Vice-Chancellor Advisor", category: "Education Cloud Architects" },
  { id: "20", name: "Grace Evans", role: "Admissions & Recruitment Strategist", highlight: "Yield Optimisation Expert", category: "Recruitment & Engagement" }
];

const CATEGORIES: Category[] = [
  "All", 
  "Education Cloud Architects", 
  "Recruitment & Engagement", 
  "Student Success", 
  "Data & Integration"
];

const CATEGORY_LABELS: Record<Category, string> = {
  "All": "All",
  "Education Cloud Architects": "Architects",
  "Recruitment & Engagement": "Recruitment",
  "Student Success": "Student Success",
  "Data & Integration": "Integration"
};


// --- Main Component ---
export function EcosystemMergedHero() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<ModalExpert | undefined>();
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  // Visibility detection for the floating bar
  const isCarouselInView = useInView(carouselRef, { amount: 0.5 });

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

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedExpert(undefined);
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* 1. Hero Content (Standardized across pillars) */}
      <div className="pt-12 pb-6 md:pt-16 md:pb-8 px-3 lg:px-6 relative min-h-[500px] flex items-center justify-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6 md:gap-8 relative w-full z-20 mb-0">
          
          {/* Badge — standardized pill style */}
          <div className="hidden sm:inline-flex items-center gap-2 border border-neutral-300 px-4 py-1.5 rounded-full animate-in fade-in zoom-in duration-500">
            <span className="block w-2 h-2 rounded-full bg-black shrink-0" />
            <span className="text-[12px] text-neutral-600 tracking-[0.4px] uppercase font-medium">
              Salesforce Education Cloud · Certified Partner
            </span>
          </div>

          {/* Headline (Strategic B2B Messaging) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="leading-[1.13] tracking-[-1px] sm:tracking-[-2px] text-black text-[30px] sm:text-[44px] lg:text-[48px] animate-in slide-in-from-bottom-4 fade-in duration-500"
          >
            Your Strategic Partner for Salesforce Education Cloud
          </motion.h1>

          {/* Sub-headline & Expert Trace (Strategic B2B Copy) */}
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] sm:text-[18px] text-neutral-500 leading-[1.6] max-w-2xl font-normal animate-in slide-in-from-bottom-4 fade-in duration-700 px-4"
            >
              Eradicate data silos and reduce technical debt with a unified Institutional Architecture. We deliver seamless Tribal SITS integration and establish a robust Single Source of Truth (SSOT), ensuring strict HESA compliance across your digital infrastructure.
            </motion.p>
            <div className="animate-in slide-in-from-bottom-2 fade-in duration-1000 delay-300">
              <ExpertTrace />
            </div>
          </div>
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 relative z-20"
          >
            <button
              onClick={handleCTA}
              className="group inline-flex items-center justify-center bg-black text-white px-8 py-3.5 text-[14px] rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg font-bold cursor-pointer"
            >
              Schedule a Strategic Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Cards (Trust Bar) - Moved above experts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 mb-8"
      >
        {[
          { icon: <Globe className="w-5 h-5 text-slate-500" />, text: "Europe's Largest Practice" },
          { icon: <Users className="w-5 h-5 text-slate-500" />, text: "20+ Certified Consultants" },
          { icon: <CheckCircle className="w-5 h-5 text-slate-500" />, text: "Official Salesforce Partner" }
        ].map((card, idx) => (
          <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-3 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]">
            {card.icon}
            <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
              {card.text}
            </span>
          </div>
        ))}
      </motion.div>

      {/* 2. Carousel Overlay (High Overlap to meet 50% visibility goal) */}
      <div ref={carouselRef} className="relative z-10 px-3 lg:px-6 pb-24">
        <div className="-mt-12 transition-all">
          <Carousel setApi={setApi} opts={{ align: 'start', dragFree: true, containScroll: 'trimSnaps' }} className="w-full">
            <div ref={wheelRef} className="pl-3 lg:pl-[max(theme(spacing.6),calc((100vw-80rem)/2+1.5rem))]">
              <CarouselContent className="-ml-8 pt-16 pb-6 px-8">
                <AnimatePresence mode="popLayout">
                  {filteredExperts.map((expert, idx) => (
                    <CarouselItem key={expert.id} className="pl-8 basis-[372px] shrink-0">
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.015, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-white border border-slate-200 rounded-[28px] p-3 transition-all duration-500 cursor-grab h-[480px] w-[340px] flex flex-col relative z-0 hover:z-10 shadow-none hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                      >
                        {/* Photo Placeholder */}
                        <PlaceholderPhoto 
                          className="h-[250px] w-full rounded-[20px]"
                        />

                        <div className="px-5 py-4 flex flex-col flex-1 min-h-0 text-left overflow-visible">
                          <h3 className="text-xl text-slate-900 font-bold tracking-tight mb-1 whitespace-normal break-words leading-[1.2]">
                            {expert.name}
                          </h3>
                          {/* Role with Min-height for consistency */}
                          <div className="min-h-[3rem] mb-4">
                            <p className="text-[14px] text-slate-600 font-medium line-clamp-2 leading-tight whitespace-normal break-words">
                              {expert.role}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <a 
                              href="https://wa.me/48502227174"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300" 
                              title={`Message ${expert.name.split(' ')[0]} on WhatsApp`}
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>
                            <button 
                              onClick={() => {
                                setSelectedExpert({ name: expert.name, role: expert.role });
                                setIsModalOpen(true);
                              }}
                              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300" 
                              title={`Send message to ${expert.name.split(' ')[0]}`}
                            >
                              <Mail className="w-4 h-4" />
                            </button>
                            <a 
                              href="tel:+48502227174"
                              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300" 
                              title={`Call ${expert.name.split(' ')[0]}`}
                            >
                              <Phone className="w-4 h-4" />
                            </a>
                          </div>

                          <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2.5 mt-auto">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[1.5px] whitespace-normal break-words leading-tight">
                              {expert.highlight}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}


                  <CarouselItem className="pl-6 basis-[364px] shrink-0">
                    <motion.div
                      layout={{ duration: 0.15 }}
                      onClick={() => {
                        setSelectedExpert(undefined);
                        setIsModalOpen(true);
                      }}
                      className="bg-slate-900 rounded-[28px] p-10 flex flex-col justify-between h-[480px] w-[340px] cursor-pointer group overflow-hidden relative shadow-2xl"
                    >
                      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[60px]" />
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10"><Sparkles className="w-6 h-6" /></div>
                      <div className="text-left relative z-10">
                        <span className="text-white/40 text-[10px] uppercase tracking-[4px] font-black mb-3 block">Resilient Architecture Expert • Digital Transformation</span>
                        <h3 className="text-2xl text-white font-bold leading-tight mb-8 whitespace-normal break-words">Ready to unify your digital infrastructure?</h3>
                        <button className="inline-flex items-center gap-4 text-white font-bold text-[13px] uppercase tracking-[2px] group/btn bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all">
                          Schedule Strategy <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  </CarouselItem>
                </AnimatePresence>
              </CarouselContent>
            </div>

            <div className="mx-auto max-w-7xl px-3 lg:px-6 mt-0 hidden sm:flex justify-end gap-5">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white" />
              <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Floating Filter Bar */}
      <AnimatePresence>
        {isCarouselInView && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-8 left-1/2 z-50 w-[calc(100%-24px)] md:w-auto max-w-[95vw]"
          >
            <div className="hidden md:flex bg-white/90 backdrop-blur-2xl border border-slate-200/50 rounded-full p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] items-center gap-1.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-[12px] font-bold transition-all duration-300 whitespace-nowrap ${activeFilter === cat ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
            {/* Mobile View */}
            <div className="flex md:hidden bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-full h-[54px] px-6 items-center gap-4 relative min-w-[240px]">
              <Filter className="w-4 h-4 text-slate-900 shrink-0" />
              <select value={activeFilter} onChange={(e) => setActiveFilter(e.target.value as Category)} className="bg-transparent text-[14px] font-bold text-slate-900 appearance-none outline-none w-full pr-8">
                {CATEGORIES.map(cat => (<option key={cat} value={cat}>{cat === "All" ? "All Specialists" : cat}</option>))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-900 absolute right-6" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname} 
        expert={selectedExpert}
      />
    </section>
  );
}
