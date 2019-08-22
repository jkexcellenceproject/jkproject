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
						src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
					/>
					<h1 className="main-header">
						WHAT’S <span className="br">JK Education</span>
						<span className="br">FOR?</span>
					</h1>
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
