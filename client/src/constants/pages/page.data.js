import HomePage from '../../pages/HomePage/Home.Page';
import PortfolioPage from '../../pages/PortfolioPage/Portfolio.Page';
import Countdown from '../../components/page/Countdown/Countdown';

export const pagesData = [
	{
		id: 1,
		page: <HomePage />,
		path: '/',
	},
	{
		id: 2,
		page: <PortfolioPage />,
		path: '/portfolio',
	},
	{
		id: 3,
		page: <Countdown />,
		path: '/countdown',
	},
];
