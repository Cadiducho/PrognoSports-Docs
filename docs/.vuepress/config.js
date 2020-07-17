module.exports = {
	title: 'PrognoSports Docs',
	description: 'Documentation about PrognoSports',
	themeConfig: {
		logo: '/logo.png',
		nav: [
			{ text: 'Index', link: '/' },
			{ text: 'API', link: '/api/' },
			{ text: 'PrognoSports', link: 'https://prognosports.com' }
		],
		sidebar: [
			['/', 'PrognoSports'],
			{
				title: 'API',
				collapsable: false,
				children: [ 
					'/api/',
					'/api/public.md',
					'/api/private.md',
					'/api/codes/'
				]
			}
		]
	},
	smoothScroll: true
}