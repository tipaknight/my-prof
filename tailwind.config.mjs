/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '480px',
			// => @media (min-width: 480px) { ... }
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			'tb': '960px',
			// => @media (min-width: 960px) { ... }
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',

		},

		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [{
			light: {
				...require("daisyui/src/theming/themes")["light"],
				"primary": "#0099cc",
				"secondary": "#446f94",
				"neutral-content": "#0a4761",
			},
		}, "night"],
	},

};
