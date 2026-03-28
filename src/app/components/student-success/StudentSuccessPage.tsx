import { Header } from '../Header';
import { StudentSuccessHeroSection } from './StudentSuccessHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { StudentSuccessProblemSection } from './StudentSuccessProblemSection';
import { CalculatorSection } from '../CalculatorSection';
import { StudentSuccessSolutionSection } from './StudentSuccessSolutionSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { StudentSuccessCaseStudySection } from './StudentSuccessCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { StudentSuccessCTAFormSection } from './StudentSuccessCTAFormSection';
import { Footer } from '../Footer';

export function StudentSuccessPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <StudentSuccessHeroSection />
        <SocialProofBar />
        <StudentSuccessProblemSection />
        <StudentSuccessSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <StudentSuccessCaseStudySection />
        <OfferBridgeSection />
        <StudentSuccessCTAFormSection />
      </main>
      <Footer />
    </div>
  );
}
