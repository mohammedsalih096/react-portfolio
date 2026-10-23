import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Timeline from '../src/components/Timeline';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
