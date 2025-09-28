const HERO_TEXT_TITLE_WORDS = [
	{
		text: 'Planning',
		image: '/images/ideas.svg',
	},
	{
		text: 'Analysis',
		image: '/images/designs.svg',
	},
	{
		text: 'Design',
		image: '/images/designs.svg',
	},
	{
		text: 'Implementation',
		image: '/images/concepts.svg',
	},
	{
		text: 'Testing',
		image: '/images/ideas.svg',
	},
	{
		text: 'Integration',
		image: '/images/ideas.svg',
	},
	{
		text: 'Software',
		image: '/images/concepts.svg',
	},
];

const NAVIGATION_LINKS = [
	{
		name: 'Work',
		link: '#work',
	},
	{
		name: 'Experience',
		link: '#experience',
	},
	{
		name: 'Skills',
		link: '#skills',
	},
];

const COUNTER_ITEMS = [
	{ value: 7, suffix: '+', label: 'Years of Experience' },
	{ value: 4, suffix: '+', label: 'Companies' },
	{ value: 60, suffix: '%', label: 'Avg. Performance Increase' },
	{ value: 80, suffix: '%', label: 'Avg. Increase In Code Quality' },
];

const LOGO_ICONS = [
	{
		imgPath: '/images/logos/charity-pixel-logo.png',
		name: 'charity pixel',
	},
	{
		imgPath: '/images/logos/polilense-logo-3.png',
		name: 'polilense',
	},
	{
		imgPath: '/images/logos/webb-globe-logo-2.png',
		name: 'webb globe',
	},
	{
		imgPath: '/images/logos/datamind-logo-2.png',
		name: 'datamind',
	},
	{
		imgPath: '/images/logos/grantme-logo-2.png',
		name: 'grant me',
	},
	{
		imgPath: '/images/logos/honyst-logo-3.png',
		name: 'honyst',
	},
	{
		imgPath: '/images/logos/simple-ui-logo-3.png',
		name: 'simple ui',
	},
	{
		imgPath: '/images/logos/apply-wiser-logo-2.png',
		name: 'apply wiser',
	},
	{
		imgPath: '/images/logos/signalvu-logo-2.png',
		name: 'signalvu',
	},
];

const abilities = [
	{
		imgPath: '/images/seo.png',
		title: 'Quality Focus',
		desc: 'Delivering high-quality results while maintaining attention to every detail.',
	},
	{
		imgPath: '/images/chat.png',
		title: 'Reliable Communication',
		desc: 'Keeping you updated at every step to ensure transparency and clarity.',
	},
	{
		imgPath: '/images/time.png',
		title: 'On-Time Delivery',
		desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
	},
];

const TECH_STACK_IMAGES = [
	{
		name: 'React Developer',
		imgPath: '/images/logos/react.png',
	},
	{
		name: 'Python Developer',
		imgPath: '/images/logos/python.svg',
	},
	{
		name: 'Backend Developer',
		imgPath: '/images/logos/node.png',
	},
	{
		name: 'Interactive Developer',
		imgPath: '/images/logos/three.png',
	},
	{
		name: 'Project Manager',
		imgPath: '/images/logos/git.svg',
	},
];

const TECH_STACK_ICONS = [
	{
		name: 'React Developer',
		modelPath: '/models/react_logo-transformed.glb',
		scale: 1,
		rotation: [0, 0, 0],
	},
	{
		name: 'Python Developer',
		modelPath: '/models/python-transformed.glb',
		scale: 0.8,
		rotation: [0, 0, 0],
	},
	{
		name: 'Backend Developer',
		modelPath: '/models/node-transformed.glb',
		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	{
		name: 'Interactive Developer',
		modelPath: '/models/three.js-transformed.glb',
		scale: 0.05,
		rotation: [0, 0, 0],
	},
	{
		name: 'Project Manager',
		modelPath: '/models/git-svg-transformed.glb',
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
];

const EXPERIENCE_CARDS_DATA = [
	{
		companyName: 'NorthWestern Mutual',
		review:
			'Delivered full-stack wealth management tools using React/Kotlin/Java. Increased code stability, scalability, and reduced technical debt.',
		imgPath: '/images/exp1.png',
		logoPath: '/images/gear.png',
		title: 'Software Engineer',
		date: 'April 2024 - August 2025',
		responsibilities: [
			'Delivered a holistic wealth management tool using React/TypeScript and Java/Kotlin microservices.',
			'Improved client presentations by creating an interactive financial overview and a React/Java-based PDF generator.',
			'Established Jest unit testing, increasing code coverage by over 50% for high code quality.',
		],
	},
	{
		companyName: 'Northwestern Mutual (Apex Systems)',
		review:
			'Led UI/API development using Go, React, and AWS/Kubernetes. Boosted testing coverage from 0% to 80% and reduced downtime by 33%.',
		imgPath: '/images/exp2.png',
		logoPath: '/images/gear.png',
		title: 'Software Engineer',
		date: 'May 2021 - December 2023',
		responsibilities: [
			'Led the development of advanced, accessible, and SEO-optimized UIs using React, Vue.js, and Go.',
			'Headed custom CMS development and fostered cross-team collaboration to elevate content management.',
			'Increased unit testing coverage from 0% to 80%, enhancing code reliability and accelerating deployment.',
		],
	},
	{
		companyName: "Kohl's",
		review:
			'Drove a 20% conversion rate increase leading JavaScript A/B testing. Delivered key features while integrating APIs and ensuring SEO/accessibility.',
		imgPath: '/images/exp3.png',
		logoPath: '/images/gear.png',
		title: 'Frontend Engineer',
		date: 'May 2019 - May 2021',
		responsibilities: [
			'Managed diverse requests, delivering page designs, and integrating proprietary/third-party APIs and vendor SDKs.',
			'Secured vendor contracts by quickly resolving critical UI and data issues.',
			'Provided engineering support for proprietary tooling and debugging, contributing to cost savings.',
		],
	},
	{
		companyName: 'MySureFit',
		review:
			'Optimized e-commerce APIs and built components for WordPress/Shopify. Mentored the team on Git-flow and resolved complex frontend issues.',
		imgPath: '/images/exp3.png',
		logoPath: '/images/gear.png',
		title: 'Frontend Developer',
		date: 'November 2018 - April 2019',
		responsibilities: [
			'Mentored the team on Git-flow version control practices, improving collaboration.',
			'Resolved complex frontend issues using JavaScript, CSS, and HTML, enhancing performance.',
			'Developed an investor-focused website page with login features that supported business investment.',
		],
	},
];

const EXPERIENCE_CARDS_LOGOS = [
	{
		name: 'logo1',
		imgPath: '/images/logo1.png',
	},
	{
		name: 'logo2',
		imgPath: '/images/logo2.png',
	},
	{
		name: 'logo3',
		imgPath: '/images/logo3.png',
	},
];

const testimonials = [
	{
		name: 'Esther Howard',
		mentions: '@estherhoward',
		review:
			'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
		imgPath: '/images/client1.png',
	},
	{
		name: 'Wade Warren',
		mentions: '@wadewarren',
		review:
			'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
		imgPath: '/images/client3.png',
	},
	{
		name: 'Guy Hawkins',
		mentions: '@guyhawkins',
		review:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		imgPath: '/images/client2.png',
	},
	{
		name: 'Marvin McKinney',
		mentions: '@marvinmckinney',
		review:
			'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
		imgPath: '/images/client5.png',
	},
	{
		name: 'Floyd Miles',
		mentions: '@floydmiles',
		review:
			'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
		imgPath: '/images/client4.png',
	},
	{
		name: 'Albert Flores',
		mentions: '@albertflores',
		review:
			'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
		imgPath: '/images/client6.png',
	},
];

const SOCIAL_MEDIA_ICONS = [
	{
		name: 'insta',
		imgPath: '/images/insta.png',
	},
	{
		name: 'fb',
		imgPath: '/images/fb.png',
	},
	{
		name: 'x',
		imgPath: '/images/x.png',
	},
	{
		name: 'linkedin',
		imgPath: '/images/linkedin.png',
	},
];

export {
	HERO_TEXT_TITLE_WORDS,
	NAVIGATION_LINKS,
	COUNTER_ITEMS,
	LOGO_ICONS,
	abilities,
	TECH_STACK_IMAGES,
	TECH_STACK_ICONS,
	EXPERIENCE_CARDS_DATA,
	EXPERIENCE_CARDS_LOGOS,
	testimonials,
	SOCIAL_MEDIA_ICONS,
};
