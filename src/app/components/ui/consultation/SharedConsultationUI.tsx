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

/* ── Centralized Lucide Icons ── */
export function IconWhatsApp() {
  return <MessageCircle size={14} strokeWidth={2} />;
}

export function IconMessenger() {
  return <MessageSquareMore size={14} strokeWidth={2} />;
}

export function IconEmail() {
  return <Mail size={14} strokeWidth={2} />;
}

export function IconPhone() {
  return <Phone size={14} strokeWidth={2} />;
}
