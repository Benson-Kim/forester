/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-white": "#fff",
				"secondary-white": "#d5e6dc",
				"primary-green": "#154406",
				"secondary-green": "#217541",
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
		},
	},
	plugins: [],
};
