export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#blog', label: 'Blog' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'React Native / Expo', level: 80 },
    { name: 'HTML / CSS', level: 95 },
  ],
  backend: [
    { name: 'Python', level: 88 },
    { name: 'FastAPI', level: 85 },
    { name: 'Flask', level: 82 },
    { name: 'Go', level: 72 },
    { name: 'Node.js', level: 75 },
    { name: 'REST APIs', level: 85 },
  ],
  database: [
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'SQLite', level: 80 },
    { name: 'MySQL', level: 72 },
    { name: 'Redis', level: 55 },
  ],
  other: [
    { name: 'AWS / Cloud', level: 84 },
    { name: 'Terraform', level: 76 },
    { name: 'Tauri', level: 78 },
    { name: 'Docker', level: 82 },
    { name: 'Git', level: 92 },
  ],
};

export const services = [
  {
    id: 'fintech',
    eyebrow: 'Most Requested',
    title: 'FinTech Development',
    subtitle: 'Financial-Grade Engineering',
    description:
      'Trading dashboards, payment infrastructure, portfolio analytics, and real-time market data systems built for reliability, low latency, and regulatory readiness.',
    deliverables: [
      'Real-time trading & portfolio dashboards',
      'Payment gateway integrations (Stripe, Paystack, Flutterwave)',
      'Market data APIs with sub-100ms latency',
      'Audit-ready code with full test coverage',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    startingFrom: '$3,000',
    cta: 'Get a Quote',
    ctaHref: '#contact',
    featured: true,
  },
  {
    id: 'cloud',
    eyebrow: 'High Demand',
    title: 'Cloud Engineering',
    subtitle: 'Infrastructure, DevOps & IaC',
    description:
      'Scalable, resilient cloud infrastructure designed for production. From greenfield AWS architecture to migration, containerisation, and fully automated CI/CD pipelines.',
    deliverables: [
      'AWS architecture design & provisioning',
      'Infrastructure as Code with Terraform',
      'Kubernetes cluster setup & orchestration',
      'CI/CD pipelines · cost optimisation · monitoring',
    ],
    gradient: 'from-sky-500 to-blue-600',
    startingFrom: '$2,500',
    cta: 'Discuss Infrastructure',
    ctaHref: '#contact',
    featured: false,
  },
  {
    id: 'frontend',
    eyebrow: 'Foundation',
    title: 'Frontend Development',
    subtitle: 'Interfaces That Perform',
    description:
      'Pixel-perfect, responsive web interfaces built with modern React and Next.js — fast load times, accessible markup, and smooth UX from mobile to desktop.',
    deliverables: [
      'React / Next.js component development',
      'Responsive design with Tailwind CSS',
      'Performance optimisation & Core Web Vitals',
      'Deployment on Vercel / Netlify / CDN',
    ],
    gradient: 'from-indigo-500 to-violet-500',
    startingFrom: '$1,200',
    cta: 'Start a Project',
    ctaHref: '#contact',
    featured: false,
  },
  {
    id: 'backend',
    eyebrow: 'Foundation',
    title: 'Backend Development',
    subtitle: 'APIs & Server-Side Engineering',
    description:
      'Robust, scalable backend systems — REST APIs, database architecture, authentication, and server infrastructure built for reliability and long-term maintainability.',
    deliverables: [
      'Python, Golang or Node.js REST API development',
      'Database design, indexing & optimisation',
      'Authentication, authorisation & security',
      'Deployment on AWS / Railway / Render',
    ],
    gradient: 'from-violet-500 to-purple-600',
    startingFrom: '$1,500',
    cta: 'Start a Project',
    ctaHref: '#contact',
    featured: false,
  },
  {
    id: 'diligence',
    eyebrow: 'Specialised',
    title: 'Technical Due Diligence',
    subtitle: 'For Investors & Acquirers',
    description:
      'Objective deep-dive into codebases, architectures, and engineering teams — giving hedge funds, VCs, and acquirers a clear, unbiased technical picture before they commit capital.',
    deliverables: [
      'Codebase quality & maintainability audit',
      'Architecture scalability assessment',
      'Cloud infrastructure risk assessment',
      'Engineering team & process evaluation',
    ],
    gradient: 'from-rose-500 to-pink-500',
    startingFrom: '$4,000',
    cta: 'Request Assessment',
    ctaHref: '#contact',
    featured: false,
  },
  {
    id: 'web3-infra',
    eyebrow: 'Specialised',
    title: 'Web3 Infrastructure Development',
    subtitle: 'Hardened Node & Validator Operations',
    description:
      'Production-grade deployment, monitoring, and security auditing for Ethereum validators, RPC nodes, Web3Signer systems, and custom indexing middleware.',
    deliverables: [
      'Secure validator setups & remote key signing (Web3Signer/HSM)',
      'High-availability load-balanced RPC node infrastructure',
      'Custom blockchain indexing, data ingestion & caching layers',
      'Real-time metrics, AlertManager rules & Grafana dashboards',
    ],
    gradient: 'from-amber-500 to-orange-500',
    startingFrom: '$3,000',
    cta: 'Discuss Web3 Infra',
    ctaHref: '#contact',
    featured: false,
  },
];

export interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  secondarySource?: { label: string; href: string };
  live?: string;
  featured: boolean;
  category: 'Product' | 'Mobile' | 'Backend' | 'Infrastructure' | 'Web';
  visibility: 'Public source' | 'Private client work' | 'Private product';
}

export const projects: Project[] = [
  {
    title: 'PlusPlusPlus',
    description:
      'Exam-preparation platform for WAEC and JAMB students, with CBT simulations, structured question banks, secure accounts, and a responsive learning experience.',
    impact: '2,000+ active users · ₦1M+ processed · Exam prep platform',
    tech: ['Python', 'Flask', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Kizito24/plusplusplus',
    featured: true,
    category: 'Product',
    visibility: 'Public source',
  },
  {
    title: 'YellowMart Marketplace',
    description:
      'Full-stack local marketplace connecting merchants with nearby buyers. I built the storefront and API workflows for onboarding, subscriptions, listings, payments, analytics, and real-time messaging.',
    impact: 'Live marketplace · Paystack billing · Web and mobile ecosystem',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Paystack'],
    live: 'https://yellomart.net',
    featured: true,
    category: 'Product',
    visibility: 'Private client work',
  },
  {
    title: 'WeatherOps',
    description:
      'Event-driven weather intelligence platform that monitors locations, evaluates custom rules, and sends automated SMS, email, or webhook alerts. It also supports satellite-based crop and tree analysis.',
    impact: '24/7 monitoring · Multi-channel alerts · Satellite analysis',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Playwright'],
    github: 'https://github.com/Kizito24/weatherops-frontend',
    secondarySource: {
      label: 'API source',
      href: 'https://github.com/Kizito24/weatherops-backend',
    },
    live: 'https://weatherops-ai.vercel.app',
    featured: true,
    category: 'Product',
    visibility: 'Public source',
  },
  {
    title: 'Validator Orchestrator',
    description:
      'Production-oriented infrastructure for deploying and operating Ethereum validators and RPC nodes, including OS hardening, remote key signing, slashing protection, observability, and disaster recovery.',
    impact: 'Hardened nodes · IaC deployment · Full observability',
    tech: ['Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
    github: 'https://github.com/Kizito24/validator-orchestrator',
    featured: true,
    category: 'Infrastructure',
    visibility: 'Public source',
  },
  {
    title: 'K Finance',
    description:
      'Personal-finance web application for tracking money in one focused interface, built with a typed Next.js stack and production error monitoring.',
    impact: 'Live on Vercel · Typed frontend · Sentry monitoring',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sentry'],
    github: 'https://github.com/Kizito24/k_finance',
    live: 'https://k-finance-one.vercel.app',
    featured: true,
    category: 'Product',
    visibility: 'Public source',
  },
  {
    title: 'YellowMart Mobile',
    description:
      'Cross-platform mobile companion for the YellowMart marketplace, covering merchant onboarding, product discovery, unified registration, and instant messaging against the same FastAPI platform.',
    impact: 'iOS and Android · Shared marketplace API · Native navigation',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    featured: true,
    category: 'Mobile',
    visibility: 'Private client work',
  },
  {
    title: 'MyDonation Backend',
    description:
      'Go API for a faith-driven donation platform that connects donors with verified projects, with cloud-backed media delivery, session caching, structured logging, and production error tracking.',
    impact: 'Go REST API · Containerised delivery · Cloud media pipeline',
    tech: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'Redis', 'AWS S3', 'Sentry'],
    featured: false,
    category: 'Backend',
    visibility: 'Private client work',
  },
  {
    title: 'Sundries & Allied Bakeries',
    description:
      'Customer ordering experience for a bakery network, spanning a focused marketing site and a cross-platform mobile app built from a shared visual system.',
    impact: 'Custom design system · Marketing site · Mobile ordering MVP',
    tech: ['Next.js', 'React Native', 'Expo', 'Tailwind CSS'],
    featured: false,
    category: 'Mobile',
    visibility: 'Private client work',
  },
  {
    title: 'Uber Clone',
    description:
      'Cross-platform mobile ride-hailing app built with Expo and React Native, using file-based routing, NativeWind styling, and centralised state management.',
    impact: '17 commits · iOS and Android · TypeScript throughout',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    github: 'https://github.com/Kizito24/uber-clone_vsc',
    featured: false,
    category: 'Mobile',
    visibility: 'Public source',
  },
  {
    title: 'Go E-Commerce',
    description:
      'Microservices e-commerce backend written in Go, organised as a workspace monorepo with Docker Compose for local, containerised service orchestration.',
    impact: 'Containerised · Go workspace monorepo · Docker Compose',
    tech: ['Go', 'Docker', 'Microservices'],
    github: 'https://github.com/Kizito24/go-ecommerce',
    featured: false,
    category: 'Backend',
    visibility: 'Public source',
  },
  {
    title: 'Number Facts API',
    description:
      'REST API that classifies numbers by mathematical properties—prime, perfect, Armstrong, odd or even—and enriches responses with facts from an external API.',
    impact: 'Deployed API · CORS enabled · Production WSGI',
    tech: ['Python', 'Flask', 'Gunicorn', 'Render'],
    github: 'https://github.com/Kizito24/hngx-stage1-number-facts-api',
    featured: false,
    category: 'Backend',
    visibility: 'Public source',
  },
  {
    title: 'Synergycon',
    description:
      'Multi-page conference website featuring speaker and panellist profiles, special guests, the organising team, and an event gallery.',
    impact: 'Live on Vercel · 21 commits · Multi-page experience',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kizito24/Synergycon',
    live: 'https://synergycon-ten.vercel.app',
    featured: false,
    category: 'Web',
    visibility: 'Public source',
  },
];

export const blogPosts = [
  {
    slug: 'building-fintech-products-people-can-trust',
    title: 'Building FinTech Products People Can Trust',
    topic: 'FinTech Engineering',
    date: 'May 2026',
    readTime: '5 min read',
    summary:
      'A practical look at how reliable payment flows, clear transaction states, audit-friendly logging, and careful error handling help financial products earn user confidence.',
    writeup:
      'Trust is the ultimate metric in financial technology. While speed and features are important, a user\'s confidence in how a system handles their money is what determines long-term success. Over years of building payment gateways and financial services, I have learned that trust isn\'t just built in the marketing department—it is engineered directly into the codebase.\n\nAt the core of financial-grade engineering is transaction integrity. Every single transaction must be treated as a mission-critical operation. This means implementing database transactions that guarantee atomicity, consistency, isolation, and durability (ACID). If a transfer fails mid-way, the system must roll back completely, ensuring no money is lost in a black hole.\n\nTransparency is another key pillar. Users should never be left guessing what is happening to their funds. Providing clear, real-time transaction states (e.g., \'Pending\', \'Processing\', \'Settled\', \'Failed\') and communicating error states without jargon is essential. When a user understands why a payment failed, they feel in control.\n\nFinally, auditability and monitoring are non-negotiable. Detailed, structured log entries with high-integrity security trails allow you to trace any issue within seconds. When integrated with error tracking like Sentry and logging systems like Grafana Loki, you can detect and resolve friction points before the customer even notices them.',
  },
  {
    slug: 'what-makes-a-portfolio-project-production-ready',
    title: 'What Makes a Portfolio Project Production-Ready?',
    topic: 'Software Craft',
    date: 'April 2026',
    readTime: '4 min read',
    summary:
      'A simple checklist for turning a demo into a serious engineering signal: clean architecture, meaningful documentation, testing, deployment, and observability.',
    writeup:
      'Many developers showcase projects that work perfectly on their local machine under ideal conditions. However, the difference between a prototype and a production-ready application lies in how it handles the unpredictable nature of the real world. A production-ready project demonstrates professional engineering judgement and attention to detail.\n\nFirst and foremost is error handling and resilience. A robust application expects failures—network timeouts, database disconnects, invalid user inputs—and handles them gracefully. This means implementing comprehensive try-catch blocks, returning helpful API error messages, and ensuring the UI remains usable even when services fail.\n\nSecondly, clean architecture and type safety are critical for maintainability. Using TypeScript, separating business logic from presentation, and structuring your project with clear boundaries makes it easy for other engineers to understand and contribute. Adding automated tests (unit, integration, and end-to-end) guarantees that your code remains correct as it evolves.\n\nLastly, deployment and observability complete the package. A production-ready project is deployed on reliable infrastructure with automated CI/CD pipelines. It should have basic monitoring, logging, and error tracking configured. When a hiring manager can review a clean repository, see automated test passes, and click a live URL that includes error tracking, they see an engineer who is ready to ship production code.',
  },
  {
    slug: 'designing-cloud-systems-that-stay-maintainable',
    title: 'Designing Cloud Systems That Stay Maintainable',
    topic: 'Cloud & DevOps',
    date: 'March 2026',
    readTime: '6 min read',
    summary:
      'Notes on building cloud infrastructure that is understandable, repeatable, and ready to evolve without becoming expensive or fragile.',
    writeup:
      'Modern cloud infrastructure offers incredible power, but it also introduces significant complexity. Without a deliberate approach to design, cloud setups can quickly become a tangled web of manual configurations, undocumented dependencies, and runaway costs. Designing for maintainability is key to keeping engineering teams agile.\n\nThe foundation of maintainable cloud systems is Infrastructure as Code (IaC). Everything—from VPCs and security groups to database clusters and load balancers—should be defined in tools like Terraform or Ansible. This ensures that your environments are fully reproducible, documentable, and version-controlled. If disaster strikes, you can rebuild your entire stack in minutes.\n\nAnother important principle is client diversity and redundancy. In web3 and traditional setups alike, avoiding single points of failure keeps systems online. This means deploying across multiple availability zones and regions, using auto-scaling groups, and configuring health checks to automatically replace unhealthy nodes.\n\nMonitoring and cost-control go hand-in-hand with maintenance. Having centralized dashboards (using Prometheus and Grafana) allows you to track resource utilization, find bottlenecks, and optimize resource sizing. Establishing budget alerts and automatic cleanup rules for unused resources prevents surprising cloud bills, keeping the business viable and the infrastructure efficient.',
  },
];

export const experiences = [
  {
    year: '2021 — Present',
    role: 'Software Engineering Student',
    company: 'University',
    description:
      'Pursuing BSc Software Engineering with a focus on algorithms, cloud infrastructure, and distributed systems. Active in national hackathons, open-source projects, and campus tech leadership.',
    tags: ['Algorithms', 'Cloud', 'Research', 'Open Source'],
  },
  {
    year: '2023',
    role: 'Cloud Engineering Intern',
    company: 'Tech Infrastructure Firm',
    description:
      'Provisioned and managed AWS environments for client workloads. Wrote Terraform modules for repeatable infrastructure, containerised legacy services with Docker, and built automated deployment pipelines that cut release time by 60%.',
    tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    year: '2023 — 2026',
    role: 'Lead Contract Engineer',
    company: 'Independent (Global & Local Clients)',
    description:
      'Architected and shipped production applications for international and Nigerian organizations. Notable work includes WeatherOps (intelligent weather monitoring and satellite crop analysis) and MyDonation (Go/Gin charity backend).',
    tags: ['React', 'FastAPI', 'Go', 'AWS', 'Contract'],
  },
  {
    year: '2024 — 2025',
    role: 'Creator & Lead Engineer',
    company: 'PlusPlusPlus (PPP)',
    description:
      'Designed, launched, and scaled an advanced exam preparation platform for Nigerian students to 2,000+ active users. Engineered a cross-platform desktop client using Tauri/React, an interactive Google Gemini-powered AI tutor, and secure Paystack payment flows with automatic PIN distribution.',
    tags: ['React', 'Tauri', 'Node.js', 'Gemini AI', 'Product'],
  },
  {
    year: '2024 — Present',
    role: 'Founder & Lead Engineer',
    company: 'Campus Nest',
    description:
      'Building a student housing marketplace solving the accommodation crisis for university students across Africa. Leading full-stack engineering, product strategy, and investor conversations.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Founder'],
  },
  {
    year: '2026 — Present',
    role: 'Lead Software Engineer (Contract)',
    company: 'Buckslaw Technology Limited',
    description:
      'Leading engineering efforts to design, build, and deliver three core products: yellomart.net (hyper-local e-commerce marketplace), Community Lawyers (AI-driven legal assistant and case filing platform), and Dlawnet. Architecting full-stack web, mobile, and Go/FastAPI backend layers.',
    tags: ['FastAPI', 'Go', 'React Native', 'PostgreSQL', 'Contract'],
  },
];

export const socialLinks = [
  { label: 'GitHub',   href: 'https://www.github.com/Kizito24',        icon: 'github'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kizitochiazor',   icon: 'linkedin' },
  { label: 'Twitter',  href: 'https://www.twitter.com/kizito___',      icon: 'twitter'  },
];
