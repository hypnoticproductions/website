'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children' | 'disabled'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white hover:from-[#00E5FF] hover:to-[#0077FF] shadow-lg shadow-[#00D4FF]/25 hover:shadow-[#00D4FF]/40',
    secondary: 'border border-[#00D4FF]/50 text-white hover:border-[#00D4FF] hover:bg-[#00D4FF]/10',
    accent: 'bg-gradient-to-r from-[#FFB800] to-[#FF9500] text-black hover:from-[#FFCC00] hover:to-[#FFA500] shadow-lg shadow-[#FFB800]/25 hover:shadow-[#FFB800]/40',
    ghost: 'text-[#94A3B8] hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const Icon = icon ? (
    <span className={cn(iconPosition === 'right' && 'order-2')}>{icon}</span>
  ) : null;

  const Content = (
    <>
      {loading && <Loader2 className="animate-spin" size={size === 'sm' ? 16 : 20} />}
      {!loading && iconPosition === 'left' && Icon}
      <span className={cn(iconPosition === 'right' && 'order-1')}>{children}</span>
      {!loading && iconPosition === 'right' && Icon}
    </>
  );

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {Content}
    </motion.button>
  );
}
