import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import getVaccineData from '../utils/getVaccineData';
import getMax from '../utils/getMaxVaccinated';
import getVaccineLabel from '../utils/getVaccineLabel';

const Chart = ({ countries, shape }) => {
	const ChartShape = shape === 'line' ? Line : Bar;

	return (
		<div className='main--chart'>
			<ChartShape
				data={{
					labels: getVaccineLabel(countries),
					datasets: countries.map(country => ({
						label: country.country,
						data: getVaccineData(country).vaccines,
						backgroundColor: country.color,
						borderColor: 'black',
						borderWidth: 1,
						tension: 0.4,
						fill: true,
					})),
				}}
				height={600}
				width={800}
				options={{
					maintainAspectRatio: false,
					scales: {
						y: {
							beginAtZero: true,
							max: getMax(countries) + 100000,
						},
					},
					plugins: {
						tooltip: {
							bodyColor: '#cecece',
							callbacks: {
								labelTextColor: function () {
									return 'white';
								},
								beforeBody: function (item) {
									//Match The index of label with the correspond day data of the country
									const country = countries.find(
										country => item[0].dataset.label === country.country
									);
									const date = country.data[item[0].dataIndex - 1].date;

									return `Date : ${date}`;
								},
							},
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
