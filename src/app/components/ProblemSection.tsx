import { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from './ConsultationModal';

import { 
  HubOutlined, 
  HealthAndSafetyOutlined, 
  TrackChangesOutlined 
} from '@mui/icons-material';

const cards = [
  {
    icon: <HubOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'A Seamless Campus Experience',
    body: 'Replace fragmented paper-based processes and overwhelmed systems with a resilient, unified digital infrastructure that scales gracefully with your institution.',
  },
  {
    icon: <HealthAndSafetyOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Proactive Retention & Student Wellbeing',
    body: 'Move from reactive to proactive. Identify students who need support before they\'re lost — and build the sense of belonging that sustains their academic journey to completion.',
  },
  {
    icon: <TrackChangesOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Purpose-Driven Recruitment',
    body: 'Attract and enrol candidates who align with your institution\'s values and mission — enhancing academic prestige and fostering a genuinely engaged student community.',
  },
];

export function ProblemSection() {
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
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Cultivating student success. Build lasting relationships that proactively foster retention, wellbeing, and the pride of graduation.</h2>
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