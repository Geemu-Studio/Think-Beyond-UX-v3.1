import { ReactNode } from 'react';

export interface CalculatorStat {
  key: string;
  microcopy: string;
  suffix: (v: number) => ReactNode;
}

export interface CalculatorConfig {
  tagline: string;
  title: string;
  inputLabel: string;
  expertQuote: string;
  min: number;
  max: number;
  step: number;
  initialValue: number;
  ctaText: string;
  stats: CalculatorStat[];
  calculate: (input: number) => Record<string, number>;
  formatDisplay: (results: Record<string, number>) => Record<string, string>;
}

export const CALCULATOR_CONFIGS: Record<string, CalculatorConfig> = {
  default: {
    tagline: "Institutional Impact",
    title: "Measuring the institutional value of academic flourishing.",
    inputLabel: "Annual Student Intake",
    expertQuote: "Student attrition is an institutional failure, not just an individual one. Proactive, data-driven interventions secure both academic journeys and financial resilience.",
    min: 200,
    max: 10000,
    step: 100,
    initialValue: 2500,
    ctaText: "Evaluate Institutional Potential",
    calculate: (students) => ({
      dropouts: Math.round(students * 0.15), // 15% attrition is a common UK HE challenge
      saved: Math.round(students * 0.15 * 0.12), // Securing 12% of at-risk students
      value: Math.round(students * 0.15 * 0.12 * 9250 * 3) // Retention value over 3 years
    }),
    formatDisplay: (results) => ({
      dropouts: results.dropouts.toLocaleString('en-GB'),
      saved: `+${results.saved.toLocaleString('en-GB')}`,
      value: `£${(results.value / 1000000).toFixed(1)}M`
    }),
    stats: [
      {
        key: 'dropouts',
        microcopy: 'Projected student attrition based on current UK HE sectoral benchmarks.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Academic journeys requiring <span style={{ fontWeight: 600 }} className="text-black">strategic intervention and enablement</span>
          </p>
        ),
      },
      {
        key: 'saved',
        microcopy: 'Secured student outcomes through institutional-level engagement strategies.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Individual student outcomes secured through a <span style={{ fontWeight: 600 }} className="text-black">12% uplift in engagement</span>
          </p>
        ),
      },
      {
        key: 'value',
        microcopy: 'Estimated institutional revenue preserved through sustained academic journeys.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            <span style={{ fontWeight: 600 }} className="text-black">Institutional capital potential realised</span> via long-term retention
          </p>
        ),
      },
    ]
  },
  '/enrolment': {
    tagline: "Institutional Impact",
    title: "Calculate the strategic value of admission excellence.",
    inputLabel: "Annual Applicant Volume",
    expertQuote: "Every application you fail to frictionless-enrol is not just a missed fee—it's a lost opportunity to enrich your academic community. Let’s make enrolment a human, strategic moment.",
    min: 500,
    max: 30000,
    step: 500,
    initialValue: 8000,
    ctaText: "Review Enrolment Architecture",
    calculate: (applicants) => ({
      enrolment: Math.round(applicants * 0.18), // 18% conversion rate
      efficiency: 35, // 35% reduction in manual processing
      revenue: Math.round(applicants * 0.18 * 9250)
    }),
    formatDisplay: (results) => ({
      enrolment: results.enrolment.toLocaleString('en-GB'),
      efficiency: `+${results.efficiency}%`,
      revenue: `£${(results.revenue / 1000000).toFixed(1)}M`
    }),
    stats: [
      {
        key: 'enrolment',
        microcopy: 'Projected enrolment volume based on higher-intent applicant conversion.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Qualified students comfortably <span style={{ fontWeight: 600 }} className="text-black">transitioning from applicant to learner</span>
          </p>
        ),
      },
      {
        key: 'efficiency',
        microcopy: 'Operational capacity regained through intelligent decision support.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Reduction in <span style={{ fontWeight: 600 }} className="text-black">Administrative Friction</span> across the admissions cycle
          </p>
        ),
      },
      {
        key: 'revenue',
        microcopy: 'Tuition revenue secured through improved recruitment funnels.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Institutional <span style={{ fontWeight: 600 }} className="text-black">capital potential unlocked</span> for academic reinvestment
          </p>
        ),
      },
    ]
  },
  '/flourishing': {
    tagline: "Institutional Impact",
    title: "Projecting the institutional ROI of proactive support.",
    inputLabel: "Student Population",
    expertQuote: "Student attrition is an institutional failure, not just an individual one. Proactive, data-driven interventions secure both academic journeys and financial resilience.",
    min: 1000,
    max: 50000,
    step: 1000,
    initialValue: 15000,
    ctaText: "Audit Student Enablement Models",
    calculate: (population) => ({
      atRisk: Math.round(population * 0.08), // 8% identified as at-risk early
      retention: Math.round(population * 0.08 * 0.25), // 25% of at-risk students successfully retained
      wellbeing: 40 // 40% increase in wellbeing engagement
    }),
    formatDisplay: (results) => ({
      atRisk: results.atRisk.toLocaleString('en-GB'),
      retention: `+${results.retention.toLocaleString('en-GB')}`,
      wellbeing: `+${results.wellbeing}%`
    }),
    stats: [
      {
        key: 'atRisk',
        microcopy: 'Identified through predictive behavioral engagement indicators.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Students benefited from <span style={{ fontWeight: 600 }} className="text-black">predictive intervention models</span> earlier in the cycle
          </p>
        ),
      },
      {
        key: 'retention',
        microcopy: 'Sustained academic journeys following strategic support interventions.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Learners <span style={{ fontWeight: 600 }} className="text-black">successfully progressing</span> toward their academic potential
          </p>
        ),
      },
      {
        key: 'wellbeing',
        microcopy: 'Improvement in student sentiment and support service utilisation.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Uplift in <span style={{ fontWeight: 600 }} className="text-black">institutional belonging and wellbeing</span> metrics
          </p>
        ),
      },
    ]
  },
  '/engagement': {
    tagline: "Institutional Impact",
    title: "Quantifying the resonance of authentic engagement.",
    inputLabel: "Monthly Digital Engagements",
    expertQuote: "Generic communication gets lost in the noise. By orchestrating authentic, personalised journeys, we turn passive prospects into proud alumni.",
    min: 5000,
    max: 200000,
    step: 5000,
    initialValue: 50000,
    ctaText: "Evaluate Strategic Influence",
    calculate: (engagements) => ({
      conversion: Math.round(engagements * 0.02 * 1.4), // 40% improvement in 2% conversion
      cpa: 22, // 22% reduction in CPA
      equity: 15 // 15% increase in brand sentiment equity
    }),
    formatDisplay: (results) => ({
      conversion: results.conversion.toLocaleString('en-GB'),
      cpa: `-${results.cpa}%`,
      equity: `+${results.equity}%`
    }),
    stats: [
      {
        key: 'conversion',
        microcopy: 'Strategic conversion of casual interest into qualified institutional prospects.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Prospective learners <span style={{ fontWeight: 600 }} className="text-black">committing to formal inquiry</span> and engagement
          </p>
        ),
      },
      {
        key: 'cpa',
        microcopy: 'Optimised strategic engagement spend via high-precision audience targeting.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Reduction in <span style={{ fontWeight: 600 }} className="text-black">Strategic Acquisition Costs</span> across digital channels
          </p>
        ),
      },
      {
        key: 'equity',
        microcopy: 'Modelled growth in institutional brand perception and sentiment.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Strengthening of <span style={{ fontWeight: 600 }} className="text-black">Institutional Brand Equity</span> and strategic reach
          </p>
        ),
      },
    ]
  },
  '/advancement': {
    tagline: "Institutional Impact",
    title: "Evaluating the strategic yield of lifelong affinity.",
    inputLabel: "Active Alumni Database",
    expertQuote: "Transactional fundraising yields transactional results. Cultivating a lifelong, engaged alumni community unlocks exponential philanthropic potential.",
    min: 10000,
    max: 500000,
    step: 10000,
    initialValue: 80000,
    ctaText: "Evaluate Advancement Potential",
    calculate: (alumni) => ({
      participation: Math.round(alumni * 0.05 * 1.6), // 60% boost in 5% participation
      yield: Math.round(alumni * 0.05 * 1.6 * 125), // £125 average gift
      volunteers: Math.round(alumni * 0.05 * 0.15) // volunteers
    }),
    formatDisplay: (results) => ({
      participation: results.participation.toLocaleString('en-GB'),
      yield: `£${(results.yield / 1000000).toFixed(2)}M`,
      volunteers: `+${results.volunteers.toLocaleString('en-GB')}`
    }),
    stats: [
      {
        key: 'participation',
        microcopy: 'Active engagement within the institutional philanthropic ecosystem.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Graduates <span style={{ fontWeight: 600 }} className="text-black">actively participating</span> in advancement cycles
          </p>
        ),
      },
      {
        key: 'yield',
        microcopy: 'Projected philanthropic donation volume from engaged alumni.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Realised <span style={{ fontWeight: 600 }} className="text-black">Philanthropic Yield</span> for institutional development
          </p>
        ),
      },
      {
        key: 'volunteers',
        microcopy: 'Growth in alumni volunteering and strategic mentorship roles.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Secured <span style={{ fontWeight: 600 }} className="text-black">Human Capital reinvestment</span> in student mentoring
          </p>
        ),
      },
    ]
  },
  '/enterprise': {
    tagline: "Institutional Impact",
    title: "Measuring the innovation velocity of institutional partnerships.",
    inputLabel: "Active Corporate Engagements",
    expertQuote: "Corporate partnerships shouldn't be siloed. Unifying your enterprise relations unlocks new revenue streams and amplifies your institutional impact.",
    min: 50,
    max: 2500,
    step: 50,
    initialValue: 500,
    ctaText: "Review Enterprise Strategy",
    calculate: (engagements) => ({
      revenue: Math.round(engagements * 0.06 * 35000), // 6% conversion, £35k avg value
      efficiency: 28, // 28% increase in grant admin efficiency
      velocity: 45 // 45% increase in innovation velocity
    }),
    formatDisplay: (results) => ({
      revenue: `£${(results.revenue / 1000000).toFixed(1)}M`,
      efficiency: `+${results.efficiency}%`,
      velocity: `+${results.velocity}%`
    }),
    stats: [
      {
        key: 'revenue',
        microcopy: 'Projected commercial revenue from executive education and corporate partnerships.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Realised <span style={{ fontWeight: 600 }} className="text-black">Commercial Revenue Potential</span> through strategic scaling
          </p>
        ),
      },
      {
        key: 'efficiency',
        microcopy: 'Operational capacity regained through automated research grant administration.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Improvement in <span style={{ fontWeight: 600 }} className="text-black">Grant Admin Efficiency</span> across the lifecycle
          </p>
        ),
      },
      {
        key: 'velocity',
        microcopy: 'Modelled acceleration in technology transfer and knowledge exchange cycles.',
        suffix: () => (
          <p className="text-[13px] text-neutral-600 leading-[1.6]">
            Uplift in <span style={{ fontWeight: 600 }} className="text-black">Innovation Velocity</span> and commercial reach
          </p>
        ),
      },
    ]
  }
};
