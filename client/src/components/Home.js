import React from 'react';
import Carousel from './Carousel';
import EnglishArticleCard from './EnglishArticleCard';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
	}
	componentWillMount() {
		document.querySelector('body').className = 'blogs';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	render() {
		return (
			<div>
				{/* Image Slider */}
				<div className="slides-wrap">
					<img
						className="slideImage"
						src={`${process.env.PUBLIC_URL}/images/sampleImage1.jpg`}
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
							<div className="one wide column" />
							<div className="eight wide column">
								<div className="white-text">
									About sub titleAbout sub titleAbout sub titleAbout sub
									titleAbout sub titleAbout sub titleAbout sub titleAbout sub
									titleAbout sub titleAbout sub titleAbout sub titleAbout sub
								</div>
								<div className="ui divider" />
								<p className="white-text">
									texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
								</p>
								<div className="ui four column grid">
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
							</div>
							<div className="one wide column" />
							<div className="five wide column">
								<img
									src={`${process.env.PUBLIC_URL}/images/groupPhoto.jpg`}
									className="ui image"
								/>
							</div>
						</div>
						<div className="row">
							<div className="center aligned column">
								<Link to="/about" className="ui big yellow button">
									About us
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Our Class Section */}
				<section className="content-padding">
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
										titleCourse sub titleCourse sub titleCourse sub titleCourse
										sub titleCourse sub titleCourse sub titleCourse sub
										titleCourse sub titleCourse sub title
									</p>
								</div>
							</div>
							<div className="four column row">
								<div className="column">
									<div className="ui segment">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
								<div className="column">
									<div className="ui segment">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
								<div className="column">
									<div className="ui segment">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
								<div className="column">
									<div className="ui segment">
										<img
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className=" margin red content-padding">
						<div className="ui fluid container center aligned">
							<h1 className="white-text">We have free trial! Let"s try it</h1>
							<Link to="/" className="ui big yellow button">
								Free Trial
							</Link>
						</div>
					</div>
				</section>
				{/* Price Section */}
				<section className="blueGreen content-padding">
					<div className="ui middle aligned grid container">
						<div className="row">
							<div className="center aligned column">
								<h2 className="white-text">Prices</h2>
							</div>
						</div>
						<div className="ui stackable equal width row">
							<div className="column">
								<div className="ui card centered">
									<div className="content center aligned">
										<div className="header">Course Title</div>
									</div>
									<div className="content center aligned">
										<h4 className="ui sub header">Description</h4>
										<div className="ui small feed">
											<div className="event">
												<div className="content center aligned">
													<p>
														TexttextTexttext TexttextTexttext
														TexttTexttextTexttext TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content center aligned">
										<button className="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content center aligned">
										<div className="header">Course Title</div>
									</div>
									<div className="content center aligned">
										<h4 className="ui sub header">Description</h4>
										<div className="ui small feed">
											<div className="event">
												<div className="content center aligned">
													<p>
														TexttextTexttext TexttextTexttext
														TexttTexttextTexttext TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content center aligned">
										<button className="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content center aligned">
										<div className="header">Course Title</div>
									</div>
									<div className="content center aligned">
										<h4 className="ui sub header">Description</h4>
										<div className="ui small feed">
											<div className="event">
												<div className="content center aligned">
													<p>
														TexttextTexttext TexttextTexttext
														TexttTexttextTexttext TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content center aligned">
										<button className="ui big button">$15</button>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content center aligned">
										<div className="header">Course Title</div>
									</div>
									<div className="content center aligned">
										<h4 className="ui sub header">Description</h4>
										<div className="ui small feed">
											<div className="event">
												<div className="content center aligned">
													<p>
														TexttextTexttext TexttextTexttext
														TexttTexttextTexttext TexttextTexttextTextt
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content center aligned">
										<button className="ui big button">$15</button>
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
							<div className="center aligned column">
								<Carousel />
							</div>
						</div>
					</div>
				</section>
				{/* English Article Section */}
				<section className="red content-padding">
					<div className="ui fluid container ">
						<div className="ui middle aligned grid container">
							<div className="row">
								<div className="center aligned column">
									<h2 className="white-text">English Articles</h2>
								</div>
							</div>
							<EnglishArticleCard />
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="ui container content-padding">
					<div className="ui stackable  middle aligned grid">
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
								<div className="ui card centered">
									<div className="content">
										<div className="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="header">Cute Dog</div>
										<p>
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="header">Cute Dog</div>
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
				<section className="blueGreen content-padding">
					<div className="ui fluid container">
						<div className="ui middle aligned stackable grid container">
							<div className="row">
								<div className="center aligned column">
									<h2 className="white-text">Contact us</h2>
								</div>
							</div>
							<div className="equal width row">
								<div className="center aligned column">
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
											<div className="field">
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
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { articles: state.articles };
};
export default connect(
	mapStateToProps,
	{ fetchArticles }
)(Home);
