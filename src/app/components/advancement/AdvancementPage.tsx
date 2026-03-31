import { Header } from '../Header';
import { AdvancementHeroSection } from './AdvancementHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { AdvancementProblemSection } from './AdvancementProblemSection';
import { AdvancementSolutionSection } from './AdvancementSolutionSection';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { AdvancementCaseStudySection } from './AdvancementCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
import { Footer } from '../Footer';

export default function AdvancementPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <AdvancementHeroSection />
        <SocialProofBar />
        <AdvancementProblemSection />
        <AdvancementSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <AdvancementCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated alumni relations and advancement team."
          formTitle="Let's talk about alumni engagement and lifelong learning at your institution."
          buttonText="Request an Advancement Strategy Call"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
