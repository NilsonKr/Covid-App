import React from 'react';

import dashBoardIcon from '../assets/charts.svg';

import '@styles/components/VaccinesDashBoard';

const VaccinesDashBoard = () => {
	return (
		<section className='vaccinesDashBoard'>
			<div className='vaccines__burguerMenu'>
				<img src={dashBoardIcon} alt='Vaccines Info' />
			</div>
		</section>
	);
};

export default VaccinesDashBoard;
