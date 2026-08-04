export const navLinks = [
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Writing' },
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
    { name: 'Google Cloud', level: 78 },
    { name: 'Terraform', level: 76 },
    { name: 'Tauri', level: 78 },
    { name: 'Docker', level: 82 },
    { name: 'Git', level: 92 },
  ],
};

export const services = [
  {
    id: 'full-stack',
    eyebrow: 'Core Strength',
    title: 'Full-Stack Product Delivery',
    subtitle: 'From Figma to Production',
    description:
      'I turn product requirements and interface designs into responsive, accessible applications that are ready for real users.',
    deliverables: [
      'React and Next.js interfaces with TypeScript',
      'Authentication, payments, analytics, and third-party APIs',
      'Responsive implementation from Figma designs',
      'SEO, performance, and cross-browser optimisation',
    ],
    gradient: 'from-indigo-500 to-violet-500',
    proof: 'React · Next.js · TypeScript',
    cta: 'See Product Work',
    ctaHref: '#projects',
    featured: true,
  },
  {
    id: 'backend',
    eyebrow: 'Systems',
    title: 'Backend & API Engineering',
    subtitle: 'Reliable Services and Data Flows',
    description:
      'I build typed APIs and service layers that keep product logic clear, data consistent, and integrations maintainable.',
    deliverables: [
      'REST and gRPC APIs with Go, Python, or Node.js',
      'PostgreSQL, MongoDB, Redis, and data modelling',
      'Microservices, background jobs, and message queues',
      'Authentication, observability, and error handling',
    ],
    gradient: 'from-violet-500 to-purple-600',
    proof: 'Go · FastAPI · Node.js',
    cta: 'View Backend Work',
    ctaHref: '#projects',
    featured: false,
  },
  {
    id: 'mobile',
    eyebrow: 'Cross-Platform',
    title: 'Mobile App Engineering',
    subtitle: 'One Product Across iOS and Android',
    description:
      'I ship React Native applications that share product logic with web platforms while still feeling natural on mobile.',
    deliverables: [
      'React Native and Expo application development',
      'API integration, routing, and state management',
      'Reusable design systems with NativeWind',
      'Cross-device testing and release preparation',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    proof: 'React Native · Expo',
    cta: 'View Mobile Work',
    ctaHref: '#projects',
    featured: false,
  },
  {
    id: 'cloud',
    eyebrow: 'Delivery',
    title: 'Cloud & Production Readiness',
    subtitle: 'Software That Can Be Operated',
    description:
      'I package, deploy, monitor, and document applications so another engineer can understand and operate them confidently.',
    deliverables: [
      'Docker and Docker Compose environments',
      'AWS, GCP, Vercel, Render, and CDN deployment',
      'Infrastructure as Code and CI/CD workflows',
      'Sentry monitoring, structured logs, and documentation',
    ],
    gradient: 'from-sky-500 to-blue-600',
    proof: 'Docker · Cloud · CI/CD',
    cta: 'Discuss an Opportunity',
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
      'Full-stack digital banking application with secure account linking, ACH transfers, multi-account management, transaction analytics, and production error monitoring.',
    impact: 'Plaid account linking · Dwolla payments · Live on Vercel',
    tech: ['Next.js', 'TypeScript', 'Appwrite', 'Plaid', 'Dwolla', 'Sentry'],
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
      'E-commerce backend split into authentication, product, and order services behind an API gateway, with typed inter-service communication and asynchronous order processing.',
    impact: 'gRPC services · Protocol Buffers · Containerised platform',
    tech: ['Go', 'gRPC', 'Protocol Buffers', 'Docker', 'Microservices'],
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
    year: '2026 — Present',
    role: 'Lead Software Engineer (Contract)',
    company: 'Buckslaw Technology Limited',
    description:
      'Leading delivery across YellowMart, Community Lawyers, and Dlawnet, spanning full-stack web applications, React Native clients, and Go/FastAPI service layers.',
    tags: ['FastAPI', 'Go', 'React Native', 'PostgreSQL', 'Leadership'],
  },
  {
    year: 'Aug 2025 — Present',
    role: 'Full-Stack Developer',
    company: 'Ci-finesser',
    description:
      'Developed and deployed a responsive React landing experience from Figma designs, with a focus on accessibility, cross-device compatibility, SEO, lazy loading, and code splitting.',
    tags: ['React', 'Figma', 'Accessibility', 'SEO', 'Performance'],
  },
  {
    year: '2023 — Present',
    role: 'Contract Software Engineer',
    company: 'Independent',
    description:
      'Shipped production web, mobile, and backend systems for Nigerian and international teams, including WeatherOps, MyDonation, Optimal Health, and marketplace products.',
    tags: ['React', 'FastAPI', 'Go', 'Cloud', 'Client Delivery'],
  },
  {
    year: '2024 — 2025',
    role: 'Creator & Lead Engineer',
    company: 'PlusPlusPlus',
    description:
      'Designed, launched, and scaled an exam-preparation platform to more than 2,000 active users, owning product decisions, payment flows, learning features, and delivery.',
    tags: ['Product', 'Python', 'Flask', 'MongoDB', 'Paystack'],
  },
  {
    year: '2021 — 2027',
    role: 'B.Tech, Software Engineering',
    company: 'Federal University of Technology, Akure',
    description:
      'Studying software engineering with coursework in data structures and algorithms, systems programming, enterprise architecture, software design, networking, and Java.',
    tags: ['Algorithms', 'Systems', 'Architecture', 'Networking'],
  },
];

export const socialLinks = [
  { label: 'GitHub',   href: 'https://www.github.com/Kizito24',        icon: 'github'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kizitochiazor',   icon: 'linkedin' },
  { label: 'Twitter',  href: 'https://www.twitter.com/kizito___',      icon: 'twitter'  },
];
