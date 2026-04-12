import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router';
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
import EnrolmentPage from './components/enrolment/EnrolmentPage';
import { FlourishingPage } from './components/flourishing/FlourishingPage';
import EngagementPage from './components/engagement/EngagementPage';
import AdvancementPage from './components/advancement/AdvancementPage';
import EnterprisePage from './components/enterprise/EnterprisePage';
import EcosystemPage from './components/ecosystem/EcosystemPage';
import { StyleGuide } from './components/StyleGuide';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
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

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EcosystemPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />

        <Route path="/enrolment" element={<EnrolmentPage />} />
        <Route path="/flourishing" element={<FlourishingPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/advancement" element={<AdvancementPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </HashRouter>
  );
}
