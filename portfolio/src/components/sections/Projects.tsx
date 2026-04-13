'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projects } from '@/data';

const categories = ['All', 'Web App', 'Platform', 'Cloud', 'Blockchain', 'Dev Tools', 'FinTech'];

// Color swatches per category
const categorySwatches: Record<string, string> = {
  'Web App':    'from-blue-500/30 to-indigo-500/30',
  'Platform':   'from-emerald-500/30 to-teal-500/30',
  'Cloud':      'from-sky-500/30 to-blue-600/30',
  'Blockchain': 'from-amber-500/30 to-orange-500/30',
  'Dev Tools':  'from-violet-500/30 to-purple-500/30',
  'FinTech':    'from-indigo-500/30 to-cyan-500/30',
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function projectInitials(title: string) {
  return title
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-[#0d0d10] overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400 mb-2 block">
            What I&apos;ve Built
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50 leading-[1.1]"
          >
            Featured Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto">
            A selection of real-world projects that demonstrate my range across web, cloud, and blockchain.
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              role="tab"
              aria-selected={filter === cat}
              animate={filter === cat ? { scale: 1.04 } : { scale: 1 }}
              transition={{ duration: 0.15 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'gradient-bg text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                  : 'glass glass-hover border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => {
              const swatch = categorySwatches[project.category] ?? 'from-indigo-500/30 to-violet-500/30';
              return (
                <motion.article
                  key={project.title}
                  variants={cardVariants}
                  className="group relative flex flex-col rounded-2xl glass glass-hover border border-zinc-200 dark:border-zinc-800/60 overflow-hidden hover:border-indigo-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] will-change-transform"
                >
                  {/* Gradient swatch image area */}
                  <div
                    className={`relative h-[120px] w-full bg-gradient-to-br ${swatch} flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                  >
                    <span className="text-3xl font-black text-white/20 tracking-tight select-none">
                      {projectInitials(project.title)}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
                              <Star size={11} className="fill-amber-500" />
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description — brighter contrast */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-5">
                      {project.description}
                    </p>

                    {/* Impact metric — TrendingUp icon instead of emoji */}
                    <div className="flex items-center gap-1.5 mb-4 px-3 py-2 rounded-lg bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/15">
                      <TrendingUp size={13} className="text-indigo-500 dark:text-indigo-400 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{project.impact}</span>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group/link"
                      >
                        <GithubIcon size={14} className="group-hover/link:scale-110 transition-transform" />
                        Source
                      </a>
                      <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors group/link"
                      >
                        <ExternalLink size={13} className="group-hover/link:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/kizitoch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl hover:border-indigo-400/40 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
