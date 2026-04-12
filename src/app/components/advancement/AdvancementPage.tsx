import { Header } from '../Header';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
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
        <PillarMergedHero 
          title="Cultivate lasting relationships. Empower your alumni and champion lifelong learning."
          description="Graduation is not the end of the journey. Leverage Salesforce Education Cloud to build a vibrant, global community that supports continuous education, mentorship, and philanthropic growth."
          ctaText="Empower Your Advancement Network"
          defaultFilter="All"
        />
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
