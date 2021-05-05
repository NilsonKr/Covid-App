import React from 'react';

import searchIcon from '../assets/search.svg';

import '@styles/components/SearchBar.css';

const SearchBar = () => {
	return (
		<section className='search__container'>
			<div className='search--bar'>
				<input type='text' placeholder='Search a Country' name='searchCountry' />
				<img src={searchIcon} alt='Search' className='search--icon' />
			</div>
		</section>
	);
};

export default SearchBar;
