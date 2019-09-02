import React from 'react';
import { connect } from 'react-redux';
import { fetchTutors } from '../../actions';

import './slides.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';

class SlideShow extends React.Component {
	componentDidMount() {
		if (this.props.for == 'topPage') {
			this.changeSlide();
		} else if (this.props.for == 'tutors') {
			this.props.fetchTutors();
		}
	}

	changeSlide() {
		const images = document.querySelectorAll('.slides-wrap');
		const imagesLength = images.length;
		let count = 0;
		if (images) {
			function timer() {
				images[count].classList.remove('showSlide');
				count = (count + 1) % imagesLength;
				images[count].classList.add('showSlide');
			}
			setInterval(timer, 3500);
		}
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
						data-aos="fade-up"
						className="ui medium circular image centered"
						src={tutor._embedded['wp:featuredmedia'][0].source_url}
					/>
					<h4
						data-aos="fade-up"
						className="description"
						dangerouslySetInnerHTML={{ __html: tutor.content.rendered }}
					/>

					<div data-aos="fade-up" className="meta centered">
						{tutor.title.rendered}, {tutor.acf.age} year-old, {tutor.acf.place}
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
							src={`${process.env.PUBLIC_URL}/images/sampleImage1.png`}
						/>
					</li>
					<li className="slides-wrap ">
						<img
							className="slideImage "
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.png`}
						/>
					</li>
					<li className="slides-wrap">
						<img
							className="slideImage"
							src={`${process.env.PUBLIC_URL}/images/sampleImage3.png`}
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
