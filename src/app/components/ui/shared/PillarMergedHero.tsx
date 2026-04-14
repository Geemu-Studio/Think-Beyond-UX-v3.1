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
import { ConsultationModal, type ModalExpert } from '../../ConsultationModal';
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
import { NavigationButtons } from '../shared/NavigationButtons';
import { PlaceholderPhoto } from '../shared/PlaceholderPhoto';

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
  const [selectedExpert, setSelectedExpert] = useState<Expert | undefined>();
  const location = useLocation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    api.on('select', updateScrollState);
    api.on('reInit', updateScrollState);
    updateScrollState();
    return () => {
      api.off('select', updateScrollState);
      api.off('reInit', updateScrollState);
    };
  }, [api]);

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
              { icon: <Globe className="w-5 h-5 text-slate-500" />, text: "Europe's Largest Education Cloud Practice" },
              { icon: <Users className="w-5 h-5 text-slate-500" />, text: "20+ Certified Architects" },
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
          <div ref={carouselRef} className="relative z-10 px-3 lg:px-6 pb-16">
            <div className="-mt-12 transition-all">
              <Carousel setApi={setApi} opts={{ align: 'start', dragFree: true, containScroll: 'trimSnaps' }} className="w-full">
                <div ref={wheelRef} className="pl-3 lg:pl-[max(theme(spacing.6),calc((100vw-80rem)/2+1.5rem))]">
                  <CarouselContent className="-ml-4 pt-8 pb-3 px-4">
                    <AnimatePresence mode="popLayout">
                      {filteredExperts.map((expert, idx) => (
                        <CarouselItem key={expert.id} className="pl-4 basis-[356px] shrink-0">
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            whileHover={{ scale: 1.015, transition: { duration: 0.1 } }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setSelectedExpert(expert);
                              setIsModalOpen(true);
                            }}
                            className="group bg-white border border-slate-200 rounded-[28px] p-1.5 transition-all duration-500 cursor-pointer h-[384px] w-[340px] flex flex-col relative z-0 hover:z-10 shadow-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                          >
                            {/* Photo Placeholder */}
                            <PlaceholderPhoto 
                              className="h-[200px] w-full rounded-[20px]"
                            />

                            <div className="px-5 py-4 flex flex-col flex-1 min-h-0 text-left overflow-visible">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <h3 className="text-[19px] text-slate-900 font-bold tracking-tight line-clamp-1 leading-[1.2]">
                                  {expert.name}
                                </h3>
                                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shrink-0">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                              
                              <p className="text-[13px] text-slate-500 font-medium line-clamp-2 leading-tight mb-4">
                                {expert.role}
                              </p>

                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {expert.skills.slice(0, 2).map((skill, sIdx) => (
                                  <span key={sIdx} className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 mt-auto">
                                <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                                <span className="text-[10px] text-black font-bold uppercase tracking-[1px]">
                                  {expert.highlight}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}


                    <CarouselItem className="pl-3 basis-[353px] shrink-0">
                      <motion.div
                        layout={{ duration: 0.15 }}
                        onClick={() => {
                          setSelectedExpert(undefined);
                          setIsModalOpen(true);
                        }}
                        className="bg-slate-900 rounded-[28px] p-5 flex flex-col justify-between h-[384px] w-[340px] cursor-pointer group overflow-hidden relative shadow-2xl"
                      >
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[60px]" />
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10"><Sparkles className="w-6 h-6" /></div>
                        <div className="text-left relative z-10">
                          <span className="text-white/40 text-[10px] uppercase tracking-[4px] font-black mb-3 block">Resilient Architecture Expert • Digital Transformation</span>
                          <h3 className="text-2xl text-white font-bold leading-tight mb-8 whitespace-normal break-words">Ready to unify your digital infrastructure?</h3>
                          <button className="inline-flex items-center gap-4 text-white font-bold text-[13px] uppercase tracking-[2px] group/btn bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all">
                            Schedule an Architectural Review <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    </CarouselItem>
                    </AnimatePresence>
                  </CarouselContent>
                </div>

                <NavigationButtons
                  onPrev={() => api?.scrollPrev()}
                  onNext={() => api?.scrollNext()}
                  disabledPrev={!canScrollPrev}
                  disabledNext={!canScrollNext}
                  className="mx-auto max-w-7xl px-3 lg:px-6 mt-0 hidden sm:flex justify-end"
                />
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
        </>
      )}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname} 
        expert={selectedExpert}
      />
    </section>
  );
}
