import React, { Children } from 'react';
import { Layout } from './styles/containers/Layout.Styles';
import { pageComponents } from './constants/pageComponents.data';
import SkipNavigation from './components/utility/SkipNavigation/SkipNavigation';
import { MainContentFocusDiv } from './components/utility/SkipNavigation/SkipNavigation.Styles';
import Footer from './containers/Footer/Footer';

const App = () => {
	const HeaderComponents = pageComponents
		.filter((item, index) => index <= 1)
		.map((item) => React.createElement(item.component, { key: item.id }));

	const Components = pageComponents
		.filter((item, index) => index >= 2 && index < 7)
		.map((item) => React.createElement(item.component, { key: item.id }));

	return (
		<Layout component={pageComponents} className="app">
			<SkipNavigation />
			{HeaderComponents}
			<div id="main">{Components}</div>
			<Footer />
		</Layout>
	);
};

export default App;
