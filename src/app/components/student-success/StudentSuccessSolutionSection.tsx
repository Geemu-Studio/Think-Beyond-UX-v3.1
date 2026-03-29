import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';
import expertMarcin from '../../../assets/expert-marcin.jpeg';
import svgPaths from '../../../imports/svg-fitf5bq036';
import { 
  GroupsOutlined, 
  NotificationsActiveOutlined, 
  PhoneIphoneOutlined 
} from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    videoId: 'qL6R8Z9W4_8', // Student Success match
    expertImage: expertMarcin
  },
  {
    icon: <NotificationsActiveOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Intelligent Early Alerts',
    body: 'Harness the power of predictive analytics. Automatically identify students who may be at risk and orchestrate timely, empathetic interventions that keep them on track to graduate.',
    videoId: 'v5V6Y0_Q_8k', // Intro match
    expertImage: expertMarcin
  },
  {
    icon: <PhoneIphoneOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Seamless Access to Support',
    body: 'Empower students with an intuitive, mobile-first portal. From booking appointments with advisors to accessing critical wellbeing resources, ensure help is always just a tap away.',
    videoId: '8_v1-cE9kkw', // Recruitment match/placeholder
    expertImage: expertMarcin
  },
];

export function StudentSuccessSolutionSection() {
  const location = useLocation();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<typeof cards[0] | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openVideo = (e: React.MouseEvent, card: typeof cards[0]) => {
    e.stopPropagation();
    setActiveCard(card);
    setVideoStarted(false);
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    dialogRef.current?.close();
    setActiveCard(null);
    setVideoStarted(false);
    document.body.style.overflow = '';
  };

  const nextVideo = () => {
    if (!activeCard) return;
    const currentIndex = cards.findIndex(c => c.title === activeCard.title);
    const nextIndex = (currentIndex + 1) % cards.length;
    setActiveCard(cards[nextIndex]);
    setVideoStarted(false);
  };

  const prevVideo = () => {
    if (!activeCard) return;
    const currentIndex = cards.findIndex(c => c.title === activeCard.title);
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    setActiveCard(cards[prevIndex]);
    setVideoStarted(false);
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
              onClick={(e) => openVideo(e, card)}
              className="bg-white rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
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

                {/* Video Trigger Button */}
                <button
                  onClick={(e) => openVideo(e, card)}
                  className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-800 hover:text-black transition-all duration-300 group/btn w-fit cursor-pointer"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-200 group-hover/btn:border-black group-hover/btn:bg-neutral-100 transition-all">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-0.5">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span>Watch solution in action</span>
                </button>
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
          
          {activeCard && (
            <div className="w-full h-full relative">
              {!videoStarted && (
                <div 
                  className="absolute inset-0 z-30 cursor-pointer group/facade flex items-center justify-center transition-opacity duration-500"
                  onClick={() => setVideoStarted(true)}
                >
                  <img src={activeCard.expertImage} alt={activeCard.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/facade:scale-105" />
                  
                  {/* Project Logo - Top Left */}
                  <div className="absolute top-8 left-8 flex items-center gap-2.5 z-40">
                    <div className="bg-white/10 backdrop-blur-md rounded-[6px] flex items-center justify-center w-7 h-7 border border-white/20">
                      <svg fill="none" viewBox="0 0 13 13" className="w-[13px] h-[13px]">
                        <path d={svgPaths.p1cfaff00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-[15px] tracking-[-0.4px] font-semibold">Think Beyond</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 text-left">
                    <span className="text-[11px] text-white/70 uppercase tracking-[1.4px] font-semibold block mb-2">Solution Overview</span>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight max-w-xl leading-tight">{activeCard.title}</h3>
                  </div>

                  <div className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl transition-all duration-500 group-hover/facade:scale-110 group-hover/facade:bg-white/30 group-hover/facade:border-white/50">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1.5 transition-transform duration-500 group-hover/facade:scale-110">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  {/* Navigation Bar */}
                  <div className="absolute bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 flex items-center gap-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-white font-bold text-sm tracking-tight">{cards.findIndex(c => c.title === activeCard.title) + 1} / {cards.length}</span>
                    <div className="flex gap-2">
                      <button onClick={(e) => { e.stopPropagation(); prevVideo(); }} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
                      <button onClick={(e) => { e.stopPropagation(); nextVideo(); }} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              )}

              {videoStarted && (
                <div className="w-full h-full relative group/player">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${activeCard.videoId}?autoplay=1&rel=0&modestbranding=1&mute=0`} title={activeCard.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full animate-in fade-in duration-1000"></iframe>
                  <div className="absolute inset-x-0 bottom-8 px-8 flex justify-end opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 flex items-center gap-6 shadow-2xl pointer-events-auto">
                      <span className="text-white font-bold text-sm tracking-tight">{cards.findIndex(c => c.title === activeCard.title) + 1} / {cards.length}</span>
                      <div className="flex gap-2">
                        <button onClick={prevVideo} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
                        <button onClick={nextVideo} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}
