import React from 'react';

import errorIcon from '../assets/error.svg';

const Error = () => {
	return (
		<section className='error-load__container'>
			<img src={errorIcon} alt='Error' className='errorImage' />
			<h2> Something went wrong Try Again!</h2>
		</section>
	);
};

export default Error;
