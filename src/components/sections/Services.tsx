'use client';

import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, ChevronRight, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-[#0d0d10] overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] opacity-15 dark:opacity-10"
          style={{ background: 'linear-gradient(135deg, #6366f1, #10b981)', filter: 'blur(110px)' }}
        />
        <div className="absolute inset-0 grid-lines opacity-50 dark:opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            What I Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50"
          >
            Specialised Services
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Focused solutions for high-stakes technical challenges — delivered to
            fintech companies, hedge funds, and cloud-native organisations worldwide.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
                svc.featured
                  ? 'border-indigo-400/40 dark:border-indigo-500/30 bg-white dark:bg-zinc-900/70 shadow-xl dark:shadow-indigo-500/5'
                  : 'border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 hover:border-indigo-400/30'
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${svc.gradient}`} aria-hidden="true" />

              {/* Featured glow */}
              {svc.featured && (
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(16,185,129,0.05))',
                  }}
                  aria-hidden="true"
                />
              )}

              <div className="relative flex flex-col flex-1 p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="min-w-0">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${
                        svc.featured
                          ? 'bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700'
                      }`}
                    >
                      {svc.eyebrow}
                    </span>
                    <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50">
                      {svc.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {svc.subtitle}
                    </p>
                  </div>
                  {/* Starting price */}
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mb-0.5">Starting from</div>
                    <div className="text-lg font-extrabold gradient-text tabular-nums">{svc.startingFrom}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2.5 mb-8 flex-1" aria-label={`${svc.title} deliverables`}>
                  {svc.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2
                        size={15}
                        className={`mt-0.5 shrink-0 bg-gradient-to-br ${svc.gradient} text-white rounded-full`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={svc.ctaHref}
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group/btn ${
                    svc.featured
                      ? 'gradient-bg text-white hover:opacity-90 glow-indigo-sm'
                      : 'glass glass-hover border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400/40 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {svc.cta}
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl glass border border-indigo-500/20 dark:border-indigo-500/15 text-center"
        >
          <p className="text-zinc-700 dark:text-zinc-300 font-semibold text-lg mb-1">
            Not sure which service fits your need?
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-5">
            A free 30-minute discovery call — no pitch, no obligation. Just a frank conversation about your challenge.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity glow-indigo-sm text-sm"
          >
            <CalendarDays size={15} />
            Book Free Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
