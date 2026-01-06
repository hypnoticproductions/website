
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, company, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-10 rounded-[32px] bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="absolute -top-4 -right-4 text-white/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
        <Quote size={120} />
      </div>

      <div className="relative z-10">
        <div className="text-brand-blue mb-6">
          <Quote size={32} fill="currentColor" fillOpacity={0.1} />
        </div>
        
        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-10 font-light italic">
          "{quote}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-white/5 p-0.5">
            {image ? (
              <img src={image} alt={author} className="w-full h-full object-cover rounded-full" />
            ) : (
              <div className="w-full h-full bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue font-bold text-lg">
                {author[0]}
              </div>
            )}
          </div>
          <div>
            <h5 className="text-white font-bold">{author}</h5>
            <p className="text-slate-500 text-xs font-medium tracking-wide uppercase">
              {role} @ <span className="text-brand-blue">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
