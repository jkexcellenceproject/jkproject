import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitArticleEdit } from '../../actions/index';

class ArticleEditFormReview extends Component {
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
                    onClick={submitArticleEdit(id, formValues, history)}
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
        return { formValues: state.form.articleForm.values };
    }
}

export default connect(
    mapStateToProps,
    {submitArticleEdit}
)(withRouter(ArticleEditFormReview));