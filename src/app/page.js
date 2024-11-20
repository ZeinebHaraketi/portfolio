import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Poetry from "@/components/Poetry";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Poetry />
      <Contact />
    </main>
  );
}