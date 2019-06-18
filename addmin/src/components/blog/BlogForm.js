import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class BlogForm extends Component {
    renderFields() {
        if(this.props.initialValues !== undefined) {
            return (
                <>
                <div className="field">
                    <label>Title</label>
                    <Field 
                        name="title"
                        component="input"
                        type="text"
                        placeholder="Title" />
                </div>
                <div className="field">
                    <label>Text</label>
                    <Field
                    name="content"
                    type="text"
                    component="input"
                    placeholder="Benedict"
                />
                </div>
                </>
            );
        } else {
            return(
                <>
                <div className="field">
                    <label>Title</label>
                    <Field 
                        name="title"
                        component="input"
                        type="text"
                        placeholder="Title" />
                </div>
                <div className="field">
                    <label>Text</label>
                    <Field
                    name="content"
                    type="text"
                    component="input"
                    placeholder="Benedict"
                />
                </div>
                </>
            )
        }
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)} className="ui form">
            {this.renderFields()}
            <button className="ui large teal button" type="submit">Submit</button>
            <Link className="ui large red button" to="/">Cancel</Link>
        </form>
        )
    }
}

export default reduxForm({
  form: 'blogForm',
  destroyOnUnmount: false
})(BlogForm);