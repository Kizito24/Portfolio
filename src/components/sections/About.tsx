'use client';

import { motion, type Variants } from 'framer-motion';
import { BadgeCheck, Clock, Code2, Globe2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const valueProps = [
  {
    icon: BadgeCheck,
    title: 'Production ownership',
    description:
      'I take features from requirements and design through implementation, deployment, monitoring, and documentation.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Globe2,
    title: 'Cross-functional delivery',
    description:
      'I collaborate with designers and product stakeholders, translate Figma into code, and communicate trade-offs clearly.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Code2,
    title: 'Systems thinking',
    description:
      'I work across interfaces, APIs, databases, integrations, and infrastructure instead of treating features in isolation.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Async communication',
    description:
      'Clear written updates, documented decisions, and thoughtful handovers make collaboration work across locations and time zones.',
    gradient: 'from-violet-500 to-purple-500',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 light-offwhite dark:bg-zinc-950 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 grid-lines opacity-60 dark:opacity-100 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400 mb-2 block">
            The Engineer
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50 leading-[1.1]"
          >
            Who I Am
          </h2>
        </motion.div>

        {/* Image + bio */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile image + availability card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-25 animate-float pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #6366f1, #10b981)', filter: 'blur(22px)' }}
                aria-hidden="true"
              />
              {/* Photo */}
              <a
                href="https://www.linkedin.com/in/kizitochiazor"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 shadow-2xl aspect-square group/photo cursor-pointer"
              >
                <Image
                  src="/avatar.jpg"
                  alt="Chinoyelum Kizito Chiazor — Full-Stack Software Engineer"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none hidden dark:block"
                  style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.65), transparent)' }}
                  aria-hidden="true"
                />
              </a>

              {/* Floating "open" badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass border border-emerald-500/30 rounded-xl px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 shadow-xl flex items-center gap-2"
              >
                <BadgeCheck size={15} className="text-emerald-500 shrink-0" aria-hidden="true" />
                Open to engineering roles
              </motion.div>
            </div>

            {/* Availability panel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 p-5 rounded-2xl glass border border-zinc-200 dark:border-zinc-800/60"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-3">
                Currently open to
              </p>
              <ul className="space-y-2">
                {[
                  'Full-time software engineering roles',
                  'Contract and project-based opportunities',
                  'Remote or hybrid product teams',
                  'Open-source and technical collaboration',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 dark:text-zinc-500">Based in</span>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  Ibadan, Nigeria · Remote-ready
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio — client-focused */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-zinc-900 dark:text-zinc-50 leading-snug">
              A product-minded engineer who works across the stack
              <span className="gradient-text">.</span>
            </h3>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              <p>
                I&apos;m <strong className="text-zinc-900 dark:text-zinc-200">Chinoyelum Kizito Chiazor</strong>, a
                full-stack software engineer based in Ibadan, Nigeria. I build responsive product interfaces,
                dependable APIs, and the cloud-backed systems that connect them.
              </p>
              <p>
                My production work spans React, Next.js, TypeScript, React Native, Go, Python, PostgreSQL, and
                MongoDB. I have delivered banking integrations with Plaid and Dwolla, Paystack payment flows,
                microservices with gRPC, background processing, and applications used by thousands of people.
              </p>
              <p>
                I&apos;m completing a B.Tech in Software Engineering at the Federal University of Technology,
                Akure. Outside delivery work, I study system design and data-intensive applications and share
                what I learn through technical writing and LinkedIn.
              </p>
            </div>

            {/* Roles I am targeting */}
            <div className="p-5 rounded-2xl glass border border-zinc-200 dark:border-zinc-800/60 mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-3">
                Best-fit opportunities
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Engineer',
                  'Backend Engineer',
                  'Frontend Engineer',
                  'Product Engineer',
                  'React Native Engineer',
                  'Cloud / Platform Engineer',
                ].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm glow-indigo-sm"
            >
              View My Experience
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Value props */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {valueProps.map(({ icon: Icon, title, description, gradient }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="p-6 rounded-2xl glass glass-hover border border-zinc-200 dark:border-zinc-800/60 group cursor-default will-change-transform"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={18} className="text-white" />
              </div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">{title}</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
