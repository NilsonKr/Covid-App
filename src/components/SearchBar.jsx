import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from '@context/ContextApp';
import useSearch from '@hooks/useSearch';

import searchIcon from '../assets/search.svg';

import '@styles/components/SearchBar.css';

const SearchBar = () => {
	const { data, setCountries } = useContext(Context);
	const searchInput = useRef(null);
	const [query, setQuery] = useState('');

	//Filter Countries
	const filteredCountries = useSearch(query, data.Countries);

	useEffect(() => {
		setCountries(filteredCountries);
	}, [filteredCountries]);

	return (
		<section className='search__container'>
			<div className='search--bar'>
				<input
					type='text'
					placeholder='Search a Country'
					name='searchCountry'
					ref={searchInput}
					value={query}
					onChange={() => setQuery(searchInput.current.value)}
				/>
				<img src={searchIcon} alt='Search' className='search--icon' />
			</div>
		</section>
	);
};

export default SearchBar;
