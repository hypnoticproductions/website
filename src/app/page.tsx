'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Scale, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ParticleCanvas from '@/components/ui/ParticleCanvas';
import ProductCard from '@/components/ui/ProductCard';
import StatCard from '@/components/ui/StatCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { products, stats, aboutShort, lookingFor } from '@/lib/data';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <ParticleCanvas className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/50 to-[#0A1628]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              I Build Things That{' '}
              <span className="gradient-text">Work</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-3xl mx-auto"
            >
              Technical founder. Two shipped products. Zero excuses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="/harvester">
                <Button size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                  See My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Let&apos;s Talk
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
                <span className="text-xs mb-2">Scroll</span>
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered subtitle="Two products. Real solutions. Built from scratch.">
            What I&apos;ve Built
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ProductCard
              title={products.harvester.name}
              tagline={products.harvester.tagline}
              description={products.harvester.description}
              icon={<Scale size={24} className="text-[#00D4FF]" />}
              status={products.harvester.status}
              href={products.harvester.href}
              accentColor="#00D4FF"
            />
            <ProductCard
              title={products.safetravel.name}
              tagline={products.safetravel.tagline}
              description={products.safetravel.description}
              icon={<Globe size={24} className="text-[#8B5CF6]" />}
              status={products.safetravel.status}
              href={products.safetravel.href}
              accentColor="#8B5CF6"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-[#00D4FF]/5 via-[#8B5CF6]/5 to-[#FFB800]/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">RF</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 rounded-full glass text-sm text-white">
                    {stats[3].value} {stats[3].label.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading>The Builder</SectionHeading>
              <div className="space-y-4 text-[#94A3B8]">
                {aboutShort.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="secondary" icon={<ArrowRight size={18} />} iconPosition="right">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Looking For Section */}
      <section className="py-20 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered subtitle="I'm looking for people who want to build something real.">
            What I&apos;m Looking For
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
            {lookingFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <Button size="lg">Start a Conversation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
