'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronRight, Download, CalendarDays } from 'lucide-react';
import Link from 'next/link';

const roles = [
  'FinTech Engineer',
  'Cloud Engineer',
  'Full-Stack Developer',
  'Technical Advisor',
];

const stats = [
  { value: '$200K+', label: 'Client Value Delivered' },
  { value: '3', label: 'Continents Served' },
  { value: '99.9%', label: 'Uptime Delivered' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full bg-indigo-500/20 dark:bg-indigo-500/12 blur-[130px] animate-blob" />
        <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-[130px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-40" />
        <div className="absolute inset-0 dark:block hidden [background:radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#09090b_100%)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-8"
        >
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Accepting new contracts<span className="hidden sm:inline"> — USD · Remote · Worldwide</span>
          <ChevronRight size={14} className="shrink-0" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="text-[52px] sm:text-[72px] lg:text-[96px] font-extrabold mb-4 tracking-[-0.03em] leading-none"
        >
          Kizito{' '}
          <span className="gradient-text">Chiazor</span>
        </motion.h1>

        {/* Animated role */}
        <div
          className="h-12 flex items-center justify-center mb-8 overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.38, ease: 'easeInOut' }}
              className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-zinc-500 dark:text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build{' '}
          <span className="text-zinc-700 dark:text-zinc-300 font-semibold">financial-grade software systems</span>
          {' '}and ship cloud infrastructure that scales without surprises.
          Trusted by startups and enterprises across{' '}
          <span className="text-zinc-700 dark:text-zinc-300 font-semibold">3 continents.</span>
        </motion.p>

        {/* Primary CTAs — 2 buttons only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-14"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-95 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] text-sm sm:text-base"
            >
              <CalendarDays size={16} />
              Book a Discovery Call
            </Link>
            <Link
              href="#services"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 glass glass-hover text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700/60 hover:border-indigo-400/50 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 text-sm sm:text-base overflow-hidden group"
            >
              View Services
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              <span className="absolute bottom-0 left-0 h-px w-0 bg-indigo-400 group-hover:w-full transition-all duration-200 ease-out origin-left" aria-hidden="true" />
            </Link>
          </div>
          {/* Resume text link below the pair */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 font-medium transition-colors text-sm mt-1"
          >
            <Download size={13} />
            Download Resume
          </a>
        </motion.div>

        {/* Stats — tertiary, smaller */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex items-center justify-center gap-0 mb-10"
        >
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center">
              <div className="text-center px-6 sm:px-10">
                <div className="text-2xl font-extrabold gradient-text">{value}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-600 mt-1">{label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 shrink-0" aria-hidden="true" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Trust signals — single inline strip, no pill wrappers */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="text-xs text-zinc-500 dark:text-zinc-500 tracking-wide mb-28 sm:mb-0"
        >
          NDA-Ready · USD Invoicing · Remote Worldwide · 48hr Start
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 dark:text-zinc-700 pt-2 sm:pt-0"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={15} />
      </motion.div>
    </section>
  );
}
