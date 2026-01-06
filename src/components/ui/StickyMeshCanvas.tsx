'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface StickyMeshCanvasProps {
  className?: string;
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  color: string;
  opacity: number;
  connected: boolean;
  connectionStrength: number;
}

export default function StickyMeshCanvas({ className = '', interactive = true }: StickyMeshCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  
  const COLORS = {
    primary: '#1A3A5F',
    cyan: '#00D4FF',
    accent: '#FFBF00',
    dark: '#080808',
  };

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        baseSize: Math.random() * 3 + 1,
        color: Math.random() > 0.7 ? COLORS.cyan : COLORS.primary,
        opacity: Math.random() * 0.5 + 0.2,
        connected: false,
        connectionStrength: 0,
      });
    }
    
    particlesRef.current = particles;
  }, []);

  const updateParticles = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    
    // Clear with trail effect
    ctx.fillStyle = 'rgba(8, 8, 8, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update particles
    particles.forEach(particle => {
      // Apply velocity
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Mouse interaction
      if (interactive && mouse.isActive) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          particle.vx += (dx / dist) * force * 0.5;
          particle.vy += (dy / dist) * force * 0.5;
          particle.opacity = Math.min(1, particle.opacity + force * 0.3);
          particle.connectionStrength = force;
        } else {
          particle.connectionStrength = Math.max(0, particle.connectionStrength - 0.05);
        }
      }
      
      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      
      // Keep minimum velocity
      const speed = Math.hypot(particle.vx, particle.vy);
      if (speed < 0.2) {
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;
      }
      
      // Boundary wrap
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Update connection state
      particle.connected = particle.connectionStrength > 0.3;
      
      // Draw particle
      const size = particle.baseSize + (particle.connectionStrength * 3);
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      
      // Glow effect for connected particles
      if (particle.connected) {
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, size * 4);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * 0.8;
      } else {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
      }
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    
    // Draw connections
    const connectionDistance = 120;
    const mouseDistance = interactive ? 200 : 0;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);
        
        let opacity = 0;
        
        // Connection between particles
        if (dist < connectionDistance) {
          opacity = (1 - dist / connectionDistance) * 0.3;
          
          // Strengthen if either is connected to mouse
          if (p1.connectionStrength > 0 || p2.connectionStrength > 0) {
            opacity *= 1 + (p1.connectionStrength + p2.connectionStrength) * 2;
          }
        }
        
        // Connection to mouse
        if (interactive && mouse.isActive) {
          const mdx1 = mouse.x - p1.x;
          const mdy1 = mouse.y - p1.y;
          const mdist1 = Math.hypot(mdx1, mdy1);
          
          const mdx2 = mouse.x - p2.x;
          const mdy2 = mouse.y - p2.y;
          const mdist2 = Math.hypot(mdx2, mdy2);
          
          if (mdist1 < mouseDistance && mdist2 < mouseDistance) {
            const mOpacity = (1 - mdist1 / mouseDistance) * (1 - mdist2 / mouseDistance) * 0.4;
            opacity = Math.max(opacity, mOpacity);
          }
        }
        
        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = COLORS.cyan;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Draw mouse connection lines
      if (interactive && mouse.isActive) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 200) {
          const opacity = (1 - dist / 200) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = COLORS.cyan;
          ctx.globalAlpha = opacity * p.connectionStrength;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    
    // Draw mouse influence point
    if (interactive && mouse.isActive) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.8;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
      ctx.strokeStyle = COLORS.cyan;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.globalAlpha = 0.2;
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [interactive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      if (particlesRef.current.length === 0) {
        initParticles(canvas);
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let running = true;
    const animate = () => {
      if (!running) return;
      updateParticles(canvas, ctx);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      running = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [initParticles, updateParticles]);

  // Mouse event handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseEnter = useCallback(() => {
    mouseRef.current.isActive = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isActive = false;
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0,
        width: '100%', 
        height: '100%' 
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
