'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: string;
  price: number | string;
  period?: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
  description?: string;
}

export default function PricingCard({
  tier,
  price,
  period,
  features,
  cta,
  href,
  featured = false,
  description,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative rounded-2xl p-6 h-full flex flex-col',
        featured
          ? 'glass border-[#00D4FF]/50 shadow-lg shadow-[#00D4FF]/10'
          : 'glass border-white/10'
      )}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier name */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{tier}</h3>
        {description && (
          <p className="text-sm text-[#94A3B8] mt-1">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {period && (
            <span className="text-[#94A3B8] ml-1">{period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check size={18} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-[#94A3B8]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'w-full py-3 rounded-lg font-semibold text-center transition-all duration-300',
          featured
            ? 'bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white hover:from-[#00E5FF] hover:to-[#0077FF]'
            : 'border border-[#00D4FF]/50 text-white hover:bg-[#00D4FF]/10'
        )}
      >
        {cta}
      </motion.a>
    </motion.div>
  );
}
