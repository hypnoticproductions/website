'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hexagon, 
  Activity, 
  Layers, 
  Radio, 
  FileText, 
  ChevronUp,
  Menu,
  X,
  Server,
  Zap,
  Wifi
} from 'lucide-react';

interface BlueprintShellProps {
  children: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  isSpecial?: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'THE CORE',
    href: '/',
    icon: <Hexagon className="w-5 h-5" />,
    description: 'Entry point & architecture',
  },
  {
    label: 'THE BRIDGE',
    href: '/bridge',
    icon: <Activity className="w-5 h-5" />,
    description: 'Engine Two v2.0',
  },
  {
    label: "BUILDER'S FEED",
    href: '/feed',
    icon: <Activity className="w-5 h-5" />,
    description: 'Intelligence reports',
  },
  {
    label: 'THE BIG WARD',
    href: '/bigward',
    icon: <Radio className="w-5 h-5" />,
    description: 'Case study: Resonance',
  },
  {
    label: 'THE PALENQUE',
    href: '/palenque',
    icon: <Layers className="w-5 h-5" />,
    description: 'Case study: Deep mapping',
  },
  {
    label: 'LIVE SYSTEMS',
    href: '/live-systems',
    icon: <Server className="w-5 h-5" />,
    description: 'Products & The Ask',
  },
  {
    label: 'WUKR WIRE',
    href: '/wukr-wire',
    icon: <Wifi className="w-5 h-5" />,
    description: 'Syndication Engine',
    isSpecial: true,
  },
  {
    label: 'THE REPOSITORY',
    href: '/repository',
    icon: <FileText className="w-5 h-5" />,
    description: 'About & The Ask',
  },
];

const NavLink: React.FC<{ 
  item: NavItem; 
  isActive: boolean; 
  isMobile?: boolean;
  onClick?: () => void;
}> = ({ item, isActive, isMobile = false, onClick }) => {
  const isSpecial = item.isSpecial;
  
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        group relative flex items-center gap-3 px-4 py-3 
        transition-all duration-300 ease-out
        ${isMobile 
          ? 'flex-col justify-center gap-1 py-3 px-2 flex-1 min-w-0' 
          : 'rounded-lg border-l-2'
        }
        ${isActive 
          ? 'bg-primary/20 border-accent text-accent' 
          : isSpecial
            ? 'border-[#FFBF00]/50 bg-gradient-to-r from-[#FFBF00]/10 to-transparent hover:from-[#FFBF00]/20'
            : 'border-transparent hover:bg-primary/10 hover:text-highlight'
        }
      `}
      style={isSpecial ? {
        boxShadow: '0 0 20px rgba(255,191,0,0.1), inset 0 0 20px rgba(255,191,0,0.05)'
      } : {}}
    >
      {isSpecial && !isMobile && (
        <>
          {/* Broadcasting Signal Animation */}
          <span className="absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center z-20">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFBF00] opacity-60 animate-ping" style={{ animationDuration: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFBF00]" style={{ boxShadow: '0 0 10px #FFBF00, 0 0 20px #FFBF00' }}></span>
          </span>
          
          {/* Wave effect borders */}
          <span className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
            <span className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#FFBF00] to-transparent opacity-60" style={{ animation: 'wave 2s ease-in-out infinite' }}></span>
            <span className="absolute bottom-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#FFBF00] to-transparent opacity-60" style={{ animation: 'wave 2s ease-in-out infinite 1s' }}></span>
          </span>
          
          {/* Pulsing glow */}
          <span className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 30px rgba(255,191,0,0.3), 0 0 60px rgba(255,191,0,0.1)' }}></span>
        </>
      )}
      
      <span className={`
        ${isActive ? 'text-accent' : isSpecial ? 'text-[#FFBF00]' : 'text-text-secondary group-hover:text-highlight'}
        transition-colors duration-300
      `}>
        {item.icon}
      </span>
      <div className={`
        ${isMobile ? 'text-[10px] leading-tight text-center' : 'text-left'}
      `}>
        <span className={`
          font-mono font-medium block
          ${isActive ? 'text-accent' : isSpecial ? 'text-[#FFBF00] font-bold' : 'text-text-primary'}
          group-hover:text-highlight transition-colors duration-300
        `}>
          {item.label}
        </span>
        {!isMobile && (
          <span className="text-xs text-text-muted font-mono">
            {item.description}
          </span>
        )}
      </div>
      
      {/* Active indicator line for desktop */}
      {!isMobile && isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Special indicator for WUKR Wire */}
      {!isMobile && isSpecial && (
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#FFBF00] rounded-full"
          style={{ boxShadow: '0 0 10px #FFBF00' }}
        />
      )}
      
      {/* Hover glow effect */}
      <div className={`
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-primary/10 to-transparent
        transition-opacity duration-300 pointer-events-none
      `} />
    </Link>
  );
};

const BlueprintShell: React.FC<BlueprintShellProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const mobileMenuVariants = {
    closed: { 
      y: '100%',
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: { 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/30">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={sidebarVariants}
          className="fixed left-0 top-0 h-screen w-72 
                     bg-background/95 backdrop-blur-sm 
                     border-r border-primary/30
                     flex flex-col z-50
                     shadow-[0_0_30px_rgba(26,58,95,0.1)]"
        >
          {/* Logo Section */}
          <div className="p-6 border-b border-primary/30">
            <Link href="/" className="group block">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center
                                border border-primary/50 group-hover:border-accent/50 transition-colors duration-300">
                    <Hexagon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-accent/20 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 blur-md" />
                </div>
                <div>
                  <h1 className="font-mono font-bold text-lg text-text-primary leading-none">
                    COGNITIVE
                  </h1>
                  <h2 className="font-mono text-xs text-text-muted tracking-widest mt-1">
                    ARCHITECT
                  </h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="mb-4 px-4">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Navigation
              </span>
            </div>
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                item={item} 
                isActive={pathname === item.href}
              />
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-primary/30">
            <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono text-accent">
                  SYSTEM ACTIVE
                </span>
              </div>
              <p className="text-xs text-text-muted font-mono">
                7-Collection Engine v2.4.1
              </p>
            </div>
          </div>
        </motion.aside>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-50 
                     w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm
                     flex items-center justify-center
                     border border-primary/50
                     shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-text-primary" />
          ) : (
            <Menu className="w-5 h-5 text-text-primary" />
          )}
        </motion.button>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" />
            <nav className="absolute inset-x-0 bottom-20 top-20 p-4">
              <div className="grid grid-cols-2 gap-3 h-full">
                {navItems.map((item) => (
                  <div key={item.href} className="h-32">
                    <NavLink 
                      item={item} 
                      isActive={pathname === item.href}
                      isMobile
                      onClick={() => setIsMobileMenuOpen(false)}
                    />
                  </div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-30
                     bg-background/95 backdrop-blur-xl
                     border-t border-primary/30
                     px-2 py-2
                     safe-area-pb"
        >
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                isMobile
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        </motion.nav>
      )}

      {/* Main Content */}
      <main className={`
        ${!isMobile ? 'lg:ml-72' : 'pb-24'}
        min-h-screen
      `}>
        <div className="relative">
          {/* Grid overlay */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]
                        bg-[linear-gradient(rgba(255,191,0,1)_1px,transparent_1px),
                        linear-gradient(90deg,rgba(255,191,0,1)_1px,transparent_1px)]
                        bg-[size:50px_50px]" />
          
          {/* Content wrapper */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlueprintShell;
