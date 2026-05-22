module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1DB786',      // Turquoise
        'secondary': '#FF6B5A',    // Corail
        'accent': '#4FD1C5',       // Vert clair
        'light-green': '#C6F6D5',
        'light-gray': '#F0F9FF',
        'dark': '#1F2937'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
