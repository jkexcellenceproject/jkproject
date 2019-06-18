import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitBlogEdit } from '../../actions/index';

class BlogEditFormReview extends Component {
    render() {
        const {id, formValues, onCancel, history} = this.props;
        return(
            <div>
                <h5>Place confirm your entries</h5>
                {formValues.title}
                <button
                    className="yellow white-text darken-3 btn-flat"
                    onClick={onCancel}
                >
                    Back
                </button>
                <button 
                    onClick={submitBlogEdit(id, formValues, history)}
                    className="green white-text btn-flat right">
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    if(Object.keys(state.form).length !== 0) {
        return { formValues: state.form.blogForm.values };
    }
}

export default connect(
    mapStateToProps,
    {submitBlogEdit}
)(withRouter(BlogEditFormReview));