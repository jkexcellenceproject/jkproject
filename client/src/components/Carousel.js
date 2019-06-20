import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';


class Carousel extends React.Component {
	createCarouselItem = () => {
		return this.props.datas.map(data => {
			return (
				<div className="centered" key={data.name}>
					<img className="ui small circular image centered" src={data.image} />
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
	return { datas: state.datas };
};

export default connect(mapStateToProps)(Carousel);
