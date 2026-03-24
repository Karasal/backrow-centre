import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import SplitText from './ui/SplitText';
import MagneticButton from './ui/MagneticButton';

const TAGLINES = ['Film', 'Photo', 'Story', 'Vision'];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 150]);

  const [taglineIdx, setTaglineIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIdx((prev) => (prev + 1) % TAGLINES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1: Background image with dolly */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-[-10%] animate-dolly"
          animate={{
            x: mousePos.x * 20,
            y: mousePos.y * 20,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        >
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=2000"
            alt="Cinematic ocean"
            className="w-full h-full object-cover grayscale brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Layer 2: Light leak overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePos.x * 40,
            y: mousePos.y * 40,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-accent/[0.04]" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      </motion.div>

      {/* Layer 3: Text content (counter-moves) */}
      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        animate={{
          x: mousePos.x * -5,
          y: mousePos.y * -5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      >
        {/* Entrance sequence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-paper/20 rounded-full text-[10px] uppercase tracking-[0.3em] font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Hamilton, ON • Creative Media
          </motion.span>

          {/* Main headline with split text */}
          <motion.div style={{ y }}>
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] mb-8">
              <SplitText delay={0.8} staggerDelay={0.04}>VISUAL</SplitText>
              <br />
              <SplitText delay={1.2} staggerDelay={0.04}>STORYTELLING</SplitText>
            </h1>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24"
          >
            <MagneticButton strength={0.4}>
              <a
                href="#works"
                className="group flex items-center gap-4"
                data-cursor-label="View"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-paper group-hover:text-ink group-hover:border-accent transition-all duration-500"
                >
                  <Play size={20} fill="currentColor" />
                </motion.div>
                <span className="text-xs uppercase tracking-widest font-mono">
                  View Work
                </span>
              </a>
            </MagneticButton>

            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-accent/50" />
              <motion.span
                key={taglineIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-mono uppercase tracking-[0.3em] text-paper/50 min-w-[60px]"
              >
                {TAGLINES[taglineIdx]}
              </motion.span>
              <div className="w-2 h-4 bg-accent/60 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-mono opacity-40">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-gradient-to-b from-accent/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
