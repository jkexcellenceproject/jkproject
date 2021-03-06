import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

class Header extends React.Component {
	constructor() {
		super();
		AOS.init({
			easing: 'ease-out-back',
			once: true,
			duration: 700
		});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.shrinkHeader);
		document.querySelector('.nav-bar').classList.add('shrink-nav-bar');
	}

	shrinkHeader = () => {
		const scrollingElement = document.scrollingElement;

		if (scrollingElement.scrollTop > 80) {
			document.querySelector('.nav-bar').classList.add('shrink-nav-bar');
		} else if (document.querySelector('.home')) {
			document.querySelector('.nav-bar').classList.remove('shrink-nav-bar');
		}
	};

	render() {
		return (
			<div className="nav-bar">
				<div className="header-logo">
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
				<div className="nav-menu">
					<ul className="nav-menu-lists">
						<li className="nav-btn-lists">
							<ul>
								<button className="ui circular facebook icon button">
									<i className="facebook icon" />
								</button>
								<button className="ui circular twitter icon button">
									<i className="twitter icon" />
								</button>
								<button className="ui circular icon button instagram insta-color">
									<i className="instagram icon" />
								</button>
							</ul>
						</li>
						<li className="nav-pagelink-lists">
							<ul>
								<Link to="/">Home</Link>
								<Link to="/about">About us</Link>
								<Link to="/articles">Articles</Link>
								<Link to="/student-interview">Student Interview</Link>
								<Link to="/faq">FAQ</Link>
								<Link to="/contact">Contact</Link>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Header;
