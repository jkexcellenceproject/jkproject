import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.scss';
import '../styles/common.scss';

const Header = () => {
	return (
		<div className="ui top fixed borderless menu links">
			<Link to="/" className="item">
				<img src={`${process.env.PUBLIC_URL}/images/JKEducationLogo.jpg`} />
			</Link>
			<div className="ui container" />
			<Link to="/about" className="item">
				About us
			</Link>
			<Link to="/english-articles" className="item">English Articles</Link>
			<Link className="item">FAQ</Link>
			<Link className="item">Contact</Link>
		</div>
	);
};

export default Header;
