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
  title: 'Kizito Chiazor — Full-Stack Product Engineer',
  description:
    'Portfolio of Kizito Chiazor, a full-stack product engineer building web, mobile, backend, cloud, fintech, and infrastructure systems.',
  keywords: [
    'software engineer',
    'developer',
    'cloud engineer',
    'React',
    'Next.js',
    'Python',
    'portfolio',
    'React Native',
    'FastAPI',
    'Golang',
    'Kizito Chiazor',
  ],
  authors: [{ name: 'Kizito Chiazor' }],
  creator: 'Kizito Chiazor',
  openGraph: {
    title: 'Kizito Chiazor — Full-Stack Product Engineer',
    description: 'Selected product, mobile, backend, and infrastructure work.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kizito Chiazor — Full-Stack Product Engineer',
    description: 'Selected product, mobile, backend, and infrastructure work.',
    creator: '@kizito___',
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
