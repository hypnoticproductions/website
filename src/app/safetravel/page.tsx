'use client';

import { motion } from 'framer-motion';
import {
  Mic,
  Brain,
  Layers,
  Bell,
  Globe,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import PricingCard from '@/components/ui/PricingCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { products } from '@/lib/data';

const featureIcons = {
  mic: Mic,
  brain: Brain,
  layers: Layers,
  bell: Bell,
  globe: Globe,
  'trending-up': TrendingUp,
};

export default function SafeTravelPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#8B5CF6]/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[#94A3B8]">Now Live</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Travel Risk{' '}
              <span className="gradient-text">Intelligence</span>
            </h1>

            {/* Problem/Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="text-lg font-semibold text-red-400 mb-2">The Problem</h3>
                <p className="text-[#94A3B8]">{products.safetravel.problem}</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-[#8B5CF6] mb-2">The Solution</h3>
                <p className="text-[#94A3B8]">{products.safetravel.solution}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                Try Free
              </Button>
              <Link href="/harvester">
                <Button variant="secondary" size="lg">
                  View Harvester
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Demo - SafeTravel Screenshot */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="/safetravel-screenshot.png"
              alt="SafeTravel - Travel Risk Intelligence Interface"
              className="w-full h-auto rounded-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered subtitle="Smarter travel safety, personalized for you.">
            Features
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.safetravel.features.map((feature, index) => {
              const IconComponent = featureIcons[feature.icon as keyof typeof featureIcons] || Brain;
              return (
                <FeatureCard
                  key={index}
                  icon={<IconComponent size={24} />}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-[#64748B] mb-4">Powered by cutting-edge technology</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {products.safetravel.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full glass text-sm text-[#94A3B8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered subtitle="Plans for every type of traveler.">
            Pricing
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {products.safetravel.pricing.map((plan, index) => (
              <PricingCard
                key={index}
                tier={plan.tier}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                cta={plan.cta}
                href="#"
                featured={plan.featured}
                description={plan.tier === 'Free' ? 'For casual travelers' : plan.tier === 'Pro' ? 'For digital nomads' : 'For teams and organizations'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#8B5CF6]/10 via-[#00D4FF]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Travel Smarter, Not Harder
            </h2>
            <p className="text-[#94A3B8] mb-8">
              Get personalized safety intelligence that adapts to your psychology and travel style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                Try Free
              </Button>
              <Button variant="secondary" size="lg">
                Go Pro
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
