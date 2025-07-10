// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div  className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
>
  <Head>
    <title>Kizito&#39;s Portfolio</title>
  </Head>

  {/* Header */}
    <Header />
  {/* Hero */}
  
  {/* About */}

  {/* Experience */}

  {/* Skills */}

  {/* Projects */}

  {/* Contact Me */}
</div>
  );
}
