import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContextApp from '@context/ContextApp';
import Layout from '@components/Layout';
import Home from './containers/HomeContainer';

const App = () => {
	return (
		<ContextApp>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</ContextApp>
	);
};

export default App;
