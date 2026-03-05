/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          light: 'var(--color-gray-light)',
          DEFAULT: 'var(--color-gray)',
          dark: 'var(--color-gray-dark)',
        },
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        dark: 'var(--color-dark)',
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
}