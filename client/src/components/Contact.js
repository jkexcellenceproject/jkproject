import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ContactForm from './contactForm/ContactForm';
import ContactFormReview from './contactForm/ContactFormReview';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { showFormReview: false };
	}
	componentDidMount() {
		document.querySelector('body').className = 'contact';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<ContactFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<ContactForm
				onSubmitContact={() => this.setState({ showFormReview: true })}
			/>
		);
	}
	render() {
		return (
			<>
				<section className="ui fluid main-visual">
					<div className="bcg-base">
						<img
							className="bcg-image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage2.jpg`}
						/>
						<div className="main-header">
							<h1>
								Contact Us
							</h1>
						</div>
					</div>
				</section>
				<section className="content-padding blueGreen">
					{this.renderContent()}
				</section>
			</>
		);
	}
}

export default reduxForm({
	form: 'contactForm'
})(Contact);
