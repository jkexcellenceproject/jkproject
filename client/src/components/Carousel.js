import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { fetchTutors } from '../actions/index';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

class Carousel extends React.Component {
	componentDidMount() {
		this.props.fetchTutors();
	}
	createCarouselItem = () => {
		return this.props.tutors.map(tutor => {
			return (
				<div className="centered" key={tutor.slug}>
					<img
						className="ui small circular image centered"
						src={tutor.jetpack_featured_media_url}
					/>
					<img src={tutor._embedded['wp:featuredmedia'][0].source_url} />
					<p
						className="description"
						dangerouslySetInnerHTML={{ __html: tutor.content.rendered }}
					/>
					<div className="meta">
						{tutor.title.rendered}, {tutor.acf.age} year-old, US
					</div>
				</div>
			);
		});
	};

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="carousel-wrap">
				<Slider {...settings}>{this.createCarouselItem()}</Slider>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { tutors: Object.values(state.tutors) };
};

export default connect(
	mapStateToProps,
	{ fetchTutors }
)(Carousel);
