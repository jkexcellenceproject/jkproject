import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui top fixed menu">
			<div className="item">LOGO</div>
			<div className="ui container" />
			<Link className="item">About us</Link>
			<Link className="item">Learn English</Link>
			<Link className="item">FAQ</Link>
			<Link className="item">Contact</Link>
		</div>
	);
};

export default Header;
