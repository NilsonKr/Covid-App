import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '@context/ContextApp';

import Global from '@components/Global';
import Countrys from '@components/Countrys';
import SearchBar from '@components/SearchBar';
import Loader from '@components/Loader';
import Error from '@components/Error';

import '@styles/components/Home.css';
import vaccineIcon from '../assets/vaccine.svg';

const HomeContainer = () => {
	const { data, setData, setCountries, CovidApi, fetching, setFetching } =
		useContext(Context);

	useEffect(() => {
		if (!data.Countries) {
			setFetching({ load: true, error: null });
			fetch(CovidApi)
				.then(data => data.json())
				.then(data => {
					setCountries(data.Countries);
					setData(data);
					setFetching({ load: false, error: null });
				})
				.catch(err => setFetching({ load: false, error: err.message }));
		}
	}, []);

	if (fetching.load) {
		return <Loader />;
	}

	if (fetching.error) {
		console.log(fetching.error);
		return <Error />;
	}

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
