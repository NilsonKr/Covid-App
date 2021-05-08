import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/Layout.css';

const Layout = props => {
	return (
		<div className='main'>
			<header className='header'>
				<span></span>
				<Link to='/' className='header--title'>
					COVID APP
				</Link>
			</header>
			{props.children}
		</div>
	);
};

export default Layout;
