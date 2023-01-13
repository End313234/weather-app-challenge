/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				bluepurple: {
					300: "#585676",
					500: "#1E213A",
					800: "#100E1D",
				},
				yellow: {
					300: "#FFEC65",
				},
				zinc: {
					200: "#E7E7EB",
					500: "#6E707A",
				},
			},
			fontFamily: {
				sans: "Raleway, sans-serif",
				credits: "Montserrat, sans-serif",
			},
		},
	},
	plugins: [],
};
