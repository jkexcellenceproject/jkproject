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
            return <Field key={name} component={ContactField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
          <>
                  <h2>Contact</h2>
                  <form className="ui form container" onSubmit={this.props.handleSubmit(this.props.onSubmitContact)}
                >
                    {this.renderFields()}

                    <Link className="ui button" to="/contact">
                        Cancel
                    </Link>
                    <button className="ui button" type="submit">
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
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'reduxForm',
    destroyOnUnmount: false
})(ContactForm);