import { MessageCircle, MessageSquareMore, Mail, Phone } from 'lucide-react';

/* ── UK Universities list ── */
export const UK_UNIVERSITIES = [
  "University of Oxford", "University of Cambridge", "Imperial College London", "University College London (UCL)",
  "University of Edinburgh", "King's College London", "London School of Economics (LSE)", "University of Manchester",
  "University of Warwick", "University of Bristol", "University of Glasgow", "University of Southampton",
  "University of Birmingham", "University of Leeds", "Durham University", "University of Sheffield",
  "University of Nottingham", "University of St Andrews", "University of Exeter", "Newcastle University",
  "Queen Mary University of London", "University of York", "Cardiff University", "University of Bath",
  "University of Liverpool", "University of Sussex", "University of Reading", "Lancaster University",
  "University of Surrey", "University of Leicester", "University of Aberdeen", "Queen's University Belfast",
  "Heriot-Watt University", "University of East Anglia (UEA)", "Swansea University", "Loughborough University",
  "University of Dundee", "University of Essex", "University of Kent", "University of Portsmouth",
  "University of Strathclyde", "City, University of London", "University of Hull", "Brunel University London",
  "Oxford Brookes University", "University of Stirling", "University of Plymouth", "Aston University",
  "Cranfield University"
];

/* ── Shared UI Components & Logic ── */

/**
 * Pre-rendered list of University Options for datalists.
 * Prevents redundant .map() operations during component re-renders.
 */
export const UNIVERSITY_OPTIONS = UK_UNIVERSITIES.map((name) => (
  <option key={name} value={name} />
));

/**
 * Shared Contact Link Component for consistent branding across Modal, Footer, and CTA.
 */
interface ContactLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

export function ContactLink({ icon: Icon, label, href }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[13px] text-neutral-600 hover:text-black transition-all group py-1"
    >
      <div className="w-8 h-8 flex items-center justify-center border border-zinc-200 bg-white rounded-full group-hover:border-black group-hover:bg-neutral-50 transition-all shrink-0">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <span className="font-medium tracking-tight whitespace-nowrap">{label}</span>
    </a>
  );
}

/* ── Centralized Custom Icons ── */

interface IconProps {
  className?: string;
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8 8.19 8.19 0 0 1 3.3.7l4.1-1.3Z"/>
      <path d="M9.5 9.5a1.5 1.5 0 1 1 3 0c0 .8-.5 1-1 1.5s-1.5 1-1.5 1.5v.5"/>
      <path d="M12 16h.01"/>
    </svg>
  );
}

export function IconMessenger({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8 8.19 8.19 0 0 1 3.3.7l4.1-1.3Z"/>
      <path d="M12 16h.01"/>
    </svg>
  );
}

export function IconEmail({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
