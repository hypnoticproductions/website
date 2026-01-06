
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center relative group hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-brand-blue/5 rounded-[24px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
          {title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
