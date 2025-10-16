/*eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: 2,
    stiffness: 80,
    damping: 20,
  });

  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }

    // Listen to spring value and update local state
    const unsubscribe = springValue.on('change', (latest) => {
      setCurrentValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [isInView, motionValue, springValue, to]);

  return <span ref={ref}>{currentValue.toLocaleString()}</span>;
};

export default AnimatedCounter;
