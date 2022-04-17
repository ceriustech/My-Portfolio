import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './styles/containers/Layout.Styles';
import { pageComponents } from './constants/pageComponents.data';
import SkipNavigation from './components/utility/SkipNavigation/SkipNavigation';
import HomePage from './pages/HomePage/Home.Page';
import PortfolioPage from './pages/PortfolioPage/Portfolio.Page';
import Footer from './containers/Footer/Footer';
import { PageElements, pagesData } from './constants/pages/page.data';

const App = () => {
	console.log(pageComponents.filter((item, index) => index <= 0));
	const HeaderComponents = pageComponents
		.filter((item, index) => index <= 0)
		.map((item) => React.createElement(item.component, { key: item.id }));

	const Pages = pagesData.map(({ path, page }, key) => (
		<Route exact path={path} element={page} key={key} />
	));

	return (
		<Layout component={pageComponents} className="app">
			<SkipNavigation />
			{HeaderComponents}
			<Routes>{Pages}</Routes>
			<Footer />
		</Layout>
	);
};

export default App;
