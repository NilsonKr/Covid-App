import React, { useState } from 'react';

import GlobalIcon from '../assets/earth-globe.svg';

import '@styles/components/Global.css';

const Global = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className='global__menu'>
				<img
					src={GlobalIcon}
					alt='Global Menu'
					onClick={() => setOpen(isOpen ? false : true)}
				/>
			</div>
			{isOpen && (
				<div className='global__container'>
					<h1>Global Menu</h1>
				</div>
			)}
		</>
	);
};

export default Global;
