/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		fontFamily: {
			sans: ["Inter"],
		},
		extend: {
			colors: {
			},
			backgroundImage: {
				galaxy: "url('/background_galaxy.png')",
				'nlw-gradient': 'linear-gradient(91.73deg, #9572FC -5.08%, #43E7AD 49.4%, #E1D55D 102.77%)',
				'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
			},
		},
	},
	plugins: [],
}
