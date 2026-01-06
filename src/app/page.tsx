'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu, Network, Brain, Code, Database, Cloud, Terminal, Mail, Linkedin, Twitter, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CognitiveBurstCanvas from '@/components/ui/CognitiveBurstCanvas';
import { siteConfig, philosophy, projects, architecture, techStack, credentials, contact, stats } from '@/lib/data';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen blueprint-grid-bg">
      {/* Blueprint Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Cognitive Burst Particle Animation */}
        <div className="absolute inset-0 z-0">
          <CognitiveBurstCanvas className="w-full h-full" />
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 blueprint-grid-dense opacity-30" />
          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Corner brackets decoration */}
          <div className="absolute top-20 left-8 w-16 h-16 border-l-2 border-t-2 border-[rgba(0,102,255,0.3)] hidden lg:block" />
          <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-[rgba(0,102,255,0.3)] hidden lg:block" />
          <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-[rgba(0,102,255,0.3)] hidden lg:block" />
          <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-[rgba(0,102,255,0.3)] hidden lg:block" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image with Dual-Ring Frame */}
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#0066FF]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '200px', height: '200px' }}
                />
                {/* Inner counter-rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed border-[#FFD700]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '180px', height: '180px', top: '10px', left: '10px' }}
                />
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-[#0066FF] blur-xl opacity-20 group-hover:opacity-30 transition-opacity" style={{ width: '200px', height: '200px' }} />
                {/* Profile image container */}
                <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-[#0A0F1C]">
                  <Image
                    src="/profile.png"
                    alt="Richard D. Fortune - Architect of Cognitive Frameworks"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div className="w-2 h-2 bg-[#0066FF] rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Annotation */}
            <motion.div variants={itemVariants} className="text-center mb-6">
              <span className="annotation font-mono text-xs">
                // Richard . d fortune- Operator- Vo'rthalis
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold text-white mb-6 text-center leading-tight"
            >
              <span className="block">ARCHITECT OF</span>
              <span className="block text-gradient-blueprint">COGNITIVE</span>
              <span className="block">FRAMEWORKS</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#64748B] mb-8 max-w-3xl mx-auto text-center font-mono"
            >
              {siteConfig.tagline} // {siteConfig.subtitle}
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#0066FF]">{stat.value}</div>
                  <div className="text-xs text-[#64748B] font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="/#blueprints">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  VIEW BLUEPRINTS
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="secondary" size="lg">
                  INITIATE CONTACT
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center text-[#64748B]"
              >
                <span className="text-xs font-mono mb-2">SCROLL_TO_BEGIN</span>
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading annotation="PHILOSOPHY_01" centered subtitle={philosophy.subtitle}>
            {philosophy.title}
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {philosophy.principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#0066FF] bg-[rgba(0,102,255,0.1)] px-2 py-1 rounded">
                    // {principle.id}
                  </span>
                </div>
                <h3 className="text-xl font-mono font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-[#64748B] text-sm mb-4 leading-relaxed">{principle.description}</p>
                <div className="wireframe p-3 rounded-lg">
                  <span className="font-mono text-xs text-[#FFD700]">
                    METHOD: {principle.methodology}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint Canvas Section */}
      <section className="py-20 lg:py-32 bg-[#0D1421] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dense opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading annotation="SYSTEM_OVERVIEW" centered subtitle="A visual representation of my cognitive framework and how I approach complex problem-solving.">
            Interactive Blueprint Canvas
          </SectionHeading>

          {/* Interactive Canvas Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-16 wireframe rounded-2xl p-8 lg:p-12"
          >
            {/* Central Node */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#0066FF] border-4 border-[#0A0F1C] flex items-center justify-center glow-blueprint">
                  <Brain size={40} className="text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#0066FF]"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Connected Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Cpu, label: 'Cognition', color: '#0066FF' },
                { icon: Network, label: 'Logic', color: '#00D4FF' },
                { icon: Code, label: 'Implementation', color: '#8B5CF6' },
                { icon: Database, label: 'Optimization', color: '#FFD700' },
              ].map((node, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#0A0F1C] border border-[rgba(0,102,255,0.3)] flex items-center justify-center">
                    <node.icon size={28} style={{ color: node.color }} />
                  </div>
                  <span className="font-mono text-sm text-white">{node.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines Decoration */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#0066FF" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#0066FF" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#0066FF" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#0066FF" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="blueprints" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading annotation="PROJECTS_01" centered subtitle={projects.subtitle}>
            {projects.title}
          </SectionHeading>

          <div className="space-y-12 mt-16">
            {projects.items.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card"
              >
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-[#0066FF] bg-[rgba(0,102,255,0.1)] px-2 py-1 rounded">
                        // {project.code}
                      </span>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        project.status === 'production' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-lg text-[#FFD700] font-mono mb-3">{project.tagline}</p>
                    <p className="text-[#64748B] leading-relaxed">{project.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex lg:flex-col gap-4 lg:gap-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center lg:text-right min-w-[80px]">
                        <div className="text-xl font-mono font-bold text-[#0066FF]">{value}</div>
                        <div className="text-xs font-mono text-[#64748B] uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#94A3B8] font-mono">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[rgba(0,102,255,0.2)]">
                  <span className="font-mono text-xs text-[#64748B] mr-2">STACK:</span>
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-[rgba(0,102,255,0.1)] text-[#0066FF] border border-[rgba(0,102,255,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 lg:py-32 bg-[#0D1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading annotation="ARCHITECTURE_01" centered subtitle={architecture.subtitle}>
            {architecture.title}
          </SectionHeading>

          {/* Architecture Layers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {architecture.layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < architecture.layers.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#0066FF] to-transparent opacity-30" />
                )}

                {/* Layer Card */}
                <div className="blueprint-card h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#0066FF] bg-[rgba(0,102,255,0.1)] px-2 py-1 rounded">
                      LAYER {layer.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-[#0066FF]">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-mono font-bold text-white mb-1">{layer.name}</h3>
                  <p className="text-xs text-[#FFD700] font-mono mb-4 uppercase tracking-wider">
                    Focus: {layer.focus}
                  </p>
                  <p className="text-sm text-[#64748B] mb-4 leading-relaxed">{layer.description}</p>

                  <div className="space-y-2">
                    {layer.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span className="text-xs font-mono text-[#94A3B8]">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading annotation="TECHNOLOGY_01" centered subtitle={techStack.subtitle}>
            {techStack.title}
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {techStack.categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.name === 'Frontend' && <Code className="text-[#0066FF]" size={24} />}
                  {category.name === 'Backend' && <Terminal className="text-[#00D4FF]" size={24} />}
                  {category.name === 'AI & ML' && <Brain className="text-[#8B5CF6]" size={24} />}
                  {category.name === 'DevOps' && <Cloud className="text-[#FFD700]" size={24} />}
                  <h3 className="text-lg font-mono font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={tech.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-sm text-[#94A3B8]">{tech.name}</span>
                        <span className="font-mono text-xs text-[#64748B]">{tech.category}</span>
                      </div>
                      <div className="h-2 bg-[#0A0F1C] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 blueprint-card text-center"
          >
            <h3 className="text-lg font-mono font-bold text-white mb-4">{credentials.title}</h3>
            <p className="text-[#64748B] mb-6">{credentials.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {credentials.items.map((item, index) => (
                <span
                  key={index}
                  className="font-mono text-xs px-4 py-2 rounded-lg bg-[rgba(0,102,255,0.1)] text-[#0066FF] border border-[rgba(0,102,255,0.2)]"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-[#0D1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading annotation="CONTACT_01" centered subtitle={contact.subtitle}>
            {contact.title}
          </SectionHeading>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {contact.methods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blueprint-card text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  {method.id === 'email' && <Mail className="text-[#0066FF]" size={24} />}
                  {method.id === 'linkedin' && <Linkedin className="text-[#0066FF]" size={24} />}
                  {method.id === 'twitter' && <Twitter className="text-[#0066FF]" size={24} />}
                  {method.id === 'location' && <MapPin className="text-[#0066FF]" size={24} />}
                </div>
                <span className="font-mono text-xs text-[#0066FF] bg-[rgba(0,102,255,0.1)] px-2 py-1 rounded mb-3 inline-block">
                  // {method.protocol}
                </span>
                <p className="text-white font-mono text-sm mb-2">{method.handle}</p>
                <p className="text-xs text-[#64748B]">{method.response}</p>
              </motion.div>
            ))}
          </div>

          {/* Opportunities */}
          <div className="mt-16">
            <h3 className="text-lg font-mono font-bold text-white text-center mb-8">
              CURRENT OPPORTUNITIES
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contact.opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="wireframe p-6 rounded-xl"
                >
                  <span className="font-mono text-xs text-[#FFD700] mb-3 inline-block">
                    // {opportunity.type.toUpperCase()}
                  </span>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-blueprint-primary text-lg px-12 py-4 font-mono inline-flex items-center gap-3"
            >
              <Mail size={20} />
              SEND TRANSMISSION
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
