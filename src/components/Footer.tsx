import { motion } from 'motion/react';

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
              className="text-4xl font-display uppercase tracking-tighter opacity-[0.15]"
            >
              BackRowCentre • Film • Photo • Story •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-ink border-t border-paper/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-paper/30">
            &copy; 2025 BackRowCentre Media. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/backrowcentre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest font-mono text-paper/30 hover:text-paper/60 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest font-mono text-paper/30 hover:text-paper/60 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
