'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Zap, Award, ArrowRight, FileText, Search, Database } from 'lucide-react';
import Link from 'next/link';

export default function PalenquePage() {
  const [activeTab, setActiveTab] = useState<'explainer' | 'music'>('explainer');

  const dataColumns = [
    {
      layer: 'THE COGNITIVE LAYER',
      collection: 'Collection 1',
      sourceData: "Tia: 'The business is good, but it doesn't hug you at night.'",
      frameworkAnalysis: 'UVAF Archetype: The Cautious Planner / The Keeper',
      execution: 'This character was cast to represent the Stability of the system (The Database). She represents the User Need for security vs. profit. This grounds the project in reality.',
    },
    {
      layer: 'THE SOMATIC LAYER',
      collection: 'Collection 2',
      sourceData: "Daughter: 'Today I empty those baskets... I'm going to go sell.'",
      frameworkAnalysis: 'Emotional-Somatic Bridge: High-Velocity / Ambition',
      execution: 'This character represents the Transaction Speed (The Alert System). Her energy shifts the video from "Cinema" to "Music Video," triggering the Dopamine Loop for the viewer.',
    },
    {
      layer: 'THE ETHNOGRAPHIC LAYER',
      collection: 'Collection 4',
      sourceData: 'Visuals: Bus, Murals, Fruit Stand (Timestamp 00:53)',
      frameworkAnalysis: 'Ethnographic Context: The Source Code',
      execution: 'We did not build a set. We inserted the camera into the existing Power Architecture of Palenque. The bus and the market are the "Interface Layer" of the town. We simply digitized it.',
    },
  ];

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
              // CASE STUDY: 002
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
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // THE PALENQUE PROTOCOL
            </span>
            <h1 className="blueprint-heading mb-4">THE PALENQUE PROTOCOL</h1>
            <p className="blueprint-subheading max-w-3xl mx-auto">
              From Transcript to Architecture
            </p>
          </motion.div>

          {/* The Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="blueprint-card">
              <div className="flex items-start gap-4">
                <Search size={20} className="text-[#00D4FF] mt-1" />
                <div>
                  <p className="text-[#94A3B8] font-mono text-sm mb-4">
                    "We do not guess. We audit. Below is the forensic mapping of how Ethnographic Data (The Transcript) was processed into Digital Media (The Video)."
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <Database size={12} />
                    <span>INPUT: EXPLAINER TRANSCRIPT</span>
                    <ArrowRight size={12} />
                    <span>OUTPUT: DOPAMINE MUSICK VIDEO</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Columns - Forensic Mapping */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation-cyan font-mono text-xs mb-4 inline-block">
              // FORENSIC DATA MAPPING
            </span>
            <h2 className="blueprint-heading">THE DATA LAYERS</h2>
          </motion.div>

          {/* 3-Column Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {dataColumns.map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card relative"
              >
                {/* Connector Line Visual */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3333] via-[#00D4FF] to-[#8B5CF6]" />
                
                {/* Layer Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#8B5CF6] bg-[rgba(139,92,246,0.1)] px-3 py-1 rounded border border-[rgba(139,92,246,0.3)]">
                    {column.layer}
                  </span>
                  <span className="font-mono text-xs text-[#64748B]">{column.collection}</span>
                </div>

                {/* Source Data (Transcript) */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={14} className="text-[#FF3333]" />
                    <span className="text-xs font-mono text-[#FF3333]">SOURCE DATA (TRANSCRIPT)</span>
                  </div>
                  <div className="bg-[#080808] rounded-lg p-4 border-l-2 border-[#FF3333]">
                    <p className="font-mono text-sm text-[#E0E0E0]">
                      {column.sourceData}
                    </p>
                  </div>
                </div>

                {/* Visual Connector Arrow */}
                <div className="flex justify-center mb-6">
                  <ArrowRight size={20} className="text-[#00D4FF] opacity-50" />
                </div>

                {/* Framework Analysis */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={14} className="text-[#00D4FF]" />
                    <span className="text-xs font-mono text-[#00D4FF]">FRAMEWORK ANALYSIS</span>
                  </div>
                  <p className="font-bold text-white">
                    {column.frameworkAnalysis}
                  </p>
                </div>

                {/* Execution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-[#10B981]" />
                    <span className="text-xs font-mono text-[#10B981]">THE EXECUTION</span>
                  </div>
                  <p className="text-sm text-[#94A3B8]">
                    {column.execution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Final Output - Video Player */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // PROCESSED OUTPUT
            </span>
            <h2 className="blueprint-heading">DOPAMINE MUSICK</h2>
            <p className="text-[#64748B] mt-4">
              You have read the code above. Now watch the execution.
            </p>
          </motion.div>

          {/* Video Tab Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('explainer')}
              className={`px-6 py-3 rounded-lg border font-mono text-sm transition-colors ${
                activeTab === 'explainer'
                  ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-[#00D4FF]'
                  : 'border-[rgba(26,58,95,0.4)] text-[#64748B] hover:border-[#00D4FF]/50'
              }`}
            >
              THE EXPLAINER
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className={`px-6 py-3 rounded-lg border font-mono text-sm transition-colors ${
                activeTab === 'music'
                  ? 'bg-[#FF3333]/10 border-[#FF3333] text-[#FF3333]'
                  : 'border-[rgba(26,58,95,0.4)] text-[#64748B] hover:border-[#FF3333]/50'
              }`}
            >
              THE MUSIC VIDEO
            </button>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="blueprint-card"
          >
            {/* Data Overlay */}
            <div className="absolute top-4 left-4 z-10 flex gap-4">
              <span className="video-data-overlay flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeTab === 'music' ? 'bg-[#FF3333]' : 'bg-[#00D4FF]'} animate-pulse`} />
                REC
              </span>
              <span className="video-data-overlay font-mono">
                TYPE: {activeTab === 'music' ? 'PROCESSED OUTPUT' : 'SOURCE DATA'}
              </span>
            </div>

            {/* Video Aspect Ratio Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0D0D0D]">
              <iframe
                src={
                  activeTab === 'explainer'
                    ? `https://www.youtube.com/embed/x7T_jPt4hnk?rel=0`
                    : `https://www.youtube.com/embed/Yiepm8r7OBg?rel=0`
                }
                title={activeTab === 'explainer' ? 'Palenque Explainer' : 'Dopamine Musick'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Caption */}
            <div className="mt-4 p-4 bg-[#080808] rounded-lg border border-[rgba(26,58,95,0.3)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-[#00D4FF]" />
                  <span className="font-mono text-sm text-[#64748B]">
                    {activeTab === 'music' ? 'PROCESSED OUTPUT: DOPAMINE MUSICK' : 'SOURCE DATA: THE EXPLAINER TRANSCRIPT'}
                  </span>
                </div>
                <a
                  href={activeTab === 'music' ? 'https://youtu.be/Yiepm8r7OBg' : 'https://youtu.be/x7T_jPt4hnk'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                >
                  OPEN IN YOUTUBE →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Close - The Sell */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="annotation font-mono text-xs mb-4 inline-block">
              // THE TRANSLATOR
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white">I AM THE</span>
              <br />
              <span className="text-[#00D4FF]">TRANSLATOR</span>
            </h2>
            <div className="blueprint-card text-left">
              <p className="text-lg text-[#94A3B8] mb-6">
                You saw the transcript. You saw the frameworks. You saw the result.
              </p>
              <p className="text-lg text-[#94A3B8] mb-6">
                I translate cultural noise into digital signal. If I can do this with a music video, I can do it with your entire tech ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/repository"
                  className="px-8 py-4 rounded-lg bg-[#00D4FF] text-[#080808] font-mono font-bold hover:bg-[#00D4FF]/90 transition-colors"
                >
                  REVIEW THE ARCHITECTURE
                </Link>
                <Link
                  href="/bigward"
                  className="px-8 py-4 rounded-lg border border-[rgba(26,58,95,0.4)] text-[#00D4FF] font-mono font-bold hover:bg-[#00D4FF]/10 transition-colors"
                >
                  VIEW BIG WARD CASE →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="py-12 border-t border-[rgba(26,58,95,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bigward" className="nav-item">
              BIG WARD CASE →
            </Link>
            <Link href="/feed" className="nav-item">
              BUILDER'S FEED →
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
