import React from 'react';
import SlideShow from '../slides/SlideShow';
import { Link } from 'react-router-dom';

import './about.styles.scss';

class AboutUs extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'about';
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
							<h1
								data-aos="fade-up"
								data-aos-easing="ease-out"
								// data-aos-duration="1000"
							>
								What’s{' '}
								<span data-aos="fade-up" data-aos-delay="250" className="br">
									JK EXCELLETNT
								</span>
								<span data-aos="fade-up" data-aos-delay="500" className="br">
									For?
								</span>
							</h1>
						</div>
					</div>
				</section>

				<section className="blueGreen content-padding">
					<div className="ui aligned container">
						<div className="ui grid">
							<h2 className="header white-text">What's JK Mission</h2>
							<div className="three stackable column row about-company">
								<div className="eight wide column aligned white-text">
									<h3>Lorem ipsum</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ac turpis egestas maecenas pharetra convallis
										posuere. A scelerisque purus semper eget duis at tellus at
										urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi
										tincidunt augue interdum velit euismod in. Ut pharetra sit
										amet aliquam id diam maecenas ultricies. Arcu odio ut sem
										nulla pharetra diam. Rutrum quisque non tellus orci. Magna
										eget est lorem ipsum dolor. Et odio pellentesque diam
										volutpat commodo sed egestas egestas. Consequat interdum
										varius sit amet mattis. Faucibus scelerisque eleifend donec
										pretium vulputate sapien nec sagittis. Dictumst vestibulum
										rhoncus est pellentesque elit.
									</p>
								</div>
								<div className="two wide column" />
								<div className="six wide column">
									<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
								</div>
							</div>
							<div className="three stackable column row president-info">
								<div className="one wide column" />
								<div className="five wide column center aligned">
									<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
								</div>

								<div className="eight wide column white-text">
									<h3 className="header">Lorem ipsum</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ac turpis egestas maecenas pharetra convallis
										posuere. A scelerisque purus semper eget duis at tellus at
										urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi
										tincidunt augue interdum velit euismod in. Ut pharetra sit
										amet aliquam id diam maecenas ultricies. Arcu odio ut sem
										nulla pharetra diam. Rutrum quisque non tellus orci. Magna
										eget est lorem ipsum dolor. Et odio pellentesque diam
										volutpat commodo sed egestas egestas. Consequat interdum
										varius sit amet mattis. Faucibus scelerisque eleifend donec
										pretium vulputate sapien nec sagittis. Dictumst vestibulum
										rhoncus est pellentesque elit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="content-padding lesson-info">
					<h2 className="blue-text">How to take lesson?</h2>
					<div className="ui container">
						<div className="flex-container">
							<div className="text-wrap blue-text">
								<h3 data-aos="fade-right" className="header ">
									1. Lorem ipsum
								</h3>
								<p data-aos="fade-right">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ac turpis egestas maecenas pharetra convallis posuere. A
									scelerisque purus semper eget duis at tellus at urna. Augue ut
									lectus arcu bibendum at. Fringilla ut morbi tincidunt augue
									interdum velit euismod in. Ut pharetra sit amet aliquam id
									diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam.
									Rutrum quisque non tellus orci. Magna eget est lorem ipsum
									dolor. Et odio pellentesque diam volutpat commodo sed egestas
									egestas. Consequat interdum varius sit amet mattis. Faucibus
									scelerisque eleifend donec pretium vulputate sapien nec
									sagittis. Dictumst vestibulum rhoncus est pellentesque elit.
								</p>
							</div>
							<div className="image-wrap">
								<img
									data-aos="fade-left"
									data-aos-delay="200"
									src="https://dummyimage.com/450x300/ccc/fff"
									className="ui image"
								/>
							</div>
						</div>

						<div className="flex-container reverse-order">
							<div className="text-wrap blue-text">
								<h3 data-aos="fade-left" className="header ">
									2. Lorem ipsum
								</h3>
								<p data-aos="fade-left">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ac turpis egestas maecenas pharetra convallis posuere. A
									scelerisque purus semper eget duis at tellus at urna. Augue ut
									lectus arcu bibendum at. Fringilla ut morbi tincidunt augue
									interdum velit euismod in. Ut pharetra sit amet aliquam id
									diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam.
									Rutrum quisque non tellus orci. Magna eget est lorem ipsum
									dolor. Et odio pellentesque diam volutpat commodo sed egestas
									egestas. Consequat interdum varius sit amet mattis. Faucibus
									scelerisque eleifend donec pretium vulputate sapien nec
									sagittis. Dictumst vestibulum rhoncus est pellentesque elit.
								</p>
							</div>
							<div className="image-wrap">
								<img
									data-aos="fade-right"
									data-aos-delay="200"
									src="https://dummyimage.com/450x300/ccc/fff"
									className="ui image"
								/>
							</div>
						</div>

						<div className="flex-container">
							<div className="text-wrap blue-text">
								<h3 data-aos="fade-right" className="header ">
									3. Lorem ipsum
								</h3>
								<p data-aos="fade-right">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ac turpis egestas maecenas pharetra convallis posuere. A
									scelerisque purus semper eget duis at tellus at urna. Augue ut
									lectus arcu bibendum at. Fringilla ut morbi tincidunt augue
									interdum velit euismod in. Ut pharetra sit amet aliquam id
									diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam.
									Rutrum quisque non tellus orci. Magna eget est lorem ipsum
									dolor. Et odio pellentesque diam volutpat commodo sed egestas
									egestas. Consequat interdum varius sit amet mattis. Faucibus
									scelerisque eleifend donec pretium vulputate sapien nec
									sagittis. Dictumst vestibulum rhoncus est pellentesque elit.
								</p>
							</div>
							<div className="image-wrap">
								<img
									data-aos="fade-left"
									data-aos-delay="200"
									src="https://dummyimage.com/450x300/ccc/fff"
									className="ui image"
								/>
							</div>
						</div>

						<div className="flex-container reverse-order">
							<div className="text-wrap blue-text">
								<h3 data-aos="fade-left" className="header ">
									4. Lorem ipsum
								</h3>
								<p data-aos="fade-left">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ac turpis egestas maecenas pharetra convallis posuere. A
									scelerisque purus semper eget duis at tellus at urna. Augue ut
									lectus arcu bibendum at. Fringilla ut morbi tincidunt augue
									interdum velit euismod in. Ut pharetra sit amet aliquam id
									diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam.
									Rutrum quisque non tellus orci. Magna eget est lorem ipsum
									dolor. Et odio pellentesque diam volutpat commodo sed egestas
									egestas. Consequat interdum varius sit amet mattis. Faucibus
									scelerisque eleifend donec pretium vulputate sapien nec
									sagittis. Dictumst vestibulum rhoncus est pellentesque elit.
								</p>
							</div>
							<div className="image-wrap">
								<img
									data-aos="fade-right"
									data-aos-delay="200"
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
						<SlideShow for="tutors" />
					</div>
				</section>
			</div>
		);
	}
}

export default AboutUs;
