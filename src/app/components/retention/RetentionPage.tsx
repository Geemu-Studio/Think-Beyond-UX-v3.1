import { Header } from '../Header';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { SocialProofBar } from '../SocialProofBar';
import { RetentionProblemSection } from './RetentionProblemSection';
import { CalculatorSection } from '../CalculatorSection';
import { RetentionSolutionSection } from './RetentionSolutionSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { RetentionCaseStudySection } from './RetentionCaseStudySection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { CTAFormSection } from '../CTAFormSection';
import { Footer } from '../Footer';

export function RetentionPage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main>
        <PillarMergedHero 
          title="Nurture every potential. Guide every learner to the pride of graduation."
          description="Move from reactive support to proactive care. Build a connected campus where every student feels seen, supported, and empowered to succeed with Salesforce Education Cloud."
          ctaText="Transform Student Support"
          defaultFilter="All"
        />
        <SocialProofBar />
        <RetentionProblemSection />
        <RetentionSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <RetentionCaseStudySection />
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
