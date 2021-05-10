import React from 'react';
import addCountry from '../utils/addCountry';

import '@styles/components/CountryData.css';

const CountryData = ({ countrys, choosen, setChoosen }) => {
	console.log(choosen);

	const handleAdd = country => {
		const newChoosen = addCountry(choosen, country);
		country.isAdded = !country.isAdded;

		setChoosen(newChoosen);
	};

	return (
		<div className='countryDataBox__container'>
			{countrys.map(data => (
				<label className='countryDataBox--country checkbox' key={data.iso_code}>
					<input
						type='checkbox'
						onClick={() => handleAdd(data)}
						checked={data.isAdded}
						//Read About checked property with onChange Handler
						onChange={event => false}
					/>
					<span className='checkMark'></span>
					<h2>{data.country}</h2>
				</label>
			))}
		</div>
	);
};

export default CountryData;
