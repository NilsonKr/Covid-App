import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import getVaccineData from '../utils/getVaccineData';

const Chart = ({ country }) => {
	const [vaccines, setVaccines] = useState([]);

	return (
		<div>
			<Line
				data={{
					labels: getVaccineData(country).dates,
					datasets: [
						{
							label: '# of Votes',
							data: getVaccineData(country).vaccines,
							backgroundColor: 'rgba(75, 192, 192, 0.2)',
							borderColor: 'black',
							borderWidth: 2,
							tension: 0.4,
							fill: true,
						},
					],
				}}
				height={600}
				options={{
					maintainAspectRatio: false,
					scales: {
						y: {
							beginAtZero: true,
							max: getVaccineData(country).limit + 10000,
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
