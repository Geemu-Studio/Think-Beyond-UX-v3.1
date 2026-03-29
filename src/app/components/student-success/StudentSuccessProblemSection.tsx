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
    title: 'Detecting the Invisible Signals',
    body: 'Students rarely raise their hands before dropping out. Disjointed systems mean early warning signs are missed. Proactive identification is essential to intervene before a learner feels lost.',
  },
  {
    icon: <FavoriteBorderOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Championing Holistic Wellbeing',
    body: 'True success encompasses mental health, financial stability, and a deep sense of belonging. Institutions must offer holistic support that addresses the complete lived experience of their students.',
  },
  {
    icon: <SupportAgentOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Empowering Advisory Teams',
    body: 'Dedicated support staff are often overwhelmed by administrative burdens. Freeing their time from manual processes allows for deeply personalised, meaningful advising that changes student trajectories.',
  },
];

export function StudentSuccessProblemSection() {
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
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Cultivating resilience and academic excellence.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Identify barriers before they become roadblocks. Equip your advising and support teams with the insights needed to foster a truly inclusive academic environment.
          </p>
        </div>

        {/* 3-col agitation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group"
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
    </section>
  );
}
