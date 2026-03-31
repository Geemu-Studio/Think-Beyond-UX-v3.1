export const NAVIGATION_CONTENT = {
  PLATFORM: {
    label: 'Salesforce Education Cloud',
    title: 'Integrated Platform',
    body: 'A unified student lifecycle ecosystem. Seamlessly connect every touchpoint into one intelligent, purpose-driven Salesforce environment.',
    linkText: 'Learn More →',
    href: '/',
  },
  RECRUITMENT: {
    label: 'Salesforce Education Cloud',
    title: 'Enrolment Architecture',
    body: 'Empower your institution to attract global talent. Eliminate application barriers and build frictionless, highly personalized enrolment journeys.',
    linkText: 'Explore Enrolment →',
    href: '/enrolment',
  },
  SUCCESS: {
    label: 'Salesforce Education Cloud',
    title: 'Academic Flourishing & Retention',
    body: 'Shift from reactive support to proactive care. Leverage data-driven early alerts to boost retention and ensure holistic student wellbeing.',
    linkText: 'Explore Student Success →',
    href: '/flourishing',
  },
  MARKETING: {
    label: 'Salesforce Education Cloud',
    title: 'Institutional Brand Engagement',
    body: 'Break down data silos and cut through the digital noise. Build automated, omnichannel engagement paths driven by authentic storytelling.',
    linkText: 'Explore Engagement →',
    href: '/engagement',
  },
  ALUMNI: {
    label: 'Salesforce Education Cloud',
    title: 'Philanthropic Advancement',
    body: 'Cultivate a loyal global community. Transform transactional fundraising into lifelong relationships and executive education opportunities.',
    linkText: 'Explore Advancement →',
    href: '/advancement',
  }
};

export const NAV_LINKS = [
  { label: 'Ecosystem', href: NAVIGATION_CONTENT.PLATFORM.href, description: NAVIGATION_CONTENT.PLATFORM.body },
  { label: 'Enrolment', href: NAVIGATION_CONTENT.RECRUITMENT.href, description: NAVIGATION_CONTENT.RECRUITMENT.body },
  { label: 'Flourishing', href: NAVIGATION_CONTENT.SUCCESS.href, description: NAVIGATION_CONTENT.SUCCESS.body },
  { label: 'Engagement', href: NAVIGATION_CONTENT.MARKETING.href, description: NAVIGATION_CONTENT.MARKETING.body },
  { label: 'Advancement', href: NAVIGATION_CONTENT.ALUMNI.href, description: NAVIGATION_CONTENT.ALUMNI.body },
];
