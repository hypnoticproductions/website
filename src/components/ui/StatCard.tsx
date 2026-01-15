'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '../../lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center text-center"
    >
      {icon && (
        <div className="mb-2 text-[#00D4FF]">{icon}</div>
      )}
      <motion.span
        className="text-3xl md:text-4xl font-bold gradient-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-sm text-[#94A3B8] mt-1">{label}</span>
    </motion.div>
  );
}
