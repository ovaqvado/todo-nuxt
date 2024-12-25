export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['./assets/style.css'],
	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Montserrat: true,
				},
			},
		],
	],
	plugins: ['./plugins/pinia.js'],
})
