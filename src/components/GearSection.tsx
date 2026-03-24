import React from 'react';
import { motion } from 'motion/react';
import { Camera, Monitor } from 'lucide-react';
import { GEAR } from '../data/gear';
import MagneticButton from './ui/MagneticButton';

const ICONS: Record<string, React.ReactNode> = {
  camera: <Camera size={20} />,
  monitor: <Monitor size={20} />,
};

export default function GearSection() {
  return (
    <section className="py-24 md:py-40 border-t border-paper/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
            The Toolkit
          </span>
          <h2 className="text-6xl md:text-8xl leading-none">Gear & Software</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {GEAR.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-accent">{ICONS[category.icon]}</span>
                <h3 className="font-display text-2xl uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-1">
                {category.items.map((item, idx) => (
                  <MagneticButton key={item.name} strength={0.15}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + idx * 0.08 }}
                      className="group flex items-center justify-between py-4 px-4 border-b border-paper/5 hover:bg-paper/[0.03] transition-colors rounded-sm"
                    >
                      <span className="font-light group-hover:text-accent transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-paper/30">
                        {item.note}
                      </span>
                    </motion.div>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
