import React, { useContext, useEffect, useState } from 'react';
import { Context } from '@context/ContextApp';

import Global from '@components/Global';
import Countrys from '@components/Countrys';
import SearchBar from '@components/SearchBar';

import '@styles/components/Home.css';

const HomeContainer = () => {
	const { data, setData, setCountries, CovidApi } = useContext(Context);

	useEffect(() => {
		fetch(CovidApi)
			.then(data => data.json())
			.then(data => {
				setCountries(data.Countries);
				setData(data);
			})
			.catch(err => console.error(err));
	}, []);

	console.log(data);

	return (
		<div className='home'>
			{data.Countries && (
				<>
					<Global />
					<SearchBar />
					<Countrys />
				</>
			)}
		</div>
	);
};

export default HomeContainer;
