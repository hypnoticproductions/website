'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Target, MessageCircle, ArrowRight, Mail, Linkedin, Github, 
  Brain, Users, Sun, Moon, Activity, Shield, Zap, Globe, 
  Compass, Cpu, Network, Fingerprint, RefreshCw, Lock, Eye, 
  TrendingUp, BookOpen, Code, Database, Server, Layers, Radio, 
  Timer, Wind, Zap as Zap2, AlertTriangle, CheckCircle, 
  ChevronDown, Hexagon, Menu, X, Check, Zap as Zap3
} from 'lucide-react';

// ============================================
// PARTICLE SYSTEM FOR HERO ANIMATION
// ============================================
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D0D0D 100%)' }}
    />
  );
}

// ============================================
// ANIMATED ICONS FOR KIOSK
// ============================================
const AnimatedClock = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Timer className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedBreath = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Wind className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedEye = () => (
  <motion.div
    animate={{ 
      scale: [1, 1.1, 1],
      filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Eye className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedFingerprint = () => (
  <motion.div
    animate={{ 
      rotate: [0, 5, -5, 0],
      y: [0, -3, 0]
    }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Fingerprint className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedShield = () => (
  <motion.div
    animate={{ 
      scale: [1, 1.05, 1],
      filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"]
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Shield className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedCode = () => (
  <motion.div
    animate={{ 
      x: [0, 5, 0, -5, 0],
      y: [0, -3, 0, 3, 0]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Code className="w-8 h-8 text-amber-400" />
  </motion.div>
);

const AnimatedLock = () => (
  <motion.div
    animate={{ 
      rotate: [0, 10, -10, 0],
      scale: [1, 1.02, 1]
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="w-12 h-12 flex items-center justify-center"
  >
    <Lock className="w-8 h-8 text-amber-400" />
  </motion.div>
);

// ============================================
// KIOSK NODE DATA
// ============================================
const kioskNodes = [
  {
    id: "node-01",
    title: "Daily Architecture",
    description: "Timed sequences matching biological rhythms",
    icon: AnimatedClock,
    href: "#node-01-detail"
  },
  {
    id: "node-02", 
    title: "Breath-Matrix",
    description: "Primary calibration interface",
    icon: AnimatedBreath,
    href: "#node-02-detail"
  },
  {
    id: "node-03",
    title: "Visual Patterns",
    description: "Structured neural entrainment",
    icon: AnimatedEye,
    href: "#node-03-detail"
  },
  {
    id: "node-04",
    title: "User Classification",
    description: "Profile-based routing",
    icon: AnimatedFingerprint,
    href: "#node-04-detail"
  },
  {
    id: "node-05",
    title: "KREE Framework",
    description: "Quantum trauma dissolution",
    icon: AnimatedShield,
    href: "#node-05-detail"
  },
  {
    id: "node-06",
    title: "Cross-Platform",
    description: "State preservation across devices",
    icon: AnimatedCode,
    href: "#node-06-detail"
  },
  {
    id: "node-07",
    title: "Security",
    description: "Military-grade encryption",
    icon: AnimatedLock,
    href: "#node-07-detail"
  }
];

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// ============================================
// SCROLL REVEAL COMPONENT
// ============================================
function ScrollReveal({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// KIOSK CARD COMPONENT
// ============================================
function KioskCard({ node, index }: { node: typeof kioskNodes[0]; index: number }) {
  const IconComponent = node.icon;
  
  return (
    <motion.a
      href={node.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 
                 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]
                 transition-all duration-300 cursor-pointer block overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 70%)'
        }}
      />
      
      {/* Number badge */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <span className="text-sm font-mono font-bold text-amber-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      
      {/* Animated icon */}
      <div className="flex justify-center mb-4">
        <IconComponent />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-amber-400 transition-colors">
        {node.title}
      </h3>
      <p className="text-sm text-gray-400 text-center font-mono leading-relaxed">
        {node.description}
      </p>
      
      {/* Hover arrow */}
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronDown className="w-5 h-5 text-amber-400" />
      </motion.div>
    </motion.a>
  );
}

// ============================================
// SCROLL INDICATOR
// ============================================
function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Peruse Lower Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
          >
            <ChevronDown className="w-5 h-5 text-amber-400" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function RepositoryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A1628] text-white overflow-hidden">
      {/* PARTICLE NETWORK HERO */}
      <ParticleNetwork />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Hexagon className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="font-mono font-bold text-lg">COGNITIVE</span>
                <span className="font-mono text-xs text-gray-500 block">ARCHITECT</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/repository" className="text-sm font-mono text-white hover:text-amber-400 transition-colors">REPOSITORY</a>
              <a href="/feed" className="text-sm font-mono text-gray-400 hover:text-amber-400 transition-colors">BUILDER'S FEED</a>
              <a href="/bigward" className="text-sm font-mono text-gray-400 hover:text-amber-400 transition-colors">THE BIG WARD</a>
              <a href="/live-systems" className="text-sm font-mono text-gray-400 hover:text-amber-400 transition-colors">LIVE SYSTEMS</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4"
              >
                <div className="flex flex-col gap-3">
                  <a href="/" className="text-sm font-mono text-gray-400 hover:text-amber-400 py-2">THE CORE</a>
                  <a href="/repository" className="text-sm font-mono text-white py-2">REPOSITORY</a>
                  <a href="/feed" className="text-sm font-mono text-gray-400 hover:text-amber-400 py-2">BUILDER'S FEED</a>
                  <a href="/bigward" className="text-sm font-mono text-gray-400 hover:text-amber-400 py-2">THE BIG WARD</a>
                  <a href="/live-systems" className="text-sm font-mono text-gray-400 hover:text-amber-400 py-2">LIVE SYSTEMS</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">I Build Things</span>
              <span className="block text-amber-400">That Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-mono max-w-2xl mx-auto">
              Technical founder. Two shipped products. Zero excuses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: RICHARD'S PICTURE AND NOTE */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Richard's Photo */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/5] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://res.cloudinary.com/dd6z9fx5m/image/upload/v1768762383/Gemini_Generated_Image_6uhvm06uhvm06uhv_bpggld.jpg"
                    alt="Richard D. Fortune"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent">
                    <p className="text-sm font-mono text-gray-400">Operator - Vo rthalis</p>
                  </div>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-amber-400/30 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/20 rounded-full" />
              </div>
              
              {/* Richard's Note */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-6 h-6 text-amber-400" />
                  <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">The Architect</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Richard D. Fortune</h2>
                
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-mono">
                  <p>Built the <strong className="text-amber-400">Healing Cloud</strong> from clinical health science. Ran retreats for professionals. No talk. Only practice.</p>
                  
                  <p>Nutrition. Meditation. Physical exercise. Ergonomics. Somatic resolution. Family systems. One organism. Treated as such.</p>
                  
                  <p>When GPTs emerged, didn't see a toy. Saw an interface for the protocol already built. Integrated LLMs into morning activation, evening recalibration, mid-day maintenance. System didn't change. It accelerated.</p>
                  
                  <div className="border-l-2 border-amber-400/50 pl-6 py-2 my-6">
                    <p className="text-xl text-white font-mono italic">
                      "Decode the complex through breath patterns synchronized to visual matrices. EFT tapping sequences that rewire field coherence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: KIOSK DASHBOARD */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">The Architecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                System Overview
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-mono">
                Complete human optimization system. Not separate boxes. One integrated architecture.
              </p>
            </div>
          </ScrollReveal>

          {/* Kiosk Grid - 7 Nodes */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {kioskNodes.map((node, index) => (
              <KioskCard key={node.id} node={node} index={index} />
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* SECTION 3: DETAILED CONTENT */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Introduction */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">The Pluralistic Reality</h3>
              <p className="text-gray-400 leading-relaxed font-mono text-lg mb-4">
                Not a product feature list. Operational architecture of a complete human optimization system. Every node connects to every other node.
              </p>
              <p className="text-gray-400 leading-relaxed font-mono text-lg mb-4">
                Human being is <strong className="text-amber-400">one graph</strong>, one network, one living system. Adjust one node, every other node adjusts. This is why the Healing Cloud worked. This is why retreats transformed people.
              </p>
              <div className="mt-6 p-6 bg-amber-400/10 border border-amber-400/30 rounded-xl">
                <p className="text-xl text-amber-400 font-mono italic text-center">
                  "The others, that is their way. This is ours."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Node 1: Daily Architecture */}
          <ScrollReveal id="node-01-detail">
            <div className="flex items-center gap-3 mb-6">
              <Timer className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 01</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Daily Architecture</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              System doesn't wait for you to remember. <strong className="text-amber-400">Timed sequences</strong> match biological rhythms. Morning, midday, evening each have calibrated interventions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { time: "5:00 AM", title: "Morning Activation", desc: "Field expansion sequence. Four systems activate sequentially." },
                { time: "Throughout", title: "Maintenance Flow", desc: "Real-time assessment triggers interventions." },
                { time: "7:00 PM", title: "Evening Integration", desc: "Clear accumulated energy. Recalibrate systems." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-all"
                >
                  <p className="text-sm font-mono text-amber-400 mb-2">{item.time}</p>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 font-mono">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 2: Breath-Matrix */}
          <ScrollReveal id="node-02-detail">
            <div className="flex items-center gap-3 mb-6">
              <Wind className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 02</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Breath-Matrix Synchronization</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Breathing is the <strong className="text-amber-400">primary calibration interface</strong>. Breath is the frequency tuner. Visual matrix is the display. Together, they create transformation conditions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { pattern: "3-2-5", label: "Morning Base", time: "0600-1000" },
                { pattern: "4-4-6", label: "Midday Base", time: "1100-1400" },
                { pattern: "5-3-7", label: "Evening Base", time: "1500-1900" },
                { pattern: "4-7-8", label: "Overload Reset", time: "Any time" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
                >
                  <p className="text-3xl font-bold text-amber-400 font-mono mb-2">{item.pattern}</p>
                  <p className="text-sm text-white mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500 font-mono">{item.time}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 3: Visual Patterns */}
          <ScrollReveal id="node-03-detail">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 03</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Visual Pattern System</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Visual patterns are <strong className="text-amber-400">structured information carriers</strong>. Designed to entrain neural activity through specific geometric configurations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "PATTERN ALPHA", desc: "Spatial-Temporal Base", app: "Vision calibration" },
                { name: "PATTERN BETA", desc: "Energy-Field Mapping", app: "Balance alignment" },
                { name: "PATTERN GAMMA", desc: "Neural Synchronization", app: "Cognitive focus" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <Layers className="w-8 h-8 text-amber-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-400 font-mono">{item.app}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 4: User Classification */}
          <ScrollReveal id="node-04-detail">
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 04</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">User Classification Engine</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Not everyone processes information the same way. <strong className="text-amber-400">Profile-based routing</strong> to appropriate intervention pathways.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { type: "TYPE A", name: "High Sensitivity", sensitivity: "High (8-10)", protocols: "ALPHA, GAMMA" },
                { type: "TYPE B", name: "Moderate Balance", sensitivity: "Moderate (5-7)", protocols: "BETA, DELTA" },
                { type: "TYPE C", name: "Restoration Focus", sensitivity: "Low (1-4)", protocols: "EPSILON, THETA" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-amber-400">{item.type}</span>
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">Sensitivity: {item.sensitivity}</p>
                  <p className="text-xs text-amber-400 font-mono">{item.protocols}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 5: KREE Framework */}
          <ScrollReveal id="node-05-detail">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 05</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">KREE Framework</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Where the system diverges from everything else. <strong className="text-amber-400">Quantum-level trauma dissolution</strong>. Not processing. Complete erasure from space-time continuum.
            </p>
            
            <div className="space-y-4">
              {[
                { num: "01", title: "Processing vs Erasure", desc: "Remove information, dissolve anchors, reconstruct timeline." },
                { num: "02", title: "No Access Required", desc: "Pattern dissolution at field level. No reliving. No discussion." },
                { num: "03", title: "Impossibility of Relapse", desc: "No memory to trigger. No pattern to reactivate." },
                { num: "04", title: "Timeline Reconstruction", desc: "New quantum state. Clean field pattern. Identity continuity." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 font-mono font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-400 font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 6: Cross-Platform */}
          <ScrollReveal id="node-06-detail">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 06</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Cross-Platform Implementation</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Protocols follow you. <strong className="text-amber-400">State preservation</strong> and protocol integrity across every access point.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Server, name: "Mobile", desc: "iOS 14+ | Android 10+", features: "Offline capability" },
                { icon: Database, name: "Desktop", desc: "Windows 10+ | MacOS 11+", features: "Multi-threading" },
                { icon: Globe, name: "Web", desc: "Chrome 88+ | Firefox 85+", features: "Service Worker" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
                >
                  <item.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                  <p className="text-xs text-amber-400 font-mono">{item.features}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Node 7: Security */}
          <ScrollReveal id="node-07-detail">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-amber-400" />
              <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Node 07</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Security & Data Integrity</h3>
            <p className="text-gray-400 leading-relaxed font-mono mb-6">
              Sensitive data includes biometric patterns and trauma processing records. <strong className="text-amber-400">Military-grade encryption</strong> and comprehensive access controls.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="font-bold text-amber-400 font-mono mb-4">Data Encryption</h4>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex justify-between text-gray-400"><span>At Rest</span><span className="text-white">AES-256-GCM</span></div>
                  <div className="flex justify-between text-gray-400"><span>Key Management</span><span className="text-white">Secure Enclave</span></div>
                  <div className="flex justify-between text-gray-400"><span>Rotation</span><span className="text-white">90 Days</span></div>
                  <div className="flex justify-between text-gray-400"><span>In Transit</span><span className="text-white">TLS 1.3</span></div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h4 className="font-bold text-amber-400 font-mono mb-4">Access Control</h4>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex justify-between text-gray-400"><span>Authentication</span><span className="text-white">Biometric / OAuth2</span></div>
                  <div className="flex justify-between text-gray-400"><span>Session Timeout</span><span className="text-white">30 Minutes</span></div>
                  <div className="flex justify-between text-gray-400"><span>Concurrent</span><span className="text-white">2 Sessions</span></div>
                  <div className="flex justify-between text-gray-400"><span>Audit Logging</span><span className="text-white">Comprehensive</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* THE ASK SECTION */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <MessageCircle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I am Looking For</h2>
              <p className="text-gray-400 font-mono">The Cognitive Architect Repository is open for collaboration.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Partners", desc: "Organizations ready to implement cognitive intelligence frameworks at scale.", category: "Partnership" },
                { title: "Research Collaborators", desc: "Academics interested in validating and extending these frameworks.", category: "Research" },
                { title: "Platform Integrators", desc: "Developers building the next generation of cognitive tools.", category: "Building" },
                { title: "Angel Investors", desc: "Backers who understand the next frontier of human potential.", category: "Investment" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 
                             hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]
                             transition-all duration-300 cursor-pointer block"
                >
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-400/10 mb-4 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-mono">{item.desc}</p>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* WHAT I OFFER */}
          <ScrollReveal>
            <div className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <Zap3 className="w-6 h-6 text-amber-400" />
                <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Value Exchange</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">What I Offer</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">For Partners</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to proprietary 7-Collection Cognitive Intelligence Engine",
                      "Strategic consulting on cognitive architecture implementation",
                      "Custom framework development for specific needs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 font-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">For Investors</h3>
                  <ul className="space-y-3">
                    {[
                      "Two production-ready platforms with demonstrated product-market fit",
                      "Proprietary technology with significant barriers to replication",
                      "Clear path to $10M ARR within 36 months"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 font-mono">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT CTA */}
          <ScrollReveal id="contact">
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something That Matters</h2>
              <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto mb-12">
                Patterns are clear. Framework is proven. Now finding the right people to scale this work.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:richard@hypnoticproductions.tech"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-400 text-[#0A1628] font-bold 
                             hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.5)]
                             transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a 
                  href="https://linkedin.com/in/richardfortune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white 
                             hover:bg-white/10 hover:border-amber-400/50
                             transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/hypnoticproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white 
                             hover:bg-white/10 hover:border-amber-400/50
                             transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono text-gray-500">© 2024 The Cognitive Architect Repository</p>
          <p className="text-sm font-mono text-amber-400">Built with spite and determination</p>
        </div>
      </footer>
    </div>
  );
}
