/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
      'Grey': '#EBEDF0',
      'Grey-Hover': '#F8F9FA',
      'Grey-Light':'#CED4DA',
      'Purple': '#8064A2',
      'Text-Grey': '#939CA3',
      'Text-Blue':'#0096C8',
      'HeroBg': '#F7F5F9',
      'Music-Bg': '#CCC1DA',
        'Footer-Bg': '#F7FDFF',
        'Green': '#77933c',
      'Light-Blue': '#F7FDFF'
      },
      screens: {
        'larger': '1200px',
        'semi-md': '850px',
        'xs': '300px',
        'form': '900px'
      }
    },
  },
  plugins: [],
};
