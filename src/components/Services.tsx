import React from 'react';
import { motion } from 'motion/react';
import { Film, Camera, Smartphone, Video, Clapperboard, SlidersHorizontal } from 'lucide-react';
import { SERVICES } from '../data/services';

const ICONS: Record<string, React.ReactNode> = {
  film: <Film size={24} />,
  camera: <Camera size={24} />,
  smartphone: <Smartphone size={24} />,
  video: <Video size={24} />,
  clapperboard: <Clapperboard size={24} />,
  sliders: <SlidersHorizontal size={24} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 border-t border-paper/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-paper/40 mb-4 block">
            What I Do
          </span>
          <h2 className="text-6xl md:text-8xl leading-none">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative bg-ink p-10 cursor-pointer overflow-hidden"
              data-cursor-hover
            >
              {/* Hover fill animation */}
              <div className="absolute inset-0 bg-paper transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              <div className="relative z-10 transition-colors duration-500 group-hover:text-ink">
                <div className="mb-6 text-paper/60 group-hover:text-ink/60 transition-colors duration-500">
                  {ICONS[service.icon]}
                </div>
                <h3 className="font-display text-2xl uppercase mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/50 group-hover:text-ink/60 transition-colors duration-500">
                  {service.description}
                </p>
                <motion.div
                  className="mt-6 w-8 h-px bg-paper/20 group-hover:bg-ink/20 group-hover:w-12 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
