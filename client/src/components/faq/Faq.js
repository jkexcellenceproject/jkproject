import React from 'react';
import Accordion from './Accordion';

import './faq.scss';

class Faq extends React.Component {
	componentWillMount() {
		document.querySelector('body').className = 'blogs';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
	render() {
		return (
			<div className="top-element">
				<div className="bcg-base">
					<img
						className="bcg-image"
						src={`${process.env.PUBLIC_URL}/images/faq-mv-img.jpg`}
					/>
					<div className="main-header">
						<h1 data-aos="fade-up">
							WHAT’S{' '}
							<span data-aos="fade-up" data-aos-delay="250" className="br">
								JK Education
							</span>
							<span data-aos="fade-up" data-aos-delay="500" className="br">
								FOR?
							</span>
						</h1>
					</div>
				</div>
				<div className="blueGreen content-padding">
					<div className="ui fluid container">
						<div className="ui container">
							<div className="ui stackable grid">
								<h2 className="white-text">FAQ's</h2>
								<div className="two column row">
									<div className="column">
										<Accordion title="First Section" section="first" />
									</div>
									<div className="column">
										<Accordion title="Second Section" section="second" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Faq;
