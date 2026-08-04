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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
    : undefined);
const profileImage = 'https://avatars.githubusercontent.com/u/101436273?v=4';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chinoyelum Kizito Chiazor',
  alternateName: 'Kizito Chiazor',
  url: siteUrl ?? 'https://github.com/Kizito24',
  image: profileImage,
  jobTitle: 'Full-Stack Software Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibadan',
    addressRegion: 'Oyo State',
    addressCountry: 'NG',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Federal University of Technology, Akure',
  },
  sameAs: [
    'https://github.com/Kizito24',
    'https://www.linkedin.com/in/kizitochiazor',
    'https://twitter.com/kizito___',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Go',
    'Python',
    'FastAPI',
    'Cloud Engineering',
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: 'Kizito Chiazor — Full-Stack Software Engineer',
  description:
    'Portfolio of Chinoyelum Kizito Chiazor, a full-stack software engineer building production applications with React, Next.js, TypeScript, Go, Python, and React Native.',
  alternates: siteUrl ? { canonical: '/' } : undefined,
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
    'Chinoyelum Kizito Chiazor',
  ],
  authors: [{ name: 'Chinoyelum Kizito Chiazor', url: 'https://github.com/Kizito24' }],
  creator: 'Chinoyelum Kizito Chiazor',
  openGraph: {
    title: 'Kizito Chiazor — Full-Stack Software Engineer',
    description: 'Production web, mobile, backend, and cloud engineering work.',
    url: siteUrl ?? 'https://github.com/Kizito24',
    siteName: 'Kizito Chiazor Portfolio',
    images: [{ url: profileImage, width: 460, height: 460, alt: 'Chinoyelum Kizito Chiazor' }],
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kizito Chiazor — Full-Stack Software Engineer',
    description: 'Production web, mobile, backend, and cloud engineering work.',
    images: [profileImage],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
