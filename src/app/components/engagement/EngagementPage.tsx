import { Header } from '../Header';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { SocialProofBar } from '../SocialProofBar';
import { EngagementProblemSection } from './EngagementProblemSection';
import { CalculatorSection } from '../CalculatorSection';
import { EngagementSolutionSection } from './EngagementSolutionSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { EngagementCaseStudySection } from './EngagementCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
import { Footer } from '../Footer';

export function EngagementPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <PillarMergedHero 
          title="Connect with purpose. Deliver the right message to every future world changer."
          description="Cut through the noise. Leverage Salesforce Education Cloud to orchestrate highly personalised, omnichannel journeys that build lifelong institutional loyalty."
          ctaText="Elevate Your Engagement"
          defaultFilter="All"
        />
        <SocialProofBar />
        <EngagementProblemSection />
        <EngagementSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <EngagementCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated university marketing and communications team."
          formTitle="Let's talk about your university's marketing and communications strategy."
          buttonText="Request a Engagement Consultation"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}

export default EngagementPage;
