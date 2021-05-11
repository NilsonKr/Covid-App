import React, { useState, useRef, useContext, useEffect } from 'react';
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

	//Handle Close of data box
	function handleClose(ev) {
		const classList = ev.target.classList;
		const includes = classList.contains('notClose');

		if (!includes) {
			setOpen(false);
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', handleClose);

		return function cleanup() {
			document.body.removeEventListener('click', handleClose);
		};
	}, []);

	//Render in order of query
	const filteredCountries = useSearch(query, vaccines);

	const handleAdd = country => {
		const newChoosen = addCountry(choosen, country);
		country.isAdded = !country.isAdded;

		setChoosen(newChoosen);
	};

	return (
		<section className={`selectBox ${isOpen ? 'onHover' : ''}`}>
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
					className='selectBox--input notClose'
					ref={searchInput}
					type='text'
					placeholder='Select a country...'
					value={query}
					onClick={() => setOpen(true)}
					onChange={() => setQuery(searchInput.current.value)}
				/>
			</div>
			<div className='selectBox--icon' onClick={() => setOpen(!isOpen)}>
				<span className={`notClose ${isOpen ? 'selectBox--open' : ''}`}></span>
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
