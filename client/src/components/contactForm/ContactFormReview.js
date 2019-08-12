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
			// <div key={name}>
			// 	<label>{label}</label>
			// 	<div>{formValues[name]}</div>
			// </div>
			<div key={name} class="item">
				<div class="header">{label}</div>
				{formValues[name]}
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
			<div className="ui divided list container">
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
			</div>
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
