import React, { Children } from 'react';
import { Layout } from './styles/containers/Layout.Styles';
import { pageComponents } from './constants/pageComponents.data';

const App = () => {
	const Components = pageComponents.map((item) =>
		React.createElement(item.component, { key: item.id })
	);

	return (
		<Layout component={pageComponents} className="app">
			{Components}
		</Layout>
	);
};

export default App;
