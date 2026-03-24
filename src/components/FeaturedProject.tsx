import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import SplitText from './ui/SplitText';
import MagneticButton from './ui/MagneticButton';

export default function FeaturedProject() {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.4], [8, 0]);

  return (
    <section ref={sectionRef} className="py-24 md:py-0 md:min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-2 block">
            Featured Project
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-7 relative aspect-[16/10] overflow-hidden"
            style={{
              clipPath: useTransform(clipProgress, (v) => `inset(${v}% ${v}% ${v}% ${v}% round 4px)`),
            }}
            data-cursor-label="View"
          >
            <motion.img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover grayscale-[40%]"
              referrerPolicy="no-referrer"
              style={{ y: imgY }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  {featured.category}
                </span>
                <span className="w-8 h-px bg-paper/20" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-paper/40">
                  {featured.year}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl leading-[0.9] mb-6">
                <SplitText mode="words" staggerDelay={0.08}>{featured.title}</SplitText>
              </h2>

              <p className="text-lg leading-relaxed font-light text-paper/70 mb-8">
                {featured.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {featured.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 border border-paper/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-paper/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <MagneticButton strength={0.3}>
                <a
                  href="#works"
                  className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest font-mono text-accent hover:text-accent-light transition-colors"
                  data-cursor-label="View"
                >
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
