import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '../../ui/carousel';
import { ConsultationModal } from '../../ConsultationModal';
import { useLocation } from 'react-router';
import {
  ArrowRight,
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
import { ExpertTrace } from './ExpertTrace';
import { EXPERTS, CATEGORIES, CATEGORY_LABELS, type Category } from '../../../data/experts';

interface PillarMergedHeroProps {
  title: string;
  description: string;
  badgeText?: string;
  ctaText?: string;
  defaultFilter?: Category;
  showExperts?: boolean;
}

export function PillarMergedHero({
  title,
  description,
  badgeText = "Salesforce Education Cloud · Certified Partner",
  ctaText = "Schedule a Strategic Consultation",
  defaultFilter = "All",
  showExperts = false
}: PillarMergedHeroProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeFilter, setActiveFilter] = useState<Category>(defaultFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

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
    setIsModalOpen(true);
  };

  return (
    <section className="relative bg-white overflow-hidden text-left">
      {/* 1. Hero Content (Standardized across pillars) */}
      <div className="pt-12 pb-6 md:pt-16 md:pb-8 px-3 lg:px-6 relative min-h-[500px] flex items-center justify-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-[18px] relative w-full z-20 mb-0">

          {/* Badge — standardized pill style */}
          <div className="hidden sm:inline-flex items-center gap-2 border border-neutral-300 px-4 py-1.5 rounded-full animate-in fade-in zoom-in duration-500">
            <span className="block w-2 h-2 rounded-full bg-black shrink-0" />
            <span className="text-[12px] text-neutral-600 tracking-[0.4px] uppercase font-medium">
              {badgeText}
            </span>
          </div>

          {/* Headline (Standardized typography and spacing) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="leading-[1.13] tracking-[-1px] sm:tracking-[-2px] text-black text-[30px] sm:text-[44px] lg:text-[48px] animate-in slide-in-from-bottom-4 fade-in duration-500"
          >
            {title}
          </motion.h1>

          {/* Sub-headline & Expert Trace (Standardized) */}
          <div className="flex flex-col items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] sm:text-[18px] text-neutral-500 leading-[1.6] max-w-2xl font-normal animate-in slide-in-from-bottom-4 fade-in duration-700 px-4"
            >
              {description}
            </motion.p>
            <div className="animate-in slide-in-from-bottom-2 fade-in duration-1000 delay-300">
              <ExpertTrace />
            </div>
          </div>


          {/* CTA (Standardized UI button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-20 mb-10"
          >
            <button
              onClick={handleCTA}
              className="group inline-flex items-center justify-center bg-black text-white px-8 py-3.5 text-[14px] rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg font-bold cursor-pointer"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {showExperts && (
        <>
          {/* Social Proof Cards (Trust Bar) - Moved above experts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 mb-16"
          >
            {[
              { icon: <Globe className="w-5 h-5 text-slate-500" />, text: "Europe's Largest Practice" },
              { icon: <Users className="w-5 h-5 text-slate-500" />, text: "20+ Certified Consultants" },
              { icon: <CheckCircle className="w-5 h-5 text-slate-500" />, text: "Official Salesforce Partner" }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-3 flex items-center gap-3 w-full sm:w-auto min-w-[200px]">
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
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white border border-slate-200 rounded-[28px] p-3 transition-all duration-500 cursor-grab h-[480px] w-[340px] flex flex-col relative z-0 hover:z-10 shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)]"
                          >
                            {/* Photo Placeholder */}
                            <div className="relative h-[250px] w-full overflow-hidden rounded-[20px] bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                              <span className="text-[11px] text-slate-300 font-black tracking-[0.5em] uppercase">PHOTO</span>
                            </div>

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

                              <div className="flex items-center gap-2.5 mb-4">
                                <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-black transition-colors"><MessageCircle className="w-4 h-4" /></button>
                                <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-black transition-colors"><Mail className="w-4 h-4" /></button>
                                <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-black transition-colors"><Phone className="w-4 h-4" /></button>
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
                        onClick={() => setIsModalOpen(true)}
                        className="bg-slate-900 rounded-[28px] p-10 flex flex-col justify-between h-[480px] w-[340px] cursor-pointer group overflow-hidden relative shadow-2xl"
                      >
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[60px]" />
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10"><Sparkles className="w-6 h-6" /></div>
                        <div className="text-left relative z-10">
                          <span className="text-white/40 text-[10px] uppercase tracking-[4px] font-black mb-3 block">Student Conversion Expert • Institutional Growth</span>
                          <h3 className="text-2xl text-white font-bold leading-tight mb-8 whitespace-normal break-words">Ready to foster student belonging?</h3>
                          <button className="inline-flex items-center gap-4 text-white font-bold text-[13px] uppercase tracking-[2px] group/btn bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all">
                            Schedule Strategy <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    </CarouselItem>
                    </AnimatePresence>
                  </CarouselContent>
                </div>

                <div className="mx-auto max-w-7xl px-3 lg:px-6 mt-0 flex justify-end gap-5">
                  <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm" />
                  <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border border-slate-200 bg-white shadow-sm" />
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
                className="fixed bottom-8 left-1/2 z-50 w-auto max-w-[95vw]"
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
        </>
      )}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pathname={location.pathname} />
    </section>
  );
}
