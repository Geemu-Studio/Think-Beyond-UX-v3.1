import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

function IconSignal() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 28s-11-7-11-14a7 7 0 0 1 11-5.74A7 7 0 0 1 29 14c0 7-11 14-11 14z" />
      <circle cx="18" cy="9" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 30l-2.4-2.18C8.4 21.28 4 17.29 4 12.3 4 8.1 7.1 5 11.3 5c2.4 0 4.7 1.1 6.7 2.9 2-1.8 4.3-2.9 6.7-2.9 4.2 0 7.3 3.1 7.3 7.3 0 5-4.4 9-11.6 15.52L18 30z"/>
    </svg>
  );
}

function IconAdvising() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="12" r="5" />
      <path d="M6 30c0-6 5.5-11 12-11s12 5 12 11" />
      <path d="M12 20h12" />
      <path d="M12 24h6" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconSignal />,
    title: 'Breaking Through the Digital Noise',
    body: 'Prospective students are overwhelmed by generic marketing. Standing out requires deeply relevant, timely, and authentic storytelling across their preferred channels.',
  },
  {
    icon: <IconHeart />,
    title: 'Overcoming Data Silos',
    body: 'Truly personalised communication is impossible when student data is fragmented across departments. Unified insights are the foundation of impactful engagement.',
  },
  {
    icon: <IconAdvising />,
    title: 'Building Lifelong Advocacy',
    body: 'Marketing doesn\'t end at enrolment. Sustaining a vibrant university brand means continuously engaging students, staff, and alumni throughout their entire institutional journey.',
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
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Orchestrating authentic connections at scale.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Move beyond generic mass communication. Empower your marketing teams to craft compelling, data-driven narratives that resonate across every digital touchpoint.
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
