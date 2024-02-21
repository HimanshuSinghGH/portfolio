import Head from "next/head";
import SnackbarProvider from "react-simple-snackbar";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <SnackbarProvider>
      <Head>
        <title>Himanshu Singh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* About */}
      <About />
      {/* Education */}
      <section id="education">
        <Education />
      </section>
      {/* Publications */}
      <section id="publications">
        <Publications />
      </section>
      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>
      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Footer */}
      <Footer />
    </SnackbarProvider>
  );
}
