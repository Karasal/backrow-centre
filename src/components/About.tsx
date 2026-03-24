import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Aperture, Sparkles } from 'lucide-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const STATS = [
  { value: 20, suffix: '+', label: 'Projects Completed' },
  { value: 5, suffix: '', label: 'Brand Partners' },
  { value: 0, suffix: '', label: 'Hamilton', isText: true },
  { value: 2022, suffix: '', label: 'Established', isYear: true },
];

const SKILLS = [
  { name: 'Video Production', percent: 95 },
  { name: 'Photography', percent: 90 },
  { name: 'Colour Grading', percent: 85 },
  { name: 'Sound Design', percent: 75 },
  { name: 'Motion Graphics', percent: 70 },
];

function AnimatedStat({ value, suffix, label, isText, isYear }: {
  value: number; suffix: string; label: string; isText?: boolean; isYear?: boolean;
}) {
  const { count, ref } = useAnimatedCounter(value, isYear ? 1500 : 2000);

  return (
    <div className="text-center">
      <span ref={ref} className="block text-5xl md:text-6xl font-display leading-none mb-2">
        {isText ? 'Hamilton' : isYear ? count : `${count}${suffix}`}
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-ink/40">
        {isText ? '& Beyond' : label}
      </span>
    </div>
  );
}

function SkillBar({ name, percent }: { name: string; percent: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-light">{name}</span>
        <span className="text-[10px] font-mono text-ink/40">{percent}%</span>
      </div>
      <div className="h-[2px] bg-ink/10 overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

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
            >
              <AnimatedStat {...stat} />
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

            <div className="grid grid-cols-2 gap-12 mb-16">
              <div>
                <h4 className="font-display text-xl uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-accent" /> Story
                </h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Finding the narrative thread that makes every project resonate with its audience.
                </p>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-4 flex items-center gap-2">
                  <Aperture size={18} className="text-accent" /> Craft
                </h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Meticulous attention to composition, light, and movement in every frame.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-ink/30 mb-6 block">
                Core Skills
              </span>
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <SkillBar name={skill.name} percent={skill.percent} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
