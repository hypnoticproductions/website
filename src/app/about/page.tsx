'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code,
  Scale,
  Heart,
  ChevronDown,
  ChevronUp,
  Download,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { credentials, siteConfig } from '@/lib/data';

interface CredentialSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function CredentialSection({ title, icon, items, isOpen, onToggle }: CredentialSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-hover"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-[#94A3B8]" /> : <ChevronDown size={20} className="text-[#94A3B8]" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-4 pb-4"
        >
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<string>('business');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const credentialSections = [
    { id: 'business', title: 'Business & Leadership', icon: <Briefcase size={20} />, items: credentials.business },
    { id: 'ai', title: 'AI & Technology', icon: <Code size={20} />, items: credentials.ai },
    { id: 'legal', title: 'Legal Knowledge', icon: <Scale size={20} />, items: credentials.legal },
    { id: 'wellness', title: 'Wellness & Coaching', icon: <Heart size={20} />, items: credentials.wellness },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              The Builder
            </h1>
            <p className="text-[#94A3B8]">
              Building things that work, from a place where no one said it was possible.
            </p>
          </motion.div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Profile Image - Richard's Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/profile.jpg"
                  alt="Richard D. Fortune - Technical Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="px-6 py-2 rounded-full glass text-sm font-medium text-white flex items-center gap-2">
                  {siteConfig.locationFlag} {siteConfig.location}
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">The Short Version</h2>
                <div className="space-y-4 text-[#94A3B8] leading-relaxed">
                  <p>
                    I&apos;m Richard Fortune. I build software that solves real problems—because
                    excuses don&apos;t ship products.
                  </p>
                  <p>
                    Over the past 18 months, I&apos;ve single-handedly shipped two production-ready
                    SaaS platforms from scratch. Harvester transforms legal case preparation with AI.
                    SafeTravel provides personalized travel risk intelligence. Both are live, both are
                    real, both were built by one person.
                  </p>
                  <p>
                    I did this from St. Lucia—a Caribbean island with zero tech ecosystem, zero local
                    investors, and zero founder network. No co-founder. No funding. Just work.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-2">The Situation</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Building a tech startup from the Caribbean comes with challenges most founders
                  never think about. Latency to major servers. Payment processing complications.
                  The assumption that quality work only comes from Silicon Valley or NYC.
                </p>
                <p className="text-sm text-[#94A3B8] leading-relaxed mt-3">
                  I built Harvester and SafeTravel anyway. They work. They&apos;re live. They solve
                  real problems for real users. That&apos;s the only metric that matters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered subtitle="What I've built expertise in through hands-on experience.">
            Credentials
          </SectionHeading>

          <div className="space-y-4">
            {credentialSections.map((section) => (
              <CredentialSection
                key={section.id}
                title={section.title}
                icon={section.icon}
                items={section.items}
                isOpen={openSection === section.id}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-[#94A3B8] mb-6">
              I&apos;m always open to conversations about building, shipping, and solving problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" icon={<Download size={18} />}>
                Download Full CV
              </Button>
              <Link href="/contact">
                <Button icon={<ArrowRight size={18} />} iconPosition="right">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
