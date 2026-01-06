'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, MessageSquare, TrendingUp, Target, Eye, DollarSign, Heart, Award, ExternalLink, ArrowRight, Globe, Zap, Hash } from 'lucide-react';
import Link from 'next/link';
import { bigWardCase } from '@/lib/data';

export default function BigWardPage() {
  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments 
    ? bigWardCase.comments 
    : bigWardCase.comments.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Header */}
      <header className="py-8 border-b border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="nav-item">
              ← RETURN TO CORE
            </Link>
            <span className="annotation font-mono text-xs">
              // CASE STUDY: 001
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // COLLECTION 2 + COLLECTION 4 PROOF
            </span>
            <h1 className="blueprint-heading mb-4">{bigWardCase.title}</h1>
            <p className="blueprint-subheading max-w-3xl mx-auto">
              {bigWardCase.subtitle}
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="blueprint-card text-center">
              <div className="mb-4">
                <span className="font-mono text-xs text-[#FFBF00] bg-[rgba(255,191,0,0.1)] px-3 py-1 rounded border border-[rgba(255,191,0,0.3)]">
                  // TESTIMONIAL VERIFICATION
                </span>
              </div>
              <blockquote className="text-xl md:text-2xl font-sans text-white mb-4 italic">
                "{bigWardCase.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-[#00D4FF]" />
                <span className="font-mono text-sm text-[#64748B]">{bigWardCase.testimonial.author}</span>
                <span className="font-mono text-xs text-[#64748B]">// {bigWardCase.testimonial.context}</span>
              </div>
            </div>
          </motion.div>

          {/* Big Ward Video Endorsement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="blueprint-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-[#00D4FF] bg-[rgba(0,212,255,0.1)] px-3 py-1 rounded border border-[rgba(0,212,255,0.3)]">
                  // ENDORSEMENT VERIFICATION
                </span>
                <h3 className="font-mono font-bold text-white">Big Ward Speaks on Richard Fortune</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0D0D0D]">
                  <iframe
                    src={`https://www.youtube.com/embed/${bigWardCase.bigWardVideo.youtubeId}?autoplay=0&rel=0`}
                    title={bigWardCase.bigWardVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-mono font-bold text-white mb-3">{bigWardCase.bigWardVideo.title}</h4>
                  <p className="text-[#94A3B8] mb-4">{bigWardCase.bigWardVideo.description}</p>
                  <a 
                    href={`https://youtube.com/shorts/${bigWardCase.bigWardVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span className="font-mono text-sm">WATCH ON YOUTUBE</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Framework Section */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // STRATEGIC FRAMEWORK
            </span>
            <h2 className="blueprint-heading">RESONANCE-TO-REVENUE MODEL</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
              {bigWardCase.strategicFramework.description}
            </p>
          </motion.div>

          {/* Framework Phases */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bigWardCase.strategicFramework.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-[#00D4FF]">
                    PHASE {phase.phase}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-white mb-2">{phase.name}</h3>
                <p className="text-sm text-[#94A3B8] mb-4">{phase.description}</p>
                <div className="bg-[#080808] rounded-lg p-3 border border-[rgba(26,58,95,0.3)]">
                  <span className="text-xs font-mono text-[#FFBF00]">→ {phase.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Framework Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="blueprint-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[#8B5CF6] bg-[rgba(139,92,246,0.1)] px-3 py-1 rounded border border-[rgba(139,92,246,0.3)]">
                // FRAMEWORK EFFICIENCY METRICS
              </span>
              <h3 className="font-mono font-bold text-white">Core Conversion Indicators</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {bigWardCase.frameworkMetrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.3)] hover:border-[#00D4FF]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#64748B] uppercase">{metric.category}</span>
                    <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                      {metric.icon === 'conversion' && <Zap size={14} className="text-[#00D4FF]" />}
                      {metric.icon === 'velocity' && <TrendingUp size={14} className="text-[#00D4FF]" />}
                      {metric.icon === 'symbol' && <Hash size={14} className="text-[#00D4FF]" />}
                      {metric.icon === 'activation' && <Target size={14} className="text-[#00D4FF]" />}
                    </div>
                  </div>
                  <span className="text-2xl font-mono font-bold text-[#00D4FF]">{metric.score}%</span>
                  <p className="text-xs text-[#64748B] mt-2">{metric.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BDA - Battle Damage Assessment */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // BDA: BATTLE DAMAGE ASSESSMENT
            </span>
            <h2 className="blueprint-heading">PERFORMANCE METRICS</h2>
          </motion.div>

          {/* Top Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {bigWardCase.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card text-center"
              >
                <div 
                  className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${index === 3 ? '#FFBF0020' : '#00D4FF20'}`
                  }}
                >
                  <span 
                    className="font-mono font-bold text-lg"
                    style={{ color: index === 3 ? '#FFBF00' : '#00D4FF' }}
                  >
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#64748B] uppercase">{metric.label}</span>
              </motion.div>
            ))}
          </div>

          {/* All 8 Videos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="blueprint-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[#FFBF00] bg-[rgba(255,191,0,0.1)] px-3 py-1 rounded border border-[rgba(255,191,0,0.3)]">
                // VIDEO PERFORMANCE BREAKDOWN
              </span>
              <h3 className="font-mono font-bold text-white">All 8 Videos Analysis</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {bigWardCase.videos.map((video, index) => (
                <div 
                  key={index}
                  className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.3)] hover:border-[#00D4FF]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#64748B]">#{index + 1}</span>
                    <span className="text-xs font-mono text-[#00D4FF]">{video.views}</span>
                  </div>
                  <h4 className="text-sm font-mono text-white mb-1 line-clamp-2">{video.title}</h4>
                  <span className="text-xs text-[#64748B]">{video.duration}</span>
                </div>
              ))}
            </div>

            {/* Resonance Metrics */}
            <div>
              <h4 className="font-mono text-sm text-[#64748B] mb-4">// RESONANCE METRICS</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {bigWardCase.resonanceMetrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-mono text-[#94A3B8]">{metric.category}</span>
                      <span className="text-sm font-mono text-[#00D4FF]">{metric.score}%</span>
                    </div>
                    <div className="resonance-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="resonance-fill"
                      />
                    </div>
                    <p className="text-xs text-[#64748B] mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corridor Diffusion Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // CORRIDOR DIFFUSION MODEL
            </span>
            <h2 className="blueprint-heading">EXPANSION CORRIDORS</h2>
            <p className="text-[#64748B] mt-4">
              Predictable concept adoption patterns across demographic and geographic segments
            </p>
          </motion.div>

          {/* Corridor Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {bigWardCase.expansionCorridors.map((corridor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={20} className="text-[#00D4FF]" />
                  <span className="font-mono font-bold text-white">{corridor.corridor}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {corridor.cities.map((city, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-[rgba(0,212,255,0.1)] text-[#00D4FF] border border-[rgba(0,212,255,0.3)]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#94A3B8] mb-3">{corridor.role}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#64748B]">VELOCITY:</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    corridor.velocity === 'High' 
                      ? 'bg-[#10B981]/20 text-[#10B981]' 
                      : corridor.velocity === 'Medium'
                      ? 'bg-[#FFBF00]/20 text-[#FFBF00]'
                      : 'bg-[#64748B]/20 text-[#64748B]'
                  }`}>
                    {corridor.velocity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment Section Mapping */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // AUDIENCE SOMATIC MAPPING
            </span>
            <h2 className="blueprint-heading">COMMENT RESONANCE</h2>
            <p className="text-[#64748B] mt-4">
              Proof that the framework predicted audience response across {bigWardCase.comments.length} verified comments
            </p>
          </motion.div>

          {/* Comments Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {displayedComments.map((comment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="blueprint-card"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <MessageSquare size={14} className="text-[#00D4FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#FFBF00]">{comment.user}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[rgba(26,58,95,0.3)] text-[#64748B]">
                        {comment.sentiment}
                      </span>
                    </div>
                    <p className="text-sm text-[#94A3B8]">"{comment.comment}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {bigWardCase.comments.length > 8 && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowAllComments(!showAllComments)}
                className="px-6 py-3 rounded-lg border border-[rgba(26,58,95,0.4)] text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors font-mono text-sm"
              >
                {showAllComments ? 'SHOW LESS' : `SHOW ALL ${bigWardCase.comments.length} COMMENTS`}
              </button>
            </div>
          )}

          {/* Framework Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="blueprint-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[#00D4FF] bg-[rgba(0,212,255,0.1)] px-3 py-1 rounded border border-[rgba(0,212,255,0.3)]">
                // ENGINE PROOF
              </span>
              <h3 className="font-mono font-bold text-white">The Framework in Action</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-sm text-[#FFBF00] mb-3">COLLECTION 02: EMOTIONAL-SOMATIC</h4>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Decoded the audience&apos;s gut-level response patterns. Identified that the target demographic 
                  responds to &quot;diesel energy&quot; Somatic Markers—rough, authentic, unpolished power.
                </p>
                <div className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.4)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={16} className="text-[#00D4FF]" />
                    <span className="text-xs font-mono text-[#64748B]">PREDICTION</span>
                  </div>
                  <p className="text-sm text-white">
                    Comments would reference &quot;engine,&quot; &quot;vibes,&quot; &quot;energy&quot; — somatic, physical language.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-mono text-sm text-[#8B5CF6] mb-3">COLLECTION 04: ETHNOGRAPHIC CULTURAL</h4>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Mapped cultural signals to audience identity. Understood that the community values 
                  authenticity over production quality—raw &gt; polished.
                </p>
                <div className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.4)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-[#FFBF00]" />
                    <span className="text-xs font-mono text-[#64748B]">RESULT</span>
                  </div>
                  <p className="text-sm text-white">
                    72.7K total views. $50 production budget. 100% organic growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="py-12 border-t border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/feed" className="nav-item">
              ← BUILDER&apos;S FEED
            </Link>
            <Link href="/palenque" className="nav-item">
              PALENQUE CASE →
            </Link>
            <Link href="/repository" className="nav-item">
              REPOSITORY →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
