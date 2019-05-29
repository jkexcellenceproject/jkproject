import React from 'react';
import '../styles/common.scss';
import '../styles/style.scss';

class Home extends React.Component {
	render() {
		return (
			<section className="ui container">
				<h2 className="ui centered header">About us</h2>
				<div className="ui grid">
					<div className="left floated eight wide column">
						<div>
							About sub titleAbout sub titleAbout sub titleAbout sub titleAbout
							sub titleAbout sub titleAbout sub titleAbout sub titleAbout sub
							titleAbout sub titleAbout sub titleAbout sub
						</div>
						<div class="ui divider" />
						<p style={{ wordWrap: 'break-word' }}>
							texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
						</p>
						<div className="ui grid">
							<div className="four column row">
								<div class="column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										class="ui image"
									/>
								</div>
								<div class="column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										class="ui image"
									/>
								</div>
								<div class="column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										class="ui image"
									/>
								</div>
								<div class="column">
									<img
										src="https://react.semantic-ui.com/images/wireframe/image.png"
										class="ui image"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="right floated five wide column">
						<img
							src="https://react.semantic-ui.com/images/wireframe/image.png"
							class="ui image"
						/>
					</div>
				</div>
				<div style={{ textAlign: 'center' }}>
					<button className="ui yellow button">About us</button>
				</div>
			</section>
		);
	}
}

export default Home;
