import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [plugin(function({addUtilities}) {
    return addUtilities({
      '.web-container': {
        margin: 'auto',
        maxWidth: '1200px'
      }
    })
  })],
}

