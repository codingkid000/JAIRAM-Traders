/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ee',
          100: '#e3ecd6',
          200: '#c8d9ae',
          300: '#a6bf7d',
          400: '#84a352',
          500: '#66873a',
          600: '#4f6b2c',
          700: '#3e5425',
          800: '#344522',
          900: '#2c3a20',
          950: '#161f0e',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf6ea',
          200: '#f4ecd0',
          300: '#ebdda9',
          400: '#dfc777',
          500: '#d4b04f',
        },
        earth: {
          400: '#a87c4f',
          500: '#8a5f3b',
          600: '#6f4a2c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(60, 70, 35, 0.18)',
        card: '0 12px 40px -12px rgba(60, 70, 35, 0.22)',
      },
    },
  },
  plugins: [],
};
