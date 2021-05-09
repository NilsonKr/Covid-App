import React, { useState, useEffect } from 'react';

import Chart from '@components/Chart';

const ChartsContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
		)
			.then(data => data.json())
			.then(data => setData(data))
			.catch(err => console.log(err));
	}, []);

	console.log(data[0]);

	return (
		<div>
			{data.length && (
				<>
					<h1>Welcome To Charts Section</h1>
					<Chart />
				</>
			)}
		</div>
	);
};

export default ChartsContainer;
