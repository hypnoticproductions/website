import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blueprint Architecture Design System
        blueprint: {
          dark: '#080808',
          charcoal: '#0D0D0D',
          primary: '#1A3A5F',
          secondary: '#2A4A6F',
          accent: '#FFBF00',
          cyan: '#00D4FF',
          cyanDim: 'rgba(0, 212, 255, 0.3)',
          amberDim: 'rgba(255, 191, 0, 0.3)',
          grid: 'rgba(26, 58, 95, 0.15)',
          gridDense: 'rgba(26, 58, 95, 0.25)',
          line: 'rgba(26, 58, 95, 0.4)',
        },
        background: '#080808',
        surface: '#0D0D0D',
        primary: '#1A3A5F',
        accent: '#FFBF00',
        cyan: '#00D4FF',
        text: {
          primary: '#E5E5E5',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(to right, rgba(26, 58, 95, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(26, 58, 95, 0.15) 1px, transparent 1px)
        `,
        'blueprint-grid-dense': `
          linear-gradient(to right, rgba(26, 58, 95, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(26, 58, 95, 0.25) 1px, transparent 1px)
        `,
        'wireframe': `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(26, 58, 95, 0.05) 2px,
            rgba(26, 58, 95, 0.05) 4px
          )
        `,
        'radial-glow': `
          radial-gradient(
            circle at center,
            rgba(0, 212, 255, 0.15) 0%,
            transparent 70%
          )
        `,
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw': 'draw 2s ease-out forwards',
        'scan': 'scan 3s linear infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s infinite',
      },
      keyframes: {
        draw: {
          '0%': { strokeDasharray: '1000', strokeDashoffset: '1000' },
          '100%': { strokeDasharray: '1000', strokeDashoffset: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 2px)' },
          '94%': { transform: 'translate(2px, -2px)' },
          '96%': { transform: 'translate(-2px, -2px)' },
          '98%': { transform: 'translate(2px, 2px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
