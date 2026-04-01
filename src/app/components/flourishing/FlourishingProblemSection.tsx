import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

import {
  SensorsOutlined,
  FavoriteBorderOutlined,
  SupportAgentOutlined
} from '@mui/icons-material';

const cards = [
  {
    icon: <SensorsOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Predictive Academic Resilience',
    body: 'Overcome the risks of reactive administration. Leverage data-informed early warning signals to identify students requiring strategic support before they reach a crisis point.',
  },
  {
    icon: <FavoriteBorderOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Holistic Institutional Belonging',
    body: 'Academic flourishing extends beyond the lecture theatre. Deliver integrated enablement that addresses the complete academic, social, and wellbeing journey of every learner.',
  },
  {
    icon: <SupportAgentOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Optimising Academic Support',
    body: 'Empower your advisors to lead with impact. Reduce administrative fragmentation, allowing for deeply personalised, high-value engagement that secures student progression.',
  },
];

export function FlourishingProblemSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="problem" className="bg-white py-24 px-3 lg:px-6 border-t border-neutral-100">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Section headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Institutional Opportunity
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Cultivating an environment for academic flourishing.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Surmounting the barriers to academic progression. Equip your advising and enablement teams with the strategic insights required to foster a truly resilient academic community.
          </p>
        </div>

        {/* 3-col agitation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl transition-all duration-300 group"
            >
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
