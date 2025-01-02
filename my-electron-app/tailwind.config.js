// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4a90e2',  // SVG에서 추출한 첫 번째 색상
        'custom-purple': '#9013fe' // SVG에서 추출한 두 번째 색상
      },
    },
  },
  plugins: [],
}
