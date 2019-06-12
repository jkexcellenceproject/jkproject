import React from 'react';
import ReactSiema from 'react-siema';

class Carousel extends React.Component {
	state = {
		datas: [
			{
				name: 'Kano',
				age: 38,
				image: `${process.env.PUBLIC_URL}/images/avator1.png`
			},
			{
				name: 'YOoo',
				age: 23,
				image: `${process.env.PUBLIC_URL}/images/avator2.png`
			},
			{
				name: 'G.R',
				age: 90,
				image: `${process.env.PUBLIC_URL}/images/avator3.png`
			}
		]
	};

	createCarouselItem = datas => {
		const item = this.state.datas.map(data => {
			return (
				<div className="carousel-item">
					<img class="ui small circular image" src={data.image} />
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
			<div class="carousel-item">
				<ReactSiema duration="400" loop={true} ref={siema => (slider = siema)}>
					{this.createCarouselItem(this.state.datas)}
				</ReactSiema>
				<button className="button left" onClick={() => slider.prev()} />
				<button className="button right" onClick={() => slider.next()} />
			</div>
		);
	}
}

export default Carousel;
