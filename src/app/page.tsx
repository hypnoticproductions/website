'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, Music, Zap, Globe, Cpu, Link as LinkIcon, ArrowRight, Mountain, Map, Shovel, FileText, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

const timelineEvents = [
  {
    phase: '01',
    title: 'PATHWORKING',
    subtitle: 'Building the Frameworks',
    description: 'Initial foundational work on the 7-Collection framework. Establishing the cognitive architecture principles that would power all future development.',
    icon: <Cpu size={20} />,
    color: '#00D4FF',
    details: ['7-Collection Framework Development', 'Cognitive Architecture Principles', 'Pattern Recognition Systems'],
  },
  {
    phase: '02',
    title: 'EXPERIMENTATION',
    subtitle: 'Sound Development (Suno v2)',
    description: 'Applying frameworks to audio and music generation. Early experiments with AI-generated content using Suno version 2.',
    icon: <Music size={20} />,
    color: '#FFBF00',
    details: ['Framework-to-Audio Translation', 'Early AI Music Experiments', 'Suno v2 Integration'],
  },
  {
    phase: '03',
    title: 'SOUND DEVELOPMENT',
    subtitle: 'Suno v5, Big Ward Case',
    description: 'Advanced sound development meeting the Big Ward Resonance case study. Proving Collection 2 (Emotional-Somatic) and Collection 4 (Ethnographic).',
    icon: <Activity size={20} />,
    color: '#10B981',
    details: ['Big Ward Resonance Proof', 'Collection 2 + 4 Validation', '13M+ Impressions Generated'],
    link: '/bigward',
    linkText: 'VIEW BIG WARD CASE',
  },
  {
    phase: '04',
    title: 'DEVELOPMENT',
    subtitle: 'Suno + NanoBanana, Palenque Protocol',
    description: 'Combining AI tools including Suno and NanoBanana. Developing the Palenque Protocol for cultural mapping and ethnographic framework application.',
    icon: <Globe size={20} />,
    color: '#8B5CF6',
    details: ['AI Tool Synthesis', 'Palenque Protocol Creation', 'Cultural Mapping Framework'],
    link: '/palenque',
    linkText: 'VIEW PALENQUE CASE',
  },
  {
    phase: '05',
    title: 'AGENTIC APP BUILDERS',
    subtitle: 'Base 44',
    description: 'Building agentic applications with Base 44. The next evolution of the stack, moving from content generation to autonomous agent systems.',
    icon: <Zap size={20} />,
    color: '#F97316',
    details: ['Agentic Architecture', 'Base 44 Implementation', 'Autonomous Systems'],
  },
  {
    phase: '06',
    title: 'THE BRIDGE',
    subtitle: 'Engine Two v2.0',
    description: 'The complete stack: Signal-First architecture. Live demonstration achieving 13M impressions with zero marketing spend. The culmination of everything.',
    icon: <LinkIcon size={20} />,
    color: '#FF3333',
    details: ['Signal-First Pipeline', '13M Impressions / $0 Spend', 'Full Stack Integration'],
    link: '/bridge',
    linkText: 'ACCESS THE ENGINE',
    isFinal: true,
  },
];

export default function CorePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Annotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="annotation-cyan font-mono text-xs">
              // SYSTEM: COGNITIVE INTELLIGENCE ENGINE v2.0
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-white mb-6 text-center leading-tight"
          >
            <span className="block">I BUILD THE ENGINES</span>
            <span className="block text-gradient-cyan">OF INTUITION</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#64748B] mb-12 max-w-3xl mx-auto text-center font-sans"
          >
            {siteConfig.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/bridge" className="btn-accent text-sm py-3 px-8 font-mono">
              EXPLORE THE JOURNEY
            </Link>
            <Link href="/repository" className="btn-cyber text-sm py-3 px-8 font-mono">
              ACCESS REPOSITORY
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
        </div>
      </section>

      {/* Chronological Timeline Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // CHRONOLOGICAL SERIES
            </span>
            <h2 className="blueprint-heading mb-4">THE EVOLUTION</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              From theoretical frameworks to practical application. Each phase builds on the last, compounding the system's capabilities.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#FFBF00] via-[#10B981] via-[#8B5CF6] via-[#F97316] to-[#FF3333]" />

            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Phase Number Badge */}
                  <div 
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-mono font-bold text-sm
                      ${event.isFinal 
                        ? 'bg-[#FF3333]/20 border-2 border-[#FF3333] text-[#FF3333]' 
                        : 'bg-[#080808]/80 border border-[rgba(26,58,95,0.4)] text-[#00D4FF]'
                      }`}
                    style={{ borderColor: event.isFinal ? '#FF3333' : `${event.color}40` }}
                  >
                    <span style={{ color: event.isFinal ? '#FF3333' : event.color }}>
                      {event.phase}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <div 
                      className={`blueprint-card relative overflow-hidden
                        ${event.isFinal ? 'border-[#FF3333]/30 bg-gradient-to-br from-[#FF3333]/5 to-[#080808]' : ''}
                      `}
                    >
                      {/* Glow effect for final item */}
                      {event.isFinal && (
                        <div className="absolute inset-0 bg-[#FF3333]/5 opacity-50" />
                      )}

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <div 
                            className="flex items-center gap-2"
                            style={{ color: event.color }}
                          >
                            {event.icon}
                            <h3 className="font-mono font-bold text-lg">{event.title}</h3>
                          </div>
                          <span 
                            className="text-xs font-mono px-2 py-1 rounded bg-[rgba(26,58,95,0.3)]"
                            style={{ color: event.color }}
                          >
                            {event.subtitle}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Details List */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.details.map((detail, idx) => (
                            <span 
                              key={idx}
                              className="text-xs font-mono px-2 py-1 rounded bg-[rgba(26,58,95,0.2)] text-[#64748B]"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>

                        {/* Link if available */}
                        {event.link && (
                          <Link
                            href={event.link}
                            className={`inline-flex items-center gap-2 text-xs font-mono transition-colors
                              ${event.isFinal 
                                ? 'text-[#FF3333] hover:text-[#FF6666]' 
                                : 'text-[#00D4FF] hover:text-[#00D4FF]/80'
                              }`}
                          >
                            {event.linkText}
                            <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current State - The Bridge */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // CURRENT STATE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              THE BRIDGE IS <span className="text-[#FF3333]">COMPLETE</span>
            </h2>
            <p className="text-[#64748B] mb-8 max-w-2xl mx-auto">
              Theory has become software. The frameworks have been battle-tested. 
              Engine Two v2.0 represents the complete stack, ready for scale.
            </p>
            
            <Link 
              href="/bridge"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF3333] text-[#080808] font-mono font-bold rounded-lg hover:bg-[#FF3333]/90 transition-colors"
            >
              <LinkIcon size={20} />
              ACCESS ENGINE TWO v2.0
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Terrain Engine Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-[#00D4FF] mb-4 inline-block">
              // NEW SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
              THE TERRAIN <span className="text-gradient-cyan">ENGINE</span>
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Cognitive infrastructure that maps complexity and bores permanent tunnels through obstacles.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Harvester */}
            <Link href="/terrain-engine#harvester" className="blueprint-card group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[#00D4FF]/20 flex items-center justify-center">
                  <FileText size={16} className="text-[#00D4FF]" />
                </div>
                <span className="text-xs font-mono text-[#00D4FF]">Production</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-2">Harvester</h3>
              <p className="text-sm text-[#64748B]">Legal case preparation AI</p>
            </Link>

            {/* SafeTravel */}
            <Link href="/terrain-engine#safetravel" className="blueprint-card group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[#10B981]/20 flex items-center justify-center">
                  <Shield size={16} className="text-[#10B981]" />
                </div>
                <span className="text-xs font-mono text-[#10B981]">Production</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#10B981] transition-colors mb-2">SafeTravel</h3>
              <p className="text-sm text-[#64748B]">Travel risk intelligence</p>
            </Link>

            {/* WUKR Wire */}
            <Link href="/terrain-engine#wukrwire" className="blueprint-card group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[#FFBF00]/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-[#FFBF00]" />
                </div>
                <span className="text-xs font-mono text-[#FFBF00]">Active</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#FFBF00] transition-colors mb-2">WUKR Wire</h3>
              <p className="text-sm text-[#64748B]">Content syndication</p>
            </Link>

            {/* Morphic Trade Axis */}
            <Link href="/terrain-engine#morphic" className="blueprint-card group border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/5 to-[#080808]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[#8B5CF6]/20 flex items-center justify-center">
                  <Globe size={16} className="text-[#8B5CF6]" />
                </div>
                <span className="text-xs font-mono text-[#8B5CF6]">Developing</span>
              </div>
              <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2">Morphic Trade</h3>
              <p className="text-sm text-[#64748B]">Cross-border investment</p>
            </Link>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              href="/terrain-engine"
              className="btn-accent text-sm py-3 px-8 font-mono inline-flex items-center gap-3"
            >
              <Globe size={18} />
              ENTER THE TERRAIN
            </Link>
          </motion.div>
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
            <Link href="/terrain-engine" className="nav-item" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}>
              TERRAIN ENGINE →
            </Link>
            <Link href="/repository" className="nav-item">
              Repository
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
