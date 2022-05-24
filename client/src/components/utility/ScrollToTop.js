import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		console.log('Pathname changed');
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return null;
};

export default ScrollToTop;
