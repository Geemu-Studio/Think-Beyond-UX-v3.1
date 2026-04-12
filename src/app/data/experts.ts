

export type Category = "All" | "Education Cloud Architects" | "Recruitment & Engagement" | "Student Success" | "Data & Integration";

export interface Expert {
  id: string;
  name: string;
  role: string;
  highlight: string;
  category: Category;
}

export const EXPERTS: Expert[] = [
  { id: "1", name: "Marcin Pieńkowski", role: "Lead Education Cloud Architect", highlight: "8x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "2", name: "Dr. Eleanor Hayes", role: "Head of Unified System Strategy", highlight: "Legacy SIS/SITS Expertise", category: "Data & Integration" },
  { id: "3", name: "Tomasz Wróbel", role: "Student Success Consultant", highlight: "NSS Strategy Specialist", category: "Student Success" },
  { id: "4", name: "Sarah Jenkins", role: "Admissions Strategy Consultant", highlight: "Recruitment Optimisation Expert", category: "Recruitment & Engagement" },
  { id: "5", name: "David O'Connor", role: "Education Cloud Architect", highlight: "7x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "6", name: "Piotr Kowalski", role: "Student Journey Specialist", highlight: "HE Institutional Strategy", category: "Student Success" },
  { id: "7", name: "James Montgomery", role: "Student Engagement Strategist", highlight: "Retention Data Specialist", category: "Student Success" },
  { id: "8", name: "Aisha Khan", role: "Institutional Data Governance Lead", highlight: "UK HE Compliance Expert", category: "Data & Integration" },
  { id: "9", name: "Robert Smith", role: "Alumni Relations Architect", highlight: "Advancement Strategy Expert", category: "Recruitment & Engagement" },
  { id: "10", name: "Elena Rossi", role: "Academic Programme Design Lead", highlight: "Curriculum Transformation Expert", category: "Student Success" },
  { id: "21", name: "Sophie Williams", role: "Infrastructure Lead | Senior Education Cloud Architect", highlight: "Enterprise Architecture Expert", category: "Education Cloud Architects" },
  { id: "22", name: "James Montgomery", role: "Senior Student Experience Strategist | Senior Education Cloud Architect", highlight: "HE Strategy Specialist", category: "Education Cloud Architects" },
  { id: "11", name: "Oliver Brown", role: "Global Recruitment Strategist", highlight: "International Admissions Expert", category: "Recruitment & Engagement" },
  { id: "13", name: "Michael Chang", role: "Education Cloud Solution Lead", highlight: "6x Salesforce Certified", category: "Education Cloud Architects" },
  { id: "14", name: "Hannah Taylor", role: "HE Business Analyst", highlight: "HE Process Audit Specialist", category: "Student Success" },
  { id: "15", name: "Adam Nowak", role: "Resilient Cloud Infrastructure Lead", highlight: "Strategic Hosting Expert", category: "Data & Integration" },
  { id: "16", name: "Charlotte Davies", role: "Transformation Change Management Lead", highlight: "Oxford Governance Expert", category: "Education Cloud Architects" },
  { id: "17", name: "Benjamin Lee", role: "Student Experience Strategist", highlight: "UK HE Digital Campus Expert", category: "Student Success" },
  { id: "18", name: "Maria Garcia", role: "Educational Data Scientist", highlight: "Predictive Analytics Lead", category: "Data & Integration" },
  { id: "19", name: "William Turner", role: "Product Owner - Education", highlight: "Former Vice-Chancellor Advisor", category: "Education Cloud Architects" },
  { id: "20", name: "Grace Evans", role: "Enrolment Management Strategist", highlight: "Student Conversion Expert", category: "Recruitment & Engagement" }
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

