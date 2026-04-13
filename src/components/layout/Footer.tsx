'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons';
import { navLinks } from '@/data';

const socials = [
  { icon: GithubIcon,   href: 'https://github.com/kizitoch',     label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/kizitoch', label: 'LinkedIn' },
  { icon: TwitterIcon,  href: 'https://twitter.com/kizitoch',     label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text">KC.</span>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1 max-w-xs">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-600">
          <span>© {new Date().getFullYear()} Kizito Chiazor. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={12} className="text-indigo-400 fill-indigo-400" /> using Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
