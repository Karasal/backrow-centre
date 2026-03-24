import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Menu, X } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const NAV_LINKS = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-ink/80 backdrop-blur-md border-b border-paper/10' : 'py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <MagneticButton strength={0.2}>
            <a href="#" className="group flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-accent text-ink flex items-center justify-center font-display text-xl leading-none"
              >
                B
              </motion.div>
              <span className="font-display text-2xl tracking-tighter uppercase">
                BackRowCentre
              </span>
            </a>
          </MagneticButton>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <MagneticButton key={link.name} strength={0.3}>
                <a
                  href={link.href}
                  className={`relative text-sm uppercase tracking-widest font-mono transition-colors ${
                    activeSection === link.href.slice(1) ? 'text-accent' : 'hover:text-paper/60'
                  }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-accent"
                    initial={false}
                    animate={{
                      width: activeSection === link.href.slice(1) ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </MagneticButton>
            ))}
            <MagneticButton strength={0.4}>
              <a
                href="https://www.instagram.com/backrowcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-paper/20 rounded-full hover:bg-accent hover:border-accent hover:text-ink transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </MagneticButton>
          </div>

          <button
            className="md:hidden p-2 text-paper"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl font-display uppercase tracking-tighter hover:text-accent transition-all"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 mt-8"
            >
              <a href="https://www.instagram.com/backrowcentre" className="p-4 border border-paper/20 rounded-full hover:bg-accent hover:border-accent hover:text-ink transition-all">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@backrowcentre.com" className="p-4 border border-paper/20 rounded-full hover:bg-accent hover:border-accent hover:text-ink transition-all">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
