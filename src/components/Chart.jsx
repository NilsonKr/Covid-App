import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import getVaccineData from '../utils/getVaccineData';

const Chart = ({ countrys }) => {
	console.log(countrys);

	return (
		<div>
			<Line
				data={{
					labels: getVaccineData(countrys[0]).dates,
					datasets: countrys.map(country => ({
						label: country.country,
						data: getVaccineData(country).vaccines,
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'black',
						borderWidth: 2,
						tension: 0.4,
						fill: true,
					})),
				}}
				height={600}
				options={{
					maintainAspectRatio: false,
					scales: {
						y: {
							beginAtZero: true,
							max: 1000000,
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
