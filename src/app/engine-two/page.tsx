'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, Database, Zap, ArrowRight, Layers, Terminal, Cpu, Radio } from 'lucide-react';
import Link from 'next/link';

export default function EngineTwoPage() {
  const [activeTab, setActiveTab] = useState<'demo' | 'explainer'>('demo');

  const pipelineSteps = [
    {
      icon: Database,
      title: 'INGESTION',
      description: 'RSS / GDELT Data',
      detail: 'Real-time cultural signal collection',
    },
    {
      icon: Cpu,
      title: 'NORMALIZATION',
      description: 'Scoring Tension & Velocity',
      detail: 'Pattern recognition engine',
    },
    {
      icon: Zap,
      title: 'GENERATION',
      description: 'Angle-First Context',
      detail: 'Autonomous content creation',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="h-8 w-8 bg-white overflow-hidden rounded-sm flex items-center justify-center">
                <img 
                  src="/user_input_files/engine two logo.jpeg" 
                  alt="Engine Two Logo"
                  className="object-cover h-full w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-black font-bold text-xs flex items-center justify-center h-full">E2</span>';
                      parent.classList.add('bg-white');
                    }
                  }}
                />
              </div>
              <span className="text-white font-bold tracking-tighter text-xl">
                ENGINE TWO <span className="text-[#FF3333] text-xs align-top">v2.0</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                STATUS: ONLINE
              </span>
              <Link href="/" className="nav-item">
                ← CORE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION A: LIVE FIRE DEMO (SALES) */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#FF3333]/30 rounded-full bg-[#FF3333]/10 text-[#FF3333] text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#FF3333]"></span>
              LIVE FIRE DEMO
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              ENGINE TWO: <span className="text-[#E0E0E0]">LIVE FIRE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
              <span className="text-white font-semibold">13 Million Impressions.</span> Zero Marketing Spend.
            </p>
          </motion.div>

          {/* Video A: Sales Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[rgba(255,51,51,0.3)] shadow-[0_0_50px_rgba(255,51,51,0.15)]">
              {/* Data Overlay */}
              <div className="absolute top-4 left-4 z-10 flex gap-4">
                <span className="video-data-overlay flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3333] animate-pulse"></span>
                  LIVE
                </span>
                <span className="video-data-overlay font-mono">
                  ENGINE: v2.0
                </span>
              </div>
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-cGEc_j1dIg?rel=0&modestbranding=1"
                title="Engine Two Live Fire Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Sales Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 bg-[#0A0A0A] border-l-4 border-[#FF3333] rounded-r-lg">
              <p className="text-lg text-[#94A3B8] italic leading-relaxed">
                "This is not a theory. This is a weapon. Watch Engine Two process 10,000 signals and generate 13.57 Million impressions on a $50 bootstrap budget."
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-[#FF3333]/5 border border-[#FF3333]/20">
                <div className="text-3xl font-bold text-[#FF3333] mb-1">13.57M</div>
                <div className="text-xs font-mono text-[#64748B] uppercase">Impressions Generated</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#FF3333]/5 border border-[#FF3333]/20">
                <div className="text-3xl font-bold text-[#FF3333] mb-1">$50</div>
                <div className="text-xs font-mono text-[#64748B] uppercase">Bootstrap Budget</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#FF3333]/5 border border-[#FF3333]/20">
                <div className="text-3xl font-bold text-[#FF3333] mb-1">10K+</div>
                <div className="text-xs font-mono text-[#64748B] uppercase">Signals Processed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE BRIDGE (VISUAL DIVIDER) */}
      <section className="bg-[#0A0A0A] py-16 relative overflow-hidden">
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase font-mono mb-4">
              HOW WE BUILT THE BEAST
            </h2>
            <p className="text-[#00D4FF] font-mono text-sm md:text-base">
              You've seen what it does. Now understand how it thinks.
            </p>
            <p className="text-[#64748B] text-sm mt-2">
              We moved from static text files to autonomous agent swarms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: THE BLUEPRINT (TECHNICAL) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden">
        {/* Blueprint Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00D4FF]/30 rounded bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-mono uppercase">
                <Terminal size={12} />
                Architecture v2.0
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                THE SIGNAL-FIRST <br/><span className="text-[#00D4FF]">ARCHITECTURE</span>
              </h2>
              
              <h3 className="text-xl text-[#64748B] font-mono">
                From Content-First to Influence Interception
              </h3>
              
              <p className="text-[#94A3B8] leading-relaxed border-l-2 border-[#00D4FF]/30 pl-4">
                "Traditional marketing is 'Content-First' (Yelling into a hurricane). Engine Two is 'Signal-First' (Listening for the tremor)."
              </p>
            </div>
            
            {/* Pipeline Visualization */}
            <div className="bg-[#0A0A0A]/80 backdrop-blur border border-[#00D4FF]/20 p-6 rounded-lg shadow-[0_0_30px_rgba(0,212,255,0.1)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-4">
                <Activity size={12} /> PROCESS_FLOW.JSON
              </div>
              
              <div className="space-y-4">
                {pipelineSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1 bg-[#080808] border border-[#00D4FF]/30 p-4 rounded-md relative group hover:border-[#00D4FF] transition-all duration-300">
                      <div className="absolute top-2 right-2 opacity-50 text-[#00D4FF] group-hover:opacity-100">
                        <step.icon size={16} />
                      </div>
                      <h4 className="text-[#00D4FF] font-mono font-bold text-sm mb-1">{step.title}</h4>
                      <p className="text-[#64748B] text-xs font-mono">{step.description}</p>
                      <p className="text-[#10B981] text-xs mt-1 font-mono">{step.detail}</p>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight size={20} className="text-[#00D4FF] opacity-50 hidden md:block flex-shrink-0" />
                    )}
                    {index < pipelineSteps.length - 1 && (
                      <div className="h-8 w-[1px] bg-[#00D4FF] opacity-50 md:hidden"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Moat Section */}
              <div className="mt-6 p-4 bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Radio size={14} className="text-[#10B981]" />
                  <span className="text-xs font-mono text-[#10B981]">THE MOAT</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  We don't just have code; we have Cultural Embeddings. A proprietary data moat that compounds daily.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video B: Technical Explainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              {/* Blueprint Overlay */}
              <div className="absolute top-4 left-4 z-10 flex gap-4">
                <span className="video-data-overlay flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
                  ARCHITECTURE
                </span>
                <span className="video-data-overlay font-mono">
                  TYPE: SIGNAL-FIRST
                </span>
              </div>
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FkdRn8iniqU?rel=0&modestbranding=1"
                title="Signal-First Architecture Explainer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONCLUSION */}
      <footer className="bg-[#080808] py-24 border-t border-[rgba(26,58,95,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#080808] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <Layers className="mx-auto text-[#00D4FF] h-12 w-12 opacity-50" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
              THE COMPLETE STACK
            </h2>
            
            <p className="text-xl text-[#64748B] font-light max-w-2xl mx-auto">
              The Theory became the Software. The Bridge is complete. We are ready to scale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="pt-8"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#080808] transition-all duration-200 bg-[#00D4FF] font-mono rounded hover:bg-[#00D4FF]/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D4FF] focus:ring-offset-[#080808]">
              ACCESS THE ENGINE
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              
              {/* Button Glow Effect */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#10B981] opacity-30 blur group-hover:opacity-50 transition-opacity"></div>
            </button>
          </motion.div>
          
          <div className="pt-16 text-xs text-[#64748B] font-mono">
            ENGINE TWO v2.0 © {new Date().getFullYear()} // SYSTEM STATUS: OPTIMAL
          </div>
        </div>
      </footer>
    </div>
  );
}
