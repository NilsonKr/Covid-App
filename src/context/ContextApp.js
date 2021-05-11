import React, { useState } from 'react';

export const Context = React.createContext(null);

const CovidApi = 'https://api.covid19api.com/summary';

const ContextApp = props => {
	const [data, setData] = useState({});
	const [countries, setCountries] = useState([]);
	const [vaccines, setVaccines] = useState([]);
	const [fetching, setFetching] = useState({ load: false, error: null });

	return (
		<Context.Provider
			value={{
				data,
				setData,
				countries,
				setCountries,
				vaccines,
				setVaccines,
				fetching,
				setFetching,
				CovidApi,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default ContextApp;
