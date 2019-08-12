import React, { Component } from 'react';

class StudentInterview extends Component {
	state = {
		students: [
			{
				id:1,
				name: 'Student Name',
				title:'texttexttexttexttexttexttexttexttexttext',
				content:'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
			},
			{
				id:2,
				name: 'Student Name',
				title:'texttexttexttexttexttexttexttexttexttext',
				content:'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
			},
			{
				id:3,
				name: 'Student Name',
				title:'texttexttexttexttexttexttexttexttexttext',
				content:'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
			},
			{
				id:4,
				name: 'Student Name',
				title:'texttexttexttexttexttexttexttexttexttext',
				content:'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'
			},
		]
	}
	componentDidMount() {
		document.querySelector('body').className = 'student-interview';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
	renderList() {
		return this.state.students.map(({id, name, title, content}) => {
			return(
				<div key={id} className="stackable two column row interview-content">
					<div className="four wide column">
						<img className="ui medium circular image" src="https://dummyimage.com/150x150/ccc/fff" />
					</div>
					<div className="twelve wide column student-info">
						<h3>{name}</h3>
						<h4>
							{title}
						</h4>
						<p>
							{content}
						</p>
					</div>
				</div>
			);
		})
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
							<h1>
								Our Students<span className="br">Interview</span>
							</h1>
						</div>
					</div>
				</section>
	
				<section className="ui fluid blueGreen content-padding">
					<div className="ui center aligned container">
						<div className="ui grid">
							<div className="row centered">
								<h2 className="header white-text">Student Interview</h2>
							</div>
							
							{this.renderList()}
						</div>
					</div>
				</section>
			</div>
		);
	}
};

export default StudentInterview;
