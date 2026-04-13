export const NAVIGATION_CONTENT = {
  PLATFORM: {
    label: 'Salesforce Education Cloud',
    title: 'Integrated Platform',
    body: 'A unified student lifecycle ecosystem. Seamlessly connect every touchpoint into one intelligent, purpose-driven Salesforce environment.',
    linkText: 'Learn More →',
    href: '/ecosystem',
  },
  ADMISSIONS: {
    label: 'Salesforce Education Cloud',
    title: 'Strategic Admissions',
    body: 'Empower your institution to attract global talent. Eliminate application barriers and build frictionless, highly personalised admissions journeys.',
    linkText: 'Explore Admissions →',
    href: '/admissions',
  },
  RETENTION: {
    label: 'Salesforce Education Cloud',
    title: 'Student Success & Retention',
    body: 'Shift from reactive support to proactive care. Leverage data-driven early alerts to boost student retention and ensure holistic academic success.',
    linkText: 'Explore Retention →',
    href: '/retention',
  },
  ENGAGEMENT: {
    label: 'Salesforce Education Cloud',
    title: 'Institutional Engagement',
    body: 'Break down data silos and cut through digital noise. Build automated, omnichannel communication paths driven by secure institutional data.',
    linkText: 'Explore Engagement →',
    href: '/engagement',
  },
  ALUMNI: {
    label: 'Salesforce Education Cloud',
    title: 'Alumni & Development',
    body: 'Cultivate a loyal global community. Transform transactional philanthropic cycles into lifelong alumni relationships and strategic development opportunities.',
    linkText: 'Explore Alumni →',
    href: '/alumni',
  },
  PARTNERSHIPS: {
    label: 'Salesforce Education Cloud',
    title: 'Corporate Partnerships',
    body: 'Catalyse research collaboration and diversify institutional revenue streams through strategic corporate and industry partnerships.',
    linkText: 'Explore Partnerships →',
    href: '/partnerships',
  }
};

export const NAV_LINKS = [
  { label: 'Ecosystem', href: NAVIGATION_CONTENT.PLATFORM.href, description: NAVIGATION_CONTENT.PLATFORM.body },
  { label: 'Admissions', href: NAVIGATION_CONTENT.ADMISSIONS.href, description: NAVIGATION_CONTENT.ADMISSIONS.body },
  { label: 'Retention', href: NAVIGATION_CONTENT.RETENTION.href, description: NAVIGATION_CONTENT.RETENTION.body },
  { label: 'Engagement', href: NAVIGATION_CONTENT.ENGAGEMENT.href, description: NAVIGATION_CONTENT.ENGAGEMENT.body },
  { label: 'Alumni', href: NAVIGATION_CONTENT.ALUMNI.href, description: NAVIGATION_CONTENT.ALUMNI.body },
  { label: 'Partnerships', href: NAVIGATION_CONTENT.PARTNERSHIPS.href, description: NAVIGATION_CONTENT.PARTNERSHIPS.body },
];
