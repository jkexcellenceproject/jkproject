import React from 'react';

class Faq extends React.Component {
	componentWillMount() {
		document.querySelector('body').className = 'blogs';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
	render() {
		return (
			<div>
				<div className="bcg-base">
					<img
						className="bcg-image"
						src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
					/>
					<div className="main-header">
						WHAT’S <span className="br">JK Education</span>
						<span className="br">FOR?</span>
					</div>
				</div>
				<div className="blueGreen content-padding">
					<div className="ui fluid container">
						<div className="ui container">
							<div className="ui grid">
								<div className="row">
									<div className="center aligned column">
										<h2 className="ui header white-text">FAQ's</h2>
									</div>
								</div>
								<div className="two column row">
									<div className="column">
										<div className="accordion">
											{/* <h3 className="header">QUESTION TITLE</h3> */}
											<input
												id="acd-check1"
												className="acd-check"
												type="checkbox"
											/>
											<label className="acd-label" for="acd-check1">
												Question
											</label>
											<div className="acd-content">
												<p>hello.world!</p>
											</div>

											<input
												id="acd-check2"
												className="acd-check"
												type="checkbox"
											/>
											<label className="acd-label" for="acd-check2">
												Question
											</label>
											<div className="acd-content">
												<p>hello.world!</p>
											</div>

											<input
												id="acd-check3"
												className="acd-check"
												type="checkbox"
											/>
											<label className="acd-label" for="acd-check3">
												Question
											</label>
											<div className="acd-content">
												<p>hello.world!</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Faq;
