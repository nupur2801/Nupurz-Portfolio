export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "cloud-orchestrator",
    title: "Cloud workflow orchestrator",
    description:
      "Event-driven pipelines that coordinate services across regions with graceful retries.",
    longDescription:
      "A modular orchestration layer built for reliability: idempotent jobs, structured logging, and dashboards for observability. Designed to scale with traffic spikes without manual babysitting.",
    stack: ["Node.js", "AWS Lambda", "EventBridge", "TypeScript"],
    link: "https://github.com",
  },
  {
    id: "ml-insights",
    title: "ML insights dashboard",
    description:
      "Interactive charts and model explainability for stakeholders who are not data scientists.",
    longDescription:
      "Combines Python model serving with a React front end. Highlights feature importance, drift alerts, and scenario testing so teams can trust predictions in production.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL"],
    link: "https://github.com",
  },
  {
    id: "secure-api-gateway",
    title: "Secure API gateway",
    description:
      "Rate limiting, JWT rotation, and audit trails for internal microservices.",
    longDescription:
      "Central entry point with policy-based routing, mTLS between services, and structured security events for SOC workflows.",
    stack: ["Node.js", "Express", "Redis", "Azure"],
  },
  {
    id: "design-system-kit",
    title: "Component design kit",
    description:
      "Accessible UI primitives with documentation and visual regression tests.",
    longDescription:
      "Tokens-first styling, keyboard navigation baked in, and Storybook-driven docs so product teams ship consistent interfaces faster.",
    stack: ["React", "Tailwind CSS", "Vitest", "Storybook"],
    link: "https://github.com",
  },
];

export const certificates = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
  { title: "Machine Learning Specialization", issuer: "Coursera", year: "2023" },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", year: "2022" },
];

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      { name: "React", level: 92 },
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    name: "Cloud",
    items: [
      { name: "AWS", level: 78 },
      { name: "Azure", level: 72 },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { name: "Python", level: 86 },
      { name: "ML models & pipelines", level: 80 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
