import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    quote: "Nathan brought our brand vision to life. His eye for detail and ability to capture the right moments made all the difference.",
    author: 'Sarah Mitchell',
    role: 'Creative Director, Revive Streetwear',
  },
  {
    quote: "Professional, creative, and genuinely easy to work with. The event coverage exceeded our expectations.",
    author: 'James Hartley',
    role: 'Events Manager, Paston Arts Festival',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-b border-paper/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-20"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl italic font-light leading-snug mb-8 text-paper/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="text-sm font-mono uppercase tracking-widest text-paper/60">
                  {t.author}
                </span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-paper/30 mt-1">
                  {t.role}
                </span>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
