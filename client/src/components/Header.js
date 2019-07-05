import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.scss';
import '../styles/common.scss';

const Header = () => {
	return (
		<div className="nav-bar">
			<div className="logo">
				<Link to="/">
					<img src={`${process.env.PUBLIC_URL}/images/JKEducationLogo.jpg`} />
				</Link>
			</div>
			<input type="checkbox" id="toggle" />
			<label htmlFor="toggle" className="menu-trigger-btn">
				<span />
				<span />
				<span />
			</label>
			<ul className="nav-menu">
				<Link to="/">Home</Link>
				<Link to="/about">About us</Link>
				<Link to="/articles">Articles</Link>
				<Link to="/faq">FAQ</Link>
				<Link to="/contact">Contact</Link>
			</ul>
		</div>
	);
};

export default Header;