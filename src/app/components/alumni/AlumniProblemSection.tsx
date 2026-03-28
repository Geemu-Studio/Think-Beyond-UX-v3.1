import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

import { 
  TrendingUpOutlined, 
  MenuBookOutlined, 
  HubOutlined 
} from '@mui/icons-material';

const cards = [
  {
    icon: <TrendingUpOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Transcending Transactional Giving',
    body: 'Modern alumni expect genuine relationships, not just funding requests. Cultivating philanthropic growth requires understanding their unique journeys, passions, and professional milestones.',
  },
  {
    icon: <MenuBookOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'The Rise of Lifelong Learning',
    body: 'The traditional degree is evolving. Alumni continuously seek to upskill through microcredentials and short programmes to stay competitive in a dynamic global economy.',
  },
  {
    icon: <HubOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Unifying the Graduate Experience',
    body: 'Fragmented data prevents meaningful outreach. A disconnected approach means missed opportunities for mentorship, corporate partnerships, and community advocacy.',
  },
];

export function AlumniProblemSection() {
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
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Building a legacy of continuous engagement.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Move beyond transactional fundraising. Equip your advancement teams with the insights needed to foster meaningful, lifelong connections with every graduate.
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
