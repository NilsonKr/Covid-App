import React, { useState } from 'react';

import VaccinesModal from './VaccinesModal';

import dashBoardIcon from '../assets/charts.svg';
import '@styles/components/VaccinesDashBoard.css';

const VaccinesDashBoard = ({ setShape, countries }) => {
	const [open, setOpen] = useState(false);

	return (
		<section className='vaccinesDashBoard'>
			<div className='vaccines__burguerMenu' onClick={() => setOpen(!open)}>
				<img src={dashBoardIcon} alt='Vaccines Info' />
			</div>
			{open && (
				<VaccinesModal setShape={setShape} countries={countries} closeDash={setOpen} />
			)}
		</section>
	);
};

export default VaccinesDashBoard;
