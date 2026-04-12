import { Header } from '../Header';
import { SocialProofBar } from '../SocialProofBar';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { EnterpriseProblemSection } from './EnterpriseProblemSection';
import { EnterpriseSolutionSection } from './EnterpriseSolutionSection';
import { EnterpriseCaseStudySection } from './EnterpriseCaseStudySection';
import { CTAFormSection } from '../CTAFormSection';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PillarMergedHero 
          title="Elevate Institutional Innovation & Partnerships."
          description="Diversify institutional revenue through strategic corporate engagement. Transform knowledge exchange into a scalable, mission-driven innovation ecosystem."
          ctaText="Review Enterprise Strategy"
          defaultFilter="All"
        />
        <SocialProofBar />
        <EnterpriseProblemSection />
        <EnterpriseSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <EnterpriseCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated Enterprise & Research Partnerships team."
          formTitle="Let's talk about your institutional enterprise and innovation strategy."
          buttonText="Schedule a Strategic Review"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
