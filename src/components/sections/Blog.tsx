'use client';

import { motion, type Variants } from 'framer-motion';
import { BookOpenText, Calendar, Clock, PenLine, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-24 sm:py-32 light-offwhite dark:bg-zinc-950 overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 h-[260px] w-[720px] -translate-x-1/2 opacity-15 dark:opacity-10"
          style={{ background: 'linear-gradient(135deg, #10b981, #6366f1)', filter: 'blur(110px)' }}
        />
        <div className="absolute inset-0 grid-lines opacity-40 dark:opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            <PenLine size={15} aria-hidden="true" />
            Technical Writing
          </span>
          <h2
            id="blog-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50"
          >
            Blog & Insights
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Professional, easy-to-follow writeups on the engineering decisions behind reliable web,
            fintech, and cloud systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <BookOpenText size={13} aria-hidden="true" />
                  {post.topic}
                </span>
              </div>

              <h3 className="text-xl font-extrabold leading-snug text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-50 dark:group-hover:text-indigo-400">
                {post.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden="true" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.summary}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
