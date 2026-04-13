import { Header } from '../Header';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { ProblemSection } from '../ProblemSection';
import { SolutionSection } from '../SolutionSection';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { Footer } from '../Footer';

import { EcosystemCaseStudyCarousel } from './EcosystemCaseStudyCarousel';
import { ManagedServicesBridge } from './ManagedServicesBridge';
import { EcosystemGlobalCTA } from './EcosystemGlobalCTA';

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
        <ManagedServicesBridge />
        <CalculatorSection />
        <SecurityTrustSection />
        <EcosystemGlobalCTA />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
