import { Header } from '../Header';
import { SocialProofBar } from '../SocialProofBar';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { EnterpriseHeroSection } from './EnterpriseHeroSection';
import { EnterpriseProblemSection } from './EnterpriseProblemSection';
import { EnterpriseSolutionSection } from './EnterpriseSolutionSection';
import { EnterpriseCaseStudySection } from './EnterpriseCaseStudySection';
import { CTAFormSection } from '../CTAFormSection';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <EnterpriseHeroSection />
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
