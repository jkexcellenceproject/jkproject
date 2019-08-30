import React from 'react';
import SlideShow from './slides/SlideShow';
import EnglishArticleCard from './EnglishArticleCard';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchArticles();
		document.querySelector('.nav-bar').classList.remove('shrink-nav-bar');
		document.querySelector('body').className = 'home';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
		document.querySelector('.nav-bar').classList.add('shrink-nav-bar');
	}

	render() {
		return (
			<div id="home">
				{/* Image Slider */}
				<SlideShow for="topPage" />
				{/* About us Section */}
				<section className="content-padding blueGreen">
					<div className="ui middle aligned stackable grid container">
						<h2 className="white-text">About us</h2>
						<div className="row">
							<div className="one wide column" />
							<div data-aos="fade-right" className="eight wide column">
								<h3 className="white-text" style={{ marginBottom: '10px' }}>
									Lorem ipsum dolor sit amet
								</h3>
								<p className="white-text" style={{ marginBottom: '30px' }}>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
									quia voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi
									nesciunt.
								</p>
								<div className="ui four column grid">
									<div className="column">
										<img
											data-aos="fade-up"
											data-aos-delay="450"
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											data-aos="fade-up"
											data-aos-delay="500"
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											data-aos="fade-up"
											data-aos-delay="550"
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
									<div className="column">
										<img
											data-aos="fade-up"
											data-aos-delay="600"
											src="https://react.semantic-ui.com/images/wireframe/image.png"
											className="ui image"
										/>
									</div>
								</div>
							</div>
							<div className="one wide column" />
							<div className="five wide column">
								<img
									data-aos="fade-left"
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
				<section className="content-padding" style={{ paddingBottom: '0' }}>
					<div className="ui container">
						<div className="ui middle aligned stackable grid">
							<h2 className="blue-text">Our Class</h2>
							<div className="row">
								<div className="six wide centered center aligned column">
									<p data-aos="fade-up" className="blue-text">
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore veritatis et
										quasi architecto beatae vitae dicta sunt explicabo.
									</p>
								</div>
							</div>
							<div className="four column row">
								<div className="column">
									<img
										data-aos="fade-up"
										data-aos-delay="100"
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui image "
									/>
								</div>
								<div className="column">
									<img
										data-aos="fade-up"
										data-aos-delay="200"
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui image"
									/>
								</div>
								<div className="column">
									<img
										data-aos="fade-up"
										data-aos-delay="300"
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui image"
									/>
								</div>
								<div className="column">
									<img
										data-aos="fade-up"
										data-aos-delay="400"
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										className="ui image"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className=" margin red content-padding">
						<div className="ui fluid container center aligned ">
							<h1 className="white-text">We have free trial! Let's try it</h1>
							<Link to="/contact" className="ui big yellow button">
								Free Trial
							</Link>
						</div>
					</div>
				</section>

				{/* Tutor Section */}
				<section className="blueGreen content-padding">
					<div className="ui center aligned container">
						<h2 className="white-text">Our tutors</h2>
						<SlideShow for="tutors" />
					</div>
				</section>
				{/* English Article Section */}
				<section className="red content-padding">
					<div className="ui fluid container ">
						<h2 className="white-text">English Articles</h2>
						<EnglishArticleCard />
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
								<p data-aos="fade-up" className="blue-text">
									Do you have any question? <br />
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium
								</p>
							</div>
						</div>
						<div className="equal width row center aligned">
							<div data-aos="fade-up" data-aos-delay="200" className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="faq-title header ">Lorem Ipsum?</div>
										<p className="blue-text">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem
										</p>
									</div>
								</div>
							</div>
							<div data-aos="fade-up" data-aos-delay="250" className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="faq-title header">Lorem Ipsum?</div>
										<p className="blue-text">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem
										</p>
									</div>
								</div>
							</div>
							<div data-aos="fade-up" data-aos-delay="300" className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="faq-title header">Lorem Ipsum?</div>
										<p className="blue-text">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem
										</p>
									</div>
								</div>
							</div>
							<div data-aos="fade-up" data-aos-delay="350" className="column">
								<div className="ui card centered">
									<div className="content">
										<div className="faq-title header">Lorem Ipsum?</div>
										<p className="blue-text">
											texttexttexttexttexttexttexttexttexttexttexttexttexttextt?
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row centered">
							<Link to="/faq" className="ui big button yellow">
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
									<h2 className="white-text">Contact </h2>
								</div>
							</div>
							<div className="equal width row">
								<div className="center aligned column">
									<h3 className="white-text">
										If you think you’ve got what we’re looking for please feel
										free to ask about anything! <br /> Do not hesitate!
									</h3>
									<p className="white-text">
										000-0000-0000 <br />
										xxxxx@gmail.com <br />
										123-222 Granville st, Vancouver
									</p>
								</div>
							</div>
							<div className="row centered">
								<Link to="/contact" className="ui big button yellow">
									Contact us!
								</Link>
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
