import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-fitf5bq036";
import { ConsultationModal } from './ConsultationModal';
import { NAV_LINKS } from '../data/navigationContent';

const HEADER_NAV_LINKS = NAV_LINKS;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setMobileOpen(false);
    }
  };

  const handleCTA = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    setIsModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link to="/" className="flex items-center gap-2.5">
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
            <span className="text-black text-[17px] tracking-[-0.86px] leading-none hover:opacity-80 transition-opacity" style={{ fontWeight: 600 }}>
              Think Beyond
            </span>
          </Link>
        </div>

        {/* ── Center nav (desktop) ── */}
        <nav className="hidden md:flex items-center gap-8">
          {HEADER_NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            const hasTooltip = !!link.description;
            
            const linkProps = {
              className: `text-[14px] transition-colors py-2 ${isActive ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'}`,
              style: { fontWeight: isActive ? 600 : 500 },
              onMouseEnter: () => hasTooltip && setHoveredLabel(link.label),
              onMouseLeave: () => setHoveredLabel(null),
            };

            const NavItem = link.href.startsWith('#') ? (
              <a {...linkProps} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
            ) : (
              <Link {...linkProps} to={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>
            );

            return (
              <div key={link.label} className="relative flex flex-col items-center group">
                {NavItem}
                
                {hasTooltip && (
                  <AnimatePresence>
                    {hoveredLabel === link.label && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full mt-2 z-[100] pointer-events-none bg-neutral-800 rounded-[20px] p-6 shadow-2xl border border-neutral-700/50 flex flex-col min-w-[260px] max-w-[280px]"
                      >
                        <p className="text-[13px] text-neutral-400 leading-[1.65]">
                          {link.description}
                        </p>
                        <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 rotate-45 border-l border-t border-neutral-700/50" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── Right: CTA + mobile hamburger ── */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleCTA}
            className="hidden md:inline-block bg-black text-white px-5 py-2 text-[14px] hover:bg-neutral-800 transition-colors rounded-full cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Book a Free Consultation
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
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
          {HEADER_NAV_LINKS.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] text-neutral-700 hover:text-black transition-colors cursor-pointer"
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[15px] transition-colors cursor-pointer ${location.pathname === link.href ? 'text-black font-semibold' : 'text-neutral-700 hover:text-black'}`}
                style={{ fontWeight: location.pathname === link.href ? 600 : 500 }}
              >
                {link.label}
              </Link>
            )
          ))}
          <button
            onClick={handleCTA}
            className="bg-black text-white text-center px-5 py-3 text-[14px] mt-2 rounded-full w-full cursor-pointer hover:bg-neutral-800 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Book a Free Consultation
          </button>
        </div>
      )}

      {/* Global Contact Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname={location.pathname}
      />
    </header>
  );
}