import React from 'react';
import { Link } from 'react-router-dom';
import ReactSiema from 'react-siema';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	state = {
		datas: [
			{ name: 'Kano', age: 38 },
			{ name: 'YOoo', age: 23 },
			{ name: 'G.R', age: 90 }
		]
	};

	componentWillMount() {
		document.querySelector('body').className = 'blogs';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	createCarouselItem = datas => {
		const item = this.state.datas.map(data => {
			return (
				<div className="carousel-item">
					<img
						class="ui small circular image"
						src="https://react.semantic-ui.com/images/wireframe/image.png"
					/>
					<p>
						TexttextTexttext TexttextTexttextTexttTexttextTexttext
						TexttextTexttextTextt TexttextTexttext
						TexttextTexttextTexttTexttextTexttext TexttextTexttextTextt
					</p>
					<div className="meta">
						{data.name}, {data.age} year-old, US
					</div>
				</div>
			);
		});
		return item;
	};

	render() {
		let slider;
		return (
			<div>
				{/* Image Slider */}

				<div className="ui fluid container slide-wrap">
					<img
						className="slideImage"
						src={`${process.env.PUBLIC_URL}/images/slideImage1.jpg`}
					/>
				</div>

				{/* About us Section */}
				<section className="content-padding blueGreen">
					<div className="ui middle aligned stackable grid container">
						<div className="row">
							<div className="center aligned column">
								<h2 className="ui header white-text">About us</h2>
							</div>
						</div>
						<div className="row">
							<div className="eight wide column">
								<div className="white-text">
									About sub titleAbout sub titleAbout sub titleAbout sub
									titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									titleAbout sub titleAbout sub titleAbout sub titleAbout sub
								</div>
								<div class="ui divider" />
								<p className="white-text">
									texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
								</p>
								<div className="ui four column grid">
									<div class="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div class="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div class="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div class="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
								</div>
							</div>

							<div className="five wide right floated column">
								<img
									src="https://react.semantic-ui.com/images/wireframe/image.png"
									class="ui image"
								/>
							</div>
						</div>
						<div className="row">
							<div className="center aligned column">
								<Link className="ui big yellow button">About us</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Our Class Section */}
				<section className="content-padding">
					<div>
						<div className="ui container">
							<div className="ui middle aligned stackable grid">
								<div className="row">
									<div className="center aligned column">
										<h2 className="blue-text">Our Class</h2>
									</div>
								</div>
								<div className="row">
									<div className="six wide centered center aligned column">
										<p className="blue-text">
											Course sub titleCourse sub titleCourse sub titleCourse sub
											titleCourse sub titleCourse sub titleCourse sub
											titleCourse sub titleCourse sub titleCourse sub
											titleCourse sub titleCourse sub titleCourse sub title
										</p>
									</div>
								</div>
								<div className="four column row">
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											class="ui image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="ui fluid container center aligned margin padding red content-padding">
							<h1 className="white-text">We have free trial! Let"s try it</h1>
							<Link className="ui big yellow button">Free Trial</Link>
						</div>
					</div>
				</section>

				{/* Price Section */}
				<section className="ui fluid container blueGreen content-padding">
					<div className="ui middle aligned stackable grid container">
						<div className="row">
							<div className="center aligned column">
								<h2 className="white-text">Prices</h2>
							</div>
						</div>
						<div className="four column row">
							<div className="column">
								<div class="ui card">
									<div class="content center aligned">
										<div class="header">Course Title</div>
									</div>
									<div class="content center aligned">
										<h4 class="ui sub header">Description</h4>
										<div class="ui small feed">
											<div class="event">
												<div class="content center aligned">
													<p>
														TexttextTexttext
														TexttextTexttextTexttTexttextTexttext
														TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="extra content center aligned">
										<button class="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content center aligned">
										<div class="header">Course Title</div>
									</div>
									<div class="content center aligned">
										<h4 class="ui sub header">Description</h4>
										<div class="ui small feed">
											<div class="event">
												<div class="content center aligned">
													<p>
														TexttextTexttext
														TexttextTexttextTexttTexttextTexttext
														TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="extra content center aligned">
										<button class="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content center aligned">
										<div class="header">Course Title</div>
									</div>
									<div class="content center aligned">
										<h4 class="ui sub header">Description</h4>
										<div class="ui small feed">
											<div class="event">
												<div class="content center aligned">
													<p>
														TexttextTexttext
														TexttextTexttextTexttTexttextTexttext
														TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="extra content center aligned">
										<button class="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content center aligned">
										<div class="header">Course Title</div>
									</div>
									<div class="content center aligned">
										<h4 class="ui sub header">Description</h4>
										<div class="ui small feed">
											<div class="event">
												<div class="content center aligned">
													<p>
														TexttextTexttext
														TexttextTexttextTexttTexttextTexttext
														TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="extra content center aligned">
										<button class="ui big button">$15</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="center aligned column">
								<h2 className="white-text">Our tutors</h2>
							</div>
						</div>
						<div className="row">
							<div class="center aligned column carousel-item">
								<ReactSiema ref={siema => (slider = siema)}>
									{this.createCarouselItem(this.state.datas)}
								</ReactSiema>
								<button className="button left" onClick={() => slider.prev()} />
								<button
									className="button right"
									onClick={() => slider.next()}
								/>
							</div>
						</div>
					</div>
				</section>

				{/* English Article Section */}
				<section className="ui fluid container red content-padding">
					<div className="ui middle aligned stackable grid container">
						<div className="row">
							<div className="center aligned column">
								<h2 className="white-text">English Articles</h2>
							</div>
						</div>
						<div className="four column row">
							<div className="column">
								<div className="ui items">
									<div className="item">
										<div className="content">
											<h2 className="header white-text">
												Sub Title Sub Title Sub Title Sub Title Sub Title Sub
												Title Sub Title Sub Title
											</h2>
											<div className="description">
												<p className="white-text">
													TexttextTexttext TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt TexttextTexttext
													TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt
												</p>
											</div>
											<div style={{ margin: '15px 0' }}>
												<Link to="/" className="ui button big yellow">
													View Articles
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card">
									<Link to="/" className="image">
										<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Link>
									<div className="content">
										<Link className="header">Article Title</Link>
										<div className="meta">
											<span className="date">Posted Date</span>
										</div>
										<p className="description">
											TexttextTexttext TexttextTexttextTexttTexttextTexttext
											TexttextTexttextTextt
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card">
									<Link to="/ h" className="image">
										<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Link>
									<div className="content">
										<Link className="header">Article Title</Link>
										<div className="meta">
											<span className="date">Posted Date</span>
										</div>
										<p className="description">
											TexttextTexttext TexttextTexttextTexttTexttextTexttext
											TexttextTexttextTextt
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card">
									<Link to="/ h" className="image">
										<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
									</Link>
									<div className="content">
										<Link className="header">Article Title</Link>
										<div className="meta">
											<span className="date">Posted Date</span>
										</div>
										<p className="description">
											TexttextTexttext TexttextTexttextTexttTexttextTexttext
											TexttextTexttextTextt
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="ui container content-padding">
					<div className="ui middle aligned stackable grid">
						<div className="row">
							<div className="center aligned column">
								<h2 className="blue-text">FAQ</h2>
							</div>
						</div>
						<div className="row">
							<div className="six wide centered center aligned column">
								<p className="blue-text">
									Do you have any question? <br />
									texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
								</p>
							</div>
						</div>
						<div className="equal width row center aligned">
							<div className="column">
								<div class="ui card">
									<div class="content">
										<div class="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content">
										<div class="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content">
										<div class="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div class="ui card">
									<div class="content">
										<div class="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row centered">
							<Link to="/" className="ui big button yellow">
								View FAQ's
							</Link>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="ui fluid container blueGreen content-padding">
					<div className="ui middle aligned stackable grid container">
						<div className="row">
							<div className="center aligned column">
								<h2 className="white-text">Contact us</h2>
							</div>
						</div>
						<div className="equal width row">
							<div className="column">
								<div className="white-text">
									blog sub titleblog sub titleblog sub titleblog sub titleblog
									sub titleblog sub title
								</div>
								<div className="white-text">
									000-0000-0000 <br />
									xxxxx@gmail.com <br />
									123-222 Granville st, Vancouver
								</div>
							</div>
							<div className="column">
								<form className="ui large form">
									<div className="ui stackable segment">
										<div className="field">
											<div className="ui left icon input">
												<i className="user icon" />
												<input type="text" placeholder="Name" name="name" />
											</div>
										</div>
										<div className="field">
											<div className="ui left icon input">
												<i className="mail icon" />
												<input
													type="text"
													placeholder="E-mail adrress"
													name="e-mail"
												/>
											</div>
										</div>
										<div class="field">
											<label>Content</label>
											<textarea />
										</div>
										<div>
											<button className="ui button primary">Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
