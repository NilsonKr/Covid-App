import React from 'react';
import { Line } from 'react-chartjs-2';
import getVaccineData from '../utils/getVaccineData';
import getMax from '../utils/getMaxVaccinated';
import getColor from '../utils/randomColors';

//TO-DOS:
//Aleatory Colors

const Chart = ({ countrys }) => {
	return (
		<div>
			<Line
				data={{
					labels: getVaccineData(countrys[0]).dates,
					datasets: countrys.map(country => ({
						label: country.country,
						data: getVaccineData(country).vaccines,
						backgroundColor: getColor(),
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
							max: getMax(countrys) + 100000,
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
