import HomePage from '../../pages/HomePage/Home.Page';
import PortfolioPage from '../../pages/PortfolioPage/Portfolio.Page';
import CountdownPage from '../../pages/CountdownPage/Countdown.Page';

export const pagesData = [
	{
		id: 1,
		page: <HomePage />,
		path: '/',
	},
	{
		id: 2,
		page: <PortfolioPage />,
		path: '/portfolio/:id',
	},
	{
		id: 3,
		page: <CountdownPage />,
		path: '/countdown/:id',
	},
];
