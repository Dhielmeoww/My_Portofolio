/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    darkMode: 'class',
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'rose-dragon': "url('https://c4.wallpaperflare.com/wallpaper/338/304/848/yu-gi-oh-deep-eyes-white-dragon-hd-wallpaper-preview.jpg')",
      }
    },
  },
  plugins: [],
}
