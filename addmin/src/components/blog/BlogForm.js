import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class BlogForm extends Component {
    clickClose() {
        document.getElementById('add-form').className='';
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)} className="ui form">
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
                id="first-name"
                placeholder="Benedict"
              />
            </div>
            <button className="ui large teal button" type="submit">Submit</button>
            <Link className="ui large red button" to="/">Cancel</Link>
        </form>
        )
    }
}

export default reduxForm({
  form: 'blogForm'
})(BlogForm);