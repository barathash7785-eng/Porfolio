import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const springX = useSpring(0, { stiffness: 500, damping: 50 });
  const springY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const onMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const onHoverEnter = () => setIsHovered(true);
    const onHoverLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', onMove);
    
    const targets = document.querySelectorAll('a, button, .glass-panel, .bento-card, .strip-item');
    targets.forEach(t => {
      t.addEventListener('mouseenter', onHoverEnter);
      t.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onHoverEnter);
        t.removeEventListener('mouseleave', onHoverLeave);
      });
    };
  }, [springX, springY]);

  return (
    <div className="cursor-wrapper">
      <motion.div 
        className="cursor-dot"
        style={{ x: springX, y: springY }}
      />
      <motion.div 
        className={`cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.2 : 0.8
        }}
      />
    </div>
  );
}
