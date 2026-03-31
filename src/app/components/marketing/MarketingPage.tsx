import { Header } from '../Header';
import { MarketingHeroSection } from './MarketingHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { MarketingProblemSection } from './MarketingProblemSection';
import { CalculatorSection } from '../CalculatorSection';
import { MarketingSolutionSection } from './MarketingSolutionSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { MarketingCaseStudySection } from './MarketingCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
import { Footer } from '../Footer';

export function MarketingPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <MarketingHeroSection />
        <SocialProofBar />
        <MarketingProblemSection />
        <MarketingSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <MarketingCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated university marketing and communications team."
          formTitle="Let's talk about your university's marketing and communications strategy."
          buttonText="Request a Marketing Consultation"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}

export default MarketingPage;
