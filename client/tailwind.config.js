/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'slate-deepdark': '#393939',
        'slate-lightdark': '#333333',
        'slate-lightgrey': '#D1D1D1',
        'slate-lightwhite': '#DCDCDC',
        'slate-buttongrey': '#929292',
        'accent-blue': '#3586D1',
        'accent-lightblue': '#f7fbff',
        'kakao-bg': '#FEE500',
        'fb-bg': '#4267b2',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
