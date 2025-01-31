import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			maxWidth: {
				maxContent: "1260px",
				maxContentTab: "650px"
			},


			fontFamily: {
				custom: "var(--font-family)", // Use dynamic font
			},
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
				tertiary: "var(--tertiary-color)",
			},
		},

	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
