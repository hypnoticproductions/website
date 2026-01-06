
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mic2, BrainCircuit, BellRing, Map, Repeat, ShieldCheck, Clock, CheckCircle2, Sparkles, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import PricingCard from '../components/PricingCard';

const SafeTravel: React.FC = () => {
  const statCards = [
    { title: '172+', label: 'Countries Monitored', icon: <Globe size={20} className="text-brand-blue" /> },
    { title: '20+', label: 'Active Alerts Right Now', icon: <BellRing size={20} className="text-brand-blue" /> },
    { title: '67', label: 'Safe Destinations', icon: <CheckCircle2 size={20} className="text-brand-blue" /> },
    { title: '15min', label: 'Data Refresh Rate', icon: <Clock size={20} className="text-brand-blue" /> }
  ];

  const testimonials = [
    {
      quote: "SafeTravel saved my trip to Thailand. Got a dengue outbreak alert 3 days before the news covered it. Rerouted to Vietnam instead!",
      author: "Sarah M.",
      role: "Digital Nomad"
    },
    {
      quote: "The personalized scores for family travelers are a GAME CHANGER. Finally, safety info that accounts for traveling with kids.",
      author: "Michael R.",
      role: "Family Traveler"
    },
    {
      quote: "Trav Talkr is incredible - I just ask about any country and get instant, personalized intel. Like having a security expert on speed dial.",
      author: "Alex K.",
      role: "Solo Adventurer"
    }
  ];

  const plans = [
    { 
      name: 'Free', 
      price: '$0', 
      features: ['Basic Country Reports', 'Standard Safety Alerts', '1 Active Trip'],
      cta: 'Get Started',
      path: '/contact'
    },
    { 
      name: 'Pro Explorer', 
      price: '$9.99', 
      features: ['Voice AI Agent Access', 'Cognitive Profiling', 'Unlimited Active Trips', 'Priority Support'],
      cta: 'Explore Safer',
      featured: true,
      path: '/contact'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Reconstructed Hero from Screenshot */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase mb-12 tracking-wider"
          >
            <Sparkles size={12} />
            The Only Travel Safety Platform That KNOWS YOU — Now With AI Voice
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black text-[#1E293B] mb-10 tracking-tighter leading-[0.95]">
            Don't Travel Blind. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-[#00A3FF] to-brand-gold">Travel Smart.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Most travel advisories give the <span className="text-[#1E293B] font-bold">SAME warning to everyone.</span> SafeTravel gives <span className="text-brand-blue font-bold">YOU</span> personalized risk scores and <span className="text-brand-blue font-bold">Trav Talkr</span> — your AI voice concierge for any destination.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <p className="text-[11px] font-bold text-slate-400">Join travelers monitoring <span className="text-brand-dark">172+ countries</span> • <span className="text-brand-blue flex items-center gap-1 inline-flex"><ShieldCheck size={12}/> Real-time</span> alerts</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-12 bg-brand-blue text-white shadow-xl shadow-brand-blue/20 font-bold tracking-tight">
              Start Free 14-Day Trial →
            </Button>
            <Button variant="outline" size="lg" className="px-12 border-slate-200 text-slate-600 hover:bg-white hover:shadow-lg transition-all">
              See How It Works
            </Button>
          </div>
          <p className="mt-8 text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">No credit card required • Cancel anytime • Full Pro access</p>
        </div>

        {/* 4 Cards from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-10 h-10 bg-brand-blue/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-display font-black text-[#1E293B] mb-3 tracking-tighter">{stat.title}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-[120px] mx-auto">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-32">
           <div className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <span>Live</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full" />
             <span>20+ data sources</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full" />
             <span>Updated 3 minutes ago</span>
           </div>
        </div>

        {/* Testimonials on Light Background */}
        <div className="bg-[#EDF8F9] -mx-6 px-6 py-32 rounded-[4rem] mb-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.3em] text-center mb-16">Trusted By Travelers Worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full"
                >
                  <div className="flex gap-0.5 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-slate-200" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-[#1E293B] text-sm">{t.author}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionHeading title="Membership Tiers" subtitle="Protection for solo explorers and global enterprises alike." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard 
              key={plan.name}
              tier={plan.name}
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
              featured={plan.featured}
              path={plan.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeTravel;
