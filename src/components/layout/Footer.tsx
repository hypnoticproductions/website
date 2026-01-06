'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, FileText } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/richardfortune',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/richardfortune',
      label: 'Twitter',
    },
    {
      icon: Github,
      href: 'https://github.com/hypnoticproductions',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:richard@hypnoticproductions.tech',
      label: 'Email',
    },
  ];

  const footerLinks = {
    Projects: [
      { label: 'Harvester', href: '/#blueprints' },
      { label: 'SafeTravel', href: '/#blueprints' },
    ],
    Blueprint: [
      { label: 'Philosophy', href: '/#philosophy' },
      { label: 'Architecture', href: '/#architecture' },
      { label: 'Tech Stack', href: '/#stack' },
    ],
    Protocol: [
      { label: 'Contact', href: '/#contact' },
      { label: 'Availability', href: '/#contact' },
    ],
  };

  return (
    <footer className="bg-[#0D1421] border-t border-[rgba(0,102,255,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF] flex items-center justify-center border border-[#0066FF]">
                <span className="font-mono font-bold text-white text-lg">RF</span>
              </div>
              <span className="font-mono font-bold text-sm text-white tracking-widest">
                ARCHITECT
              </span>
            </div>
            <p className="text-[#64748B] text-sm mb-6 max-w-xs font-mono leading-relaxed">
              Building cognitive infrastructure for tomorrow. Technical founder decoding the complex.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#64748B] hover:text-[#0066FF] hover:bg-[rgba(0,102,255,0.1)] transition-all duration-200"
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
              <h3 className="font-mono font-bold text-white mb-4 text-sm tracking-wider uppercase">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-[#0066FF] transition-colors duration-200 font-mono"
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
        <div className="mt-12 pt-8 border-t border-[rgba(0,102,255,0.2)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-[#64748B] font-mono">
              <span>© {currentYear} RDF ARCHITECTURES</span>
              <span className="hidden md:inline">//</span>
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#64748B] font-mono">
              <MapPin size={14} />
              <span>CASTRIES, SAINT LUCIA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
