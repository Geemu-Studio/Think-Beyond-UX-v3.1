/* Recruitment Solution grid — 3-column cards with checkmark icons */

function CheckIcon() {
  return (
    <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconNurturing() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Heart with signal waves */}
      <path d="M18 28s-11-7-11-14a7 7 0 0 1 11-5.74A7 7 0 0 1 29 14c0 7-11 14-11 14z" />
      <path d="M12 14h3l2 4 3-8 2 4h2" strokeWidth="1.4" />
    </svg>
  );
}

function IconPortal() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Browser / portal window */}
      <rect x="3" y="6" width="30" height="24" rx="3" />
      <line x1="3" y1="13" x2="33" y2="13" />
      <circle cx="8" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="13" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
      {/* Checkmark inside */}
      <path d="M12 22l4 4 8-8" strokeWidth="1.8" />
    </svg>
  );
}

function IconInsights() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Bar chart with upward trend */}
      <rect x="4" y="20" width="6" height="12" rx="1.5" />
      <rect x="13" y="14" width="6" height="18" rx="1.5" />
      <rect x="22" y="8" width="6" height="24" rx="1.5" />
      {/* Trend arrow */}
      <path d="M6 18l8-8 8 4 8-10" strokeWidth="1.8" />
      <path d="M26 4h4v4" strokeWidth="1.8" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconNurturing />,
    title: 'Intelligent Lead Nurturing',
    body: 'Anticipate candidate needs. Deliver highly personalised, omnichannel communication that resonates with the unique aspirations of every prospective student.',
  },
  {
    icon: <IconPortal />,
    title: 'A Frictionless Application Journey',
    body: 'Remove barriers to entry. Provide a seamless, intuitive digital application portal that reflects the prestige and excellence of your university brand.',
  },
  {
    icon: <IconInsights />,
    title: 'Strategic Enrolment Insights',
    body: "Make confident, data-driven decisions. Leverage predictive analytics to identify high-intent applicants and optimise your global recruitment investments.",
  },
];

export function RecruitmentSolutionSection() {
  return (
    <section id="solution" className="bg-neutral-50 py-24 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Headline - identical to master SolutionSection */}
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

