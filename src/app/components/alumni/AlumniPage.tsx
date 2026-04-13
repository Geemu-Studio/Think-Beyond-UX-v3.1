import { Header } from '../Header';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
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
        <PillarMergedHero 
          title="Cultivate lasting relationships. Empower your alumni and champion lifelong learning."
          description="Graduation is not the end of the journey. Leverage Salesforce Education Cloud to build a vibrant, global community that supports continuous education, mentorship, and philanthropic growth."
          ctaText="Empower Your Alumni Network"
          defaultFilter="All"
        />
        <SocialProofBar />
        <AlumniProblemSection />
        <AlumniSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <AlumniCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated alumni relations and development team."
          formTitle="Let's talk about alumni engagement and lifelong learning at your institution."
          buttonText="Request an Alumni Strategy Call"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
