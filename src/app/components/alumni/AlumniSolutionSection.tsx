import React from 'react';

function CheckIcon() {
  return (
    <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconFundraising() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 29.5a7.5 7.5 0 0 0 0-15v15z" />
      <path d="M18 14.5a7.5 7.5 0 0 0 0 15V14.5z" />
      <path d="M18 31.5V34M18 12V9.5" />
      <path d="M8 18h20" />
    </svg>
  );
}

function IconGraduationHat() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10L4 17l14 7 14-7-14-7z" />
      <path d="M8 19v6c0 3 4 5 10 5s10-2 10-5v-6" />
      <path d="M32 17v9" />
    </svg>
  );
}

function IconPortal() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="24" height="16" rx="2" />
      <path d="M14 28h8M18 24v4" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconFundraising />,
    title: 'Holistic Advancement',
    body: 'Transform your fundraising strategy. Gain a comprehensive view of donor readiness, track engagement, and build deeply personalised philanthropic campaigns.',
  },
  {
    icon: <IconGraduationHat />,
    title: 'Frictionless Learning',
    body: 'Deliver a seamless digital storefront for executive education. Empower returning learners to easily discover, enrol in, and manage their continuous development.',
  },
  {
    icon: <IconPortal />,
    title: 'Community Portals',
    body: 'Create exclusive digital spaces where graduates can connect. Facilitate global networking, peer-to-peer mentorship, and lifelong career support.',
  },
];

export function AlumniSolutionSection() {
  return (
    <section id="solution" className="bg-neutral-50 py-24 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Solution Ecosystem
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">
            The core pillars of alumni engagement.
          </h2>
        </div>

        {/* 3-col solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.09)] transition-shadow"
            >
              {/* Icon row: line-art + checkmark badge */}
              <div className="flex items-start justify-between">
                <div className="text-black">{card.icon}</div>
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
          <a
            href="#calculator"
            onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-[14px] text-black hover:opacity-60 transition-opacity px-4 py-2 rounded-full hover:bg-neutral-100"
            style={{ fontWeight: 600 }}
          >
            Discover the full impact for your institution
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
