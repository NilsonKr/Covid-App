import React from 'react';

import VaccinesModal from './VaccinesModal';

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
			<VaccinesModal />
		</section>
	);
};

export default VaccinesDashBoard;
