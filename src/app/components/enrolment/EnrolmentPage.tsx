import { Header } from '../Header';
import { SocialProofBar } from '../SocialProofBar';
import { CalculatorSection } from '../CalculatorSection';
import { SecurityTrustSection } from '../SecurityTrustSection';
import { OfferBridgeSection } from '../OfferBridgeSection';
import { Footer } from '../Footer';
import { PillarMergedHero } from '../ui/shared/PillarMergedHero';
import { EnrolmentProblemSection } from './EnrolmentProblemSection';
import { EnrolmentSolutionSection } from './EnrolmentSolutionSection';
import { EnrolmentCaseStudySection } from './EnrolmentCaseStudySection';
import { CTAFormSection } from '../CTAFormSection';

export default function EnrolmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PillarMergedHero 
          title="Institutional strategy for your academic community. Redefining the student journey from first enquiry to proud alumnus."
          description="Move beyond administrative constraints. Build a connected, purpose-driven campus with Salesforce Education Cloud — unifying every touchpoint across the academic lifecycle into one seamless, intelligent ecosystem."
          ctaText="Initiate Institutional Evolution"
          defaultFilter="All"
        />
        <SocialProofBar />
        <EnrolmentProblemSection />
        <EnrolmentSolutionSection />
        <CalculatorSection />
        <SecurityTrustSection />
        <EnrolmentCaseStudySection />
        <CTAFormSection 
          title="About us: Your dedicated student recruitment and enrolment team."
          formTitle="Let's talk about your student recruitment and enrolment strategy."
          buttonText="Schedule a Strategic Review"
        />
        <OfferBridgeSection />
      </main>
      <Footer />
    </div>
  );
}
