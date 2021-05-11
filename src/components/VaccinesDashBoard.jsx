import React from 'react';

import dashBoardIcon from '../assets/charts.svg';

import '@styles/components/VaccinesDashBoard.css';

//TODO:
//IMPLEMENT createPortal

const VaccinesDashBoard = () => {
	return (
		<section className='vaccinesDashBoard'>
			<div className='vaccines__burguerMenu'>
				<img src={dashBoardIcon} alt='Vaccines Info' />
			</div>
			<div className='vaccinesDashBoard__data'>
				<section className='Dashboard--data__container'>
					<div className='vaccinesDashBoard--shape'>
						<h2>Chart's Shape</h2>
						<div className='charts--shape'>
							<span>Line</span>
							<span>Bar</span>
						</div>
					</div>
					<div className='vaccinesDashBoard--total'>
						<h2>Total Vaccinated</h2>
						<div className='chart--country'>
							<div className='chart--color'></div>
							<p>Colombia: 999.999.999 </p>
						</div>
						<div className='chart--country'>
							<div className='chart--color'></div>
							<p>Colombia: 999.999.999 </p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default VaccinesDashBoard;
