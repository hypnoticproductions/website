'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children' | 'disabled'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'blueprint';
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
  const baseStyles = 'inline-flex items-center justify-center font-mono font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#0066FF] text-white hover:bg-[#0052CC] border border-[#0066FF] shadow-lg shadow-[#0066FF]/20',
    secondary: 'border border-[rgba(0,102,255,0.4)] text-[#0066FF] hover:bg-[#0066FF]/10',
    accent: 'bg-[#FFD700] text-black hover:bg-[#E6C200] border border-[#FFD700] shadow-lg shadow-[#FFD700]/20',
    ghost: 'text-[#64748B] hover:text-white hover:bg-[rgba(0,102,255,0.1)]',
    blueprint: 'bg-[#0D1421] text-[#0066FF] border border-[rgba(0,102,255,0.3)] hover:border-[#0066FF] hover:bg-[rgba(0,102,255,0.05)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const Icon = icon ? (
    <span className={cn(iconPosition === 'right' && 'order-2')}>{icon}</span>
  ) : null;

  const Content = (
    <>
      {loading && <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />}
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
