import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '@components/Layout';
import Home from './containers/HomeContainer';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
