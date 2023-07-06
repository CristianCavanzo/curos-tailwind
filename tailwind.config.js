/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				sanFrancisco:
					'linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 0%) 50%, hsl(0deg 0% 0% / 50%) 100%), url(/img/sanFrancisco.jpg)',
				sanFranciscoDesktop: "url('/img/sanFranciscoDesktop.jpg')",
				yosemite: "url('/img/yosemite.jpg')",
				LA: "linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 0%) 50%, hsl(0deg 0% 0% / 50%) 100%), url('/img/LA.jpg')",
				seattle: "url('/img/seattle.jpg')",
				new_york: "url('/img/new_york.jpg')",
				norway: "url('/img/norway.jpg')",
				sydney: "url('/img/sydney.jpg')",
				miami:
					"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 0%) 50%, hsl(0deg 0% 0% / 50%) 100%), url('/img/miami.jpg')",
				switzerland: "url('/img/switzerland.jpg')",
				bali: "linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 0%) 50%, hsl(0deg 0% 0% / 50%) 100%), url('/img/bali.jpg')",
				norway: "url('/img/norway.jpg')",
				chicago:
					"linear-gradient(0deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 0%) 50%, hsl(0deg 0% 0% / 50%) 100%), url('/img/chicago.jpg')",
				europe: "url('/img/europe.jpg')",
				iceland: "url('/img/iceland.jpg')",
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				principal: '#CC2D4A',
				secondary: '#8FA206',
				tertiary: '#61AEC9',
			}),
			textColor: {
				principal: '#CC2D4A',
				secondary: '#8FA206',
				tertiary: '#61AEC9',
			},
			ringColor: {
				primary: '#CC2D4A',
				secondary: '#8FA206',
				tertiary: '#61AEC9',
			},
			fontFamily: {
				Montserrat: ['var(--font-montserrat)', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
