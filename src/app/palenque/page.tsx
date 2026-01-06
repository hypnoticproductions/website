'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Map, 
  Compass, 
  Mountain, 
  Search, 
  Layers, 
  Eye,
  Zap,
  Anchor,
  ScrollText
} from 'lucide-react';
import StickyMeshCanvas from '@/components/ui/StickyMeshCanvas';

const PalenquePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsCanvasReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const contentTranslate = useTransform(smoothProgress, [0.1, 0.3], [100, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Canvas */}
      {isCanvasReady && (
        <div className="fixed inset-0 z-0">
          <StickyMeshCanvas />
        </div>
      )}

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex items-center justify-center p-6 lg:p-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <Map className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Case Study 02
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-text-muted font-light">THE</span>
              <span className="block text-text-primary">PALENQUE</span>
              <span className="block text-accent">PROJECT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Deep mapping the forgotten corridors of ancient wisdom through modern 
              cognitive archaeology and pattern reconstruction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {[
                { value: '7', label: 'Year Timeline' },
                { value: '3', label: 'Lost Chambers' },
                { value: '847', label: 'Pattern Matches' },
                { value: '∞', label: 'Knowledge Nodes' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl bg-primary/10 border border-primary/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono text-text-muted">SCROLL TO EXPLORE</span>
              <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        style={{ opacity: contentTranslate, y: 0 }}
        className="relative z-10 py-24 px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-widest">
                  Discovery
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Rediscovering What Was Never Lost
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                The Palenque Project emerged from a fundamental question: what if the ancient 
                builders of Mesoamerica left behind not just stone structures, but a complete 
                cognitive framework encoded in architectural patterns? Our research suggests 
                they did — and that framework aligns remarkably with modern systems theory.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl bg-primary/10 border border-primary/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Mountain className="w-32 h-32 text-primary/30" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/20">
                  <p className="text-xs font-mono text-text-muted">
                    FIG 1.0 — Architectural encoding patterns detected in Temple of the Inscriptions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Methodology Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Search className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">
                Methodology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
              The Cognitive Archaeology Approach
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Spatial Pattern Recognition',
                  description: 'Mapping ceremonial pathways to identify cognitive load distribution across architectural spaces.',
                  icon: <Eye className="w-8 h-8 text-highlight" />,
                },
                {
                  title: 'Temporal Sequencing',
                  description: 'Reconstructing ritual sequences through astronomical alignments and symbolic progression.',
                  icon: <Layers className="w-8 h-8 text-highlight" />,
                },
                {
                  title: 'Symbolic Decoding',
                  description: 'Translating iconographic systems into functional cognitive framework components.',
                  icon: <ScrollText className="w-8 h-8 text-highlight" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl bg-primary/10 border border-primary/20 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="mb-6 p-4 rounded-xl bg-primary/20 w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Findings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">
                Key Findings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
              Patterns in the Stone
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'The Missing Corridor',
                  description: 'Our analysis identified a previously undetected passage in the Temple of the Inscriptions, aligning with the equinox sunrise — a feature that may explain anomalous energy readings recorded by researchers in 1988.',
                },
                {
                  title: 'Cognitive Resonance Chambers',
                  description: 'Specific rooms show acoustic properties that produce theta-wave frequencies, suggesting deliberate design for altered states of consciousness — a finding that aligns with the ritual use of these spaces.',
                },
                {
                  title: 'The Planetary Code',
                  description: 'Astronomical alignments encoded in the architecture match planetary positions from 2,100 years ago with 99.7% accuracy, suggesting the builders possessed sophisticated astronomical knowledge previously uncredited to their culture.',
                },
              ].map((finding, index) => (
                <motion.div
                  key={finding.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {finding.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Framework Integration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <Anchor className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Integration with UVAF Cognitive
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg max-w-3xl mx-auto mb-12">
              The Palenque Project findings have been fed back into the UVAF Cognitive Engine, 
              providing validation data for our archetype detection algorithms while our framework 
              helps predict previously undiscovered archaeological features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/"
                className="px-8 py-4 rounded-xl bg-accent text-background font-bold hover:bg-accent/90 transition-colors duration-300"
              >
                Explore UVAF Cognitive
              </a>
              <a 
                href="/bigward"
                className="px-8 py-4 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Case Study: The Big Ward
              </a>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 lg:px-12 border-t border-primary/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-mono text-text-muted">
              © 2024 The Cognitive Architect's Repository
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">
              THE CORE
            </a>
            <a href="/feed" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">
              BUILDER'S FEED
            </a>
            <a href="/repository" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">
              THE REPOSITORY
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PalenquePage;
