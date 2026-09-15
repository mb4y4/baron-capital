/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens from the Baron Capital design spec
        'bc-navy': '#0A2B5E',       // Primary - Dark Blue
        'bc-navy-ink': '#071D42',   // Deeper navy for hover/depth
        'bc-navy-light': '#123a7a',
        'bc-gold': '#FFD700',       // Secondary - Gold (accent only, never body text on white)
        'bc-gold-deep': '#C9A400',  // Muted gold for text/icons on light backgrounds
        'bc-white': '#FFFFFF',
        'bc-grey': '#F5F5F5',       // Light Grey neutral
        'bc-line': '#DDD9CC',       // Hairline divider color (warm grey, not pure black)
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