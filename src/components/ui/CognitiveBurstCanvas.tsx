'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CognitiveBurstCanvasProps {
  className?: string;
  isActive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  type: 'hexagon' | 'triangle' | 'line' | 'diamond';
  generation: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  splitCount: number;
}

export default function CognitiveBurstCanvas({ className = '', isActive = true }: CognitiveBurstCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const lastEruptionRef = useRef<number>(0);
  
  const COLORS = {
    primary: '#0066FF',
    accent: '#FFD700',
    white: 'rgba(255, 255, 255, 0.8)',
  };

  const createParticle = useCallback((x: number, y: number, generation: number = 0, type?: Particle['type']): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 4 + 2) * (1 - generation * 0.2);
    
    const particleTypes: Particle['type'][] = ['hexagon', 'triangle', 'line', 'diamond'];
    const selectedType = type || particleTypes[Math.floor(Math.random() * particleTypes.length)];
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 2 - generation,
      life: 1,
      maxLife: 1,
      type: selectedType,
      generation,
      color: Math.random() > 0.7 ? COLORS.accent : (Math.random() > 0.5 ? COLORS.primary : COLORS.white),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      splitCount: 0,
    };
  }, []);

  const drawHexagon = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const px = Math.cos(angle) * size;
      const py = Math.sin(angle) * size;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }, []);

  const drawTriangle = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
      const px = Math.cos(angle) * size;
      const py = Math.sin(angle) * size;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.restore();
  }, []);

  const drawDiamond = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation + Math.PI / 4);
    ctx.beginPath();
    ctx.rect(-size / 2, -size * 1.5 / 2, size, size * 1.5);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }, []);

  const drawLine = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(-size, 0);
    ctx.lineTo(size, 0);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }, []);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    const alpha = particle.life;
    ctx.globalAlpha = alpha;
    
    switch (particle.type) {
      case 'hexagon':
        drawHexagon(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.color);
        break;
      case 'triangle':
        drawTriangle(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.color);
        break;
      case 'diamond':
        drawDiamond(ctx, particle.x, particle.y, particle.size, particle.rotation, particle.color);
        break;
      case 'line':
        drawLine(ctx, particle.x, particle.y, particle.size * 2, particle.rotation, particle.color);
        break;
    }
    ctx.globalAlpha = 1;
  }, [drawHexagon, drawTriangle, drawDiamond, drawLine]);

  const erupt = useCallback((canvas: HTMLCanvasElement, count: number, centerX?: number, centerY?: number) => {
    const cx = centerX ?? canvas.width / 2;
    const cy = centerY ?? canvas.height / 2;
    
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(cx, cy, 0));
    }
  }, [createParticle]);

  const updateParticles = useCallback((canvas: HTMLCanvasElement, timestamp: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear with trail effect
    ctx.fillStyle = 'rgba(10, 15, 28, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Trigger periodic eruptions
    if (timestamp - lastEruptionRef.current > 3000) {
      erupt(canvas, 8);
      lastEruptionRef.current = timestamp;
    }

    // Update and draw particles
    const particles = particlesRef.current;
    const toRemove: number[] = [];

    particles.forEach((particle, index) => {
      // Apply physics
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.rotation += particle.rotationSpeed;
      particle.life -= 0.003;

      // Ricochet off walls
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Split logic - branch into smaller particles
      if (particle.generation < 2 && particle.splitCount < 3 && Math.random() < 0.008) {
        const newParticle = createParticle(particle.x, particle.y, particle.generation + 1);
        newParticle.vx = particle.vx + (Math.random() - 0.5) * 2;
        newParticle.vy = particle.vy + (Math.random() - 0.5) * 2;
        particle.splitCount++;
        particlesRef.current.push(newParticle);
      }

      // Draw particle
      drawParticle(ctx, particle);

      // Remove dead particles
      if (particle.life <= 0 || particle.size < 0.5) {
        toRemove.push(index);
      }
    });

    // Remove dead particles (in reverse order to maintain indices)
    toRemove.reverse().forEach(index => {
      particles.splice(index, 1);
    });

    // Draw connections between nearby particles (geometric patterns)
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Color based on distance
          const alpha = (1 - dist / 80) * 0.3;
          ctx.strokeStyle = p1.color === p2.color ? p1.color : 'rgba(0, 102, 255, 0.5)';
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    // Limit particle count for performance
    if (particles.length > 300) {
      particlesRef.current = particles.slice(-300);
    }
  }, [createParticle, drawParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial eruption
    setTimeout(() => {
      erupt(canvas, 30);
    }, 100);

    // Animation loop
    let running = true;
    const animate = (timestamp: number) => {
      if (!running) return;
      updateParticles(canvas, timestamp);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive, erupt, updateParticles]);

  // Expose trigger function for click interactions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      erupt(canvas, 15, x, y);
    };

    canvas.addEventListener('click', handleClick);
    return () => canvas.removeEventListener('click', handleClick);
  }, [erupt]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}
