import React, { Component } from 'react';

class StudentInterview extends Component {
	state = {
		students: [
			{
				id: 1,
				name: 'Lorem ipsum',
				title: 'mattis ullamcorper',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere. A scelerisque purus semper eget duis at tellus at urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam. Rutrum quisque non tellus orci. Magna eget est lorem ipsum dolor. Et odio pellentesque diam volutpat commodo sed egestas egestas. Consequat interdum varius sit amet mattis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dictumst vestibulum rhoncus est pellentesque elit.'
			},
			{
				id: 2,
				name: 'Student Name',
				title: 'mattis ullamcorper',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere. A scelerisque purus semper eget duis at tellus at urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam. Rutrum quisque non tellus orci. Magna eget est lorem ipsum dolor. Et odio pellentesque diam volutpat commodo sed egestas egestas. Consequat interdum varius sit amet mattis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dictumst vestibulum rhoncus est pellentesque elit.'
			},
			{
				id: 3,
				name: 'Student Name',
				title: 'mattis ullamcorper',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere. A scelerisque purus semper eget duis at tellus at urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam. Rutrum quisque non tellus orci. Magna eget est lorem ipsum dolor. Et odio pellentesque diam volutpat commodo sed egestas egestas. Consequat interdum varius sit amet mattis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dictumst vestibulum rhoncus est pellentesque elit.'
			},
			{
				id: 4,
				name: 'Student Name',
				title: 'mattis ullamcorper',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere. A scelerisque purus semper eget duis at tellus at urna. Augue ut lectus arcu bibendum at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Ut pharetra sit amet aliquam id diam maecenas ultricies. Arcu odio ut sem nulla pharetra diam. Rutrum quisque non tellus orci. Magna eget est lorem ipsum dolor. Et odio pellentesque diam volutpat commodo sed egestas egestas. Consequat interdum varius sit amet mattis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Dictumst vestibulum rhoncus est pellentesque elit.'
			}
		]
	};
	componentDidMount() {
		document.querySelector('body').className = 'student-interview';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
	renderList() {
		return this.state.students.map(({ id, name, title, content }) => {
			return (
				<div key={id} className="doubling two column row interview-content">
					<div className="four wide column">
						<img
							className="ui medium circular image"
							src="https://dummyimage.com/150x150/ccc/fff"
						/>
					</div>
					<div className="twelve wide column student-info">
						<h3>{name}</h3>
						<h4>{title}</h4>
						<p>{content}</p>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<section className="ui fluid main-visual">
					<div className="bcg-base container">
						<img
							className="bcg-image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
						/>
						<div className="main-header">
							<h1 data-aos="fade-up">
								Our Students
								<span data-aos-delay="250" className="br">
									Interview
								</span>
							</h1>
						</div>
					</div>
				</section>

				<section className="ui fluid blueGreen content-padding">
					<div className="ui center aligned container">
						<div className="ui grid">
							<h2 className="white-text">Student Interview</h2>

							{this.renderList()}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default StudentInterview;
