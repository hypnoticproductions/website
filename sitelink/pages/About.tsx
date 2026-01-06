
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Download, Award, Code, Briefcase, Heart, Cpu, Zap, Layers, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

interface CredentialItemProps {
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const CredentialItem: React.FC<CredentialItemProps> = ({ title, icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 transition-all hover:bg-white/[0.08] backdrop-blur-sm group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className="text-brand-blue group-hover:scale-110 transition-transform">{icon}</div>
          <h4 className="text-xl font-display font-bold text-white">{title}</h4>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6"
          >
            <ul className="space-y-4">
              {content.map((item, i) => (
                <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black text-white mb-16 text-center tracking-tighter"
          >
            The Builder<span className="text-brand-blue">.</span>
          </motion.h1>
          
          <div className="flex justify-center mb-16 relative">
             <div className="absolute inset-0 bg-brand-blue/10 blur-[120px] rounded-full -z-10 w-80 h-80 mx-auto" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000" 
                alt="Richard D. Fortune - Founder" 
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <div className="text-2xl font-display font-black text-white">Richard D. Fortune</div>
                <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">Technical Founder • Castries, LC</div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-light text-center">
            <p>
              I am Richard D. Fortune, a technical founder who believes that the bridge between 
              a great idea and a great product is rigorous engineering and obsessive user focus.
            </p>
            <p>
              My journey is defined by a commitment to solving difficult problems at the intersection 
              of emerging technology and legacy industries. Whether it's the conservative world of 
              law or the complex web of global travel, I build tools that simplify the chaotic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto mb-32">
          <div className="p-12 rounded-[3.5rem] bg-brand-blue/5 border border-brand-blue/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full group-hover:bg-brand-blue/20 transition-all duration-700" />
            <h3 className="text-3xl font-display font-bold text-white mb-8 relative z-10">The Situation</h3>
            <div className="space-y-6 text-slate-400 relative z-10 leading-relaxed">
              <p>
                Operating from Castries, St. Lucia, I represent a new era of decentralized builders. 
                I prove every day that world-class SaaS products can be shipped from anywhere, 
                provided you have the right architecture and discipline.
              </p>
              <p>
                This geographic context allows for a unique perspective on global markets—building 
                tools for users in London or New York while remaining grounded in the efficiency 
                and focus of island life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {[
               { icon: <Cpu className="text-brand-blue" />, label: 'Architecture', color: 'bg-white/5' },
               { icon: <Zap className="text-brand-gold" />, label: 'Performance', color: 'bg-brand-blue/10' },
               { icon: <Layers className="text-brand-blue" />, label: 'Scalability', color: 'bg-brand-gold/10' },
               { icon: <Shield className="text-brand-gold" />, label: 'Security', color: 'bg-white/5' }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.05 }}
                 className={`aspect-square ${item.color} rounded-[2rem] border border-white/5 flex flex-col items-center justify-center gap-4 group transition-colors hover:bg-white/10`}
               >
                 <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{item.label}</span>
               </motion.div>
             ))}
          </div>
        </div>

        <SectionHeading title="Credentials & Expertise" subtitle="A multidisciplinary approach to building the future." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          <CredentialItem 
            title="Business & Leadership" 
            icon={<Briefcase size={28} />}
            content={['SaaS Strategy & GTM', 'Product-Led Growth (PLG)', 'Multi-Agent Team Coordination', 'Extreme Ownership Framework']}
          />
          <CredentialItem 
            title="AI & Technology" 
            icon={<Code size={28} />}
            content={['Multi-agent LLM Architecture', 'Full-stack React/Node/TS', 'Distributed Systems Design', 'Security-first DevOps']}
          />
          <CredentialItem 
            title="Legal Knowledge" 
            icon={<Award size={28} />}
            content={['Evidence Preservation Standards', 'Discovery Process Optimization', 'Legal Tech Compliance', 'IP Strategy']}
          />
          <CredentialItem 
            title="Wellness & Coaching" 
            icon={<Heart size={28} />}
            content={['High-performance Mindset', 'Executive Coaching', 'Systemic Focus Training', 'Deep Work Mastery']}
          />
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="gap-3 px-12 py-5 rounded-[2rem] group border-white/10 hover:border-brand-blue/30">
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Portfolio CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
