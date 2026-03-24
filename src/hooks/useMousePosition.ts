import { useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function useMousePosition(springConfig = { stiffness: 150, damping: 15, mass: 0.1 }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return { x, y, springX, springY };
}
