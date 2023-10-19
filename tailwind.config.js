/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      width: {
        "menu-left-width": "var(--menuLeftWidth)",
        "menu-right-width": "var(--menuRightWidth)"
      }
    },
  },
  plugins: [
  ],
}

