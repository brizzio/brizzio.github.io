module.exports = {
  content: [
    "./*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_includes/**/*.{html,md}",
    "./_posts/**/*.{html,md}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#09111c",
        "ink-deep": "#07101a",
        sand: "#f2d7a0",
        coral: "#f5755e",
        "coral-soft": "#ff8c76"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Newsreader", "serif"]
      }
    }
  },
  plugins: []
};

