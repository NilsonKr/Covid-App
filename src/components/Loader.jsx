import React from 'react';

import loader from '../assets/loader.svg';

const Loader = () => {
	return (
		<section className='error-load__container'>
			<img src={loader} alt='' className='loader' />
		</section>
	);
};

export default Loader;
