import React from 'react';
import ReactDOM from 'react-dom';

const VaccinesModal = () => {
	return ReactDOM.createPortal(
		<div className='vaccinesDashBoard__data'>
			<section className='dashboard--data__container'>
				<div className='vaccinesDashBoard--shape'>
					<h2>Chart's Shape</h2>
					<div className='charts--shape'>
						<span className='line--shape shape--selected'>Line</span>
						<span className='bar--shape'>Bar</span>
					</div>
				</div>
				<div className='vaccinesDashBoard--total'>
					<h2>Total Vaccinated</h2>
					<div className='chart--country'>
						<div className='chart--countryColor'></div>
						<p>
							<span>Colombia :</span> 999.999.999
						</p>
					</div>
					<div className='chart--country'>
						<div className='chart--countryColor'></div>
						<p>
							<span>Brazil :</span> 999.999.999
						</p>
					</div>
				</div>
			</section>
		</div>,
		document.querySelector('#modal')
	);
};

export default VaccinesModal;
