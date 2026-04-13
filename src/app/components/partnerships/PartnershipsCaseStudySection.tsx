import { CaseStudyCarousel } from '../ui/CaseStudyCarousel';

export function PartnershipsCaseStudySection() {
  return (
    <section id="case-study" className="bg-neutral-50 py-24 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        
        {/* Section Headings */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Innovation Stories
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[40px] leading-[1.15] tracking-[-1.4px] text-black">
            Enterprise & Research Transformation
          </h2>
          <p className="mt-4 text-neutral-500 text-[15px] leading-[1.6]">
            Discover how institutions are scaling their commercial impact and streamlining corporate engagement through the Salesforce Education Cloud ecosystem.
          </p>
        </div>

        {/* Standardized Interactive Carousel */}
        <CaseStudyCarousel initialActiveIdx={2} />

      </div>
    </section>
  );
}
