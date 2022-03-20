import {
	About,
	Blog,
	Contact,
	Footer,
	Hero,
	Navigation,
	Portfolio,
	Skills,
} from '../containers';

export const pageComponents = [
	{
		id: 'navigation',
		name: 'Navigation',
		component: Navigation,
	},
	{
		id: 'hero',
		name: 'Hero',
		component: Hero,
	},
	{
		id: 'about',
		name: 'About',
		component: About,
	},
	{
		id: 'portfolio',
		name: 'Portfolio',
		component: Portfolio,
	},
	{
		id: 'skills',
		name: 'Skills',
		component: Skills,
	},
	{
		id: 'blog',
		name: 'Blog',
		component: Blog,
	},
	{
		id: 'contact',
		name: 'Contact',
		component: Contact,
	},
	{
		id: 'footer',
		name: 'Footer',
		component: Footer,
	},
];
