import React, { useState, useEffect, useContext } from 'react';
import { Context } from '@context/ContextApp';

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
			.then(data => setVaccines(data))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='vaccines__section'>
			{vaccines.length && (
				<>
					<SelectBar choosen={countries} setChoosen={setChoosen} />
					<section className='chart__container'>
						<Chart countrys={[vaccines[37], vaccines[32], vaccines[27]]} />
					</section>
				</>
			)}
		</div>
	);
};

export default ChartsContainer;
