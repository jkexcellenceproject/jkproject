import React from 'react';
import PriceCard from './PriceCard';
import { Link } from 'react-router-dom';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	render() {
		return (
			<div>
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
							<p style={{ wordWrap: 'break-word' }}>
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
						<PriceCard />
						<PriceCard />
						<PriceCard />
						<PriceCard />
					</div>
					{/* <div className="row">

					</div> */}
				</section>
			</div>
		);
	}
}

export default Home;
