
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number from string if necessary (e.g., "15+" -> 15)
  const numericValue = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;
  const suffix = typeof value === 'string' ? value.toString().replace(/[0-9.]/g, '') : '';

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest).toString());
        }
      });
      return () => controls.stop();
    }
  }, [numericValue, isInView]);

  return (
    <div ref={ref} className="text-center group p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all duration-300"
      >
        {icon}
      </motion.div>
      <div className="text-4xl md:text-6xl font-display font-black text-white mb-2 flex justify-center items-center">
        <span>{displayValue}</span>
        {suffix && <span className="text-brand-blue ml-0.5">{suffix}</span>}
      </div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
