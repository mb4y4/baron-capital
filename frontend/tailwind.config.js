/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens from the Baron Capital design spec
        'bc-navy': '#0A2B5E',       // Primary - Dark Blue
        'bc-navy-light': '#123a7a',
        'bc-gold': '#FFD700',       // Secondary - Gold
        'bc-white': '#FFFFFF',
        'bc-grey': '#F5F5F5',       // Light Grey neutral
        'bc-ink': '#101828',        // body text, near-black for contrast/legibility
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}
