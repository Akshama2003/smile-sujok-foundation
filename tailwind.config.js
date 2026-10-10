/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#10241a',
        forest: { DEFAULT: '#385624', dark: '#223617' },
        leaf: '#5b8c3a',
        sage: { 50: '#f4f8f1', 100: '#e7f0e0', 200: '#cfe0c3' },
        gold: { DEFAULT: '#c68a12', soft: '#f6e7c1' },
        paper: '#fcfdfa',
      },
    },
  },
  plugins: [],
};
