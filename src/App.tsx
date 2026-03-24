import Nav from './components/Nav';
import Hero from './components/Hero';
import WorksGrid from './components/WorksGrid';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-paper selection:bg-paper selection:text-ink overflow-x-hidden">
      <div className="grain" />
      <CustomCursor />
      <Nav />
      <Hero />
      <WorksGrid />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
