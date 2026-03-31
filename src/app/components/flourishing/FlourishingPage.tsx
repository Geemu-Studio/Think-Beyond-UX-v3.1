import { Header } from '../Header';
import { FlourishingHeroSection } from './FlourishingHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { FlourishingProblemSection } from './FlourishingProblemSection';
import { CalculatorSection } from '../CalculatorSection';
import { FlourishingSolutionSection } from './FlourishingSolutionSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { FlourishingCaseStudySection } from './FlourishingCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
import { Footer } from '../Footer';

export function FlourishingPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <FlourishingHeroSection />
        <SocialProofBar />
        <FlourishingProblemSection />
        <FlourishingSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <FlourishingCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated student success and retention team."
          formTitle="Let's talk about student success and retention at your institution."
          buttonText="Schedule a Strategic Review"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
