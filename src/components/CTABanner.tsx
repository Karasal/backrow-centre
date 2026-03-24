import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

interface CTABannerProps {
  text: string;
  buttonText?: string;
  href?: string;
  variant?: 'accent' | 'dark';
}

export default function CTABanner({
  text,
  buttonText = 'Get in Touch',
  href = '#contact',
  variant = 'dark',
}: CTABannerProps) {
  const isAccent = variant === 'accent';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`py-16 md:py-20 ${
        isAccent ? 'bg-accent text-ink' : 'bg-ink border-y border-paper/5'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-5xl font-display uppercase tracking-tight ${
            isAccent ? '' : 'text-paper'
          }`}
        >
          {text}
        </motion.p>

        <MagneticButton strength={0.3}>
          <a
            href={href}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 text-sm uppercase tracking-widest font-mono transition-all duration-300 ${
              isAccent
                ? 'border-ink hover:bg-ink hover:text-accent'
                : 'border-accent text-accent hover:bg-accent hover:text-ink'
            }`}
            data-cursor-label="Go"
          >
            {buttonText}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </MagneticButton>
      </div>
    </motion.section>
  );
}
