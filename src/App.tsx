import Nav from './components/Nav';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import WorksGrid from './components/WorksGrid';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import VideoShowreel from './components/VideoShowreel';
import HorizontalShowcase from './components/HorizontalShowcase';
import About from './components/About';
import GearSection from './components/GearSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import SectionTransition from './components/ui/SectionTransition';
import CTABanner from './components/CTABanner';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink overflow-x-hidden">
      <LoadingScreen />
      <div className="grain" />
      <CustomCursor />
      <ScrollProgress />
      <Nav />

      <Hero />
      <FeaturedProject />
      <SectionTransition variant="accent" />
      <WorksGrid />
      <CTABanner text="Ready to tell your story?" variant="accent" />
      <Services />
      <ProcessSection />
      <SectionTransition variant="accent" />
      <VideoShowreel />
      <HorizontalShowcase />
      <SectionTransition />
      <About />
      <GearSection />
      <CTABanner text="Let's make something extraordinary" buttonText="Start a Project" />
      <Testimonials />
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  );
}
