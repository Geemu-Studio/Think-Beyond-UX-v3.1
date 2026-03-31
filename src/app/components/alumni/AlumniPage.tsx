import { Header } from '../Header';
import { AlumniHeroSection } from './AlumniHeroSection';
import { SocialProofBar } from '../SocialProofBar';
import { AlumniProblemSection } from './AlumniProblemSection';
import { AlumniSolutionSection } from './AlumniSolutionSection';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { AlumniCaseStudySection } from './AlumniCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
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
        <CTAFormSection 
          title="About us: Your dedicated alumni relations and advancement team."
          formTitle="Let's talk about alumni engagement and lifelong learning at your institution."
          buttonText="Request an Alumni Strategy Call"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
