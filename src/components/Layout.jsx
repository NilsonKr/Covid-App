import React from 'react';

import '@styles/components/Layout.css';

const Layout = props => {
	return (
		<div className='main'>
			<header className='header'>
				<span></span>
				<h2>COVID APP</h2>
			</header>
			{props.children}
		</div>
	);
};

export default Layout;
