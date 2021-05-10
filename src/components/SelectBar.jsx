import React from 'react';

import CountryData from './CountryData';

import '@styles/components/SelectBar.css';
import removeIcon from '../assets/remove.svg';

const SelectBar = () => {
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
				<input type='text' placeholder='Select a country...' />
			</div>
			<div className='selectBox--icon'>
				<span></span>
			</div>
			<CountryData />
		</section>
	);
};

export default SelectBar;
