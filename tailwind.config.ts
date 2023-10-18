import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				lochmara: {
					"50": "#f0f9fe",
					"100": "#dcf1fd",
					"200": "#c2e8fb",
					"300": "#98daf8",
					"400": "#67c5f3",
					"500": "#43aaee",
					"600": "#2d8fe3",
					"700": "#2578d0",
					"800": "#2461a9",
					"900": "#235285",
					"950": "#1a3251"
				}
			}
		}
	},
	plugins: []
};
export default config;
