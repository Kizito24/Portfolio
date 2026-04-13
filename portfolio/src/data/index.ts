export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
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
    { name: 'HTML / CSS', level: 95 },
  ],
  backend: [
    { name: 'Python', level: 88 },
    { name: 'Flask', level: 82 },
    { name: 'Go', level: 72 },
    { name: 'Node.js', level: 75 },
    { name: 'REST APIs', level: 85 },
  ],
  database: [
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 72 },
    { name: 'Redis', level: 55 },
  ],
  other: [
    { name: 'AWS / Cloud', level: 84 },
    { name: 'Terraform', level: 76 },
    { name: 'Kubernetes', level: 72 },
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
    id: 'fullstack',
    eyebrow: 'Foundation',
    title: 'Full-Stack Development',
    subtitle: 'End-to-End Web Engineering',
    description:
      'Production-ready web applications from wireframe to deployment — clean architecture, responsive design, CI/CD pipelines, and optimised performance.',
    deliverables: [
      'React / Next.js frontend development',
      'Python or Node.js backend & REST APIs',
      'Database design, indexing & optimisation',
      'Cloud deployment on AWS / Vercel / Railway',
    ],
    gradient: 'from-indigo-500 to-violet-500',
    startingFrom: '$2,000',
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
    gradient: 'from-amber-500 to-orange-500',
    startingFrom: '$4,000',
    cta: 'Request Assessment',
    ctaHref: '#contact',
    featured: false,
  },
];

export const projects = [
  {
    title: 'K Finance',
    description:
      'Personal finance web application built with Next.js and TypeScript. Features real-time financial tracking with Sentry error monitoring for production reliability.',
    impact: 'Live on Vercel · 29 commits · Production monitoring',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sentry'],
    github: 'https://github.com/Kizito24/k_finance',
    live: 'https://k-finance-one.vercel.app',
    featured: true,
    category: 'FinTech',
  },
  {
    title: 'PlusPlusPlus',
    description:
      'Quiz platform that gamifies learning with session-based authentication, dynamic question banks, and categorised content. Built with Flask, MongoDB, and Bootstrap for a responsive UI.',
    impact: '15 commits · Full auth system · MongoDB backend',
    tech: ['Python', 'Flask', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Kizito24/plusplusplus',
    live: '#',
    featured: true,
    category: 'Web App',
  },
  {
    title: 'Uber Clone',
    description:
      'Cross-platform mobile ride-hailing app built with Expo and React Native. Uses file-based routing, NativeWind for styling, and centralised state management.',
    impact: '17 commits · iOS & Android · TypeScript throughout',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    github: 'https://github.com/Kizito24/uber-clone_vsc',
    live: '#',
    featured: false,
    category: 'Mobile',
  },
  {
    title: 'Go E-Commerce',
    description:
      'Microservices e-commerce backend written in Go. Uses a monorepo workspace structure with Docker Compose for containerised service orchestration.',
    impact: 'Containerised · Go workspace monorepo · Docker',
    tech: ['Go', 'Docker', 'Microservices'],
    github: 'https://github.com/Kizito24/go-ecommerce',
    live: '#',
    featured: false,
    category: 'Backend',
  },
  {
    title: 'Number Facts API',
    description:
      'REST API that classifies numbers by mathematical properties — prime, perfect, Armstrong, odd/even — and enriches responses with fun facts from the Numbers API.',
    impact: 'Deployed on Render · CORS-enabled · Production WSGI',
    tech: ['Python', 'Flask', 'Gunicorn', 'Render'],
    github: 'https://github.com/Kizito24/hngx-stage1-number-facts-api',
    live: '#',
    featured: false,
    category: 'API',
  },
  {
    title: 'Synergycon',
    description:
      'Conference website for Synergycon featuring speaker listings, panelist profiles, special guest highlights, a team page, and an event gallery.',
    impact: 'Live on Vercel · 21 commits · Multi-page site',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kizito24/Synergycon',
    live: 'https://synergycon-ten.vercel.app',
    featured: false,
    category: 'Web',
  },
];

export const experiences = [
  {
    year: '2024 — Present',
    role: 'Founder & Lead Engineer',
    company: 'Campus Nest',
    description:
      'Building a student housing marketplace solving the accommodation crisis for university students across Africa. Leading full-stack engineering, product strategy, and investor conversations.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Founder'],
  },
  {
    year: '2023 — 2024',
    role: 'Freelance Software Engineer',
    company: 'Independent (Global Clients)',
    description:
      'Delivered production web applications for clients in Nigeria, the UK, and the US. Specialised in React/Next.js frontends and Python REST APIs. Maintained 100% client satisfaction across all engagements.',
    tags: ['React', 'Flask', 'MongoDB', 'USD Contracts'],
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
    year: '2021 — Present',
    role: 'Software Engineering Student',
    company: 'University',
    description:
      'Pursuing BSc Software Engineering with a focus on algorithms, cloud infrastructure, and distributed systems. Active in national hackathons, open-source projects, and campus tech leadership.',
    tags: ['Algorithms', 'Cloud', 'Research', 'Open Source'],
  },
];

export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/Kizito24',        icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kizitochiazor',   icon: 'linkedin' },
  { label: 'Twitter',  href: 'https://twitter.com/kizito___',      icon: 'twitter'  },
];
