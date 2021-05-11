import React, { useState, useEffect, useContext } from 'react';
import { Context } from '@context/ContextApp';
import getColor from '../utils/randomColors';

import Chart from '@components/Chart';
import SelectBar from '@components/SelectBar';
import VaccinesDashBoard from '@components/VaccinesDashBoard';
import Loader from '@components/Loader';
import Error from '@components/Error';

import '@styles/components/Vaccines.css';

const ChartsContainer = () => {
	const { vaccines, setVaccines, fetching, setFetching } = useContext(Context);
	const [countries, setChoosen] = useState([]);
	const [shape, setShape] = useState('line');
	const defaultCountry = [{ ...vaccines[37] }];

	useEffect(() => {
		if (!vaccines.length) {
			setFetching({ load: true, error: null });
			fetch(
				'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
			)
				.then(data => data.json())
				.then(data => {
					const newData = data.map(item => ({
						...item,
						isAdded: false,
						color: getColor(),
					}));
					setVaccines(newData);
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
		<div className='vaccines__section'>
			{vaccines.length && (
				<>
					<SelectBar choosen={countries} setChoosen={setChoosen} />
					<VaccinesDashBoard
						shape={shape}
						setShape={setShape}
						countries={countries.length ? countries : defaultCountry}
					/>
					<section className='chart__container'>
						<Chart
							countries={countries.length ? countries : defaultCountry}
							shape={shape}
						/>
					</section>
				</>
			)}
		</div>
	);
};

export default ChartsContainer;
