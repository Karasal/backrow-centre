import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function VideoShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent mb-4 block">
            Watch
          </span>
          <h2 className="text-6xl md:text-8xl leading-none">The Reel</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-sm"
          data-cursor-label="Play"
        >
          {/* Poster */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1600"
              alt="Showreel poster"
              className="w-full h-full object-cover grayscale-[60%] brightness-[0.4] animate-ken-burns"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30" />
          </div>

          {/* Play button overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-6"
              >
                <MagneticButton strength={0.2}>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 rounded-full border-2 border-accent/60 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all duration-500 group"
                    data-cursor-label="Play"
                  >
                    <Play
                      size={32}
                      fill="currentColor"
                      className="text-paper ml-1 group-hover:scale-110 transition-transform"
                    />
                  </button>
                </MagneticButton>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper/40">
                  Play Showreel • 1:20
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Playing state */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-ink flex flex-col items-center justify-center gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-accent"
                >
                  <Play size={48} fill="currentColor" />
                </motion.div>
                <p className="text-sm font-mono uppercase tracking-widest text-paper/40">
                  Showreel Coming Soon
                </p>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="mt-4 p-2 border border-paper/20 rounded-full hover:bg-paper/10 transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
