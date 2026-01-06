'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  subtitle?: string;
}

export default function SectionHeading({
  children,
  className,
  centered = false,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-8', centered && 'text-center', className)}
    >
      <h2 className="section-heading text-white mb-4">{children}</h2>
      {subtitle && (
        <p className="section-subheading text-[#94A3B8]">{subtitle}</p>
      )}
    </motion.div>
  );
}
