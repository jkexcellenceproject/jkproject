import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	render() {
		return (
			<div>
				{/* Image Slider */}
				<Carousel
					className="margin-bottom"
					autoplay={true}
					speed="2000"
					transitionMode="fade"
				>
					<img src={`${process.env.PUBLIC_URL}/images/slideExample1.jpg`} />
					<img src={`${process.env.PUBLIC_URL}/images/slideExample2.jpg`} />
					<img src={`${process.env.PUBLIC_URL}/images/slideExample3.jpg`} />
				</Carousel>
				{/* About us Section */}
				<section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2 className="ui header">About us</h2>
						</div>
					</div>
					<div className="row">
						<div className="eight wide column">
							<div>
								About sub titleAbout sub titleAbout sub titleAbout sub
								titleAbout sub titleAbout sub titleAbout sub titleAbout sub
								titleAbout sub titleAbout sub titleAbout sub titleAbout sub
							</div>
							<div class="ui divider" />
							<p>
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
							<Link className="ui big button">About us</Link>
						</div>
					</div>
				</section>

				{/* Our Class Section */}
				<section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2>Our Class</h2>
						</div>
					</div>
					<div className="row">
						<div className="six wide centered center aligned column">
							<p>
								Course sub titleCourse sub titleCourse sub titleCourse sub
								titleCourse sub titleCourse sub titleCourse sub titleCourse sub
								titleCourse sub titleCourse sub titleCourse sub titleCourse sub
								titleCourse sub title
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
					<div className="row">
						<div className="center aligned column">
							<Link className="ui big primary button">Try Free Trial</Link>
						</div>
					</div>
				</section>

				{/* Price Section */}
				<section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2>Price</h2>
						</div>
					</div>
					<div className="four column row">
						<div className="column">
							<div class="ui card">
								<div class="content">
									<div class="header">Course Title</div>
								</div>
								<div class="content">
									<h4 class="ui sub header">Description</h4>
									<div class="ui small feed">
										<div class="event">
											<div class="content">
												<p>
													TexttextTexttext TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="extra content">
									<button class="ui button">$15</button>
								</div>
							</div>
						</div>
						<div className="column">
							<div class="ui card">
								<div class="content">
									<div class="header">Course Title</div>
								</div>
								<div class="content">
									<h4 class="ui sub header">Description</h4>
									<div class="ui small feed">
										<div class="event">
											<div class="content">
												<p>
													TexttextTexttext TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="extra content">
									<button class="ui button">$15</button>
								</div>
							</div>
						</div>
						<div className="column">
							<div class="ui card">
								<div class="content">
									<div class="header">Course Title</div>
								</div>
								<div class="content">
									<h4 class="ui sub header">Description</h4>
									<div class="ui small feed">
										<div class="event">
											<div class="content">
												<p>
													TexttextTexttext TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="extra content">
									<button class="ui button">$15</button>
								</div>
							</div>
						</div>
						<div className="column">
							<div class="ui card">
								<div class="content">
									<div class="header">Course Title</div>
								</div>
								<div class="content">
									<h4 class="ui sub header">Description</h4>
									<div class="ui small feed">
										<div class="event">
											<div class="content">
												<p>
													TexttextTexttext TexttextTexttextTexttTexttextTexttext
													TexttextTexttextTextt
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="extra content">
									<button class="ui button">$15</button>
								</div>
							</div>
						</div>
					</div>
					{/* Here goes Teacher Image Slider... */}
				</section>

				{/* English Article Section */}
				<section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2>Articles</h2>
						</div>
					</div>
					<div className="four column row">
						<div className="column">
							<div className="ui items">
								<div className="item">
									<div className="content">
										<h2 className="header">
											Sub Title Sub Title Sub Title Sub Title Sub Title Sub
											Title Sub Title Sub Title
										</h2>
										<div className="description">
											<p>
												TexttextTexttext TexttextTexttextTexttTexttextTexttext
												TexttextTexttextTextt TexttextTexttext
												TexttextTexttextTexttTexttextTexttext
												TexttextTexttextTextt
											</p>
										</div>
										<div style={{ margin: '15px 0' }}>
											<Link to="/" className="ui button yellow">
												View Articles
											</Link>
										</div>
									</div>
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
								<div className="extra content">
									<span class="right floated">Author Name</span>
									<span>
										<i className="comment icon" />
										22 Comments
									</span>
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
								<div className="extra content">
									<span class="right floated">Author Name</span>
									<span>
										<i className="comment icon" />
										22 Comments
									</span>
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
								<div className="extra content">
									<span class="right floated">Author Name</span>
									<span>
										<i className="comment icon" />
										22 Comments
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2>FAQ</h2>
						</div>
					</div>
					<div className="row">
						<div className="six wide centered center aligned column">
							<p style={{ fontSize: '18px' }}>
								Do you have any question? <br />
								texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
							</p>
						</div>
					</div>
					<div className="equal width row center aligned">
						<div className="column">
							<div>
								<p>
									texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
								</p>
							</div>
							<div className="ui divider" />
							<div className="centered">
								<Link to="/" className="ui button yellow basic">
									See More
								</Link>
							</div>
						</div>
						<div className="column">
							<div>
								<p>
									texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
								</p>
							</div>
							<div className="ui divider" />
							<div className="centered">
								<Link to="/" className="ui button yellow basic">
									See More
								</Link>
							</div>
						</div>
						<div className="column">
							<div>
								<p>
									texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
								</p>
							</div>
							<div className="ui divider" />
							<div className="centered">
								<Link to="/" className="ui button yellow basic">
									See More
								</Link>
							</div>
						</div>
						<div className="column">
							<div>
								<p>
									texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
								</p>
							</div>
							<div className="ui divider" />
							<Link to="/" className="ui button yellow basic">
								See More
							</Link>
						</div>
					</div>
					<div className="row centered">
						<Link to="/" className="ui big button yellow">
							View FAQ's
						</Link>
					</div>
				</section>

				{/* Contact Section */}
				{/* <section className="ui middle aligned stackable grid container margin-bottom">
					<div className="row">
						<div className="center aligned column">
							<h2>Contact</h2>
						</div>
					</div>
					<div className="row">
						<div className="nine wide column">
							<div>
								blog sub titleblog sub titleblog sub titleblog sub titleblog sub
								titleblog sub title
							</div>
							<div>
								000-0000-0000 <br />
								xxxxx@gmail.com <br />
								123-222 Granville st, Vancouver
							</div>
						</div>
						<div className="row">
							<div className="seven wide column">
								<div className="ui form">
									<div className="fields">
										<div className="field">
											<label>Name</label>
											<input type="text" placeholder="First Name" />
										</div>
										<div className="field">
											<label>Last name</label>
											<input type="text" placeholder="Last Name" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			</div>
		);
	}
}

export default Home;
