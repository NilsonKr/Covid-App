import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import getTotalVaccinated from '../utils/getTotalVaccinated';

import closeModal from '../assets/cancel.svg';

import '@styles/components/VaccinesModal.css';

const VaccinesModal = ({ setShape, countries, closeDash, shape }) => {
	const [select, setSelect] = useState(shape === 'line' ? true : false);

	const handleSelect = shape => {
		setSelect(!select);
		setShape(shape);
	};

	return ReactDOM.createPortal(
		<div className='vaccinesDashBoard__data'>
			<section className='dashboard--data__container'>
				<img
					src={closeModal}
					alt=''
					className='closeModal'
					onClick={() => closeDash(false)}
				/>
				<div className='vaccinesDashBoard--shape'>
					<h2>Chart's Shape</h2>
					<div className='charts--shape'>
						<span
							className={`line--shape ${select ? 'shape--selected' : ''}`}
							onClick={() => handleSelect('line')}
						>
							Line
						</span>
						<span
							className={`bar--shape ${!select ? 'shape--selected' : ''}`}
							onClick={() => handleSelect('bar')}
						>
							Bar
						</span>
					</div>
				</div>
				<div className='vaccinesDashBoard--total'>
					<h2>Total Vaccinated</h2>
					{countries.map(country => (
						<div className='chart--country' key={country.iso_code}>
							<div
								className='chart--countryColor'
								style={{ backgroundColor: country.color }}
							></div>
							<p>
								{/* Set Country Name and last total people vaccinated register */}
								<span>{country.country} :</span> {getTotalVaccinated(country)}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>,
		document.querySelector('#modal')
	);
};

export default VaccinesModal;
