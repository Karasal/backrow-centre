import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, ClipboardList, Camera, Package } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';

const ICONS: Record<string, React.ReactNode> = {
  search: <Search size={24} />,
  clipboard: <ClipboardList size={24} />,
  camera: <Camera size={24} />,
  package: <Package size={24} />,
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
            How I Work
          </span>
          <h2 className="text-6xl md:text-8xl leading-none">The Process</h2>
        </motion.div>

        {/* Desktop: horizontal with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-paper/5">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent/30"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Large background number */}
                <span className="absolute -top-4 -left-2 text-[120px] font-display leading-none text-accent/[0.06] pointer-events-none select-none">
                  {step.number}
                </span>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full border-2 border-accent bg-ink mb-8 relative z-10" />

                {/* Mobile timeline line */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full border-2 border-accent bg-ink" />
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex-1 h-px bg-paper/10" />
                  )}
                </div>

                <div className="relative z-10">
                  <div className="text-accent/60 mb-4">
                    {ICONS[step.icon]}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-paper/30 mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-3xl uppercase mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/50">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
