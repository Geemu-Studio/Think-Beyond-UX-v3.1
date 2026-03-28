import React from 'react';

function IconSignal() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 28s-11-7-11-14a7 7 0 0 1 11-5.74A7 7 0 0 1 29 14c0 7-11 14-11 14z" />
      <circle cx="18" cy="9" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 30l-2.4-2.18C8.4 21.28 4 17.29 4 12.3 4 8.1 7.1 5 11.3 5c2.4 0 4.7 1.1 6.7 2.9 2-1.8 4.3-2.9 6.7-2.9 4.2 0 7.3 3.1 7.3 7.3 0 5-4.4 9-11.6 15.52L18 30z"/>
    </svg>
  );
}

function IconAdvising() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="12" r="5" />
      <path d="M6 30c0-6 5.5-11 12-11s12 5 12 11" />
      <path d="M12 20h12" />
      <path d="M12 24h6" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconSignal />,
    title: 'Detecting the Invisible Signals',
    body: 'Students rarely raise their hands before dropping out. Disjointed systems mean early warning signs are missed. Proactive identification is essential to intervene before a learner feels lost.',
  },
  {
    icon: <IconHeart />,
    title: 'Championing Holistic Wellbeing',
    body: 'True success encompasses mental health, financial stability, and a deep sense of belonging. Institutions must offer holistic support that addresses the complete lived experience of their students.',
  },
  {
    icon: <IconAdvising />,
    title: 'Empowering Advisory Teams',
    body: 'Dedicated support staff are often overwhelmed by administrative burdens. Freeing their time from manual processes allows for deeply personalised, meaningful advising that changes student trajectories.',
  },
];

export function StudentSuccessProblemSection() {
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
              className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.09)] transition-shadow"
            >
              {/* Icon tinted lightly */}
              <div className="text-neutral-400">{card.icon}</div>
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
