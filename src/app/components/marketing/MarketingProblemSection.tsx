import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

import { 
  CampaignOutlined, 
  DataUsageOutlined, 
  VolunteerActivismOutlined 
} from '@mui/icons-material';

const cards = [
  {
    icon: <CampaignOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Resonating in a Global Academic Market',
    body: 'Prospective students are overwhelmed by generic outreach. Standing out requires deeply relevant, timely, and authentic storytelling that aligns with their personal academic aspirations.',
  },
  {
    icon: <DataUsageOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Siloed Institutional Insights',
    body: 'Personalised communication is impossible when student data is fragmented across departments. Unified insights are the foundation of impactful institutional engagement.',
  },
  {
    icon: <VolunteerActivismOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Enduring Institutional Affinity',
    body: 'Engagement extends far beyond enrolment. Sustaining a vibrant university brand means continuously inspiring students, staff, and alumni throughout their full institutional journey.',
  },
];

export function MarketingProblemSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="problem" className="bg-white py-24 px-6 border-t border-neutral-100">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Section headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Opportunity
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Orchestrating authentic institutional connections at scale.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Move beyond generic mass communication. Empower your marketing teams to craft compelling, evidence-led narratives that resonate across every digital touchpoint.
          </p>
        </div>

        {/* 3-col agitation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon container - standardized premium style */}
              <div 
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-neutral-400 bg-neutral-100 border border-neutral-200 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                {card.icon}
              </div>
              <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                {card.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-[1.7]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}
