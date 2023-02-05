/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#56ed4e",
          "secondary": "#a2ef8f",
          "accent": "#2fe0d7",
          "neutral": "#24223A",
          "base-100": "#F5F4F6",
          "info": "#A5CFE4",
          "success": "#73DEA8",
          "warning": "#AF9308",
          "error": "#EA3D2A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
