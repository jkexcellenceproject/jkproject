import React from 'react';
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';

import './about.styles.scss';

class AboutUs extends React.Component {
	componentWillMount() {
		document.querySelector('body').className = 'blogs';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	render() {
		return (
			<div>
				<section>
					<div className="bcg-base">
						<img
							className="bcg-image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
						/>
						<div className="main-header">
							<h1>
								WHAT’S <span className="br">JK Education</span>
								<span className="br">FOR?</span>
							</h1>
						</div>
					</div>
				</section>

				<section className="blueGreen content-padding">
				<div className="ui aligned container">
							<div className="ui grid">
								<div className="row centered">
									<h2 className="header white-text">What's JK Education</h2>
								</div>
								<div className="three stackable column row about-company">
									<div className="eight wide column aligned white-text">
										<h3>
											About sub titleAbout sub titleAbout sub titleAbout sub
											titleAbout sub titleAbout sub titleAbout sub titleAbout
											sub titleAbout sub titleAbout sub titleAbout sub
											titleAbout sub
										</h3>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
										</p>
									</div>
									<div className="two wide column" />
									<div className="six wide column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
										/>
									</div>
								</div>
								<div className="three stackable column row president-info">
									<div className="one wide column" />
									<div className="five wide column center aligned">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
										/>
									</div>

									<div className="eight wide column white-text">
										<h3 className="header">Tutor Name</h3>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
										</p>
									</div>
								</div>
							</div>
						</div>
				</section>

				<section className="content-padding lesson-info">
					<h2 className='blue-text'>How to take lesson?</h2>
					<div className="ui container">
							<div className="flex-container">
								<div className="text-wrap blue-text">
									<h3 className="header ">1. Contact to Vickey</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="image-wrap">
									<img
										src="https://dummyimage.com/450x300/ccc/fff"
										className="ui image"
									/>
								</div>
							</div>

							<div className="flex-container reverse-order">
								<div className="text-wrap blue-text">
									<h3 className="header ">1. Contact to Vickey</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="image-wrap">
									<img
										src="https://dummyimage.com/450x300/ccc/fff"
										className="ui image"
									/>
								</div>
							</div>

							<div className="flex-container">
								<div className="text-wrap blue-text">
									<h3 className="header ">1. Contact to Vickey</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="image-wrap">
									<img
										src="https://dummyimage.com/450x300/ccc/fff"
										className="ui image"
									/>
								</div>
							</div>

							<div className="flex-container reverse-order">
								<div className="text-wrap blue-text">
									<h3 className="header ">1. Contact to Vickey</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="image-wrap">
									<img
										src="https://dummyimage.com/450x300/ccc/fff"
										className="ui image"
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="red content-padding">
						<div className="ui fluid container center aligned">
							<h2 className="white-text">We have free trial! Let"s try it</h2>
							<Link to="/" className="ui big yellow button">
								Free Trial
							</Link>
						</div>
					</section>

					<section className="blueGreen content-padding">
						<div className="ui fluid container center aligned">
							<h2 className="header white-text">Our tutors</h2>
							<Carousel />
						</div>
					</section>
			</div>
		);
	}
}

export default AboutUs;
