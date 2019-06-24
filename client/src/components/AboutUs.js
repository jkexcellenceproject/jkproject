import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

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
				<section className="ui fluid container main-visual">
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

				<section className="ui fluid container blueGreen content-padding">
					<div className="ui center aligned container">
						<div className="ui grid">
							<div className="row centered">
								<h2 className="header white-text">What's JK Education</h2>
							</div>
							<div className="three column row">
								<div className="eight wide column left aligned white-text">
									<h3>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h3>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
									</p>
								</div>
								<div className="two wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium image"
									/>
								</div>
							</div>
							<div className="three column row">
								<div className="two wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium circular image"
									/>
								</div>

								<div className="six wide column left aligned white-text">
									<h3 className="header">Tutor Name</h3>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* What does it take lesson? */}
				<div className="ui fluid container content-padding">
					<div className="ui container ">
						<div className="ui grid">
							<div className="row centered">
								<h2 className="header blue-text">How it does take lesson?</h2>
							</div>
							<div className="four column row">
								<div className="one wide column" />
								<div className="seven wide column blue-text">
									<h3 className="header">1. Contact to Vickey</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="two wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium image"
									/>
								</div>
							</div>

							<div className="four column row">
								<div className="one wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium image"
									/>
								</div>
								<div className="seven wide column blue-text">
									<h3 className="header">2. Try free trial</h3>
									<h4>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h4>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="two wide column" />
							</div>

							<div className="four column row">
								<div className="one wide column" />
								<div className="seven wide column blue-text">
									<h2 className="header">3. Contact to Vickey</h2>
									<h3>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h3>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="two wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium image"
									/>
								</div>
							</div>

							<div className="four column row">
								<div className="one wide column" />
								<div className="six wide column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui medium image"
									/>
								</div>
								<div className="seven wide column blue-text">
									<h2 className="header">4. Try free trial</h2>
									<h3>
										About sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
										titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									</h3>
									<p>
										texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexs
									</p>
								</div>
								<div className="two wide column" />
							</div>
						</div>
					</div>
					<div className="ui fluid container center aligned margin padding red content-padding">
						<h1 className="white-text">We have free trial! Let"s try it</h1>
						<Link to="/" className="ui big yellow button">
							Free Trial
						</Link>
					</div>

					<div className="ui fluid container center aligned blueGreen content-padding">
						<h1 className="header white-text">Our tutors</h1>
						<Carousel />
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
