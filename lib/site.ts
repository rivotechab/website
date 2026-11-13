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
    short: "Software development",
    text: "Developers who build and maintain the systems your business runs on, from APIs and services to the interfaces your users interact with.",
    roles: ["Backend developer", "Frontend developer", "Fullstack developer"],
  },
  {
    title: "Mobile development",
    short: "Mobile development",
    text: "Developers who build native and cross-platform apps for iOS and Android, from first release to ongoing updates.",
    roles: ["Android developer", "iOS developer", "Cross-platform developer"],
  },
  {
    title: "Cloud, infrastructure & DevOps",
    short: "Cloud & DevOps",
    text: "Engineers who set up and run your cloud platforms, automate builds and releases, and keep environments stable.",
    roles: ["Cloud engineer", "Infrastructure engineer", "DevOps engineer"],
  },
  {
    title: "Data & AI",
    short: "Data & AI",
    text: "Engineers and scientists who build data pipelines, find answers in your data and put language models to work in your products.",
    roles: ["Data engineer", "Data scientist", "AI engineer", "LLM engineer"],
  },
  {
    title: "QA & testing",
    short: "QA & testing",
    text: "Testers who make sure your releases work, with clear test plans, hands-on testing and automated test suites.",
    roles: ["QA engineer", "Test automation engineer"],
  },
  {
    title: "UX & UI design",
    short: "UX & UI design",
    text: "Designers who learn how people use your product and turn it into clear, usable interfaces.",
    roles: ["UX designer", "UI designer"],
  },
  {
    title: "Agile & delivery",
    short: "Agile & delivery",
    text: "People who keep teams focused and delivering, from priorities and planning to clearing the way when work gets stuck.",
    roles: ["Scrum master", "Product owner", "Project manager"],
  },
  {
    title: "Solution architecture",
    short: "Solution architecture",
    text: "Architects who design how your systems fit together and guide teams from the first sketch to production.",
    roles: ["Solution architect"],
  },
] as const;
