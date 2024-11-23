/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'san-serif'],
        general: ['general', 'san-serif'],
        'circular-web': ['circular-web', 'san-serif'],
        'robert-medium': ['robert-medium', 'san-serif'],
        'robert-regular': ['robert-regular', 'san-serif'],
      }
    },
  },
  plugins: [],
}