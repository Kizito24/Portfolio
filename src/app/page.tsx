import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

const Services   = dynamic(() => import('@/components/sections/Services'));
const Projects   = dynamic(() => import('@/components/sections/Projects'));
const About      = dynamic(() => import('@/components/sections/About'));
const Skills     = dynamic(() => import('@/components/sections/Skills'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Contact    = dynamic(() => import('@/components/sections/Contact'));
const Footer     = dynamic(() => import('@/components/layout/Footer'));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
