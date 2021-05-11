import React, { useState, useEffect, useContext } from 'react';
import { Context } from '@context/ContextApp';
import getColor from '../utils/randomColors';

import Chart from '@components/Chart';
import SelectBar from '@components/SelectBar';

import '@styles/components/Vaccines.css';

const ChartsContainer = () => {
	const { vaccines, setVaccines } = useContext(Context);
	const [countries, setChoosen] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
		)
			.then(data => data.json())
			.then(data => {
				const newData = data.map(item => ({
					...item,
					isAdded: false,
					color: getColor(),
				}));
				setVaccines(newData);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='vaccines__section'>
			{vaccines.length && (
				<>
					<SelectBar choosen={countries} setChoosen={setChoosen} />
					<section className='chart__container'>
						<Chart countries={countries.length ? countries : [{ ...vaccines[37] }]} />
					</section>
				</>
			)}
		</div>
	);
};

export default ChartsContainer;
