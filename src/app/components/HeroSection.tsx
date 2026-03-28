import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from './ConsultationModal';

const slides = [
  {
    badge: "Salesforce Education Cloud · Certified Partner",
    h1: "Empowering your academic community. Redefining the student journey from first enquiry to proud alumnus.",
    p: "Move beyond administrative constraints. Build a connected, purpose-driven campus with Salesforce Education Cloud — unifying every touchpoint across the student lifecycle into one seamless, intelligent ecosystem.",
    cta: "Begin Your Transformation →",
    micro: "Trusted by universities across the UK and Central Europe."
  },
  {
    badge: "Ethical AI for Higher Education · Powered by Agentforce",
    h1: "Academic heritage deserves a modern foundation. Lead with intelligence, guided by purpose.",
    p: "From elite postgraduate programmes to expansive online learning communities — build truly data-informed experiences. Elevate recruitment outcomes, empower your staff with AI, and cultivate the belonging that keeps students thriving throughout their academic journey.",
    cta: "Arrange a Strategic Consultation →",
    micro: "Built on verified case studies from leading universities."
  },
  {
    badge: "A 360° Partnership for Your Institution",
    h1: "Every student deserves a university that walks beside them. Build relationships that endure beyond graduation.",
    p: "A unified student view is the cornerstone of belonging. Deploy self-service portals, 24/7 AI-powered support, and connect your Admissions, Student Services, and Careers teams in one compassionate, responsive Salesforce environment.",
    cta: "Discover Your Opportunity →",
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
    <section className="bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-6 min-h-[600px] flex items-center justify-center relative overflow-hidden">
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

        {/* Sub-headline */}
        <p
          key={`p-${activeIndex}`}
          className="text-[15px] sm:text-[18px] text-neutral-500 leading-[1.6] max-w-2xl animate-in slide-in-from-bottom-4 fade-in duration-700"
          style={{ fontWeight: 400 }}
        >
          {currentSlide.p}
        </p>

        {/* CTA */}
        <a
          key={`cta-${activeIndex}`}
          href="#contact-form"
          onClick={handleCTA}
          className="mt-1 w-full sm:w-auto inline-flex items-center justify-center bg-black text-white px-8 py-4 text-[15px] transition-colors hover:bg-neutral-800 rounded-full animate-in slide-in-from-bottom-4 fade-in duration-700"
          style={{ fontWeight: 600 }}
        >
          {currentSlide.cta}
        </a>

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