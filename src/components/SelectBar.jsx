import React, { useState, useRef, useContext } from 'react';
import { Context } from '@context/ContextApp';
import useSearch from '@hooks/useSearch';
import addCountry from '../utils/addCountry';

import CountryData from './CountryData';

import '@styles/components/SelectBar.css';
import removeIcon from '../assets/remove.svg';

const SelectBar = ({ choosen, setChoosen }) => {
	const { vaccines } = useContext(Context);
	const [isOpen, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const searchInput = useRef(null);

	//Render in order of query
	const filteredCountries = useSearch(query, vaccines);

	const handleAdd = country => {
		const newChoosen = addCountry(choosen, country);
		country.isAdded = !country.isAdded;

		setChoosen(newChoosen);
	};

	return (
		<section className='selectBox'>
			<div className='selectBox__data'>
				{choosen.map(item => (
					<div
						className='selectBox--country'
						key={item.iso_code}
						onClick={() => handleAdd(item)}
					>
						<span className=''>{item.country}</span>
						<img src={removeIcon} alt='Remove Country' />
					</div>
				))}
				<input
					ref={searchInput}
					type='text'
					placeholder='Select a country...'
					value={query}
					onClick={() => setOpen(true)}
					onChange={() => setQuery(searchInput.current.value)}
				/>
			</div>
			<div
				className={`selectBox--icon ${isOpen ? 'selectBox--open' : ''}`}
				onClick={() => setOpen(!isOpen)}
			>
				<span></span>
			</div>
			{isOpen && (
				<CountryData
					countrys={filteredCountries}
					choosen={choosen}
					setChoosen={setChoosen}
					setQuery={setQuery}
				/>
			)}
		</section>
	);
};

export default SelectBar;
