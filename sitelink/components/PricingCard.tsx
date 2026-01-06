
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  tier: string;
  price: string | number;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  path: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period = 'mo',
  features,
  cta,
  featured = false,
  path
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[2.5rem] backdrop-blur-xl relative flex flex-col h-full transition-all duration-500 ${
        featured 
          ? 'bg-brand-blue/5 border-2 border-brand-blue shadow-[0_0_40px_rgba(0,212,255,0.15)]' 
          : 'bg-white/[0.03] border border-white/10 shadow-2xl'
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-dark text-[10px] font-bold uppercase py-1.5 px-4 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-display font-bold text-white/90 mb-4">{tier}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-display font-black text-white">{price}</span>
          <span className="text-slate-500 font-medium">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm group/item">
            <CheckCircle2 size={18} className={`${featured ? 'text-brand-blue' : 'text-slate-500'} mt-0.5 transition-transform duration-300 group-hover/item:scale-110`} />
            <span className="group-hover/item:text-slate-200 transition-colors">{feat}</span>
          </li>
        ))}
      </ul>

      <Link to={path} className="mt-auto">
        <Button 
          variant={featured ? 'primary' : 'outline'} 
          className="w-full text-sm font-bold tracking-widest uppercase py-4"
        >
          {cta}
        </Button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
