import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const SHOWCASE_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80&w=800', title: 'On Location' },
  { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800', title: 'Behind the Lens' },
  { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&q=80&w=800', title: 'In the Edit' },
  { src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800', title: 'Colour Suite' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800', title: 'Live Events' },
  { src: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80&w=800', title: 'Golden Hour' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800', title: 'The Stage' },
];

export default function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(SHOWCASE_IMAGES.length - 2) * 42}%`]
  );

  return (
    <section ref={sectionRef} className="h-[300vh] relative" data-cursor-label="Drag">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
              Behind the Scenes
            </span>
            <h2 className="text-5xl md:text-7xl leading-none">The Making Of</h2>
          </motion.div>
        </div>

        <motion.div
          className="flex gap-6 pl-6"
          style={{ x }}
        >
          {SHOWCASE_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative flex-shrink-0 w-[80vw] md:w-[40vw] aspect-[3/2] overflow-hidden rounded-sm group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              data-cursor-label="View"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover grayscale-[70%] group-hover:grayscale-[20%] brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-paper/40">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight mt-1">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
