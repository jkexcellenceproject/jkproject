import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import ContactField from './ContactField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class ContactForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			if (name === 'yourMessage') {
				return (
					<div>
						<label className="ui header blue-text">Content</label>
						<Field
							style={{ margin: '10px 0' }}
							key={name}
							component="textarea"
							type="text"
							label={label}
							name={name}
						/>
					</div>
				);
			} else
				return (
					<Field
						key={name}
						component={ContactField}
						type="text"
						label={label}
						name={name}
					/>
				);
		});
	}

	render() {
		return (
			<>
				<h2>Contact</h2>
				<form
					className="ui form segment contact-form"
					onSubmit={this.props.handleSubmit(this.props.onSubmitContact)}
				>
					{this.renderFields()}
					<div className="ui large button" onClick={this.props.reset}>
						Clear
					</div>
					<button className="ui large primary button" type="submit">
						Next
					</button>
				</form>
			</>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = (
				<div class="ui pointing green basic label">Please enter a value</div>
			);
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'reduxForm',
	destroyOnUnmount: false
})(ContactForm);
