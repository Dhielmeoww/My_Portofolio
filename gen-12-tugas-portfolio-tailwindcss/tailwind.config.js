/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      rotate: {
        '270' : '270deg',
      },
      backgroundImage: {
        'montain': "url('https://images4.alphacoders.com/117/thumbbig-1179836.webp')",
        'city' : "url('https://c4.wallpaperflare.com/wallpaper/855/698/460/science-fiction-cityscape-futuristic-star-wars-wallpaper-preview.jpg')",
        'rose-dragon': "url('https://c4.wallpaperflare.com/wallpaper/712/253/156/anime-yu-gi-oh-5d-s-dragon-izayoi-aki-wallpaper-preview.jpg')",
      }
    },
  },
  plugins: [],
}
