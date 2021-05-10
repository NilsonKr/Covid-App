import React, { useState } from 'react';

export const Context = React.createContext(null);

const CovidApi = 'https://api.covid19api.com/summary';

const ContextApp = props => {
	const [data, setData] = useState({});
	const [countries, setCountries] = useState([]);
	const [vaccines, setVaccines] = useState([]);

	return (
		<Context.Provider
			value={{ data, setData, countries, setCountries, vaccines, setVaccines, CovidApi }}
		>
			{props.children}
		</Context.Provider>
	);
};

export default ContextApp;
