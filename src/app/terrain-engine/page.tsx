'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Shield, Zap, Map, FileText, TrendingUp, Users, Lock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const infrastructureData = [
  {
    title: 'WorkrWire',
    tagline: 'The Nervous System',
    description: 'Connects human intention to AI execution. Every decision traceable. Every action connected. Every insight has a home.',
    icon: Zap,
    color: '#00D4FF'
  },
  {
    title: 'MANUS',
    tagline: 'The Foreman',
    description: 'Breaks goals into terrain. Marks obstacles. Allocates AI labor. Tracks progress. Prevents collapse. Never sleeps.',
    icon: Cpu,
    color: '#FFBF00'
  },
  {
    title: 'Knowledge Base',
    tagline: 'The Memory',
    description: 'Every route ever taken. Every tunnel bored. Permanent infrastructure for cognitive mapping, not task automation.',
    icon: FileText,
    color: '#10B981'
  }
]

const productData = [
  {
    name: 'Harvester',
    tagline: 'Legal case preparation',
    description: 'Ingests legal documents, maps contradictions and evidence relationships. Outputs case preparation in hours, not days.',
    tunnel: 'Through legal document chaos to clear case strategy',
    status: 'Production Ready',
    icon: FileText,
    color: '#00D4FF'
  },
  {
    name: 'SafeTravel',
    tagline: 'Travel risk intelligence',
    description: 'Analyzes destinations across 7 intelligence layers. Personalized risk assessments with real-time voice updates.',
    tunnel: 'Through travel uncertainty to informed decisions',
    status: 'Production Ready',
    icon: Shield,
    color: '#10B981'
  },
  {
    name: 'WUKR Wire',
    tagline: 'Content syndication',
    description: 'Takes one insight, formats for 60+ platforms. Syndication with proper attribution and source citation.',
    tunnel: 'Through distribution complexity to omnipresent authority',
    status: 'Onboarding Clients',
    icon: TrendingUp,
    color: '#FFBF00'
  },
  {
    name: 'Morphic Trade Axis',
    tagline: 'Cross-border investment',
    description: 'Caribbean capital → Ugandan opportunity. Bypassing Western intermediaries for direct South-South flow.',
    tunnel: 'Through financial barriers to direct capital access',
    status: 'In Development',
    icon: Globe,
    color: '#8B5CF6'
  }
]

export default function TerrainEnginePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
        
        {/* Animated Glow */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Richard Fortune Watermark Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src="/Gemini_Generated_Image_tfvqg5tfvqg5tfvq.jpeg" 
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-[0.03] object-cover grayscale"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-6 inline-block">
              // COGNITIVE INFRASTRUCTURE LAYER
            </span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white mb-6 leading-tight"
            >
              WE DON'T BUILD TOOLS.<br />
              <span className="text-gradient-cyan">WE BUILD TUNNELS.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto mb-10 font-sans"
            >
              The Terrain Engine maps complexity and bores permanent routes through obstacles. 
              Stop climbing mountains. Walk through them.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#products" className="btn-accent text-sm py-3 px-8 font-mono">
                EXPLORE PRODUCTS
              </Link>
              <Link href="#infrastructure" className="btn-cyber text-sm py-3 px-8 font-mono">
                VIEW INFRASTRUCTURE
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-[#64748B]"
          >
            <span className="text-xs font-mono mb-2">INITIALIZE_OS</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#00D4FF] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-4 inline-block">
              // SYSTEM MODULES
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
              THE PRODUCTS
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Four tunnels through complexity. Each designed to transform chaos into navigable structure.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {productData.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: `${product.color}20`,
                      border: `1px solid ${product.color}40`
                    }}
                  >
                    <product.icon size={24} style={{ color: product.color }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-mono font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                        {product.name}
                      </h3>
                      <span 
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{ 
                          background: `${product.color}20`,
                          color: product.color,
                          border: `1px solid ${product.color}40`
                        }}
                      >
                        {product.status}
                      </span>
                    </div>
                    
                    <p className="text-[#00D4FF] text-sm font-medium mb-3">
                      {product.tagline}
                    </p>
                    
                    <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="pt-4 border-t border-[rgba(26,58,95,0.3)]">
                      <p className="text-xs text-[#64748B]">
                        <span className="text-[#FFBF00]">THE TUNNEL:</span> {product.tunnel}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors">
                    ACCESS SYSTEM <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 lg:py-32 bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-[#FFBF00] mb-4 inline-block">
              // SUPPORT LAYERS
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
              INFRASTRUCTURE
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              What powers the tunnels. The foreman, the nervous system, and the memory of every route.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {infrastructureData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card text-center group"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`
                  }}
                >
                  <item.icon size={32} style={{ color: item.color }} />
                </div>
                
                <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-mono mb-4 uppercase tracking-wider"
                   style={{ color: item.color }}>
                  {item.tagline}
                </p>
                
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Development - Morphic Trade Axis */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-[#FFBF00] mb-4 inline-block">
              // CURRENT DEVELOPMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
              THE MORPHIC TRADE AXIS
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="blueprint-card border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/5 to-[#080808]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#8B5CF6] rounded-full animate-pulse"></div>
              <span className="text-[#8B5CF6] font-mono text-xs font-bold uppercase tracking-wider">
                IN ACTIVE DEVELOPMENT
              </span>
            </div>
            
            <h3 className="text-2xl font-mono font-bold text-white mb-4">
              CARIBBEAN CAPITAL → UGANDAN OPPORTUNITY
            </h3>
            
            <p className="text-[#94A3B8] mb-8 leading-relaxed">
              Bypassing Western intermediaries for direct South-South capital flow. 
              The first permanent tunnel for diaspora investment in East African markets.
              Escrow, due diligence, and transaction security included.
            </p>
            
            <h4 className="text-[#FFBF00] font-mono font-bold text-sm uppercase tracking-wider mb-4">
              Investment Packages
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                <h5 className="font-mono font-bold text-white">SCOUT</h5>
                <p className="text-2xl font-bold text-[#8B5CF6]">$5,000</p>
                <p className="text-xs text-[#64748B]">Single market access</p>
              </div>
              <div className="p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                <h5 className="font-mono font-bold text-white">BRIDGE</h5>
                <p className="text-2xl font-bold text-[#8B5CF6]">$15,000</p>
                <p className="text-xs text-[#64748B]">Dual market access</p>
              </div>
              <div className="p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                <h5 className="font-mono font-bold text-white">AXIS</h5>
                <p className="text-2xl font-bold text-[#8B5CF6]">$50,000</p>
                <p className="text-xs text-[#64748B]">Full corridor access</p>
              </div>
              <div className="p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                <h5 className="font-mono font-bold text-white">ARCHITECT</h5>
                <p className="text-2xl font-bold text-[#8B5CF6]">$150K+</p>
                <p className="text-xs text-[#64748B]">Strategic partnership</p>
              </div>
            </div>
            
            <p className="text-xs text-[#64748B]">
              Each package includes $1,600 operator consultation fee.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B5CF6] text-white font-mono font-bold rounded-lg hover:bg-[#8B5CF6]/90 transition-colors">
              <Lock size={20} />
              REQUEST INFORMATION
            </button>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-32 bg-[#0A0F1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-[#FFBF00] mb-4 inline-block">
              // PRINCIPAL ARCHITECT
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-2">
              RICHARD D. FORTUNE
            </h2>
            <p className="text-[#FFBF00] font-mono text-sm uppercase tracking-wider">
              Vor'thalis
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="blueprint-card border-[#FFBF00]/30 bg-gradient-to-br from-[#FFBF00]/5 to-[#080808]">
                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  Richard D. Fortune (Vor'thalis) is the principal architect behind The Terrain Engine. 
                  Based in Castries, St. Lucia, he has spent years developing systems that map human 
                  complexity rather than simply responding to queries.
                </p>
                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  As founder of <span className="text-white font-bold">Dopa-Tech</span> and <span className="text-white font-bold">Fortune Tech Ventures</span>, 
                  Richard's philosophy is clear: <span className="text-[#00D4FF] italic">"Most AI answers questions. We bore tunnels. The difference is permanence."</span>
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  His current focus includes scaling Harvester and SafeTravel for revenue generation, 
                  building the Morphic Trade Axis, and developing The Terrain Engine as a licensable 
                  infrastructure layer for the next generation of cognitive systems.
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                  <p className="text-lg font-mono font-bold text-[#00D4FF]">DOPA-TECH</p>
                  <p className="text-xs text-[#64748B]">Parent Company</p>
                </div>
                <div className="text-center p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                  <p className="text-lg font-mono font-bold text-[#FFBF00]">ST. LUCIA</p>
                  <p className="text-xs text-[#64748B]">Base of Operations</p>
                </div>
                <div className="text-center p-4 bg-[#080808] border border-[rgba(26,58,95,0.3)] rounded-lg">
                  <p className="text-lg font-mono font-bold text-white">VOR'THALIS</p>
                  <p className="text-xs text-[#64748B]">Identity</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Gold Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/30 to-[#FFBF00]/10 rounded-full blur-2xl"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FFBF00]/60 shadow-[0_0_30px_rgba(255,191,0,0.4)]">
                  <img 
                    src="/image.png" 
                    alt="Richard D. Fortune - The Architect"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Caption */}
                <div className="absolute -bottom-12 left-0 right-0 text-center">
                  <p className="text-[#F8FAFC] font-mono font-bold text-lg tracking-wider">THE ARCHITECT</p>
                  <p className="text-[#FFBF00] text-xs uppercase tracking-[0.3em] mt-1">Of the Axis</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-4 inline-block">
              // ESTABLISH LINK
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
              ENTER THE TERRAIN
            </h2>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#64748B] text-xs font-mono uppercase tracking-wider mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-[#080808] border border-[rgba(26,58,95,0.4)] rounded-lg text-white placeholder-[#475569] focus:border-[#00D4FF] focus:outline-none transition-colors font-mono"
                  placeholder="Your identifier"
                />
              </div>
              <div>
                <label className="block text-[#64748B] text-xs font-mono uppercase tracking-wider mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-[#080808] border border-[rgba(26,58,95,0.4)] rounded-lg text-white placeholder-[#475569] focus:border-[#00D4FF] focus:outline-none transition-colors font-mono"
                  placeholder="your@transmission.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#64748B] text-xs font-mono uppercase tracking-wider mb-2">
                Inquiry Type
              </label>
              <select className="w-full p-4 bg-[#080808] border border-[rgba(26,58,95,0.4)] rounded-lg text-white focus:border-[#00D4FF] focus:outline-none transition-colors font-mono">
                <option>Product Inquiry</option>
                <option>Investment Discussion</option>
                <option>Partnership Opportunity</option>
                <option>Consultation Request</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[#64748B] text-xs font-mono uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea 
                rows={5}
                className="w-full p-4 bg-[#080808] border border-[rgba(26,58,95,0.4)] rounded-lg text-white placeholder-[#475569] focus:border-[#00D4FF] focus:outline-none transition-colors font-mono resize-none"
                placeholder="Transmit your query..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-[#00D4FF] text-[#080808] font-mono font-bold rounded-lg hover:bg-[#00D4FF]/90 transition-colors flex items-center justify-center gap-3"
            >
              <ArrowRight size={20} />
              TRANSMIT
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 border-t border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bridge" className="nav-item">
              THE BRIDGE →
            </Link>
            <Link href="/feed" className="nav-item">
              Builder's Feed
            </Link>
            <Link href="/bigward" className="nav-item">
              Big Ward Case
            </Link>
            <Link href="/palenque" className="nav-item">
              Palenque Case
            </Link>
            <Link href="/terrain-engine" className="nav-item nav-item-primary">
              TERRAIN ENGINE →
            </Link>
            <Link href="/repository" className="nav-item">
              Repository
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
