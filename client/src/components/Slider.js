import React from 'react';

class Slider extends React.Component {
	render() {
		return (
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
		);
	}
}

export default Slider;
