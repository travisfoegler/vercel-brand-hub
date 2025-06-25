import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        // Background colors
        'bg-1': 'var(--geist-background)',
        'bg-2': 'var(--geist-background-2)',
        
        // Gray scale (10 steps)
        gray: {
          1: 'var(--geist-gray-1)',
          2: 'var(--geist-gray-2)',
          3: 'var(--geist-gray-3)',
          4: 'var(--geist-gray-4)',
          5: 'var(--geist-gray-5)',
          6: 'var(--geist-gray-6)',
          7: 'var(--geist-gray-7)',
          8: 'var(--geist-gray-8)',
          9: 'var(--geist-gray-9)',
          10: 'var(--geist-gray-10)',
        },
        
        // Gray alpha (10 steps)
        'gray-alpha': {
          1: 'var(--geist-gray-alpha-1)',
          2: 'var(--geist-gray-alpha-2)',
          3: 'var(--geist-gray-alpha-3)', 
          4: 'var(--geist-gray-alpha-4)',
          5: 'var(--geist-gray-alpha-5)',
          6: 'var(--geist-gray-alpha-6)',
          7: 'var(--geist-gray-alpha-7)',
          8: 'var(--geist-gray-alpha-8)',
          9: 'var(--geist-gray-alpha-9)',
          10: 'var(--geist-gray-alpha-10)',
        },
        
        // Accent colors (10 steps each)
        blue: {
          1: 'var(--geist-blue-1)',
          2: 'var(--geist-blue-2)',
          3: 'var(--geist-blue-3)',
          4: 'var(--geist-blue-4)',
          5: 'var(--geist-blue-5)',
          6: 'var(--geist-blue-6)',
          7: 'var(--geist-blue-7)',
          8: 'var(--geist-blue-8)',
          9: 'var(--geist-blue-9)',
          10: 'var(--geist-blue-10)',
        },
        
        red: {
          1: 'var(--geist-red-1)',
          2: 'var(--geist-red-2)',
          3: 'var(--geist-red-3)',
          4: 'var(--geist-red-4)',
          5: 'var(--geist-red-5)',
          6: 'var(--geist-red-6)',
          7: 'var(--geist-red-7)',
          8: 'var(--geist-red-8)',
          9: 'var(--geist-red-9)',
          10: 'var(--geist-red-10)',
        },
        
        amber: {
          1: 'var(--geist-amber-1)',
          2: 'var(--geist-amber-2)',
          3: 'var(--geist-amber-3)',
          4: 'var(--geist-amber-4)',
          5: 'var(--geist-amber-5)',
          6: 'var(--geist-amber-6)',
          7: 'var(--geist-amber-7)',
          8: 'var(--geist-amber-8)',
          9: 'var(--geist-amber-9)',
          10: 'var(--geist-amber-10)',
        },
        
        green: {
          1: 'var(--geist-green-1)',
          2: 'var(--geist-green-2)',
          3: 'var(--geist-green-3)',
          4: 'var(--geist-green-4)',
          5: 'var(--geist-green-5)',
          6: 'var(--geist-green-6)',
          7: 'var(--geist-green-7)',
          8: 'var(--geist-green-8)',
          9: 'var(--geist-green-9)',
          10: 'var(--geist-green-10)',
        },
        
        teal: {
          1: 'var(--geist-teal-1)',
          2: 'var(--geist-teal-2)',
          3: 'var(--geist-teal-3)',
          4: 'var(--geist-teal-4)',
          5: 'var(--geist-teal-5)',
          6: 'var(--geist-teal-6)',
          7: 'var(--geist-teal-7)',
          8: 'var(--geist-teal-8)',
          9: 'var(--geist-teal-9)',
          10: 'var(--geist-teal-10)',
        },
        
        purple: {
          1: 'var(--geist-purple-1)',
          2: 'var(--geist-purple-2)',
          3: 'var(--geist-purple-3)',
          4: 'var(--geist-purple-4)',
          5: 'var(--geist-purple-5)',
          6: 'var(--geist-purple-6)',
          7: 'var(--geist-purple-7)',
          8: 'var(--geist-purple-8)',
          9: 'var(--geist-purple-9)',
          10: 'var(--geist-purple-10)',
        },
        
        pink: {
          1: 'var(--geist-pink-1)',
          2: 'var(--geist-pink-2)',
          3: 'var(--geist-pink-3)',
          4: 'var(--geist-pink-4)',
          5: 'var(--geist-pink-5)',
          6: 'var(--geist-pink-6)',
          7: 'var(--geist-pink-7)',
          8: 'var(--geist-pink-8)',
          9: 'var(--geist-pink-9)',
          10: 'var(--geist-pink-10)',
        },
      },
      
      fontSize: {
        // Heading scales
        'heading-72': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-64': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-56': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-48': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-40': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-32': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-24': ['1.5rem', { lineHeight: '1.33', fontWeight: '600' }],
        'heading-20': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-16': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'heading-14': ['0.875rem', { lineHeight: '1.57', fontWeight: '600' }],
        
        // Button scales
        'button-16': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'button-14': ['0.875rem', { lineHeight: '1.57', fontWeight: '500' }],
        'button-12': ['0.75rem', { lineHeight: '1.67', fontWeight: '500' }],
        
        // Label scales (single line, ample line-height)
        'label-20': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-18': ['1.125rem', { lineHeight: '1.67', fontWeight: '400' }],
        'label-16': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'label-14': ['0.875rem', { lineHeight: '1.86', fontWeight: '400' }],
        'label-14-mono': ['0.875rem', { lineHeight: '1.86', fontWeight: '400', fontFamily: 'var(--font-geist-mono)' }],
        'label-13': ['0.8125rem', { lineHeight: '1.85', fontWeight: '400' }],
        'label-13-mono': ['0.8125rem', { lineHeight: '1.85', fontWeight: '400', fontFamily: 'var(--font-geist-mono)' }],
        'label-12': ['0.75rem', { lineHeight: '2', fontWeight: '400' }],
        'label-12-mono': ['0.75rem', { lineHeight: '2', fontWeight: '400', fontFamily: 'var(--font-geist-mono)' }],
        
        // Copy scales (multi-line, higher line-height)
        'copy-24': ['1.5rem', { lineHeight: '1.67', fontWeight: '400' }],
        'copy-20': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'copy-18': ['1.125rem', { lineHeight: '1.78', fontWeight: '400' }],
        'copy-16': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'copy-14': ['0.875rem', { lineHeight: '1.71', fontWeight: '400' }],
        'copy-13': ['0.8125rem', { lineHeight: '1.69', fontWeight: '400' }],
        'copy-13-mono': ['0.8125rem', { lineHeight: '1.69', fontWeight: '400', fontFamily: 'var(--font-geist-mono)' }],
      },
      
      borderRadius: {
        'geist-sm': '6px',
        'geist-md': '12px',
        'geist-lg': '16px',
      },
      
      boxShadow: {
        // Material shadows
        'material-base': '0 0 0 1px var(--geist-gray-alpha-4)',
        'material-small': '0 0 0 1px var(--geist-gray-alpha-4), 0 1px 2px var(--geist-gray-alpha-2)',
        'material-medium': '0 0 0 1px var(--geist-gray-alpha-4), 0 2px 4px var(--geist-gray-alpha-3), 0 4px 8px var(--geist-gray-alpha-2)',
        'material-large': '0 0 0 1px var(--geist-gray-alpha-4), 0 4px 8px var(--geist-gray-alpha-3), 0 8px 16px var(--geist-gray-alpha-2)',
        'material-tooltip': '0 0 0 1px var(--geist-gray-alpha-3), 0 1px 2px var(--geist-gray-alpha-1)',
        'material-menu': '0 0 0 1px var(--geist-gray-alpha-4), 0 4px 12px var(--geist-gray-alpha-3)',
        'material-modal': '0 0 0 1px var(--geist-gray-alpha-4), 0 8px 24px var(--geist-gray-alpha-4)',
        'material-fullscreen': '0 0 0 1px var(--geist-gray-alpha-4), 0 12px 32px var(--geist-gray-alpha-5)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'scale-in': 'scaleIn 0.15s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        // Material utilities
        '.material-base': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4)',
          borderRadius: '6px',
          background: 'var(--geist-background)',
        },
        '.material-small': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 1px 2px var(--geist-gray-alpha-2)',
          borderRadius: '6px',
          background: 'var(--geist-background)',
        },
        '.material-medium': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 2px 4px var(--geist-gray-alpha-3), 0 4px 8px var(--geist-gray-alpha-2)',
          borderRadius: '12px',
          background: 'var(--geist-background)',
        },
        '.material-large': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 4px 8px var(--geist-gray-alpha-3), 0 8px 16px var(--geist-gray-alpha-2)',
          borderRadius: '12px',
          background: 'var(--geist-background)',
        },
        '.material-tooltip': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-3), 0 1px 2px var(--geist-gray-alpha-1)',
          borderRadius: '6px',
          background: 'var(--geist-background)',
        },
        '.material-menu': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 4px 12px var(--geist-gray-alpha-3)',
          borderRadius: '12px',
          background: 'var(--geist-background)',
        },
        '.material-modal': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 8px 24px var(--geist-gray-alpha-4)',
          borderRadius: '12px',
          background: 'var(--geist-background)',
        },
        '.material-fullscreen': {
          boxShadow: '0 0 0 1px var(--geist-gray-alpha-4), 0 12px 32px var(--geist-gray-alpha-5)',
          borderRadius: '16px',
          background: 'var(--geist-background)',
        },
      })
    },
  ],
}

export default config 