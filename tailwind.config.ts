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
        // Blueprint Design System
        blueprint: {
          primary: '#0066FF',
          secondary: '#1A1A2E',
          accent: '#FFD700',
          dark: '#0A0F1C',
          light: '#E8F4FD',
          grid: 'rgba(0, 102, 255, 0.08)',
          line: 'rgba(0, 102, 255, 0.25)',
          dim: 'rgba(0, 102, 255, 0.5)',
        },
        background: '#0A0F1C',
        surface: '#0D1421',
        primary: '#0066FF',
        accent: '#FFD700',
        muted: '#1A1A2E',
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(to right, rgba(0, 102, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 102, 255, 0.08) 1px, transparent 1px)
        `,
        'blueprint-grid-dense': `
          linear-gradient(to right, rgba(0, 102, 255, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 102, 255, 0.15) 1px, transparent 1px)
        `,
        'wireframe': `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 102, 255, 0.03) 2px,
            rgba(0, 102, 255, 0.03) 4px
          )
        `,
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw': 'draw 2s ease-out forwards',
        'scan': 'scan 3s linear infinite',
        'pulse-blueprint': 'pulse-blueprint 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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
        'pulse-blueprint': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(0, 102, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 20px rgba(0, 102, 255, 0.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
