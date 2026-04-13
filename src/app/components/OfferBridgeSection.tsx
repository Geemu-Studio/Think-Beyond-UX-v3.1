import { useLocation, Link } from 'react-router';

import { NAVIGATION_CONTENT } from '../data/navigationContent';

const BOXES = NAVIGATION_CONTENT;

export function OfferBridgeSection() {
  const location = useLocation();
  const path = location.pathname;

  let heading = 'Institutional Resonance & Continuity.';
  let subheading = 'Secure the strategic foundations of your institution. Align every interaction with your academic mission through a unified digital ecosystem.';
  let cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.MARKETING, BOXES.ALUMNI, BOXES.ENTERPRISE];

  if (path === '/admissions') {
    cards = [BOXES.SUCCESS, BOXES.MARKETING, BOXES.ALUMNI, BOXES.ENTERPRISE];
  } else if (path === '/retention') {
    cards = [BOXES.RECRUITMENT, BOXES.MARKETING, BOXES.ALUMNI, BOXES.ENTERPRISE];
  } else if (path === '/engagement') {
    cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.ALUMNI, BOXES.ENTERPRISE];
  } else if (path === '/alumni') {
    cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.MARKETING, BOXES.ENTERPRISE];
  } else if (path === '/partnerships') {
    cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.MARKETING, BOXES.ALUMNI];
  }

  return (
    <section className="bg-neutral-800 py-20 px-[12px] lg:px-[24px] rounded-none">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Text block */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.6px]" style={{ fontWeight: 600 }}>
            Salesforce Education Cloud
          </span>
          <h2 className="text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white">
            {heading}
          </h2>
          <p className="text-[15px] text-neutral-400 leading-[1.75] max-w-xl">
            {subheading}
          </p>
        </div>

        {/* Dynamic mini-grid with 3+2 logic for 5 cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cards.length === 5 ? 'lg:grid-cols-6' : cards.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
          {cards.map((card, idx) => (
            <Link
              key={card.title}
              to={card.href}
              className={`
                bg-transparent border border-neutral-700 rounded-[20px] p-6 flex flex-col gap-3 group hover:bg-[#333333] hover:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98] cursor-pointer no-underline
                ${cards.length === 5 ? (
                  idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                ) : ''}
              `}
            >
              <h3 className="text-[15px] text-white leading-[1.5] tracking-[-0.3px]" style={{ fontWeight: 600 }}>
                {card.title}
              </h3>
              <p className="text-[13px] text-neutral-400 leading-[1.65]">
                {card.body}
              </p>
              <div
                className="mt-auto text-[13px] text-neutral-300 group-hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
              >
                {card.linkText}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
