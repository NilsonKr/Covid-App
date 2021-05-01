import React, { useContext, useEffect } from 'react';
import { Context } from '@context/ContextApp';

import Global from '@components/Global';
import Countrys from '@components/Countrys';

import '@styles/components/Home.css';

const HomeContainer = () => {
	const { data, setData, CovidApi } = useContext(Context);

	useEffect(() => {
		fetch(CovidApi)
			.then(data => data.json())
			.then(data => setData(data))
			.catch(err => console.error(err));
	}, []);

	console.log();

	return (
		<div className='home'>
			{data.Global && (
				<>
					<Global />
					<Countrys />
				</>
			)}
		</div>
	);
};

export default HomeContainer;
