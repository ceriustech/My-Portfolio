import React from 'react';
import { pageComponents } from '../../constants/pageComponents.data';

const HomePage = () => {
	const Components = pageComponents
		.filter((item, index) => index >= 1 && index < 7)
		.map((item) => React.createElement(item.component, { key: item.id }));

	return <div id="main">{Components}</div>;
};

export default HomePage;
