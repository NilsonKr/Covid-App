import React, { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import GlobalIcon from '../assets/earth-globe.svg';

import '@styles/components/Global.css';

const Global = () => {
	const [isOpen, setOpen] = useState(false);
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

	useMemo(() => {
		if (isDesktop) {
			setOpen(true);
		}
	}, [isDesktop]);

	return (
		<section className={(isOpen && 'global global--active ') || ''}>
			<div className='global__menu'>
				<img
					src={GlobalIcon}
					alt='Global Menu'
					onClick={() => setOpen(isOpen ? false : true)}
				/>
			</div>
			{isOpen && (
				<div className='global__container'>
					<div className='global__item'>
						<h2>Affected Countries</h2>
						<em>999999999</em>
					</div>
					<div className='global__item'>
						<h2>Confirmed Cases</h2>
						<em>999999999</em>
					</div>
					<div className='global__item global--recovered'>
						<h2>Recovered Cases</h2>
						<em>999999999</em>
					</div>
					<div className='global__item global--deaths'>
						<h2>Worlwide Deaths</h2>
						<em>999999999</em>
					</div>
				</div>
			)}
		</section>
	);
};

export default Global;
