/**
 * ---------------------------------------------------------------------------
 * ASSET REGISTRY
 * ---------------------------------------------------------------------------
 * One place to swap placeholders for finals. Every entry is `null` today; the
 * component that consumes it already reserves the exact box the real asset
 * will occupy, so setting a path here changes pixels, never layout.
 *
 *   1. Drop the file into /public/assets/…
 *   2. Set the path below.
 *   3. Done. No component edits, no reflow.
 * ---------------------------------------------------------------------------
 */

export const assets = {
  avatar: "/assets/profile.jpg",
  
  hero: {
    name: "Mohammed Usama M",
    role: "Operations & Platform Specialist",
    summary: "Performance-driven Operations Specialist with over 4 years of experience combining YouTube platform management with high-speed logistics data support.",
    location: "Bengaluru, India",
    email: "usamavj100@gmail.com",
    phone: "7418392576",
  },

  about: {
    title: "About Me",
    description: "On the digital media side, I manage end-to-end channel workflows, ensure strict policy compliance, and optimize platform visibility. On the logistics side, I manage 200+ CRM records daily and resolve 60+ critical support tickets while consistently exceeding targets by 130%.",
  },

  skills: [
    "Platform Operations & Asset Management",
    "Logistics Data & CRM Infrastructure",
    "Advanced SEO & Metadata Architecture",
    "Policy Compliance & Risk Mitigation",
    "High-Impact Performance Analytics",
    "Workflow Optimization",
    "Supply Chain Consultation",
    "Quality Assurance Governance"
  ],

  experience: [
    {
      company: "MMU Reviews",
      role: "Platform Operations & Content Specialist",
      period: "July 2023 - Present",
      description: "Manage end-to-end digital content workflows, optimize metadata strategies, and analyze CTR and audience retention curves on YouTube.",
    },
    {
      company: "BlackBuck (Zinka Logistics)",
      role: "Logistics Operations Associate",
      period: "Feb 2022 - June 2023",
      description: "Managed 200+ service records daily in CRM, resolved 60+ support tickets daily, and coordinated supply chain operations.",
    },
    {
      company: "Hatsun Agro Product",
      role: "Retail Operations & Support Executive",
      period: "July 2019 - Dec 2021",
      description: "Managed inventory data, reduced stock discrepancies, and delivered direct technical and operational customer support.",
    },
  ],

  education: [
    {
      degree: "B.Sc. Software Computer Science",
      institution: "Islamiah College (Thiruvalluvar University)",
      period: "2016 - 2019",
    },
  ],

  languages: ["English", "Hindi", "Tamil", "Telugu"],
};
