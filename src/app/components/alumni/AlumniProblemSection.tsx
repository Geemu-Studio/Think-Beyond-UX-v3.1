import React from 'react';

// Using consistent icons tailored for Alumni
function IconGrowth() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 30h24M8 24l6-6 4 4 10-10M28 12h0" />
      <path d="M22 12h6v6" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8v20a2 2 0 0 0 2 2h20M6 8a2 2 0 0 1 2-2h12v6L16 9l-4 3V6H8" />
      <path d="M20 6h6a2 2 0 0 1 2 2v20H8" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="10" r="4" />
      <circle cx="8" cy="24" r="4" />
      <circle cx="28" cy="24" r="4" />
      <path d="M15 13L11 21M21 13l4 8M12 24h12" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconGrowth />,
    title: 'Transcending Transactional Giving',
    body: 'Modern alumni expect genuine relationships, not just funding requests. Cultivating philanthropic growth requires understanding their unique journeys, passions, and professional milestones.',
  },
  {
    icon: <IconBook />,
    title: 'The Rise of Lifelong Learning',
    body: 'The traditional degree is evolving. Alumni continuously seek to upskill through microcredentials and short programmes to stay competitive in a dynamic global economy.',
  },
  {
    icon: <IconNetwork />,
    title: 'Unifying the Graduate Experience',
    body: 'Fragmented data prevents meaningful outreach. A disconnected approach means missed opportunities for mentorship, corporate partnerships, and community advocacy.',
  },
];

export function AlumniProblemSection() {
  return (
    <section id="problem" className="bg-white py-24 px-6 border-t border-neutral-100">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Section headline */}
        <div className="max-w-3xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Opportunity
          </span>
          <h2 className="mt-3 leading-[1.15] tracking-[-1.5px] text-black text-[32px]">Building a legacy of continuous engagement.</h2>
          <p className="mt-4 text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Move beyond transactional fundraising. Equip your advancement teams with the insights needed to foster meaningful, lifelong connections with every graduate.
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
