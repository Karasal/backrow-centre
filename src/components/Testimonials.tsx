import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import MagneticButton from './ui/MagneticButton';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = TESTIMONIALS[current];

  return (
    <section
      className="py-24 md:py-40 border-t border-b border-paper/5 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
            What Clients Say
          </span>
          <h2 className="text-6xl md:text-8xl leading-none">Testimonials</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quote */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[200px] font-display leading-none text-accent/[0.05] pointer-events-none select-none">
            &ldquo;
          </span>

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-accent" />
                  ))}
                </div>

                <p className="text-2xl md:text-4xl italic font-light leading-snug mb-8 text-paper/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <span className="text-sm font-mono uppercase tracking-widest text-accent">
                    {t.author}
                  </span>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/30 mt-1">
                    {t.role}
                  </span>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <MagneticButton strength={0.4}>
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                data-cursor-hover
              >
                <ChevronLeft size={18} />
              </button>
            </MagneticButton>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-accent w-6' : 'bg-paper/20'
                  }`}
                />
              ))}
            </div>

            <MagneticButton strength={0.4}>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                data-cursor-hover
              >
                <ChevronRight size={18} />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
