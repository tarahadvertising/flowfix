import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import useCountUp from '../hooks/useCountUp.js';

export default function Counter({ value, suffix = '', prefix = '', duration = 1800, className = '' }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [start, setStart] = useState(false);
  React.useEffect(() => {
    if (inView) setStart(true);
  }, [inView]);
  const display = useCountUp(value, { duration, start });

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
