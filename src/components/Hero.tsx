import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

const TAGLINES = ['Film', 'Photo', 'Story', 'Vision'];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const [taglineIdx, setTaglineIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIdx((prev) => (prev + 1) % TAGLINES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 20, y: y * 20 });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1505118380757-91f5816fff30?auto=format&fit=crop&q=80&w=2000"
          alt="Norfolk Coast"
          className="w-full h-full object-cover grayscale brightness-40"
          referrerPolicy="no-referrer"
          style={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block mb-4 px-4 py-1 border border-paper/30 rounded-full text-[10px] uppercase tracking-[0.3em] font-mono">
            Norfolk, UK • Creative Media
          </span>
          <motion.h1
            style={{ y }}
            className="text-[15vw] md:text-[12vw] leading-[0.85] mb-8"
          >
            Visual<br />Storytelling
          </motion.h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
            <a
              href="#works"
              className="group flex items-center gap-4"
              data-cursor-hover
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-paper group-hover:text-ink transition-colors duration-500"
              >
                <Play size={20} fill="currentColor" />
              </motion.div>
              <span className="text-xs uppercase tracking-widest font-mono">
                View Work
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-paper/30" />
              <motion.span
                key={taglineIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-mono uppercase tracking-[0.3em] text-paper/50"
              >
                {TAGLINES[taglineIdx]}
              </motion.span>
              <div className="w-2 h-4 bg-paper/50 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-mono opacity-40">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-gradient-to-b from-paper/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
