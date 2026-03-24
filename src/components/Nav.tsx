import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-ink/80 backdrop-blur-md border-b border-paper/10' : 'py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="group flex items-center gap-2" data-cursor-hover>
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-paper text-ink flex items-center justify-center font-display text-xl leading-none"
            >
              B
            </motion.div>
            <span className="font-display text-2xl tracking-tighter uppercase">
              BackRowCentre
            </span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm uppercase tracking-widest font-mono hover:text-paper/60 transition-colors group"
                data-cursor-hover
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-paper group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://www.instagram.com/backrowcentre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-paper/20 rounded-full hover:bg-paper hover:text-ink transition-all duration-300"
              data-cursor-hover
            >
              <Instagram size={18} />
            </a>
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
                className="text-4xl font-display uppercase tracking-tighter hover:italic transition-all"
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
              <a
                href="https://www.instagram.com/backrowcentre"
                className="p-4 border border-paper/20 rounded-full"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:contact@backrowcentre.com"
                className="p-4 border border-paper/20 rounded-full"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
