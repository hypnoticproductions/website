
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, Zap, Layers, Globe, Users, Trophy, ChevronDown, Rocket, Code, Laptop } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import { Product } from '../types';

const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const products: Product[] = [
    {
      id: 'harvester',
      title: 'Harvester',
      description: 'AI-Powered legal case preparation that turns thousands of pages of discovery into a searchable case strategy in seconds.',
      icon: <Scale size={32} />,
      status: 'live',
      path: '/harvester',
      accentColor: '#00D4FF'
    },
    {
      id: 'safetravel',
      title: 'SafeTravel',
      description: 'Next-gen travel risk intelligence using cognitive profiling and voice AI to protect global teams and explorers.',
      icon: <ShieldCheck size={32} />,
      status: 'live',
      path: '/safetravel',
      accentColor: '#FFB800'
    }
  ];

  const stats = [
    { label: 'Products Shipped', value: '2', icon: <Zap size={20} /> },
    { label: 'MVP Ready', value: '92%', icon: <Layers size={20} /> },
    { label: 'Certifications', value: '15+', icon: <Trophy size={20} /> },
    { label: 'Building from', value: '🇱🇨', icon: <Globe size={20} /> }
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-[#0A1628]">
        <AnimatedBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/40 to-[#050505] pointer-events-none" />

        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
            System Status: Active
          </motion.div>
          
          <div className="mb-8">
            <TextReveal 
              text="I Build Things That Work" 
              className="text-5xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-[#B967FF] leading-[1.1]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Technical founder. Two shipped products. Zero excuses. <br className="hidden md:block" />
            Crafting the next generation of intelligent SaaS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/about">
              <Button size="lg" className="w-full sm:w-80 group">
                See My Work
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-60 hover:bg-white/10 transition-colors">
                Let's Talk
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-brand-blue"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-brand-dark relative z-10" id="work">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Premium SaaS Solutions" 
            subtitle="Products built from zero to scale, addressing high-stakes industry pain points." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Real Aesthetic */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden bg-brand-card border border-white/10 group">
                <img 
                  src="/founder.png" 
                  alt="Richard D. Fortune" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/10 backdrop-blur-3xl rounded-full -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-blue/10 backdrop-blur-3xl rounded-full -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading align="left" title="The Founder Behind The Build" accent={false} />
              <p className="text-xl text-slate-300 leading-relaxed mb-8 font-light">
                I don't just write code; I architect systems that solve tangible business problems. 
                With a background spanning legal technology and travel risk, I bring a multidisciplinary 
                approach to every project.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10 font-light">
                Operating from the beautiful island of St. Lucia, I leverage decentralized workflows 
                and cutting-edge AI to build global solutions. I believe in extreme ownership and 
                shipping products that are as robust as they are beautiful.
              </p>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="px-10 rounded-[2rem]">Read Full Story</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
