/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../public/assets/images/image6.jpg')",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			colors: {
				customLime: "#1e824c",
				customGreen: "#39ff14",
				customLight: "#f8f9fa",
				customLightGreen: "#239423",
				"primary-white": "#fff",
				"secondary-white": "#d5e6dc",
				"primary-green": "#154406",
				"secondary-green": "#217541",
				"primary-black": "#222",
				"secondary-black": "#212529",
				"tertiary-black": "#1a1a1a",
			},
			screens: {
				android: "576px",
				tablet: "768px",
				laptop: "992px",
				desktop: "1200px",
			},
		},
	},
	plugins: [],
};
