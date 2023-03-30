/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary": "#ff1e00",
      "secondary": "#e8f9fd",
      "accent": "#59ce8f",
      "neutral": "#011B39",
      "base-100": "#FFFFFF",
      "info": "#3BADC9",
      "success": "#1FC77E",
      "warning": "#F9CB66",
      "error": "#EB3351",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
