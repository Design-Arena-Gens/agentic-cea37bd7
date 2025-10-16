/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
        lato: ['var(--font-lato)'],
        'open-sans': ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
}
