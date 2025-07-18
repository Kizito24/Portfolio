// import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
  <Head>
    <title>Kizito&#39;s Portfolio</title>
  </Head>

  {/* Header */}
    <Header />
  {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero />
    </section>
  {/* About */}

  {/* Experience */}

  {/* Skills */}

  {/* Projects */}

  {/* Contact Me */}
</div>
  );
}