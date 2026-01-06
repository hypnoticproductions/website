'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, Activity, Target, Map, Eye, Shield, Building, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StickyMeshCanvas from '@/components/ui/StickyMeshCanvas';
import { siteConfig, collections, proofBar } from '@/lib/data';

type CollectionId = string;

export default function CorePage() {
  const [activeCollection, setActiveCollection] = useState<CollectionId | null>(null);
  
  const getCollectionIcon = (id: string) => {
    const icons: Record<string, React.ReactNode> = {
      '01': <Cpu size={24} />,
      '02': <Activity size={24} />,
      '03': <Map size={24} />,
      '04': <Eye size={24} />,
      '05': <Shield size={24} />,
      '06': <Building size={24} />,
      '07': <Target size={24} />,
    };
    return icons[id] || <Target size={24} />;
  };

  const activeCollectionData = collections.items.find(c => c.id === activeCollection);

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero Section with Sticky Mesh */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Sticky Mesh Background */}
        <div className="absolute inset-0 z-0">
          <StickyMeshCanvas className="w-full h-full" interactive />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-transparent to-[#080808]" />
        </div>

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
            <Link href="/feed" className="btn-accent text-sm py-3 px-8 font-mono">
              VIEW BUILDER'S FEED
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

      {/* The 7 Collections Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // THE OPERATING SYSTEM
            </span>
            <h2 className="blueprint-heading mb-4">{collections.title}</h2>
            <p className="blueprint-subheading">{collections.subtitle}</p>
          </motion.div>

          {/* Collections Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {collections.items.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCollection(activeCollection === collection.id ? null : collection.id)}
                className={`collection-card ${activeCollection === collection.id ? 'active' : ''}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span 
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: `${collection.color}20`,
                      color: collection.color,
                      borderColor: `${collection.color}40`,
                      border: '1px solid'
                    }}
                  >
                    {collection.id}
                  </span>
                  <div style={{ color: collection.color }}>
                    {getCollectionIcon(collection.id)}
                  </div>
                </div>
                <h3 className="font-mono font-bold text-white text-sm mb-1">{collection.name}</h3>
                <p className="text-xs text-[#64748B] font-mono">{collection.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Active Collection Detail */}
          <AnimatePresence>
            {activeCollection && activeCollectionData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="blueprint-card"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span 
                        className="font-mono text-lg font-bold px-3 py-2 rounded"
                        style={{ 
                          backgroundColor: `${activeCollectionData.color}20`,
                          color: activeCollectionData.color,
                        }}
                      >
                        {activeCollectionData.code}
                      </span>
                      <div>
                        <h3 className="font-mono font-bold text-white text-xl">{activeCollectionData.name}</h3>
                        <p className="font-mono text-sm" style={{ color: activeCollectionData.color }}>
                          {activeCollectionData.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#94A3B8] leading-relaxed mb-6">
                      {activeCollectionData.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeCollectionData.applications.map((app, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(26,58,95,0.3)] text-[#00D4FF] border border-[rgba(0,212,255,0.2)]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="bg-[#080808] rounded-lg p-4 border border-[rgba(26,58,95,0.4)]">
                      <h4 className="font-mono text-xs text-[#64748B] mb-3">// TECHNICAL SPECS</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748B]">Status</span>
                          <span className="text-[#00D4FF] font-mono">ACTIVE</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748B]">Integration</span>
                          <span className="text-[#FFBF00] font-mono">CORE v2.0</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#64748B]">API Access</span>
                          <span className="text-[#10B981] font-mono">ENABLED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Vertical Proof Bar */}
      <section className="py-20 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // VERTICAL PROOF BAR
            </span>
            <h2 className="blueprint-heading">PROOF OF CONCEPT</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofBar.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card-hover text-center"
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${item.id === 'legal' ? '#1A3A5F' : item.id === 'travel' ? '#FFBF00' : item.id === 'music' ? '#00D4FF' : '#8B5CF6'}20`
                  }}
                >
                  <span 
                    className="font-mono font-bold text-lg"
                    style={{ 
                      color: item.id === 'legal' ? '#1A3A5F' : item.id === 'travel' ? '#FFBF00' : item.id === 'music' ? '#00D4FF' : '#8B5CF6'
                    }}
                  >
                    {item.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-[#00D4FF] mb-2">{item.project}</p>
                <p className="text-xs text-[#64748B] mb-4">{item.tagline}</p>
                <div className="space-y-1">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                      <span className="text-xs font-mono text-[#94A3B8]">{metric}</span>
                    </div>
                  ))}
                </div>
                {item.id === 'music' && (
                  <Link href="/bigward" className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-[#FFBF00] hover:text-[#FFD700]">
                    VIEW CASE <ChevronRight size={12} />
                  </Link>
                )}
                {item.id === 'culture' && (
                  <Link href="/palenque" className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-[#FFBF00] hover:text-[#FFD700]">
                    VIEW CASE <ChevronRight size={12} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation Preview */}
      <section className="py-12 border-t border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/feed" className="nav-item">
              Builder's Feed
            </Link>
            <Link href="/bigward" className="nav-item">
              Big Ward Case
            </Link>
            <Link href="/palenque" className="nav-item">
              Palenque Case
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
