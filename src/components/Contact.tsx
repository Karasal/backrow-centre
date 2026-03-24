import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Youtube } from 'lucide-react';
import SplitText from './ui/SplitText';
import MagneticButton from './ui/MagneticButton';

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-40 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient orb that follows mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04] transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-[12vw] leading-none mb-12">
            <SplitText mode="chars" staggerDelay={0.03}>LET'S CREATE</SplitText>
          </h2>

          <div className="flex flex-col items-center gap-8">
            <MagneticButton strength={0.2}>
              <a
                href="mailto:contact@backrowcentre.com"
                className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-accent transition-all"
                data-cursor-label="Email"
              >
                contact@backrowcentre.com
                <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-accent" />
              </a>
            </MagneticButton>

            <div className="flex gap-4 mt-4">
              <MagneticButton strength={0.4}>
                <a
                  href="https://www.instagram.com/backrowcentre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-paper/20 rounded-full hover:bg-accent hover:border-accent hover:text-ink transition-all duration-300"
                  data-cursor-hover
                >
                  <Instagram size={20} />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <a
                  href="#"
                  className="p-4 border border-paper/20 rounded-full hover:bg-accent hover:border-accent hover:text-ink transition-all duration-300"
                  data-cursor-hover
                >
                  <Youtube size={20} />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto mt-20 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-8">
              <label className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-2 block">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-paper/10 pb-3 text-lg font-light outline-none focus:border-accent transition-colors placeholder:text-paper/20"
                placeholder="Your name"
              />
            </div>
            <div className="mb-8">
              <label className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-paper/10 pb-3 text-lg font-light outline-none focus:border-accent transition-colors placeholder:text-paper/20"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-10">
              <label className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-2 block">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-paper/10 pb-3 text-lg font-light outline-none focus:border-accent transition-colors resize-none placeholder:text-paper/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <MagneticButton strength={0.3} className="inline-block">
              <button
                type="submit"
                className="px-10 py-4 bg-accent text-ink font-mono text-sm uppercase tracking-widest rounded-full hover:bg-accent-light transition-colors"
                data-cursor-label="Send"
              >
                Send Message
              </button>
            </MagneticButton>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
