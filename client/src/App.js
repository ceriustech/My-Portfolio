import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './styles/containers/Layout.Styles';
import { pageComponents } from './constants/pageComponents.data';
import SkipNavigation from './components/utility/SkipNavigation/SkipNavigation';
import Footer from './containers/Footer/Footer';
import { pagesData } from './constants/pages/page.data';

const App = () => {
	const HeaderComponents = pageComponents
		.filter((item, index) => index <= 0)
		.map((item) => React.createElement(item.component, { key: item.id }));

	const Pages = pagesData.map(({ path, page }, key) => (
		<Route exact path={path} element={page} key={key} />
	));

	return (
		<Layout className="app">
			<SkipNavigation />
			{HeaderComponents}
			<Routes>{Pages}</Routes>
			<Footer />
		</Layout>
	);
};

export default App;
