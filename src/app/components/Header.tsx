import { useState } from 'react';
import svgPaths from "../../imports/svg-fitf5bq036";

const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Rozwiązania', href: '#solution' },
  { label: 'Case Studies', href: '#case-study' },
  { label: 'O nas', href: '#contact-form' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="bg-black rounded-[6px] flex items-center justify-center w-7 h-7 shrink-0">
            <div className="w-[13px] h-[13px]">
              <svg fill="none" viewBox="0 0 13 13" className="w-full h-full">
                <g clipPath="url(#hdr-clip)">
                  <path
                    d={svgPaths.p1cfaff00}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.08333"
                  />
                </g>
                <defs>
                  <clipPath id="hdr-clip">
                    <rect fill="white" height="13" width="13" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <span className="text-black text-[17px] tracking-[-0.86px] leading-none" style={{ fontWeight: 600 }}>
            Think Beyond
          </span>
        </div>

        {/* ── Center nav (desktop) ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[14px] text-neutral-600 hover:text-black transition-colors"
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right: CTA + mobile hamburger ── */}
        <div className="flex items-center gap-4">
          <a
            href="#contact-form"
            onClick={handleCTA}
            className="hidden md:inline-block bg-black text-white px-5 py-2 text-[14px] hover:bg-neutral-800 transition-colors rounded-full"
            style={{ fontWeight: 600 }}
          >
            Skonsultuj bezpłatnie
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[15px] text-neutral-700 hover:text-black transition-colors"
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-form"
            onClick={handleCTA}
            className="bg-black text-white text-center px-5 py-3 text-[14px] mt-2 rounded-full"
            style={{ fontWeight: 600 }}
          >
            Skonsultuj bezpłatnie
          </a>
        </div>
      )}
    </header>
  );
}