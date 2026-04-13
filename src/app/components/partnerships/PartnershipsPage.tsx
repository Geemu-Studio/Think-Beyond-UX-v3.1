import { Header } from '../Header';
import { SocialProofBar } from '../SocialProofBar';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { PartnershipsProblemSection } from './PartnershipsProblemSection';
import { PartnershipsSolutionSection } from './PartnershipsSolutionSection';
import { PartnershipsCaseStudySection } from './PartnershipsCaseStudySection';
import { CTAFormSection } from '../CTAFormSection';

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PillarMergedHero 
          title="Elevate Institutional Innovation & Partnerships."
          description="Diversify institutional revenue through strategic corporate engagement. Transform knowledge exchange into a scalable, mission-driven innovation ecosystem."
          ctaText="Review Corporate Partnerships"
          defaultFilter="All"
        />
        <SocialProofBar />
        <PartnershipsProblemSection />
        <PartnershipsSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <PartnershipsCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated Corporate & Research Partnerships team."
          formTitle="Let's talk about your institutional corporate partnerships and innovation strategy."
          buttonText="Schedule a Strategic Review"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
