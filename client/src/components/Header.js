import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui top fixed borderless menu links">
			<Link to="/" className="item">
				<img src={`${process.env.PUBLIC_URL}/images/JKEducationLogo.jpg`} />
			</Link>
			<div className="ui container" />
			<Link to="/" className="item">
				Home
			</Link>
			<Link to="/about" className="item">
				About us
			</Link>
			<Link to="/articles" className="item">
				Learn English
			</Link>
			<Link to="/faq" className="item">
				FAQ
			</Link>
			<Link to="/contact" className="item">
				Contact
			</Link>
			<div />
		</div>
	);
};

export default Header;
