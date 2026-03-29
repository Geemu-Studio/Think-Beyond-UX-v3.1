import { useState, useRef, useEffect } from 'react';
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
    videoId: 'v5V6Y0_Q_8k' // Salesforce Education Cloud Intro
  },
  {
    icon: <HealthAndSafetyOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Proactive Retention & Student Wellbeing',
    body: 'Move from reactive to proactive. Identify students who need support before they\'re lost — and build the sense of belonging that sustains their academic journey to completion.',
    videoId: 'qL6R8Z9W4_8' // Student Success
  },
  {
    icon: <TrackChangesOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Purpose-Driven Recruitment',
    body: 'Attract and enrol candidates who align with your institution\'s values and mission — enhancing academic prestige and fostering a genuinely engaged student community.',
    videoId: '8_v1-cE9kkw' // Recruitment
  },
];

export function ProblemSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openVideo = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    setCurrentVideoId(videoId);
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    dialogRef.current?.close();
    setCurrentVideoId(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      closeVideo();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, []);

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
              
              {/* Video Trigger Button */}
              <button
                onClick={(e) => openVideo(e, card.videoId)}
                className="mt-1 flex items-center gap-2.5 text-[13px] font-semibold text-neutral-800 hover:text-black transition-all duration-300 group/btn w-fit"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-200 group-hover/btn:border-black group-hover/btn:bg-neutral-100 transition-all">
                  <svg 
                    width="10" 
                    height="10" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden="true"
                    className="ml-0.5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span>Hear Expert Insight</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />

      {/* Video Dialog Modal */}
      <dialog 
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeVideo();
        }}
        className="fixed inset-0 m-auto p-0 rounded-2xl border-none bg-transparent shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] max-w-4xl w-[95%] aspect-video backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex flex-col items-center justify-center transition-all duration-300"
      >
        <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden ring-1 ring-white/10">
          <button 
            onClick={closeVideo}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all border border-white/10 group"
            aria-label="Close video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {currentVideoId && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Expert Insight Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          )}
        </div>
      </dialog>
    </section>
  );
}