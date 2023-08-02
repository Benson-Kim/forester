/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			"primary-white": "#fff",
			"secondary-white": "#e5e5e5",
			"primary-green": "#033f09",
			"secodary-green": "#40664f",
			"primary-black": "#09000d",
			"secondary-black": "#303030",
			orange: "#ff980e",
		},
		screens: {
			android: "576px",
			// => @media (min-width: 576px) { ... }

			tablet: "768px",
			// => @media (min-width: 768px) { ... }

			laptop: "992px",
			// => @media (min-width: 992px) { ... }

			desktop: "1200px",
			// => @media (min-width: 1200px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
