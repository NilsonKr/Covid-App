import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '@context/ContextApp';

import Global from '@components/Global';
import Countrys from '@components/Countrys';
import SearchBar from '@components/SearchBar';

import '@styles/components/Home.css';
import vaccineIcon from '../assets/vaccine.svg';

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

	return (
		<div className='home'>
			{data.Countries && (
				<>
					<Link className='charts--button' to='/charts'>
						<img src={vaccineIcon} alt='Charts' />
					</Link>
					<Global />
					<SearchBar />
					<Countrys />
				</>
			)}
		</div>
	);
};

export default HomeContainer;
