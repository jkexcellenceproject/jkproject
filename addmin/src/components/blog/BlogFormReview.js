import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitBlog } from '../../actions/index';

class BlogFormReview extends Component {
    render() {
        const {formValues, onCancel, history} = this.props;
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
                    onClick={submitBlog(formValues, history)}
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
    {submitBlog}
)(withRouter(BlogFormReview));
