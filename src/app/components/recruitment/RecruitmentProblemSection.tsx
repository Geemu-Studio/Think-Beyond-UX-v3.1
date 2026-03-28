import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

import { 
  DevicesOutlined, 
  PublicOutlined, 
  TrendingUpOutlined 
} from '@mui/icons-material';

const cards = [
  {
    icon: <DevicesOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Meeting Digital Expectations',
    body: 'Today’s applicants demand the seamless, hyper-personalised digital experiences they encounter in everyday e-commerce. Legacy systems create friction that drives top talent away.',
  },
  {
    icon: <PublicOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Global Talent Acquisition',
    body: 'In an intensely competitive, borderless education market, relying on passive application portals is no longer viable. Proactive, targeted outreach is essential to attract international candidates.',
  },
  {
    icon: <TrendingUpOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Maximising Enrolment Yield',
    body: 'An offer of admission does not guarantee a student on campus. Maintaining continuous, meaningful engagement during the critical window between offer and enrolment is vital to prevent drop-offs.',
  },
];

export function RecruitmentProblemSection() {
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
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Empowering prospective students from day one.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Eliminate administrative friction. Give your admissions team the intelligent tools they need to focus on what matters most: discovering and nurturing global talent.
          </p>
        </div>

        {/* 3-col agitation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => setIsModalOpen(true)}
              className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon tinted lightly */}
              <div className="text-neutral-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-black">{card.icon}</div>
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
