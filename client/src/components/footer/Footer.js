import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
	return (
		<div className="ui vertical footer segment">
			<div className="ui container" style={{ marginTop: '20px' }}>
				<div className="ui stackable divided equal height stackable grid footer-links">
					<div className="four wide column footer-logo">
						<Link to="/">
							<img
								src={`${process.env.PUBLIC_URL}/images/JKEducationLogo.jpg`}
							/>
						</Link>
						<p className="blue-text">
							000-0000-0000 <br />
							xxxxx@gmail.com
						</p>
					</div>
					<div className="three wide column">
						<div className="ui link list">
							<Link to="/" className="item">
								Home
							</Link>
							<Link to="/about" className="item">
								About us
							</Link>
							<Link to="/articles" className="item">
								Articles
							</Link>
						</div>
					</div>
					<div className="three wide column">
						<div className="ui link list">
							<Link to="/student-interview" className="item">
								Student Interview
							</Link>
							<Link to="/faq" className="item">
								FAQ
							</Link>
							<Link to="contact" className="item">
								Contact
							</Link>
						</div>
					</div>
				</div>
				<small>© 2019 JKExcellnce</small>
			</div>
		</div>
	);
};

export default Footer;
