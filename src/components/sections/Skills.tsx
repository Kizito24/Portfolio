'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Layers, Server, Database, Cpu } from 'lucide-react';
import { skills } from '@/data';

interface Skill {
  name: string;
  level: number;
}

interface CategoryCard {
  key: keyof typeof skills;
  label: string;
  icon: React.ElementType;
  color: string;
  dotColor: string;
  items: Skill[];
}

function levelLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  return 'Proficient';
}

const categories: CategoryCard[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: Layers,
    color: 'from-blue-500 to-indigo-500',
    dotColor: 'bg-blue-500',
    items: skills.frontend,
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: Server,
    color: 'from-indigo-500 to-violet-500',
    dotColor: 'bg-indigo-500',
    items: skills.backend,
  },
  {
    key: 'database',
    label: 'Database',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
    dotColor: 'bg-violet-500',
    items: skills.database,
  },
  {
    key: 'other',
    label: 'Cloud & DevOps',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    dotColor: 'bg-purple-500',
    items: skills.other,
  },
];

const extraTech = [
  'Solidity', 'Figma', 'Linux', 'Bash', 'CI/CD',
  'GitHub Actions', 'Nginx', 'AWS Lambda', 'CloudWatch', 'WebSockets',
];

function SkillBar({ name, level, delay = 0, dotColor }: Skill & { delay?: number; dotColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${dotColor}`} aria-hidden="true" />
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
        </div>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
          {levelLabel(level)}
        </span>
      </div>
      <div className="h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay }}
          className="h-full gradient-bg rounded-full"
        />
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-white dark:bg-zinc-950 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] opacity-20 dark:opacity-15 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400 mb-2 block">
            What I Know
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50 leading-[1.1]"
          >
            Skills &amp; Expertise
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto">
            A curated set of technologies I use to craft exceptional digital products.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {categories.map(({ key, label, icon: Icon, color, dotColor, items }) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="p-6 rounded-2xl glass glass-hover border border-zinc-200 dark:border-zinc-800/60 group will-change-transform"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">{label}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {items.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.08} dotColor={dotColor} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom badge strip — marquee on mobile, wrap on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 text-center">Also experienced with</p>

          {/* Mobile: scrollable single-row with fade masks */}
          <div className="relative sm:hidden">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="flex gap-2 overflow-x-auto scrollbar-none px-4 pb-1">
              {extraTech.map((tech) => (
                <span
                  key={tech}
                  className="shrink-0 px-3 py-1 text-xs font-medium rounded-full glass border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-500 hover:border-indigo-400/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: wrapping */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            {extraTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full glass border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-500 hover:border-indigo-400/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
