/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
				white: '#fcfcfc',
				black: '#000000',
				green: '#2ED00D',
				yellow: '#F5B005',
        grey: '#eeeeee',
				brandColorMain: '#fc696a',
        brandColorSecond: '#5b6078',
			},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.675rem',
			},
			fontFamily: {
				sans: [ 'Montserrat' ],
			},
			zIndex: {
				1: '1',
				5: '5',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				1000: '1000',
				1500: '1500',
			},
    },
  },
  plugins: [],
};
