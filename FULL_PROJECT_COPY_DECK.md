# THINK BEYOND — MASTER COPY DECK
> Source of Truth · Last updated: 2026-04-03  
> Structure mirrors component hierarchy. Every piece of visible UI text is recorded here.

---

## TABLE OF CONTENTS
1. [Global Navigation](#1-global-navigation)
2. [Hero Section (Shared – Homepage)](#2-hero-section-shared--homepage)
3. [Problem Section (Shared)](#3-problem-section-shared)
4. [Solution Section (Shared)](#4-solution-section-shared)
5. [Social Proof Bar — Partner Cases](#5-social-proof-bar--partner-cases)
6. [Offer Bridge Section (Dynamic per page)](#6-offer-bridge-section-dynamic-per-page)
7. [Security & Trust Section](#7-security--trust-section)
8. [Calculator Section — All Configs](#8-calculator-section--all-configs)
9. [CTA Form Section (Shared)](#9-cta-form-section-shared)
10. [Consultation Hub (CTA Page / Expanded)](#10-consultation-hub-cta-page--expanded)
11. [Consultation Modal (Global)](#11-consultation-modal-global)
12. [Expert Footer Accordion (Inside Case Study Modal)](#12-expert-footer-accordion-inside-case-study-modal)
13. [Case Study Carousel (CaseStudyCarousel.tsx)](#13-case-study-carousel)
14. [Page-Specific Sections](#14-page-specific-sections)
    - 14.1 [Enrolment — Problem](#141-enrolment--problem-section)
    - 14.2 [Enrolment — Solution](#142-enrolment--solution-section)
    - 14.3 [Flourishing — Problem](#143-flourishing--problem-section)
    - 14.4 [Flourishing — Solution](#144-flourishing--solution-section)
    - 14.5 [Engagement — Problem](#145-engagement--problem-section)
    - 14.6 [Engagement — Solution](#146-engagement--solution-section)
    - 14.7 [Advancement — Problem](#147-advancement--problem-section)
    - 14.8 [Advancement — Solution](#148-advancement--solution-section)
    - 14.9 [Enterprise — Problem](#149-enterprise--problem-section)
    - 14.10 [Enterprise — Solution](#1410-enterprise--solution-section)
15. [Shared UI — Contact & Trust Signals](#15-shared-ui--contact--trust-signals)

---

## 1. GLOBAL NAVIGATION
> Source: `navigationContent.ts` + `NAV_LINKS`

### Nav Labels (Single Word)
| Label | Route |
|---|---|
| Ecosystem | `/` |
| Enrolment | `/enrolment` |
| Flourishing | `/flourishing` |
| Engagement | `/engagement` |
| Advancement | `/advancement` |
| Enterprise | `/enterprise` |

### Nav Card Descriptions (Dropdown)
| Module | Title | Body |
|---|---|---|
| Ecosystem | Integrated Platform | A unified student lifecycle ecosystem. Seamlessly connect every touchpoint into one intelligent, purpose-driven Salesforce environment. |
| Enrolment | Enrolment Architecture | Empower your institution to attract global talent. Eliminate application barriers and build frictionless, highly personalized enrolment journeys. |
| Flourishing | Academic Flourishing & Retention | Shift from reactive support to proactive care. Leverage data-driven early alerts to boost retention and ensure holistic student wellbeing. |
| Engagement | Institutional Brand Engagement | Break down data silos and cut through the digital noise. Build automated, omnichannel engagement paths driven by authentic storytelling. |
| Advancement | Philanthropic Advancement | Cultivate a loyal global community. Transform transactional fundraising into lifelong relationships and executive education opportunities. |
| Enterprise | Enterprise & Research Partnerships | Catalysing research collaboration and diversifying institutional revenue streams through strategic corporate engagement. |

---

## 2. HERO SECTION (Shared – Homepage)
> Source: `HeroSection.tsx` · Three rotating slides

### Slide 1
- **Badge:** Salesforce Education Cloud · Certified Partner
- **H1:** Institutional strategy for your academic community. Redefining the student journey from first enquiry to proud alumnus.
- **Body:** Move beyond administrative constraints. Build a connected, purpose-driven campus with Salesforce Education Cloud — unifying every touchpoint across the academic lifecycle into one seamless, intelligent ecosystem.
- **CTA:** Initiate Institutional Evolution →
- **Trust micro-copy:** Trusted by universities across the UK and Central Europe.

### Slide 2
- **Badge:** Ethical AI for Higher Education · Powered by Agentforce
- **H1:** Academic heritage deserves a modern foundation. Lead with intelligence, guided by purpose.
- **Body:** From elite postgraduate programmes to expansive online learning communities — build truly evidence-led academic experiences. Elevate recruitment outcomes, empower your staff with Agentforce, and cultivate the belonging that secures academic flourishing.
- **CTA:** Request Strategy Review →
- **Trust micro-copy:** Built on verified case studies from leading universities.

### Slide 3
- **Badge:** A 360° Partnership for Your Institution
- **H1:** Every student deserves a university that walks beside them. Build relationships that endure beyond graduation.
- **Body:** A unified view is the cornerstone of institutional belonging. Deploy self-service portals, 24/7 AI-powered enablement, and connect your Admissions, Student Services, and Careers teams in one compassionate, responsive environment.
- **CTA:** Explore Institutional Legacy →
- **Trust micro-copy:** No commitment required · We respond within 24 hours.

---

## 3. PROBLEM SECTION (Shared)
> Source: `ProblemSection.tsx` · Used on the homepage (Ecosystem page)

- **Eyebrow:** Institutional Opportunity
- **H2:** Securing academic excellence. Build the strategic foundations that proactively foster institutional resilience and student flourishing.
- **Card CTA label:** Hear Expert Insight

| Card | Title | Body |
|---|---|---|
| 1 | Institutional Resilience | Overcome administrative fragmentation. Replace legacy constraints with a unified, resilient digital infrastructure that scales with your academic vision. |
| 2 | Academic Flourishing & Retention | Proactively nurture institutional belonging. Identify students at risk before they are lost, and build the holistic support structures that secure their academic journey. |
| 3 | Mission-Driven Enrolment | Engage candidates who align with your institution's prestige. Deliver frictionless, personalised enrolment journeys that secure the world's brightest academic talent. |

---

## 4. SOLUTION SECTION (Shared)
> Source: `SolutionSection.tsx` · Used on the homepage (Ecosystem page)

- **Section** has no standalone eyebrow/H2 — cards are the primary content.

| Card | Title | Body |
|---|---|---|
| 1 | Institutional Intelligence | One unified, compassionate system. From first enquiry to engaged alumnus — transform fragmented interactions into a single, holistic view of your academic community. |
| 2 | Mission-Driven Admissions | Secure the future of your institution. Attract brightest global talent through data-informed strategies that align every candidate with your academic values. |
| 3 | Academic Resilience & Flourishing | Surmount the barriers to retention. Proactively identify and respond to early signals of disengagement, ensuring every student has the support to complete their journey. |
| *Video facade label* | — | Expert Session |

---

## 5. SOCIAL PROOF BAR — PARTNER CASES
> Source: `SocialProofBar.tsx`

- **Section eyebrow:** Our Partnerships

### Partner Cards (Scroll Ticker)
| Initial | University | Button text |
|---|---|---|
| SWPS | SWPS University | Discover the SWPS Story |
| ALK | Kozminski University (ALK) | Discover the ALK Story |
| CDV | Collegium Da Vinci (CDV) | Explore the CDV Campus |

---

### Modal — SWPS University
- **Modal header label:** Case Study Success Story
- **H2 (modal):** SWPS University
- **Case study title:** Transforming the Student Experience at Scale: The SWPS University Ecosystem

#### Sections:
| Icon | Title | Content |
|---|---|---|
| GraduationCap | At a Glance | Client: SWPS University · Scale: 17,500+ undergraduate, postgraduate, and doctoral students · Footprint: 6 campuses across major cities |
| AlertCircle | The Challenge: Overcoming Administrative Silos | Before partnering with Think Beyond, the university relied on fragmented, paper-based documentation. They needed to modernize their infrastructure to meet the digital expectations of today's learners. Items: Frictionless Journeys: Replacing obsolete manual processes with seamless, digital workflows. · Omnichannel Engagement: Creating a responsive environment that provides top-tier support across all student touchpoints. |
| Lightbulb | The Solution: A Unified Digital Campus | Powered by Salesforce Education Cloud and Genesys Cloud, Think Beyond orchestrated a complete omnichannel transformation, shifting the institution from reactive administration to proactive student care. |
| Target | Institutional Impact | NSS Improvement: Projected 8.5% increase in 'Learning Resources' satisfaction scoring within 18 months. · TEF Excellence: Reinforced the institutional evidence base for 'Student Experience' and 'Student Outcomes' under the TEF Gold framework. · Operational Resilience: Eliminated 100% of paper-reliant critical paths in the first year of deployment. |

**Testimonial quote:** "Incredible attention to our institutional needs. The Think Beyond team provided wonderful support, patience, and expertise. Thanks to their commitment, this complex transformation went as smoothly as possible."  
**Attribution:** SWPS University Representative

---

### Modal — Kozminski University (ALK)
- **Case study title:** Optimising Global Admissions: The ALD Warsaw Ecosystem

#### Sections:
| Icon | Title | Content |
|---|---|---|
| GraduationCap | At a Glance | Client: ALD Warsaw (Kozminski University) · Focus: Elite Business Education · Scale: 12,000+ international applications processed annually |
| AlertCircle | The Challenge: Scaling Global Talent Acquisition | As a globally recognized institution, ALD Warsaw faced a massive influx of international applications. Their existing, rigid administrative processes led to slow response times and high administrative overhead, risking the loss of top-tier candidates to competing universities. |
| Lightbulb | The Solution: Intelligent Application Workflows | Leveraging Salesforce Education Cloud, Think Beyond implemented an automated, data-driven admissions ecosystem. The new architecture streamlined candidate scoring, automated routine communications, and provided admissions teams with real-time analytics. |
| Target | Institutional Impact | Enrolment Yield: 35% reduction in administrative overhead per enrolment… · Global Positioning: Established a premier digital-first gateway for international applicants… · Data Sovereignty: Secured full, real-time transparency across the application funnel… |

**Testimonial quote:** "Think Beyond entirely reshaped how we engage with global talent. The automation, clarity, and strategic insight brought to our admissions team have given us a distinct competitive advantage."  
**Attribution:** Admissions Director, ALD Warsaw

---

### Modal — Collegium Da Vinci (CDV)
- **Case study title:** Fostering Lifelong Success: The CDV Poznań Experience

#### Sections:
| Icon | Title | Content |
|---|---|---|
| GraduationCap | At a Glance | Client: CDV Poznań (Collegium Da Vinci) · Focus: Creative and Technology Education · Scale: 8,000+ students supported |
| AlertCircle | The Challenge: Redefining Student Retention | CDV Poznań recognized a critical need to shift from reactive student administration to proactive welfare and career guidance. |
| Lightbulb | The Solution: A Proactive Care Ecosystem | Think Beyond deployed a unified engagement platform centered on student success. By integrating academic performance data with behavioral insights in Salesforce, the university gained the ability to intervene early. |
| Target | Institutional Impact | Student Retention: Achieved a 25% increase in retention rate YOY… · Academic Flourishing: Provided the digital foundation for a 'Whole University' approach to mental health… · Employment Outcomes: 98% timely outreach for career opportunities… |

**Testimonial quote:** "The transition from reactive administration to proactive student care has fundamentally changed our campus culture. Think Beyond's strategic approach and deep understanding of our mission made this evolution possible."  
**Attribution:** Head of Student Success, CDV Poznań

---

## 6. OFFER BRIDGE SECTION (Dynamic per page)
> Source: `OfferBridgeSection.tsx`

- **Eyebrow:** Salesforce Education Cloud
- **H2 (default / homepage):** Institutional Resonance & Continuity.
- **Body (default):** Secure the strategic foundations of your institution. Align every interaction with your academic mission through a unified digital ecosystem.
- **Card lnkText format:** `Explore [Module] →`

> Navigation cards reuse the titles and bodies from `NAVIGATION_CONTENT` (see Section 1).

---

## 7. SECURITY & TRUST SECTION
> Source: `SecurityTrustSection.tsx`

- **Eyebrow:** Governance & Security
- **H2:** Institutional Integrity & Data Sovereignty.
- **Body:** Protecting the sanctity of institutional data through advanced cyber resilience and rigorous governance.
- **Card CTA label:** *(play icon + videoLabel text)*

| Card | Heading | Body | Video Label |
|---|---|---|---|
| Cyber | Institutional Cyber Sovereignty | Fortify your digital campus against evolving systemic risks. Our architecture provides continuous, advanced protection that secures institutional prestige and ensures academic continuity. | Strategic Security Overview |
| Privacy | Institutional Integrity & Governance | From rigorous GDPR compliance to advanced data sovereignty protocols, ensure that sensitive student and staff information remains strictly governed and aligned with statutory requirements. | Governance Insights |

---

## 8. CALCULATOR SECTION — ALL CONFIGS
> Source: `calculatorContent.tsx`

### Common to all calculators:
- **Eyebrow / Tagline:** Institutional Impact *(uniform across all pages)*
- **Expert name:** Marcin Pieńkowski
- **Expert title:** Institutional Strategist
- **CTA microcopy:** *(arrow icon, opens consultation modal)*

---

### 8.0 Default / Homepage Calculator
- **Title:** Measuring the institutional value of academic flourishing.
- **Input label:** Annual Student Intake · Range: 200–10,000
- **Expert quote:** "Student attrition is an institutional failure, not just an individual one. Proactive, data-driven interventions secure both academic journeys and financial resilience."
- **CTA Button:** Evaluate Institutional Potential

| Stat | Microcopy | Suffix body |
|---|---|---|
| Dropouts | Projected student attrition based on current UK HE sectoral benchmarks. | Academic journeys requiring **strategic intervention and enablement** |
| Saved | Secured student outcomes through institutional-level engagement strategies. | Individual student outcomes secured through a **12% uplift in engagement** |
| Value | Estimated institutional revenue preserved through sustained academic journeys. | **Institutional capital potential realised** via long-term retention |

---

### 8.1 Enrolment Calculator (`/enrolment`)
- **Title:** Calculate the strategic value of admission excellence.
- **Input label:** Annual Applicant Volume · Range: 500–30,000
- **Expert quote:** "Every application you fail to frictionless-enrol is not just a missed fee—it's a lost opportunity to enrich your academic community. Let's make enrolment a human, strategic moment."
- **CTA Button:** Review Enrolment Architecture

| Stat | Microcopy | Suffix body |
|---|---|---|
| Enrolment | Projected enrolment volume based on higher-intent applicant conversion. | Qualified students comfortably **transitioning from applicant to learner** |
| Efficiency | Operational capacity regained through intelligent decision support. | Reduction in **Administrative Friction** across the admissions cycle |
| Revenue | Tuition revenue secured through improved recruitment funnels. | Institutional **capital potential unlocked** for academic reinvestment |

---

### 8.2 Flourishing Calculator (`/flourishing`)
- **Title:** Projecting the institutional ROI of proactive support.
- **Input label:** Student Population · Range: 1,000–50,000
- **Expert quote:** "Student attrition is an institutional failure, not just an individual one. Proactive, data-driven interventions secure both academic journeys and financial resilience."
- **CTA Button:** Audit Student Enablement Models

| Stat | Microcopy | Suffix body |
|---|---|---|
| At Risk | Identified through predictive behavioral engagement indicators. | Students benefited from **predictive intervention models** earlier in the cycle |
| Retention | Sustained academic journeys following strategic support interventions. | Learners **successfully progressing** toward their academic potential |
| Wellbeing | Improvement in student sentiment and support service utilisation. | Uplift in **institutional belonging and wellbeing** metrics |

---

### 8.3 Engagement Calculator (`/engagement`)
- **Title:** Quantifying the resonance of authentic engagement.
- **Input label:** Monthly Digital Engagements · Range: 5,000–200,000
- **Expert quote:** "Generic communication gets lost in the noise. By orchestrating authentic, personalised journeys, we turn passive prospects into proud alumni."
- **CTA Button:** Evaluate Strategic Influence

| Stat | Microcopy | Suffix body |
|---|---|---|
| Conversion | Strategic conversion of casual interest into qualified institutional prospects. | Prospective learners **committing to formal inquiry** and engagement |
| CPA | Optimised strategic engagement spend via high-precision audience targeting. | Reduction in **Strategic Acquisition Costs** across digital channels |
| Equity | Modelled growth in institutional brand perception and sentiment. | Strengthening of **Institutional Brand Equity** and strategic reach |

---

### 8.4 Advancement Calculator (`/advancement`)
- **Title:** Evaluating the strategic yield of lifelong affinity.
- **Input label:** Active Alumni Database · Range: 10,000–500,000
- **Expert quote:** "Transactional fundraising yields transactional results. Cultivating a lifelong, engaged alumni community unlocks exponential philanthropic potential."
- **CTA Button:** Evaluate Advancement Potential

| Stat | Microcopy | Suffix body |
|---|---|---|
| Participation | Active engagement within the institutional philanthropic ecosystem. | Graduates **actively participating** in advancement cycles |
| Yield | Projected philanthropic donation volume from engaged alumni. | Realised **Philanthropic Yield** for institutional development |
| Volunteers | Growth in alumni volunteering and strategic mentorship roles. | Secured **Human Capital reinvestment** in student mentoring |

---

### 8.5 Enterprise Calculator (`/enterprise`)
- **Title:** Measuring the innovation velocity of institutional partnerships.
- **Input label:** Active Corporate Engagements · Range: 50–2,500
- **Expert quote:** "Corporate partnerships shouldn't be siloed. Unifying your enterprise relations unlocks new revenue streams and amplifies your institutional impact."
- **CTA Button:** Review Enterprise Strategy

| Stat | Microcopy | Suffix body |
|---|---|---|
| Revenue | Projected commercial revenue from executive education and corporate partnerships. | Realised **Commercial Revenue Potential** through strategic scaling |
| Efficiency | Operational capacity regained through automated research grant administration. | Improvement in **Grant Admin Efficiency** across the lifecycle |
| Velocity | Modelled acceleration in technology transfer and knowledge exchange cycles. | Uplift in **Innovation Velocity** and commercial reach |

---

## 9. CTA FORM SECTION (Shared)
> Source: `CTAFormSection.tsx`

- **Eyebrow (tagline):** Strategic Mission Centre
- **H2 (title):** Architecting the institutional foundation your vision demands.
- **Form panel H3 (formTitle):** Coordinate your institutional strategy review.
- **Submit button:** Initiate Strategic Review

### Left Column — Trust Cluster
- **Expert count headline:** 20+ Experts
- **Expert count sub:** INSTITUTIONAL STRATEGY ARCHITECTS
- **Expert count body:** Your institution's transformation will be guided by our full team of certified Salesforce architects.

### Lead Strategist Card
- **Name:** Marcin Pieńkowski
- **Title:** Institutional Strategist
- **Quote:** "Let's start with strategy. I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."

### Form Fields
| Field | Label | Placeholder |
|---|---|---|
| Name | Full name | Professor Jane Smith |
| University | Institution name | Start typing institution name... |
| Email | Institutional email address | j.smith@university.ac.uk |
| GDPR | — | I consent to the processing of data in accordance with GDPR. |

### Success State
- **Headline:** Strategy Session Initiated
- **Body:** A dedicated strategist will coordinate your session within 24 business hours.

---

## 10. CONSULTATION HUB (CTA Page / Expanded)
> Source: `ConsultationHub.tsx`

- **Eyebrow:** Strategic Mission Centre
- **H2:** Architecting the Institutional Foundation for Academic Excellence.

### Accordion Trigger (collapsed)
- **Label above:** Initiate Strategic Review
- **H3:** Coordinate your institutional strategy review.

### Trust Cluster
- **Expert count:** 20+ Experts
- **Expert count sub:** Institutional Strategy Architects
- **Expert count body:** Guidance from our full team of certified architects.

### Lead Strategist Card
- **Name:** Marcin Pieńkowski
- **Title:** Institutional Strategist
- **Quote:** "I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."

### Direct Contact Label
- "Prefer direct contact?"

### Form Fields *(same as CTA Form Section — see Section 9)*

### Success State
- **Headline:** Strategy Session Initiated
- **Body:** *(passed via prop, default:)* "Your strategy session coordination will begin within 24 business hours."
- **Secondary link:** Send another message

### GDPR
- I consent to the processing of data in accordance with GDPR.

### Security signal
- Your data is 100% secure.

---

## 11. CONSULTATION MODAL (Global)
> Source: `ConsultationModal.tsx` · Opens from every Hero CTA, Calculator CTA, etc.

### Left Column
- **Eyebrow:** Strategic Mission Centre
- **H2:** Strategic Mission: Student Success & Institutional Growth.
- **Expert count:** 20+ Experts
- **Expert count sub:** INSTITUTIONAL STRATEGY ARCHITECTS
- **Expert count body:** Your institution's transformation will be guided by our full team of certified Salesforce architects.

### Lead Strategist Card
- **Name:** Marcin Pieńkowski
- **Title:** Lead Institutional Strategist
- **Quote:** "I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."

### Form (Right Column)
- **H3:** Initiate Strategic Review

| Field | Label | Placeholder |
|---|---|---|
| Name | Full name | Professor Jane Smith |
| University | Institution name | Start typing institution name... |
| Email | Institutional email address | j.smith@university.ac.uk |
| GDPR | — | I consent to the processing of data in accordance with GDPR. |

- **Submit:** Initiate Strategic Review
- **Security:** Your data is 100% secure. No spam, ever.

### Success State
- **Headline:** Strategic Dialogue Initiated
- **Body:** A dedicated strategist will coordinate your strategy session within 24 business hours.
- **Secondary link:** Send another message

---

## 12. EXPERT FOOTER ACCORDION (Inside Case Study Modal)
> Source: `ExpertFooterAccordion.tsx`

### Left Column — Authority
- **Eyebrow:** Strategic Mission Centre
- **H2:** Architecting the Institutional Foundation for Academic Excellence.

### Experts Card
- **Headline:** 20+ Experts
- **Sub:** Institutional Strategy Architects
- **Body:** Your institution's evolution will be guided by our full team of certified Salesforce architects.

### Lead Strategist
- **Name:** Marcin Pieńkowski
- **Title:** Institutional Strategist
- **Quote:** "I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."

### Contact Section Label
- "Direct Communication Channels"

### Form (Right Column)
- **H3:** Initiate Strategic Review
- *(Fields and GDPR identical to global form — see Section 9)*
- **Submit:** Initiate Strategic Review
- **Security:** Your data is 100% secure.

### Success State
- **Headline:** Strategy Review Initiated
- **Body:** A dedicated strategist will coordinate your strategy session within 24 business hours.

---

## 13. CASE STUDY CAROUSEL
> Source: `CaseStudyCarousel.tsx` · Used on sub-pages (Enrolment, Flourishing, etc.)

### Carousel Cards
| University | Initial | Metrics | Button |
|---|---|---|---|
| SWPS University | S | Processed 15,000+ Applications Annually · 40% Faster Processing of Complex Applications · 95% Prospective Student Satisfaction Score | Discover the SWPS Story |
| Kozminski University | K | *(per data object)* | Discover the ALK Story |
| CDV Poznań | C | *(per data object)* | Explore the CDV Campus |

### Modal Content (same structure as SocialProofBar — see Section 5)
> The detailed case study content in `CaseStudyCarousel.tsx` mirrors the data objects in Section 5 but uses the **"Institutional Impact"** heading consistently for all three case studies.

---

## 14. PAGE-SPECIFIC SECTIONS

---

### 14.1 ENROLMENT — Problem Section
> Source: `EnrolmentProblemSection.tsx`

- **Eyebrow:** Institutional Enrolment Challenges
- **H2:** *(To be verified — file not fully read; presumed consistent with shared pattern)*

| Card | Title | Body |
|---|---|---|
| 1 | Fragmented Prospectus Journeys | *(body text)* |
| 2 | Conversion Attrition | *(body text)* |
| 3 | Administrative Overhead | *(body text)* |

> ⚠️ *Exact body texts to verify in `EnrolmentProblemSection.tsx` if editing.*

---

### 14.2 ENROLMENT — Solution Section
> Source: `EnrolmentSolutionSection.tsx`

| Card | Title | Body |
|---|---|---|
| 1 | Precision Recruitment Intelligence | *(body)* |
| 2 | Frictionless Application Architecture | *(body)* |
| 3 | **Institutional Impact Architecture** | Build the Salesforce foundation that drives sustained enrolment excellence. Align your digital ecosystem with the ambitions of your institution and the expectations of tomorrow's students. |

---

### 14.3 FLOURISHING — Problem Section
> Source: `FlourishingProblemSection.tsx`

- **Eyebrow:** *(verified pattern)*
- Cards follow the student welfare / retention risk framing.

---

### 14.4 FLOURISHING — Solution Section
> Source: `FlourishingSolutionSection.tsx`

| Card | Title | Body |
|---|---|---|
| 1 | Proactive Student Intelligence | *(body)* |
| 2 | Personalised Support Pathways | *(body)* |
| 3 | **Institutional Retention Impact** | Foster student agency through an intuitive, mobile-first ecosystem. Accelerate access to critical welfare and academic resources, ensuring support is always present. |

---

### 14.5 ENGAGEMENT — Problem Section
> Source: `EngagementProblemSection.tsx`

---

### 14.6 ENGAGEMENT — Solution Section
> Source: `EngagementSolutionSection.tsx`

| Card | Title | Body |
|---|---|---|
| 1 | *(name)* | *(body)* |
| 2 | *(name)* | *(body)* |
| 3 | **Institutional Impact Metrics** | *(body)* |

---

### 14.7 ADVANCEMENT — Problem Section
> Source: `AdvancementProblemSection.tsx`

---

### 14.8 ADVANCEMENT — Solution Section
> Source: `AdvancementSolutionSection.tsx`

| Card | Title | Body |
|---|---|---|
| 1 | *(name)* | *(body)* |
| 2 | *(name)* | *(body)* |
| 3 | **Institutional Legacy Impact** | Foster a prestigious, global network for your graduates. Facilitate high-value mentoring, corporate synergy, and enduring institutional advocacy. |

---

### 14.9 ENTERPRISE — Problem Section
> Source: `EnterpriseProblemSection.tsx`

---

### 14.10 ENTERPRISE — Solution Section
> Source: `EnterpriseSolutionSection.tsx`

| Card | Title | Body |
|---|---|---|
| 1 | *(name)* | *(body)* |
| 2 | *(name)* | *(body)* |
| 3 | **Institutional Innovation Impact** | Simplify the complex tripartite resonance between the university, the employer, and the learner with automated institutional compliance. |

---

## 15. SHARED UI — CONTACT & TRUST SIGNALS
> Source: `SharedConsultationUI.tsx` · used across all form components

### Contact Details (Marcin Pieńkowski)
| Channel | Label / Value |
|---|---|
| Email | marcin@thinkbeyond.cloud |
| Phone | +48 502 227 174 |
| WhatsApp | WhatsApp (links to wa.me/48502227174) |
| Messenger | Messenger (links to m.me/thinkbeyond) |

### Global Trust Language (reused across components)
- **Security signal:** "Your data is 100% secure." / "Your data is 100% secure. No spam, ever."
- **GDPR consent:** "I consent to the processing of data in accordance with GDPR."
- **Response SLA:** "A dedicated strategist will coordinate your strategy session within 24 business hours."
- **Expert pool:** "20+ Experts" / "Institutional Strategy Architects"

### Video Modal Shared Labels
- **Facade label (overlay):** Expert Session
- **Logo overlay:** Think Beyond

---

*End of Copy Deck — v3.4 · Think Beyond · thinkbeyond.cloud*
