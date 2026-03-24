import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Aperture, Sparkles } from 'lucide-react';

const STATS = [
  { value: '20+', label: 'Projects Completed' },
  { value: '5', label: 'Brand Partners' },
  { value: 'Hamilton', label: '& Beyond' },
  { value: '2022', label: 'Established' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 bg-paper text-ink">
      <div className="container mx-auto px-6">
        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 pb-24 border-b border-ink/10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <span className="block text-5xl md:text-6xl font-display leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-ink/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-ink/10 overflow-hidden"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200"
                alt="Behind the camera"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
                style={{ y: imgY }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-ink/40 mb-4 block">
              The Philosophy
            </span>
            <h2 className="text-5xl md:text-7xl leading-[0.9] mb-8">
              Beyond the<br />Front Row
            </h2>
            <p className="text-xl leading-relaxed mb-6 font-light">
              BackRowCentre Media is the creative practice of Nathan McCrory. Based in Hamilton, Ontario,
              I specialize in video production, photography, and visual content that helps brands
              and artists tell their story.
            </p>
            <p className="text-lg leading-relaxed mb-12 font-light text-ink/60">
              Every project starts with listening. Every frame is intentional. The best seat
              in the house isn't always at the front — it's where you see the full picture.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-display text-xl uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={18} /> Story
                </h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Finding the narrative thread that makes every project resonate with its audience.
                </p>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-4 flex items-center gap-2">
                  <Aperture size={18} /> Craft
                </h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Meticulous attention to composition, light, and movement in every frame.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
