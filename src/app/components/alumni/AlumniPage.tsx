import { Header } from '../Header';
import { AlumniHeroSection } from './AlumniHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { AlumniProblemSection } from './AlumniProblemSection';
import { AlumniSolutionSection } from './AlumniSolutionSection';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { AlumniCaseStudySection } from './AlumniCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { AlumniCTAFormSection } from './AlumniCTAFormSection';
import { Footer } from '../Footer';

export default function AlumniPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <AlumniHeroSection />
        <SocialProofBar />
        <AlumniProblemSection />
        <AlumniSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <AlumniCaseStudySection />
        <AlumniCTAFormSection />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
