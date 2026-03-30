import { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';
import { 
  GroupsOutlined, 
  NotificationsActiveOutlined, 
  PhoneIphoneOutlined 
} from '@mui/icons-material';

function CheckIcon() {
  return (
    <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const cards = [
  {
    icon: <GroupsOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: '360-Degree Student Visibility',
    body: 'Break down departmental silos. Provide advisors with a comprehensive, real-time view of every student\'s academic, financial, and wellbeing status to offer immediate, relevant guidance.',
  },
  {
    icon: <NotificationsActiveOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Intelligent Early Alerts',
    body: 'Harness the power of predictive analytics. Automatically identify students who may be at risk and orchestrate timely, empathetic interventions that keep them on track to graduate.',
  },
  {
    icon: <PhoneIphoneOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Seamless Access to Support',
    body: 'Empower students with an intuitive, mobile-first portal. From booking appointments with advisors to accessing critical wellbeing resources, ensure help is always just a tap away.',
  },
];

export function StudentSuccessSolutionSection() {
  const location = useLocation();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section id="solution" className="bg-neutral-50 py-24 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Solution
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">
            The unified ecosystem for the modern, globally minded university.
          </h2>
        </div>

        {/* 3-col solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon row: line-art + checkmark badge */}
              <div className="flex items-start justify-between">
                <div 
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center text-neutral-400 bg-neutral-50 border border-neutral-100 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  {card.icon}
                </div>
                <CheckIcon />
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                  {card.title}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-[1.7] min-h-[4.5rem]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge CTA */}
        <div className="flex items-center gap-6 pt-2">
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="inline-flex items-center gap-2 text-[14px] text-black hover:opacity-60 transition-opacity px-4 py-2 rounded-full hover:bg-neutral-100"
            style={{ fontWeight: 600 }}
          >
            Discover the full impact for your institution
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
            </svg>
          </button>
        </div>

      </div>

      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}

