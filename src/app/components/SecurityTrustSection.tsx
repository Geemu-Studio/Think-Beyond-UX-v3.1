import { useState, useRef, useEffect } from 'react';
import expertMarcin from '../../assets/expert-marcin.jpeg';
import svgPaths from '../../imports/svg-fitf5bq036';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 'cyber',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        {/* Shield outline */}
        <path
          d="M14 2.5L4 6.5V13.5C4 19.17 8.36 24.47 14 26C19.64 24.47 24 19.17 24 13.5V6.5L14 2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Pulse / signal lines — proactive / cyber */}
        <polyline
          points="9,14 11.5,11 13.5,16 15.5,12 18,14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: 'Proactive Cyber Resilience',
    body:
      'Fortify your digital campus against evolving cyber threats. Our architecture provides continuous, advanced protection so your institution can focus on academic innovation without disruption.',
    videoId: 'v5V6Y0_Q_8k',
    expertImage: expertMarcin,
    videoLabel: 'Cyber Security Overview'
  },
  {
    id: 'privacy',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        {/* Lock body */}
        <rect
          x="6"
          y="13"
          width="16"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        {/* Lock shackle */}
        <path
          d="M9 13V9.5C9 7.015 10.791 5 14 5C17.209 5 19 7.015 19 9.5V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Key hole dot */}
        <circle cx="14" cy="19.5" r="1.25" fill="currentColor" />
      </svg>
    ),
    heading: 'Uncompromising Data Privacy',
    body:
      'From rigorous GDPR compliance to granular, role-based access controls, ensure that sensitive student, applicant, and faculty information remains strictly confidential and fully governed.',
    videoId: 'qL6R8Z9W4_8',
    expertImage: expertMarcin,
    videoLabel: 'Data Governance Insights'
  },
];

export function SecurityTrustSection() {
  const [activeCard, setActiveCard] = useState<typeof features[0] | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openVideo = (e: React.MouseEvent, feat: typeof features[0]) => {
    e.stopPropagation();
    setActiveCard(feat);
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
    const currentIndex = features.findIndex(f => f.id === activeCard.id);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveCard(features[nextIndex]);
    setVideoStarted(false);
  };

  const prevVideo = () => {
    if (!activeCard) return;
    const currentIndex = features.findIndex(f => f.id === activeCard.id);
    const prevIndex = (currentIndex - 1 + features.length) % features.length;
    setActiveCard(features[prevIndex]);
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
    <section
      id="security-trust"
      className="bg-neutral-800 py-20 px-6 border-t border-neutral-700/50"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-14">

        {/* ── Header row ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
          {/* Heading + sub */}
          <div className="flex flex-col gap-4">
            <div>
              <span
                className="text-[11px] text-neutral-500 uppercase tracking-[1.4px]"
                style={{ fontWeight: 600 }}
              >
                Security &amp; Compliance
              </span>
              <h2
                className="mt-3 text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white"
                style={{ fontWeight: 700 }}
              >
                Enterprise-grade security and compliance.
              </h2>
            </div>
            <p className="text-[15px] text-neutral-400 leading-[1.75] max-w-xl text-balance">
              Safeguarding your academic community's data with a robust,
              GDPR-compliant infrastructure.
            </p>
          </div>
        </div>

        {/* ── Feature cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feat) => (
            <div
              key={feat.id}
              onClick={(e) => openVideo(e, feat)}
              className="rounded-[20px] p-6 flex flex-col gap-6 group transition-all duration-300 cursor-pointer hover:bg-[#333333] hover:border-transparent hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
              style={{ 
                background: 'transparent', 
                border: '1px solid #3f3f46' 
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openVideo(e as any, feat);
                }
              }}
            >

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white flex-shrink-0 transition-all group-hover:scale-110 group-hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                {feat.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[18px] text-white leading-[1.3] tracking-[-0.4px]"
                    style={{ fontWeight: 700 }}
                  >
                    {feat.heading}
                  </h3>
                  <p className="text-[14px] text-neutral-400 leading-[1.75]">
                    {feat.body}
                  </p>
                </div>

                {/* Video Trigger Label (Visual Only) */}
                <div
                  className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-400 group-hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-700 group-hover:border-white group-hover:bg-white/10 transition-all">
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
                  <span>Discover our approach</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* ── Trust badges row ───────────────────────────────────── */}
        <div
          className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-4 border-t border-white/5"
        >
          {[
            { label: 'GDPR Compliant', detail: 'EU Data Protection' },
            { label: 'ISO 27001 Aligned', detail: 'Information Security' },
            { label: 'Role-Based Access', detail: 'Granular Permissions' },
            { label: 'Encrypted at Rest', detail: 'AES-256 Standard' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              {/* Small tick icon */}
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[12px] text-white leading-none"
                  style={{ fontWeight: 600 }}
                >
                  {badge.label}
                </span>
                <span className="text-[11px] text-neutral-500 mt-1">
                  {badge.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

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
              {/* Video Facade (Thumbnail Overlay) */}
              {!videoStarted && (
                <div 
                  className="absolute inset-0 z-30 cursor-pointer group/facade flex items-center justify-center transition-opacity duration-500"
                  onClick={() => setVideoStarted(true)}
                >
                  <img 
                    src={activeCard.expertImage} 
                    alt={activeCard.heading}
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
                  
                  <div className="absolute bottom-10 left-10 text-left">
                    <span className="text-[11px] text-white/70 uppercase tracking-[1.4px] font-semibold block mb-2">{activeCard.videoLabel}</span>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight max-w-xl leading-tight">
                      {activeCard.heading}
                    </h3>
                  </div>

                  <div className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl transition-all duration-500 group-hover/facade:scale-110 group-hover/facade:bg-white/30 group-hover/facade:border-white/50">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1.5 transition-transform duration-500 group-hover/facade:scale-110">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  {/* Navigation Bar */}
                  <div className="absolute bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 flex items-center gap-6 shadow-2xl">
                    <span className="text-white font-bold text-sm tracking-tight text-neutral-300">
                      {features.findIndex(f => f.id === activeCard.id) + 1} / {features.length}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevVideo(); }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextVideo(); }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {videoStarted && (
                <div className="w-full h-full relative group/player">
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${activeCard.videoId}?autoplay=1&rel=0&modestbranding=1&mute=0`}
                    title={activeCard.heading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full animate-in fade-in duration-1000"
                  ></iframe>

                  <div className="absolute inset-x-0 bottom-8 px-8 flex justify-end opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 flex items-center gap-6 shadow-2xl pointer-events-auto">
                      <span className="text-white font-bold text-sm tracking-tight">
                        {features.findIndex(f => f.id === activeCard.id) + 1} / {features.length}
                      </span>
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

