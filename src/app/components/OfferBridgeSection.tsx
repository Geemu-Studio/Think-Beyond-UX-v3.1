import { useLocation, Link } from 'react-router';

import { NAVIGATION_CONTENT } from '../data/navigationContent';

const BOXES = NAVIGATION_CONTENT;

export function OfferBridgeSection() {
  const location = useLocation();
  const path = location.pathname;

  let heading = 'A unified ecosystem for the entire student lifecycle.';
  let subheading = 'Discover the core pillars of a transformed institution powered by Salesforce Education Cloud.';
  let cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.MARKETING];

  if (path === '/recruitment') {
    heading = 'Admissions is only the beginning of your institutional story.';
    subheading = 'Recruitment is your first chapter — discover the three further pillars that complete a truly transformed institution.';
    cards = [BOXES.SUCCESS, BOXES.MARKETING, BOXES.ALUMNI];
  } else if (path === '/student-success') {
    heading = 'A thriving campus starts with the right connections.';
    subheading = 'Student success is the heart of your institution — discover the other pillars of a unified Salesforce ecosystem.';
    cards = [BOXES.RECRUITMENT, BOXES.MARKETING, BOXES.ALUMNI];
  } else if (path === '/marketing') {
    heading = 'Great communication connects the entire academic journey.';
    subheading = 'Marketing drives your brand — discover how the rest of the Salesforce ecosystem delivers on that promise.';
    cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.ALUMNI];
  } else if (path === '/alumni') {
    heading = 'Your institutional impact doesn\'t end at graduation.';
    subheading = 'Alumni engagement fuels your mission — discover how the rest of the Salesforce ecosystem builds the foundation.';
    cards = [BOXES.RECRUITMENT, BOXES.SUCCESS, BOXES.MARKETING];
  }

  return (
    <section className="bg-neutral-800 py-20 px-6 rounded-none">
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

        {/* 3-column mini-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="bg-neutral-700 rounded-[20px] p-6 flex flex-col gap-3 group hover:bg-neutral-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer no-underline"
            >
              <span
                className="text-[10px] text-neutral-400 uppercase tracking-[1.4px]"
                style={{ fontWeight: 600 }}
              >
                {card.label}
              </span>
              <p className="text-[15px] text-white leading-[1.5] tracking-[-0.3px]" style={{ fontWeight: 600 }}>
                {card.title}
              </p>
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
