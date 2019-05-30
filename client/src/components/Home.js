import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	render() {
		return (
			<div>
				{/* Image Slider */}
				<div id="slider-wrap">
					<ul id="slider">
						<li data-color="#1abc9c">
							<div>
								<h3>Slide #1</h3>
								<span>Sub-title #1</span>
							</div>
							<i class="fa fa-image" />
						</li>

						<li data-color="#3498db">
							<div>
								<h3>Slide #2</h3>
								<span>Sub-title #2</span>
							</div>
							<i class="fa fa-gears" />
						</li>

						<li data-color="#9b59b6">
							<div>
								<h3>Slide #3</h3>
								<span>Sub-title #3</span>
							</div>
							<i class="fa fa-sliders" />
						</li>
					</ul>
					<div class="btns" id="next">
						<i class="fa fa-arrow-right" />
					</div>
					<div class="btns" id="previous">
						<i class="fa fa-arrow-left" />
					</div>
					<div id="counter" />

					<div id="pagination-wrap">
						<ul />
					</div>
				</div>
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
							<div className="ui grid">
								<div className="four column row">
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
							<Link className="ui huge button">About us</Link>
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
							<Link className="ui huge primary button">Try Free Trial</Link>
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
								<div className="image">
									<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
								</div>
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
								<div className="image">
									<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
								</div>
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
								<div className="image">
									<img src="https://react.semantic-ui.com/images/wireframe/image.png" />
								</div>
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
			</div>
		);
	}
}

export default Home;
