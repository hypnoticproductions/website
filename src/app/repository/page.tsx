'use client';

import React from 'react';
import { User, Target, MessageCircle, ArrowRight, Mail, Linkedin, Github, Heart, Sparkles, Brain, Lightbulb, Users } from 'lucide-react';

export default function RepositoryPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <User className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-accent tracking-widest uppercase">About &amp; The Ask</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-text-muted font-light">THE</span>
            <span className="block text-text-primary">REPOSITORY</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Where architecture meets anthropology. A look into the mind behind the 7-Collection Cognitive Intelligence Engine.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-widest">The Architect</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Richard D. Fortune</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                <p>I am a technical founder and cognitive architect obsessed with the invisible structures that shape human potential. My work sits at the intersection of artificial intelligence, evolutionary psychology, and somatics.</p>
                <p>The Cognitive Architect&apos;s Repository represents years of research into pattern recognition, emotional intelligence frameworks, and the architecture of human development. It is not just theory - it is built into two production-ready platforms and validated through real-world application.</p>
                <p>My approach is rooted in a fundamental belief: the most powerful systems are those that map the patterns nature already uses, then accelerate them through technology.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-primary/10 border border-primary/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-sm font-mono text-text-muted">Operator - Vo rthalis</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/50 rounded-full" />
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-widest">The Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Decoding the Complex</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Pattern Recognition", description: "Developing AI systems that identify invisible patterns in human behavior, enabling unprecedented self-understanding and growth acceleration.", icon: <Lightbulb className="w-8 h-8 text-accent" /> },
                { title: "Emotional Architecture", description: "Bridging the gap between cognitive insight and somatic experience through proprietary frameworks like the Emotional-Somatic Bridge.", icon: <Heart className="w-8 h-8 text-highlight" /> },
                { title: "Evolutionary Acceleration", description: "Creating tools that work with natural human development cycles rather than against them, honoring biological rhythms.", icon: <Sparkles className="w-8 h-8 text-primary" /> },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-widest">The Ask</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What I am Looking For</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto">The Cognitive Architect Repository is open for collaboration. Here is how we might work together.</p>
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
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-mono">Let us talk</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                      <span className="text-text-secondary">{item}</span>
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
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Let us Build Something That Matters</h2>
            <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto mb-12">The patterns are clear. The framework is proven. Now it is about finding the right people to scale this work. If that sounds like you, let us talk.</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:richard@fortune.com" className="flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-background font-bold hover:bg-accent/90 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="https://linkedin.com/in/richardfortune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/richardfortune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-colors duration-300">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

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
