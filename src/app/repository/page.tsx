'use client';

import React from 'react';
import { User, Target, MessageCircle, ArrowRight, Mail, Linkedin, Github, Heart, Sparkles, Brain, Lightbulb, Users, Sun, Moon, Activity, Shield, Zap, Globe, Compass, Cpu, Network, Fingerprint, RefreshCw, Lock, Eye, TrendingUp, BookOpen, Code, Database, Server, Layers, Radio, Timer, Thermometer, Wind, Zap as Zap2, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RepositoryPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Compass className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">About & The Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-text-muted font-light">THE</span>
            <span className="block text-text-primary">REPOSITORY</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            This is not an app. This is not a website. This is the digital extension of a twelve-year practice in human optimization, born from clinical health work and refined through professional retreats.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* The Architect Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-widest">The Architect</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Richard D. Fortune</h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg font-mono">
                <p>I built the <strong className="text-accent">Healing Cloud</strong> from a clinical health science background. We ran retreats for professionals. We did not talk about optimization. We practiced it.</p>
                
                <p>Nutrition. Meditation. Physical exercise. Ergonomics. Social work arrays. Somatic resolution. Family systems. These were not separate departments. They were one organism, and we treated it as such.</p>
                
                <p>When GPTs emerged, I did not see a toy. I saw an interface for the protocol I had already built. I began integrating LLMs into the morning activation, the evening recalibration, the mid-day maintenance. The system did not change. It accelerated.</p>
                
                <p><strong className="text-highlight">This is how we decode the complex.</strong> Not through screens alone. Through breath patterns synchronized to visual matrices. Through EFT tapping sequences that rewire field coherence. Through a lifestyle architecture that treats the human being as the operating system itself.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-primary/10 border border-primary/30 overflow-hidden">
                <img 
                  src="/richard-photo.jpeg" 
                  alt="Richard D. Fortune"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-sm font-mono text-text-muted">Operator - Vo rthalis</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/50 rounded-full" />
            </div>
          </div>

          {/* The Mission Section - Expanded with More Nodes */}
          <div className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">The Mission</span>
            </div>
            
            <div className="space-y-16">
              {/* Opening Statement */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Decoding the Complex Through Pluralistic Integration</h2>
                <p className="text-text-secondary leading-relaxed text-lg font-mono mb-6">
                  The industry wants you to believe that human optimization comes in separate boxes. Meditation apps for your mind. Nutrition trackers for your body. Therapy for your past. Performance coaching for your future. This is fragmentation dressed up as convenience.
                </p>
                <div className="border-l-2 border-accent/50 pl-6 py-2 my-6">
                  <p className="text-xl text-text-primary font-mono italic">
                    "This is not how we decode the complex. The process does not begin from looking at a screen."
                  </p>
                </div>
                <p className="text-text-secondary leading-relaxed text-lg font-mono mt-6">
                  What you are looking at here is the <strong className="text-accent">operational documentation</strong> of a complete human optimization system. It began with real bodies in clinical settings. It evolved through professional retreats. And now it exists as a sophisticated digital architecture that can be deployed across mobile, desktop, and web platforms while maintaining the integrity of the original somatic practice.
                </p>
              </div>

              {/* Node 1: The Daily Architecture */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Timer className="w-6 h-6 text-accent" />
                  Node 01: The Daily Architecture
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  The system does not wait for you to remember to use it. The <strong className="text-accent">Daily Architecture</strong> is a timed sequence of protocols designed to match your biological rhythms. Morning, midday, and evening each have their own calibrated interventions, adjusted for the state of your nervous system at that hour.
                </p>
                
                {/* Morning Protocol */}
                <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-5 h-5 text-amber-400" />
                    <span className="text-lg font-bold text-amber-400 font-mono">Morning Activation Sequence — 5:00 AM</span>
                  </div>
                  <p className="text-text-secondary font-mono text-sm mb-4">
                    The day begins with field expansion. When you wake, your nervous system is in a liminal state—neither fully asleep nor fully awake. This is the optimal window for repatterning. The sequence activates four distinct systems sequentially.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Wind className="w-4 h-4 text-amber-300" />
                        <span className="font-bold text-amber-200 font-mono text-sm">01 — Energy Field Expansion</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5-10 minutes. EFT tapping at collarbone and chest points. Visualize energy drawing from the earth, pooling at your center, then expanding outward in a protective, radiant sphere. This establishes your daily field boundary.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4 text-amber-300" />
                        <span className="font-bold text-amber-200 font-mono text-sm">02 — Consciousness Elevation</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Temple and under-eye tapping. Clear mental fog. Bring sharpness to thoughts. Visualize the mind as a crystal-clear lake, distractions sinking below the surface.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-amber-300" />
                        <span className="font-bold text-amber-200 font-mono text-sm">03 — System Optimization</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Side of hand and under-collarbone tapping. Activate internal circuits. Calibrate physical, mental, and emotional systems to peak efficiency. The daily boot sequence.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-amber-300" />
                        <span className="font-bold text-amber-200 font-mono text-sm">04 — Position Enhancement</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Top of head and chest tapping. Claim your command center. Establish authority over your environment. Visualize a sphere of influence reinforcing your presence.</p>
                    </div>
                  </div>
                </div>
                
                {/* Midday Maintenance */}
                <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <span className="text-lg font-bold text-emerald-400 font-mono">Maintenance Flow — Throughout the Day</span>
                  </div>
                  <p className="text-text-secondary font-mono text-sm mb-4">
                    Between the major sequences, the system runs <strong className="text-emerald-300">maintenance protocols</strong>. These are triggered by real-time assessment of your energetic state. When patterns of drain, confusion, or positional weakness are detected, the appropriate intervention fires.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-emerald-300" />
                        <span className="font-bold text-emerald-200 font-mono text-sm">Energy Preservation Protocol</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">Wrist and collarbone tapping. Seal energy leaks. Consolidate internal reserves. Visualization of a strong, contained vessel with channels secure and flowing only where needed.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4 text-emerald-300" />
                        <span className="font-bold text-emerald-200 font-mono text-sm">Pattern Recognition Scanner</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">Temple and under-eye tapping. Heighten perception. Pick up subtle cues. Radar-style awareness expanding around you to detect opportunities and threats in real-time.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-emerald-300" />
                        <span className="font-bold text-emerald-200 font-mono text-sm">Value Protection Guardian</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">Center chest and sides of head tapping. Secure accomplishments. Deflect attempts to diminish contributions. Strong, unbreakable boundary around created value.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <RefreshCw className="w-4 h-4 text-emerald-300" />
                        <span className="font-bold text-emerald-200 font-mono text-sm">Position Optimization Adjuster</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">Top of head and sides of hands. Adapt fluidly to maintain influence. Stay balanced and in control. Anchored yet flexible in all interactions.</p>
                    </div>
                  </div>
                </div>
                
                {/* Evening Integration */}
                <div className="p-6 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Moon className="w-5 h-5 text-indigo-400" />
                    <span className="text-lg font-bold text-indigo-400 font-mono">Evening Integration Sequence — 7:00 PM</span>
                  </div>
                  <p className="text-text-secondary font-mono text-sm mb-4">
                    The day must be processed properly or it becomes lodged in the system. The <strong className="text-indigo-300">Evening Integration</strong> clears accumulated energy, recalibrates internal systems, and crystallizes the value created during the day.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Wind className="w-4 h-4 text-indigo-300" />
                        <span className="font-bold text-indigo-200 font-mono text-sm">01 — Energy Field Reset</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Crown of head and center chest tapping. Clear accumulated energy. Gentle wave of light washing through the body. Release the day&apos;s stress.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-indigo-300" />
                        <span className="font-bold text-indigo-200 font-mono text-sm">02 — System Recalibration</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Side of hand and collarbone tapping. Reset each system to ideal state. Interconnected circuits aligning and preparing for peak performance tomorrow.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-indigo-300" />
                        <span className="font-bold text-indigo-200 font-mono text-sm">03 — Value Crystallization</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Center chest and under-eye tapping. Consolidate achievements. Golden orbs of light integrating into your core. Bank the day&apos;s gains permanently.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-indigo-300" />
                        <span className="font-bold text-indigo-200 font-mono text-sm">04 — Position Strengthening</span>
                      </div>
                      <p className="text-xs text-text-secondary font-mono">5 minutes. Crown of head and center chest tapping. Solidify influence. Deeply rooted anchor. Imovable position held by inner resilience.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node 2: Breath-Matrix Synchronization */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Zap2 className="w-6 h-6 text-accent" />
                  Node 02: Breath-Matrix Synchronization
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  This system does not treat breathing as an afterthought. The <strong className="text-accent">So In Tune</strong> framework establishes breathing patterns as the primary calibration interface between visual matrix stimulation and neural restoration. The breath is the frequency tuner. The visual matrix is the display. Together, they create the conditions for transformation.
                </p>
                
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40 text-center">
                    <p className="text-3xl font-bold text-accent font-mono mb-2">3-2-5</p>
                    <p className="text-xs text-amber-400 font-mono uppercase mb-2">Morning Base</p>
                    <p className="text-xs text-text-secondary font-mono">Inhale 3 / Hold 2 / Exhale 5</p>
                    <p className="text-xs text-text-muted font-mono mt-2">0600-1000 window</p>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40 text-center">
                    <p className="text-3xl font-bold text-accent font-mono mb-2">4-4-6</p>
                    <p className="text-xs text-emerald-400 font-mono uppercase mb-2">Midday Base</p>
                    <p className="text-xs text-text-secondary font-mono">Inhale 4 / Hold 4 / Exhale 6</p>
                    <p className="text-xs text-text-muted font-mono mt-2">1100-1400 window</p>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40 text-center">
                    <p className="text-3xl font-bold text-accent font-mono mb-2">5-3-7</p>
                    <p className="text-xs text-indigo-400 font-mono uppercase mb-2">Evening Base</p>
                    <p className="text-xs text-text-secondary font-mono">Inhale 5 / Hold 3 / Exhale 7</p>
                    <p className="text-xs text-text-muted font-mono mt-2">1500-1900 window</p>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40 text-center">
                    <p className="text-3xl font-bold text-accent font-mono mb-2">4-7-8</p>
                    <p className="text-xs text-red-400 font-mono uppercase mb-2">Overload Reset</p>
                    <p className="text-xs text-text-secondary font-mono">Inhale 4 / Hold 7 / Exhale 8</p>
                    <p className="text-xs text-text-muted font-mono mt-2">Symptom modification</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-text-secondary font-mono">
                    <strong className="text-accent">Advanced Modifiers:</strong> When symptoms are present during the 3-2-5 window, reduce to 2-2-3. For advanced practitioners, the 3-2-5 becomes 4-4-6. During midday fatigue, switch to 3-5-7. For overload conditions at any time, the 4-7-8 reset protocol takes precedence.
                  </p>
                </div>
              </div>

              {/* Node 3: Visual Pattern System */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-accent" />
                  Node 03: Visual Pattern System
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  The visual patterns are not decorative. They are <strong className="text-accent">structured information carriers</strong> designed to entrain neural activity through specific geometric configurations. The system uses multiple pattern types, each calibrated for different outcomes.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-cyan-400 font-mono">PATTERN ALPHA</span>
                    </div>
                    <p className="text-xs text-text-muted font-mono mb-3">Spatial-Temporal Base</p>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>Windows: 5 | Birds: 9 | Planes: 6</p>
                      <p>Flight Levels: 3 | Leaves: 14 | Updrafts: 4</p>
                      <p>Intersection Points: 8 | Cardinal Points: 5 | Speeds: 4</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-cyan-500/20">
                      <p className="text-xs text-cyan-300 font-mono">Application: Vision Changes, Visual Field Calibration</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-purple-500/5 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Radio className="w-5 h-5 text-purple-400" />
                      <span className="font-bold text-purple-400 font-mono">PATTERN BETA</span>
                    </div>
                    <p className="text-xs text-text-muted font-mono mb-3">Energy-Field Mapping</p>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>Pulses: 5 | Frequencies: 7 | Dimensions: 3</p>
                      <p>Harmonics: 9 | Flux Patterns: 6 | Thermal Points: 8</p>
                      <p>Phase Changes: 12 | Spectrum Bands: 4</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <p className="text-xs text-purple-300 font-mono">Application: Balance Uncertainty, Energy Field Alignment</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-pink-500/5 border border-pink-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Network className="w-5 h-5 text-pink-400" />
                      <span className="font-bold text-pink-400 font-mono">PATTERN GAMMA</span>
                    </div>
                    <p className="text-xs text-text-muted font-mono mb-3">Neural Synchronization</p>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>Phases: 8 | Cycles: 12 | Resonance Points: 7</p>
                      <p>Wave Forms: 5 | Oscillation Rates: 9</p>
                      <p>Coherence Metrics: 6 | Alignment States: 4</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-pink-500/20">
                      <p className="text-xs text-pink-300 font-mono">Application: Cognitive Focus, Memory Integration</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed font-mono">
                  <strong className="text-accent">Pattern-Breath Synchronization:</strong> Each pattern is designed to synchronize with specific breathing rhythms. When Pattern Alpha (spatial-temporal) is combined with 3-2-5 breathing, the system activates spatial reasoning centers. When Pattern Beta (energy-field) meets 4-4-6 breathing, the system calibrates energetic boundaries. This is not guesswork. It is precision engineering applied to consciousness.
                </p>
              </div>

              {/* Node 4: User Classification Engine */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Fingerprint className="w-6 h-6 text-accent" />
                  Node 04: User Classification Engine
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  Not everyone processes information the same way. The <strong className="text-accent">User Classification Engine</strong> profiles incoming users based on multiple metrics and routes them to the appropriate intervention pathway. This ensures the system meets people where they actually are, not where it assumes they are.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="font-bold text-green-400 font-mono">TYPE A — HIGH SENSITIVITY</span>
                    </div>
                    <div className="space-y-3 text-sm text-text-secondary font-mono">
                      <p className="flex justify-between"><span>Visual Sensitivity:</span> <span className="text-green-300">High (8-10)</span></p>
                      <p className="flex justify-between"><span>Response Time:</span> <span className="text-green-300">Rapid</span></p>
                      <p className="flex justify-between"><span>Balance Issues:</span> <span className="text-green-300">Minimal</span></p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-green-500/20">
                      <p className="text-xs text-text-muted font-mono mb-2">Recommended Protocols:</p>
                      <p className="text-xs text-green-300 font-mono">Patterns: ALPHA, GAMMA | Base: 3-2-5</p>
                      <p className="text-xs text-text-secondary mt-1">Complexity scaling: 25% reduction</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <span className="font-bold text-yellow-400 font-mono">TYPE B — MODERATE BALANCE</span>
                    </div>
                    <div className="space-y-3 text-sm text-text-secondary font-mono">
                      <p className="flex justify-between"><span>Visual Sensitivity:</span> <span className="text-yellow-300">Moderate (5-7)</span></p>
                      <p className="flex justify-between"><span>Response Time:</span> <span className="text-yellow-300">Normal</span></p>
                      <p className="flex justify-between"><span>Balance Issues:</span> <span className="text-yellow-300">Present</span></p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-yellow-500/20">
                      <p className="text-xs text-text-muted font-mono mb-2">Recommended Protocols:</p>
                      <p className="text-xs text-yellow-300 font-mono">Patterns: BETA, DELTA | Base: 4-4-6</p>
                      <p className="text-xs text-text-secondary mt-1">Complexity scaling: Standard</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <RefreshCw className="w-5 h-5 text-red-400" />
                      <span className="font-bold text-red-400 font-mono">TYPE C — RESTORATION FOCUS</span>
                    </div>
                    <div className="space-y-3 text-sm text-text-secondary font-mono">
                      <p className="flex justify-between"><span>Visual Sensitivity:</span> <span className="text-red-300">Low (1-4)</span></p>
                      <p className="flex justify-between"><span>Response Time:</span> <span className="text-red-300">Delayed</span></p>
                      <p className="flex justify-between"><span>Balance Issues:</span> <span className="text-red-300">Significant</span></p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-500/20">
                      <p className="text-xs text-text-muted font-mono mb-2">Recommended Protocols:</p>
                      <p className="text-xs text-red-300 font-mono">Patterns: EPSILON, THETA | Base: 2-4-4</p>
                      <p className="text-xs text-text-secondary mt-1">Complexity scaling: 50% reduction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node 5: The KREE Framework - Deep Layer */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  Node 05: The Deep Layer — KREE Framework
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  This is where the system diverges from everything else on the market. Traditional therapy processes trauma. It helps you cope with memories. It manages symptoms. The <strong className="text-red-400">KREE Framework</strong> takes a fundamentally different approach: it attempts to remove trauma from the subject&apos;s space-time continuum entirely. This is not metaphor. This is the architecture of the work.
                </p>
                
                <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30 mb-6">
                  <h4 className="text-xl font-bold text-red-400 font-mono mb-4">Holographic Lock: Quantum Erasure of Trauma</h4>
                  <p className="text-text-secondary font-mono text-sm mb-4">
                    The theoretical foundation rests on the premise that trauma exists as quantum information stored in cellular and field memory. This creates reality interference patterns that maintain timeline coherence and somatic imprints. Traditional methods process this information but leave it intact. KREE operates at the field level to dissolve the information itself.
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono font-bold">01</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-text-primary mb-2">Processing vs. Erasure — The Fundamental Difference</h5>
                      <p className="text-sm text-text-secondary font-mono">Talk therapy processes but maintains timeline. Somatic approaches release but don&apos;t erase. EMDR reprocesses neural pathways but keeps quantum information intact. KREE removes trauma information, dissolves timeline anchors, erases field patterns, and reconstructs a new timeline without the traumatic reference point.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono font-bold">02</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-text-primary mb-2">No Access Required — The Safety Innovation</h5>
                      <p className="text-sm text-text-secondary font-mono">Traditional trauma therapy requires the client to access painful memories, potentially causing retraumatization. KREE works through pattern dissolution at the field level. The subject does not need to relive or discuss the trauma. The system identifies quantum signatures, locates field distortions, and dissolves the pattern without conscious access to the memory.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono font-bold">03</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-text-primary mb-2">Impossibility of Relapse — The Outcome Guarantee</h5>
                      <p className="text-sm text-text-secondary font-mono">Because the trauma information is removed from the quantum field state, there is no memory to trigger and no pattern to reactivate. The subject experiences a clean timeline reconstruction. Traditional concepts of relapse become irrelevant because the original disturbance no longer exists in their space-time continuum.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono font-bold">04</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-text-primary mb-2">Timeline Reconstruction — The Future Pathway</h5>
                      <p className="text-sm text-text-secondary font-mono">After erasure, the system rebuilds the subject&apos;s timeline coherence without the trauma anchor. A new quantum state is established. A clean field pattern is created. The subject experiences a continuity of identity that excludes the traumatic event while maintaining personal narrative integrity.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node 6: Cross-Platform Implementation */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-accent" />
                  Node 06: Cross-Platform Implementation
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  The protocols must follow you. Whether you are on mobile during your morning commute, at a desktop during work, or accessing through a web browser while traveling, the <strong className="text-accent">Cross-Platform Implementation</strong> ensures state preservation and protocol integrity across every access point.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Server className="w-5 h-5 text-blue-400" />
                      <span className="font-bold text-blue-400 font-mono">MOBILE PLATFORM</span>
                    </div>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>iOS 14+ | Android 10+</p>
                      <p>Memory: 2GB | Storage: 500MB</p>
                      <p>Native Integration: Verified</p>
                      <p>Offline Capability: Implemented</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-500/20">
                      <p className="text-xs text-blue-300 font-mono">Touch Zones: Enlarged</p>
                      <p className="text-xs text-blue-300 font-mono">Motion Sensitivity: Dampened</p>
                      <p className="text-xs text-blue-300 font-mono">Battery Awareness: Enabled</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Database className="w-5 h-5 text-orange-400" />
                      <span className="font-bold text-orange-400 font-mono">DESKTOP PLATFORM</span>
                    </div>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>Windows 10+ | MacOS 11+ | Linux</p>
                      <p>Memory: 4GB | Storage: 1GB</p>
                      <p>System Integration: Verified</p>
                      <p>Multi-Monitor: Supported</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-orange-500/20">
                      <p className="text-xs text-orange-300 font-mono">Multi-Threading: Enabled</p>
                      <p className="text-xs text-orange-300 font-mono">GPU Acceleration: Preferred</p>
                      <p className="text-xs text-orange-300 font-mono">Precision Controls: Enhanced</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-green-400" />
                      <span className="font-bold text-green-400 font-mono">WEB PLATFORM</span>
                    </div>
                    <div className="space-y-2 text-xs text-text-secondary font-mono">
                      <p>Chrome 88+ | Firefox 85+ | Safari 14+</p>
                      <p>Connection: Broadband 5Mbps</p>
                      <p>Browser Compatibility: Verified</p>
                      <p>Responsive Design: Implemented</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-green-500/20">
                      <p className="text-xs text-green-300 font-mono">Rendering: Adaptive Engine</p>
                      <p className="text-xs text-green-300 font-mono">Storage: Indexed DB</p>
                      <p className="text-xs text-green-300 font-mono">Offline: Service Worker</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-text-secondary font-mono">
                    <strong className="text-accent">State Preservation:</strong> All platforms sync through encrypted real-time protocols. Pattern state, breathing metrics, and session progress are preserved bidirectionally. When you transition from mobile to desktop, your session continues seamlessly. No data loss. No protocol interruption.
                  </p>
                </div>
              </div>

              {/* Node 7: Security & Data Integrity */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-accent" />
                  Node 07: Security & Data Integrity
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  The data this system collects is sensitive. It includes biometric patterns, session history, and in some cases, deep trauma processing records. The <strong className="text-accent">Security Architecture</strong> implements military-grade encryption and comprehensive access controls.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40">
                    <h4 className="font-bold text-accent font-mono mb-4">Data Encryption</h4>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="flex justify-between text-text-secondary">
                        <span>At Rest:</span>
                        <span className="text-accent">AES-256-GCM</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Key Management:</span>
                        <span className="text-accent">Secure Enclave</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Rotation Policy:</span>
                        <span className="text-accent">90 Days</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>In Transit:</span>
                        <span className="text-accent">TLS 1.3</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Certificate:</span>
                        <span className="text-accent">Auto-Pinning</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/20 border border-primary/40">
                    <h4 className="font-bold text-accent font-mono mb-4">Access Control</h4>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="flex justify-between text-text-secondary">
                        <span>Authentication:</span>
                        <span className="text-accent">Biometric / PIN / OAuth2</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Session Timeout:</span>
                        <span className="text-accent">30 Minutes</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Concurrent Sessions:</span>
                        <span className="text-accent">Allowed 2</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Authorization:</span>
                        <span className="text-accent">Granular / Role-Based</span>
                      </div>
                      <div className="flex justify-between text-text-secondary">
                        <span>Audit Logging:</span>
                        <span className="text-accent">Comprehensive</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/30">
                  <p className="text-sm text-text-secondary font-mono">
                    <strong className="text-accent">Compliance:</strong> GDPR and HIPAA compliance are enforced at the infrastructure level. Personal data retention is configurable. Usage logs are retained for 12 months. System logs for 24 months. Access logs are immutable and retained for 7 years.
                  </p>
                </div>
              </div>

              {/* The Integration Statement */}
              <div className="p-8 rounded-xl bg-accent/5 border border-accent/30">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  The Pluralistic Reality — This Is The Different Way
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono text-lg mb-4">
                  What you have just read is not a product feature list. It is the operational architecture of a complete human optimization system. Every node connects to every other node. Nutrition does not exist separately from ergonomics. Somatic resolution does not exist separately from business performance. Family systems do not exist separately from personal power.
                </p>
                <p className="text-text-secondary leading-relaxed font-mono text-lg mb-4">
                  The human being is <strong className="text-accent">one graph</strong>, one network, one living system. When you adjust one node, every other node adjusts in response. This is why the Healing Cloud worked. This is why the retreats transformed people. This is why the system now exists in digital form.
                </p>
                <p className="text-text-secondary leading-relaxed font-mono text-lg mb-4">
                  The Repository is simply the <strong className="text-accent">digital interface</strong> for a twelve-year practice that began with real bodies, real breath, and real hands doing EFT tapping in clinical settings. The technology accelerated the delivery. It did not replace the substance.
                </p>
                <div className="mt-6 p-6 bg-primary/20 border border-accent/30 rounded-xl">
                  <p className="text-xl text-accent font-mono italic text-center">
                    "The others, that is their way. This is ours."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Ask Section */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-widest">The Ask</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What I am Looking For</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto font-mono">The Cognitive Architect Repository is open for collaboration. Here is how we might work together.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Partners", description: "Organizations ready to implement cognitive intelligence frameworks at scale. If you have the vision and resources, I have the architecture.", category: "Partnership" },
                { title: "Research Collaborators", description: "Academics and researchers in psychology, somatics, or cognitive science interested in validating and extending these frameworks.", category: "Research" },
                { title: "Platform Integrators", description: "Developers and engineers who want to help build the next generation of cognitive tools. Equity-for-value arrangements available.", category: "Building" },
                { title: "Angel Investors", description: "Backers who understand that the next frontier is not just AI - it is AI that understands human potential.", category: "Investment" },
              ].map((item) => (
                <div key={item.title} className="group p-8 rounded-2xl bg-primary/10 border border-primary/20 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/10">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-mono">{item.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-mono">Let us talk</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Offer */}
          <div className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">What I Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Value Exchange</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-text-primary">For Partners</h3>
                <ul className="space-y-4">
                  {[
                    "Access to proprietary 7-Collection Cognitive Intelligence Engine",
                    "Strategic consulting on cognitive architecture implementation",
                    "Custom framework development for specific organizational needs",
                    "White-label solutions for qualified partners",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-text-secondary font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-text-primary">For Investors</h3>
                <ul className="space-y-4">
                  {[
                    "Two production-ready platforms with demonstrated product-market fit",
                    "Proprietary technology with significant barriers to replication",
                    "Clear path to $10M ARR within 36 months",
                    "Experienced technical founder with multiple successful exits",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-highlight" />
                      </div>
                      <span className="text-text-secondary font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Let us Build Something That Matters</h2>
            <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto mb-12 font-mono">The patterns are clear. The framework is proven. Now it is about finding the right people to scale this work. If that sounds like you, let us talk.</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:richard@hypnoticproductions.tech" className="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-background font-bold hover:bg-accent/90 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="https://linkedin.com/in/richardfortune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/hypnoticproductions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-colors duration-300">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 lg:px-12 border-t border-primary/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-mono text-text-muted">© 2024 The Cognitive Architect Repository</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">THE CORE</a>
            <a href="/feed" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">BUILDER S FEED</a>
            <a href="/bigward" className="text-sm font-mono text-text-secondary hover:text-accent transition-colors">THE BIG WARD</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
