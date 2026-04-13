import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ConsultationModal } from '../ConsultationModal';
import expertMarcin from '@/assets/expert-marcin.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  DevicesOutlined,
  PublicOutlined,
  TrendingUpOutlined
} from '@mui/icons-material';

const svgPaths = {
  p1cfaff00: "M10.5 4.5V1.5H1.5V10.5H4.5M10.5 4.5H4.5V10.5M10.5 4.5L1.5 1.5M4.5 10.5L1.5 1.5",
};

const cards = [
  {
    icon: <DevicesOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Institutional Digital Resonance',
    body: 'Legacy systems create friction that risk institutional prestige. Secure the world’s brightest talent through a seamless, hyper-personalised digital experience that reflects your academic standing.',
    videoId: '8_v1-cE9kkw',
    expertImage: expertMarcin,
  },
  {
    icon: <PublicOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Global Academic Standing',
    body: 'Maintain a distinct competitive advantage in an intensely contested global market. Leverage proactive, mission-driven outreach to connect with candidates who align with your core values.',
    videoId: '8_v1-cE9kkw',
    expertImage: expertMarcin,
  },
  {
    icon: <TrendingUpOutlined sx={{ fontSize: 36, color: 'inherit' }} />,
    title: 'Yield Optimisation & Legacy',
    body: 'Mitigate the risks of candidate drop-off. Nurture the critical window between offer and enrolment through consistent, meaningful engagement that fosters early institutional belonging.',
    videoId: '8_v1-cE9kkw',
    expertImage: expertMarcin,
  },
];

export function EnrolmentProblemSection() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<typeof cards[0] | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openVideo = (card: typeof cards[0]) => {
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
    <section id="problem" className="bg-white py-24 px-3 lg:px-6 ">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Section headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Institutional Opportunity
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Fostering institutional belonging from day one.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Overcome administrative fragmentation. Provide your admissions team with the intelligent tools required to identify, nurture, and secure elite global talent.
          </p>
        </div>

        {/* 3-col agitation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={() => openVideo(card)}
              className="p-8 flex flex-col gap-5 text-left rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl transition-all duration-300 group cursor-pointer w-full border-none"
            >
              <div
                aria-hidden="true"
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-neutral-400 bg-neutral-100 border border-neutral-200 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                {card.icon}
              </div>
              <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                {card.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-[1.7] min-h-[4.5rem]">
                {card.body}
              </p>

              {/* Watch Solution CTA */}
              <div className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-400 group-hover:text-black transition-all mt-auto">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-200 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span>Watch overview</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pathname={location.pathname}
      />

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeVideo();
        }}
        className="fixed inset-0 m-0 p-0 w-screen h-screen max-w-none border-none bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex flex-col items-center justify-center z-[9999] overflow-hidden"
      >
        {activeCard && (
          <>
            {/* Player Container */}
            <div className="relative w-[95%] max-w-4xl aspect-video h-auto bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] transition-all duration-500">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-[90] w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all border border-white/10 group active:scale-95"
                aria-label="Close video"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="w-full h-full relative">
                {!videoStarted && (
                  <div
                    className="absolute inset-0 z-30 cursor-pointer group/facade flex items-center justify-center"
                    onClick={() => setVideoStarted(true)}
                  >
                    <img
                      src={activeCard.expertImage}
                      alt={activeCard.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/facade:scale-105"
                    />

                    {/* Project Logo - Top Left */}
                    <div className="absolute top-8 left-8 flex items-center gap-2.5 z-40">
                      <div className="bg-white/10 backdrop-blur-md rounded-[6px] flex items-center justify-center w-7 h-7 border border-white/20">
                        <svg fill="none" viewBox="0 0 13 13" className="w-[13px] h-[13px]">
                          <path
                            d={svgPaths.p1cfaff00}
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 text-[15px] tracking-[-0.4px] font-semibold">
                        Think Beyond
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-10 left-10 text-left pr-10">
                      <span className="text-[11px] text-white/70 uppercase tracking-[1.4px] font-semibold block mb-2">Strategy Session</span>
                      <h3 className="text-white text-xl sm:text-3xl font-bold tracking-tight max-w-xl leading-tight">
                        {activeCard.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl transition-all duration-500 group-hover/facade:scale-110 group-hover/facade:bg-white/30 group-hover/facade:border-white/50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 sm:ml-1.5 transition-transform duration-500 group-hover/facade:scale-110 sm:w-8 sm:h-8">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                )}

                {videoStarted && (
                  <div className="w-full h-full relative group/player">
                    <iframe
                      width="100%" height="100%"
                      src={`https://www.youtube.com/embed/${activeCard.videoId}?autoplay=1&rel=0&modestbranding=1&mute=0`}
                      title={activeCard.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full animate-in fade-in duration-1000"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Bar - Stable, centered and 24px from bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 md:bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 md:border-white/20 flex items-center gap-6 shadow-2xl transition-all">
               <span className="text-white font-bold text-sm tracking-tight w-8 text-center text-neutral-300">
                 {cards.findIndex(c => c.title === activeCard.title) + 1} / {cards.length}
               </span>
               <div className="flex gap-2">
                 <button
                  onClick={(e) => { e.stopPropagation(); prevVideo(); }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer active:scale-90"
                  aria-label="Previous expert session"
                 >
                  <ChevronLeft className="w-5 h-5" />
                 </button>
                 <button
                  onClick={(e) => { e.stopPropagation(); nextVideo(); }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer active:scale-90"
                  aria-label="Next expert session"
                 >
                  <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
