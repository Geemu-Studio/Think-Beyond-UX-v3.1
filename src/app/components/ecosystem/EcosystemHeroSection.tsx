import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ConsultationModal } from '../ConsultationModal';
import { ExpertTrace } from '../ui/shared/ExpertTrace';
import { ShieldCheck, Award, Zap } from 'lucide-react';

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

export function EcosystemHeroSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 px-3 lg:px-6 min-h-[700px] flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="mx-auto max-w-5xl flex flex-col items-center text-center gap-8 sm:gap-10 relative w-full z-10 transition-opacity duration-500">
        
        {/* Partner Badges & Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-5 py-2.5 rounded-2xl shadow-sm"
          >
            <ShieldCheck className="w-5 h-5 text-black" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Status</span>
              <span className="text-[13px] text-black font-bold">Official Salesforce Partner</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-5 py-2.5 rounded-2xl shadow-sm"
          >
            <Award className="w-5 h-5 text-black" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Scale</span>
              <span className="text-[13px] text-black font-bold">
                <CountUp value={20} suffix="+" /> Certified Consultants
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 px-5 py-2.5 rounded-2xl shadow-sm"
          >
            <Zap className="w-5 h-5 text-black" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Ranking</span>
              <span className="text-[13px] text-black font-bold">Largest EU Practice</span>
            </div>
          </motion.div>
        </div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="leading-[1.1] tracking-[-1.5px] sm:tracking-[-3px] text-black text-[36px] sm:text-[56px] lg:text-[72px] font-medium max-w-4xl"
        >
          Your Strategic Partner for Salesforce Education Cloud
        </motion.h1>

        {/* Sub-headline & Expert Trace */}
        <div className="flex flex-col items-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[16px] sm:text-[20px] text-neutral-500 leading-[1.6] max-w-3xl font-normal"
          >
            Eradicate data silos and reduce technical debt with a unified Institutional Architecture. We deliver seamless Tribal SITS integration and establish a robust Single Source of Truth (SSOT), ensuring strict HESA compliance across your digital infrastructure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <ExpertTrace />
            <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold">Led by Industry Experts</span>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4"
        >
          <button
            onClick={handleCTA}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-black text-white px-10 py-5 text-[16px] rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Schedule a Strategic Consultation
          </button>
        </motion.div>

        {/* Trust signal / Social Proof Bar Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-12 mt-4 border-t border-neutral-100"
        >
          <span className="text-[12px] text-neutral-400 font-medium">Europe's Largest Education Cloud Practice</span>
          <div className="w-1 h-1 rounded-full bg-neutral-200 hidden sm:block" />
          <span className="text-[12px] text-neutral-400 font-medium">20+ Certified Consultants</span>
          <div className="w-1 h-1 rounded-full bg-neutral-200 hidden sm:block" />
          <span className="text-[12px] text-neutral-400 font-medium">Official Salesforce Partner</span>
        </motion.div>

      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}
