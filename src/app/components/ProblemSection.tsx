/* Problem Agitation Grid — 3-column cards, line-art icons */

function IconChaos() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Server stack */}
      <rect x="4" y="6" width="28" height="7" rx="2" />
      <rect x="4" y="17" width="28" height="7" rx="2" />
      {/* Status dots */}
      <circle cx="28" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="28" cy="20.5" r="1.5" fill="currentColor" stroke="none" />
      {/* Lightning bolt — crash indicator */}
      <path d="M18 28l-3 5h5l-3 5" strokeWidth="1.8" />
    </svg>
  );
}

function IconNoControl() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Warning triangle */}
      <path d="M18 5L3 30h30L18 5z" />
      {/* Exclamation */}
      <line x1="18" y1="15" x2="18" y2="23" strokeWidth="2" />
      <circle cx="18" cy="26.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconRandom() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Scatter dots */}
      <circle cx="9" cy="9" r="3" />
      <circle cx="27" cy="12" r="3" />
      <circle cx="12" cy="26" r="3" />
      <circle cx="26" cy="25" r="3" />
      <circle cx="18" cy="17" r="3" />
      {/* Dashed random lines between them */}
      <line x1="9" y1="9" x2="27" y2="12" strokeDasharray="3 2" />
      <line x1="27" y1="12" x2="18" y2="17" strokeDasharray="3 2" />
      <line x1="18" y1="17" x2="12" y2="26" strokeDasharray="3 2" />
      <line x1="18" y1="17" x2="26" y2="25" strokeDasharray="3 2" />
    </svg>
  );
}

const cards = [
  {
    icon: <IconChaos />,
    title: 'A Seamless Campus Experience',
    body: 'Replace fragmented paper-based processes and overwhelmed systems with a resilient, unified digital infrastructure that scales gracefully with your institution.',
  },
  {
    icon: <IconNoControl />,
    title: 'Proactive Retention & Student Wellbeing',
    body: 'Move from reactive to proactive. Identify students who need support before they\'re lost — and build the sense of belonging that sustains their academic journey to completion.',
  },
  {
    icon: <IconRandom />,
    title: 'Purpose-Driven Recruitment',
    body: 'Attract and enrol candidates who align with your institution\'s values and mission — enhancing academic prestige and fostering a genuinely engaged student community.',
  },
];

export function ProblemSection() {
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
              onClick={() => { document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}