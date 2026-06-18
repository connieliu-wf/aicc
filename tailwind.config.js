/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        textShimmer: {
          '0%, 100%': { color: '#CCCCCC' },
          '50%': { color: '#666666' }
        }
      },
      animation: {
        'textShimmer': 'textShimmer 2s ease-in-out infinite'
      },
      borderRadius: {
        'input': '4px',
        'xs': '0.125rem',
        DEFAULT: '0.625rem',
      },
      boxShadow: {
        'input': 'var(--shadow-input)',
        'menu': 'var(--shadow-menu)',
        'menu-elevated': 'var(--shadow-menu-elevated)',
      },
      fontSize: {
        'xs': '0.67rem',
        'sm': '0.72rem',
        'md': '0.8125rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '5xl': '3rem',
        '7xl': '4.5rem',
        'input': '0.72rem',
        'body': '0.72rem',  // 11.5px
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'input': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'input': '-0.01em',
        'widest': '0.1em',
        'body': '-0.01em',  // -1%
      },
      height: {
        'input': '24px',
      },
      opacity: {
        'input-disabled': '0.4',
      },
      spacing: {
        DEFAULT: '0.25rem',
      },
      lineHeight: {
        'xs': 'calc(1 / 0.75)',
        'sm': 'calc(1.25 / 0.875)',
        'lg': 'calc(1.75 / 1.125)',
        'xl': 'calc(1.75 / 1.25)',
        '2xl': 'calc(2 / 1.5)',
        '3xl': 'calc(2.25 / 1.875)',
        '5xl': '1',
        '7xl': '1',
        'body': '13px',  // 13px line height
      },
      fontWeight: {
        'normal': '300',
        'medium': '500',
        'semibold': '600', 
        'bold': '700',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
} 