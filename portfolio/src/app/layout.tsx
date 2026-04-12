import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kizito Chiazor — Software Engineer & Founder',
  description:
    'Software Engineer, Cybersecurity Enthusiast, and Entrepreneur building global digital solutions. Specializing in React, Next.js, Python, and modern web technologies.',
  keywords: [
    'software engineer',
    'developer',
    'cybersecurity',
    'React',
    'Next.js',
    'Python',
    'portfolio',
    'founder',
    'entrepreneur',
    'Kizito Chiazor',
  ],
  authors: [{ name: 'Kizito Chiazor' }],
  creator: 'Kizito Chiazor',
  openGraph: {
    title: 'Kizito Chiazor — Software Engineer & Founder',
    description: 'Building the future, one line of code at a time.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kizito Chiazor — Software Engineer & Founder',
    description: 'Building the future, one line of code at a time.',
    creator: '@kizitoch',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
