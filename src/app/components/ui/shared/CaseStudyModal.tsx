import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Quote, 
  CheckCircle2, 
  GraduationCap, 
  AlertCircle, 
  Lightbulb, 
  Target 
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '../dialog';
import { NavigationButtons } from './NavigationButtons';
import { ExpertFooterAccordion } from '../ExpertFooterAccordion';

interface CaseStudySection {
  icon: React.ReactNode;
  title: string;
  description?: string;
  subTitle?: string;
  items: string[];
}

interface CaseStudyContent {
  title: string;
  sections: CaseStudySection[];
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
  content?: CaseStudyContent;
}

interface CaseStudyData {
  university: string;
  initial: string;
  fullStory: FullStory;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: CaseStudyData;
  currentIndex: number;
  totalItems: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export function CaseStudyModal({
  isOpen,
  onOpenChange,
  data,
  currentIndex,
  totalItems,
  onPrev,
  onNext
}: CaseStudyModalProps) {
  const [isNearForm, setIsNearForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll state when modal opens or data changes
  useEffect(() => {
    if (isOpen) {
      setIsNearForm(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [isOpen, data]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-6xl sm:max-w-6xl w-full p-0 overflow-hidden bg-white rounded-[24px] sm:rounded-[32px] border-none shadow-2xl max-h-[90vh] flex flex-col"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col flex-1 min-h-0 relative overflow-hidden">
          
          {/* Close Button - Floats over specific z-index */}
          <DialogClose asChild>
            <motion.button
              initial={false}
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

          {/* Header */}
          <motion.div
            initial={false}
            animate={{
              height: isNearForm ? 0 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 80 : 112),
              opacity: isNearForm ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative shrink-0 bg-black flex items-center overflow-hidden z-[100]"
          >
            <div className="h-20 sm:h-28 flex items-center px-8 sm:px-12 w-full relative">
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">
                {data.initial}
              </div>

              <div className="relative z-10 w-full text-left">
                <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-0.5 block">
                  Case Study Success Story
                </span>
                <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                  {data.university}
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Scrollable Content */}
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
                paddingTop: isNearForm ? 40 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 32 : 48),
                paddingBottom: isNearForm ? 40 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 32 : 48)
              }}
              className="px-8 sm:px-12 flex flex-col gap-10"
            >
              {data.fullStory.isDetailed && data.fullStory.content ? (
                <div className="flex flex-col gap-10 text-left">
                  <header>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 leading-tight">
                      {data.fullStory.content.title}
                    </h3>
                  </header>

                  <div className="flex flex-col gap-12">
                    {data.fullStory.content.sections.map((section, sIdx) => (
                      <section key={sIdx} className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-1">
                          {section.icon}
                          <h4 className="font-bold text-lg text-black">{section.title}</h4>
                        </div>
                        {section.description && (
                          <p className="text-neutral-600 leading-relaxed mb-2">{section.description}</p>
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
                      "{data.fullStory.content.reference.text}"
                    </p>
                    <footer className="flex items-center gap-4 relative z-10">
                      <div className="h-px w-8 bg-neutral-200"></div>
                      <cite className="not-italic font-bold text-black text-sm">
                        {data.fullStory.content.reference.author}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ) : (
                <div className="flex flex-col gap-8 text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                      {data.fullStory.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      {data.fullStory.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.fullStory.impact?.map((item, i) => (
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

              <ExpertFooterAccordion />
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={false}
            animate={{
              height: isNearForm ? 0 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 76 : 88),
              opacity: isNearForm ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="shrink-0 bg-white border-t border-neutral-100 overflow-hidden z-[100]"
          >
            <div className="h-[76px] sm:h-[88px] px-8 py-6 sm:px-12 sm:py-8 flex justify-between items-center text-sm text-neutral-400 w-full">
              <span>Think Beyond &copy; 2026</span>
              <div className="flex items-center gap-6">
                <div className="font-bold text-black text-base">
                  {currentIndex + 1} / {totalItems}
                </div>
                {(onPrev || onNext) && (
                  <NavigationButtons
                    onPrev={onPrev}
                    onNext={onNext}
                    buttonClassName="border-neutral-200"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
