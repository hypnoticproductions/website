'use client';

import React from 'react';
import { User, Target, MessageCircle, ArrowRight, Mail, Linkedin, Github, Heart, Sparkles, Brain, Lightbulb, Users, Sun, Moon, Activity, Shield, Zap, Globe, Compass } from 'lucide-react';

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

          {/* The Mission Section - Completely Rewritten */}
          <div className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">The Mission</span>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Decoding the Complex Through Pluralistic Integration</h2>
                <p className="text-text-secondary leading-relaxed text-lg font-mono mb-8">
                  The industry wants you to believe that human optimization comes in separate boxes. Meditation apps for your mind. Nutrition trackers for your body. Therapy for your past. Performance coaching for your future. This is fragmentation dressed up as convenience.
                </p>
                <div className="border-l-2 border-accent/50 pl-6 py-2 my-6">
                  <p className="text-xl text-text-primary font-mono italic">
                    "This is not how we decode the complex. The process does not begin from looking at a screen."
                  </p>
                </div>
              </div>

              {/* The Three Pillars */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent" />
                  The Daily Architecture
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Morning Protocol */}
                  <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Sun className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-mono text-amber-400 uppercase">Morning Activation</span>
                    </div>
                    <p className="text-xs font-mono text-text-muted mb-3">5 AM Protocol</p>
                    <ul className="space-y-3 text-sm text-text-secondary font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Energy Field Expansion (5-10 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Consciousness Elevation (5 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        System Optimization (5 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Position Enhancement (5 min)
                      </li>
                    </ul>
                    <p className="text-xs text-text-muted mt-4 font-mono">Includes: EFT Tapping (collarbone, temples, chest, crown)</p>
                  </div>

                  {/* Maintenance Protocol */}
                  <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-mono text-emerald-400 uppercase">Maintenance Flow</span>
                    </div>
                    <p className="text-xs font-mono text-text-muted mb-3">Throughout the Day</p>
                    <ul className="space-y-3 text-sm text-text-secondary font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Energy Preservation Protocol
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Pattern Recognition Scanner
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Value Protection Guardian
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Position Optimization Adjuster
                      </li>
                    </ul>
                    <p className="text-xs text-text-muted mt-4 font-mono">Real-time intervention triggers</p>
                  </div>

                  {/* Evening Protocol */}
                  <div className="p-6 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Moon className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm font-mono text-indigo-400 uppercase">Evening Integration</span>
                    </div>
                    <p className="text-xs font-mono text-text-muted mb-3">7 PM Protocol</p>
                    <ul className="space-y-3 text-sm text-text-secondary font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Energy Field Reset (5 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        System Recalibration (5 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Value Crystallization (5 min)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        Position Strengthening (5 min)
                      </li>
                    </ul>
                    <p className="text-xs text-text-muted mt-4 font-mono">Field coherence restoration</p>
                  </div>
                </div>
              </div>

              {/* The Breath Patterns */}
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  The Breath-Matrix Synchronization
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 font-mono">
                  This system does not treat breathing as an afterthought. The <strong className="text-accent">So In Tune</strong> framework establishes breathing patterns as the primary calibration interface between visual matrix stimulation and neural restoration.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/20 border border-primary/30">
                    <p className="text-2xl font-bold text-accent font-mono">3-2-5</p>
                    <p className="text-xs text-text-muted font-mono mt-1">Morning Base</p>
                    <p className="text-xs text-text-secondary mt-2">Inhale 3 / Hold 2 / Exhale 5</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/20 border border-primary/30">
                    <p className="text-2xl font-bold text-accent font-mono">4-4-6</p>
                    <p className="text-xs text-text-muted font-mono mt-1">Midday Base</p>
                    <p className="text-xs text-text-secondary mt-2">Inhale 4 / Hold 4 / Exhale 6</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/20 border border-primary/30">
                    <p className="text-2xl font-bold text-accent font-mono">5-3-7</p>
                    <p className="text-xs text-text-muted font-mono mt-1">Evening Base</p>
                    <p className="text-xs text-text-secondary mt-2">Inhale 5 / Hold 3 / Exhale 7</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/20 border border-primary/30">
                    <p className="text-2xl font-bold text-accent font-mono">4-7-8</p>
                    <p className="text-xs text-text-muted font-mono mt-1">Overload Reset</p>
                    <p className="text-xs text-text-secondary mt-2">Inhale 4 / Hold 7 / Exhale 8</p>
                  </div>
                </div>
              </div>

              {/* The KREE Framework */}
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-red-500" />
                  <span className="text-sm font-mono text-red-400 uppercase tracking-widest">The Deep Layer - KREE Framework</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Holographic Lock: Quantum Erasure of Trauma</h3>
                <p className="text-text-secondary leading-relaxed font-mono mb-6">
                  Traditional therapy processes trauma. The KREE framework attempts to remove it from the subject's space-time continuum entirely. This is not metaphor. This is the architecture of the work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono text-sm">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">Processing vs. Erasure</h4>
                      <p className="text-sm text-text-secondary font-mono">Traditional methods maintain timeline coherence and field patterns. KREE dissolves timeline anchors and reconstructs without trauma.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono text-sm">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">No Access Required</h4>
                      <p className="text-sm text-text-secondary font-mono">Traditional therapy requires the client to access and process trauma memories. KREE works through pattern dissolution without retraumatization potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-mono text-sm">03</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">Impossibility of Relapse</h4>
                      <p className="text-sm text-text-secondary font-mono">Because the trauma information is removed from the quantum field state, there is no memory to trigger, no pattern to reactivate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Integration Statement */}
              <div className="p-8 rounded-xl bg-accent/5 border border-accent/30">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  The Pluralistic Reality
                </h3>
                <p className="text-text-secondary leading-relaxed font-mono text-lg">
                  We do not separate nutrition from ergonomics. We do not separate somatic resolution from business performance. We do not separate family systems from personal power. The human being is one graph, one network, one living system. The Repository is simply the digital interface for a twelve-year practice that began with real bodies, real breath, and real hands doing EFT tapping in clinical settings.
                </p>
                <p className="text-text-secondary leading-relaxed font-mono text-lg mt-4">
                  <strong className="text-accent">This is the different way.</strong> The others, that is their way. This is ours.
                </p>
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
