import React, { useState, useEffect } from 'react';

import Chart from '@components/Chart';
import SelectBar from '@components/SelectBar';

import '@styles/components/Vaccines.css';

const ChartsContainer = () => {
	const [data, setData] = useState([]);
	const [vaccines, setVaccines] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
		)
			.then(data => data.json())
			.then(data => setData(data))
			.catch(err => console.log(err));
	}, []);

	console.log(data);

	return (
		<div className='vaccines__section'>
			{data.length && (
				<>
					<SelectBar />
					<section className='chart__container'>
						<Chart countrys={[data[37], data[32], data[27]]} />
					</section>
				</>
			)}
		</div>
	);
};

export default ChartsContainer;
