// src/page_sections/portfolio_section/constants.js
export const PROJECT_CARDS = [
	{
		id: 'ChatExt',
		title: 'ChatExt',
		description:
			'A chrome extension that enables files to be uploaded into ChatGPT',
		image: '/images/chatext-cover.png',
		alt: 'chatgpt chrome extension',
		backgroundColor: null, // Featured projects might not need background colors
		className: 'featured-project-wrapper',
		url: 'https://chatext.app/',
	},
	{
		id: 'qrgen',
		title: 'QrGen',
		description: 'A website that allows users to generate qr codes',
		image: '/images/qrgen.png',
		alt: 'qrcode generator',
		backgroundColor: '#FFEFDB',
		className: 'project-list-wrapper',
		url: 'https://qrgen.app/',
	},
	{
		id: 'apply-wiser',
		title: 'ApplyWiser',
		description:
			'A platform that uses AI to auto modify resumes to fit job descriptions',
		image: '/images/apply-wiser-logo.png',
		alt: 'YC Directory App',
		backgroundColor: '#FFE7EB',
		className: 'project-list-wrapper',
		url: '',
	},
];
