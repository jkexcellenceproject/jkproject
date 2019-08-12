import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const ContactFormReview = ({
	onCancel,
	formValues,
	submitContact,
	history
}) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} class="item">
				<div class="ui header">{`${label} : `}</div>
				{formValues[name]}
				<div className="ui divider" />
			</div>
		);
	});

	const convertJsontoUrlencoded = obj => {
		let str = [];
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
			}
		}
		return str.join('&');
	};

	return (
		<>
			<h2>Contact</h2>
			<form className="ui form segment contact-form">
				<h3 className="ui block header green">Check your statement </h3>
				<div className="ui divider" />
				{reviewFields}
				<button className="ui large button" onClick={onCancel}>
					Back
				</button>
				<button
					onClick={() =>
						submitContact(convertJsontoUrlencoded(formValues), history)
					}
					className="ui primary large button"
				>
					Submit
				</button>
			</form>
		</>
	);
};

function mapStateToProps(state) {
	console.log(state);
	return { formValues: state.form.reduxForm.values };
}

export default connect(
	mapStateToProps,
	actions
)(withRouter(ContactFormReview));
