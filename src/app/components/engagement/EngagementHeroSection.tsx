import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';
import { ExpertTrace } from '../ui/shared/ExpertTrace';

const slides = [
  {
    badge: "Salesforce Education Cloud · Certified Partner",
    h1: "Connect with purpose. Deliver the right message to every future world changer.",
    p: "Cut through the noise. Leverage Salesforce Education Cloud to orchestrate highly personalised, omnichannel journeys that build lifelong institutional loyalty.",
    cta: "Elevate Your Engagement →",
    micro: "Trusted by universities across the UK and Central Europe."
  }
];

export function EngagementHeroSection() {
  const location = useLocation();
  const [activeIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-3 lg:px-6 min-h-[600px] flex items-center justify-center relative overflow-hidden">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-4 sm:gap-6 relative w-full z-10 transition-opacity duration-500">


        {/* Badge — hidden on very small screens to save fold space */}
        <div className="hidden sm:inline-flex items-center gap-2 border border-neutral-300 px-4 py-1.5 rounded-full animate-in fade-in zoom-in duration-500">
          <span className="block w-2 h-2 rounded-full bg-black shrink-0" />
          <span
            className="text-[12px] text-neutral-600 tracking-[0.4px] uppercase"
            style={{ fontWeight: 500 }}
          >
            {currentSlide.badge}
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="leading-[1.13] tracking-[-1px] sm:tracking-[-2px] text-black text-[30px] sm:text-[44px] lg:text-[48px] animate-in slide-in-from-bottom-4 fade-in duration-500">
          {currentSlide.h1}
        </h1>

        {/* Sub-headline & Expert Trace */}
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-[15px] sm:text-[18px] text-neutral-500 leading-[1.6] max-w-2xl animate-in slide-in-from-bottom-4 fade-in duration-700"
            style={{ fontWeight: 400 }}
          >
            {currentSlide.p}
          </p>
          <div className="animate-in slide-in-from-bottom-2 fade-in duration-1000 delay-300">
            <ExpertTrace />
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact-form"
          onClick={handleCTA}
          className="mt-2 w-full sm:w-auto inline-flex items-center justify-center bg-black text-white px-8 py-4 text-[15px] rounded-full hover:bg-neutral-800 transition-colors cursor-pointer animate-in slide-in-from-bottom-4 fade-in duration-700"
          style={{ fontWeight: 600 }}
        >
          {currentSlide.cta}
        </a>

        {/* Trust signal */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <p className="text-[12px] sm:text-[13px] text-neutral-400 m-0 animate-in fade-in duration-1000">
            {currentSlide.micro}
          </p>
        </div>

      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}
