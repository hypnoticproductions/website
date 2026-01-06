
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const statusColors = {
    'live': 'bg-green-500',
    'beta': 'bg-brand-gold',
    'coming-soon': 'bg-slate-500'
  };

  const accentColor = product.accentColor || '#00D4FF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="relative group h-full"
    >
      <Link to={product.path} className="block h-full">
        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
          style={{ backgroundColor: accentColor }}
        />
        
        <div className="relative h-full flex flex-col p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-start justify-between mb-8">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white relative overflow-hidden transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${accentColor}22` }}
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />
              <div style={{ color: accentColor }}>
                {product.icon}
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/80`}>
              <span className={`w-1.5 h-1.5 rounded-full ${statusColors[product.status]} animate-pulse`} />
              {product.status}
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(to right, white, ${accentColor})` }}>
              {product.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors">
              {product.description}
            </p>
          </div>

          <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
               style={{ color: accentColor }}>
            Explore Solution
            <motion.div
              animate={{ x: 0, y: 0 }}
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
