import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CalculatorSection } from './components/CalculatorSection';
import { SecurityTrustSection } from './components/SecurityTrustSection';
import { CaseStudySection } from './components/CaseStudySection';
import { CTAFormSection } from './components/CTAFormSection';
import { OfferBridgeSection } from './components/OfferBridgeSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <SolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <CaseStudySection />
        <CTAFormSection />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
