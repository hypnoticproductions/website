'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
  type: 'cognition' | 'logic' | 'memory' | 'input' | 'output';
  label: string;
  connections: number[];
  pulsePhase: number;
  health: number;
  isHovered: boolean;
  isDragging: boolean;
}

interface Spring {
  nodeA: number;
  nodeB: number;
  restLength: number;
  stiffness: number;
  tension: number;
  pulses: Pulse[];
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'spark' | 'ring' | 'fragment';
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
}

const COLORS = {
  background: '#0A0F1C',
  primary: '#0066FF',
  primaryDim: 'rgba(0, 102, 255, 0.3)',
  accent: '#FFD700',
  accentDim: 'rgba(255, 215, 0, 0.3)',
  white: 'rgba(255, 255, 255, 0.9)',
  grid: 'rgba(0, 102, 255, 0.08)',
  cognition: '#0066FF',
  logic: '#00D4FF',
  memory: '#8B5CF6',
  input: '#FFD700',
  output: '#FF6B6B',
};

const NODE_TYPES = [
  { type: 'cognition', label: 'COGNITION', color: COLORS.cognition, mass: 1.2, radius: 18 },
  { type: 'logic', label: 'LOGIC', color: COLORS.logic, mass: 1.0, radius: 15 },
  { type: 'memory', label: 'MEMORY', color: COLORS.memory, mass: 1.5, radius: 20 },
  { type: 'input', label: 'INPUT', color: COLORS.input, mass: 0.8, radius: 12 },
  { type: 'output', label: 'OUTPUT', color: COLORS.output, mass: 0.9, radius: 14 },
] as const;

export default function EnhancedCognitiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const springsRef = useRef<Spring[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, draggedNode: -1 });
  const lastPulseRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const [fps, setFps] = useState(60);
  
  const initNetwork = useCallback((canvas: HTMLCanvasElement) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const nodes: Node[] = [];
    const springs: Spring[] = [];
    
    // Create central hub
    const centralNode: Node = {
      id: 0,
      x: centerX,
      y: centerY,
      vx: 0,
      vy: 0,
      radius: 25,
      mass: 2,
      type: 'cognition',
      label: 'CORE',
      connections: [],
      pulsePhase: 0,
      health: 1,
      isHovered: false,
      isDragging: false,
    };
    nodes.push(centralNode);
    
    // Create surrounding nodes in concentric rings
    const ringCount = 4;
    let nodeId = 1;
    
    for (let ring = 1; ring <= ringCount; ring++) {
      const nodesInRing = ring * 6 + (ring === 1 ? 6 : 0);
      const ringRadius = ring * 100 + 50;
      
      for (let i = 0; i < nodesInRing; i++) {
        const angle = (i / nodesInRing) * Math.PI * 2 + (ring * 0.3);
        const type = NODE_TYPES[Math.floor(Math.random() * NODE_TYPES.length)];
        
        const node: Node = {
          id: nodeId++,
          x: centerX + Math.cos(angle) * ringRadius,
          y: centerY + Math.sin(angle) * ringRadius,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: type.radius * (0.8 + Math.random() * 0.4),
          mass: type.mass,
          type: type.type as Node['type'],
          label: type.label,
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          health: 1,
          isHovered: false,
          isDragging: false,
        };
        nodes.push(node);
        
        // Connect to 2-3 nearest nodes
        const connectionCount = 2 + (ring === 1 ? 1 : 0);
        const distances = nodes
          .filter((n, idx) => idx < nodeId - 1 && n.id !== node.id)
          .map(n => ({ id: n.id, dist: Math.hypot(n.x - node.x, n.y - node.y) }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, connectionCount);
        
        distances.forEach(d => {
          springs.push({
            nodeA: node.id,
            nodeB: d.id,
            restLength: d.dist,
            stiffness: 0.015,
            tension: 0,
            pulses: [],
          });
          node.connections.push(d.id);
          nodes.find(n => n.id === d.id)!.connections.push(node.id);
        });
      }
    }
    
    // Connect all rings back to center
    nodes.slice(1).forEach((node, idx) => {
      if (idx % 3 === 0) {
        springs.push({
          nodeA: node.id,
          nodeB: 0,
          restLength: Math.hypot(node.x - centerX, node.y - centerY),
          stiffness: 0.008,
          tension: 0,
          pulses: [],
        });
      }
    });
    
    nodesRef.current = nodes;
    springsRef.current = springs;
  }, []);
  
  const spawnParticles = useCallback((x: number, y: number, count: number, color: string) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: Math.random() * 4 + 2,
        color,
        type: Math.random() > 0.7 ? 'ring' : (Math.random() > 0.5 ? 'spark' : 'fragment'),
      });
    }
  }, []);
  
  const createShockwave = useCallback((x: number, y: number, strength: number = 1) => {
    shockwavesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 300 * strength,
      strength,
    });
  }, []);
  
  const spawnNode = useCallback((canvas: HTMLCanvasElement) => {
    const nodes = nodesRef.current;
    if (nodes.length >= 80) return;
    
    // Spawn at edge
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const type = NODE_TYPES[Math.floor(Math.random() * NODE_TYPES.length)];
    
    const newNode: Node = {
      id: Math.max(...nodes.map(n => n.id)) + 1,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      vx: -Math.cos(angle) * 3,
      vy: -Math.sin(angle) * 3,
      radius: type.radius * 0.8,
      mass: type.mass * 0.8,
      type: type.type as Node['type'],
      label: type.label,
      connections: [],
      pulsePhase: Math.random() * Math.PI * 2,
      health: 1,
      isHovered: false,
      isDragging: false,
    };
    
    // Connect to nearest node
    let nearestDist = Infinity;
    let nearestId = -1;
    nodes.forEach(node => {
      const dist = Math.hypot(node.x - newNode.x, node.y - newNode.y);
      if (dist < nearestDist && node.id !== newNode.id) {
        nearestDist = dist;
        nearestId = node.id;
      }
    });
    
    if (nearestId >= 0) {
      springsRef.current.push({
        nodeA: newNode.id,
        nodeB: nearestId,
        restLength: nearestDist,
        stiffness: 0.015,
        tension: 0,
        pulses: [],
      });
      newNode.connections.push(nearestId);
      nodes.find(n => n.id === nearestId)!.connections.push(newNode.id);
    }
    
    nodes.push(newNode);
    spawnParticles(newNode.x, newNode.y, 10, COLORS.accent);
  }, [spawnParticles]);
  
  const updatePhysics = useCallback((canvas: HTMLCanvasElement, timestamp: number) => {
    const nodes = nodesRef.current;
    const springs = springsRef.current;
    const mouse = mouseRef.current;
    
    // Apply forces
    springs.forEach(spring => {
      const nodeA = nodes.find(n => n.id === spring.nodeA);
      const nodeB = nodes.find(n => n.id === spring.nodeB);
      if (!nodeA || !nodeB) return;
      
      const dx = nodeB.x - nodeA.x;
      const dy = nodeB.y - nodeA.y;
      const dist = Math.hypot(dx, dy);
      
      // Spring force (Hooke's Law)
      const force = (dist - spring.restLength) * spring.stiffness;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      
      spring.tension = Math.min(1, (dist - spring.restLength) / 100);
      
      if (!nodeA.isDragging) {
        nodeA.vx += fx / nodeA.mass;
        nodeA.vy += fy / nodeA.mass;
      }
      if (!nodeB.isDragging) {
        nodeB.vx -= fx / nodeB.mass;
        nodeB.vy -= fy / nodeB.mass;
      }
    });
    
    // Apply mouse forces
    nodes.forEach(node => {
      if (node.isDragging) {
        node.x = mouse.x;
        node.y = mouse.y;
        node.vx = 0;
        node.vy = 0;
        return;
      }
      
      // Mouse attraction/repulsion
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.hypot(dx, dy);
      
      if (dist < 200 && !node.isHovered) {
        const force = (200 - dist) * 0.001;
        node.vx += (dx / dist) * force;
        node.vy += (dy / dist) * force;
      }
      
      // Apply velocity
      node.vx *= 0.97;
      node.vy *= 0.97;
      node.x += node.vx;
      node.y += node.vy;
      
      // Boundary constraints
      const padding = node.radius * 2;
      if (node.x < padding) { node.x = padding; node.vx *= -0.5; }
      if (node.x > canvas.width - padding) { node.x = canvas.width - padding; node.vx *= -0.5; }
      if (node.y < padding) { node.y = padding; node.vy *= -0.5; }
      if (node.y > canvas.height - padding) { node.y = canvas.height - padding; node.vy *= -0.5; }
      
      // Pulse phase
      node.pulsePhase += 0.02;
      node.isHovered = dist < node.radius + 20;
    });
    
    // Process shockwaves
    shockwavesRef.current = shockwavesRef.current.filter(sw => {
      sw.radius += sw.strength * 15;
      sw.strength *= 0.95;
      
      // Apply shockwave force to nearby nodes
      nodes.forEach(node => {
        const dx = node.x - sw.x;
        const dy = node.y - sw.y;
        const dist = Math.hypot(dx, dy);
        const effectRadius = sw.radius + 50;
        
        if (dist < effectRadius && dist > sw.radius - 50) {
          const force = sw.strength * (1 - dist / effectRadius) * 2;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      });
      
      return sw.radius < sw.maxRadius && sw.strength > 0.1;
    });
    
    // Process particles
    particlesRef.current = particlesRef.current.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.life -= 0.02;
      p.size *= 0.98;
      return p.life > 0 && p.size > 0.5;
    });
    
    // Update pulses
    springs.forEach(spring => {
      spring.pulses = spring.pulses.filter(p => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          const nodeB = nodes.find(n => n.id === spring.nodeB);
          if (nodeB) {
            spawnParticles(nodeB.x, nodeB.y, 3, COLORS.accent);
          }
          return false;
        }
        return true;
      });
    });
    
    // Random pulse spawning
    if (timestamp - lastPulseRef.current > 200 && Math.random() < 0.3) {
      const randomSpring = springs[Math.floor(Math.random() * springs.length)];
      if (randomSpring && randomSpring.pulses.length < 2) {
        randomSpring.pulses.push({
          from: randomSpring.nodeA,
          to: randomSpring.nodeB,
          progress: 0,
          speed: 0.02 + Math.random() * 0.02,
          size: 3 + Math.random() * 3,
        });
        lastPulseRef.current = timestamp;
      }
    }
    
    // Auto-spawn new nodes
    if (timestamp - lastSpawnRef.current > 5000 && nodes.length < 60) {
      spawnNode(canvas);
      lastSpawnRef.current = timestamp;
    }
  }, [spawnNode, spawnParticles]);
  
  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    
    const gridSize = 50;
    const offsetX = (time * 0.02) % gridSize;
    const offsetY = (time * 0.01) % gridSize;
    
    ctx.beginPath();
    for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
  }, []);
  
  const drawNodes = useCallback((ctx: CanvasRenderingContext2D, nodes: Node[]) => {
    nodes.forEach(node => {
      const color = NODE_TYPES.find(t => t.type === node.type)?.color || COLORS.primary;
      const glowIntensity = node.isHovered ? 0.5 : (node.isDragging ? 0.8 : 0.2);
      
      // Glow effect
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2.5);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      ctx.globalAlpha = glowIntensity;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Main shape
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.fillStyle = COLORS.background;
      
      // Hexagon for cognition nodes, circle for others
      if (node.type === 'cognition') {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + node.pulsePhase * 0.1;
          const px = node.x + Math.cos(angle) * node.radius;
          const py = node.y + Math.sin(angle) * node.radius;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.stroke();
      
      // Inner pulse
      const pulseSize = node.radius * (0.3 + Math.sin(node.pulsePhase) * 0.2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Label
      ctx.font = '8px JetBrains Mono';
      ctx.fillStyle = COLORS.white;
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + node.radius + 12);
      
      // Hover ring
      if (node.isHovered || node.isDragging) {
        ctx.strokeStyle = COLORS.accent;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }, []);
  
  const drawSprings = useCallback((ctx: CanvasRenderingContext2D, springs: Spring[], time: number) => {
    springs.forEach(spring => {
      const nodeA = nodesRef.current.find(n => n.id === spring.nodeA);
      const nodeB = nodesRef.current.find(n => n.id === spring.nodeB);
      if (!nodeA || !nodeB) return;
      
      // Main connection line
      const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
      gradient.addColorStop(0, COLORS.primaryDim);
      gradient.addColorStop(0.5, spring.tension > 0.3 ? COLORS.accentDim : COLORS.primaryDim);
      gradient.addColorStop(1, COLORS.primaryDim);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1 + spring.tension * 2;
      ctx.globalAlpha = 0.4 + spring.tension * 0.4;
      ctx.beginPath();
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
      
      // Data pulses
      spring.pulses.forEach(pulse => {
        const fromNode = nodesRef.current.find(n => n.id === pulse.from);
        const toNode = nodesRef.current.find(n => n.id === pulse.to);
        if (!fromNode || !toNode) return;
        
        const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;
        
        // Pulse glow
        const pulseGradient = ctx.createRadialGradient(x, y, 0, x, y, pulse.size * 3);
        pulseGradient.addColorStop(0, COLORS.accent);
        pulseGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = pulseGradient;
        ctx.globalAlpha = (1 - pulse.progress) * 0.8;
        ctx.beginPath();
        ctx.arc(x, y, pulse.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulse core
        ctx.fillStyle = COLORS.white;
        ctx.globalAlpha = (1 - pulse.progress);
        ctx.beginPath();
        ctx.arc(x, y, pulse.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    });
  }, []);
  
  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    particles.forEach(p => {
      ctx.globalAlpha = p.life;
      
      if (p.type === 'ring') {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (2 - p.life), 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
    });
  }, []);
  
  const drawShockwaves = useCallback((ctx: CanvasRenderingContext2D, shockwaves: Shockwave[]) => {
    shockwaves.forEach(sw => {
      const progress = sw.radius / sw.maxRadius;
      ctx.strokeStyle = COLORS.accent;
      ctx.lineWidth = 3 * sw.strength * (1 - progress);
      ctx.globalAlpha = sw.strength * (1 - progress);
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });
  }, []);
  
  const render = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, timestamp: number) => {
    // Clear with slight trail effect
    ctx.fillStyle = 'rgba(10, 15, 28, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw layers
    drawGrid(ctx, canvas, timestamp);
    drawSprings(ctx, springsRef.current, timestamp);
    drawNodes(ctx, nodesRef.current);
    drawParticles(ctx, particlesRef.current);
    drawShockwaves(ctx, shockwavesRef.current);
  }, [drawGrid, drawSprings, drawNodes, drawParticles, drawShockwaves]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let frameCount = 0;
    let lastFpsTime = performance.now();
    
    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Reinitialize if nodes don't exist
      if (nodesRef.current.length === 0) {
        initNetwork(canvas);
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initial setup
    if (nodesRef.current.length === 0) {
      initNetwork(canvas);
    }
    
    // Animation loop
    let running = true;
    const animate = (timestamp: number) => {
      if (!running) return;
      
      updatePhysics(canvas, timestamp);
      render(ctx, canvas, timestamp);
      
      // FPS counter
      frameCount++;
      if (timestamp - lastFpsTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsTime = timestamp;
      }
      
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
  }, [initNetwork, updatePhysics, render]);
  
  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.isDown = true;
    
    // Find nearest node
    let nearestDist = Infinity;
    let nearestId = -1;
    
    nodesRef.current.forEach(node => {
      const dist = Math.hypot(node.x - x, node.y - y);
      if (dist < node.radius + 15 && dist < nearestDist) {
        nearestDist = dist;
        nearestId = node.id;
      }
    });
    
    if (nearestId >= 0) {
      mouseRef.current.draggedNode = nearestId;
      const node = nodesRef.current.find(n => n.id === nearestId);
      if (node) {
        node.isDragging = true;
        spawnParticles(x, y, 15, COLORS.accent);
      }
    } else {
      createShockwave(x, y, 1.5);
      spawnParticles(x, y, 20, COLORS.primary);
    }
  }, [createShockwave, spawnParticles]);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    
    // Update hover states
    nodesRef.current.forEach(node => {
      const dist = Math.hypot(node.x - x, node.y - y);
      node.isHovered = dist < node.radius + 20;
    });
  }, []);
  
  const handleMouseUp = useCallback(() => {
    if (mouseRef.current.draggedNode >= 0) {
      const node = nodesRef.current.find(n => n.id === mouseRef.current.draggedNode);
      if (node) {
        node.isDragging = false;
        // Apply throw velocity
        spawnParticles(node.x, node.y, 8, COLORS.primary);
      }
    }
    mouseRef.current.isDown = false;
    mouseRef.current.draggedNode = -1;
  }, []);
  
  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Massive eruption
    createShockwave(x, y, 3);
    spawnParticles(x, y, 50, COLORS.accent);
    
    // Connect nearby nodes
    const nearbyNodes = nodesRef.current
      .filter(n => Math.hypot(n.x - x, n.y - y) < 200)
      .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y))
      .slice(0, 5);
    
    if (nearbyNodes.length >= 2) {
      for (let i = 0; i < nearbyNodes.length - 1; i++) {
        const exists = springsRef.current.some(
          s => (s.nodeA === nearbyNodes[i].id && s.nodeB === nearbyNodes[i + 1].id) ||
               (s.nodeA === nearbyNodes[i + 1].id && s.nodeB === nearbyNodes[i].id)
        );
        if (!exists) {
          const dist = Math.hypot(
            nearbyNodes[i].x - nearbyNodes[i + 1].x,
            nearbyNodes[i].y - nearbyNodes[i + 1].y
          );
          springsRef.current.push({
            nodeA: nearbyNodes[i].id,
            nodeB: nearbyNodes[i + 1].id,
            restLength: dist,
            stiffness: 0.02,
            tension: 0,
            pulses: [],
          });
          nearbyNodes[i].connections.push(nearbyNodes[i + 1].id);
          nearbyNodes[i + 1].connections.push(nearbyNodes[i].id);
        }
      }
    }
  }, [createShockwave, spawnParticles]);
  
  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        className="w-full h-full cursor-crosshair"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-[#64748B] pointer-events-none">
        <div>DRAG nodes to interact</div>
        <div>CLICK empty space for shockwave</div>
        <div>DOUBLE-CLICK to connect nearby nodes</div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute top-4 right-4 text-xs font-mono text-[#0066FF] pointer-events-none">
        <div>NODES: {nodesRef.current.length}</div>
        <div>CONNECTIONS: {springsRef.current.length}</div>
        <div>FPS: {fps}</div>
      </div>
    </div>
  );
}
