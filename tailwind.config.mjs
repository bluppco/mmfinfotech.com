/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				clientsBackground: "#222222e6",
				brandGreen: "#3fa205",
				dimWhite: "#eeeeef",
				dimGray: "#6c757d",
				lightGray: "#f7f7f7",
			},
			backgroundImage: {
				"brandBg": 'url("/bg.jpg")',
				"leftLeafBg": 'url("/left-leaf.png")',
				"rightLeafBg": 'url("/right-leaf.png")',
			}

		},
	},
	plugins: [],
}
