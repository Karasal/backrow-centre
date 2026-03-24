import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function Footer() {
  return (
    <>
      {/* Marquee */}
      <div className="py-8 bg-paper text-ink text-center overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 items-center"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="text-4xl font-display uppercase tracking-tighter opacity-[0.12]"
            >
              BackRowCentre • <span className="text-accent/30">Film</span> • Photo • <span className="text-accent/30">Story</span> •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-ink border-t border-paper/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-paper/30">
              &copy; 2025 BackRowCentre Media. All Rights Reserved.
            </div>

            <MagneticButton strength={0.3}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-paper/30 hover:text-accent transition-colors"
                data-cursor-hover
              >
                Back to Top
                <div className="w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <ArrowUp size={12} />
                </div>
              </button>
            </MagneticButton>

            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/backrowcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-mono text-paper/30 hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest font-mono text-paper/30 hover:text-accent transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
