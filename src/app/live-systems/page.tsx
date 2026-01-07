'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Shield, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Target,
  TrendingUp,
  Globe
} from 'lucide-react';
import BlueprintShell from '@/components/layout/BlueprintShell';
import { liveSystems } from '@/lib/data';

const SystemCard: React.FC<{ system: typeof liveSystems.systems[0]; index: number }> = ({ system, index }) => {
  const statusColors: Record<string, string> = {
    green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    yellow: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
    red: 'bg-red-500/20 text-red-400 border-red-500/50',
  };

  const iconSets: Record<string, React.ReactNode> = {
    harvester: <Target className="w-8 h-8" />,
    safetravel: <Shield className="w-8 h-8" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative"
    >
      {/* Terminal Header */}
      <div className="relative bg-primary/10 rounded-t-xl border border-primary/30 overflow-hidden">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
          </div>
          <span className="ml-3 font-mono text-xs text-text-muted">
            SYSTEM_0{index + 1}: {system.name.toUpperCase()}
          </span>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-primary/5 border-b border-primary/20">
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-xs font-mono border ${statusColors[system.statusColor]}`}>
              {system.status.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-text-muted">
              {system.tagline}
            </span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            {iconSets[system.id]}
          </div>
        </div>

        {/* Collections */}
        <div className="px-4 py-3 border-b border-primary/20 bg-primary/5">
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Collection Application: </span>
          <span className="text-xs font-mono text-accent">{system.collections.join(' + ')}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="bg-background/80 border-x border-primary/30 p-6 space-y-6">
        {/* Problem Section */}
        <div>
          <h3 className="text-amber-400 font-mono text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {system.problem.headline}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed font-mono">
            {system.problem.description}
          </p>
        </div>

        {/* Engine Section */}
        <div>
          <h3 className="text-accent font-mono text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            {system.engine.headline}
          </h3>
          <ul className="space-y-2">
            {system.engine.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-mono">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
            <span className="text-xs font-mono text-text-muted uppercase">Target</span>
            <p className="text-sm text-text-primary font-mono mt-1">{system.target}</p>
          </div>
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
            <span className="text-xs font-mono text-text-muted uppercase">Pricing</span>
            <p className="text-sm text-accent font-mono mt-1">{system.pricing}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="w-full group relative px-6 py-4 bg-primary/20 border border-primary/40 rounded-lg 
                           hover:bg-primary/30 hover:border-accent/50 transition-all duration-300
                           overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-center gap-3">
              <span className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors">
                {system.ctaText}
              </span>
              <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          {system.ctaSecondaryText && (
            <button className="w-full mt-3 group relative px-6 py-3 bg-transparent border border-primary/30 rounded-lg 
                             hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
              <div className="relative flex items-center justify-center gap-3">
                <span className="font-mono text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                  {system.ctaSecondaryText}
                </span>
                <ExternalLink className="w-3 h-3 text-text-muted group-hover:text-text-secondary transition-colors" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-xl opacity-50" />
    </motion.div>
  );
};

const AskSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="relative"
    >
      {/* Alert Header */}
      <div className="bg-red-900/20 rounded-t-xl border border-red-500/30 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border-b border-red-500/20">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span className="font-mono text-sm text-red-400 uppercase tracking-wider">
            {liveSystems.ask.headline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background/80 border-x border-red-500/30 p-8">
        <p className="text-text-secondary font-mono text-sm mb-6">
          {liveSystems.ask.description}
        </p>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {liveSystems.ask.items.map((item, i) => (
            <div 
              key={i}
              className="bg-red-500/5 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="font-mono text-xs text-red-400 uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-text-secondary font-mono">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <button className="w-full md:w-auto group relative px-8 py-4 bg-red-600/20 border border-red-500/50 rounded-lg 
                         hover:bg-red-600/30 hover:border-red-500/70 transition-all duration-300
                         overflow-hidden">
          <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center gap-3">
            <span className="font-mono text-sm text-red-400 group-hover:text-red-300 transition-colors">
              {liveSystems.ask.ctaText}
            </span>
            <ExternalLink className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900 rounded-b-xl" />
    </motion.div>
  );
};

export default function LiveSystemsPage() {
  return (
    <BlueprintShell>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-12 lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {liveSystems.title}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-mono font-bold text-text-primary mb-4">
                {liveSystems.subtitle}
              </h1>
              <p className="text-lg text-text-secondary font-mono leading-relaxed max-w-2xl">
                {liveSystems.introduction}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-4 lg:gap-8 py-6 border-y border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Products</span>
                  <p className="text-lg font-mono text-text-primary">02 Live</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Coverage</span>
                  <p className="text-lg font-mono text-text-primary">172+ Countries</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Focus</span>
                  <p className="text-lg font-mono text-text-primary">Legal & Travel</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Systems Grid */}
        <section className="px-6 pb-12 lg:px-12 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl">
            {liveSystems.systems.map((system, index) => (
              <SystemCard key={system.id} system={system} index={index} />
            ))}
          </div>
        </section>

        {/* The Ask Section */}
        <section className="px-6 pb-20 lg:px-12">
          <div className="max-w-4xl">
            <AskSection />
          </div>
        </section>
      </div>
    </BlueprintShell>
  );
}
