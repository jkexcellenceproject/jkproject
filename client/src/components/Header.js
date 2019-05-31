import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div class="ui menu" style={{ marginBottom: '0' }}>
			<div class="header item">LOGO</div>
			<Link to="/" class="item">
				Home
			</Link>
			<Link class="item">About us</Link>
			<Link class="item">Learn English</Link>
			<Link class="item">FAQs</Link>
			<Link class="item">Contact</Link>
		</div>
	);
};

export default Header;
