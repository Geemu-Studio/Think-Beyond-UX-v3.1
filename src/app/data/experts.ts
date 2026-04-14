

export type Category = "All" | "Education Cloud Architects" | "Recruitment & Engagement" | "Student Success" | "Data & Integration";

export interface Expert {
  id: string;
  name: string;
  role: string;
  highlight: string;
  category: Category;
  description: string;
  certificates: string[];
  skills: string[];
  contact: {
    whatsapp: string;
    email: string;
    phone: string;
  };
}

export const EXPERTS: Expert[] = [
  { 
    id: "1", 
    name: "Marcin Pieńkowski", 
    role: "Lead Education Cloud Architect", 
    highlight: "8x Salesforce Certified", 
    category: "Education Cloud Architects",
    description: "Architecting resilient digital ecosystems for Europe's leading universities. Marcin specialises in complex migrations from legacy SIS to Salesforce Education Cloud, ensuring data integrity and institutional scalability.",
    certificates: ["8x Salesforce Certified", "System Architect", "Education Cloud Consultant"],
    skills: ["Enterprise Architecture", "SIS Migration", "Data Strategy", "Governance"],
    contact: { whatsapp: "48502227174", email: "marcin@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "2", 
    name: "Dr. Eleanor Hayes", 
    role: "Head of Unified System Strategy", 
    highlight: "Legacy SIS/SITS Expertise", 
    category: "Data & Integration",
    description: "Bridging the gap between academic vision and technical execution. Dr. Hayes brings 15 years of Higher Education leadership, focusing on unifying disconnected system landscapes into a single source of truth.",
    certificates: ["PhD Higher Ed Management", "Salesforce Certified Admin", "PRINCE2 Practitioner"],
    skills: ["Strategic Planning", "Change Management", "System Harmonisation", "HEA Fellow"],
    contact: { whatsapp: "48502227174", email: "eleanor@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "3", 
    name: "Tomasz Wróbel", 
    role: "Student Success Consultant", 
    highlight: "NSS Strategy Specialist", 
    category: "Student Success",
    description: "Expert in proactive care models and student progression data. Tomasz develops intelligent workflows that identify at-risk learners early, directly impacting NSS scores and graduation rates.",
    certificates: ["Salesforce Education Cloud", "NSS Data Analyst", "Service Cloud Expert"],
    skills: ["Retention Modelling", "Advising Workflows", "Student Analytics", "Engagement Strategy"],
    contact: { whatsapp: "48502227174", email: "tomasz@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "4", 
    name: "Sarah Jenkins", 
    role: "Admissions Strategy Consultant", 
    highlight: "Recruitment Optimisation Expert", 
    category: "Recruitment & Engagement",
    description: "Transforming the candidate journey from first touch to enrolment. Sarah optimises lead scoring and automated engagement to reduce application drop-off and increase yield in competitive global markets.",
    certificates: ["Marketing Cloud Specialist", "Yield Optimisation Lead", "Salesforce Certified Architect"],
    skills: ["Lead Scoring", "International Recruitment", "CRM Automation", "Persona Mapping"],
    contact: { whatsapp: "48502227174", email: "sarah@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "5", 
    name: "David O'Connor", 
    role: "Education Cloud Architect", 
    highlight: "7x Salesforce Certified", 
    category: "Education Cloud Architects",
    description: "Specialist in Technical Debt reduction and API-led connectivity. David ensures that Salesforce becomes the resilient core of the university's digital transformation journey.",
    certificates: ["7x Salesforce Certified", "MuleSoft Developer", "Platform Developer II"],
    skills: ["Integrations", "Apex/LWC", "Security Architecture", "Technical Audit"],
    contact: { whatsapp: "48502227174", email: "david@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "6", 
    name: "Piotr Kowalski", 
    role: "Student Journey Specialist", 
    highlight: "HE Institutional Strategy", 
    category: "Student Success",
    description: "Mapping frictionless student experiences across fragmented departmental siloes. Piotr uses data-driven insights to create personalised academic journeys.",
    certificates: ["Journey Mapping Lead", "UX for Higher Ed", "Salesforce Consultant"],
    skills: ["Service Design", "Journey Mapping", "HE Policy Specialist", "Persona Development"],
    contact: { whatsapp: "48502227174", email: "piotr@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "7", 
    name: "James Montgomery", 
    role: "Senior Student Experience Strategist | Senior Education Cloud Architect", 
    highlight: "HE Strategy Specialist", 
    category: "Education Cloud Architects",
    description: "High-level strategic advisor for executive leadership teams. James specialises in aligning digital infrastructure with institutional KPIs and long-term academic excellence.",
    certificates: ["Strategic HE Leadership", "Enterprise Architect", "Education Cloud Expert"],
    skills: ["Institutional Strategy", "KPI Frameworks", "Executive Advisory", "Governance"],
    contact: { whatsapp: "48502227174", email: "james@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "8", 
    name: "Aisha Khan", 
    role: "Institutional Data Governance Lead", 
    highlight: "UK HE Compliance Expert", 
    category: "Data & Integration",
    description: "Navigating the complexities of HESA, GDPR, and institutional data ethics. Aisha builds secure data governance frameworks that enable innovation while ensuring total compliance.",
    certificates: ["CIPP/E (GDPR)", "HESA Data Analyst", "Data Ethics Lead"],
    skills: ["Data Privacy", "HESA Reporting", "Compliance Audit", "Ethics Frameworks"],
    contact: { whatsapp: "48502227174", email: "aisha@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "9", 
    name: "Robert Smith", 
    role: "Alumni Relations Architect", 
    highlight: "Alumni & Development Strategist", 
    category: "Recruitment & Engagement",
    description: "Fostering lifelong academic loyalty through strategic engagement. Robert integrates development and alumni relations into the core student lifecycle for sustained philanthropic growth.",
    certificates: ["Advancement Cloud Expert", "Fundraising Strategist", "Salesforce Consultant"],
    skills: ["Philanthropy Strategy", "Donor Journeys", "Alumni Engagement", "Relationship Management"],
    contact: { whatsapp: "48502227174", email: "robert@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "10", 
    name: "Elena Rossi", 
    role: "Academic Programme Design Lead", 
    highlight: "Curriculum Transformation Expert", 
    category: "Student Success",
    description: "Modernising curriculum management and programme delivery architectures. Elena ensures that academic offerings are agile, data-responsive, and aligned with student needs.",
    certificates: ["Curriculum Designer", "Agile Academic Lead", "HE Management"],
    skills: ["Programme Design", "Academics Workflows", "Agile Curriculum", "Curriculum Audit"],
    contact: { whatsapp: "48502227174", email: "elena@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "21", 
    name: "Sophie Williams", 
    role: "Infrastructure Lead | Senior Education Cloud Architect", 
    highlight: "Institutional Architecture Expert", 
    category: "Education Cloud Architects",
    description: "Mastermind of the university-wide technical blueprint. Sophie ensures that infrastructure is resilient, secure, and ready for high-volume academic operations.",
    certificates: ["Master System Architect", "Security Specialist", "Hereditary Systems Expert"],
    skills: ["DevOps", "Infrastructure Design", "Cloud Security", "Enterprise Integration"],
    contact: { whatsapp: "48502227174", email: "sophie@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "11", 
    name: "Oliver Brown", 
    role: "Global Recruitment Strategist", 
    highlight: "International Admissions Expert", 
    category: "Recruitment & Engagement",
    description: "Expert in international market penetration and agent management. Oliver builds global recruitment pipelines that are efficient, scalable, and relationship-focused.",
    certificates: ["Global Admissions Lead", "Market Analysis Expert", "Salesforce Certified"],
    skills: ["International Markets", "Agent Portals", "Yield Management", "Global Recruitment"],
    contact: { whatsapp: "48502227174", email: "oliver@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "13", 
    name: "Michael Chang", 
    role: "Education Cloud Solution Lead", 
    highlight: "6x Salesforce Certified", 
    category: "Education Cloud Architects",
    description: "Translating institutional needs into elegant, out-of-the-box Salesforce solutions. Michael focuses on fast time-to-value for departmental implementations.",
    certificates: ["6x Salesforce Certified", "Solution Architect", "Experience Cloud Lead"],
    skills: ["Solution Design", "Product Strategy", "Fast Deployment", "Agile Delivery"],
    contact: { whatsapp: "48502227174", email: "michael@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "14", 
    name: "Hannah Taylor", 
    role: "HE Business Analyst", 
    highlight: "HE Process Audit Specialist", 
    category: "Student Success",
    description: "Deciphering complex academic processes to identify opportunities for automation. Hannah ensures that technology serves the user, not the other way around.",
    certificates: ["Business Process Lead", "HE Audit Specialist", "Lean Six Sigma"],
    skills: ["Process Design", "Stakeholder Management", "Requirements Gathering", "User Advocacy"],
    contact: { whatsapp: "48502227174", email: "hannah@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "15", 
    name: "Adam Nowak", 
    role: "Resilient Cloud Infrastructure Lead", 
    highlight: "Strategic Hosting Expert", 
    category: "Data & Integration",
    description: "Protecting institutional continuity through robust hosting and disaster recovery strategies. Adam specialises in high-availability environments for critical academic systems.",
    certificates: ["Cloud Specialist", "Security Professional", "AWS/Azure Certified"],
    skills: ["Disaster Recovery", "High Availability", "Infrastructure Audit", "Cyber Resilience"],
    contact: { whatsapp: "48502227174", email: "adam@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "16", 
    name: "Charlotte Davies", 
    role: "Transformation Change Management Lead", 
    highlight: "Oxford Governance Expert", 
    category: "Education Cloud Architects",
    description: "Guiding institutional culture through the friction of digital change. Charlotte ensures that staff and students alike embrace new technological horizons.",
    certificates: ["Prosci Change Management", "Academic Governance Lead", "Senior HE Manager"],
    skills: ["Change Strategy", "Cultural Alignment", "Training Design", "Executive Coaching"],
    contact: { whatsapp: "48502227174", email: "charlotte@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "17", 
    name: "Benjamin Lee", 
    role: "Student Experience Strategist", 
    highlight: "UK HE Digital Campus Expert", 
    category: "Student Success",
    description: "Designing the next generation of digital universities. Benjamin focuses on creating intuitive, frictionless digital portals that students actually love to use.",
    certificates: ["UX Master", "Product Designer", "Mobile Experience Lead"],
    skills: ["UI/UX Design", "Portal Strategy", "Mobile-First Design", "Student Engagement"],
    contact: { whatsapp: "48502227174", email: "benjamin@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "18", 
    name: "Maria Garcia", 
    role: "Educational Data Scientist", 
    highlight: "Predictive Analytics Lead", 
    category: "Data & Integration",
    description: "Turning raw student data into actionable foresight. Maria builds machine learning models that predict student outcomes and institutional performance.",
    certificates: ["Data Science Lead", "AI/ML Specialist", "Advanced Analytics"],
    skills: ["Machine Learning", "Predictive Modelling", "Data Visualisation", "Statistical Audit"],
    contact: { whatsapp: "48502227174", email: "maria@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "19", 
    name: "William Turner", 
    role: "Product Owner - Education", 
    highlight: "Former Vice-Chancellor Advisor", 
    category: "Education Cloud Architects",
    description: "Defining the product vision for institutional excellence. William combines top-tier leadership experience with deep technical knowledge of Salesforce roadmap.",
    certificates: ["Product Management Lead", "Strategic Advisor", "Salesforce Visionary"],
    skills: ["Product Roadmap", "Institutional Vision", "Investment Strategy", "Stakeholder Alignment"],
    contact: { whatsapp: "48502227174", email: "william@thinkbeyond.cloud", phone: "+48 502 227 174" }
  },
  { 
    id: "20", 
    name: "Grace Evans", 
    role: "Admissions Management Strategist", 
    highlight: "Student Conversion Expert", 
    category: "Recruitment & Engagement",
    description: "Expert in yield optimisation and frictionless admissions processing. Grace ensure that the journey from applicant to student is fast, fair, and data-driven.",
    certificates: ["Yield Optimisation Expert", "Admissions Lead", "Salesforce Consultant"],
    skills: ["Admissions Policy", "Process Optimisation", "Conversion Analysis", "Clearance Strategy"],
    contact: { whatsapp: "48502227174", email: "grace@thinkbeyond.cloud", phone: "+48 502 227 174" }
  }
];

export const CATEGORIES: Category[] = [
  "All", 
  "Education Cloud Architects", 
  "Recruitment & Engagement", 
  "Student Success", 
  "Data & Integration"
];

export const CATEGORY_LABELS: Record<Category, string> = {
  "All": "All",
  "Education Cloud Architects": "Architects",
  "Recruitment & Engagement": "Recruitment",
  "Student Success": "Student Success",
  "Data & Integration": "Integration"
};

