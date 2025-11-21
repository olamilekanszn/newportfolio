/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          primary: '#38bdf8',
          secondary: '#ec4899',
        },
      },
      boxShadow: {
        glow: '0 20px 45px -15px rgba(56, 189, 248, 0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

