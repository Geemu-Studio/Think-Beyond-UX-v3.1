import { Header } from '../Header';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { ProblemSection } from '../ProblemSection';
import { SolutionSection } from '../SolutionSection';
import { CaseStudySection } from '../CaseStudySection';
import { CTAFormSection } from '../CTAFormSection';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';

import { EcosystemCaseStudyCarousel } from './EcosystemCaseStudyCarousel';

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PillarMergedHero 
          title="Your Strategic Partner for Salesforce Education Cloud"
          description="Stalled by IT constraints? Unlock your digital ecosystem with Think Beyond—Europe's largest Education Cloud practice."
          ctaText="Schedule a Strategic Consultation"
          defaultFilter="All"
          showExperts={true}
        />
        <EcosystemCaseStudyCarousel />
        <ProblemSection />
        <SolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <CaseStudySection />
        <CTAFormSection 
          title="Architecting the Future of Your Institution."
          formTitle="Ready to unify your ecosystem and drive student success?"
          buttonText="Request Your Strategic Audit"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}

