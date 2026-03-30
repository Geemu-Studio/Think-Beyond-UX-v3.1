import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
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
import RecruitmentPage from './components/recruitment/RecruitmentPage';
import { StudentSuccessPage } from './components/student-success/StudentSuccessPage';
import MarketingPage from './components/marketing/MarketingPage';
import AlumniPage from './components/alumni/AlumniPage';
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
    <BrowserRouter basename="/Think-Beyond-UX-v3">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/student-success" element={<StudentSuccessPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
