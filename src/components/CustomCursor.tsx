import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState('');
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 80, damping: 20, mass: 0.5 });
  const trailY = useSpring(cursorY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;
    setVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor-hover], [data-cursor-label]');
      if (interactive) {
        setHovering(true);
        const cursorLabel = (interactive as HTMLElement).dataset.cursorLabel || '';
        setLabel(cursorLabel);
      }
    };

    const out = () => {
      setHovering(false);
      setLabel('');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-paper/20 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? (label ? 100 : 60) : 8,
          height: hovering ? (label ? 100 : 60) : 8,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div
          className="w-full h-full rounded-full border border-paper/60 flex items-center justify-center mix-blend-difference"
          style={{
            background: hovering ? 'rgba(245, 240, 235, 0.06)' : 'rgba(245, 240, 235, 0.8)',
          }}
        >
          {label && hovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-mono uppercase tracking-widest text-paper"
            >
              {label}
            </motion.span>
          )}
        </div>
      </motion.div>
    </>
  );
}
