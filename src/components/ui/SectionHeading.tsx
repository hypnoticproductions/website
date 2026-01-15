'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  subtitle?: string;
  annotation?: string;
}

export default function SectionHeading({
  children,
  className,
  centered = false,
  subtitle,
  annotation,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 relative', centered && 'text-center', className)}
    >
      {annotation && (
        <span className="annotation font-mono text-xs mb-2 inline-block">
          // {annotation}
        </span>
      )}
      <h2 className="blueprint-heading mb-4">{children}</h2>
      {subtitle && (
        <p className="blueprint-subheading max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        'absolute top-0 w-px h-8 bg-gradient-to-b from-[#0066FF] to-transparent hidden',
        !centered && 'left-0'
      )} />
    </motion.div>
  );
}
