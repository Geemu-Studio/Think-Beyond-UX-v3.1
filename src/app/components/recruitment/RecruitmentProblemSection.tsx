import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

function IconDigital() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="24" height="20" rx="3" />
      <line x1="10" y1="18" x2="26" y2="18" strokeDasharray="4 2" />
      <circle cx="18" cy="18" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGlobal() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="10" />
      <ellipse cx="18" cy="18" rx="4" ry="10" />
      <line x1="8" y1="18" x2="28" y2="18" />
    </svg>
  );
}

function IconYield() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 24v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6" />
      <circle cx="18" cy="10" r="3" />
      <path d="M26 12l4 4-4 4" />
      <path d="M10 12L6 16l4 4" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconDigital />,
    title: 'Meeting Digital Expectations',
    body: 'Today’s applicants demand the seamless, hyper-personalised digital experiences they encounter in everyday e-commerce. Legacy systems create friction that drives top talent away.',
  },
  {
    icon: <IconGlobal />,
    title: 'Global Talent Acquisition',
    body: 'In an intensely competitive, borderless education market, relying on passive application portals is no longer viable. Proactive, targeted outreach is essential to attract international candidates.',
  },
  {
    icon: <IconYield />,
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
