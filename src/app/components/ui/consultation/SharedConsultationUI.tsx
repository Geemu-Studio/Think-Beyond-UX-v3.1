import React from 'react';

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

/* ── Centralized SVG Icons ── */
export function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  );
}

export function IconMessenger() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  );
}

export function IconEmail() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="3.5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 4.5L7 7.5L11.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3.5 2.5C3 2.5 2.5 3 2.5 3.5C2.5 8.5 5.5 11.5 10.5 11.5C11 11.5 11.5 11 11.5 10.5V8.5C11.5 8 11 7.5 10.5 7.5H9.5C9 7.5 8.5 8 8.5 8.5V9C6.5 8.5 5.5 7.5 5 5.5H5.5C6 5.5 6.5 5 6.5 4.5V3.5C6.5 3 6 2.5 5.5 2.5H3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
