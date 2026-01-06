'use client';

import { motion } from 'framer-motion';
import { Play, MessageSquare, TrendingUp, Target, Eye, DollarSign, Heart, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { bigWardCase } from '@/lib/data';

export default function BigWardPage() {
  const getMetricIcon = (icon: string) => {
    const icons: Record<string, React.ReactNode> = {
      eye: <Eye size={20} />,
      dollar: <DollarSign size={20} />,
      growth: <TrendingUp size={20} />,
    };
    return icons[icon] || <Target size={20} />;
  };

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
            className="max-w-4xl mx-auto"
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

          {/* Metrics Grid */}
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
                    className="font-mono font-bold"
                    style={{ color: index === 3 ? '#FFBF00' : '#00D4FF' }}
                  >
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#64748B] uppercase">{metric.label}</span>
              </motion.div>
            ))}
          </div>

          {/* YouTube Page Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="blueprint-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-[#FFBF00] bg-[rgba(255,191,0,0.1)] px-3 py-1 rounded border border-[rgba(255,191,0,0.3)]">
                // SOURCE VERIFICATION
              </span>
              <h3 className="font-mono font-bold text-white">YouTube Analytics Export</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Channel Stats */}
              <div className="space-y-4">
                <div className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.4)]">
                  <Image
                    src="/bigwardyoutubepage.png"
                    alt="Big Ward YouTube Channel"
                    width={600}
                    height={200}
                    className="w-full rounded"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#080808] rounded p-3 text-center border border-[rgba(26,58,95,0.3)]">
                    <div className="text-lg font-mono font-bold text-[#00D4FF]">11K+</div>
                    <div className="text-xs font-mono text-[#64748B]">Video 1 Views</div>
                  </div>
                  <div className="bg-[#080808] rounded p-3 text-center border border-[rgba(26,58,95,0.3)]">
                    <div className="text-lg font-mono font-bold text-[#00D4FF]">7.8K</div>
                    <div className="text-xs font-mono text-[#64748B]">Video 2 Views</div>
                  </div>
                  <div className="bg-[#080808] rounded p-3 text-center border border-[rgba(26,58,95,0.3)]">
                    <div className="text-lg font-mono font-bold text-[#00D4FF]">4.5K</div>
                    <div className="text-xs font-mono text-[#64748B]">Video 3 Views</div>
                  </div>
                </div>
              </div>

              {/* Resonance Metrics */}
              <div>
                <h4 className="font-mono text-sm text-[#64748B] mb-4">// RESONANCE METRICS</h4>
                <div className="space-y-4">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comment Section Mapping */}
      <section className="py-16">
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
              Proof that the framework predicted audience response
            </p>
          </motion.div>

          {/* Comments Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="blueprint-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/firstbigwardsong.png"
                  alt="First Big Ward Song"
                  width={120}
                  height={120}
                  className="rounded"
                />
                <div>
                  <h4 className="font-mono font-bold text-white">Video 1</h4>
                  <span className="text-xs text-[#64748B]">11,000+ views</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#080808] rounded p-3 border border-[rgba(26,58,95,0.3)]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={14} className="text-[#00D4FF]" />
                    <span className="text-xs font-mono text-[#FFBF00]">USER_01</span>
                    <span className="text-xs text-[#64748B]">// Somatic Response</span>
                  </div>
                  <p className="text-sm text-[#94A3B8]">"I need this every morning for my diesel engine"</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="blueprint-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/secondbigwardsong.png"
                  alt="Second Big Ward Song"
                  width={120}
                  height={120}
                  className="rounded"
                />
                <div>
                  <h4 className="font-mono font-bold text-white">Video 2</h4>
                  <span className="text-xs text-[#64748B]">7,800 views</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-[#080808] rounded p-3 border border-[rgba(26,58,95,0.3)]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={14} className="text-[#00D4FF]" />
                    <span className="text-xs font-mono text-[#FFBF00]">USER_02</span>
                    <span className="text-xs text-[#64748B]">// Emotional Validation</span>
                  </div>
                  <p className="text-sm text-[#94A3B8]">"This hits different man"</p>
                </div>
              </div>
            </motion.div>
          </div>

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
                  Decoded the audience's gut-level response patterns. Identified that the target demographic 
                  responds to "diesel energy" Somatic Markers—rough, authentic, unpolished power.
                </p>
                <div className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.4)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={16} className="text-[#00D4FF]" />
                    <span className="text-xs font-mono text-[#64748B]">PREDICTION</span>
                  </div>
                  <p className="text-sm text-white">
                    Comments would reference "engine," "vibes," "energy"—somatic, physical language.
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
                    100% organic growth. $50 production budget. Zero paid promotion.
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
              ← BUILDER'S FEED
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
