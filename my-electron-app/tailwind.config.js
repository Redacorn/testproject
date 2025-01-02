/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}", // Svelte 파일도 포함
    "./public/index.html"            // HTML 파일 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
