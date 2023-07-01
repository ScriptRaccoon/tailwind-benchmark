/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.html"],
	theme: {
		extend: {
			fontSize: {
				"4xl": "2.25rem",
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"8xl": "3.25rem",
			},
		},

		fontFamily: {
			sans: ["Arial, Helvetica, sans-serif"],
		},
		colors: {
			dark: "#222",
			inverted: "#fff",
			gray: "#555",
			light: "hsl(249, 42%, 92%)",
			primary: "hsl(249, 42%, 36%)",
			cta: "rgb(229, 90, 40)",
			white: "#fff",
		},
	},
	plugins: [],
};
