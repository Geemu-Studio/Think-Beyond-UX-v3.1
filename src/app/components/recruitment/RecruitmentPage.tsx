import { Header } from '../Header';
import { SocialProofBar } from '../SocialProofBar';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { RecruitmentHeroSection } from './RecruitmentHeroSection';
import { RecruitmentProblemSection } from './RecruitmentProblemSection';
import { RecruitmentSolutionSection } from './RecruitmentSolutionSection';
import { RecruitmentCaseStudySection } from './RecruitmentCaseStudySection';
import { RecruitmentCTAFormSection } from './RecruitmentCTAFormSection';

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <RecruitmentHeroSection />
        <SocialProofBar />
        <RecruitmentProblemSection />
        <RecruitmentSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <RecruitmentCaseStudySection />
        <OfferBridgeSection />
        <RecruitmentCTAFormSection />
      </main>
      <Footer />
    </div>
  );
}
