module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#B700E5",
			
   "secondary": "#FFFFFF",
			
   "accent": "#7cff70",
			
   "neutral": "#eeeeee",
			
   "base-100": "#31204B",
			
   "info": "#1ea937",
			
   "success": "#3FE47E",
			
   "warning": "#F3A916",
			
   "error": "#FA1E22",
			},
		  },
		],
	  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
