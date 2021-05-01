import React, { useContext } from 'react';
import { Context } from '@context/ContextApp';

import '@styles/components/Countrys.css';

const Countrys = () => {
	const { data } = useContext(Context);
	console.log(data.Countries);

	return (
		<section className='countrys'>
			<div className='countrys__container'>
				<div className='countrys__head'>
					<h2>Country</h2>
					<h2>Total Cases</h2>
					<h2>Total Deaths</h2>
					<h2>Total Recovered</h2>
				</div>
				<div className='countrys__body'>
					{data.Countries.map(countrie => (
						<div className='country__info' key={countrie.ID}>
							<h3>{countrie.CountryCode}</h3>
							<h3>{countrie.Country}</h3>
							<h3>{countrie.TotalConfirmed.toLocaleString('de-DE')}</h3>
							<h3>{countrie.TotalDeaths.toLocaleString('de-DE')}</h3>
							<h3>{countrie.TotalRecovered.toLocaleString('de-DE')}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Countrys;
