import { useState, useMemo } from 'react';

const useSearch = (query, countries) => {
	const [filteredCountries, setFiltered] = useState([]);

	useMemo(() => {
		const newCountries = countries.filter(country => {
			return country.Country.toLowerCase().includes(query.toLowerCase());
		});

		setFiltered(newCountries);
	}, [query]);

	return filteredCountries;
};

export default useSearch;
