'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  status: 'live' | 'beta' | 'coming-soon';
  href: string;
  accentColor?: string;
}

export default function ProductCard({
  title,
  tagline,
  description,
  icon,
  status,
  href,
  accentColor = '#00D4FF',
}: ProductCardProps) {
  const statusColors = {
    live: 'bg-green-500/20 text-green-400 border-green-500/30',
    beta: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'coming-soon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href}>
        <div className="group relative glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
            }}
          />

          {/* Header */}
          <div className="relative flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              {icon}
            </div>
            <span
              className={cn(
                'px-3 py-1 rounded-full text-xs font-medium border',
                statusColors[status]
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors">
              {title}
            </h3>
            <p
              className="text-sm font-medium mb-3"
              style={{ color: accentColor }}
            >
              {tagline}
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
            <ArrowUpRight size={20} style={{ color: accentColor }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
