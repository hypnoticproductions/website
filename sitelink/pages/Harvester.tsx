
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Clock, AlertTriangle, PenTool, TrendingUp, Upload, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import PricingCard from '../components/PricingCard';

const Harvester: React.FC = () => {
  const heroFeatures = [
    { title: 'Universal Upload', desc: 'Drop any file format. Photos, PDFs, audio, documents — we handle the chaos.', icon: <Upload size={24} className="text-brand-blue" /> },
    { title: 'Smart Extraction', desc: 'AI identifies facts, dates, parties, and relationships automatically.', icon: <Sparkles size={24} className="text-green-400" /> },
    { title: 'Issue Detection', desc: 'Potential contradictions and gaps flagged for your review.', icon: <AlertTriangle size={24} className="text-brand-gold" /> },
    { title: 'Brief Generation', desc: 'Professional case briefs created in seconds, not hours.', icon: <FileText size={24} className="text-brand-blue" /> }
  ];

  const features = [
    { title: 'Evidence Upload', desc: 'Ingest PDFs, Word docs, audio transcripts, and video discovery files.', icon: <FileText size={32} /> },
    { title: 'AI Fact Extraction', desc: 'Automatically map dates and entities across thousands of pages.', icon: <Search size={32} /> },
    { title: 'Interactive Timeline', desc: 'Visualize the history of a case with a dynamic, filterable timeline.', icon: <Clock size={32} /> },
    { title: 'Contradiction Detection', desc: 'The AI flags discrepancies between witness statements and physical evidence.', icon: <AlertTriangle size={32} /> },
    { title: 'Brief Generation', desc: 'Generate first-draft chronologies and legal memos to court standards.', icon: <PenTool size={32} /> },
    { title: 'Case Strategy', desc: 'Get AI-suggested themes and weak points based on the evidence.', icon: <TrendingUp size={32} /> }
  ];

  const plans = [
    { 
      name: 'Solo Practitioner', 
      price: '$79', 
      features: ['5GB Discovery Storage', '1000 AI Query Tokens', 'Standard Timeline Generation', 'Export to PDF'],
      cta: 'Get Started',
      path: '/contact'
    },
    { 
      name: 'Pro Firm', 
      price: '$129', 
      features: ['Unlimited Discovery Storage', 'Infinite AI Insights', 'Cross-Case Contradiction Check', 'White-label Briefs'],
      cta: 'Scale Your Firm',
      featured: true,
      path: '/contact'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        {/* Exact Layout from Screenshot */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              AI-Assisted Case Preparation
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-[1.05] tracking-tight">
              Turn Evidence Chaos Into <span className="text-brand-blue">Case-Ready Briefs</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Upload photos, PDFs, voice notes, screenshots — anything your client sends. Harvester organizes evidence, extracts key facts, flags potential issues, and generates professional briefs in minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-10 bg-brand-blue text-brand-dark border-none shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                Start Free Trial →
              </Button>
              <Button variant="outline" size="lg" className="px-10 border-white/10 hover:border-white/30">
                See How It Works
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div>
                <div className="text-2xl font-display font-black text-brand-blue mb-1">AI-Assisted</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Case Preparation</div>
              </div>
              <div>
                <div className="text-2xl font-display font-black text-white mb-1">6+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Case Types Supported</div>
              </div>
              <div>
                <div className="text-2xl font-display font-black text-brand-blue mb-1">Global</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Multi-Jurisdiction Ready</div>
              </div>
            </div>
          </div>

          {/* Feature Grid from Screenshot */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {heroFeatures.map((hf, i) => (
                <motion.div
                  key={hf.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-[#0A0A0B] border border-white/5 shadow-2xl hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {hf.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight">{hf.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{hf.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 max-w-6xl mx-auto"
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/harvester-ui.png"
              alt="Harvester - AI Legal Case Preparation Interface"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <SectionHeading 
          title="The Solution For Modern Law" 
          subtitle="Engineered for accuracy and speed in high-stakes environments." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {features.map((f, i) => (
            <FeatureCard key={f.title} title={f.title} description={f.desc} icon={f.icon} index={i} />
          ))}
        </div>

        <SectionHeading title="Pricing Plans" subtitle="Flexible options for individual lawyers and firms." />
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

export default Harvester;
