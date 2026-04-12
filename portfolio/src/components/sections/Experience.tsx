'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-[#0d0d10] overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Accent blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-10 dark:opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #6366f1, #a855f7)', filter: 'blur(120px)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            My Journey
          </span>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50"
          >
            Experience & Growth
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-lg mx-auto">
            From writing my first line of code to founding a startup — here&apos;s the journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-14 md:pl-0`}
                  >
                    <div className="p-5 rounded-2xl glass glass-hover border border-zinc-200 dark:border-zinc-800/60 hover:border-indigo-400/30 transition-colors duration-300 group">
                      {/* Year badge */}
                      <span className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
                        {exp.year}
                      </span>

                      <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold gradient-text mb-3">{exp.company}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="w-3.5 h-3.5 rounded-full gradient-bg ring-4 ring-zinc-50 dark:ring-[#0d0d10] shadow-md"
                    />
                  </div>

                  {/* Empty side (keeps grid balanced on desktop) */}
                  <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
