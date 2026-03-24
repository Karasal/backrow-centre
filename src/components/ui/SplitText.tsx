import { motion } from 'motion/react';

interface SplitTextProps {
  children: string;
  mode?: 'chars' | 'words';
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  delay?: number;
}

export default function SplitText({
  children,
  mode = 'chars',
  className = '',
  staggerDelay = 0.03,
  once = true,
  delay = 0,
}: SplitTextProps) {
  const items = mode === 'chars' ? children.split('') : children.split(' ');

  return (
    <span className={`inline-block ${className}`} aria-label={children}>
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          aria-hidden
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </span>
  );
}
