'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#philosophy', label: 'Philosophy' },
  { href: '/#blueprints', label: 'Blueprints' },
  { href: '/#architecture', label: 'Architecture' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-[rgba(0,102,255,0.2)]'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF] flex items-center justify-center border border-[#0066FF]">
                  <span className="font-mono font-bold text-white text-lg">RF</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-[#0066FF] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className={cn(
                'font-mono font-bold text-sm tracking-wide transition-colors hidden sm:block',
                isScrolled ? 'text-white' : 'text-white'
              )}>
                ARCHITECT
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#0066FF] bg-[#0066FF]/10 border border-[rgba(0,102,255,0.3)]'
                      : 'text-[#64748B] hover:text-white hover:bg-[rgba(0,102,255,0.1)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/#contact"
                className="btn-blueprint-primary text-sm py-2.5 px-5 font-mono"
              >
                INITIATE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-[rgba(0,102,255,0.1)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0A0F1C]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0D1421] border-l border-[rgba(0,102,255,0.2)]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[rgba(0,102,255,0.2)]">
                  <span className="font-mono font-bold text-lg text-white">MENU</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#64748B] hover:text-white hover:bg-[rgba(0,102,255,0.1)] transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 py-6 px-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between px-4 py-4 rounded-xl text-lg font-mono transition-all duration-200',
                          pathname === link.href
                            ? 'text-[#0066FF] bg-[#0066FF]/10 border border-[rgba(0,102,255,0.3)]'
                            : 'text-[#64748B] hover:text-white hover:bg-[rgba(0,102,255,0.1)]'
                        )}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 border-t border-[rgba(0,102,255,0.2)]">
                  <Link
                    href="/#contact"
                    className="btn-blueprint-primary w-full justify-center font-mono"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    INITIATE CONTACT
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
