import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from './ConsultationModal';
import { ExpertTrace } from './ui/shared/ExpertTrace';

const slides = [
  {
    badge: "Salesforce Education Cloud · Certified Partner",
    h1: "Institutional strategy for your academic community. Redefining the student journey from first enquiry to proud alumnus.",
    p: "Move beyond administrative constraints. Build a connected, purpose-driven campus with Salesforce Education Cloud — unifying every touchpoint across the academic lifecycle into one seamless, intelligent ecosystem.",
    cta: "Initiate Institutional Evolution →",
    micro: "Trusted by universities across the UK and Central Europe."
  },
  {
    badge: "Salesforce Education Cloud · Certified Partner",
    h1: "Academic heritage deserves a modern foundation. Lead with intelligence, guided by purpose.",
    p: "From elite postgraduate programmes to expansive online learning communities — build truly evidence-led academic experiences. Elevate recruitment outcomes, empower your staff with Agentforce, and cultivate the belonging that secures academic flourishing.",
    cta: "Request Strategy Review →",
    micro: "Built on verified case studies from leading universities."
  },
  {
    badge: "Salesforce Education Cloud · Certified Partner",
    h1: "Every student deserves a university that walks beside them. Build relationships that endure beyond graduation.",
    p: "A unified view is the cornerstone of institutional belonging. Deploy self-service portals, 24/7 AI-powered enablement, and connect your Admissions, Student Services, and Careers teams in one compassionate, responsive environment.",
    cta: "Explore Institutional Legacy →",
    micro: "No commitment required · We respond within 24 hours."
  }
];

export function HeroSection() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="bg-white pt-6 pb-8 md:pt-8 md:pb-16 px-3 lg:px-6 min-h-[550px] flex items-center justify-center relative overflow-hidden">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-4 sm:gap-6 relative w-full z-10 transition-opacity duration-500">


        {/* Badge — hidden on very small screens to save fold space */}
        <div
          key={`badge-${activeIndex}`}
          className="hidden sm:inline-flex items-center gap-2 border border-neutral-300 px-4 py-1.5 rounded-full animate-in fade-in zoom-in duration-500"
        >
          <span className="block w-2 h-2 rounded-full bg-black shrink-0" />
          <span
            className="text-[12px] text-neutral-600 tracking-[0.4px] uppercase"
            style={{ fontWeight: 500 }}
          >
            {currentSlide.badge}
          </span>
        </div>
        
        {/* Headline */}
        <h1
          key={`h1-${activeIndex}`}
          className="leading-[1.13] tracking-[-1px] sm:tracking-[-2px] text-black text-[30px] sm:text-[44px] lg:text-[48px] animate-in slide-in-from-bottom-4 fade-in duration-500"
        >
          {currentSlide.h1}
        </h1>

        {/* Sub-headline & Expert Trace */}
        <div className="flex flex-col items-center gap-2">
          <p
            key={`p-${activeIndex}`}
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
        <button
          key={`cta-${activeIndex}`}
          onClick={() => setIsModalOpen(true)}
          className="mt-1 w-full sm:w-auto inline-flex items-center justify-center bg-black text-white px-8 py-4 text-[15px] rounded-full hover:bg-neutral-800 transition-colors cursor-pointer animate-in slide-in-from-bottom-4 fade-in duration-700 min-h-12"
          style={{ fontWeight: 600 }}
        >
          {currentSlide.cta}
        </button>

        {/* Trust signal */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <p key={`micro-${activeIndex}`} className="text-[12px] sm:text-[13px] text-neutral-400 m-0 animate-in fade-in duration-1000">
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