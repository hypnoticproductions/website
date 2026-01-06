
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accent?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  accent = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
        {title}
        {accent && <span className="text-brand-blue">.</span>}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {accent && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          className={`h-1 bg-brand-blue mt-4 ${align === 'center' ? 'mx-auto' : 'mr-auto'}`}
        />
      )}
    </motion.div>
  );
};

export default SectionHeading;
