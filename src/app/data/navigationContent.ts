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
    title: 'Recruitment & Admissions',
    body: 'Empower your institution to attract global talent. Eliminate application barriers and build frictionless, highly personalized enrolment journeys.',
    linkText: 'Explore Recruitment →',
    href: '/recruitment',
  },
  SUCCESS: {
    label: 'Salesforce Education Cloud',
    title: 'Student Success & Retention',
    body: 'Shift from reactive support to proactive care. Leverage data-driven early alerts to boost retention and ensure holistic student wellbeing.',
    linkText: 'Explore Student Success →',
    href: '/student-success',
  },
  MARKETING: {
    label: 'Salesforce Education Cloud',
    title: 'Marketing & Communications',
    body: 'Break down data silos and cut through the digital noise. Build automated, omnichannel engagement paths driven by authentic storytelling.',
    linkText: 'Explore Marketing →',
    href: '/marketing',
  },
  ALUMNI: {
    label: 'Salesforce Education Cloud',
    title: 'Alumni & Lifelong Learning',
    body: 'Cultivate a loyal global community. Transform transactional fundraising into lifelong relationships and executive education opportunities.',
    linkText: 'Explore Alumni →',
    href: '/alumni',
  }
};

export const NAV_LINKS = [
  { label: 'Platform', href: NAVIGATION_CONTENT.PLATFORM.href, description: NAVIGATION_CONTENT.PLATFORM.body },
  { label: 'Recruitment', href: NAVIGATION_CONTENT.RECRUITMENT.href, description: NAVIGATION_CONTENT.RECRUITMENT.body },
  { label: 'Student Success', href: NAVIGATION_CONTENT.SUCCESS.href, description: NAVIGATION_CONTENT.SUCCESS.body },
  { label: 'Marketing', href: NAVIGATION_CONTENT.MARKETING.href, description: NAVIGATION_CONTENT.MARKETING.body },
  { label: 'Alumni', href: NAVIGATION_CONTENT.ALUMNI.href, description: NAVIGATION_CONTENT.ALUMNI.body },
];
