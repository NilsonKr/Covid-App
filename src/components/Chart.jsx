import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const Chart = data => {
	console.log('Hey');

	return (
		<div>
			<Line
				data={{
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [
						{
							label: '# of Votes',
							data: [16, 19, 3, 5, 2, 3],
							backgroundColor: 'rgba(75, 192, 192, 0.2)',
							borderColor: 'black',
							borderWidth: 2,
							tension: 0.3,
							fill: true,
						},
						{
							label: '# of Donations',
							data: [6, 4, 31, 5, 4, 23],
							backgroundColor: 'rgba(255, 99, 132, 0.2)',
							borderColor: 'black',
							borderWidth: 2,
							fill: true,
							tension: 0.3,
						},
					],
				}}
				width={600}
				height={400}
				options={{
					maintainAspectRatio: false,
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				}}
			/>
		</div>
	);
};

export default Chart;
