import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-paper/40 mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-[12vw] leading-none mb-12 italic">Let's Create</h2>
          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="mailto:contact@backrowcentre.com"
              className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:italic transition-all"
              whileHover={{ x: 10 }}
              data-cursor-hover
            >
              contact@backrowcentre.com
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </motion.a>
            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://www.instagram.com/backrowcentre"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border border-paper/20 rounded-full hover:bg-paper hover:text-ink transition-colors duration-300"
                data-cursor-hover
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border border-paper/20 rounded-full hover:bg-paper hover:text-ink transition-colors duration-300"
                data-cursor-hover
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
