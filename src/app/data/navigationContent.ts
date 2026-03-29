export const NAVIGATION_CONTENT = {
  RECRUITMENT: {
    label: 'Salesforce Education Cloud',
    title: 'Recruitment & Admissions',
    body: 'Shape the future of your institution. Attract, engage, and enrol the world’s brightest minds with purpose-driven recruitment.',
    linkText: 'Explore Recruitment →',
    href: '/recruitment',
  },
  SUCCESS: {
    label: 'Salesforce Education Cloud',
    title: 'Student Success & Retention',
    body: 'Move from reactive support to proactive care. Build a connected campus where every student is empowered to graduate.',
    linkText: 'Explore Student Success →',
    href: '/student-success',
  },
  MARKETING: {
    label: 'Salesforce Education Cloud',
    title: 'Marketing & Communications',
    body: 'Orchestrate highly personalised, omnichannel journeys that build lifelong institutional loyalty and brand advocacy.',
    linkText: 'Explore Marketing →',
    href: '/marketing',
  },
  ALUMNI: {
    label: 'Salesforce Education Cloud',
    title: 'Alumni & Lifelong Learning',
    body: 'Cultivate lasting relationships with your graduates and build a global network that supports continuous education.',
    linkText: 'Explore Alumni & Lifelong Learning →',
    href: '/alumni',
  }
};

export const NAV_LINKS = [
  { label: 'Platform', href: '/' },
  { label: 'Recruitment', href: NAVIGATION_CONTENT.RECRUITMENT.href, description: NAVIGATION_CONTENT.RECRUITMENT.body },
  { label: 'Student Success', href: NAVIGATION_CONTENT.SUCCESS.href, description: NAVIGATION_CONTENT.SUCCESS.body },
  { label: 'Marketing', href: NAVIGATION_CONTENT.MARKETING.href, description: NAVIGATION_CONTENT.MARKETING.body },
  { label: 'Alumni', href: NAVIGATION_CONTENT.ALUMNI.href, description: NAVIGATION_CONTENT.ALUMNI.body },
];
