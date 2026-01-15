'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Share2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function WukrWirePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-6 inline-block">
              // INTELLIGENCE SYNDICATION ENGINE
            </span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white mb-6 leading-tight"
            >
              WUKR <span className="text-gradient-cyan">WIRE</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto mb-10 font-sans"
            >
              One insight → 60+ platforms. Content syndication with proper attribution and source citation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/terrain-engine" className="btn-cyber text-sm py-3 px-8 font-mono">
                BACK TO TERRAIN ENGINE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Iframe Embed Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="font-mono text-xs text-[#FFBF00] mb-4 inline-block">
              // WUKR WIRE APPLICATION
            </span>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
              Intelligence Syndication Platform
            </h2>
            <p className="text-[#64748B]">
              Access the full WUKR Wire application below
            </p>
          </motion.div>
          
          {/* Iframe Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative w-full h-[80vh] rounded-xl overflow-hidden border border-[rgba(0,102,255,0.3)] shadow-[0_0_30px_rgba(0,102,255,0.1)]"
          >
            <iframe
              src="https://ai-intelligence-plat-i3be.bolt.host/"
              className="w-full h-full"
              style={{ border: 'none' }}
              title="WUKR Wire Application"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </motion.div>
          
          {/* External Link Backup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-[#64748B] text-sm mb-4">
              Having trouble viewing the application?
            </p>
            <a
              href="https://ai-intelligence-plat-i3be.bolt.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[rgba(0,102,255,0.4)] text-[#00D4FF] font-mono text-sm rounded-lg hover:bg-[rgba(0,102,255,0.1)] transition-colors"
            >
              <Globe size={18} />
              OPEN IN NEW TAB
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#0A0F1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-4 inline-block">
              // CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
              WHAT WUKR WIRE DOES
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="blueprint-card"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-[#00D4FF]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                Intelligent Formatting
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Automatically formats your insights for each platform's specific requirements and best practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="blueprint-card"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FFBF00]/20 flex items-center justify-center mb-4">
                <Share2 size={24} className="text-[#FFBF00]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                Multi-Platform Syndication
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Distribute to 60+ platforms including Twitter, LinkedIn, Medium, Dev.to, and more.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="blueprint-card"
            >
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-4">
                <Globe size={24} className="text-[#10B981]" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                Source Attribution
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Every post includes proper citations and attribution. Position yourself as a thought leader.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-4 inline-block">
              // PRICING TIERS
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
              CHOOSE YOUR PLAN
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="blueprint-card"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-mono font-bold text-white mb-2">Pro</h3>
                <p className="text-3xl font-bold text-[#00D4FF]">$29<span className="text-sm text-[#64748B] font-normal">/month</span></p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Individual use
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> 60+ platform syndication
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Source citation
                </li>
              </ul>
            </motion.div>
            
            {/* B2B Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="blueprint-card border-[#FFBF00]/30 bg-gradient-to-br from-[#FFBF00]/5 to-[#080808]"
            >
              <div className="text-center mb-6">
                <span className="text-xs font-mono text-[#FFBF00] uppercase tracking-wider mb-2 inline-block">Popular</span>
                <h3 className="text-xl font-mono font-bold text-white mb-2">B2B Standard</h3>
                <p className="text-3xl font-bold text-[#FFBF00]">$999<span className="text-sm text-[#64748B] font-normal">/month</span></p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Team access
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> White-label options
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Priority support
                </li>
              </ul>
            </motion.div>
            
            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="blueprint-card"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-mono font-bold text-white mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-[#00D4FF]">$5,000+<span className="text-sm text-[#64748B] font-normal">/month</span></p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Custom integration
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> Dedicated account manager
                </li>
                <li className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <span className="text-[#10B981]">✓</span> SLA guarantees
                </li>
              </ul>
            </motion.div>
          </div>
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
            <Link href="/terrain-engine" className="nav-item">
              Terrain Engine
            </Link>
            <Link href="/wukr-wire" className="nav-item" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}>
              WUKR WIRE →
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
