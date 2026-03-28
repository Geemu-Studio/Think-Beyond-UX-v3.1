import { useState } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';

function CheckIcon() {
  return (
    <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconStudent360() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="13" r="5" />
      <path d="M7 31c0-6.075 4.925-11 11-11s11 4.925 11 11" />
      <path d="M4 18a14 14 0 0 0 14 14A14 14 0 0 0 32 18 14 14 0 0 0 18 4a14 14 0 0 0-14 14z" strokeDasharray="2 2" />
    </svg>
  );
}

function IconSegmentation() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Funnel / alert */}
      <path d="M18 6L4 30h28L18 6z" />
      <path d="M18 24h.01" strokeWidth="2.5" />
      <path d="M18 14v6" strokeWidth="1.8" />
    </svg>
  );
}

function IconRetention() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Heart or shield mobile phone */}
      <rect x="10" y="4" width="16" height="28" rx="4" />
      <path d="M14 26h8" />
      <circle cx="18" cy="14" r="3" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconStudent360 />,
    title: '360-Degree Student Visibility',
    body: 'Break down departmental silos. Provide advisors with a comprehensive, real-time view of every student\'s academic, financial, and wellbeing status to offer immediate, relevant guidance.',
  },
  {
    icon: <IconSegmentation />,
    title: 'Intelligent Early Alerts',
    body: 'Harness the power of predictive analytics. Automatically identify students who may be at risk and orchestrate timely, empathetic interventions that keep them on track to graduate.',
  },
  {
    icon: <IconRetention />,
    title: 'Seamless Access to Support',
    body: 'Empower students with an intuitive, mobile-first portal. From booking appointments with advisors to accessing critical wellbeing resources, ensure help is always just a tap away.',
  },
];

export function StudentSuccessSolutionSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              onClick={() => setIsModalOpen(true)}
              className="bg-white rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon row: line-art + checkmark badge */}
              <div className="flex items-start justify-between">
                <div className="text-black group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <CheckIcon />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                  {card.title}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-[1.7]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge CTA */}
        <div className="flex items-center gap-6 pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
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
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </section>
  );
}
