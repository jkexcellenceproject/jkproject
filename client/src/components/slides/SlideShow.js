import React from 'react';
import { connect } from 'react-redux';
import { fetchTutors } from '../../actions';

import './slides.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';

class SlideShow extends React.Component {
	componentDidMount() {
		this.props.fetchTutors();
		this.changeSlide();
	}

	changeSlide() {
		const images = document.querySelectorAll('.slides-wrap');
		const imagesLength = images.length;
		let count = 0;
		function timer() {
			images[count].classList.remove('showSlide');
			count = (count + 1) % imagesLength;
			images[count].classList.add('showSlide');
		}
		setInterval(timer, 4000);
	}

	createCarouselItem = () => {
		return this.props.tutors.map(tutor => {
			if (tutor == null) {
				console.log('tutor');
				return <div>loading</div>;
			}
			return (
				<div key={tutor.slug}>
					<img src={tutor.jetpack_featured_media_url} />
					<img
						className="ui medium circular image centered"
						src={tutor._embedded['wp:featuredmedia'][0].source_url}
					/>
					<h4
						className="description"
						dangerouslySetInnerHTML={{ __html: tutor.content.rendered }}
					/>

					<div className="meta centered">
						{tutor.title.rendered}, {tutor.acf.age} year-old, US
					</div>
				</div>
			);
		});
	};

	render() {
		if (this.props.for == 'topPage') {
			return (
				<ul id="slideShow" className="slideShow">
					<li className="slides-wrap showSlide">
						<img
							className="slideImage"
							src={`${process.env.PUBLIC_URL}/images/sampleImage1.jpg`}
						/>
					</li>
					<li className="slides-wrap ">
						<img
							className="slideImage "
							src={`${process.env.PUBLIC_URL}/images/sampleImage4.jpg`}
						/>
					</li>
					<li className="slides-wrap">
						<img
							className="slideImage"
							src={`${process.env.PUBLIC_URL}/images/sampleImage5.jpg`}
						/>
					</li>
				</ul>
			);
		} else if (this.props.for == 'tutors') {
			return (
				<div className="carousel-wrap">
					<Slider>{this.createCarouselItem()}</Slider>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return { tutors: Object.values(state.tutors) };
};

export default connect(
	mapStateToProps,
	{ fetchTutors }
)(SlideShow);
