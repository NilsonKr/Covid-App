import React, { useState } from 'react';

export const Context = React.createContext(null);

const CovidApi = 'https://api.covid19api.com/summary';

const ContextApp = props => {
	const [data, setData] = useState({});

	return (
		<Context.Provider value={{ data, setData, CovidApi }}>
			{props.children}
		</Context.Provider>
	);
};

export default ContextApp;
