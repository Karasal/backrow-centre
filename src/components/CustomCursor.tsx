import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [data-cursor-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setHovering(true);
      }
    };

    const out = () => setHovering(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : hovering ? 2.5 : 1})`,
        background: hovering ? 'rgba(245, 240, 235, 0.08)' : 'transparent',
      }}
    />
  );
}
