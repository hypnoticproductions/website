'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: siteConfig.socials.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: siteConfig.socials.twitter,
      label: 'Twitter',
    },
    {
      icon: Github,
      href: siteConfig.socials.github,
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: 'Email',
    },
  ];

  const footerLinks = {
    Products: [
      { label: 'Harvester', href: '/harvester' },
      { label: 'SafeTravel', href: '/safetravel' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center">
                <span className="font-bold text-white text-lg">RF</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Richard Fortune
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-6 max-w-xs">
              Technical founder building things that work. Shipped two SaaS products from St. Lucia with zero excuses.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#94A3B8] hover:text-[#00D4FF] hover:bg-white/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#00D4FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-[#64748B]">
              <span>© {currentYear} {siteConfig.name}</span>
              <span className="hidden md:inline">•</span>
              <span>Built with spite and determination</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#64748B]">
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
