import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router';
import { Header } from './components/Header';
import AdmissionsPage from './components/admissions/AdmissionsPage';
import { RetentionPage } from './components/retention/RetentionPage';
import EngagementPage from './components/engagement/EngagementPage';
import AlumniPage from './components/alumni/AlumniPage';
import PartnershipsPage from './components/partnerships/PartnershipsPage';
import EcosystemPage from './components/ecosystem/EcosystemPage';
import { StyleGuide } from './components/StyleGuide';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EcosystemPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />

        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/retention" element={<RetentionPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </HashRouter>
  );
}
