import React, { useState, useRef, useContext } from 'react';
import { Context } from '@context/ContextApp';
import useSearch from '@hooks/useSearch';

import CountryData from './CountryData';

import '@styles/components/SelectBar.css';
import removeIcon from '../assets/remove.svg';

const SelectBar = ({ choosen, setChoosen }) => {
	const { vaccines } = useContext(Context);
	const [isOpen, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const searchInput = useRef(null);

	const filteredCountries = useSearch(query, vaccines);

	return (
		<section className='selectBox'>
			<div className='selectBox__data'>
				<div className='selectBox--country'>
					<span className=''>Colombia</span>
					<img src={removeIcon} alt='Remove Country' />
				</div>
				<div className='selectBox--country'>
					<span className=''>Korea</span>
					<img src={removeIcon} alt='Remove Country' />
				</div>
				<input
					ref={searchInput}
					type='text'
					placeholder='Select a country...'
					onClick={() => setOpen(!isOpen)}
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
				/>
			)}
		</section>
	);
};

export default SelectBar;
