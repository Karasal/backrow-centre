import { motion } from 'motion/react';

interface SectionTransitionProps {
  variant?: 'line' | 'accent';
}

export default function SectionTransition({ variant = 'line' }: SectionTransitionProps) {
  if (variant === 'accent') {
    return (
      <div className="relative py-4 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
        />
      </div>
    );
  }

  return (
    <div className="relative py-4 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-paper/20 to-transparent origin-center"
      />
    </div>
  );
}
