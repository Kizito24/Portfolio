import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, BookOpen, MessageSquare } from 'lucide-react';
import { blogPosts } from '@/data';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Kizito Chiazor`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Split writeup by double newlines to render as paragraphs
  const paragraphs = post.writeup.split('\n\n');

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 py-24 sm:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-15 dark:opacity-10"
          style={{ background: 'linear-gradient(135deg, #6366f1, #10b981)', filter: 'blur(130px)' }}
        />
        <div className="absolute inset-0 grid-lines opacity-30 dark:opacity-40" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 z-10">
        {/* Back button */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-indigo-400/40 transition-all duration-200 group mb-10 text-sm font-semibold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-650 dark:bg-indigo-500/15 dark:text-indigo-400">
              <BookOpen size={13} />
              {post.topic}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500">
              <Clock size={13} />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
            <Calendar size={14} />
            <span>Published {post.date}</span>
          </div>
        </header>

        {/* Separator */}
        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-8" />

        {/* Article content */}
        <article className="prose dark:prose-invert max-w-none">
          {paragraphs.map((p, index) => {
            if (index === 0) {
              // Style the first paragraph with a drop cap or larger text
              return (
                <p
                  key={index}
                  className="text-zinc-750 dark:text-zinc-200 text-xl leading-relaxed mb-6 font-medium first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-indigo-500 first-letter:mt-1"
                >
                  {p}
                </p>
              );
            }
            return (
              <p
                key={index}
                className="text-zinc-650 dark:text-zinc-300 text-lg leading-relaxed mb-6 font-normal"
              >
                {p}
              </p>
            );
          })}
        </article>

        {/* Separator */}
        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-12" />

        {/* CTA Footer */}
        <div className="rounded-2xl glass border border-zinc-200 dark:border-zinc-800/80 p-8 text-center bg-white/50 dark:bg-zinc-900/20">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Interested in this topic?
          </h3>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-6 max-w-md mx-auto">
            Let&apos;s talk about building high-integrity fintech products, resilient cloud architecture, or blockchain integrations.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity glow-indigo-sm text-sm"
          >
            <MessageSquare size={15} />
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </div>
  );
}
