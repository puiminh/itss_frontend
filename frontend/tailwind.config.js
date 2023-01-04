/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|orange|purple|pink|violet|green|yellow|gray)-(700)/
    },
    {
      pattern: /text-(red|green|blue|orange|purple|pink|violet|green|yellow|gray)-(700)/
    }
  ]
}
