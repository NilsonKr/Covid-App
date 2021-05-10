import { useState, useMemo } from 'react';

const useSearch = (query, countries) => {
	const [filteredCountries, setFiltered] = useState([]);

	useMemo(() => {
		const newCountries = countries.filter(country => {
			const countryName = country.country || country.Country;

			return countryName.toLowerCase().includes(query.toLowerCase());
		});

		setFiltered(newCountries);
	}, [query]);

	return filteredCountries;
};

export default useSearch;
