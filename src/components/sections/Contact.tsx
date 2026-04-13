'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, CalendarDays, Clock, FileCheck, CreditCard, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons';

const socials = [
  { icon: GithubIcon,   label: 'GitHub',   href: 'https://github.com/Kizito24',      color: 'hover:text-zinc-900 dark:hover:text-zinc-50' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/kizitochiazor', color: 'hover:text-blue-500' },
  { icon: TwitterIcon,  label: 'Twitter',  href: 'https://twitter.com/kizito___',     color: 'hover:text-sky-400' },
  { icon: Mail,         label: 'Email',    href: 'mailto:kizitochiazor@gmail.com',        color: 'hover:text-indigo-500 dark:hover:text-indigo-400' },
];

const processSteps = [
  { step: '01', title: 'Discovery call', detail: '30 min · Free · No obligation' },
  { step: '02', title: 'Tailored proposal', detail: 'Delivered within 48 hours' },
  { step: '03', title: 'Project kickoff', detail: 'Starts within 1 week of sign-off' },
];

const contractDetails = [
  { icon: CreditCard,  label: 'Payment',   value: 'USD · EUR · GBP · Crypto' },
  { icon: FileCheck,   label: 'Contracts', value: 'Project-based or retainer · NDA on request' },
  { icon: Clock,       label: 'Response',  value: 'Within 4 hours during business days' },
];

type FormState = { name: string; email: string; budget: string; message: string };
type Status = 'idle' | 'sending' | 'sent';

const budgetOptions = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Ongoing retainer',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', budget: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 light-grid dark:bg-[#0d0d10] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-[120px]" />
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
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-400 mb-2 block">
            Work With Me
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-extrabold mt-3 text-zinc-900 dark:text-zinc-50 leading-[1.1]"
          >
            Ready to{' '}
            <span className="gradient-text">Start a Project?</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto leading-relaxed">
            I work with fintech companies, hedge funds, and cloud-native organisations globally.
            Book a call or drop a message — let&apos;s see if we&apos;re a fit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Primary CTA card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-indigo-500/25 shadow-lg dark:shadow-indigo-500/5">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <CalendarDays size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50">
                    Free 30-min Discovery Call
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    No pitch. No obligation. Just a frank conversation about your challenge.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Walk me through your challenge or opportunity',
                  'Get honest technical advice, immediately',
                  'Leave with a clear path forward — whatever you decide',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/kizitoch"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] text-sm"
              >
                <CalendarDays size={16} />
                Book a Free Call
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Merged Process + Engagement card */}
            <div className="p-5 rounded-2xl glass border border-zinc-200 dark:border-zinc-800/60">
              {/* Process steps */}
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500 mb-4">
                How it works
              </p>
              <div className="space-y-4">
                {processSteps.map(({ step, title, detail }) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-xs font-extrabold text-white shrink-0 border-l-2 border-indigo-500/20">
                      {step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{title}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-500">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-zinc-200 dark:border-zinc-800" />

              {/* Engagement details */}
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500 mb-4">
                Engagement details
              </p>
              <div className="space-y-3">
                {contractDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 text-sm">
                    <Icon size={15} className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">{label}:</span>{' '}
                      <span className="text-zinc-500 dark:text-zinc-500">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500 mb-3">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl glass glass-hover border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 text-sm font-medium transition-all duration-200 ${color}`}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Message form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500 mb-4">
              Or send a message
            </p>

            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 px-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 text-center"
              >
                <CheckCircle2 size={48} className="text-emerald-400" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Message received.</h3>
                <p className="text-zinc-500 dark:text-zinc-500 max-w-xs">
                  I&apos;ll review your project details and respond within 4 hours.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', budget: '', message: '' }); }}
                  className="mt-2 px-5 py-2 text-sm font-semibold gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 p-6 sm:p-8 space-y-5"
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text" required autoComplete="name"
                      value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      id="email" name="email" type="email" required autoComplete="email"
                      value={form.email} onChange={handleChange} placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Project Budget <span className="text-zinc-500 dark:text-zinc-500 font-normal">(USD)</span>
                  </label>
                  <select
                    id="budget" name="budget"
                    value={form.budget} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your project, current tech stack, timeline, and what success looks like for you..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-60 transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] cursor-pointer text-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Project Brief
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
                  Typical response: within 4 hours · NDA available on request
                </p>

                {/* Socials below form on mobile */}
                <div className="sm:hidden pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {socials.map(({ icon: Icon, label, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass glass-hover border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 text-xs font-medium transition-all duration-200 ${color}`}
                      >
                        <Icon size={13} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
