export const SITE = {
  name: "Rivo Tech AB",
  url: "https://rivotech.se",
  orgNumber: "559537-2755",
  city: "Stockholm, Sweden",
  founded: 2025,
  emails: {
    partners: "info@rivotech.se",
    careers: "careers@rivotech.se",
  },
  contactEndpoint: "https://rivotech.app.n8n.cloud/webhook/rivo-contact",
} as const;

export const NAV = [
  { href: "/partners/", label: "Partners" },
  { href: "/careers/", label: "Careers" },
  { href: "/about/", label: "About" },
] as const;

export const SERVICES = [
  {
    title: "Software development",
    text: "Developers who build and maintain the systems your business runs on, from APIs and services to the interfaces your users interact with.",
    roles: ["Backend developer", "Frontend developer", "Fullstack developer"],
  },
  {
    title: "Cloud, infrastructure & DevOps",
    text: "Engineers who set up and run your cloud platforms, automate builds and releases, and keep environments stable.",
    roles: ["Cloud engineer", "Infrastructure engineer", "DevOps engineer"],
  },
  {
    title: "Data & AI",
    text: "Engineers and scientists who build data pipelines, find answers in your data and put language models to work in your products.",
    roles: ["Data engineer", "Data scientist", "AI engineer", "LLM engineer"],
  },
  {
    title: "Solution architecture",
    text: "Architects who design how your systems fit together and guide teams from the first sketch to production.",
    roles: ["Solution architect"],
  },
] as const;
